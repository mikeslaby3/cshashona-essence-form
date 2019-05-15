const HIDE = true;
const SHOW = false;


function setVisibility(id, hide) {
    if (hide === true) {
        $(id).hide();
    } else {
        $(id).show();
    }
}

function formatHeader(header) {
    return 
}

function changeQuestions(buttonClicked, currentScreen, nextScreen) {
    $(document).on('click', buttonClicked, function () {
        setVisibility(currentScreen, HIDE);
        setVisibility(nextScreen, SHOW);
    }); 
}

$(document).ready(function () {

    setVisibility($('#your-essence'), HIDE);
    setVisibility($('#your-gender'), HIDE);
    setVisibility($('#your-birthday'), HIDE);

    changeQuestions('#myself-button', '#searching-for', '#your-essence');

    // Converting into a date object allows for date comparison  
    function EssenceMap(startDate, endDate, essence) {
        this.startDate = new Date(startDate);
        this.endDate = new Date(endDate);
        this.essence = essence;
    }
    
    let dateArray = [
        new EssenceMap('January 01, 1904 00:00:00', 'December 31, 1904 00:00:00', 'fire'),
        new EssenceMap('January 01, 1903 00:00:00', 'December 31, 1903 00:00:00', 'water'),
        new EssenceMap('January 01, 1902 00:00:00', 'December 31, 1902 00:00:00', 'earth'),
        new EssenceMap('January 01, 1901 00:00:00', 'December 31, 1901 00:00:00', 'wood'),
        new EssenceMap('January 01, 1900 00:00:00', 'December 31, 1900 00:00:00', 'metal'),
    ]
    
    function getEssence() {
        const MONTH = $('month-input').val();
        const DAY = $('day-input').val();
        const YEAR = $('year-input').val();
      
        switch(MONTH) {
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
      
        let birthDate = new Date(YEAR, m, DAY, 0, 0, 0, 0);
        let essence = 'fire';
        
        for (let i = 0; i < dateArray.length; i++) {
            if (birthDate >= dateArray[i].startDate && birthDate <= dateArray[i].endDate) {
                essence = dateArray[i].essence
            }
        } 
        
        return essence;
    }

    getEssence();
});
