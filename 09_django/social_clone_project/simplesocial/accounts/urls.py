from django.urls import path
from django.contrib.auth import views as auth_views
from . import views
from simplesocial import views as views1

app_name = 'accounts'

urlpatterns=[

    path('signup/',views.SignUp.as_view(),name='signup'),
    path('login/',auth_views.LoginView.as_view(template_name='accounts/login.html'), name='login'),
    path('logout/',views1.logout1, name='logout'),
]