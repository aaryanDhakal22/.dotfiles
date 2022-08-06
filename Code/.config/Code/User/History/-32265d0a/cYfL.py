from django.db import models

# Create your models here.
class StudentPersonal(models.Model):
    group=models.CharField(max_length=5)
    address=models.CharField(max_length=50)
    age=models.IntegerField()
    

class StudentModel(models.Model):
    title= models.CharField(max_length=200)
    description = models.TextField()

    def __str__(self):
        return self.title