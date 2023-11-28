const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

let tasks = [];

function mainMenu() {
    console.log('\nTO-DO LIST\n');
    console.log('1. View Tasks');
    console.log('2. Add a Task');
    console.log('3. Mark a Task as Completed');
    console.log('4. Delete a Task');
    console.log('5. Exit');

    readline.question('Choose an option: ', (option) => {
        switch (option) {
            case '1':
                viewTasks();
                break;
            case '2':
                addTask();
                break;
            case '3':
                markTaskCompleted();
                break;
            case '4':
                deleteTask();
                break;
            case '5':
                console.log('Exiting...');
                readline.close();
                break;
            default:
                console.log('Invalid option, please choose again.');
                mainMenu();
                break;
        }
    });
}

function viewTasks() {
    tasks.forEach((task, index) => {
        console.log(`${index + 1}. [${task.completed ? 'X' : ' '}] ${task.description}`);
    });
    mainMenu();
}

function addTask() {
    readline.question('Enter the description of the new task: ', (description) => {
        tasks.push({ description, completed: false });
        console.log('Task added.');
        mainMenu();
    });
}

function markTaskCompleted() {
    readline.question('Enter the number of the task to mark as completed: ', (number) => {
        const taskIndex = parseInt(number, 10) - 1;
        if (tasks[taskIndex]) {
            tasks[taskIndex].completed = true;
            console.log('Task marked as completed.');
        } else {
            console.log('Task not found.');
        }
        mainMenu();
    });
}

function deleteTask() {
    readline.question('Enter the number of the task to delete: ', (number) => {
        const taskIndex = parseInt(number, 10) - 1;
        if (tasks[taskIndex]) {
            tasks.splice(taskIndex, 1);
            console.log('Task deleted.');
        } else {
            console.log('Task not found.');
        }
        mainMenu();
    });
}

// Start the application by displaying the main menu
mainMenu();
