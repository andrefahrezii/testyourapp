export default async function handler(req, res) {
    if (req.method === "POST") {
        const { username, password } = req.body;

        try {
            // Check if username and password are not empty before handling login
            if (username.trim() !== "" && password.trim() !== "") {
                // Handle login logic here
                // const response = await fetch("https://techtest.youapp.ai/api/register", {
                const response = await fetch("https://dummyjson.com/auth/login", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        username: username,
                        password: password,
                    }),
                });
                if (response.status === 200) {
                    const data = await response.json();
                    console.log("Register successful");
                    res.status(200).json({ success: true, message: "Register successful", token: data.token });
                } else {
                    console.log("Register failed");
                    res.status(response.status).json({
                        success: false,
                        message: "Register failed. Please check your username and password.",
                    });
                }
            } else {
                res.status(400).json({
                    success: false,
                    message: "Please fill in both Email, username and password.",
                });
            }
        } catch (error) {
            console.error("An error occurred during Register:", error.message);
            // Tampilkan respons JSON atau tindakan lain yang sesuai di sini
            res.status(500).json({
                success: false,
                message: "An error occurred during Register. Please check your network connection.",
            });
        }
    } else {
        // Metode HTTP tidak diizinkan
        res.status(405).json({ success: false, message: "Method Not Allowed" });
    }
}
