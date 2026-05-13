from rest_framework import viewsets
from .models import AboutContent, Advantage, AboutStat, FAQ
from .serializers import (
    AboutContentSerializer, AdvantageSerializer,
    AboutStatSerializer, FAQSerializer
)

class AboutContentViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = AboutContent.objects.all()
    serializer_class = AboutContentSerializer

class AdvantageViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Advantage.objects.all()
    serializer_class = AdvantageSerializer

class AboutStatViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = AboutStat.objects.all()
    serializer_class = AboutStatSerializer

class FAQViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = FAQ.objects.all()
    serializer_class = FAQSerializer
