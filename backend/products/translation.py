from modeltranslation.translator import register, TranslationOptions
from .models import Product, ProductFeature, ProductBenefit, ProductStat, ProductPricing, ProductNavbarLink

@register(Product)
class ProductTranslationOptions(TranslationOptions):
    fields = ('title', 'slug', 'subtitle', 'description', 'cta_text', 'secondary_cta_text')

@register(ProductNavbarLink)
class ProductNavbarLinkTranslationOptions(TranslationOptions):
    fields = ('label',)

@register(ProductFeature)
class ProductFeatureTranslationOptions(TranslationOptions):
    fields = ('title', 'description')

@register(ProductBenefit)
class ProductBenefitTranslationOptions(TranslationOptions):
    fields = ('title', 'description')

@register(ProductStat)
class ProductStatTranslationOptions(TranslationOptions):
    fields = ('value', 'label')

@register(ProductPricing)
class ProductPricingTranslationOptions(TranslationOptions):
    fields = ('name', 'price', 'period', 'description', 'features')
