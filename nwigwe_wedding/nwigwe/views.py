from rest_framework import generics
from django.http import JsonResponse
from rest_framework import serializers
from .serializers import VenueSerializer, GuestSerializer, EventSerializer
from .models import Guest
from .models import Venue
from .models import Event

        
class GuestInfo(generics.ListCreateAPIView):
    queryset = Guest.objects.all()
    serializer_class = GuestSerializer 

class GuestDetails(generics.RetrieveUpdateDestroyAPIView):
    queryset = Guest.objects.all()
    serializer_class = GuestSerializer   


class VenueList(generics.ListCreateAPIView):
    queryset = Venue.objects.all()
    serializer_class = VenueSerializer    

class VenueDetails(generics.RetrieveUpdateDestroyAPIView):
    queryset = Venue.objects.all()
    serializer_class = VenueSerializer    


class EventInfo(generics.ListCreateAPIView):
    queryset = Event.objects.all()
    serializer_class = EventSerializer    

class EventDetails(generics.RetrieveUpdateDestroyAPIView):
    queryset = Event.objects.all()
    serializer_class = EventSerializer  



