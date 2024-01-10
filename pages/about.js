import React, { useState } from "react";
// import { Typography, Space } from "antd";
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
    FormControl,
    Select,
    CheckIcon,
} from "native-base";
import calculateZodiac from "./utils";

// import bg from 'public/images/bg.png';
const aboutPage = () => {
    const [name, setDisplayName] = useState("");
    const [gender, setGender] = useState("");
    const [birthday, setBirthday] = useState("");
    const [zodiac, setZodiac] = useState("");
    const [horoscope, setHoroscope] = useState("");
    const [height, setHeight] = useState(0);
    const [weight, seWeight] = useState(0);
    const gotProfile = () => {
        navigation.navigate("profile");
    };
    // const saveAbout = () => {
    //     navigation.navigate("about");
    // };

    // const calculateZodiac = (date) => {
    //     // Check if date is a string
    //     if (typeof date !== 'string') {
    //         return 'Invalid date format';
    //     }

    //     // Split the date using space as the delimiter
    //     const dobArray = date.split(' ');

    //     // Extract day, month, and year from the array
    //     const day = parseInt(dobArray[0]);
    //     const month = parseInt(dobArray[1]);
    //     const year = parseInt(dobArray[2]);

    //     // Perform zodiac calculation based on day and month
    //     if ((month === 3 && day >= 21) || (month === 4 && day <= 19)) {
    //         return {
    //             sign: 'Aries (Ram)',
    //             icon: '♈',
    //         };
    //     } else if ((month === 4 && day >= 20) || (month === 5 && day <= 20)) {
    //         return {
    //             sign: 'Taurus (Bull)',
    //             icon: '♉',
    //         };
    //     } else if ((month === 5 && day >= 21) || (month === 6 && day <= 21)) {
    //         return {
    //             sign: 'Gemini (Twins)',
    //             icon: '♊',
    //         };
    //     } else if ((month === 6 && day >= 22) || (month === 7 && day <= 22)) {
    //         return {
    //             sign: 'Cancer (Crab)',
    //             icon: '♋',
    //         };
    //     } else if ((month === 7 && day >= 23) || (month === 8 && day <= 22)) {
    //         return {
    //             sign: 'Leo (Lion)',
    //             icon: '♌',
    //         };
    //     } else if ((month === 8 && day >= 23) || (month === 9 && day <= 22)) {
    //         return {
    //             sign: 'Virgo (Virgin)',
    //             icon: '♍',
    //         };
    //     } else if ((month === 9 && day >= 23) || (month === 10 && day <= 23)) {
    //         return {
    //             sign: 'Libra (Balance)',
    //             icon: '♎',
    //         };
    //     } else if ((month === 10 && day >= 24) || (month === 11 && day <= 21)) {
    //         return {
    //             sign: 'Scorpius (Scorpion)',
    //             icon: '♏',
    //         };
    //     } else if ((month === 11 && day >= 22) || (month === 12 && day <= 21)) {
    //         return {
    //             sign: 'Sagittarius (Archer)',
    //             icon: '♐',
    //         };
    //     } else if ((month === 12 && day >= 22) || (month === 1 && day <= 19)) {
    //         return {
    //             sign: 'Capricornus (Goat)',
    //             icon: '♑',
    //         };
    //     } else if ((month === 1 && day >= 20) || (month === 2 && day <= 18)) {
    //         return {
    //             sign: 'Aquarius (Water Bearer)',
    //             icon: '♒',
    //         };
    //     } else if ((month === 2 && day >= 19) || (month === 3 && day <= 20)) {
    //         return {
    //             sign: 'Pisces (Fish)',
    //             icon: '♓',
    //         };
    //     } else {
    //         return {
    //             sign: '',
    //             icon: '',
    //         };
    //     }
    // };

    const saveAbout = () => {
        const saveDataToApi = async () => {
            try {
                const response = await fetch('/api/about', {
                    // const response = await fetch('https://techtest.youapp.ai/api/createProfile', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'x-access-token': localStorage.getItem("token"),
                    },
                    body: JSON.stringify({
                        name,
                        birthday,
                        height: parseInt(height), // Convert to integer
                        weight: parseFloat(weight),
                        gender,
                        interests: []
                    }),
                });
                if (response.ok) {
                    console.log('Data saved successfully');
                    navigation.navigate("profile");
                } else {
                    console.error('Failed to save data');
                }
            } catch (error) {
                console.error('Error:', error);
            }
        };
        saveDataToApi();
    };



    const handleDateChange = (text) => {
        setBirthday(text);
        const date = new Date(text)
        const zodiac = calculateZodiac(text);
        setZodiac(zodiac.sign)
        setHoroscope(zodiac.icon)
    };


    return (
        <Center flex={1} bg="#09141A" h="100">
            <HStack position="absolute" top={4} left={4} alignItems="center" flex={1} justifyContent="center">
                <IconButton
                    onPress={gotProfile}
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
                                username
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
                    height="100%"
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
                        <NBLink
                            color="white"
                            onPress={saveAbout}
                            style={{
                                color:
                                    "linear-gradient(74.08deg, #94783E -6.8%, #F3EDA6 16.76%, #F8FAE5 30.5%, #FFE2BE 49.6%, #D5BE88 78.56%, #F8FAE5 89.01%, #D5BE88 100.43%), linear-gradient(0deg, #FFFFFF, #FFFFFF)",
                            }}
                        >
                            <Text color="white">
                                Save to update
                            </Text>
                            Save to update
                        </NBLink>

                    </HStack>

                    <VStack>
                        <FormControl pb={3}>
                            <HStack justifyContent="space-between">
                                <FormControl.Label>Display Name</FormControl.Label>
                                <Input
                                    color="white"
                                    placeholder="Enter Name"
                                    value={name}
                                    onChangeText={(text) => setDisplayName(text)}
                                />
                            </HStack>
                        </FormControl>

                        <FormControl pb={3}>
                            <HStack justifyContent="space-between">
                                <FormControl.Label>Gender</FormControl.Label>
                                <Select
                                    color="white"
                                    w={170}
                                    placeholder="Select Gender"
                                    onValueChange={(value) => setGender(value)}
                                    value={gender}
                                    _selectedItem={{
                                        bg: "rgba(255, 255, 255, 0.10)",
                                        borderWidth: 1,
                                        borderColor: "white",
                                    }}
                                >
                                    <Select.Item label="Male" value="male" />
                                    <Select.Item label="Female" value="female" />
                                </Select>
                            </HStack>
                        </FormControl>

                        <FormControl pb={3}>
                            <HStack justifyContent="space-between">
                                <FormControl.Label>Birthday</FormControl.Label>
                                <Input
                                    color="white"
                                    placeholder="DD MM YYYY"
                                    value={birthday}
                                    onChangeText={handleDateChange}
                                    _focus={{
                                        bg: 'rgba(255, 255, 255, 0.22)',
                                        borderWidth: 1,
                                        borderColor: 'rgba(255, 255, 255, 0.10)',
                                    }}
                                    _placeholder={{ color: 'white' }}
                                />
                            </HStack>
                        </FormControl>

                        <FormControl pb={3}>
                            <HStack justifyContent="space-between">
                                <FormControl.Label>Horoscope</FormControl.Label>
                                <Input
                                    placeholder="--"
                                    isReadOnly
                                    value={horoscope}
                                    onValueChange={(value) => setHoroscope(value)}
                                />
                            </HStack>
                        </FormControl>

                        <FormControl pb={3}>
                            <HStack justifyContent="space-between">
                                <FormControl.Label>Zodiac</FormControl.Label>
                                <Input placeholder="--"
                                    value={zodiac}
                                    color="white"
                                    isReadOnly
                                    onValueChange={(value) => setZodiac(value)} />
                            </HStack>
                        </FormControl>

                        <FormControl pb={3}>
                            <HStack justifyContent="space-between">
                                <FormControl.Label>Height</FormControl.Label>
                                <HStack>
                                    <Input
                                        color="white"
                                        placeholder="Add Height"
                                        value={height}
                                        onChangeText={(text) => setHeight(text)}
                                    />
                                    <Text
                                        position="absolute"
                                        right={2}
                                        bottom={1}
                                        color="white"
                                        fontSize="md"
                                    >
                                        cm
                                    </Text>
                                </HStack>
                            </HStack>
                        </FormControl>
                        <FormControl>
                            <HStack justifyContent="space-between">
                                <FormControl.Label>Weight</FormControl.Label>
                                <HStack position="relative" alignItems="center" color="white">
                                    <Input
                                        color="white"
                                        placeholder="Add Weight"
                                        value={weight}
                                        onChangeText={(text) => seWeight(text)}
                                    />
                                    <Text
                                        position="absolute"
                                        right={2}
                                        bottom={1}
                                        color="white"
                                        fontSize="md"
                                    >
                                        kg
                                    </Text>
                                </HStack>
                            </HStack>
                        </FormControl>

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
                        onPress={() => {
                            // Handle navigasi ke halaman edit di sini
                        }}
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

export default aboutPage;
