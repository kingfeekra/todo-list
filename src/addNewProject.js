const newProject = (() => {
    const addNewProject = function() {
        const projectsList = document.querySelector(".projectsList");
        const textbox = document.querySelector(".projectsTextbox");
        const projectDiv = document.createElement("div");
        projectDiv.textContent = textbox.value;
        projectsList.appendChild(projectDiv);
    }
    return {
        addNewProject : function() {
            addNewProject();
        }
    }
}
)()

export{newProject};