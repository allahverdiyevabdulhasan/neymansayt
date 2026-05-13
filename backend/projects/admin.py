from django.contrib import admin
from modeltranslation.admin import TranslationAdmin
from .models import Project, ProjectImage

class ProjectImageInline(admin.TabularInline):
    model = ProjectImage
    extra = 3

@admin.register(Project)
class ProjectAdmin(TranslationAdmin):
    list_display = ('title_az', 'category_az', 'is_featured', 'order')
    list_editable = ('is_featured', 'order')
    prepopulated_fields = {'slug': ('title_az',)}
    inlines = [ProjectImageInline]
