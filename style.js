let interviewList = [];
let rejectedList = [];

let total = document.getElementById('total');
let interviewCount = document.getElementById('interviewCount');
let rejectedCount = document.getElementById('rejectedCount');

const allFilterBtn = document.getElementById('all-filter-btn');
const interviewFilterBtn = document.getElementById('interview-filter-btn');
const rejectedFilterBtn = document.getElementById('rejected-filter-btn');


const allCardSection = document.getElementById('allCards');
const mainContainer = document.querySelector('main');


function calculateCount() {
    total.innerText = allCardSection.children.length
    interviewCount.innerText = interviewList.length
    rejectedCount.innerText = rejectedList.length
}
calculateCount()

function toggleStyle(id) {
    // if any button has blue remove
    allFilterBtn.classList.remove('bg-blue-500', 'text-white');
    interviewFilterBtn.classList.remove('bg-blue-500', 'text-white');
    rejectedFilterBtn.classList.remove('bg-blue-500', 'text-white');

    // adding gray text
    allFilterBtn.classList.add('text-gray-500');
    interviewFilterBtn.classList.add('text-gray-500');
    rejectedFilterBtn.classList.add('text-gray-500');

    const selected = document.getElementById(id);

    // adding blue bg for current button
    selected.classList.add('bg-blue-500', 'text-white');
}