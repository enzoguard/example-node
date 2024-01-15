import * as https from 'https';
import { ProxyAgent } from 'proxy-agent';

const agent = new ProxyAgent();

https.get('https://debug.enzoguard.com/ip', { agent }, (res) => {
  res.pipe(process.stdout);
});

