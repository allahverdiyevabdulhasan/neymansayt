from rest_framework import viewsets
from .models import CRMFeature, CRMPricingPlan, CRMStat, CRMBenefit, CRMNotification
from .serializers import (
    CRMFeatureSerializer, CRMPricingPlanSerializer,
    CRMStatSerializer, CRMBenefitSerializer, CRMNotificationSerializer
)

class CRMFeatureViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = CRMFeature.objects.all()
    serializer_class = CRMFeatureSerializer

class CRMPricingPlanViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = CRMPricingPlan.objects.all()
    serializer_class = CRMPricingPlanSerializer

class CRMStatViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = CRMStat.objects.all()
    serializer_class = CRMStatSerializer

class CRMBenefitViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = CRMBenefit.objects.all()
    serializer_class = CRMBenefitSerializer

class CRMNotificationViewSet(viewsets.ModelViewSet):
    queryset = CRMNotification.objects.all()
    serializer_class = CRMNotificationSerializer

