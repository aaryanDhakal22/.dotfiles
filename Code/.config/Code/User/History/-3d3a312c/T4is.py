from django.db import models

# Create your models here.


class Blog(models.Model):
    title = models.TextField(default="")
    body = models.TextField(default="")


class Blog(models.Model):
    date = models.CharField(default="",ma)
    event = models.CharField(default="", max_length=100)
    body = models.TextField(default="")
