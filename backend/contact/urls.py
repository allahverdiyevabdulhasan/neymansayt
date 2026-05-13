from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import (
    ContactMessageViewSet, ContactInfoViewSet, SocialMediaViewSet
)

router = DefaultRouter()
router.register(r'messages', ContactMessageViewSet)
router.register(r'info', ContactInfoViewSet)
router.register(r'socials', SocialMediaViewSet)

urlpatterns = [
    path('', include(router.urls)),
]
