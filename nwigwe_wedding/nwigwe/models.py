from django.db import models

# Create your models here.
class Venue(models.Model):
    name = models.CharField(max_length=100)
    photo_url = models.URLField()
    address = models.CharField(max_length=100)

    def __str__(self):
        return self.name

class Event(models.Model):
    name = models.CharField(max_length=100)
    date = models.DateField()
    venue = models.ForeignKey(Venue, on_delete=models.CASCADE)
    # time = models.TimeField()
    dress_code = models.CharField(max_length=100)

    def __str__(self):
        return self.name

class Guest(models.Model):
    first_name = models.CharField(max_length=100)  
    last_name = models.CharField(max_length=100)
    email = models.EmailField(blank=True) 
    phone = models.CharField(blank=True)
    # additional_guest: 
    Dietary_restriction = models.TextField(blank=True)
    arrival_date = models.DateField()

    def __str__(self):
        return self.first_name


