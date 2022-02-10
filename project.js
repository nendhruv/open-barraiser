document.querySelector('#new-project').addEventListener('click', (e) => {
    e.preventDefault()

    document.querySelector('.newProjectModal').style.display = "block"
    document.querySelector('.layer').style.display = "block"
})

document.querySelector('#cancel-project').addEventListener('click', (e)=> {
    e.preventDefault()
    document.querySelector('.newProjectModal input').value = ''
    document.querySelector('.layer').style.display = "none"
    document.querySelector('.newProjectModal').style.display = "none"
})

document.querySelector('#create-project').addEventListener('click', (e)=> {
    e.preventDefault()

    
    var newProject = document.querySelector('.newProjectModal input').value
    var projects = localStorage.getItem('projects');
    console.log(projects)
    if (projects) {
        projects = JSON.parse(projects)
        projects.push(newProject)
    }
    else {
        projects = []
        projects.push(newProject)
    }
    localStorage.setItem('projects',JSON.stringify(projects))

    document.querySelector('.layer').style.display = "none"
    document.querySelector('.newProjectModal').style.display = "none"

    tRow = document.createElement('tr');
    tCell = document.createElement('td');
    tCell.innerText = document.querySelector('.newProjectModal input').value;
    tRow.appendChild(tCell);
    document.querySelector('#all-projects tbody').appendChild(tRow)
    document.querySelector('.newProjectModal input').value = ''

})


function listProjects() {
    var allProjects = localStorage.getItem('projects')
    if (allProjects) {
        JSON.parse(allProjects).forEach(el => {
            tRow = document.createElement('tr');
            tCell = document.createElement('td');
            tCell.innerText = el;
            tRow.appendChild(tCell);
            document.querySelector('#all-projects tbody').appendChild(tRow)
        })
    }
}

listProjects()
