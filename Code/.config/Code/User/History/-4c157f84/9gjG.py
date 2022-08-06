from django.urls import path

from .views import *

urlpatterns = [
    path('student/',student_list, name="list"),
    path('student/details/<int:unid>',student_detail,name="detail")
]
