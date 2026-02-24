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
const filterSection = document.getElementById('filtered-section')


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

    if (id == 'interview-filter-btn') {
        allCardSection.classList.add('hidden');
        filterSection.classList.remove('hidden');
    } else if (id == 'all-filter-btn') {
        allCardSection.classList.remove('hidden');
        filterSection.classList.add('hidden');
    }else if(id == 'rejected-filter-btn'){
        allCardSection.classList.add('hidden');
        filterSection.classList.remove('hidden');
    }

}

mainContainer.addEventListener('click', function (event) {

    if (event.target.classList.contains('interview-btn')) {
        const parentNode = event.target.parentNode.parentNode
        const companyName = parentNode.querySelector('.companyName').innerText;
        const jobPosition = parentNode.querySelector('.jobPosition').innerText;
        const jobType = parentNode.querySelector('.jobType').innerText;
        const status = parentNode.querySelector('.status').innerText;
        const notes = parentNode.querySelector('.notes').innerText;

        parentNode.querySelector('.status').innerText = 'INTERVIEW'

        const cardInfo = {
            companyName,
            jobPosition,
            jobType,
            status: 'INTERVIEW',
            notes
        }

        const companyExist = interviewList.find(item => item.companyName == cardInfo.companyName)



        if (!companyExist) {
            interviewList.push(cardInfo)

        }

        calculateCount()

        renderInterview()
    }else if(event.target.classList.contains('rejected-btn')){
         
        const parentNode = event.target.parentNode.parentNode
        const companyName = parentNode.querySelector('.companyName').innerText;
        const jobPosition = parentNode.querySelector('.jobPosition').innerText;
        const jobType = parentNode.querySelector('.jobType').innerText;
        const status = parentNode.querySelector('.status').innerText;
        const notes = parentNode.querySelector('.notes').innerText;

        parentNode.querySelector('.status').innerText = 'REJECTED'

        const cardInfo = {
            companyName,
            jobPosition,
            jobType,
            status: 'REJECTED',
            notes
        }

        const companyExist = rejectedList.find(item => item.companyName == cardInfo.companyName)



        if (!companyExist) {
            rejectedList.push(cardInfo)

        }

        calculateCount()

        renderRejected()
    }
    }


)


function renderInterview() {
    filterSection.innerHTML = ''
        

    for (let interview of interviewList) {
        let div = document.createElement('div');
        div.className = 'card mt-5 flex justify-between p-6'
        div.innerHTML = `
        <div class="space-y-6">
                    <!-- part 1 -->
                    <div>
                        <p class="companyName text-xl font-bold text-blue-950">${interview.companyName}</p>
                        <p class="jobPosition text-gray-500"> React Native Developer</p>
                    </div>

                    <!-- part 2 -->
                    <div>
                        <p class="jobType text-gray-500">Remote . Full-time . $130,000-$175,000</p>
                    </div>

                    <!-- part-3  -->
                    <p class="status text-blue-950 font-bold">${interview.status}</p>
                    <!-- part-4  -->
                    <p class="notes">Build cross-platform mobile applications using React Native. Work on products used
                        by millions of users worldwide.</p>

                    <!-- part-5  -->
                    <div class="flex gap-3">
                        <button
                            class="interview-btn text-green-500 font-bold border border-green-500 rounded w-30 py-1">INTERVIEW</button>
                        <button class="rejected-btn text-red-500 font-bold border border-red-500 rounded w-30 py-1">
                            REJECTED</button>
                    </div>

                </div>
                <!-- main part 2 -->
                <div class="btn-delete text-gray-600"><i class="fa-regular fa-trash-can"></i></div>
        `
        filterSection.appendChild(div)
    }

}

function renderRejected() {
    filterSection.innerHTML = ''
        

    for (let rejected of rejectedList) {
        let div = document.createElement('div');
        div.className = 'card mt-5 flex justify-between p-6'
        div.innerHTML = `
        <div class="space-y-6">
                    <!-- part 1 -->
                    <div>
                        <p class="companyName text-xl font-bold text-blue-950">${rejected.companyName}</p>
                        <p class="jobPosition text-gray-500"> React Native Developer</p>
                    </div>

                    <!-- part 2 -->
                    <div>
                        <p class="jobType text-gray-500">Remote . Full-time . $130,000-$175,000</p>
                    </div>

                    <!-- part-3  -->
                    <p class="status text-blue-950 font-bold">${rejected.status}</p>
                    <!-- part-4  -->
                    <p class="notes">Build cross-platform mobile applications using React Native. Work on products used
                        by millions of users worldwide.</p>

                    <!-- part-5  -->
                    <div class="flex gap-3">
                        <button
                            class="interview-btn text-green-500 font-bold border border-green-500 rounded w-30 py-1">INTERVIEW</button>
                        <button class="rejected-btn text-red-500 font-bold border border-red-500 rounded w-30 py-1">
                            REJECTED</button>
                    </div>

                </div>
                <!-- main part 2 -->
                <div class="btn-delete text-gray-600"><i class="fa-regular fa-trash-can"></i></div>
        `
        filterSection.appendChild(div)
    }

}