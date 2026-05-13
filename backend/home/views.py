from rest_framework import viewsets
from .models import HomeHero, HomeAbout, HomeStat, WorkProcessStep, GlobalCTA, Partner
from .serializers import (
    HomeHeroSerializer, HomeAboutSerializer, HomeStatSerializer,
    WorkProcessStepSerializer, GlobalCTASerializer, PartnerSerializer
)

class HomeHeroViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = HomeHero.objects.all()
    serializer_class = HomeHeroSerializer

class HomeAboutViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = HomeAbout.objects.all()
    serializer_class = HomeAboutSerializer

class HomeStatViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = HomeStat.objects.all()
    serializer_class = HomeStatSerializer

class WorkProcessStepViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = WorkProcessStep.objects.all()
    serializer_class = WorkProcessStepSerializer

class GlobalCTAViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = GlobalCTA.objects.all()
    serializer_class = GlobalCTASerializer

class PartnerViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Partner.objects.all()
    serializer_class = PartnerSerializer
