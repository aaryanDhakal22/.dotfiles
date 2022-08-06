from django.db import models

# Create your models here.

class StudentModel(models.Model):
    unid = models.CharField(max_length=50)
    name = models.CharField(max_length=100)
    phone = models.BigIntegerField()
    gender = models.CharField(max_length=10)
    father = models.CharField(max_length=40)
    mother = models.CharField(max_length=40)
    address = models.CharField(max_length=100)
    group=models.CharField(max_length=5)
    age=models.IntegerField()
    dob = models.CharField(max_length=12)
    speechTherapy = models.IntegerField()
    therapy= models.IntegerField()
    transportation = models.IntegerField()
    admissionCharge = models.IntegerField()
    monthlyCharge = models.IntegerField()
    snacks = models.IntegerField()

    def __str__(self):
        return self.title