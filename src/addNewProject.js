const newProject = (() => {
    const addDeleteFunction = function() {
        /*const svgList = document.querySelectorAll(".svgClass");
        const div = document.querySelector(".projectsList");
        const test = function() {
            for(let i = 0; i < svgList.length; i++) {
            const svgParent = svgList[i].parentNode;
            div.removeChild(svgParent);
            }
        }
        for(let i = 0; i < svgList.length; i++) {
            svgList[i].addEventListener("click", test())
        }*/
        console.log()
    }
    const addProjectDiv = function() {
        const projectsList = document.querySelector(".projectsList");
        const textbox = document.querySelector(".projectsTextbox");
        const projectDiv = document.createElement("div");
        projectDiv.classList.add("project");
        projectDiv.textContent = textbox.value;
        projectsList.appendChild(projectDiv);

        const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        svg.setAttributeNS(null, "viewbox", "0 0 24 24");
        svg.classList.add("svgClass");
        svg.addEventListener("click", function() {
            console.log("ammm");
        })
        const projectDivList = document.querySelectorAll(".project");

        const pathNode = document.createElementNS("http://www.w3.org/2000/svg", "path");
        pathNode.setAttributeNS(null, "fill", "blue");
        pathNode.setAttributeNS(null, "d", "M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19M8.46,11.88L9.87,10.47L12,12.59L14.12,10.47L15.53,11.88L13.41,14L15.53,16.12L14.12,17.53L12,15.41L9.88,17.53L8.47,16.12L10.59,14L8.46,11.88M15.5,4L14.5,3H9.5L8.5,4H5V6H19V4H15.5Z")

        for(let i = 0; i < projectDivList.length; i++) { //loop to add svgs to divs
            projectDivList[i].appendChild(svg); 
            //addDeleteFunction();
        }

        const svgList = document.querySelectorAll(".svgClass")

        for(let i = 0; i < svgList.length; i++) {
            svgList[i].appendChild(pathNode);
            
        }
        addDeleteFunction();
    }
    return {
        addProjectDiv : function() {
            addProjectDiv();
        },
    }
}
)()

function addNewProject() {
    newProject.addProjectDiv();
}

export{addNewProject};