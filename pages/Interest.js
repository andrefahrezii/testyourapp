import React, { useState } from "react";
import { Center, IconButton, Text, VStack, HStack, ArrowBackIcon, Box, Button, Input, Heading, Link as NBLink, } from "native-base";

const RegisterPage = () => {
    const gotProfile = () => {
        navigation.navigate("profile");
    };

    const [interest, setInterest] = useState("");
    const [interestList, setInterestList] = useState([]);

    const addInterest = () => {
        if (interest.trim() !== "") {
            setInterestList([...interestList, interest.trim()]);
            setInterest("");
        }
    };

    const removeInterest = (interestToRemove) => {
        const newInterestList = interestList.filter((item) => item !== interestToRemove);
        setInterestList(newInterestList);
    };


    const updateProfile = async () => {
        try {
            const response = await fetch('/api/Interest', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'x-access-token': localStorage.getItem("token"),
                },
                body: JSON.stringify({
                    interests: interestList,
                }),
            });

            if (response.ok) {
                console.log('Profile updated successfully');
                navigation.navigate("profile");
                // Handle navigation or any other logic after a successful update
            } else {
                console.error('Failed to update profile');
            }
        } catch (error) {
            console.error('Error updating profile:', error);
        }
    };

    return (
        <Center flex={1} bg="#09141A">
            <HStack position="absolute" top={4} left={4} alignItems="center" flex={1} justifyContent="center">
                <IconButton onPress={gotProfile} icon={<ArrowBackIcon color="white" size={4} />} />
                <Text color="white" ml={2}>
                    Back
                </Text>
                <NBLink
                    color="white"
                    onPress={updateProfile}
                    style={{
                        color:
                            "linear-gradient(74.08deg, #94783E -6.8%, #F3EDA6 16.76%, #F8FAE5 30.5%, #FFE2BE 49.6%, #D5BE88 78.56%, #F8FAE5 89.01%, #D5BE88 100.43%), linear-gradient(0deg, #FFFFFF, #FFFFFF)",
                    }}
                >
                    <Text color="white" ml={40} mx={2}>
                        Save
                    </Text>
                </NBLink>
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
                                flexDirection="row"
                                alignItems="center"
                            >
                                <Text color="white">{item}</Text>
                                <Button onPress={() => removeInterest(item)} ml={2} variant="unstyled">
                                    <Text color="white">x</Text>
                                </Button>
                            </Box>
                        ))}
                    </HStack>
                </VStack>
            </Center>
        </Center>
    );
};

export default RegisterPage;
