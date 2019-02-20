# -*- coding: utf-8 -*-
from __future__ import unicode_literals

import smtplib
import urllib
import urllib2
import json





from django.conf import settings
from django.shortcuts import render, redirect
from django.http import HttpResponse, HttpResponseRedirect
from django.contrib import messages

# from urllib import parse, request
# import urllib.parse

from personal.forms import ContactForm


# Create your views here.

def index(request):
    return render(request, 'personal/home.html')

def about(request):
    return render(request, 'personal/about.html')

def contact(request):
    if request.method == 'POST':
            form = ContactForm(request.POST)
            if form.is_valid():

                ''' Begin reCAPTCHA validation '''
                recaptcha_response = request.POST.get('g-recaptcha-response')
                
                # if recaptcha_response == None:
                #     messages.error(request, 'Invalid reCAPTCHA. Please try again.')
                
                # else:



                url = 'https://www.google.com/recaptcha/api/siteverify'
                values = {
                    'secret': settings.GOOGLE_RECAPTCHA_SECRET_KEY,
                    'response': recaptcha_response
                }

                data = urllib.urlencode(values)
                req = urllib2.Request(url, data)
                response = urllib2.urlopen(req)
                result = json.load(response)
                ''' End reCAPTCHA validation '''

                if result['success']:

                    firstName = form.cleaned_data['firstName']
                    lastName = form.cleaned_data['lastName']
                    company = form.cleaned_data['company']
                    email = form.cleaned_data['Email']
                    question = form.cleaned_data['comment']
                    SUBJECT = "Inquiry Recieved"

                    header = "Hi " + str(firstName) + ', \n\n'

                    clientBody = "The Patent Place has recieved your inquiry and will get back to you ASAP. Thank you for reaching out and have a great day.\n\n"

                    TPPText = ("First Name: " + str(firstName) + "\n"
                    + "Last Name: " + str(lastName) + "\n"
                    + "Company: " + str(company) + "\n"
                    + "Email: " + str(email) + "\n"
                    + "Question/Comment: " + str(question) + "\n\n\n")
                        
                    emailFooter = "This is an automated email and we will not respond to replys sent to this email address. \n If you have any questions or concerns please send an email to us at info@thepatentplace.com or call us at 1-703-415-1077. \n \n \n Sincerely,\n Zac Mraz \n Chief Executive Officer\n The Patent Place, Inc.\n 301 Franklin St., 3rd Floor \n Alexandria, VA 22314 \n Tel: 703-415-1077 \n Email: info@thepatentplace.com"

                    clientText = header + clientBody + emailFooter
                    # text = text + emailFooter
                    
                    TPPBODY = "\r\n".join([
                        "From: %s" % settings.FROM_EMAIL,
                        "To: %s" % settings.TO_EMAIL,
                        "Subject: %s" % SUBJECT ,
                        "",
                        TPPText
                        ])
                    
                    CLIENTBODY = "\r\n".join([
                        "From: %s" % settings.FROM_EMAIL,
                        "To: %s" % email,
                        "Subject: %s" % SUBJECT ,
                        "",
                        clientText
                        ])


                    try:
                        server = smtplib.SMTP(settings.SMTP_HOST_AND_PORT)
                        server.starttls()
                        server.login(settings.SMTP_USERNAME,settings.SMTP_PASSWORD)
                        server.sendmail(settings.FROM_EMAIL, settings.TO_EMAIL, TPPBODY)
                        server.sendmail(settings.FROM_EMAIL, email, CLIENTBODY)
                        server.quit()
                    except:
                        return HttpResponse(status=400)

                    return render(request, 'personal/contactConf.html')



                else:
                    messages.error(request, 'Invalid reCAPTCHA. Please try again.')   

    else:
        form = ContactForm()
    return render(request, 'personal/contact.html', {'form': form})
    

