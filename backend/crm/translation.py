from modeltranslation.translator import register, TranslationOptions
from .models import CRMFeature, CRMPricingPlan, CRMStat, CRMBenefit

@register(CRMFeature)
class CRMFeatureTranslationOptions(TranslationOptions):
    fields = ('title', 'description')

@register(CRMPricingPlan)
class CRMPricingPlanTranslationOptions(TranslationOptions):
    fields = ('name', 'subtitle', 'cta_text')

@register(CRMStat)
class CRMStatTranslationOptions(TranslationOptions):
    fields = ('label',)

@register(CRMBenefit)
class CRMBenefitTranslationOptions(TranslationOptions):
    fields = ('text',)
