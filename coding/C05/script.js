function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskName = taskInput.value.trim();
    
    if (taskName === '') {
        alert('Please enter a task!');
        return;
    }
    
    const taskList = document.getElementById('taskList');
    const taskItem = document.createElement('li');
    taskItem.className = 'task-item';
    
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.className = 'checkbox';
    checkbox.onclick = function() {
        taskItem.classList.toggle('completed');
    };
    taskItem.appendChild(checkbox);

    const taskText = document.createElement('span');
    taskText.textContent = taskName;
    taskText.className = 'task-text';
    taskItem.appendChild(taskText);
    
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = '🗑️';
    deleteBtn.className = 'delete-btn';
    deleteBtn.onclick = function() {
        taskList.removeChild(taskItem);
    };
    taskItem.appendChild(deleteBtn);
    
    taskList.appendChild(taskItem);
    taskInput.value = '';
}