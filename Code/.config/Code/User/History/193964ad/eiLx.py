from rest_framework import serializers

from .models import StudentModel,FeesModel

class StudentSerializers(serializers.ModelSerializer):

    class Meta:
        model = StudentModel
        fields = ('unid',
        'name',
        'phone',
        'gender',
        'father',
        'mother',
        'address',
        'group',
        'age',
        'dob',
        'speechTherapy',
        'therapy',
        'transportation',
        'admissionCharge',
        'monthlyCharge',
        'snacks')

class FeesSerializers(serializers.ModelSerializer)

    class Meta:
        model = FeesModel
        fields=(
            'studentunid',
            'date',
            'paidAmount',
            'forMonth'
        )