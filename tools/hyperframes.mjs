import {spawnSync} from 'node:child_process';
import {existsSync} from 'node:fs';
import {resolve} from 'node:path';
const env={...process.env,HYPERFRAMES_NO_TELEMETRY:'1',XDG_CACHE_HOME:process.env.XDG_CACHE_HOME || resolve('.cache'),XDG_STATE_HOME:process.env.XDG_STATE_HOME || resolve('.local-state')};
if (!env.HYPERFRAMES_BROWSER_PATH && existsSync('/usr/bin/chromium')) env.HYPERFRAMES_BROWSER_PATH='/usr/bin/chromium';
const r=spawnSync(process.execPath,['node_modules/hyperframes/bin/hyperframes.mjs',...process.argv.slice(2)],{env,stdio:'inherit'});
if (r.error) {console.error(r.error.message);process.exit(1);}
process.exit(r.status ?? 1);
