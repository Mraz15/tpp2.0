# -*- coding: utf-8 -*-
from __future__ import unicode_literals

import smtplib

from django.shortcuts import render
from django.http import HttpResponse
import json
from django.conf import settings


def index(request):
    return render(request, 'personal/home.html')


def about(request):
    return render(request, 'personal/about.html')


def contact(request):
    return render(request, 'personal/contact.html')


def email(request):
    json_data = json.loads(request.body)
    if len(json_data) > 1:
        SUBJECT = "New Order Submitted"

        text = """Thank you for your order! \n \n
            Below is an overview of your order: \n \n"""

        for index, val in enumerate(json_data):
            orderLine = "DOCUMENT " + str(index) + ":"
            subText = "\n".join([orderLine,
                                 "document Type: " + str(val.get('docType')),
                                 "document Number: " + str(val.get('docNum')),
                                 "certified: " + str(val.get('docCert')),
                                 "legalized: " + str(val.get('docLegal')),
                                 "country (if legalized): " +
                                 str(val.get('docLegal')),
                                 "number of Copies: " +
                                 str(val.get('docNumofCopies')),
                                 "document Media: " + str(val.get('docMedia')),
                                 "forward to associate: " +
                                 str(val.get('docForward')),
                                 "Email a PDF copy: " +
                                 str(val.get('docEmail')),
                                 "Document Cost: " +
                                 str(val.get('docCost')), "\n"
                                 ]
                                )

            text = text + subText

        emailFooter = """This is an automated email and we will
         not respond to replys sent to this email address.
          \n If you have any questions or concerns please send
           an email to us at info@thepatentplace.com or call us
            at 1-703-415-1077. \n \n \n Sincerely,\n Zac Mraz
             \n Chief Executive Officer\n The Patent Place, Inc."""

        text = text + emailFooter

        BODY = "\r\n".join([
            "From: %s" % settings.FROM_EMAIL,
            "To: %s" % settings.TO_EMAIL,
            "Subject: %s" % SUBJECT,
            "",
            text
        ])

        try:
            server = smtplib.SMTP(settings.SMTP_HOST_AND_PORT)
            server.starttls()
            server.login(settings.SMTP_USERNAME, settings.SMTP_PASSWORD)
            server.sendmail(settings.FROM_EMAIL, settings.TO_EMAIL, BODY)
            server.quit()
        except:
            return HttpResponse(status=400)
        return HttpResponse(status=200)


def thanks(request):
    order = request.GET.get('order')
    return render(request, 'personal/thank_you.html',
                  {'order': json.loads(order)})
