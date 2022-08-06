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
            students = students.filter(name__icontains=name)
        student_serializer = StudentSerializers(students,many=True)
        return JsonResponse(student_serializer.data,safe=False)


    elif request.method == "POST":
        student_data = JSONParser.parse(request)
        student_serializer = StudentSerializers(data=student_data)
        if student_serializer.is_valid():
            student_serializer.save()
            return JsonResponse(student_serializer.data,status.HTTP_201_CREATED)
        return JsonResponse(student_serializer.errors,status=status.HTTP_400_BAD_REQUEST)

    elif request.method == "DELETE":
        count -

@api_view(['GET','PUT','DELETE'])
def student_detial(request,id):
    return None