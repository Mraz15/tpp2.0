# -*- coding: utf-8 -*-
from __future__ import unicode_literals

import smtplib

from django.shortcuts import render
from django.http import HttpResponse, HttpResponseRedirect
import smtplib
import json
from django.conf import settings
# Create your views here.

def index(request):
    return render(request, 'personal/home.html')

def about(request):
    return render(request, 'personal/about.html')

def contact(request):
    return render(request, 'personal/contact.html')

def clientEmail(request):
    json_data = json.loads(request.body)

    # firstName = json_data['firstName']
    # lastName = json_data['lastName']
    # company = json_data['company']
    # address = json_data['address']
    email = json_data['email']
    # ref = json_data['ref']

    SUBJECT = "New Order Submitted"

    text = 'it works'

    BODY = "\r\n".join([
    "From: %s" % settings.FROM_EMAIL,
    "To: %s" % email,
    "Subject: %s" % SUBJECT ,
    "",
    text
    ])


    try:
        server = smtplib.SMTP(settings.SMTP_HOST_AND_PORT)
        server.starttls()
        server.login(settings.SMTP_USERNAME,settings.SMTP_PASSWORD)
        server.sendmail(settings.FROM_EMAIL, settings.TO_EMAIL, BODY)
        server.quit()
    except:
        return HttpResponse(status=400)
    return HttpResponse(status=200) 



def email(request):
    json_data = json.loads(request.body)
    firstName = json_data['firstName']
    lastName = json_data['lastName']
    company = json_data['company']
    address = json_data['address']
    email = json_data['email']
    ref = json_data['ref']
    docType = []
    docNum = []
    docCert = []
    docLegal = []
    docCountry = []
    docNumofCopies = []
    docMedia = []
    docForward = []
    docEmail = []
    docCost = []
    docTime = []

    for i in range(1, 1 + len(json_data)/11):
        docTypeNumber = 'docType' + str(i+1)
        docNumNumber = 'docNum' + str(i+1)
        docCertNumber = 'docCert' + str(i+1)
        docLegalNumber = 'docLegal' + str(i+1)
        docCountryNumber = 'docCountry' + str(i+1)
        docNumofCopiesNumber = 'docNumofCopies' + str(i+1)
        docMediaNumber = 'docMedia' + str(i+1)
        docForwardNumber = 'docForward' + str(i+1)
        docEmailNumber = 'docEmail' + str(i+1)
        docCostNumber = 'docCost' + str(i+1)
        docTimeNumber = 'docTime' + str(i+1)

        docType1 = json_data[docTypeNumber]
        docNum1 = json_data[docNumNumber]
        docCert1 = json_data[docCertNumber]
        docLegal1 = json_data[docLegalNumber]
        docCountry1 = json_data[docCountryNumber]
        docNumofCopies1 = json_data[docNumofCopiesNumber]
        docMedia1 = json_data[docMediaNumber]
        docForward1 = json_data[docForwardNumber]
        docEmail1 = json_data[docEmailNumber]
        docCost1 = json_data[docCostNumber]
        docTime1 = json_data[docTimeNumber]
        docType.append(docType1)
        docNum.append(docNum1)
        docCert.append(docCert1)
        docLegal.append(docLegal1)
        docCountry.append(docCountry1)
        docNumofCopies.append(docNumofCopies1)
        docMedia.append(docMedia1)
        docForward.append(docForward1)
        docEmail.append(docEmail1)
        docCost.append(docCost1)
        docTime.append(docTime1)

    SUBJECT = "New Order Submitted"

    text = 'Thank you for your order! \n \n Below is an overview of your order: \n \n'

    orderText = ''

    for i in range(0, len(docType)):
        orderLineP = "DOCUMENT " + str(i +1) + ":"
        docTypeP = docType[i]
        docNumP = docNum[i]
        docCertP = docCert[i]
        docLegalP = docLegal[i]
        docCountryP = docCountry[i]
        docNumofCopiesP = docNumofCopies[i]
        docMediaP = docMedia[i]
        docForwardP = docForward[i]
        docEmailP = docEmail[i]
        docCostP = docCost[i]
        docTimeP = docTime[i]

        subText = (orderLineP + "\n"
        +"Document Type: " + str(docTypeP) + "\n"
        +"Document Number: " + str(docNumP) +"\n"
        +"Certified: " + str(docCertP) + "\n"
        +"Legalized: " + str(docLegalP) + "\n"
        +"Country (if legalized): " + str(docCountryP) + "\n"
        +"Number of Copies: " + str(docNumofCopiesP) + "\n"
        +"Document Media: " + str(docMediaP) + "\n"
        +"Forward to associate: " + str(docForwardP) + "\n"
        +"Email a PDF copy: " + str(docEmailP) + "\n"
        +"Cost: " + str(docCostP) + "\n"
        +"Time: " + str(docTimeP)+ "\n \n")
        orderText = orderText + subText
        
    emailFooter = "This is an automated email and we will not respond to replys sent to this email address. \n If you have any questions or concerns please send an email to us at info@thepatentplace.com or call us at 1-703-415-1077. \n \n \n Sincerely,\n Zac Mraz \n Chief Executive Officer\n The Patent Place, Inc.\n 301 Franklin St., 3rd Floor \n Alexandria, VA 22314 \n Tel: 703-415-1077 \n Email: info@thepatentplace.com"

    text = text + orderText + emailFooter

    BODY = "\r\n".join([
        "From: %s" % settings.FROM_EMAIL,
        "To: %s" % settings.TO_EMAIL,
        "Subject: %s" % SUBJECT ,
        "",
        text
        ])

    clientText = ('Hi ' + firstName + ',' "\n \n"
    + 'Thank you for your order! We have recieved the details of your request and are currently processing your order.' "\n\n"
    + 'Below is summary of your order, if you see any errors or have any concerns please email us at info@thepatentplace.com. Please do not reply to this email, it was computer generated and we do not check this email account.' +'\n\n\n'
    )

    clientInfo = ('Your Contact Information: \n'
    + 'First Name: ' + firstName + '\n'
    + 'last Name: ' + lastName + '\n'
    + 'Email: ' + email + '\n'
    + 'Company: ' + company + '\n'
    + 'Address: ' + address + '\n'
    + 'Billing Reference: ' + ref + '\n\n')

    clientMessage= clientText + clientInfo + orderText + emailFooter

    clientBody = "\r\n".join([
    "From: %s" % settings.FROM_EMAIL,
    "To: %s" % email,
    "Subject: %s" % SUBJECT ,
    "",
    clientMessage
    ])


    try:
        server = smtplib.SMTP(settings.SMTP_HOST_AND_PORT)
        server.starttls()
        server.login(settings.SMTP_USERNAME,settings.SMTP_PASSWORD)
        server.sendmail(settings.FROM_EMAIL, settings.TO_EMAIL, BODY)
        server.sendmail(settings.FROM_EMAIL, email, clientBody)
        server.quit()
    except:
        return HttpResponse(status=400)
    return HttpResponse(status=200)

