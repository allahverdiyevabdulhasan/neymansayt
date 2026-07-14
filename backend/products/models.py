from django.db import models
from django.utils.text import slugify

class Product(models.Model):
    title = models.CharField(max_length=200, verbose_name="Məhsul adı")
    subtitle = models.CharField(max_length=300, verbose_name="Altbaşlıq", blank=True)
    slug = models.SlugField(unique=True, blank=True)
    description = models.TextField(verbose_name="Təsvir")
    image = models.ImageField(upload_to="products/", verbose_name="Şəkil", null=True, blank=True)
    
    # Design specifics
    theme_color = models.CharField(max_length=50, default="blue", verbose_name="Mövzu rəngi (Məs: blue, emerald)")
    font_family = models.CharField(max_length=50, default="Inter", verbose_name="Şrift (Məs: Inter, Poppins)")
    navbar_logo = models.ImageField(upload_to="products/logos/", verbose_name="Xüsusi Navbar Loqosu", null=True, blank=True)
    
    # Hero CTA
    cta_text = models.CharField(max_length=100, default="Demo Sifariş Et", verbose_name="Əsas düymə mətni")
    cta_link = models.CharField(max_length=200, default="#demo", verbose_name="Əsas düymə linki")
    secondary_cta_text = models.CharField(max_length=100, default="Qiymətlərə Bax", verbose_name="İkinci düymə mətni")
    secondary_cta_link = models.CharField(max_length=200, default="#pricing", verbose_name="İkinci düymə linki")
    
    demo_link = models.URLField(verbose_name="Demo linki", blank=True, null=True)
    order = models.PositiveIntegerField(default=0, verbose_name="Sıralama")
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ['order', '-created_at']
        verbose_name = "Məhsul"
        verbose_name_plural = "Məhsullar"

    def save(self, *args, **kwargs):
        if not self.slug:
            self.slug = slugify(self.title)
        super().save(*args, **kwargs)

    def __str__(self):
        return self.title

class ProductNavbarLink(models.Model):
    product = models.ForeignKey(Product, on_delete=models.CASCADE, related_name="navbar_links")
    label = models.CharField(max_length=100, verbose_name="Menyu Adı")
    href = models.CharField(max_length=200, verbose_name="Link (Məs: #features)")
    order = models.PositiveIntegerField(default=0, verbose_name="Sıralama")

    class Meta:
        ordering = ['order']

    def __str__(self):
        return self.label

class ProductFeature(models.Model):
    product = models.ForeignKey(Product, on_delete=models.CASCADE, related_name="features")
    icon = models.CharField(max_length=50, verbose_name="İkon (Məs: FaBolt)")
    title = models.CharField(max_length=200, verbose_name="Başlıq")
    description = models.TextField(verbose_name="Təsvir")
    order = models.PositiveIntegerField(default=0, verbose_name="Sıralama")

    class Meta:
        ordering = ['order']

    def __str__(self):
        return self.title

class ProductBenefit(models.Model):
    product = models.ForeignKey(Product, on_delete=models.CASCADE, related_name="benefits")
    icon = models.CharField(max_length=50, verbose_name="İkon (Məs: FaCheckCircle)")
    title = models.CharField(max_length=200, verbose_name="Başlıq")
    description = models.TextField(verbose_name="Təsvir")
    order = models.PositiveIntegerField(default=0, verbose_name="Sıralama")

    class Meta:
        ordering = ['order']

    def __str__(self):
        return self.title

class ProductStat(models.Model):
    product = models.ForeignKey(Product, on_delete=models.CASCADE, related_name="stats")
    value = models.CharField(max_length=50, verbose_name="Rəqəm (Məs: 10K+)")
    label = models.CharField(max_length=200, verbose_name="Başlıq (Məs: Aktiv İstifadəçi)")
    order = models.PositiveIntegerField(default=0, verbose_name="Sıralama")

    class Meta:
        ordering = ['order']

    def __str__(self):
        return self.label

class ProductPricing(models.Model):
    product = models.ForeignKey(Product, on_delete=models.CASCADE, related_name="pricing_plans")
    name = models.CharField(max_length=100, verbose_name="Paket adı")
    price = models.CharField(max_length=50, verbose_name="Qiymət (Məs: 99₼)")
    period = models.CharField(max_length=50, verbose_name="Müddət (Məs: /aylıq)", blank=True)
    description = models.TextField(verbose_name="Təsvir")
    features = models.TextField(verbose_name="Xüsusiyyətlər (hər sətirə bir dənə)")
    is_popular = models.BooleanField(default=False, verbose_name="Ən çox seçiləndir?")
    order = models.PositiveIntegerField(default=0, verbose_name="Sıralama")

    class Meta:
        ordering = ['order']

    def __str__(self):
        return self.name
