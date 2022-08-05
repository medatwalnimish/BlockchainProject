from atexit import register
from django.urls import path
from .views import LoginAPIView, RegisterAPIView, UserAPIView,RefreshAPIView,LogoutAPIView
urlpatterns = [
    path('register', RegisterAPIView.as_view()),
    path('login', LoginAPIView.as_view()),
    path('user', UserAPIView.as_view()),
    path('refresh', RefreshAPIView.as_view()),
    path('logout', LogoutAPIView.as_view())
]
