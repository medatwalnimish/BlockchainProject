from atexit import register
from django.urls import path
from .views import RegisterAPIView
from rest_framework_simplejwt import views as jwt_views
urlpatterns = [
    path('register', RegisterAPIView.as_view()),
    path('login', jwt_views.TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('refresh', jwt_views.TokenRefreshView.as_view(), name='token_refresh'),
]
