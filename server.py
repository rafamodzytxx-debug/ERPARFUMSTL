import os
import sys
from http.server import HTTPServer, SimpleHTTPRequestHandler

class ErParfumHandler(SimpleHTTPRequestHandler):
    def end_headers(self):
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('X-Content-Type-Options', 'nosniff')
        path_lower = self.path.lower()
        if path_lower.endswith('.html') or path_lower in ['/', '/cart']:
            self.send_header('Cache-Control', 'no-cache, must-revalidate')
        elif any(path_lower.endswith(ext) for ext in ['.jpg', '.jpeg', '.png', '.webp', '.svg', '.ico']):
            self.send_header('Cache-Control', 'public, max-age=604800, immutable')
        else:
            self.send_header('Cache-Control', 'public, max-age=86400')
        super().end_headers()

    def do_GET(self):
        clean_path = self.path.split('?')[0].split('#')[0]
        if clean_path in ['/', '']:
            self.path = '/index.html'
        elif clean_path in ['/cart', '/cart/']:
            self.path = '/cart.html'
        elif clean_path in ['/health', '/healthz']:
            self.send_response(200)
            self.send_header('Content-Type', 'text/plain')
            self.end_headers()
            self.wfile.write(b'OK')
            return
        elif not os.path.exists('.' + clean_path) and os.path.exists('.' + clean_path + '.html'):
            self.path = clean_path + '.html'
        return super().do_GET()

def run():
    port = int(os.environ.get('PORT', 8080))
    server_address = ('0.0.0.0', port)
    httpd = HTTPServer(server_address, ErParfumHandler)
    print(f"ER PARFUM Python server running on http://0.0.0.0:{port}")
    sys.stdout.flush()
    httpd.serve_forever()

if __name__ == '__main__':
    run()
