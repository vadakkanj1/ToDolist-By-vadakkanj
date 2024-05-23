document.addEventListener('DOMContentLoaded', () => {
    const taskForm = document.getElementById('task-form');
    const newTaskInput = document.getElementById('new-task');
    const taskTimeInput = document.getElementById('task-time');
    const taskList = document.getElementById('task-list');

    taskForm.addEventListener('submit', (e) => {
        e.preventDefault();
        addTask(newTaskInput.value, taskTimeInput.value);
        newTaskInput.value = '';
        taskTimeInput.value = '';
    });

    taskList.addEventListener('click', (e) => {
        if (e.target.classList.contains('delete')) {
            deleteTask(e.target.closest('li'));
        } else if (e.target.classList.contains('edit')) {
            editTask(e.target.closest('li'));
        }
    });

    function addTask(task, time) {
        const li = document.createElement('li');
        li.innerHTML = `<span>${task}</span>
                        <span class="time"><i class="fas fa-clock"></i> ${time}</span>
                        <div>
                            <button class="edit"><i class="fas fa-pencil-alt"></i></button>
                            <button class="delete"><i class="fas fa-times"></i></button>
                        </div>`;
        taskList.appendChild(li);
    }

    function deleteTask(taskItem) {
        taskList.removeChild(taskItem);
    }

    function editTask(taskItem) {
        const taskText = taskItem.querySelector('span');
        const taskTime = taskItem.querySelector('.time');
        const newTask = prompt('Edit your task:', taskText.textContent);
        const newTime = prompt('Edit the time:', taskTime.textContent.split(' ')[1]);
        if (newTask !== null && newTask.trim() !== '') {
            taskText.textContent = newTask;
        }
        if (newTime !== null && newTime.trim() !== '') {
            taskTime.innerHTML = `<i class="fas fa-clock"></i> ${newTime}`;
        }
    }
});
