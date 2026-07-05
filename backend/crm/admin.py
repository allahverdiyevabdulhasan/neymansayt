from django.contrib import admin
from modeltranslation.admin import TranslationAdmin
from .models import CRMFeature, CRMPricingPlan, CRMStat, CRMBenefit, CRMNotification

@admin.register(CRMFeature)
class CRMFeatureAdmin(TranslationAdmin):
    list_display = ('title_az',)

@admin.register(CRMPricingPlan)
class CRMPricingPlanAdmin(TranslationAdmin):
    list_display = ('name_az', 'price', 'is_popular')

@admin.register(CRMStat)
class CRMStatAdmin(TranslationAdmin):
    list_display = ('label_az', 'main_percentage')

@admin.register(CRMBenefit)
class CRMBenefitAdmin(TranslationAdmin):
    list_display = ('text_az',)

@admin.register(CRMNotification)
class CRMNotificationAdmin(admin.ModelAdmin):
    list_display = ('time', 'type', 'text', 'created_at')

