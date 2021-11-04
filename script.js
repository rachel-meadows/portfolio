// Initialise items in skill list for DOM manipulation on hover
const htmlSkills = document.getElementById("html");
const reduxSkills = document.getElementById("Redux");
const djangoSkills = document.getElementById("Django");
const cssSkills = document.getElementById("css");
const reactSkills = document.getElementById("react");
const expressJSSkills = document.getElementById("expressJS");
const javascriptSkills = document.getElementById("javaScript");
const restfulAPIsSkills = document.getElementById("restfulAPIs");
const nodeJSSkills = document.getElementById("nodeJS");
const pythonSkills = document.getElementById("python");
const sqlSkills = document.getElementById("sql");
const handlebarsSkills = document.getElementById("handlebars");
const teamManagementSkills = document.getElementById("teamManagement");
const productOwnershipSkills = document.getElementById("productOwnership");
const clientLiaisonSkills = document.getElementById("clientLiaison");
const publicSpeakingSkills = document.getElementById("publicSpeaking");
const consultingSkills = document.getElementById("consulting");
const researchSkills = document.getElementById("research");


document.querySelectorAll('.skill').forEach(skill => {
    skill.addEventListener('click', event => {
        console.log("BBBBBBB");
        skillText = document.getElementById(`${skill.id}Text`);
        if (skillText.classList.contains("skillTextVisible")) {
            skillText.classList.remove("skillTextVisible");
        } else {
            skillText.classList.add("skillTextVisible");
            console.log("DDDDDDD");
        }
        });

})
