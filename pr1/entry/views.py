
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status

from entry.models import Npa
from entry.serializers import Npa_Ser

@api_view(['GET'])
def npa(request):
    if request.method == 'GET':
        data = Npa.objects.all()
        serializer = Npa_Ser(data, context={'request': request}, many=True)
        return Response(serializer.data)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
