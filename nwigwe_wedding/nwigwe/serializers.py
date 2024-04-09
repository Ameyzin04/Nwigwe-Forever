from rest_framework import serializers
from .models import Guest, Event, Venue


class EventSerializer(serializers.HyperlinkedModelSerializer):
    venue = serializers.PrimaryKeyRelatedField(queryset=Venue.objects.all())
    venue_name = serializers.ReadOnlyField(source='venue.name')
    event_url = serializers.HyperlinkedIdentityField(view_name='event-detail')

    class Meta:
        model = Event
        fields = ('id', 'name', 'venue', 'dress_code', 'date', 'event_url', 'venue_name')


class VenueSerializer(serializers.HyperlinkedModelSerializer):
    venue_url = serializers.HyperlinkedIdentityField(view_name='venue-detail')

    class Meta:
        model = Venue
        fields = ('id', 'name', 'photo_url', 'address', 'venue_url')


class GuestSerializer(serializers.HyperlinkedModelSerializer):
    guest_url = serializers.HyperlinkedIdentityField(view_name='guest-detail')

    class Meta:
        model = Guest
        fields = ['id', 'first_name', 'last_name', 'email', 'phone', 'dietary_restriction', 'arrival_date', 'access_level',
                  'additional_guest', 'additional_guest_first_name', 'additional_guest_last_name',
                  'additional_guest_dietary_restriction', 'attending', 'not_attending', 'guest_url']
