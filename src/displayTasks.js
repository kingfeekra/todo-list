import {projectsObject} from "./projectsObject.js"
import {newTask} from "./addNewTask.js"

const taskDisplay = (() => {
    function removeTasks() {
        const taskList = document.querySelector(".tasksList");
        if(taskList.innerHTML == "") {
            return;
        }
        else {
        taskList.innerHTML = "";
        }
    }
    function displayTasks() {
        const selectedProject = document.querySelector(".selectedProject");
        const tasksArray = projectsObject[selectedProject.dataset.projectNumber].tasks;
        for(let i = 0; i < tasksArray.length; i++) {
            const tasksList = document.querySelector(".tasksList");
            const taskDiv = document.createElement("div");
            taskDiv.classList.add("task");
            tasksList.appendChild(taskDiv);

            const tasks = document.querySelectorAll(".task");
            const taskName = document.createElement("p");

            taskName.textContent = tasksArray[i].taskName;
            tasks[tasks.length - 1].appendChild(taskName); //tasks.length -1 makes sure the values only get added to the final task in the list i.e. the empty one

            const dueDate = document.createElement("p");
            dueDate.textContent = tasksArray[i].dueDate;
            tasks[tasks.length - 1].appendChild(dueDate);
            

            const urgency = document.createElement("p");
            urgency.textContent = tasksArray[i].urgency;
            tasks[tasks.length - 1].appendChild(urgency);
            console.log(projectsObject);

            newTask.addDeleteButton();

        }
    }
    return {
        removeTasks : function() {
            removeTasks();
        },
        displayTasks : function() {
            displayTasks();
        }
        
    }
})()

export {taskDisplay};