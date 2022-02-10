function listProjects() {
    var allProjects = localStorage.getItem('projects')
    if (allProjects) {
        JSON.parse(allProjects).forEach(el => {
            option = document.createElement('option');
            option.setAttribute('value', el);
            option.innerText = el
            document.querySelector('#projects').appendChild(option)
        })
    }
}

listProjects()

document.querySelector('#timer').addEventListener('click', (e) => {
    e.preventDefault();
    document.querySelector('#timer').innerText = 'Stop Timer'
    var time = 0
    timeMinutes = 0 
    timeHours = 0
    setInterval(function(){
        time += 1
        if (time >= 60) {
            time = 0;
            timeMinutes += 1
            document.querySelector('.timer .seconds').innerText = time
            document.querySelector('.timer .minutes').innerText = timeMinutes
        }
        else if (timeMinutes >= 60) {
            time = 0;
            timeMinutes = 0
            timeHours += 1
            document.querySelector('.timer .seconds').innerText = time
            document.querySelector('.timer .minutes').innerText = timeMinutes
            document.querySelector('.timer .hours').innerText = timeHours
        }
        else {
            document.querySelector('.timer .seconds').innerText = time
        }
    }, 1000)
})