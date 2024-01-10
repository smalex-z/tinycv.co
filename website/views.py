from django.shortcuts import render

# Create your views here.
#Homepage. Not much to see here
def home(request):
    return render(request, 'website/home.html')  