
function createTask(title, description, dueDate) {
    return {
        title: title,
        description: description,
        dueDate: dueDate
    };
}

function displayTasks(tasks) {
    console.log("Tasks:");
    tasks.forEach((task, index) => {
        console.log(`Task ${index + 1}:`);
        console.log(`Title: ${task.title}`);
        console.log(`Description: ${task.description}`);
        console.log(`Due Date: ${task.dueDate}`);
        console.log("---------------------------------");
    });
}

// Function to add a new task
function addTask(tasks, title, description, dueDate) {
    const newTask = createTask(title, description, dueDate);
    tasks.push(newTask);
    console.log("Task added successfully!");
}


function updateTask(tasks, index, title, description, dueDate) {
    if (index >= 0 && index < tasks.length) {
        tasks[index].title = title;
        tasks[index].description = description;
        tasks[index].dueDate = dueDate;
        console.log("Task updated successfully!");
    } else {
        console.log("Invalid task index!");
    }
}


function deleteTask(tasks, index) {
    if (index >= 0 && index < tasks.length) {
        tasks.splice(index, 1);
        console.log("Task deleted successfully!");
    } else {
        console.log("Invalid task index!");
    }
}


let tasks = [
    createTask("Task 1", "Description of Task 1", "2024-02-25"),
    createTask("Task 2", "Description of Task 2", "2024-03-01"),
    createTask("Task 3", "Description of Task 3", "2024-03-05")
];


displayTasks(tasks);


addTask(tasks, "Task 4", "Description of Task 4", "2024-03-10");


updateTask(tasks, 1, "Updated Task 2", "Updated description of Task 2", "2024-03-15");


deleteTask(tasks, 2);


displayTasks(tasks);

//function to add tasks with due dates

function addTaskWithDueDate(tasks, title, description, dueDate) {
    const newTask = createTask(title, description, dueDate);
    tasks.push(newTask);
    console.log("Task added successfully!");
}


let tasks = [
    createTask("Task 1", "Description of Task 1", "2024-02-25"),
    createTask("Task 2", "Description of Task 2", "2024-03-01"),
    createTask("Task 3", "Description of Task 3", "2024-03-05")
];


displayTasks(tasks);


addTaskWithDueDate(tasks, "Task 4", "Description of Task 4", "2024-03-10");


displayTasks(tasks);

// Function to display tasks sorted by due dates
function displayTasksSortedByDueDate(tasks) {
    // Sort tasks by due date
    const sortedTasks = tasks.slice().sort((task1, task2) => {
        return new Date(task1.dueDate) - new Date(task2.dueDate);
    });

    
    console.log("Tasks Sorted by Due Date:");
    sortedTasks.forEach((task, index) => {
        console.log(`Task ${index + 1}:`);
        console.log(`Title: ${task.title}`);
        console.log(`Description: ${task.description}`);
        console.log(`Due Date: ${task.dueDate}`);
        console.log("---------------------------------");
    });
}


let tasks = [
    createTask("Task 1", "Description of Task 1", "2024-02-25"),
    createTask("Task 2", "Description of Task 2", "2024-03-01"),
    createTask("Task 3", "Description of Task 3", "2024-03-05"),
    createTask("Task 4", "Description of Task 4", "2024-03-02")
];


displayTasksSortedByDueDate(tasks);

// Function to update task details or mark tasks as completed
function updateTask(tasks, index, title, description, dueDate, completed = false) {
    if (index >= 0 && index < tasks.length) {
        tasks[index].title = title !== undefined ? title : tasks[index].title;
        tasks[index].description = description !== undefined ? description : tasks[index].description;
        tasks[index].dueDate = dueDate !== undefined ? dueDate : tasks[index].dueDate;
        tasks[index].completed = completed !== undefined ? completed : tasks[index].completed;
        console.log("Task updated successfully!");
    } else {
        console.log("Invalid task index!");
    }
}


let tasks = [
    createTask("Task 1", "Description of Task 1", "2024-02-25"),
    createTask("Task 2", "Description of Task 2", "2024-03-01"),
    createTask("Task 3", "Description of Task 3", "2024-03-05")
];


updateTask(tasks, 1, "Updated Task 2", "Updated description of Task 2", "2024-03-15", true);


displayTasks(tasks);

// Function to remove a task from the scheduler
function removeTask(tasks, index) {
    if (index >= 0 && index < tasks.length) {
        tasks.splice(index, 1);
        console.log("Task removed successfully!");
    } else {
        console.log("Invalid task index!");
    }
}


let tasks = [
    createTask("Task 1", "Description of Task 1", "2024-02-25"),
    createTask("Task 2", "Description of Task 2", "2024-03-01"),
    createTask("Task 3", "Description of Task 3", "2024-03-05")
];


removeTask(tasks, 1);


displayTasks(tasks);


