import { newProject, addNewProject } from "./addNewProject";
import { addNewTask } from "./addNewTask";

const container = document.querySelector("#container");

const pageLayout = (() => {
    const createHeader = function() {
        const header = document.createElement("div");
        header.classList.add("header");
        container.appendChild(header);

        const heading = document.createElement("h1");
        heading.textContent = "To-do List"
        header.appendChild(heading);
    }

    const createMain = function() {
        const main = document.createElement("main");
        container.appendChild(main);
    }


    return {
        createHeader : function () {
            createHeader();
        },
        createMain : function () {
            createMain()
        }
    }
})()

const mainContent = (() => {

    const createProjectsDiv = function() {
        const projectsDiv = document.createElement("div");
        projectsDiv.classList.add("projectsDiv");
        const main = document.querySelector("main");
        main.appendChild(projectsDiv);
    }

    const createTasksDiv = function() {
        const tasksDiv = document.createElement("div");
        tasksDiv.classList.add("tasksDiv");
        const main = document.querySelector("main");
        main.appendChild(tasksDiv);
    } 

    const addProjectContent = function() {
        const projectsDiv = document.querySelector(".projectsDiv");
        for(let i = 0; i < 2; i++) {
            const div = document.createElement("div");
            projectsDiv.appendChild(div);
            if(i == 1) {
                div.classList.add("projectsList");
            }
        }
        const divs = document.querySelectorAll(".projectsDiv > div");
        const textbox = document.createElement("input");
        textbox.classList.add("projectsTextbox");
        textbox.placeholder = "Project name..."
        divs[0].appendChild(textbox);

        const button = document.createElement("button");
        button.classList.add("projectButton");
        button.textContent = "Add New Project";
        button.addEventListener("click", function() {
            addNewProject()
        }
        )
        divs[0].appendChild(button);
    }

    const addTasksContent = function() {
        const tasksDiv = document.querySelector(".tasksDiv");
        for(let i = 0; i < 2; i++) {
            const div = document.createElement("div");
            tasksDiv.appendChild(div);
            if(i == 1) {
                div.classList.add("tasksList");
            }
        }
        const divs = document.querySelectorAll(".tasksDiv > div");
        const textbox = document.createElement("input");
        textbox.setAttribute("type", "text");
        textbox.classList.add("tasksTextbox");
        textbox.placeholder = "Task name..."
        divs[0].appendChild(textbox);

        const date = document.createElement("input");
        date.setAttribute("type", "date");
        date.classList.add("date");
        divs[0].appendChild(date);

        const urgency = document.createElement("select");
        divs[0].appendChild(urgency);

        const urgencySelect = document.querySelector("select");
        const option1 = document.createElement("option");
        option1.value = "Urgent";
        option1.textContent = "Urgent";
        urgencySelect.appendChild(option1);

        const option2 = document.createElement("option");
        option2.value = "Medium";
        option2.textContent = "Medium";
        urgencySelect.appendChild(option2);

        const option3 = document.createElement("option");
        option3.value = "Not Urgent";
        option3.textContent = "Not Urgent";
        urgencySelect.appendChild(option3);


        const button = document.createElement("button");
        button.classList.add("taskButton");
        button.textContent = "Add New Task";
        button.addEventListener("click", function() {
            addNewTask();
        }
        )
        divs[0].appendChild(button);
    }

    return {
        createProjectsDiv : function() {
            createProjectsDiv();
        },
        createTasksDiv : function() {
            createTasksDiv();
        },
        addProjectContent : function() {
            addProjectContent();
        },
        addTasksContent : function() {
            addTasksContent();
        }
    }
})()

function pageLoad() {
    pageLayout.createHeader();
    pageLayout.createMain();

    mainContent.createProjectsDiv();
    mainContent.createTasksDiv();
    mainContent.addProjectContent();
    mainContent.addTasksContent();

    newProject.addDefaultProject();
}

export {pageLoad};