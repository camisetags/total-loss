from os import listdir
from os.path import isfile, join

build_path_js = 'build/static/js'
build_path_css = 'build/static/css'

js_files = [f for f in listdir(build_path_js) if isfile(join(build_path_js, f))]
css_files = [f for f in listdir(build_path_css) if isfile(join(build_path_css, f))]

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
    
offline_manifest_file.close()

print(css_files)
print(js_files)
print('Manifest file created')