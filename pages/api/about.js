import axios from 'axios';

export default async function handler(req, res) {
    if (req.method === 'POST') {
        try {
            const {
                name,
                birthday,
                height,
                weight,
                interests
            } = req.body;

            const token = req.headers['x-access-token'] || '';

            const response = await axios.post('https://techtest.youapp.ai/api/createProfile', {
                name,
                birthday,
                height,
                weight,
                interests
            }, {
                headers: {
                    'x-access-token': token,
                    'Content-Type': 'application/json',
                },
            });
            console.log(response.status)
            if (response.status === 200) {
                const data = response.data;
                console.log('Profile created successfully');
                return res.status(201).json({ success: true, message: 'Profile created successfully', token: data.token });
            } else {
                console.log('Profile creation failed');
                return res.status(response.status).json({
                    success: false,
                    message: 'Profile creation failed. Please check your input data.',
                });
            }
        } catch (error) {
            console.error('An error occurred during profile creation:', error.message);
            return res.status(500).json({
                success: false,
                message: 'An error occurred during profile creation. Please check your network connection.',
            });
        }
    }

    // Method Not Allowed
    return res.status(405).json({ success: false, message: 'Method Not Allowed' });
}
