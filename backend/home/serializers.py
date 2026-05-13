from rest_framework import serializers
from .models import HomeHero, HomeAbout, HomeStat, WorkProcessStep, GlobalCTA, Partner

class HomeHeroSerializer(serializers.ModelSerializer):
    class Meta:
        model = HomeHero
        fields = '__all__'

class HomeAboutSerializer(serializers.ModelSerializer):
    class Meta:
        model = HomeAbout
        fields = '__all__'

class HomeStatSerializer(serializers.ModelSerializer):
    class Meta:
        model = HomeStat
        fields = '__all__'

class WorkProcessStepSerializer(serializers.ModelSerializer):
    class Meta:
        model = WorkProcessStep
        fields = '__all__'

class GlobalCTASerializer(serializers.ModelSerializer):
    class Meta:
        model = GlobalCTA
        fields = '__all__'

class PartnerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Partner
        fields = '__all__'
