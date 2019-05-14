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