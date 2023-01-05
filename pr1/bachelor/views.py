
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status

from bachelor.models import Bachelor
from bachelor.serializers import Bachelor_Ser

@api_view(['GET'])
def bachelors_list(request):
    if request.method == 'GET':
        data = Bachelor.objects.all()
        serializer = Bachelor_Ser(data, context={'request': request}, many=True)
        return Response(serializer.data)

    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


