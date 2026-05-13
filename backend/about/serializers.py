from rest_framework import serializers
from .models import AboutContent, Advantage, AboutStat, FAQ

class AboutContentSerializer(serializers.ModelSerializer):
    class Meta:
        model = AboutContent
        fields = '__all__'

class AdvantageSerializer(serializers.ModelSerializer):
    class Meta:
        model = Advantage
        fields = '__all__'

class AboutStatSerializer(serializers.ModelSerializer):
    class Meta:
        model = AboutStat
        fields = '__all__'

class FAQSerializer(serializers.ModelSerializer):
    class Meta:
        model = FAQ
        fields = '__all__'
