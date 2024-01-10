import React, { useState } from "react";
import {
    Center,
    IconButton,
    Box,
    Input,
    VStack,
    Button,
    Text,
    Heading,
    Link as NBLink,
    HStack,
    ArrowBackIcon,
} from "native-base";
import { EyeIcon, EyeOffIcon } from "native-base";
// import { useNavigation } from '@react-navigation/native';

const LoginPage = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    // const navigation = useNavigation();

    const handleLogin = async () => {
        try {
            // const response = await fetch("/api/login", {
            const response = await fetch("https://techtest.youapp.ai/api/login", {
                // const response = await fetch("https://backend.wosiangmalam.site/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Origin": "*",
                },
                body: JSON.stringify({
                    email: "",
                    username: username,
                    password: password,
                }),
                // username: 'kminchelle',
                // password: '0lelplR',
            });

            if (response.ok) {
                alert("Login successful");
                const data = await response.json();
                localStorage.setItem("token", data.access_token);
                // navigation.navigate("profile");
                window.location.href = "/profile";
            } else {
                alert("Login failed. Please check your username and password.");
            }
        } catch (error) {
            console.error("An error occurred during login:", error.message);
            // Tampilkan alert kesalahan jaringan
            alert("An error occurred during login. Please check your network connection.");
        }
    };

    const goToRegister = () => {
        // navigation.navigate("register");
        window.location.href = "/register";

    };

    return (
        <Center flex={1} bg="blueGray.900" height="100vh">
            <HStack position="absolute" top={4} left={4} alignItems="center">
                <IconButton
                    onPress={() => console.log("Back pressed")}
                    icon={<ArrowBackIcon color="white" size={4} />}
                />
                <Text color="white" ml={2}>
                    Back
                </Text>
            </HStack>

            <VStack alignItems="flex-start" space="xl" p={4} width="100%">
                <Box mb={1}>
                    <Heading size="md" alignSelf="flex-start" ml={2} color="white">
                        Login
                    </Heading>
                </Box>
                <Box mb={2} width="100%">
                    <Input
                        color="white"
                        variant="filled"
                        placeholder="Username"
                        bg={"blueGray.800"}
                        borderColor={"blueGray.600"}
                        width="100%"
                        value={username}
                        onChangeText={(text) => setUsername(text)}
                    />
                </Box>
                <Box mb={2} width="100%">
                    <Input
                        color="white"
                        variant="filled"
                        type={showPassword ? "text" : "password"}
                        placeholder="Password"
                        bg={"blueGray.800"}
                        borderColor={"blueGray.600"}
                        width="100%"
                        value={password}
                        onChangeText={(text) => setPassword(text)}
                    // InputRightElement={
                    //     <IconButton
                    //         onPress={() => setShowPassword(!showPassword)}
                    //         icon={showPassword ? <EyeOffIcon color="white" size={5} /> : <EyeIcon color="white" size={5} />}
                    //     />
                    // }
                    />
                </Box>
                <Button onPress={handleLogin} colorScheme="teal" width="100%" isDisabled={!username || !password}>
                    Login
                </Button>
            </VStack>
            <Text color="white">
                No account?{" "}
                <NBLink
                    onPress={goToRegister}
                    style={{
                        color:
                            "linear-gradient(74.08deg, #94783E -6.8%, #F3EDA6 16.76%, #F8FAE5 30.5%, #FFE2BE 49.6%, #D5BE88 78.56%, #F8FAE5 89.01%, #D5BE88 100.43%), linear-gradient(0deg, #FFFFFF, #FFFFFF)",
                    }}
                >
                    Register here
                </NBLink>
            </Text>
        </Center>
    );
};

export default LoginPage;
