
from django.urls import path
from rest_framework import serializers
from . import views
from rest_framework.routers import DefaultRouter

urlpatterns = [
    path('guests/', views.GuestInfo.as_view(), name='guest_info'),
    path('guests/<int:pk>', views.GuestDetails.as_view(), name='guest-detail'),
    path('events/', views.EventInfo.as_view(), name='event_info'),
    path('events/<int:pk>', views.EventDetails.as_view(), name='event-detail'),
    path('venues/', views.VenueList.as_view(), name='venue_list'),
    path('venues/<int:pk>', views.VenueDetails.as_view(), name='venue-detail'),
]
