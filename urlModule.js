//URL Module

import url from 'url'

const myUrl = new URL('https://example.org:8000');
myUrl.pathname = '/a/b/c';
myUrl.search = '?d=e';
myUrl.hash = '#fgh';
myUrl.password = 'secret';

console.log(myUrl)
console.log(myUrl.href);