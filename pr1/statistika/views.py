
import matplotlib
matplotlib.use('Agg')
import matplotlib.pyplot as plt

from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status

from statistika.models import Trudoustroystvo, Kolichestvo_postupivshih, Staff, Reyting
from statistika.serializers import Trudoustroystvo_Ser, Kolichestvo_postupivshih_Ser, Staff_Ser, Reyting_Ser


@api_view(['GET'])
def trudoustroystvo_table(request):
    if request.method == 'GET':
        data = Trudoustroystvo.objects.all()
        serializer = Trudoustroystvo_Ser(data, context={'request': request}, many=True)
        return Response(serializer.data)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET'])
def trudoustroystvo_statistika(request):
    if request.method=='GET':
            god=Trudoustroystvo.objects.values_list('god')
            trudoustroen=Trudoustroystvo.objects.values_list('trudoustroen')

            x=list(map(lambda element: str(element[0]),god))
            y=list(map(lambda element: element[0],trudoustroen))
            font1 = {'family':'serif','color':'darkred','size':15}
            plt.ylabel("Трудоустройство",fontdict=font1)

            plt.plot(x,y, marker = 'o',mfc = '#4CAF50')
            plt.grid()
            plt.savefig('media/statistika/trudoustroystvo.png')
    return Response(('http://localhost:8000/media/statistika/trudoustroystvo.png'))


@api_view(['GET'])
def kolichestvo_postupivshih_table(request):
    if request.method == 'GET':
        data = Kolichestvo_postupivshih.objects.all()
        serializer = Kolichestvo_postupivshih_Ser(data, context={'request': request}, many=True)
        return Response(serializer.data)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET'])
def kolichestvo_postupivshih_statistika(request):
    if request.method=='GET':
            god=Kolichestvo_postupivshih.objects.values_list('god')
            kolichestvo=Kolichestvo_postupivshih.objects.values_list('kolichestvo')

            x=list(map(lambda element: str(element[0]),god))
            y=list(map(lambda element: element[0],kolichestvo))
            font1 = {'family':'serif','color':'darkred','size':15}
            plt.ylabel("Количество поступивших",fontdict=font1)

            plt.plot(x,y, marker = 'o',mfc = '#4CAF50')
            plt.grid()
            plt.savefig('media/statistika/kolichestvo_postupivshih.png')
    return Response(('http://localhost:8000/media/statistika/kolichestvo_postupivshih.png'))


@api_view(['GET'])
def professorskiy_sostav_table(request):
    if request.method == 'GET':
        data = Staff.objects.all()
        serializer = Staff_Ser(data, context={'request': request}, many=True)
        return Response(serializer.data)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET'])
def professorskiy_sostav_statistika(request):
    if request.method=='GET':
            level=Staff.objects.values_list('level')
            quantity=Staff.objects.values_list('quantity')

            y=list(map(lambda element: str(element[0]),quantity))
            prof_labels=list(map(lambda element: element[0],level))

            plt.pie(y, labels = prof_labels, startangle = 90)
            plt.savefig('media/statistika/professorskiy_sostav.png')
    return Response(('http://localhost:8000/media/statistika/professorskiy_sostav.png'))


@api_view(['GET'])
def reyting_table(request):
    if request.method == 'GET':
        data = Reyting.objects.all()
        serializer = Reyting_Ser(data, context={'request': request}, many=True)
        return Response(serializer.data)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET'])
def reyting_statistika(request):
    if request.method=='GET':
            vuz=Reyting.objects.values_list('vuz')
            kolichestvo=Reyting.objects.values_list('kolichestvo')

            x=list(map(lambda element: str(element[0]),vuz))
            y=list(map(lambda element: element[0],kolichestvo))

            plt.bar(x, y, width=0.1,color = "#4CAF50")
            plt.grid()
            plt.savefig('media/statistika/reyting.png')
    return Response(('http://localhost:8000/media/statistika/reyting.png'))
