import os

en_html_dir = 'en/content'
tr_html_dir = 'tr/content'
en_js_dir = 'en/includes'
tr_js_dir = 'tr/includes'

header = 'document.write(\"\\\n'
footer = '\");'

for filename in os.listdir(en_html_dir):
    if filename.endswith(".html"):
        print(os.path.join(en_html_dir, filename))
        f = open(os.path.join(en_html_dir, filename), 'r')
        content = f.read()
        content = content.rstrip();
        content = content.replace('\"', '\'')
        content = content.replace('\n', '\\\n')
        content = header + content + footer
        js_filename = os.path.splitext(filename)[0] + '.js'
        g = open(os.path.join(en_js_dir, js_filename), 'w')
        g.write(content)
        f.close()
        g.close()

for filename in os.listdir(tr_html_dir):
    if filename.endswith(".html"):
        print(os.path.join(tr_html_dir, filename))
        f = open(os.path.join(tr_html_dir, filename), 'r')
        content = f.read()
        content = content.rstrip();
        content = content.replace('\"', '\'')
        content = content.replace('\n', '\\\n')
        content = header + content + footer
        js_filename = os.path.splitext(filename)[0] + '.js'
        g = open(os.path.join(tr_js_dir, js_filename), 'w')
        g.write(content)
        f.close()
        g.close()

