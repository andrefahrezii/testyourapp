// api/profile.js
import axios from 'axios';

export default async function handler(req, res) {
    if (req.method === 'GET') {
        const token = req.headers['x-access-token'];

        try {
            const response = await axios.get('https://techtest.youapp.ai/api/getProfile', {
                headers: {
                    'x-access-token': token,
                },
            });

            const data = response.data;
            res.status(200).json(data);
        } catch (error) {
            console.error('Error fetching profile data:', error.message);
            res.status(500).json({ success: false, message: 'Internal Server Error' });
        }
    } else {
        res.status(405).json({ success: false, message: 'Method Not Allowed' });
    }
}
