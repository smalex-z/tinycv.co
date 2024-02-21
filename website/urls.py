from . import views

from django.urls import path, include


#Put any new pages you create here.
urlpatterns = [
    path("", views.home, name="home"),                                  #homepage
    path("az", views.alex, name="alex"),                                  #homepage
    path("az/", views.alex, name="alex"),                                  #homepage
    path("az/project", views.cs, name="project"),                                  #homepage
    path("base", views.base, name="base"),                                  #homepage
    path("base/", views.base, name="base"),                                  #homepage
    path("base/project", views.cs, name="base-project"),                                  #homepage
    path('<str:short_code>/', views.redirect_url, name='redirect_url'),       #URL used to redirect to long URL
    path('<str:short_code>', views.redirect_url, name='redirect_url'),       #URL used to redirect to long URL


    #path('auth/', views.authentication_view, name='authentication'),    #authentication page for Login/Signup
    #path('logout/', views.logout_view, name='logout'),                  #URL used to logout, quickly redirected to home
    
    
]

