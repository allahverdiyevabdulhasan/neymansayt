from django.db import models
from django.utils.text import slugify

class Service(models.Model):
    title = models.CharField(max_length=200, verbose_name="Başlıq")
    slug = models.SlugField(unique=True, blank=True)
    description = models.TextField(verbose_name="Qısa təsvir")
    icon_name = models.CharField(max_length=100, help_text="React-icon adı (məs: FaCode)", verbose_name="İkon")
    content = models.TextField(verbose_name="Ətraflı məzmun", help_text="Daxili səhifə üçün")
    price = models.CharField(max_length=100, verbose_name="Qiymət")
    duration = models.CharField(max_length=100, verbose_name="Müddət")
    deliverables = models.TextField(verbose_name="Nələr daxildir (bir sətirdə bir)", blank=True, help_text="Hər bir maddəni yeni sətirdən yazın")
    tech_stack = models.TextField(verbose_name="Texnologiya steki (vergüllə ayrılmış)", blank=True, help_text="Məs: React, NestJS, MongoDB")
    is_featured = models.BooleanField(default=False, verbose_name="Ana səhifədə göstər?")
    order = models.PositiveIntegerField(default=0, verbose_name="Sıralama")

    class Meta:
        ordering = ['order']
        verbose_name = "Xidmət"
        verbose_name_plural = "Xidmətlər"

    def save(self, *args, **kwargs):
        if not self.slug:
            self.slug = slugify(self.title)
        super().save(*args, **kwargs)

    def __str__(self):
        return self.title
