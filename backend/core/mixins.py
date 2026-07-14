from django.db.models import Q
from django.http import Http404

class TranslatedSlugMixin:
    """
    Allows DRF to find an object by checking all translated slug fields
    and the base slug field.
    """
    def get_object(self):
        queryset = self.filter_queryset(self.get_queryset())
        lookup_url_kwarg = self.lookup_url_kwarg or self.lookup_field
        lookup_value = self.kwargs[lookup_url_kwarg]

        obj = queryset.filter(
            Q(slug_az=lookup_value) |
            Q(slug_en=lookup_value) |
            Q(slug_ru=lookup_value) |
            Q(slug_tr=lookup_value) |
            Q(slug=lookup_value)
        ).first()

        if not obj:
            raise Http404("Not found.")

        self.check_object_permissions(self.request, obj)
        return obj
