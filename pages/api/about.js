import axios from 'axios';

export default async function handler(req, res) {
    if (req.method === 'POST') {
        try {
            const {
                username,
                password,
                displayName,
                gender,
                birthday,
                zodiac,
                horoscope,
                height,
                weight,
            } = req.body;



            const response = await axios.post('https://techtest.youapp.ai/api/createProfile', {
                username,
                password,
                displayName,
                gender,
                birthday,
                zodiac,
                horoscope,
                height,
                weight,
            });
            if (response.status === 200) {
                const data = response.data;
                console.log('Login successful');
                return res.status(200).json({ success: true, message: 'Login successful', token: data.token });
            } else {
                console.log('Login failed');
                return res.status(response.status).json({
                    success: false,
                    message: 'Login failed. Please check your username and password.',
                });
            }
        } catch (error) {
            console.error('An error occurred during login:', error.message);
            return res.status(500).json({
                success: false,
                message: 'An error occurred during login. Please check your network connection.',
            });
        }
    }

    // Method Not Allowed
    return res.status(405).json({ success: false, message: 'Method Not Allowed' });
}
