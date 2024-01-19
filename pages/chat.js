import React, { useState, useEffect } from "react";
import { Center, Box, Input, VStack, Button, Text, Heading, HStack, IconButton, ArrowBackIcon } from "native-base";
import { io } from "socket.io-client";

const ChatPages = () => {
    const [messages, setMessages] = useState([]);
    const [newMessage, setNewMessage] = useState("");
    const [socket, setSocket] = useState(null);

    useEffect(() => {
        // Connect to WebSocket server
        const newSocket = io("ws://localhost:3000/");

        setSocket(newSocket);

        // Listen for incoming messages
        newSocket.on("message", (message) => {
            console.log(message, "message");
            setMessages((prevMessages) => [...prevMessages, message]);
        });

        // Clean up the socket connection when component unmounts
        return () => {
            newSocket.disconnect();
        };
    }, []); // Use an empty dependency array to run this only once on mount

    const messageListen = (message) => {
        setMessages((prevMessages) => [...prevMessages, message]);
    };

    useEffect(() => {
        if (socket) {
            socket.on("message", messageListen);
            return () => {
                socket.off("message", messageListen);
            };
        }
    }, [socket]); // Add socket as a dependency
    console.log(socket, "socket messaget")
    const handleSendMessage = () => {
        if (socket && newMessage.trim() !== "") {
            // Send message to the server
            socket.emit("message", { text: newMessage, sender: "user" });
            setNewMessage("");
        }
    };
    return (
        <Box safeArea flex={1}>
            <HStack space={2} alignItems="center" p={4} bg="gray.100">
                <IconButton
                    icon={<ArrowBackIcon size="6" />}
                    onPress={() => {
                        // Handle back button click
                    }}
                />
                <Heading flex={1} textAlign="center" fontSize="xl">
                    Chat Room
                </Heading>
            </HStack>
            <Center flex={1}>
                <VStack flex={1} width="90%">
                    {messages.map((message, index) => (
                        <Box
                            key={index}
                            p={2}
                            mb={2}
                            borderRadius="md"
                            bg={message.sender === "user" ? "blue.500" : "gray.300"}
                        >
                            <Text color={message.sender === "user" ? "white" : "black"}>
                                {message.text}
                            </Text>
                        </Box>
                    ))}
                </VStack>
                <HStack space={2} alignItems="center" p={4} bg="gray.100">
                    <Input
                        flex={1}
                        placeholder="Type your message..."
                        value={newMessage}
                        onChangeText={(text) => setNewMessage(text)}
                    />
                    <Button onPress={handleSendMessage} colorScheme="teal" ml={2}>
                        Send
                    </Button>
                </HStack>
            </Center>
        </Box>
    );
};

export default ChatPages;
