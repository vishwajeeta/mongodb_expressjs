import requests

# Replace with your actual login endpoint URL
url = 'http://localhost:5000/api/auth/login'

# Sample login credentials
credentials = {
    'email': 'new_user@example.com',  # Use an existing registered email
    'password': 'yourpassword'         # Use the correct password
}

def test_login(credentials):
    response = requests.post(url, json=credentials)
    
    if response.status_code == 200:
        print('Login successful!')
        print('Response:', response.text)
    elif response.status_code == 400:
        print('Login failed: Invalid email or password')
    elif response.status_code == 500:
        print('Server error occurred')
        print('Error details:', response.text)  # Show error details
    else:
        print('Unexpected response:', response.status_code)

# Run the test
if __name__ == '__main__':
    test_login(credentials)
