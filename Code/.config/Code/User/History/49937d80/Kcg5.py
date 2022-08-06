from django.shortcuts import render
from django.http.response import JsonResponse
from rest_framework.parsers import JSONParser
from rest_framework import status

from apis.models import StudentModel
from apis.serializers import StudentSerializers
from rest_framework.decorators import api_view

@api_view(['GET','POST','DELETE'])
def student_list(request):
    if request.method == 'GET':
        students = StudentModel.objects.all()

        name = request.GET.get('name',None)
        if name is not None:
            students = students.filter()

@api_view(['GET','PUT','DELETE'])
def student_detial(request,id):
    return None