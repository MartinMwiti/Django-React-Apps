from django.urls import path, include
from .api import RegisterAPI, LoginApi, UserApi
from knox import views as knox_views


urlpatterns = [
    path('api/auth', include('knox.urls')),
    path('api/auth/register', RegisterAPI.as_view()),
    path('api/auth/login', LoginApi.as_view()),
    path('api/auth/user', UserApi.as_view()),
    path('api/auth/logout', knox_views.LogoutView.as_view(), name="knox_logout") # invalidates/destroys a token. You need to login to get a new token.
]