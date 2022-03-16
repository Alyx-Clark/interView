// var positive = document.getElementsByClassName('positive-title'); 
// var negative = document.getElementsByClassName('negative-title'); 

var positiveBox = document.getElementsByClassName('positive-container');
var negativeBox = document.getElementsByClassName('negative-container'); 

const postiveShow = () => {
    positiveBox.classList.add('show')
    negativeBox.classList.add('unshow')
};

const negativeShow = () => {
    negativeBox.classList.add('show')
    positiveBox.classList.add('unshow')
};


