from os import listdir
from os.path import isfile, join

build_path_js = 'build/static/js'
build_path_css = 'build/static/css'
build_path_media = 'build/static/media'

def load_files(path):
    return [f for f in listdir(path) if isfile(join(path, f))]

if __name__ == '__main__':
    js_files = load_files(build_path_js)
    css_files = load_files(build_path_css)
    media_files = load_files(build_path_media)

    with open('./build/serviceWorker.js', 'a') as archives_js:
        archives_js.write('const archives = [ "/", \n')

        with open('./build/offline.manifest', 'w') as offline_manifest_file:
            offline_manifest_file.write('CACHE MANIFEST')
            offline_manifest_file.write(u'\n')
            offline_manifest_file.write(u'\n')
            offline_manifest_file.write('CACHE:')
            offline_manifest_file.write(u'\n')

            for f in js_files:
                offline_manifest_file.write(u'{}/{}\n'.format('static/js', f))
                archives_js.write(u'"{}/{}",\n'.format('static/js', f))

            for f in css_files:
                offline_manifest_file.write(u'{}/{}\n'.format('static/css', f))
                archives_js.write(u'"{}/{}",\n'.format('static/css', f))

            for f in media_files:
                offline_manifest_file.write(u'{}/{}\n'.format('static/media', f))
                archives_js.write(u'"{}/{}",\n'.format('static/media', f))

            archives_js.write('];')
    
    with open('./build/index.php', 'w') as server_entry:
        server_entry.write(u'<?php include_once("index.html"); ?>')
    
    with open('./build/composer.json', 'w') as server_entry:
        server_entry.write(u'{}')

    print(css_files)
    print(js_files)
    print(media_files)
    print('Manifest file created\n')