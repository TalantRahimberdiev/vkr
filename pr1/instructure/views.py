
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status


from instructure.models import Instructure
from instructure.serializers import Instructure_Ser


@api_view(['GET'])
def instructure_list(request):
    if request.method == 'GET':
        data = Instructure.objects.all()
        serializer = Instructure_Ser(data, context={'request': request}, many=True)
        return Response(serializer.data)

    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
