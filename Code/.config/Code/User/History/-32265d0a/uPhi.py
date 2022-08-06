from django.db import models

# Create your models here.

class StudentModel(models.Model):
    id = models.CharField()
    name = models.CharField(max_length=100)
    phone = models.BigIntegerField()
    gender = models.CharField()
    father = models.CharField()
    mother = models.CharField()
    address = models.CharField()
    group=models.CharField(max_length=5)
    age=models.IntegerField()
    dob = models.CharField()
    speechTherapy = models.IntegerField()
    therapy= models.IntegerField()
    transportation = models.IntegerField()
    admissionCharge = models.IntegerField()
    monthlyCharge = models.IntegerField()
    snacks = models.IntegerField()

    def __str__(self):
        return self.title