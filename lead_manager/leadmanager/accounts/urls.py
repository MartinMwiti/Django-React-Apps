from django.urls import path, include
from .api import RegisterAPI, LoginApi, UserApi
from knox import views as knox_views


urlpatterns = [
    path('api/auth', include('knox.urls')),
    path('api/auth/register', RegisterAPI.as_view()),
    path('api/auth/login', LoginApi.as_view()),
    path('api/auth/user', UserApi.as_view())
]
