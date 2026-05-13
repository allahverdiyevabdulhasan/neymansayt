from django.db import models
from django.utils.text import slugify

class Blog(models.Model):
    title = models.CharField(max_length=200, verbose_name="Başlıq")
    slug = models.SlugField(unique=True, blank=True)
    excerpt = models.TextField(verbose_name="Qısa xülasə")
    content = models.TextField(verbose_name="Məzmun")
    image = models.ImageField(upload_to='blogs/', verbose_name="Şəkil")
    author = models.CharField(max_length=100, default="Neyman Admin", verbose_name="Müəllif")
    created_at = models.DateTimeField(auto_now_add=True, verbose_name="Tarix")
    is_featured = models.BooleanField(default=False, verbose_name="Ana səhifədə göstər?")

    class Meta:
        ordering = ['-created_at']
        verbose_name = "Xəbər / Bloq"
        verbose_name_plural = "Xəbərlər"

    def save(self, *args, **kwargs):
        if not self.slug:
            self.slug = slugify(self.title)
        super().save(*args, **kwargs)

    def __str__(self):
        return self.title
