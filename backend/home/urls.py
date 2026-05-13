from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import (
    HomeHeroViewSet, HomeAboutViewSet, HomeStatViewSet,
    WorkProcessStepViewSet, GlobalCTAViewSet, PartnerViewSet
)

router = DefaultRouter()
router.register(r'hero', HomeHeroViewSet)
router.register(r'about', HomeAboutViewSet)
router.register(r'stats', HomeStatViewSet)
router.register(r'work-process', WorkProcessStepViewSet)
router.register(r'cta', GlobalCTAViewSet)
router.register(r'partners', PartnerViewSet)

urlpatterns = [
    path('', include(router.urls)),
]
