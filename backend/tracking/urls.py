from django.urls import path
from .views import OrderTrackingView

urlpatterns = [
    path('<str:tracking_code>/', OrderTrackingView.as_view(), name='order-tracking'),
]
