from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView
from .models import OrderTracking
from .serializers import OrderTrackingSerializer

class OrderTrackingView(APIView):
    def get(self, request, tracking_code):
        try:
            tracking = OrderTracking.objects.get(tracking_code=tracking_code, is_active=True)
            serializer = OrderTrackingSerializer(tracking)
            return Response(serializer.data)
        except OrderTracking.DoesNotExist:
            return Response({"error": "Layihə tapılmadı və ya kod yanlışdır."}, status=status.HTTP_404_NOT_FOUND)
