from django.contrib import admin
from modeltranslation.admin import TranslationAdmin, TranslationTabularInline
from .models import Product, ProductFeature, ProductBenefit, ProductStat, ProductPricing, ProductNavbarLink

class ProductNavbarLinkInline(TranslationTabularInline):
    model = ProductNavbarLink
    extra = 1

class ProductFeatureInline(TranslationTabularInline):
    model = ProductFeature
    extra = 1

class ProductBenefitInline(TranslationTabularInline):
    model = ProductBenefit
    extra = 1

class ProductStatInline(TranslationTabularInline):
    model = ProductStat
    extra = 1

class ProductPricingInline(TranslationTabularInline):
    model = ProductPricing
    extra = 1

@admin.register(Product)
class ProductAdmin(TranslationAdmin):
    list_display = ('title', 'slug', 'theme_color', 'order', 'created_at')
    inlines = [
        ProductNavbarLinkInline,
        ProductFeatureInline,
        ProductBenefitInline,
        ProductStatInline,
        ProductPricingInline
    ]

@admin.register(ProductNavbarLink)
class ProductNavbarLinkAdmin(TranslationAdmin):
    list_display = ('product', 'label', 'href', 'order')
    list_filter = ('product',)

@admin.register(ProductFeature)
class ProductFeatureAdmin(TranslationAdmin):
    list_display = ('product', 'title', 'order')
    list_filter = ('product',)

@admin.register(ProductBenefit)
class ProductBenefitAdmin(TranslationAdmin):
    list_display = ('product', 'title', 'order')
    list_filter = ('product',)

@admin.register(ProductStat)
class ProductStatAdmin(TranslationAdmin):
    list_display = ('product', 'label', 'value', 'order')
    list_filter = ('product',)

@admin.register(ProductPricing)
class ProductPricingAdmin(TranslationAdmin):
    list_display = ('product', 'name', 'price', 'is_popular', 'order')
    list_filter = ('product', 'is_popular')

