let proj;

fetch('projects.json')
.then(response => {
    return response.json();
}).then(projects => {
    console.log(projects);
    proj = projects;
    parseData(projects);

    // Set up button event listeners after projects are loaded
    for(button of document.querySelectorAll("#buttons button")){
        button.addEventListener("click", e =>{
            console.log(e.target.value);
            sortProjects(e.target.value);
        });
    }
}).catch(err => {
    console.log(`error ${err}`);
});

function parseData(data){
    for(let i=0; i<data.projects.length; i++)
        {
        document.getElementById("projects").innerHTML += `
        <a href="${data.projects[i].subdomain}.html?subdomain=${data.projects[i].subdomain}">
        <div class="row project" id="${data.projects[i].subdomain}">
        <div class="projimg"><img src="images/project${i+1}.svg"></div>
        <div class="description"><h2>[${data.projects[i].name}]</h2>
        <p class="subtitle">${data.projects[i].subtitle}</p>
        <p>${data.projects[i].abstract}</p></div></div>`;
        
        }
}

const params = new URLSearchParams(window.location.search);
const subdomain = params.get("subdomain");

fetch('projects.json')
    .then(response => response.json())
    .then(data => {
        const project = data.projects.find(proj => proj.subdomain === subdomain);
        if (project) {
            document.getElementById("name").textContent = project.name;
            document.getElementById("organisation").textContent = project.organisation;
            const displayedImage = document.querySelector('.displayed-img');
            const thumbBar = document.querySelector('.thumb-bar');

            project.images.forEach((image, index) => {
                const newImage = document.createElement('img');
                newImage.setAttribute('src', `images/${project.subdomain}/${image}`);
                newImage.setAttribute('alt', `${project.name} - image ${index + 1}`);
                thumbBar.appendChild(newImage);

                // Set the first image as the displayed image
                if (index === 0) {
                    displayedImage.setAttribute('src', `images/${project.subdomain}/${image}`);
                    displayedImage.setAttribute('alt', `${project.name} - image ${index + 1}`);
                }

                // Add click event to update displayed image
                newImage.addEventListener('click', () => {
                    displayedImage.setAttribute('src', newImage.getAttribute('src'));
                    displayedImage.setAttribute('alt', newImage.getAttribute('alt'));
                });
            });
            document.getElementById("description").textContent = project.description;
        } else {
            console.error("Project not found");
        }
    })
    .catch(err => console.error(`Error loading project data: ${err}`));
    function sortProjects(button){
        if(button == "clear"){
            // Show all projects
            for(i = 0; i < proj.projects.length; i++) {
                document.getElementById(proj.projects[i].subdomain).style.display = "flex";
            }
        } else if(button != undefined) {
            // Filter by category
            for(i = 0; i < proj.projects.length; i++) {
                if(proj.projects[i].category.includes(button)) {
                    document.getElementById(proj.projects[i].subdomain).style.display = "flex";
                } else {
                    document.getElementById(proj.projects[i].subdomain).style.display = "none";
                }
            }
        } else {
            console.log("Error, button value is undefined");
        }
    }