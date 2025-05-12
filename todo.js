const taskInput = document.getElementById('task-input');
const addTaskBtn = document.getElementById('add-task-btn');
const taskList = document.getElementById('task-list');

let tasks = [];

addTaskBtn.addEventListener('click', addTask);

function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText) {
        tasks.push({ text: taskText, completed: false });
        taskInput.value = '';
        renderTasks();
    }
}

function renderTasks() {
    taskList.innerHTML = '';
    tasks.forEach((task, index) => {
        const taskHTML = `
            <li>
                <input type="checkbox" ${task.completed ? 'checked' : ''}>
                <span>${task.text}</span>
                <button class="edit-btn">Edit</button>
                <button class="delete-btn">Delete</button>
            </li>
        `;
        taskList.innerHTML += taskHTML;
    });
}

// Add event listeners for edit and delete buttons
taskList.addEventListener('click', (e) => {
    if (e.target.classList.contains('edit-btn')) {
        const taskIndex = Array.prototype.indexOf.call(taskList.children, e.target.parentNode);
        const taskText = prompt('Edit task:', tasks[taskIndex].text);
        if (taskText) {
            tasks[taskIndex].text = taskText;
            renderTasks();
        }
    } else if (e.target.classList.contains('delete-btn')) {
        const taskIndex = Array.prototype.indexOf.call(taskList.children, e.target.parentNode);
        tasks.splice(taskIndex, 1);
        renderTasks();
    }
});