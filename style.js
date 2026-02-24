let interviewList = [];
let rejectedList = [];

let total = document.getElementById('total');
let interviewCount= document.getElementById('interviewCount');
let rejectedCount = document.getElementById('rejectedCount');


const allCardSection = document.getElementById('allCards');

const mainContainer = document.querySelector('main');

function calculateCount(){
    total.innerText = allCardSection.children.length
    interviewCount.innerText = interviewList.length
    rejectedCount.innerText = rejectedList.length 
}
calculateCount()

function toggleStyle(){
    
}