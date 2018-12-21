var shell = require('shelljs');

shell.mkdir('-p', 'dist/public/js/lib');
shell.cp('-R', 'src/public/js/lib', 'dist/public/js/lib');

shell.mkdir('-p', 'dist/public/fonts');
shell.cp('-R', 'src/public/fonts', 'dist/public/fonts');

shell.mkdir('-p', 'dist/public/images');
shell.cp('-R', 'src/public/images', 'dist/public/images');

shell.mkdir('-p', 'dist/views');
shell.cp('-R', 'src/views', 'dist');