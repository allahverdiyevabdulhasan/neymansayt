from rest_framework import serializers
from .models import Product, ProductFeature, ProductBenefit, ProductStat, ProductPricing, ProductNavbarLink

class ProductNavbarLinkSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProductNavbarLink
        fields = '__all__'

class ProductFeatureSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProductFeature
        fields = '__all__'

class ProductBenefitSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProductBenefit
        fields = '__all__'

class ProductStatSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProductStat
        fields = '__all__'

class ProductPricingSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProductPricing
        fields = '__all__'

class ProductSerializer(serializers.ModelSerializer):
    navbar_links = ProductNavbarLinkSerializer(many=True, read_only=True)
    features = ProductFeatureSerializer(many=True, read_only=True)
    benefits = ProductBenefitSerializer(many=True, read_only=True)
    stats = ProductStatSerializer(many=True, read_only=True)
    pricing_plans = ProductPricingSerializer(many=True, read_only=True)

    class Meta:
        model = Product
        fields = '__all__'
