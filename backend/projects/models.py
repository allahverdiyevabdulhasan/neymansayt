from django.db import models
from django.utils.text import slugify

class Project(models.Model):
    title = models.CharField(max_length=200, verbose_name="Layihə adı")
    slug = models.SlugField(unique=True, blank=True)
    category = models.CharField(max_length=100, verbose_name="Kateqoriya")
    description = models.TextField(verbose_name="Qısa təsvir")
    thumbnail = models.ImageField(upload_to='projects/thumbnails/', verbose_name="Əsas şəkil")
    content = models.TextField(verbose_name="Layihə haqqında ətraflı", blank=True)
    problem = models.TextField(verbose_name="Problem", blank=True)
    solution = models.TextField(verbose_name="Həll", blank=True)
    technologies = models.TextField(verbose_name="Texnologiyalar (vergüllə ayrılmış)", blank=True, help_text="Məs: React, Django, AWS")
    client_name = models.CharField(max_length=200, verbose_name="Müştəri", blank=True)
    completion_date = models.CharField(max_length=100, verbose_name="Tamamlanma tarixi", blank=True)
    website_url = models.URLField(verbose_name="Vebsayt linki", blank=True)
    testimonial_quote = models.TextField(verbose_name="Müştəri rəyi", blank=True)
    testimonial_author = models.CharField(max_length=200, verbose_name="Rəy müəllifi", blank=True)
    testimonial_role = models.CharField(max_length=200, verbose_name="Müəllifin vəzifəsi", blank=True)
    is_featured = models.BooleanField(default=False, verbose_name="Ana səhifədə göstər?")
    order = models.PositiveIntegerField(default=0, verbose_name="Sıralama")

    class Meta:
        ordering = ['order']
        verbose_name = "Layihə"
        verbose_name_plural = "Layihələr"

    def save(self, *args, **kwargs):
        if not self.slug:
            self.slug = slugify(self.title)
        super().save(*args, **kwargs)

    def __str__(self):
        return self.title

class ProjectImage(models.Model):
    project = models.ForeignKey(Project, related_name='images', on_delete=models.CASCADE)
    image = models.ImageField(upload_to='projects/gallery/')
    
    class Meta:
        verbose_name = "Layihə Şəkli"
        verbose_name_plural = "Layihə Qalereyası"
