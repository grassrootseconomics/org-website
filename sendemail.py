import cgi
import cgitb
from http.server import BaseHTTPRequestHandler, HTTPServer


cgitb.enable()

class serverHandler(BaseHTTPRequestHandler):
    def do_GET(self):
        self.send_response(200)
        self.send_header('content-type', 'text/html')
        self.end_headers()
        self.wfile.write(self.path[1:].encode())

    def do_POST(self):
        try:
            self.send_response(200)
            self.send_header('content-type', 'text/html')
            self.end_headers()


            form_inputs = cgi.FieldStorage()

            name = form_inputs.getvalue('name')
            self.wfile.write(name.encode(encoding = "utf_8"))
            print(name)
        except:
            print("not posting")

def run():

    try:
        port = 8000
        host = ''
        serveraddr = (host, port)
        servernew = HTTPServer(serveraddr, serverHandler)
        print(f"server running on {port}")
        servernew.serve_forever()
    except KeyboardInterrupt:
        print("keyboard interrupt")
        servernew.socket.close()

if __name__ == '__main__':
    run()

