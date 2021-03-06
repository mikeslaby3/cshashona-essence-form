const HIDE = true;
const SHOW = false;
let firstName = $('#first-name').val().trim().toUpperCase();
let isMyEssence;
let essence = 'love-energy';
let essenceURL;

function setVisibility(id, hide) {
    if (hide === true) {
        $(id).hide();
    } else {
        $(id).show().addClass('animated fadeIn slower').one('webkitAnimationEnd', function () {
            $(this).removeClass('animated fadeIn slower');
        });
    }
}

function formatHeader(firstName) {
    if (isMyEssence === true) {
        $('#gender-header').text("PLEASE " + firstName + ", ENTER YOUR GENDER:");
        $('#birthday-header').text("PLEASE " + firstName + ", ENTER YOUR BIRTHDAY:");
    } else {
        $('#gender-header').text("PLEASE, ENTER " + firstName + "'S GENDER:");
        $('#birthday-header').text("PLEASE, ENTER " + firstName + "'S BIRTHDAY:");
    }
}

// Dynamically generates the years for the birthday form
// This way, we don't have to constantly update as years pass
function listYears() {
    let currentDate = new Date();
    let currentYear = currentDate.getFullYear() + 1;

    for (let i = 0; i < 100; i++) {
        let year = currentYear -= 1
        $('#year-input').append('<option value="' + year + '">' + year + '</option>');
    }
}

// Converting into a date object allows for date comparison  
function EssenceMap(startDate, endDate, essence) {
    this.startDate = new Date(startDate);
    this.endDate = new Date(endDate);
    this.essence = essence;
}

