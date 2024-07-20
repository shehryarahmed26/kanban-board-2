let taskId = 0;
function todo() {
    let input = document.querySelector('.input-1');
    if (input.value == '') {
        alert('Please write something');
    } else {
        let task = document.querySelector('.colum-1');
        let div = document.createElement('div');
        div.className = 'tasks-area';
        div.draggable = true;
        div.id = `task-${taskId++}`;
        div.innerHTML = `<p>${input.value}</p>`;
        task.appendChild(div);
        input.value = '';

        div.addEventListener('dragstart', (e) => {
            e.dataTransfer.setData('text', e.target.id);
        });
    }

    let columns = document.querySelectorAll('.colum');
    columns.forEach((column) => {
        column.addEventListener('dragover', (e) => {
            e.preventDefault();
        });
        column.addEventListener('drop', (e) => {
            e.preventDefault();
            let data = e.dataTransfer.getData('text');
            let draggableElement = document.getElementById(data);
            e.target.appendChild(draggableElement);
        });
    });
}