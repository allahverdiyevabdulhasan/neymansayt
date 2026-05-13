from django.db import models

class HomeHero(models.Model):
    badge_text = models.CharField(max_length=100)
    title = models.CharField(max_length=255, help_text="Məs: Biznesinizi <span>gücləndirən</span> texniki həllər")
    description = models.TextField()
    hero_image = models.ImageField(upload_to='home/')
    
    class Meta:
        verbose_name = "Ana Səhifə Hero"
        verbose_name_plural = "Ana Səhifə Hero"

class HomeAbout(models.Model):
    title = models.CharField(max_length=255)
    description = models.TextField()
    quote = models.TextField()
    
    class Meta:
        verbose_name = "Ana Səhifə Haqqında"
        verbose_name_plural = "Ana Səhifə Haqqında"

class HomeStat(models.Model):
    value = models.CharField(max_length=50)
    label = models.CharField(max_length=100)
    order = models.PositiveIntegerField(default=0)

    class Meta:
        ordering = ['order']
        verbose_name = "Ana Səhifə Statistika"
        verbose_name_plural = "Ana Səhifə Statistikaları"

class WorkProcessStep(models.Model):
    number = models.CharField(max_length=10)
    title = models.CharField(max_length=200)
    description = models.TextField()
    duration = models.CharField(max_length=100)
    deliverables = models.JSONField()
    order = models.PositiveIntegerField(default=0)

    class Meta:
        ordering = ['order']
        verbose_name = "İş Prosesi Mərhələsi"
        verbose_name_plural = "İş Prosesi Mərhələləri"

class GlobalCTA(models.Model):
    badge_text = models.CharField(max_length=100)
    title = models.CharField(max_length=255)
    description = models.TextField()
    
    class Meta:
        verbose_name = "Qlobal CTA"
        verbose_name_plural = "Qlobal CTA"

class Partner(models.Model):
    name = models.CharField(max_length=200, verbose_name="Partnyor Adı")
    industry = models.CharField(max_length=150, verbose_name="Sektor")
    description = models.TextField(verbose_name="Qısa Təsvir")
    logo = models.ImageField(upload_to='partners/', verbose_name="Loqo Şəkli")
    website = models.URLField(verbose_name="Vebsayt", blank=True, null=True)
    since_year = models.CharField(max_length=4, verbose_name="Əməkdaşlıq İlə", default="2020")
    order = models.PositiveIntegerField(default=0, verbose_name="Sıralama")

    class Meta:
        ordering = ['order']
        verbose_name = "Partnyor/Brend"
        verbose_name_plural = "Partnyorlar və Brendlər"

    def __str__(self):
        return self.name
