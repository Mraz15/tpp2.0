# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.conf.urls import url, include
from . import views 

urlpatterns = [
    url(r'^legal$', views.index, name='index'),
    url(r'^hague$', views.hague, name='hague'),
    ]
