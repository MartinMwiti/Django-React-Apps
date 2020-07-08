from django.urls import path
from .view import ContactCreateView

urlpatterns = [
    path('', ContactCreateView.as_view()),
]
