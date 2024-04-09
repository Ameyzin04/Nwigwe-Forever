from rest_framework import generics
from django.http import JsonResponse
from .serializers import VenueSerializer, GuestSerializer, EventSerializer
from .models import Guest
from .models import Venue
from .models import Event

        
class Guest_info(generics.ListCreateAPIView):
    queryset = Guests.objects.all()
    serializer_class = GuestSerializerSerializer  

class Guest_details(generics.RetrieveUpdateDestroyAPIView):
    queryset = Guests.objects.all()
    serializer_class = LocationSerializer   


class Venue_info(generics.ListCreateAPIView):
    queryset = Venue.objects.all()
    serializer_class = VenueSerializer    

class Venue_details(generics.ListCreateAPIView):
    queryset = Venue.objects.all()
    serializer_class = VenueSerializer    


class Event_info(generics.ListCreateAPIView):
    queryset = Venue.objects.all()
    serializer_class = VenueSerializer    

class Event_details(generics.ListCreateAPIView):
    queryset = Venue.objects.all()
    serializer_class = VenueSerializer  



