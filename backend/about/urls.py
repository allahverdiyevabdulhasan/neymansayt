from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import (
    AboutContentViewSet, AdvantageViewSet,
    AboutStatViewSet, FAQViewSet
)

router = DefaultRouter()
router.register(r'content', AboutContentViewSet)
router.register(r'advantages', AdvantageViewSet)
router.register(r'stats', AboutStatViewSet)
router.register(r'faqs', FAQViewSet)

urlpatterns = [
    path('', include(router.urls)),
]
