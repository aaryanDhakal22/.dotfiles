from django.db import models

# Create your models here.
class StudentPersonal(models.Model):
    group=models.CharField(max_length=5)
    group=models.CharField(max_length=5)
    group=models.CharField(max_length=5)
    group=models.CharField(max_length=5)
    group=models.CharField(max_length=5)


class StudentModel(models.Model):
    title= models.CharField(max_length=200)
    description = models.TextField()

    def __str__(self):
        return self.title