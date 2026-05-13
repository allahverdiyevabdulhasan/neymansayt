from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import (
    CRMFeatureViewSet, CRMPricingPlanViewSet,
    CRMStatViewSet, CRMBenefitViewSet
)

router = DefaultRouter()
router.register(r'features', CRMFeatureViewSet)
router.register(r'pricing', CRMPricingPlanViewSet)
router.register(r'stats', CRMStatViewSet)
router.register(r'benefits', CRMBenefitViewSet)

urlpatterns = [
    path('', include(router.urls)),
]
