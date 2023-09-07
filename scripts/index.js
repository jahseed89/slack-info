let slackDisplayImage = document.getElementById('img-holder')
let slackUserName = document.getElementById('name')
let currentDayOfTheWeek = document.getElementById('current-day')
let currentUTCTime = document.getElementById('current-time')
let myTrack = document.getElementById('track')

const slackDataInfo = () => {

    // getting the current day
    const getCurrentDayName = () => {
        const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        const today = new Date();
        const dayIndex = today.getDay();
        
        return daysOfWeek[dayIndex];
      }

    // getting the current time
    const getCurrentTime = () => {
        const now = new Date();
        const hours = now.getHours().toString().padStart(2, '0');
        const minutes = now.getMinutes().toString().padStart(2, '0');
        const seconds = now.getSeconds().toString().padStart(2, '0');
        
        return `${hours}:${minutes}:${seconds}`;
      }
    const user = slackInfo[0]

    slackDisplayImage.innerHTML = `<img src= '${user.picture}'/>`
    slackUserName.innerText = user.name
    currentDayOfTheWeek.innerText = getCurrentDayName()
    currentUTCTime.innerText = getCurrentTime()
    myTrack.innerText = user.track
}

document.addEventListener('DOMContentLoaded', slackDataInfo)