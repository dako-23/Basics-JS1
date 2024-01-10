function projectCreation (input){

let oneProject = 3;

let name = input [0];
let numberOfProjects = Number (input[1]);

let hoursNeeded = numberOfProjects * oneProject;

console.log(`The architect ${name} will need ${hoursNeeded} hours to complete ${numberOfProjects} project/s.`);

}
projectCreation(["George","4"]); 