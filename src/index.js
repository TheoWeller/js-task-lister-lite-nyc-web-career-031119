document.addEventListener("DOMContentLoaded", () => {
  //find list
  const list = document.querySelector('#list').children[1]
  //find the input field
  const input = document.querySelector('#new-task-description');
  //add listener event
  //find form
  const form = document.querySelector('#create-task-form');
  //create dropdown priority for tasks
  const dropdown = document.querySelector("#priority");
  //Create options
  const option1 = document.createElement('option')
  option1.innerText = "red"
  // option2.innerText = "yellow"
  // option3.innerText = "green"
  const option2 = document.createElement("option")
  const option3 = document.createElement("option")
  dropdown.appendChild(option1)
  dropdown.appendChild(option2)
  dropdown.appendChild(option3)


  //add listener
  form.addEventListener('submit', function(event) {
    event.preventDefault();
    //user input
    const userTyped = input.value
    //creates task element
    const task = document.createElement('li');
    //assigns user input to element
    task.innerText = userTyped;
    //add task to list
    list.appendChild(task);
    //form reset
    form.reset();
    //creating dropdown options


    //create button to delete task
    const deleteButton = document.createElement("BUTTON")
    deleteButton.innerText = "Delete"
    task.appendChild(deleteButton)
    //add eventlistener to delete button
    deleteButton.addEventListener('click', function(e){
    //delete individual task
    list.removeChild(task)

    })

  })
});
