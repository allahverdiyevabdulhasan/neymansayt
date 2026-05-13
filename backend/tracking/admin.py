from django.contrib import admin
from modeltranslation.admin import TranslationAdmin
from .models import OrderTracking

@admin.register(OrderTracking)
class OrderTrackingAdmin(TranslationAdmin):
    list_display = ('tracking_code', 'project_name', 'client_name', 'current_step_az', 'progress_percentage', 'is_active')
    list_editable = ('progress_percentage', 'is_active')
    search_fields = ('tracking_code', 'project_name', 'client_name')
