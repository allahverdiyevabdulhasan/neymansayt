from rest_framework import viewsets
from .models import Blog
from .serializers import BlogSerializer

from core.mixins import TranslatedSlugMixin

class BlogViewSet(TranslatedSlugMixin, viewsets.ReadOnlyModelViewSet):
    queryset = Blog.objects.all()
    serializer_class = BlogSerializer
    lookup_field = 'slug'
