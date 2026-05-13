from django.contrib import admin
from modeltranslation.admin import TranslationAdmin
from .models import HomeHero, HomeAbout, HomeStat, WorkProcessStep, GlobalCTA, Partner

@admin.register(HomeHero)
class HomeHeroAdmin(TranslationAdmin):
    list_display = ('title',)

@admin.register(HomeAbout)
class HomeAboutAdmin(TranslationAdmin):
    list_display = ('title',)

@admin.register(HomeStat)
class HomeStatAdmin(TranslationAdmin):
    list_display = ('label_az', 'value')

@admin.register(WorkProcessStep)
class WorkProcessStepAdmin(TranslationAdmin):
    list_display = ('title_az', 'number', 'order')

@admin.register(GlobalCTA)
class GlobalCTAAdmin(TranslationAdmin):
    list_display = ('title_az',)

@admin.register(Partner)
class PartnerAdmin(TranslationAdmin):
    list_display = ('name_az', 'industry_az', 'since_year', 'order')
    search_fields = ('name_az', 'name_en', 'name_ru', 'industry_az')
    list_filter = ('since_year',)
