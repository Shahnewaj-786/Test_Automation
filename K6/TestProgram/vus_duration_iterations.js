import http from 'k6/http';

export let options = {
    vus: 10,
    duration:'10s',
    iterations: 1000
    
};

export default function () {
    http.get('https://stackfood-test-web.6amdev.xyz/?from-splash=false');
}
