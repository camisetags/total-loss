from os import listdir
from os.path import isfile, join

build_path_js = 'build/static/js'
build_path_css = 'build/static/css'
build_path_media = 'build/static/media'

def load_files(path):
    return [f for f in listdir(path) if isfile(join(path, f))]

js_files = load_files(build_path_js)
css_files = load_files(build_path_css)
media_files = load_files(build_path_media)

offline_manifest_file = open('./build/offline.manifest', 'w')
offline_manifest_file.write('CACHE MANIFEST')
offline_manifest_file.write(u'\n')
offline_manifest_file.write(u'\n')
offline_manifest_file.write('CACHE:')
offline_manifest_file.write(u'\n')

for f in js_files:
    offline_manifest_file.write(u'{}/{}\n'.format('static/js', f))

for f in css_files:
    offline_manifest_file.write(u'{}/{}\n'.format('static/css', f))

for f in media_files:
    offline_manifest_file.write(u'{}/{}\n'.format('static/media', f))

offline_manifest_file.write(u'serviceWorkerRegister.js\n');
offline_manifest_file.write(u'serviceWorker.js\n');
offline_manifest_file.write(u'app.manifest\n');

offline_manifest_file.close()


server_entry = open('./build/index.php', 'w')
server_entry.write(u'<?php include_once("index.html"); ?>')
server_entry.close()

server_entry = open('./build/composer.json', 'w')
server_entry.write(u'{}')
server_entry.close()

print(css_files)
print(js_files)
print(media_files)
print('Manifest file created')