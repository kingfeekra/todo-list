import {projectsObject} from "./projectsObject.js"

const displayTasks = (() => {
    function removeTasks() {
        const taskList = document.querySelector(".taskList");
        //taskList.innerHTML = "";
        const selectedProject = document.querySelector(".selectedProject");
        const tasks = projectsObject[selectedProject.dataset.projectNumber];
        console.log(tasks); 
    }
    return {
        removeTasks : function() {
            removeTasks();
        }
    }
})()

function fuckOff() {
    displayTasks.removeTasks();
}

export {fuckOff};