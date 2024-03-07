from django.urls import reverse, reverse_lazy
from django.http import HttpResponseRedirect
from django.views.generic import TemplateView
from django.contrib.auth import login, logout
from django.shortcuts import redirect

class HomePage(TemplateView):
    template_name = 'index.html'
    
    def get(self, request, *args, **kwargs):
        if request.user.is_authenticated:
            return HttpResponseRedirect(reverse("test"))
        return super().get(request, *args, **kwargs)


class ThanksPage(TemplateView):
    template_name = 'thanks.html'

class TestPage(TemplateView):
    template_name = 'test.html'

def logout1(request):
    logout(request)
    return redirect(reverse_lazy('thanks'))
