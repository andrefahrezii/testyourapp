const calculateZodiac = (date) => {
    // Check if date is a string
    if (typeof date !== 'string') {
        return 'Invalid date format';
    }

    // Split the date using space as the delimiter
    const dobArray = date.split(' ');

    // Extract day, month, and year from the array
    const day = parseInt(dobArray[0]);
    const month = parseInt(dobArray[1]);
    const year = parseInt(dobArray[2]);

    // Perform zodiac calculation based on day and month
    if ((month === 3 && day >= 21) || (month === 4 && day <= 19)) {
        return {
            sign: 'Aries (Ram)',
            icon: '♈',
        };
    } else if ((month === 4 && day >= 20) || (month === 5 && day <= 20)) {
        return {
            sign: 'Taurus (Bull)',
            icon: '♉',
        };
    } else if ((month === 5 && day >= 21) || (month === 6 && day <= 21)) {
        return {
            sign: 'Gemini (Twins)',
            icon: '♊',
        };
    } else if ((month === 6 && day >= 22) || (month === 7 && day <= 22)) {
        return {
            sign: 'Cancer (Crab)',
            icon: '♋',
        };
    } else if ((month === 7 && day >= 23) || (month === 8 && day <= 22)) {
        return {
            sign: 'Leo (Lion)',
            icon: '♌',
        };
    } else if ((month === 8 && day >= 23) || (month === 9 && day <= 22)) {
        return {
            sign: 'Virgo (Virgin)',
            icon: '♍',
        };
    } else if ((month === 9 && day >= 23) || (month === 10 && day <= 23)) {
        return {
            sign: 'Libra (Balance)',
            icon: '♎',
        };
    } else if ((month === 10 && day >= 24) || (month === 11 && day <= 21)) {
        return {
            sign: 'Scorpius (Scorpion)',
            icon: '♏',
        };
    } else if ((month === 11 && day >= 22) || (month === 12 && day <= 21)) {
        return {
            sign: 'Sagittarius (Archer)',
            icon: '♐',
        };
    } else if ((month === 12 && day >= 22) || (month === 1 && day <= 19)) {
        return {
            sign: 'Capricornus (Goat)',
            icon: '♑',
        };
    } else if ((month === 1 && day >= 20) || (month === 2 && day <= 18)) {
        return {
            sign: 'Aquarius (Water Bearer)',
            icon: '♒',
        };
    } else if ((month === 2 && day >= 19) || (month === 3 && day <= 20)) {
        return {
            sign: 'Pisces (Fish)',
            icon: '♓',
        };
    } else {
        return {
            sign: '',
            icon: '',
        };
    }
};
export default calculateZodiac;