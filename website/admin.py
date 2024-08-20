from django.contrib import admin
from .models import URL

# Register your models here.
@admin.register(URL)
class URLAdmin(admin.ModelAdmin):
    list_display = ('long_url', 'short_code', 'created_at')  # Display these fields in the admin list view
    search_fields = ('long_url', 'short_code')  # Enable searching by these fields
    list_filter = ('created_at',)  # Add filters for these fields
