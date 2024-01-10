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

const RegisterPage = () => {
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    const handleRegister = async () => {
        try {
            const response = await fetch("/api/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    email,
                    username,
                    password,
                }),
            });
            if (response.ok) {
                alert("Register successful");
                const data = await response.json();
                // navigation.navigate("login");
                window.location.href = "/login";
            } else {
                alert("Register failed. Please check your username and password.");
            }
        } catch (error) {
            console.error("An error occurred during Register:", error.message);
            alert("An error occurred during Register. Please check your network connection.");
        }
    };
    const gotToHome = () => {
        // navigation.navigate("login");
        window.location.href = "/login";
    };

    return (
        <Center flex={1} bg="blueGray.900">
            <HStack position="absolute" top={4} left={4} alignItems="center">
                <IconButton
                    onPress={gotToHome}
                    icon={<ArrowBackIcon color="white" size={4} />}
                />
                <Text color="white" ml={2}>
                    Back
                </Text>
            </HStack>
            <VStack alignItems="flex-start" space="xl" p={4} width="100%">
                <Box mb={1}>
                    <Heading size="md" alignSelf="flex-start" ml={2} color="white">
                        Register
                    </Heading>
                </Box>
                <Box width="100%">
                    <Input
                        color="white"
                        variant="filled"
                        placeholder="Enter Email"
                        bg={"blueGray.800"}
                        borderColor={"blueGray.600"}
                        width="100%"
                        value={email}
                        onChangeText={(text) => setEmail(text)}
                    />
                </Box>
                <Box width="100%">
                    <Input
                        color="white"
                        variant="filled"
                        placeholder="Create Username"
                        bg={"blueGray.800"}
                        borderColor={"blueGray.600"}
                        width="100%"
                        value={username}
                        onChangeText={(text) => setUsername(text)}
                    />
                </Box>
                <Box width="100%">
                    <Input
                        color="white"
                        variant="filled"
                        type={showPassword ? "text" : "password"}
                        placeholder="Create Password"
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
                <Box width="100%">
                    <Input
                        color="white"
                        variant="filled"
                        type={showPassword ? "text" : "password"}
                        placeholder="Confirm Password"
                        bg={"blueGray.800"}
                        borderColor={"blueGray.600"}
                        width="100%"
                        value={confirmPassword}
                        onChangeText={(text) => setConfirmPassword(text)}
                    />
                </Box>
                <Button onPress={handleRegister} colorScheme="teal" width="100%" isDisabled={!email || !username || !password || !confirmPassword}>
                    Register
                </Button>
            </VStack>
            <Text color="white">
                Have an account? {" "}
                <NBLink
                    onPress={gotToHome}
                    style={{
                        color:
                            "linear-gradient(74.08deg, #94783E -6.8%, #F3EDA6 16.76%, #F8FAE5 30.5%, #FFE2BE 49.6%, #D5BE88 78.56%, #F8FAE5 89.01%, #D5BE88 100.43%), linear-gradient(0deg, #FFFFFF, #FFFFFF)",
                    }}
                >
                    Login here
                </NBLink>
            </Text>
        </Center >
    );
};

export default RegisterPage;
