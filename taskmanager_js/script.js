document.addEventListener('DOMContentLoaded', () => {
    const addBtn = document.getElementById('addTask');
    const viewBtn = document.getElementById('viewTask');
    const taskList = document.getElementById('taskList');

    let listOfTasks = [];
    addBtn.addEventListener('click', () => {
        let task = document.getElementById('taskname');
        if (task.value != '') {
            listOfTasks.push(task.value);
            console.log(listOfTasks);
            task.value = '';
        }
    });

    viewBtn.addEventListener('click', () => {
        const list = document.getElementById('taskList');

        list.innerHTML = ''; //clear previous list for user

        //print list
        listOfTasks.forEach((item) => {

            const editBtn = document.createElement('button');
            editBtn.setAttribute('class', 'editTask');
            editBtn.setAttribute('id', `${item}`);
            editBtn.textContent = 'Edit task';


            const delBtn = document.createElement('button');
            delBtn.setAttribute('class', 'deleteTask');
            delBtn.setAttribute('id', `${item}`);
            delBtn.textContent = 'Delete task';

            const li = document.createElement('li');
            li.setAttribute('id', `${item}`);
            li.textContent = `${item}`
            li.appendChild(delBtn);
            li.appendChild(editBtn);
            list.appendChild(li);
        });
    });


    //###Use event delegation for delete buttons
    taskList.addEventListener('click', (event) => {
        if (event.target.classList.contains('deleteTask')) {
            let itemName = event.target.getAttribute('id');
            console.log(`deleted: ${itemName}`);

            listOfTasks = listOfTasks.filter((item) => item !== itemName);
            console.log(`new list: ${listOfTasks}`); //remove item from array

            // Remove the li element for user
            let li = document.getElementById(itemName);
            li.remove();
        }

        if (event.target.classList.contains('editTask')) {
            const editBtn = event.target;

            editBtn.addEventListener('click', () => {

                let itemName = editBtn.getAttribute('id');
                const field = document.createElement('input');
                const change = document.createElement('button');
                change.setAttribute('id', 'change');
                change.textContent = 'change';
                field.setAttribute('name', 'newTask');
                field.setAttribute('placeholder', 'new');
                field.setAttribute('type', 'text');
                field.setAttribute('autocomplete', 'off');

                editBtn.after(field);
                field.after(change);

                change.addEventListener('click', () => {
                    let newName = field.value;
                
                    // Find the index of the item to be changed
                    let index = listOfTasks.indexOf(itemName);
                    //using map
                    //listOfTasks = listOfTasks.map(item => item === itemName ? newName : item);
                    if (index !== -1) {
                        // Update the array
                        listOfTasks[index] = newName;
                
                        // Update the corresponding list item
                        let li = document.getElementById(itemName);
                        if (li) {
                            li.textContent = `${newName}`;
                            li.id = `${newName}`;
                        }
                    }
                    console.log(listOfTasks);
                });
            });
        }
    });//##
});
//issues: with delete buttons start from line with ### and end with ##
/*
*The issue you're facing with not being able to delete elements from the list (taskList) in your To-do manager application is likely due to how you're handling the deletion process with your event listeners. There are a couple of key points to address and correct in your code:

*Issue Analysis:
*Event Listener Attachment:

The event listener for deleting tasks (delBtns.forEach(...)) is set up correctly to listen for clicks on delete buttons (deleteTask). However, you might be encountering issues with event delegation and dynamic element handling.
Dynamic Elements and Event Delegation:

Since you're creating delete buttons dynamically inside the viewBtn click event listener, the delBtns NodeList fetched initially might not include these newly created buttons. Therefore, the event listeners attached to delBtns might not be effective for newly added delete buttons.
Immediate Execution Context:

The line let li = getElementById(itemName); inside your delete event listener should be document.getElementById(itemName); to correctly select the list item (li) by its ID.
*/

/**solution:
 * To ensure that the delete functionality works correctly for dynamically created elements, 
 * you can employ event delegation. This involves attaching a single event listener to a parent element (taskList in this case) and using it to catch events originating from child elements (deleteTask buttons) that are added dynamically.
 */

/*
 * Explanation:
Event Delegation: Instead of attaching event listeners to each deleteTask button individually, a single event listener is attached to the taskList (<ol> element). This listener listens for click events and checks if the clicked element (event.target) has the class deleteTask.
Dynamic Element Handling: This approach ensures that even dynamically created deleteTask buttons inside taskList are handled correctly. When a deleteTask button is clicked, it triggers the event listener, which then identifies the corresponding itemName, updates listOfTasks, and removes the <li> element from taskList.
 */

/*const delBtns = document.querySelectorAll('.deleteTask');
let newList = listOfTasks.slice(); // Copy listOfTasks initially

delBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
        let itemName = btn.getAttribute('id');
        console.log(itemName);

        newList = newList.filter((item) => {
            return item !== itemName;
        });

        listOfTasks = newList.slice(); // Update listOfTasks with the filtered newList
        console.log(listOfTasks);

        let li = getElementById(itemName);
        li.remove();
    });
});*/