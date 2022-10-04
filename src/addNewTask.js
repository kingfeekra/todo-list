import { projectsObject } from "./projectsObject";
import { taskDisplay } from "./displayTasks";

const newTask = (() => {
    const addTask = function() {
        const tasksList = document.querySelector(".tasksList");
        const taskDiv = document.createElement("div");
        taskDiv.classList.add("task");
        tasksList.appendChild(taskDiv);

        const tasks = document.querySelectorAll(".task");
        const taskName = document.createElement("p");

        const textbox = document.querySelector(".tasksTextbox");
        taskName.textContent = textbox.value;
        tasks[tasks.length - 1].appendChild(taskName); //tasks.length -1 makes sure the values only get added to the final task in the list i.e. the empty one

        const dueDate = document.createElement("p")
        const dateInput = document.querySelector("input[type = 'date']");
        dueDate.textContent = dateInput.value;
        tasks[tasks.length - 1].appendChild(dueDate);
        

        const urgency = document.createElement("p");
        const urgencyInput = document.querySelector("select");
        urgency.textContent = urgencyInput.value;
        tasks[tasks.length - 1].appendChild(urgency);
        addTaskToObject();
        console.log(projectsObject);
    }

    function addTaskToObject() {
        const taskObject = {};

        const textbox = document.querySelector(".tasksTextbox");
        const taskName = textbox.value;
        taskObject.taskName = taskName;

        const dateInput = document.querySelector("input[type = 'date']");
        const dueDate = dateInput.value;
        taskObject.dueDate = dueDate;

        const urgencyInput = document.querySelector("select");
        const urgency = urgencyInput.value;
        taskObject.urgency = urgency;

        const selectedProject = document.querySelector(".selectedProject");
        projectsObject[selectedProject.dataset.projectNumber].tasks.push(taskObject);
    }

    const addDeleteButton = function() {
        const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        svg.setAttributeNS(null, "viewbox", "0 0 24 24");
        svg.classList.add("svgClass");
        svg.addEventListener("click", function() {
            const div = document.querySelector(".tasksList");
            const svgParent = svg.parentNode;
            console.log(svgParent);
            const selectedProject = document.querySelector(".selectedProject");
            const tasksArray = projectsObject[selectedProject.dataset.projectNumber].tasks;
            const taskInfo = svgParent.querySelectorAll("p");

            for(let i = 0; i < tasksArray.length; i++) {
                if(taskInfo[0].textContent == tasksArray[i].taskName &&
                    taskInfo[1].textContent == tasksArray[i].dueDate && 
                    taskInfo[2].textContent == tasksArray[i].urgency) {
                        tasksArray.splice(i, 1);
                    }
            }
            div.removeChild(svgParent);

            
        })
        const taskDivList = document.querySelectorAll(".task");

        const pathNode = document.createElementNS("http://www.w3.org/2000/svg", "path"); //svg shape i.e. trash can
        pathNode.setAttributeNS(null, "fill", "rgb(46, 46, 46)");
        pathNode.setAttributeNS(null, "d", "M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19M8.46,11.88L9.87,10.47L12,12.59L14.12,10.47L15.53,11.88L13.41,14L15.53,16.12L14.12,17.53L12,15.41L9.88,17.53L8.47,16.12L10.59,14L8.46,11.88M15.5,4L14.5,3H9.5L8.5,4H5V6H19V4H15.5Z")

        for(let i = 0; i < taskDivList.length; i++) { //loop to add svgs to divs
            taskDivList[i].appendChild(svg); 
        }

        const svgList = document.querySelectorAll(".svgClass")

        for(let i = 0; i < svgList.length; i++) {
            svgList[i].appendChild(pathNode);
            
        }
    }
    return {
        addTask : function() {
            addTask();
        },
        addDeleteButton: function() {
            addDeleteButton();
        }
    }
}
)()

function addNewTask() {
    newTask.addTask();
    newTask.addDeleteButton();
}

export{addNewTask, newTask};