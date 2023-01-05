
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status

from .models import Structure
from .serializers import Structure_Ser

@api_view(['GET'])
def structure(request):
    if request.method == 'GET':
        data = Structure.objects.all()
        serializer = Structure_Ser(data, context={'request': request}, many=True)
        return Response(serializer.data)

    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
