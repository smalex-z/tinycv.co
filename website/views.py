from django.shortcuts import render, redirect
from .models import URL
from .utils import generate_short_code
from django.http import HttpResponseBadRequest


# Create your views here.
#Homepage. Not much to see here
def home(request):
    failure_modal = False  # Set failure_modal to False by default
    success_modal = False  # Set success_modal to False by default

    
    if request.method == 'POST':
        long_url = request.POST.get('long_url')
        custom_short_url = request.POST.get('custom_short_url')
        
        if custom_short_url:
            if URL.objects.filter(short_code=custom_short_url).exists():
                failure_modal = True  # Set failure_modal to True if custom short URL already exists
            else:
                short_code = custom_short_url
        else:
            short_code = generate_short_code()

        if not failure_modal:  # Only create the URL object if failure_modal is still False
            url_obj = URL.objects.create(long_url=long_url, short_code=short_code)
            success_modal = True  # Set success_modal to True if the URL object is created successfully
            return render(request, 'website/home.html', {'success_modal': success_modal})
    
    return render(request, 'website/home.html', {'failure_modal': failure_modal})



def alex(request):
    return render(request, 'website/alex.html')

def cs(request):
    return render(request, 'website/CS.html')

def base(request):
    return render(request, 'website/base.html')

def redirect_url(request, short_code):
    url_obj = URL.objects.get(short_code=short_code)
    return redirect(url_obj.long_url)


