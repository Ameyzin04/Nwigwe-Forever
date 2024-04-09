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
    dress_code = models.CharField(max_length=100)

    def __str__(self):
        return self.name

class Guest(models.Model):
    first_name = models.CharField(max_length=100)  
    last_name = models.CharField(max_length=100)
    email = models.EmailField(blank=True) 
    phone = models.CharField(blank=True)
    dietary_restriction = models.CharField(blank=True)
    arrival_date =  models.CharField(blank=True)
    access_level = models.CharField(max_length=100)
    additional_guest= models.CharField(max_length=100)
    additional_guest_first_name= models.CharField(blank=True)
    additional_guest_last_name= models.CharField(blank=True)
    additional_guest_dietary_restriction= models.CharField(blank=True)
    attending = models.BooleanField(default=False)
    not_attending = models.BooleanField(default=False)

    def __str__(self):
        return self.first_name


