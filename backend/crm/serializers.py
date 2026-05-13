from rest_framework import serializers
from .models import CRMFeature, CRMPricingPlan, CRMStat, CRMBenefit

class CRMFeatureSerializer(serializers.ModelSerializer):
    class Meta:
        model = CRMFeature
        fields = '__all__'

class CRMPricingPlanSerializer(serializers.ModelSerializer):
    class Meta:
        model = CRMPricingPlan
        fields = '__all__'

class CRMStatSerializer(serializers.ModelSerializer):
    class Meta:
        model = CRMStat
        fields = '__all__'

class CRMBenefitSerializer(serializers.ModelSerializer):
    class Meta:
        model = CRMBenefit
        fields = '__all__'
