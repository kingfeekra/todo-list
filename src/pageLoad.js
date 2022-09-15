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
        }
        const divs = document.querySelectorAll(".projectsDiv > div");
        const textBox = document.createElement("input");
        divs[0].appendChild(textBox);

        const button = document.createElement("button");
        button.textContent = "Add New Project"
        divs[0].appendChild(button);
    }

    const addTasksContent = function() {
        const tasksDiv = document.querySelector(".tasksDiv");
        const button = document.createElement("button");
        button.textContent = "Add New Task";
        tasksDiv.appendChild(button);
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
}

export {pageLoad};