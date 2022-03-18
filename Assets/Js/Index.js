let TagsWithTimer = document.querySelectorAll('[TimerCounterDown]')
for (let T of TagsWithTimer) {
    let ToDate = T.getAttribute('ToDateTimer')
    TimerCountDown(T, ToDate)
}

function TimerCountDown(Element, ToDate) {
    let CountDownDate = new Date(ToDate);
    let El_Second = Element.querySelector('[data-content=Second]')
    let El_Minute = Element.querySelector('[data-content=Minute]')
    let El_Hour = Element.querySelector('[data-content=Hour]')
    let El_Day = Element.querySelector('[data-content=Day]')
    let _ = setInterval(function () {
        let Now = new Date().getTime();
        let Distance = CountDownDate - Now;
        let Days = Math.floor(Distance / (1000 * 60 * 60 * 24));
        let Hours = Math.floor((Distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let Minutes = Math.floor((Distance % (1000 * 60 * 60)) / (1000 * 60));
        let Seconds = Math.floor((Distance % (1000 * 60)) / 1000);
        if (Distance < 0) {
            clearInterval(_);
            El_Second.innerHTML = 0
            El_Minute.innerHTML = 0
            El_Hour.innerHTML = 0
            El_Day.innerHTML = 0
        } else {
            El_Second.innerHTML = Seconds
            El_Minute.innerHTML = Minutes
            El_Hour.innerHTML = Hours
            El_Day.innerHTML = Days
        }
    }, 1000);
}


let BtnCopy = document.getElementById('BtnCopy')
BtnCopy.addEventListener('click', function () {
    let AddressBSC = document.getElementById("AddressBSC");
    navigator.clipboard.writeText(AddressBSC.innerText);

})