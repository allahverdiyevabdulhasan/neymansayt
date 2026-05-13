from django.db import models

class ContactMessage(models.Model):
    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)
    email = models.EmailField()
    phone = models.CharField(max_length=100)
    subject = models.CharField(max_length=200)
    message = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        verbose_name = "Əlaqə Mesajı"
        verbose_name_plural = "Əlaqə Mesajları"

class ContactInfo(models.Model):
    address = models.CharField(max_length=255)
    phone = models.CharField(max_length=100)
    email = models.EmailField()
    lat = models.CharField(max_length=50)
    lng = models.CharField(max_length=50)
    working_hours = models.CharField(max_length=200)
    
    class Meta:
        verbose_name = "Əlaqə Məlumatı"
        verbose_name_plural = "Əlaqə Məlumatları"

class SocialMedia(models.Model):
    platform_name = models.CharField(max_length=100)
    url = models.URLField()
    icon_name = models.CharField(max_length=100)
    
    class Meta:
        verbose_name = "Sosial Şəbəkə"
        verbose_name_plural = "Sosial Şəbəkələr"
