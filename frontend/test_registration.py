import requests

# Replace this with your actual API URL
url = 'http://localhost:5000/api/auth/register'

# Sample registration credentials
credentials = {
    'username':'vishwa',
    'email': 'new_user@example.com',  # Replace with a new email for registration
    'password': 'yourpassword'         # Replace with a password
}

# Function to test registration
def test_registration(credentials):
    response = requests.post(url, json=credentials)
    
    if response.status_code == 201:
        print('Registration successful!')
        print('Response:', response.text)
    elif response.status_code == 400:
        print('Registration failed: User already exists')
    elif response.status_code == 500:
        print('Server error occurred')
    else:
        print('Unexpected response:', response.status_code)

# Run the test
if __name__ == '__main__':
    test_registration(credentials)
