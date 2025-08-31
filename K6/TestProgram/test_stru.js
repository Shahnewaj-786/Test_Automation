// initialization
import http from 'k6/http';
import { sleep } from 'k6';

// Test configuration
export let options = {
    stages: [
        {
            duration: '60s', target: 100
        } // Ramp up to 100 users over 60 seconds
    ]
};

// Setup function to obtain a global access token
export function setup() {
    let loginRes = http.post('https://api.example.com/user/login', JSON.stringify({
        email: "user1@test.com",
        password: "1234"
    }), {
        headers: {
            'Content-Type': 'application/json'
        }
    });

    if (loginRes.status !== 200) {
        throw new Error('Failed to log in: ' + loginRes.status);
    }

    return { token: loginRes.json().token };
}
// VU code executed by each VU
export default function (data) {
    let params = {
        headers: {
            'Authorization': `Bearer ${data.token}`,
            'Content-Type': 'application/json'
        }
    };

    let response = http.get('https://api.example.com/users/list', params);
    check(response, {
        'is status 200': (r) => r.status === 200
    });

    sleep(1);
}

// Teardown function to log the completion
export function teardown(data) {
    console.log('Teardown completed, used token: ', data.token);
}
