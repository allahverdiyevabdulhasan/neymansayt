from django.contrib import admin
from modeltranslation.admin import TranslationAdmin
from .models import ContactMessage, ContactInfo, SocialMedia

@admin.register(ContactMessage)
class ContactMessageAdmin(admin.ModelAdmin):
    list_display = ('first_name', 'last_name', 'email', 'phone', 'subject', 'created_at')
    readonly_fields = ('first_name', 'last_name', 'email', 'phone', 'subject', 'message', 'created_at')

@admin.register(ContactInfo)
class ContactInfoAdmin(TranslationAdmin):
    list_display = ('email', 'phone')

@admin.register(SocialMedia)
class SocialMediaAdmin(admin.ModelAdmin):
    list_display = ('platform_name', 'url')
