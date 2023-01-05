
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status

from faculties.models import Faculty, Kafedra,Dekanat
from faculties.serializers import Faculty_Ser,Faculty_by_pk_Ser, Kafedra_Ser, Dekanat_Ser

@api_view(['GET'])
def faculties_list(request):
    if request.method == 'GET':
        data = Faculty.objects.all()
        serializers = Faculty_Ser(data, context={'request': request}, many=True)
        return Response(serializers.data)

    return Response(serializers.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET'])
def faculty_by_pk(request,pk):
    if request.method == 'GET':
        faculty = Faculty.objects.filter(pk=pk)
        kafedras=Kafedra.objects.filter(faculty=pk).values()
        print(kafedras)
        faculty_ser = Faculty_by_pk_Ser(faculty, context={'request': request}, many=True)
        kafedras_ser=Kafedra_Ser(kafedras, context={'request':request},many=True)
        return Response({'faculty':faculty_ser.data[0],'kafedras':kafedras_ser.data})

    return Response(faculty.errors, status=status.HTTP_400_BAD_REQUEST)