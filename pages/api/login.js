import axios from 'axios';

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { username, password } = req.body;

        try {
            if (username.trim() !== '' && password.trim() !== '') {
                const response = await axios.post('https://techtest.youapp.ai/api/login', {
                    username: username,
                    password: password,
                });

                if (response.status === 200) {
                    // Login successful
                    const data = response.data;
                    console.log('Login successful');
                    res.status(200).json({ success: true, message: 'Login successful', token: data.token });
                } else {
                    // Login failed
                    console.log('Login failed');
                    res.status(response.status).json({
                        success: false,
                        message: 'Login failed. Please check your username and password.',
                    });
                }
            } else {
                // Jika username atau password kosong
                res.status(400).json({
                    success: false,
                    message: 'Please fill in both username and password.',
                });
            }
        } catch (error) {
            console.log(error)
            console.error('An error occurred during login:', error.message);
            res.status(500).json({
                success: false,
                message: 'An error occurred during login. Please check your network connection.',
            });
        }
    } else {
        // Metode HTTP tidak diizinkan
        res.status(405).json({ success: false, message: 'Method Not Allowed' });
    }
}
