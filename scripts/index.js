let slackDisplayImage = document.querySelector('[data-testid="slackDisplayImage"]')
let slackUserName = document.querySelector('[data-testid="slackUserName"]')
let currentDayOfTheWeek = document.querySelector('[data-testid="currentDayOfTheWeek"]')
let currentUTCTime = document.querySelector('[data-testid="currentUTCTime"]')
let myTrack = document.querySelector('[data-testid="myTrack"]')
let githubURL = document.querySelector('[data-testid="githubURL"]')

const slackDataInfo = () => {

    // getting the current day
    const currentDayName = () => {
        const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        const today = new Date();
        const dayIndex = today.getDay();
        
        return daysOfWeek[dayIndex];
      }

    // getting the current time
    const currentTime = () => {
        const now = new Date();
        const hours = now.getHours().toString().padStart(2, '0');
        const minutes = now.getMinutes().toString().padStart(2, '0');
        const seconds = now.getSeconds().toString().padStart(2, '0');
        
        return `${hours}:${minutes}:${seconds}`;
      }

    slackDisplayImage.innerHTML = `<img src= 'https://ca.slack-edge.com/T05FFAA91JP-U05RQQ9MU3B-6693fe70f338-512'/>`
    slackUserName.innerText = "Samson Ocran"
    currentDayOfTheWeek.innerText = currentDayName()
    currentUTCTime.innerText = currentTime()
    myTrack.innerText = "Frontend"
    githubURL.innerHTML = `<a href="https://github.com/jahseed89/slack-info" target="_blank">Link to Repository</a>`

}

document.addEventListener('DOMContentLoaded', slackDataInfo)