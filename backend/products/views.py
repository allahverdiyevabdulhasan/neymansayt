from rest_framework import viewsets
from .models import Product
from .serializers import ProductSerializer

from core.mixins import TranslatedSlugMixin

class ProductViewSet(TranslatedSlugMixin, viewsets.ReadOnlyModelViewSet):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
    lookup_field = 'slug'
