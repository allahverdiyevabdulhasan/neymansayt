from rest_framework import viewsets
from .models import Service
from .serializers import ServiceSerializer

from core.mixins import TranslatedSlugMixin

class ServiceViewSet(TranslatedSlugMixin, viewsets.ReadOnlyModelViewSet):
    queryset = Service.objects.all()
    serializer_class = ServiceSerializer
    lookup_field = 'slug'
