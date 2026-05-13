from django.contrib import admin
from modeltranslation.admin import TranslationAdmin
from .models import Service

@admin.register(Service)
class ServiceAdmin(TranslationAdmin):
    list_display = ('title_az', 'price_az', 'is_featured', 'order')
    list_editable = ('is_featured', 'order')
    prepopulated_fields = {'slug': ('title_az',)}
