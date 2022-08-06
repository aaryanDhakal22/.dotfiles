from django.db import models

# Create your models here.


class Blog(models.Model):
    title = models.TextField(default="")
    body = models.TextField(default="")


class Event(models.Model):
    date = models.CharField(default="", max_length=20)
    event = models.CharField(default="", max_length=100)
    body = models.TextField(default="")
