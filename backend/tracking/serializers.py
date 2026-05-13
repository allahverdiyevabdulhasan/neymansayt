from rest_framework import serializers
from .models import OrderTracking

class OrderTrackingSerializer(serializers.ModelSerializer):
    class Meta:
        model = OrderTracking
        fields = '__all__'
