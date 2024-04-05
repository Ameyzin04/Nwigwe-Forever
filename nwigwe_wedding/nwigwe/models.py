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
    firstname = models.CharField(max_length=100)  
    lastname = models.CharField(max_length=100)
    email = models.EmailField() 
    phone = models.IntegerField()
    # additional_guest: 
    restriction = models.TextField(blank=True)
    arrival_date = models.DateField()

    def __str__(self):
        return self.name