let dateArray = [
    new EssenceMap('February 16, 2018 00:00:00', 'January 24, 2019 00:00:00', 'nurture-energy'),
    new EssenceMap('February 8, 2016 00:00:00', 'February 15, 2018 00:00:00', 'love-energy'),
    new EssenceMap('January 31, 2014 00:00:00', 'February 7, 2016 00:00:00', 'empowerment-energy'),
    new EssenceMap('January 23, 2012 00:00:00', 'January 30, 2014 00:00:00', 'serenity-energy'),
    new EssenceMap('February 14, 2010 00:00:00', 'January 22, 2012 00:00:00', 'protection-energy'),
    new EssenceMap('February 7, 2008 00:00:00', 'February 13, 2010 00:00:00', 'nurture-energy'),
    new EssenceMap('January 29, 2006 00:00:00', 'February 6, 2008 00:00:00', 'love-energy'),
    new EssenceMap('January 22, 2004 00:00:00', 'January 28, 2006 00:00:00', 'empowerment-energy'),
    new EssenceMap('February 12, 2002 00:00:00', 'January 21, 2004 00:00:00', 'serenity-energy'),
    new EssenceMap('February 5, 2000 00:00:00', 'February 11, 2002 00:00:00', 'protection-energy'),
    new EssenceMap('January 28, 1998 00:00:00', 'February 4, 2000 00:00:00', 'nurture-energy'),
    new EssenceMap('February 19, 1996 00:00:00', 'January 27, 1998 00:00:00', 'love-energy'),
    new EssenceMap('February 10, 1994 00:00:00', 'February 19, 1996 00:00:00', 'empowerment-energy'),
    new EssenceMap('February 4, 1992 00:00:00', 'February 9, 1994 00:00:00', 'serenity-energy'),
    new EssenceMap('January 27, 1990 00:00:00', 'February 3, 1992 00:00:00', 'protection-energy'),
    new EssenceMap('February 17, 1988 00:00:00', 'January 26, 1990 00:00:00', 'nurture-energy'),
    new EssenceMap('February 9, 1986 00:00:00', 'February 16, 1988 00:00:00', 'love-energy'),
    new EssenceMap('February 2, 1984 00:00:00', 'February 9, 1986 00:00:00', 'empowerment-energy'),
    new EssenceMap('January 25, 1982 00:00:00', 'February 1, 1984 00:00:00', 'serenity-energy'),
    new EssenceMap('February 16, 1980 00:00:00', 'January 24, 1982 00:00:00', 'protection-energy'),
    new EssenceMap('February 7, 1978 00:00:00', 'February 15, 1980 00:00:00', 'nurture-energy'),
    new EssenceMap('January 31, 1976 00:00:00', 'February 6, 1978 00:00:00', 'love-energy'),
    new EssenceMap('January 23, 1974 00:00:00', 'January 30, 1976 00:00:00', 'empowerment-energy'),
    new EssenceMap('January 16, 1972 00:00:00', 'January 22, 1974 00:00:00', 'serenity-energy'),
    new EssenceMap('February 6, 1970 00:00:00', 'January 15, 1972 00:00:00', 'protection-energy'),
    new EssenceMap('January 30, 1968 00:00:00', 'February 5, 1970 00:00:00', 'nurture-energy'),
    new EssenceMap('January 21, 1966 00:00:00', 'January 29, 1968 00:00:00', 'love-energy'),
    new EssenceMap('February 13, 1964 00:00:00', 'January 20, 1966 00:00:00', 'empowerment-energy'),
    new EssenceMap('February 5, 1962 00:00:00', 'February 12, 1964 00:00:00', 'serenity-energy'),
    new EssenceMap('January 28, 1960 00:00:00', 'February 4, 1962 00:00:00', 'protection-energy'),
    new EssenceMap('February 18, 1958 00:00:00', 'January 27, 1960 00:00:00', 'nurture-energy'),
    new EssenceMap('February 12, 1956 00:00:00', 'February 17, 1958 00:00:00', 'love-energy'),
    new EssenceMap('February 3, 1954 00:00:00', 'February 11, 1956 00:00:00', 'empowerment-energy'),
    new EssenceMap('January 27, 1952 00:00:00', 'February 2, 1954 00:00:00', 'serenity-energy'),
    new EssenceMap('February 17, 1950 00:00:00', 'January 26, 1952 00:00:00', 'protection-energy'),
    new EssenceMap('February 10, 1948 00:00:00', 'February 16, 1950 00:00:00', 'nurture-energy'),
    new EssenceMap('February 2, 1946 00:00:00', 'February 9, 1948 00:00:00', 'love-energy'),
    new EssenceMap('January 25, 1944 00:00:00', 'February 1, 1946 00:00:00', 'empowerment-energy'),
    new EssenceMap('February 15, 1942 00:00:00', 'January 24, 1944 00:00:00', 'serenity-energy'),
    new EssenceMap('February 8, 1940 00:00:00', 'February 14, 1942 00:00:00', 'protection-energy'),
    new EssenceMap('January 31, 1938 00:00:00', 'February 7, 1940 00:00:00', 'nurture-energy'),
    new EssenceMap('January 24, 1936 00:00:00', 'January 30, 1938 00:00:00', 'love-energy'),
    new EssenceMap('February 14, 1934 00:00:00', 'January 23, 1936 00:00:00', 'empowerment-energy'),
    new EssenceMap('February 6, 1932 00:00:00', 'February 13, 1934 00:00:00', 'serenity-energy'),
    new EssenceMap('January 30, 1930 00:00:00', 'February 5, 1932 00:00:00', 'protection-energy'),
    new EssenceMap('January 23, 1928 00:00:00', 'January 29, 1930 00:00:00', 'nurture-energy'),
    new EssenceMap('February 13, 1926 00:00:00', 'January 22, 1928 00:00:00', 'love-energy'),
    new EssenceMap('February 5, 1924 00:00:00', 'February 12, 1926 00:00:00', 'empowerment-energy'),
    new EssenceMap('January 28, 1922 00:00:00', 'February 4, 1924 00:00:00', 'serenity-energy'),
    new EssenceMap('February 20, 1920 00:00:00', 'January 27, 1922 00:00:00', 'protection-energy'),
    new EssenceMap('February 11, 1918 00:00:00', 'February 19, 1920 00:00:00', 'nurture-energy'),
    new EssenceMap('February 3, 1916 00:00:00', 'February 10, 1918 00:00:00', 'love-energy'),
    new EssenceMap('January 26, 1914 00:00:00', 'February 2, 1916 00:00:00', 'empowerment-energy'),
    new EssenceMap('February 18, 1912 00:00:00', 'January 25, 1914 00:00:00', 'serenity-energy'),
    new EssenceMap('February 10, 1910 00:00:00', 'February 17, 1912 00:00:00', 'protection-energy'),
    new EssenceMap('February 2, 1908 00:00:00', 'February 10, 1910 00:00:00', 'nurture-energy'),
    new EssenceMap('January 25, 1906 00:00:00', 'February 1, 1908 00:00:00', 'love-energy'),
    new EssenceMap('February 16, 1904 00:00:00', 'January 24, 1906 00:00:00', 'empowerment-energy'),
    new EssenceMap('February 8, 1902 00:00:00', 'February 15, 1904 00:00:00', 'serenity-energy'),
    new EssenceMap('January 31, 1900 00:00:00', 'February 7, 1902 00:00:00', 'protection-energy'),
]

