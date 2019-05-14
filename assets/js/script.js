// const HIDE = true;
// const SHOW = false;

// function setVisibility(id, hide) {
//     if (hide === true) {
//         $(id).hide();
//     } else {
//         $(id).show();
//     }
// }

// function formatHeader(header) {
//     return 
// }

// function changeQuestions(buttonClicked, currentScreen, nextScreen) {
//     $(document).on('click', buttonClicked, function () {
//         setVisibility(currentScreen, HIDE);
//         setVisibility(nextScreen, SHOW);
//     }); 
// }

// $(document).ready(function () {
//     setVisibility($('#your-essence'), HIDE);

//     changeQuestions('#myself-button', '#searching-for', '#your-essence');

// });

function EssenceMap(startDate, endDate, essence) {
    this.startDate = new Date(startDate);
    this.endDate = new Date(endDate);
    this.essence = essence;
}

dateArray = [
    new EssenceMap('January 01, 1904 00:00:00', 'December 31, 1904 00:00:00', 'fire'),
    new EssenceMap('January 01, 1903 00:00:00', 'December 31, 1903 00:00:00', 'water'),
    new EssenceMap('January 01, 1902 00:00:00', 'December 31, 1902 00:00:00', 'earth'),
    new EssenceMap('January 01, 1901 00:00:00', 'December 31, 1901 00:00:00', 'wood'),
    new EssenceMap('January 01, 1900 00:00:00', 'December 31, 1900 00:00:00', 'metal'),
]

// month is m
// Converting into a date object allows for date comparison

function getEssence() {
    // const MONTH = $('form-month').val();
    // const DAY = $('form-day').val();
    // const YEAR = $('form-year').val();
    const MONTH = 'April';
    const DAY = 50;
    const YEAR = 2000;
  
    switch(MONTH) {
        case 'January':
            m = 1;
            break;
        case 'February':
            m = 2;
            break;
        case 'March':
            m = 3;
            break;
        case 'April':
            m = 4;
            break;
        case 'May':
            m = 5;
            break;
        case 'June':
            m = 6;
            break;
        case 'July':
            m = 7;
            break;
        case 'August':
            m = 8;
            break;
        case 'September':
            m = 9;
            break;
        case 'October':
            m = 10;
            break;
        case 'November':
            m = 11;
            break;
        case 'December':
            m = 12;
            break;
        default:
            m = 1;
    }
  
    let birthDate = new Date(YEAR, m, DAY, 0, 0, 0, 0);
    let essence = 'fire';
    
    for (let i = 0; i < dateArray.length; i++) {
        if (birthDate >= dateArray[i].startDate && birthDate <= dateArray[i].endDate) {
            essence = dateArray[i].essence
        }
    } 
    
    return essence;
  }
  
  console.log(getEssence());