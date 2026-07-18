from modeltranslation.translator import register, TranslationOptions
from .models import ContactInfo, GlobalReachStat

@register(ContactInfo)
class ContactInfoTranslationOptions(TranslationOptions):
    fields = ('address', 'working_hours')

@register(GlobalReachStat)
class GlobalReachStatTranslationOptions(TranslationOptions):
    fields = ('country_name',)
