from django.shortcuts import redirect, render

# from matplotlib.pyplot import title
from event.models import Blog

# Create your views here.


def staffView(request):
    return render(request, "eventCreate.html")


def eventView(request):
    events = Blog.objects.all()
    return render(request, "events.html", {"events": events})


def createBlog(request):
    password = request.POST["password"]
    if password == "yY3mzS^95O2c#^P":

        Blog.objects.create(
            title=request.POST["title_text"], body=request.POST["body_text"]
        )
    return redirect("/events/")