def email(request):
    json_data = json.loads(request.body)
    ''' Begin reCAPTCHA validation '''
    recaptcha_response = json_data['cResponse']
    
    url = 'https://www.google.com/recaptcha/api/siteverify'
    values = {
        'secret': settings.GOOGLE_RECAPTCHA_SECRET_KEY,
        'response': recaptcha_response
    }

    data = urllib.urlencode(values)
    req = urllib2.Request(url, data)
    response = urllib2.urlopen(req)
    result = json.load(response)
    ''' End reCAPTCHA validation '''

    if result['success']:
        firstName = json_data['firstName']
        lastName = json_data['lastName']
        company = json_data['company']
        address = json_data['address']
        email = json_data['email']
        ref = json_data['ref']
        instructions = json_data['instructions']
        totalEst = json_data['totalEst']
        discount = json_data['discount']
        finalEst = json_data['finalEst']  
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
        shipInfo = []

        if instructions == '':
            instructions = "None given"  
        # else:
        #     instructions = "None given"
        

        for i in range(2, 2 + ((len(json_data)-10)/12)):
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
            docShipNumber = 'shipInfo' + str(i+1)

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
            docShip1 = json_data[docShipNumber]
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
            shipInfo.append(docShip1)

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
            docShipP = shipInfo[i]

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
            +"Time: " + str(docTimeP)+ "\n"
            +"Ship Info: " + str(docShipP) + "\n\n")
            orderText = orderText + subText
        
        clientInfo = ('Contact Information: \n'
        + 'First Name: ' + firstName + '\n'
        + 'last Name: ' + lastName + '\n'
        + 'Email: ' + email + '\n'
        + 'Company: ' + company + '\n'
        + 'Address: ' + address + '\n'
        + 'Billing Reference: ' + ref + '\n\n')  

        specialInstructions = "Special instructions or comments: " + str(instructions) + "\n\n" 

        orderEstimate = ("Order Estimate: \n"
        + 'Total Estimate: $' + totalEst + '.00\n'
        + 'Discount: $' + discount + '.00\n'
        + 'Final Estimate: $' + finalEst + '.00\n\n')

        emailFooter = "This is an automated email and we will not respond to replys sent to this email address. \n If you have any questions or concerns please send an email to us at info@thepatentplace.com or call us at 1-703-415-1077. \n \n \n Sincerely,\n Zac Mraz \n Chief Executive Officer\n The Patent Place, Inc.\n 301 Franklin St., 3rd Floor \n Alexandria, VA 22314 \n Tel: 703-415-1077 \n Email: info@thepatentplace.com"

        text = clientInfo + orderText + specialInstructions + orderEstimate

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

        clientMessage= clientText + clientInfo + orderText + specialInstructions + orderEstimate + emailFooter

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
    else:
        messages.error(request, 'Invalid reCAPTCHA. Please try again.')
        return render(request, 'personal/confirmation.html')   


def contactEmail(request):
    json_data = json.loads(request.body)
    firstName = json_data[0]['firstName']
    lastName = json_data[0]['lastName']
    company = json_data[0]['company']
    email = json_data[0]['email']
    question = json_data[0]['question']

    SUBJECT = "Inquiry Recieved"

    header = "Hi " + str(firstName) + ', \n\n'

    clientBody = "The Patent Place has recieved your inquiry and will get back to you ASAP. Thank you for reaching out and have a great day.\n\n"

    TPPText = ("First Name: " + str(firstName) + "\n"
    + "Last Name: " + str(lastName) + "\n"
    + "Company: " + str(company) + "\n"
    + "Email: " + str(email) + "\n"
    + "Question/Comment: " + str(question) + "\n\n\n")
        
    emailFooter = "This is an automated email and we will not respond to replys sent to this email address. \n If you have any questions or concerns please send an email to us at info@thepatentplace.com or call us at 1-703-415-1077. \n \n \n Sincerely,\n Zac Mraz \n Chief Executive Officer\n The Patent Place, Inc.\n 301 Franklin St., 3rd Floor \n Alexandria, VA 22314 \n Tel: 703-415-1077 \n Email: info@thepatentplace.com"

    clientText = header + clientBody + emailFooter
    # text = text + emailFooter
    
    TPPBODY = "\r\n".join([
        "From: %s" % settings.FROM_EMAIL,
        "To: %s" % settings.TO_EMAIL,
        "Subject: %s" % SUBJECT ,
        "",
        TPPText
        ])
    
    CLIENTBODY = "\r\n".join([
        "From: %s" % settings.FROM_EMAIL,
        "To: %s" % email,
        "Subject: %s" % SUBJECT ,
        "",
        clientText
        ])


    try:
        server = smtplib.SMTP(settings.SMTP_HOST_AND_PORT)
        server.starttls()
        server.login(settings.SMTP_USERNAME,settings.SMTP_PASSWORD)
        server.sendmail(settings.FROM_EMAIL, settings.TO_EMAIL, TPPBODY)
        server.sendmail(settings.FROM_EMAIL, email, CLIENTBODY)
        server.quit()
    except:
        return HttpResponse(status=400)
    return HttpResponse(status=200)

def thanks(request):
    order = request.GET.get('order')

    return render(request, 'personal/thank_you.html', {'order': json.loads(order)})

def confirmation(request):
    return render(request, 'personal/confirmation.html')

def contactConf(request):
    return render(request, 'personal/contactConf.html')