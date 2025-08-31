import http from 'k6/http';

export let options = {
    vus: 10, // 10 virtual users continuously making HTTP requests for 10s
    duration: '10s'
};


export default function () {
    http.get('https://stackfood-test-web.6amdev.xyz/?from-splash=false');
}
