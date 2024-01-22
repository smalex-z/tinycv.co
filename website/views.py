from django.shortcuts import render

# Create your views here.
#Homepage. Not much to see here
def home(request):
    return render(request, 'website/home.html')  

def alex(request):
    return render(request, 'website/alex.html')

def cs(request):
    return render(request, 'website/CS.html')

def base(request):
    return render(request, 'website/base.html')

def cs(request):
    return render(request, 'website/CS.html')
