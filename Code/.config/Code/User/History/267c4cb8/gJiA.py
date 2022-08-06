from rest_framework import serializers

from .models import StudentModel,NotificationModel

class StudentSerializers(serializers.ModelSerializer):

    class Meta:
        model = StudentModel
        fields = (
        'unid',
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

class NotificationSerializers(serializers.ModelSerializer):

    class Meta:
        model = NotificationModel
        fields=(
            'studentunid',
            'date',
            'paidAmount',
            'forMonth',
            'speechTherapy',
            'therapy',
            'transportation',
            'admissionCharge',
            'monthlyCharge',
            'snacks',
            'paid'
        )