
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status

from ovuze.models import Prof,Stajirovka,Libriary,Npa,Gallery
from ovuze.serializers import Prof_Ser,Stajirovka_Ser, Libriary_Ser,Npa_Ser,Gallery_Ser

@api_view(['GET'])
def prof(request):
    if request.method == 'GET':
        data = Prof.objects.all()
        serializer = Prof_Ser(data, context={'request': request}, many=True)
        return Response(serializer.data)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET'])
def stajirovka(request):
    if request.method == 'GET':
        data = Stajirovka.objects.all()
        serializer = Stajirovka_Ser(data, context={'request': request}, many=True)
        return Response(serializer.data)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET'])
def libriary(request):
    if request.method == 'GET':
        data = Libriary.objects.all()
        serializer = Libriary_Ser(data, context={'request': request}, many=True)
        return Response(serializer.data)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET'])
def npa(request):
    if request.method == 'GET':
        data = Npa.objects.all()
        serializer = Npa_Ser(data, context={'request': request}, many=True)
        return Response(serializer.data)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET'])
def gallery(request):
    if request.method == 'GET':
        data = Gallery.objects.all()
        serializer = Gallery_Ser(data, context={'request': request}, many=True)
        return Response(serializer.data)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)