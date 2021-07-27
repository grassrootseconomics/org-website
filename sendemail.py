import cgi
import cgitb

cgitb.enable()
form_inputs = cgi.FieldStorage()

email = form_inputs.getvalue('name')
print(str(email))
