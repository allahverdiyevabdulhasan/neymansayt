from modeltranslation.translator import register, TranslationOptions
from .models import HomeHero, HomeAbout, HomeStat, WorkProcessStep, GlobalCTA, Partner

@register(HomeHero)
class HomeHeroTranslationOptions(TranslationOptions):
    fields = ('badge_text', 'title', 'description')

@register(HomeAbout)
class HomeAboutTranslationOptions(TranslationOptions):
    fields = ('title', 'description', 'quote')

@register(HomeStat)
class HomeStatTranslationOptions(TranslationOptions):
    fields = ('label',)

@register(WorkProcessStep)
class WorkProcessStepTranslationOptions(TranslationOptions):
    fields = ('title', 'description', 'duration')
    # deliverables is JSON, might need special handling if it contains strings

@register(GlobalCTA)
class GlobalCTATranslationOptions(TranslationOptions):
    fields = ('badge_text', 'title', 'description')

@register(Partner)
class PartnerTranslationOptions(TranslationOptions):
    fields = ('name', 'industry', 'description')
