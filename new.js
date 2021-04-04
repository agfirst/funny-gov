const startingMinutes = 6;
let time =  startingMinutes * 60;

const countdownEl = document.getElementById('countdown');

setInterval(updateCountdown, 1000)

function updateCountdown(){
    const minutes = Math.floor(time / 60);
    let seconds = time % 60;
    seconds = seconds < 10 ? '0' + seconds : seconds;
    countdownEl.innerHTML = `${minutes}: ${seconds}`;
    time--;
}



const loginBtn = document.getElementById("login");
loginBtn.addEventListener("click", function () {
    const loginArea = document.getElementById("login-area");
    loginArea.style.display = "none";

    const transactionArea = document.getElementById("firstMCQ1");
    transactionArea.style.display = "block";
})


const next = document.getElementById("mcqOne");
next.addEventListener("click", function () {
    const mcq1 = document.getElementById("firstMCQ1");
    mcq1.style.display = "none";

    const transactionArea1 = document.getElementById("secondMCQ");
    transactionArea1.style.display = "block";
})


const next1 = document.getElementById("mcqSecond");
next1.addEventListener("click", function () {
    const firstMCQ1 = document.getElementById("secondMCQ");
    firstMCQ1.style.display = "none";

    const transactionArea2 = document.getElementById("thardMCQ");
    transactionArea2.style.display = "block";
})


const next2 = document.getElementById("mcqSecond");
next2.addEventListener("click", function () {
    const firstMCQ2 = document.getElementById("secondMCQ");
    firstMCQ2.style.display = "none";

    const transactionArea3 = document.getElementById("thardMCQ");
    transactionArea3.style.display = "block";
})

const next3 = document.getElementById("mcqThard");
next3.addEventListener("click", function () {
    const firstMCQ3 = document.getElementById("thardMCQ");
    firstMCQ3.style.display = "none";

    const transactionArea4 = document.getElementById("fourthMCQ");
    transactionArea4.style.display = "block";
})


const next4 = document.getElementById("mcqFourth");
next4.addEventListener("click", function () {
    const firstMCQ4 = document.getElementById("fourthMCQ");
    firstMCQ4.style.display = "none";

    const transactionArea5 = document.getElementById("fivethMCQ");
    transactionArea5.style.display = "block";
})

const finish = document.getElementById("mcqFiveth");
finish.addEventListener("click", function () {
    const lastItem = document.getElementById("fivethMCQ");
    lastItem.style.display = "none";

    const show = document.getElementById("lastContent");
    show.style.display = "block";
})

const lastMessage = document.getElementById("lastBtn");
lastMessage.addEventListener("click", function(){
    const newMessage = document.getElementById("lastContent");
    newMessage.style.display = "none";

    const allMessageShow = document.getElementById("message");
    allMessageShow.style.display = "block";
})
