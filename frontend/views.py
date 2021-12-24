from django.shortcuts import render
from django.views import View

# Create your views here.


class Authorization(View):

    def get(self, request):
        return render(request, 'frontend/index.html', {})
