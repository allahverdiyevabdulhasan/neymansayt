from django.db import models

class CRMFeature(models.Model):
    title = models.CharField(max_length=200)
    description = models.TextField()
    icon_name = models.CharField(max_length=100)
    order = models.PositiveIntegerField(default=0)

    class Meta:
        ordering = ['order']
        verbose_name = "CRM Xüsusiyyəti"
        verbose_name_plural = "CRM Xüsusiyyətləri"

class CRMPricingPlan(models.Model):
    name = models.CharField(max_length=100)
    subtitle = models.CharField(max_length=200)
    price = models.CharField(max_length=50)
    period = models.CharField(max_length=50, default="₼/ay")
    is_popular = models.BooleanField(default=False)
    cta_text = models.CharField(max_length=50, default="Başla")
    features = models.JSONField(help_text="Xüsusiyyətlər siyahısı (JSON formatında)")
    order = models.PositiveIntegerField(default=0)

    class Meta:
        ordering = ['order']
        verbose_name = "CRM Qiymət Paketi"
        verbose_name_plural = "CRM Qiymət Paketləri"

class CRMStat(models.Model):
    main_percentage = models.CharField(max_length=20)
    label = models.CharField(max_length=100)
    school_count = models.CharField(max_length=50)
    student_count = models.CharField(max_length=50)
    
    class Meta:
        verbose_name = "CRM Statistika"
        verbose_name_plural = "CRM Statistikaları"

class CRMBenefit(models.Model):
    text = models.CharField(max_length=255)
    order = models.PositiveIntegerField(default=0)

    class Meta:
        ordering = ['order']
        verbose_name = "CRM Üstünlüyü"
        verbose_name_plural = "CRM Üstünlükləri"
