from rest_framework import viewsets, permissions
from .models import ContactMessage, ContactInfo, SocialMedia, GlobalReachStat
from .serializers import (
    ContactMessageSerializer, ContactInfoSerializer, SocialMediaSerializer, GlobalReachStatSerializer
)

class ContactMessageViewSet(viewsets.ModelViewSet):
    queryset = ContactMessage.objects.all()
    serializer_class = ContactMessageSerializer
    http_method_names = ['post']
    authentication_classes = []
    permission_classes = [permissions.AllowAny]

class ContactInfoViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = ContactInfo.objects.all()
    serializer_class = ContactInfoSerializer

class SocialMediaViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = SocialMedia.objects.all()
    serializer_class = SocialMediaSerializer

class GlobalReachStatViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = GlobalReachStat.objects.all()
    serializer_class = GlobalReachStatSerializer
