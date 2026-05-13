from django.contrib import admin
from modeltranslation.admin import TranslationAdmin
from .models import Blog

@admin.register(Blog)
class BlogAdmin(TranslationAdmin):
    list_display = ('title_az', 'author', 'created_at', 'is_featured')
    list_editable = ('is_featured',)
    prepopulated_fields = {'slug': ('title_az',)}
