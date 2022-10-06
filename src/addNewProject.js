import {projectsObject} from "./projectsObject";
import { taskDisplay } from "./displayTasks";

const newProject = (() => {
    let counter = 1;

    const addProjectDiv = function() {
        const projectsList = document.querySelector(".projectsList");
        const textbox = document.querySelector(".projectsTextbox");
        const projectDiv = document.createElement("div");
        projectDiv.classList.add("project");
        projectDiv.textContent = textbox.value;
        projectDiv.dataset.projectNumber = "project" + counter;
        projectDiv.addEventListener("click", () => {
            const projectList = document.querySelectorAll(".project");
            if(projectDiv.classList.contains("selectedProject")) {
                return;
            }
            for(let i = 0; i < projectList.length; i++) {
                if(projectList[i].classList.contains("selectedProject")) {
                    projectList[i].classList.remove("selectedProject");
                    const path = projectList[i].querySelector("path");
                    path.setAttributeNS(null, "fill", "rgb(46, 46, 46)");
                }
            }
            if(!projectDiv.classList.contains("selectedProject")) {
                projectDiv.classList.add("selectedProject");
                const path = projectDiv.querySelector("path");
                path.setAttributeNS(null, "fill", "white");
                taskDisplay.removeTasks();
                taskDisplay.displayTasks();
            }            
        });
        projectsList.appendChild(projectDiv);
        addDeleteButton();
        projectsObject["project"+ counter] = {};
        projectsObject[projectDiv.dataset.projectNumber].tasks = [];
        counter++;
    }

    function addDeleteButton() {
        const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        svg.setAttributeNS(null, "viewbox", "0 0 24 24");
        svg.classList.add("svgClass");
        
        svg.addEventListener("click", function() {
            const div = document.querySelector(".projectsList");
            const svgParent = svg.parentElement;
            div.removeChild(svgParent);
            
        })
        const projectList = document.querySelectorAll(".project");
        for(let i = 0; i < projectList.length; i++) { //loop to add svgs to divs
            projectList[i].appendChild(svg); 
        }

        const pathNode = document.createElementNS("http://www.w3.org/2000/svg", "path");
        pathNode.setAttributeNS(null, "fill", "rgb(46, 46, 46)");
        pathNode.setAttributeNS(null, "d", "M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19M8.46,11.88L9.87,10.47L12,12.59L14.12,10.47L15.53,11.88L13.41,14L15.53,16.12L14.12,17.53L12,15.41L9.88,17.53L8.47,16.12L10.59,14L8.46,11.88M15.5,4L14.5,3H9.5L8.5,4H5V6H19V4H15.5Z");

        const svgList = document.querySelectorAll(".svgClass")

        for(let i = 0; i < svgList.length; i++) {
            svgList[i].appendChild(pathNode);
        }
    }
    const addDefaultProject = function() {
        const projectsList = document.querySelector(".projectsList");
        const projectDiv = document.createElement("div");
        projectDiv.classList.add("project", "selectedProject");
        projectDiv.textContent = "Default Project";
        projectDiv.dataset.projectNumber = "defaultProject";
        projectDiv.addEventListener("click", () => {
            const projectList = document.querySelectorAll(".project");
            if(projectDiv.classList.contains("selectedProject")) {
                return;
            }
            for(let i = 0; i < projectList.length; i++) {
                if(projectList[i].classList.contains("selectedProject")) {
                    projectList[i].classList.remove("selectedProject");
                    const path = projectList[i].querySelector("path");
                    path.setAttributeNS(null, "fill", "rgb(46, 46, 46)");
                }
            }
            if(!projectDiv.classList.contains("selectedProject")) {
                projectDiv.classList.add("selectedProject")
                const path = projectDiv.querySelector("path");
                path.setAttributeNS(null, "fill", "white");
                taskDisplay.removeTasks();
                taskDisplay.displayTasks();
            }
        });
        projectsList.appendChild(projectDiv);
        projectsObject["defaultProject"] = {};
        projectsObject["defaultProject"].tasks = [];
        addDefaultDeleteButton();
    }

    function addDefaultDeleteButton() {
        const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        svg.setAttributeNS(null, "viewbox", "0 0 24 24");
        svg.classList.add("svgClass");
        
        svg.addEventListener("click", function() {
            const div = document.querySelector(".projectsList");
            const svgParent = svg.parentNode;
            div.removeChild(svgParent);
            
        })
        const projectList = document.querySelectorAll(".project");
        for(let i = 0; i < projectList.length; i++) { //loop to add svgs to divs
            projectList[i].appendChild(svg); 
        }

        const pathNode = document.createElementNS("http://www.w3.org/2000/svg", "path");
        pathNode.setAttributeNS(null, "fill", "white");
        pathNode.setAttributeNS(null, "d", "M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19M8.46,11.88L9.87,10.47L12,12.59L14.12,10.47L15.53,11.88L13.41,14L15.53,16.12L14.12,17.53L12,15.41L9.88,17.53L8.47,16.12L10.59,14L8.46,11.88M15.5,4L14.5,3H9.5L8.5,4H5V6H19V4H15.5Z");

        const svgList = document.querySelectorAll(".svgClass")

        for(let i = 0; i < svgList.length; i++) {
            svgList[i].appendChild(pathNode);
        }
    }
    return {
        addDefaultProject : function() {
            addDefaultProject();
        },
        addProjectDiv : function() {
            addProjectDiv();
        },
        addDeleteButton : function() {
            addDeleteButton();
        }
    }
}
)()

function addNewProject() {
    newProject.addProjectDiv();
  
}

export{newProject, addNewProject};