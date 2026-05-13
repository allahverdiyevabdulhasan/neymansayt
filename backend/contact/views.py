from rest_framework import viewsets
from .models import ContactMessage, ContactInfo, SocialMedia
from .serializers import (
    ContactMessageSerializer, ContactInfoSerializer, SocialMediaSerializer
)

class ContactMessageViewSet(viewsets.ModelViewSet):
    queryset = ContactMessage.objects.all()
    serializer_class = ContactMessageSerializer
    http_method_names = ['post']

class ContactInfoViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = ContactInfo.objects.all()
    serializer_class = ContactInfoSerializer

class SocialMediaViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = SocialMedia.objects.all()
    serializer_class = SocialMediaSerializer
