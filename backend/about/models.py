from django.db import models

class AboutContent(models.Model):
    hero_title = models.CharField(max_length=255)
    hero_description = models.TextField()
    hero_image = models.ImageField(upload_to='about/')
    vision_title = models.CharField(max_length=255)
    vision_description = models.TextField()
    mission_title = models.CharField(max_length=255)
    mission_description = models.TextField()
    quote_text = models.TextField()
    quote_author = models.CharField(max_length=100)
    quote_role = models.CharField(max_length=100)
    
    class Meta:
        verbose_name = "Haqqımızda Məzmun"
        verbose_name_plural = "Haqqımızda Məzmun"

class Advantage(models.Model):
    title = models.CharField(max_length=200)
    description = models.TextField()
    order = models.PositiveIntegerField(default=0)

    class Meta:
        ordering = ['order']
        verbose_name = "Üstünlük"
        verbose_name_plural = "Üstünlüklərimiz"

class AboutStat(models.Model):
    value = models.CharField(max_length=50)
    label = models.CharField(max_length=100)
    order = models.PositiveIntegerField(default=0)

    class Meta:
        ordering = ['order']
        verbose_name = "Haqqımızda Statistika"
        verbose_name_plural = "Haqqımızda Statistikaları"

class FAQ(models.Model):
    question = models.CharField(max_length=255)
    answer = models.TextField()
    order = models.PositiveIntegerField(default=0)

    class Meta:
        ordering = ['order']
        verbose_name = "FAQ"
        verbose_name_plural = "FAQ"
