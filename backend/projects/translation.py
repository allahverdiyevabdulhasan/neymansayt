from modeltranslation.translator import register, TranslationOptions
from .models import Project

@register(Project)
class ProjectTranslationOptions(TranslationOptions):
    fields = ('title', 'category', 'description', 'content', 'problem', 'solution', 'technologies', 'client_name', 'testimonial_quote', 'testimonial_author', 'testimonial_role')
