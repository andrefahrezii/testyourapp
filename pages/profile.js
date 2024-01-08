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
    Card,
    AspectRatio,
    Stack,
    Image,
} from "native-base";
// import bg from 'public/images/bg.png';

const RegisterPage = () => {
    const aboutInfo = [
        { label: 'Birthday', value: '28 / 08 / 1995 (Age 28)' },
        { label: 'Horoscope', value: 'Virgo' },
        { label: 'Zodiac', value: 'Pig' },
        { label: 'Height', value: '175 cm' },
        { label: 'Weight', value: '69 kg' },
    ];
    const gotLogin = () => {
        navigation.navigate("login");
    };
    const gotAbout = () => {
        navigation.navigate("about");
    };
    const gotInterest = () => {
        navigation.navigate("Interest");
    };
    return (
        <Center flex={1} bg="#09141A">
            <HStack position="absolute" top={4} left={4} alignItems="center" flex={1} justifyContent="center">
                <IconButton
                    onPress={gotLogin}
                    icon={<ArrowBackIcon color="white" size={4} />}
                />
                <Text color="white" ml={2}>
                    Back
                </Text>
                <Text color="white" ml={40} mx={2}>
                    Username
                </Text>
            </HStack>
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
                    p={4}
                    space=""
                    justifyContent="center"
                    alignItems="left"
                    marginBottom={4}
                >
                    <Image
                        source={{ uri: "images/bg.png" }}
                        alt="image"
                        width="100%"
                        height="100%"
                        resizeMode="cover"
                    />
                    <HStack>
                        <Center
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
                            px="2"
                            py="2"
                            ml="2"
                        >
                            Virgo
                        </Center>
                        <Center
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
                            ml="20"
                            px="2"
                            py="2"
                        >
                            Pig
                        </Center>
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
                        <IconButton
                            justifyContent="flex-end"
                            alignItems="flex-start"
                            ml="20"
                            icon={<ArrowBackIcon size={3} color="white" />}
                            onPress={gotAbout}
                        />
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
                // alignItems="left"
                >
                    <IconButton
                        justifyContent="flex-end"
                        alignItems="flex-start"
                        ml="20"
                        icon={<ArrowBackIcon size={3} color="white" />}
                        onPress={gotInterest}
                    />
                    <Center>
                        <Text color="rgba(255, 255, 255, 0.52)">
                            Add in your interest to find a better match
                        </Text>
                    </Center>

                </Card>
            </Center>
        </Center >
    );
};

export default RegisterPage;
