from modeltranslation.translator import register, TranslationOptions
from .models import OrderTracking

@register(OrderTracking)
class OrderTrackingTranslationOptions(TranslationOptions):
    fields = ('current_step', 'status_note')
