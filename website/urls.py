from . import views

from django.urls import path, include

#Put any new pages you create here.
urlpatterns = [
    path("", views.home, name="home"),                                  #homepage
    #path('auth/', views.authentication_view, name='authentication'),    #authentication page for Login/Signup
    #path('logout/', views.logout_view, name='logout'),                  #URL used to logout, quickly redirected to home
    
    
]

