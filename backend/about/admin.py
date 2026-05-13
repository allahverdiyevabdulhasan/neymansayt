from django.contrib import admin
from modeltranslation.admin import TranslationAdmin
from .models import AboutContent, Advantage, AboutStat, FAQ

@admin.register(AboutContent)
class AboutContentAdmin(TranslationAdmin):
    list_display = ('hero_title_az',)

@admin.register(Advantage)
class AdvantageAdmin(TranslationAdmin):
    list_display = ('title_az',)

@admin.register(AboutStat)
class AboutStatAdmin(TranslationAdmin):
    list_display = ('label_az', 'value')

@admin.register(FAQ)
class FAQAdmin(TranslationAdmin):
    list_display = ('question_az',)
