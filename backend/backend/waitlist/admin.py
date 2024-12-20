from django.contrib import admin
from .models import WaitlistEntry

@admin.register(WaitlistEntry)
class WaitlistEntryAdmin(admin.ModelAdmin):
    list_display = ('email', 'language', 'created_at')
    list_filter = ('language', 'created_at')
    search_fields = ('email',)
    ordering = ('-created_at',)