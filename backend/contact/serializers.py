from rest_framework import serializers
from .models import ContactMessage, ContactInfo, SocialMedia, GlobalReachStat

class ContactMessageSerializer(serializers.ModelSerializer):
    class Meta:
        model = ContactMessage
        fields = '__all__'

class ContactInfoSerializer(serializers.ModelSerializer):
    class Meta:
        model = ContactInfo
        fields = '__all__'

class SocialMediaSerializer(serializers.ModelSerializer):
    class Meta:
        model = SocialMedia
        fields = '__all__'

class GlobalReachStatSerializer(serializers.ModelSerializer):
    class Meta:
        model = GlobalReachStat
        fields = '__all__'
