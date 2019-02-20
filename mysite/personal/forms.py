from django import forms

class ContactForm(forms.Form):
    firstName = forms.CharField(label ="First Name", max_length=20, widget=forms.TextInput(attrs={'placeholder': 'First Name'}))
    lastName = forms.CharField(label ="Last Name", max_length=20, widget=forms.TextInput(attrs={'placeholder': 'Last Name'}))
    company = forms.CharField(label ="Company", max_length=20, widget=forms.TextInput(attrs={'placeholder': 'Company/Firm'}))
    Email = forms.EmailField(label = "Email", widget=forms.TextInput(attrs={'placeholder': 'Email'}))
    comment = forms.CharField(label ="Question", widget=forms.Textarea(attrs={'placeholder': 'Question/Comment'}))