function getEssence() {
    const MONTH = $('#month-input').val();
    const DAY = $('#day-input').val();
    const YEAR = $('#year-input').val();
    switch (MONTH) {
        case 'jan':
            m = 1;
            break;
        case 'feb':
            m = 2;
            break;
        case 'mar':
            m = 3;
            break;
        case 'apr':
            m = 4;
            break;
        case 'may':
            m = 5;
            break;
        case 'jun':
            m = 6;
            break;
        case 'jul':
            m = 7;
            break;
        case 'aug':
            m = 8;
            break;
        case 'sep':
            m = 9;
            break;
        case 'oct':
            m = 10;
            break;
        case 'nov':
            m = 11;
            break;
        case 'dec':
            m = 12;
            break;
        default:
            m = 1;
    }

    let birthDate = new Date(YEAR, m, DAY, 0, 0, 0, 0)

    for (let i = 0; i < dateArray.length; i++) {
        if (birthDate >= dateArray[i].startDate && birthDate <= dateArray[i].endDate) {
            essence = dateArray[i].essence
        }
    }
}

function createEssenceUrl(essence) {
    essenceURL = 'https://www.caroleshashona.com/pages/' + essence;
}

function changeQuestions(buttonClicked, currentScreen, nextScreen) {
    $(document).on('click', buttonClicked, function () {
        let error = false;

        switch (currentScreen) {
            case '#for-whom-section':
                if (buttonClicked === '#friend-button') {
                    isMyEssence = false;
                    $('#name-header').text("PLEASE, ENTER YOUR FRIEND'S NAME:");
                } else {
                    isMyEssence = true;
                    $('#name-header').text('PLEASE, ENTER YOUR NAME:');
                }
                console.log(isMyEssence);
                break;
            case '#name-section':
                if (buttonClicked === '#next-is-gender') {
                    if ($('#first-name').val() === '') {
                        error = true;
                        setVisibility($('#type-valid-name'), SHOW);
                    } else {
                        error = false;
                        firstName = $('#first-name').val().trim().toUpperCase();
                        formatHeader(firstName);
                        setVisibility($('#type-valid-name'), HIDE);
                    }
                }
                break;
            case '#gender-section':
                break;
            case '#birthday-section':
                if (buttonClicked === '#next-is-reveal') {
                    if ($('#month-input').val() === null ||
                        $('#day-input').val() === null ||
                        $('#year-input').val() === null) {
                            error = true;
                            setVisibility($('#enter-valid-birthday'), SHOW);
                    } else {
                        error = false;
                        getEssence();
                        createEssenceUrl(essence);
                        setVisibility($('#enter-valid-birthday'), HIDE);
                    }
                }
                break;
        }

        if (error === false) {
            setVisibility(currentScreen, HIDE);
            setVisibility(nextScreen, SHOW);
        }

    });
}

$(document).ready(function () {

    listYears();
    setVisibility($('#for-whom-section'), SHOW);
    setVisibility($('#name-section'), HIDE);
    setVisibility($('#type-valid-name'), HIDE);
    setVisibility($('#gender-section'), HIDE);
    setVisibility($('#enter-valid-birthday'), HIDE);
    setVisibility($('#birthday-section'), HIDE);
    setVisibility($('#reveal-essence'), HIDE);

    // Button control for "Searching For" page
    changeQuestions('#friend-button', '#for-whom-section', '#name-section');
    changeQuestions('#myself-button', '#for-whom-section', '#name-section');

    // Button control for "Name" page
    changeQuestions('#prev-searching', '#name-section', '#for-whom-section');
    changeQuestions('#next-is-gender', '#name-section', '#gender-section');

    // Button control for "Gender" page
    changeQuestions('#prev-name', '#gender-section', '#name-section');
    changeQuestions('.gender-button', '#gender-section', '#birthday-section');

    // Button control for "Birthday" page
    changeQuestions('#prev-gender', '#birthday-section', '#gender-section');
    changeQuestions('#next-is-reveal', '#birthday-section', '#reveal-essence');

    // Button control for "Reveal Essence" page
    changeQuestions('#prev-birthday', '#reveal-essence', '#birthday-section');

    $(document).on('click', '#essence-button', function () {
        window.open(essenceURL, '_blank');
    });

});