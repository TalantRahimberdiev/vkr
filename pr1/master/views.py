
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status

from master.models import Master
from master.serializers import Master_Ser

@api_view(['GET'])
def masters_list(request):
    if request.method == 'GET':
        data = Master.objects.all()
        serializers = Master_Ser(data, context={'request': request}, many=True)
        return Response(serializers.data)

    return Response(serializers.errors, status=status.HTTP_400_BAD_REQUEST)