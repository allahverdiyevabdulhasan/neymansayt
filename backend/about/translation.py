from modeltranslation.translator import register, TranslationOptions
from .models import AboutContent, Advantage, AboutStat, FAQ

@register(AboutContent)
class AboutContentTranslationOptions(TranslationOptions):
    fields = ('hero_title', 'hero_description', 'vision_title', 'vision_description', 'mission_title', 'mission_description', 'quote_text', 'quote_author', 'quote_role')

@register(Advantage)
class AdvantageTranslationOptions(TranslationOptions):
    fields = ('title', 'description')

@register(AboutStat)
class AboutStatTranslationOptions(TranslationOptions):
    fields = ('label',)

@register(FAQ)
class FAQTranslationOptions(TranslationOptions):
    fields = ('question', 'answer')
