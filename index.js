const fs = require('fs');
const inquirer = require('inquirer'); 
const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const generateHtml = require('./lib/generateHTML')
const employees = [];

const questions = () => {
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is this team members name?',
            validate: namePrompt =>{
                if(namePrompt){
                    return true;
                }else{
                    console.log('Please enter this team members name!');
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is this team members id?',
            validate: idPrompt =>{
                if(idPrompt){
                    return true;
                }else{
                    console.log('Please enter this team members id!');
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is this team members email adress?',
            validate: emailPrompt =>{
                if(emailPrompt){
                    return true;
                }else{
                    console.log('Please enter this team members email adress!');
                }
            }
        },
        {
            type: 'list',
            name: 'role',
            message: 'Choose this team members role',
            choices: ['Manager', 'Engineer', 'Intern'],
        }
    ])

    .then((jobQuestions) =>{
        switch (jobQuestions.role){

            case 'Manager':
                inquirer.prompt([
                    {
                    type: 'input',
                    name: 'office',
                    message: 'Please enter the Managers office number',
                },
            ])

            .then((answers) =>{
                employees.push(
                    new Manager(
                        jobQuestions.name,
                        jobQuestions.id,
                        jobQuestions.email,
                        answers.office,
                        jobQuestions.role
                    )
                );
                console.log(employees);
                nextEmployee();
            });
            break;

            case 'Engineer':
                inquirer.prompt([
                    {
                    type: "input",
                    name: "github",
                    message: "Please enter your GitHub User Name",
                    },
                ])

                .then((answers) =>{
                    employees.push(
                        new Engineer(
                            jobQuestions.name,
                            jobQuestions.id,
                            jobQuestions.email,
                            answers.github,
                            jobQuestions.role
                        )
                    );
                    console.log(employees);
                    nextEmployee();
        });
        break;

        case 'Intern':
                inquirer.prompt([
                    {
                    type: "input",
                    name: "school",
                    message: "What is this Intern's School?",
                    },
                ])

                .then((answers) =>{
                    employees.push(
                        new Intern(
                            jobQuestions.name,
                            jobQuestions.id,
                            jobQuestions.email,
                            answers.school,
                            jobQuestions.role
                        )
                    );
                    console.log(employees);
                    nextEmployee();
        });
        break;
    }
    });
}

function nextEmployee() {
    inquirer
      .prompt([
        {
          name: "newTeamMember",
          type: "confirm",
          message: "Would you like to add more team members?",
        },
      ])
      .then((answers) => {
        if (answers.newTeamMember) {
          questions();
        } else {
          fs.writeFile("./src/index.html", generateHtml.writeToFile(employees), (err) => {
            if (err) throw err;
            console.log("Employee Cards ready!");
        })
      };
  });
};

questions();