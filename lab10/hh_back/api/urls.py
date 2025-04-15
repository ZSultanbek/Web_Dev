from django.urls import path
from . import views

urlpatterns = [
    path('', views.angular_index),
    path('companies/', views.company_list_create),
    path('companies/<int:pk>/', views.company_detail),
    
    path('companies/<int:pk>/vacancies/', views.VacancyListCreate.as_view()),
    path('companies/<int:pk>/vacancies/<int:vacancy_id>/', views.VacancyDetail.as_view()),
    
    # path('vacancies/', views.VacancyListAPIView.as_view()),
]
