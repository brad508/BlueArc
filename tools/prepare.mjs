import {mkdirSync,copyFileSync} from 'node:fs';
mkdirSync('projects/pipeline-test/assets',{recursive:true});
copyFileSync('node_modules/gsap/dist/gsap.min.js','projects/pipeline-test/assets/gsap.min.js');
