from django.db import models

class WaitlistEntry(models.Model):
    email = models.EmailField(unique=True)
    language = models.CharField(max_length=2)
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        verbose_name = 'Waitlist Entry'
        verbose_name_plural = 'Waitlist Entries'

    def __str__(self):
        return self.email