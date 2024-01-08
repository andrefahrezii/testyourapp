import React, { useState } from "react";
import { Center, IconButton, Text, VStack, HStack, ArrowBackIcon, Box, Button, Input, Heading } from "native-base";

const RegisterPage = () => {
    const gotProfile = () => {
        navigation.navigate("profile");
    };
    const gotAbout = () => {
        navigation.navigate("about");
    };

    const [interest, setInterest] = useState("");
    const [interestList, setInterestList] = useState([]);

    const addInterest = () => {
        if (interest.trim() !== "") {
            setInterestList([...interestList, interest.trim()]);
            setInterest("");
        }
    };

    return (
        <Center flex={1} bg="#09141A">
            <HStack position="absolute" top={4} left={4} alignItems="center" flex={1} justifyContent="center">
                <IconButton onPress={gotProfile} icon={<ArrowBackIcon color="white" size={4} />} />
                <Text color="white" ml={2}>
                    Back
                </Text>
                <Text color="white" ml={40} mx={2}>
                    Save
                </Text>
            </HStack>
            <Center flex={1} position="absolute" top="20">
                <VStack>
                    <Text color="white">Tell everyone about yourself</Text>
                    <Heading color="white">What interests you?</Heading>
                    <Input
                        bg="rgba(217, 217, 217, 0.06)"
                        color="white"
                        placeholder="Type interests here..."
                        value={interest}
                        onChangeText={(text) => setInterest(text)}
                        onSubmitEditing={addInterest}
                    />
                    <HStack mt={2} flexWrap="wrap">
                        {interestList.map((item, index) => (
                            <Box
                                key={index}
                                bg="rgba(217, 217, 217, 0.06)"
                                borderRadius={8}
                                p={2}
                                m={1}
                            >
                                <Text color="white">{item}</Text>
                            </Box>
                        ))}
                    </HStack>
                </VStack>
            </Center>
        </Center>
    );
};

export default RegisterPage;
