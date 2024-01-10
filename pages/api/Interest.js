import axios from 'axios';

export default async function handler(req, res) {
    if (req.method === 'PUT') {
        try {
            const { interests } = req.body;
            const token = req.headers['x-access-token'];

            const response = await axios.put(
                'https://techtest.youapp.ai/api/updateProfile',
                { interests },
                {
                    headers: {
                        'Content-Type': 'application/json',
                        'x-access-token': token,
                    },
                }
            );

            console.log(response.data);

            // Send the response only once
            res.status(200).json(response.data);

        } catch (error) {
            console.error('An error occurred during profile update:', error.message);
            return res.status(500).json({
                success: false,
                message: 'An error occurred during profile update. Please check your network connection.',
            });
        }
    }

    // Method Not Allowed
    return res.status(405).json({ success: false, message: 'Method Not Allowed' });
}
