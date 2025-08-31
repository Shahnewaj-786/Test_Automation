import http from 'k6/http';

export let options = {
    vus: 10, // 10 virtual users continuously making HTTP requests for 1000 iteration
    iterations: 1000
};

export default function () {
    http.get('https://stackfood-test-web.6amdev.xyz/?from-splash=false');
}
