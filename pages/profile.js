import React, { useState, useEffect } from "react";
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
    Card,
    AspectRatio,
    Stack,
    Image,
} from "native-base";
import utils from '../utils'; // Note: Import the entire object // Ensure the correct path to your calculateZodiac utility
import { TouchableOpacity } from "react-native";
const profilePage = () => {
    const [profileData, setProfileData] = useState(null);
    const [zodiac, setZodiac] = useState("");
    const [horoscope, setHoroscope] = useState("");
    const [age, setAge] = useState("");
    const aboutInfo = [
        { label: 'Birthday', value: profileData?.data?.birthday + (age !== null ? ` (${age} Age)` : "") },
        { label: 'Horoscope', value: zodiac },
        { label: 'Zodiac', value: horoscope },
        { label: 'Height', value: profileData && profileData.data ? profileData.data.height : "" },
        { label: 'Weight', value: profileData && profileData.data ? profileData.data.weight : "" },
    ];



    const gotLogin = () => {
        // navigation.navigate("login");
        window.location.href = "/login";
    };
    const gotAbout = () => {
        // navigation.navigate("about");
        window.location.href = "/about";
    };
    const gotInterest = () => {
        // navigation.navigate("Interest");
        window.location.href = "/Interest";
    };

    const calculateAndSetZodiacData = (date) => {
        const zodiacData = utils.calculateZodiac(date);
        setZodiac(zodiacData.sign);
        setHoroscope(zodiacData.icon);
    };

    const calculateAges = (date) => {
        const age = utils.calculateAge(date);
        setAge(age);
    };


    useEffect(() => {
        const token = localStorage.getItem("token");

        const fetchData = async () => {
            try {
                const response = await fetch("/api/profile", {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        "x-access-token": token,
                    },
                });

                if (response.ok) {
                    const data = await response.json();
                    setProfileData(data);

                    // Calculate and set zodiac data
                    calculateAndSetZodiacData(data && data.data ? data.data.birthday : "");
                    calculateAges(data && data.data ? data.data.birthday : "");
                } else {
                    console.error("Error fetching profile data:", response.status);
                }
            } catch (error) {
                console.error("Error fetching profile data:", error);
            }
        };

        fetchData();
    }, []);
    return (
        <Center flex={1} bg="#09141A" height="100%">
            <HStack position="absolute" top={4} left={4} alignItems="center" flex={1} justifyContent="center">
                < IconButton
                    onPress={gotLogin}
                    icon={< ArrowBackIcon color="white" size={4} />}
                />
                <Text Text color="white" ml={2} >
                    Back
                </Text >
                <Text color="white" ml={40} mx={2}>
                    {profileData && profileData.data ? profileData.data.username : ""}
                </Text>
            </HStack >
            <Center
                flex={1}
                position="absolute"
                top="20"
            >

                {/* profile */}
                <Card
                    width="359px"
                    height="190px"
                    borderRadius="16px"
                    bg="white"
                    // p={4}
                    space=""
                    justifyContent="center"
                    alignItems="left"
                    marginBottom={4}
                    position="relative"
                >
                    <Image
                        source={{ uri: "images/bg.png" }}
                        alt="image"
                        width="100%"
                        height="100%"
                        resizeMode="cover"
                        style={{
                            borderRadius: '16px', // Set the same borderRadius as the Card
                            position: 'absolute',
                            left: 0, // Position the image absolutely within the Card
                        }}
                    />
                    <HStack>
                        <Center>
                            <Text color="white" ml={2}>
                                {profileData && profileData.data ? profileData.data.username : ""}
                            </Text>
                        </Center>
                        <Center
                            bg="#09141A"
                            _dark={{
                                bg: "violet.400",
                            }}
                            _text={{
                                color: "warmGray.50",
                                fontWeight: "700",
                                fontSize: "xs",
                            }}
                            position="absolute"
                            // bottom=""
                            px="2"
                            py="2"
                            ml="2"
                            mt={10}
                            borderRadius={8}
                        >
                            {horoscope || ""}
                        </Center>
                        {/* <Center
                            bg="violet.500"
                            _dark={{
                                bg: "violet.400",
                            }}
                            _text={{
                                color: "warmGray.50",
                                fontWeight: "700",
                                fontSize: "xs",
                            }}
                            position="absolute"
                            bottom="5"
                            ml="50"
                            px="2"
                            py="2"
                        >
                            Pig
                        </Center> */}
                    </HStack>
                </Card>
                {/* about */}
                <Card
                    width="359px"
                    height="190px"
                    borderRadius="16px"
                    bg="#0E191F"
                    border={10}
                    p={4}
                    shadow={5}
                    space=""
                    // justifyContent="center"
                    alignItems="left"
                    marginBottom={4}
                >
                    <HStack space={40} >
                        <Heading color="white">About</Heading>
                        <TouchableOpacity onPress={gotAbout}>
                            <Image
                                source={{ uri: "images/edit.png" }}
                                alt="Edit Icon"
                                width={4}
                                ml={20}
                                height={4}
                                onPress={gotAbout}
                            />
                        </TouchableOpacity>
                    </HStack>
                    <VStack>
                        {aboutInfo.map((info, index) => (
                            <HStack key={index}>
                                <Text color="rgba(255, 255, 255, 0.52)">{`${info.label}:`}</Text>
                                <Text color="white">{info.value}</Text>
                            </HStack>
                        ))}
                    </VStack>

                </Card>
                {/* interest */}
                <Card
                    width="359px"
                    height="190px"
                    borderRadius="16px"
                    shadow={2}
                    // bg={{ uri: bg }}
                    bg="#0E191F"
                    border={10}
                    p={2}
                    space=""
                    // justifyContent="center"
                    alignItems="left"
                >
                    <HStack space={40} >
                        <Heading color="white">Interest</Heading>
                        <TouchableOpacity onPress={gotInterest}>
                            <Image
                                source={{ uri: "images/edit.png" }}
                                alt="Edit Icon"
                                width={4}
                                ml={20}
                                height={4}
                            />
                        </TouchableOpacity>
                    </HStack>
                    <Center>
                        {profileData && profileData.data && profileData.data.interests && profileData.data.interests.length > 0 ? (
                            <VStack mt={2} space={2}>
                                {profileData.data.interests.map((item, index) => (
                                    <Box
                                        key={index}
                                        bg="rgba(217, 217, 217, 0.06)"
                                        borderRadius={8}
                                        p={2}
                                        m={1}
                                        alignItems="center" // Center the text horizontally
                                    >
                                        <Text color="white" textAlign="center">
                                            {item}
                                        </Text>
                                    </Box>
                                ))}
                            </VStack>
                        ) : (
                            <Text color="rgba(255, 255, 255, 0.52)" pt={12} textAlign="center">
                                Add in your interest to find a better match
                            </Text>
                        )}
                    </Center>

                </Card>
            </Center>
        </Center >
    );
};

export default profilePage;
