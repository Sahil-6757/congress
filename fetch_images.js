const https = require('https');
https.get('https://prathamesh-pulse.lovable.app/', (res) => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    const regex = /<img[^>]+src="([^">]+)"/g;
    let match;
    while ((match = regex.exec(data)) !== null) {
      console.log(match[1]);
    }
  });
});
