
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status

from technicum_college.models import Technicum, College 
from technicum_college.serializers import Technicum_Ser, College_Ser 

@api_view(['GET'])
def technicum_list(request):
    if request.method == 'GET':
        data = Technicum.objects.all()
        serializer = Technicum_Ser(data, context={'request': request}, many=True)
        return Response(serializer.data)

    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET'])
def college_list(request):
    if request.method == 'GET':
        data = College.objects.all()
        serializer = College_Ser(data, context={'request': request}, many=True)
        return Response(serializer.data)

    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)