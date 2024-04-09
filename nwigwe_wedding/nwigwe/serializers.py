from rest_framework import serializers
from .models import Guest
from .models import Event
from .models import Venue


class EventSerializer(serializers.HyperlinkedModelSerializer):
    venue = serializers.PrimaryKeyRelatedField(
        queryset = Venue.objects.all()
        source = 'venue_id'
    )
    venue_name = serializer.ReadOnlyField(source ='venue.name')
    event_url = serializer.ModelSerializer.serializer_url_field(
        view_name = 'event'
    )
    class Meta:
        model = Event
        fields = ('id', 'name', 'venue', 'dress_code', 'date')   


class VenueSerializer(serializers.HyperlinkedModelSerializer): 
    venue_url = serializer.ModelSerializer.serializer_url_field(
        view_name = 'venue'
    )
    class Meta: 
        model = Venue
        fields =  ('id', 'name', 'photo_url', 'address')

class GuestSerializer(serializers.HyperlinkedModelSerializer):
    guest_url = serializer.ModelSerializer.serializer_url_field(
        view_name = 'guest'
    )
    class Meta:
        model = Guest
        fields = ['id', 'first_name', 'last_name', 'email', 'phone', 'dietary_restriction', 'arrival_date', 'access_level','additional_guest', 'addtional_guest_first_name', 'addtional_guest_last_name', 'addtional_guest_dietary_restriction', 'attending', 'not_attending']
