from django.db import models

class OrderTracking(models.Model):
    tracking_code = models.CharField(max_length=50, unique=True, verbose_name="İzləmə kodu")
    client_name = models.CharField(max_length=200, verbose_name="Müştəri")
    project_name = models.CharField(max_length=200, verbose_name="Layihə adı")
    current_step = models.CharField(max_length=100, verbose_name="Cari mərhələ")
    progress_percentage = models.PositiveIntegerField(default=0, verbose_name="Proqres (%)")
    status_note = models.TextField(verbose_name="Vəziyyət qeydi", blank=True)
    is_active = models.BooleanField(default=True, verbose_name="Aktiv")
    steps_data = models.JSONField(default=list, help_text="Mərhələlərin siyahısı: [{'name': '...', 'completed': true/false/'active'}]")

    class Meta:
        verbose_name = "Layihə İzləmə"
        verbose_name_plural = "Layihə İzləmələri"

    def __str__(self):
        return f"{self.tracking_code} - {self.project_name}"
