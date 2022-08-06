from rest_framework import serializers

from .models import StudentModel

class StudentSerializers(serializers.HyperlinkedModelSerializer):

    class Meta:
        model = StudentModel
        fields = ('unid','name','phone','gender','father','mother')