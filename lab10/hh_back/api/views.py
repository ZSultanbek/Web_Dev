from django.shortcuts import get_object_or_404
from rest_framework.decorators import api_view
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import Company, Vacancy
from .serializers import CompanySerializer, VacancySerializer
from django.http import Http404
from django.conf import settings
from django.shortcuts import render


def angular_index(request):
    return render(request, 'angular_index.html', {'debug': settings.DEBUG})

@api_view(['GET', 'POST'])
def company_list_create(request):
    if request.method == 'GET':
        companies = Company.objects.all()
        serializer = CompanySerializer(companies, many=True)
        return Response(serializer.data)
    elif request.method == 'POST':
        serializer = CompanySerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=201)
        return Response(serializer.errors, status=400)

@api_view(['GET', 'PUT', 'DELETE'])
def company_detail(request, pk):
    try:
        company = Company.objects.get(pk=pk)
    except Company.DoesNotExist:
        return Response(status=404)

    if request.method == 'GET':
        serializer = CompanySerializer(company)
        return Response(serializer.data)
    elif request.method == 'PUT':
        serializer = CompanySerializer(company, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=400)
    elif request.method == 'DELETE':
        company.delete()
        return Response(status=204)

@api_view(['GET'])
def company_vacancies(request, id):
    try:
        company = Company.objects.get(id=id)
    except Company.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)
    vacancies = company.vacancies.all()
    serializer = VacancySerializer(vacancies, many=True)
    return Response(serializer.data)

class VacancyListCreate(APIView):
    def get(self, request, pk):
        vacancies = Vacancy.objects.filter(company_id=pk)
        serializer = VacancySerializer(vacancies, many=True)
        return Response(serializer.data)

    def post(self, request, pk):
        company = get_object_or_404(Company, pk=pk)
        serializer = VacancySerializer(data=request.data)
        if serializer.is_valid():
            serializer.save(company=company)
            return Response(serializer.data, status=201)
        return Response(serializer.errors, status=400)

class VacancyDetail(APIView):

    def get(self, request, pk, vacancy_id):
        vacancy = get_object_or_404(Vacancy, pk=vacancy_id, company_id=pk)
        serializer = VacancySerializer(vacancy)
        return Response(serializer.data)

    def put(self, request, pk, vacancy_id):
        vacancy = get_object_or_404(Vacancy, pk=vacancy_id, company_id=pk)
        serializer = VacancySerializer(vacancy, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk, vacancy_id):
        vacancy = get_object_or_404(Vacancy, pk=vacancy_id, company_id=pk)
        vacancy.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)




# class VacancyListAPIView(APIView):
#     def get(self, request):
#         top_param = request.query_params.get('top')  # ← accepts ?top=5
#         vacancies = Vacancy.objects.all().order_by('-salary')

#         if top_param is not None:
#             try:
#                 top = int(top_param)
#                 vacancies = vacancies[:top]
#             except ValueError:
#                 return Response({"error": "Invalid 'top' parameter, must be an integer."}, status=400)

#         serializer = VacancySerializer(vacancies, many=True)
#         return Response(serializer.data)
# @api_view(['GET'])
# def top_ten_vacancies(request):
#     vacancies = Vacancy.objects.order_by('-salary')[:10]
#     serializer = VacancySerializer(vacancies, many=True)
#     return Response(serializer.data)
