export default async function handler(req, res) {
    if (req.method === "POST") {
        const { email, username, password } = req.body;

        try {
            // Check if required fields are not empty before handling registration
            if (email.trim() !== "" && username.trim() !== "" && password.trim() !== "") {
                // Handle registration logic here
                const response = await fetch("https://techtest.youapp.ai/api/register", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        email: email,
                        username: username,
                        password: password,
                    }),
                });

                if (response.status === 200) {
                    const data = await response.json();
                    console.log("Registration successful");
                    res.status(200).json({ success: true, message: "Registration successful", token: data.token });
                } else {
                    console.log("Registration failed");
                    res.status(response.status).json({
                        success: false,
                        message: "Registration failed. Please check your information and try again.",
                    });
                }
            } else {
                res.status(400).json({
                    success: false,
                    message: "Please fill in all required fields.",
                });
            }
        } catch (error) {
            console.error("An error occurred during Registration:", error.message);
            res.status(500).json({
                success: false,
                message: "An error occurred during Registration. Please check your network connection.",
            });
        }
    } else {
        // Method Not Allowed
        res.status(405).json({ success: false, message: "Method Not Allowed" });
    }
}
