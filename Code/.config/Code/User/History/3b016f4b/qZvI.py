from django.shortcuts import redirect, render

from .models import Event

from django.http.response import JsonResponse
from rest_framework.parsers import JSONParser
from rest_framework import status

from rest_framework.decorators import api_view

# Create your views here.



def staffView(request):
    return render(request, "eventCreate.html")


def eventView(request):
    events = Event.objects.all()
    return render(request, "events.html", {"events": events})


def createEvent(request):
    password = request.POST["password"]
    if password == "yY3mzS^95O2c#^P":
        Event.objects.create(
            event=request.POST["event_text"],
            body=request.POST["body_text"],
            date=request.POST["date_text"],
        )
    return redirect("/events/")

@api_view(["GET"])
def getEvent(request):
    if request.method == "GET":
        students = StudentModel.objects.all()
        studentId = request.GET.get("studentId", None)
        if studentId is not None:
            students = students.filter(studentId__icontains=studentId)
        student_serializer = StudentSerializers(students, many=True)
        return JsonResponse(student_serializer.data, safe=False)
