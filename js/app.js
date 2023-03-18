const addToDoButton = document.querySelector('#addTask');
const inputField = document.querySelector('#userTaskInput');
const toDoContainer = document.querySelector('.todos');

inputField.addEventListener('click', selectInput);
addToDoButton.addEventListener('click' , addTask);

function selectInput() {
    inputField.style['boxShadow'] = '0 6px 2px -2px green';
} 

function addTask() {
    //console.log(inputField.value);//--    

    if (inputField.value.trim().length)
    {
        //console.log('tyhikuid pole sisestatud');//
                
        let newToDo = document.createElement('li');
        newToDo.classList.add('li-styling');
        newToDo.innerText = inputField.value;
        toDoContainer.appendChild(newToDo);

        newToDo.addEventListener('click', () => 
        {
            newToDo.style.color = 'gray';
            newToDo.style.textDecoration = 'line-through';
        });

        newToDo.addEventListener('dblclick',() => 
        {
            toDoContainer.removeChild(newToDo);
        });
    }

    else 
    {
        console.log('empty value');
        inputField.style['boxShadow'] = '0 6px 2px -2px red';
    }

    inputField.value = '';
}