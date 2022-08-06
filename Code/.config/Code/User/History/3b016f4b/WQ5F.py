from django.shortcuts import redirect, render

# from matplotlib.pyplot import title
from event.models import Event

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
            title=request.POST["title_text"], body=request.POST["body_text"]
        )
    return redirect("/events/")