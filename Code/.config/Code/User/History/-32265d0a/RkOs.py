from django.db import models

# Create your models here.

class StudentModel(models.Model):
    id = models.IntegerField()
    name = models.CharField(max_length=100)
    phone = models.BigIntegerField()
    gender = models.CharField()
    father = 
    group=models.CharField(max_length=5)
    address=models.CharField(max_length=50)
    age=models.IntegerField()

    def __str__(self):
        return self.title