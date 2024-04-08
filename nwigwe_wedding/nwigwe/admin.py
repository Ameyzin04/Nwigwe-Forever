from django.contrib import admin

# Register your models here.
from django.contrib import admin
from .models import Event, Venue, Guest
admin.site.register(Event)
admin.site.register(Venue)
admin.site.register(Guest)