def email2(request):
    json_data = json.loads(request.body)
    docType = []
    docNum = []
    docCert = []
    docLegal = []
    docCountry = []
    docNumofCopies = []
    docMedia = []
    docForward = []
    docEmail = []
    docCost = []


    for i in range(0, len(json_data)):
        if i > 0:
            docType1 = json_data[i].get('docType')
            docNum1 = json_data[i].get('docNum')
            docCert1 = json_data[i].get('docCert')
            docLegal1 = json_data[i].get('docLegal')
            docCountry1 = json_data[i].get('docLegal')
            docNumofCopies1 = json_data[i].get('docNumofCopies')
            docMedia1 = json_data[i].get('docMedia')
            docForward1 = json_data[i].get('docForward')
            docEmail1 = json_data[i].get('docEmail')
            docCost1 = json_data[i].get('docCost')
            docType.append(docType1)
            docNum.append(docNum1)
            docCert.append(docCert1)
            docLegal.append(docLegal1)
            docCountry.append(docCountry1)
            docNumofCopies.append(docNumofCopies1)
            docMedia.append(docMedia1)
            docForward.append(docForward1)
            docEmail.append(docEmail1)
            docCost.append(docCost1)

    SUBJECT = "New Order Submitted"

    text = 'Thank you for your order! \n \n Below is an overview of your order: \n \n'

    for i in range(0, len(docType)):
        orderLineP = "DOCUMENT " + str(i +1) + ":"
        docTypeP = docType[i]
        docNumP = docNum[i]
        docCertP = docCert[i]
        docLegalP = docLegal[i]
        docCountryP = docCountry[i]
        docNumofCopiesP = docNumofCopies[i]
        docMediaP = docMedia[i]
        docForwardP = docForward[i]
        docEmailP = docEmail[i]
        docCostP = docCost[i]

        subText = (orderLineP + "\n"
        +"document Type: " + str(docTypeP) + "\n"
        +"document Number: " + str(docNumP) +"\n"
        +"certified: " + str(docCertP) + "\n"
        +"legalized: " + str(docLegalP) + "\n"
        +"country (if legalized): " + str(docCountryP) + "\n"
        +"number of Copies: " + str(docNumofCopiesP) + "\n"
        +"document Media: " + str(docMediaP) + "\n"
        +"forward to associate: " + str(docForwardP) + "\n"
        +"Email a PDF copy: " + str(docEmailP) + "\n"
        +"Document Cost: " + str(docCostP) + "\n \n")
        text = text + subText
        
    emailFooter = "This is an automated email and we will not respond to replys sent to this email address. \n If you have any questions or concerns please send an email to us at info@thepatentplace.com or call us at 1-703-415-1077. \n \n \n Sincerely,\n Zac Mraz \n Chief Executive Officer\n The Patent Place, Inc."

    text = text + emailFooter
    BODY = "\r\n".join([
        "From: %s" % settings.FROM_EMAIL,
        "To: %s" % settings.TO_EMAIL,
        "Subject: %s" % SUBJECT ,
        "",
        text
        ])


    try:
        server = smtplib.SMTP(settings.SMTP_HOST_AND_PORT)
        server.starttls()
        server.login(settings.SMTP_USERNAME,settings.SMTP_PASSWORD)
        server.sendmail(settings.FROM_EMAIL, settings.TO_EMAIL, BODY)
        server.quit()
    except:
        return HttpResponse(status=400)
    return HttpResponse(status=200)

def thanks(request):
    order = request.GET.get('order')

    return render(request, 'personal/thank_you.html', {'order': json.loads(order)})
