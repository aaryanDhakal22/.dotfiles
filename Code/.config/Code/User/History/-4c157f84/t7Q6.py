from django.urls import path

from .views import *

urlpatterns = [
    path('student/',student_list, name="student_list"),
    path('student/details/<str:unid>',student_detail,name="student_detail"),
    path('fees/',fees_list,name='fee_list')
]
