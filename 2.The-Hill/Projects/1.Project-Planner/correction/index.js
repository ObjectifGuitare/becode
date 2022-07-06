let allTasks = []

let selectedTask = null

// Si on a une valeur dans le LS
// On remplace notre array par la valeur du LS
if(localStorage.getItem('tasks')){
  allTasks = JSON.parse(localStorage.getItem('tasks'))
  render()
}

// Ajouter une tache dans mon array
function addTask(){
  const taskName = document.querySelector('#task_name') 
  const taskDescription = document.querySelector('#task_description') 
  const taskStatus = document.querySelector('#task_status') 
  const taskDate = document.querySelector('#task_date')

  if(taskName !== '' 
    && taskDescription !== ''
    && taskStatus !== ''
    && taskDate !== ''){
      allTasks.push({
        name: taskName.value,
        description: taskDescription.value,
        status: taskStatus.value,
        date: taskDate.value,
        dueDate: Math.ceil((new Date(taskDate.value).getTime() - Date.now()) / (1000 * 60 * 60 * 24))
      })

      localStorage.setItem('tasks', JSON.stringify(allTasks))

      taskName.value = ''
      taskDescription.value = ''
      taskDate.value = ''
  }

  render()
}

document.querySelector('#task_create').addEventListener('click', addTask)

// Faire le rendu DOM:
// Selection du conteneur,
// Effacer le contenu existant
// Via une boucle je vais parcourir mon array pour créer les taches
function render(){
  const taskList = document.querySelector('#task_list')
  taskList.innerHTML = ''


  for (let i=0; i<allTasks.length; i++) {
    const task = allTasks[i]

    const taskContainer = document.createElement('section')
    taskContainer.className = 'task'
    
    const taskName = document.createElement('h1')
    taskName.innerText = task.name
    taskContainer.appendChild(taskName)
    
    const taskDescription = document.createElement('p')
    taskDescription.innerText = task.description
    taskContainer.appendChild(taskDescription)

    const taskDate = document.createElement('p')
    taskDate.innerText = 'Due in ' + task.dueDate + ' days'
    taskContainer.appendChild(taskDate)

    const deleteButton = document.createElement('button')
    deleteButton.innerText = 'delete'
    deleteButton.className = 'delete-button'
    deleteButton.addEventListener('click', () => {
      // On supprime de l'array l'index courant
      allTasks.splice(i, 1)

      // On refait le rendu
      render()

      // On mets a jour le LS
      localStorage.setItem('tasks', JSON.stringify(allTasks))
    })
    taskContainer.appendChild(deleteButton)

    const editButton = document.createElement('button')
    editButton.innerText = 'edit'
    editButton.className = 'edit-button'
    editButton.addEventListener('click', () => {
      // On récupère l'overlay dans le HTML et on l'affiche
      document.querySelector('.edit-task-overlay').style.display = 'flex'

      // On définit la valeur de la tâche séléctionnée = l'index de l'array
      selectedTask = i

      // Pour chacun des champs du formulaire d'edition on donne la valeur de la tâche
      document.querySelector('#edit_task_name').value = task.name
      document.querySelector('#edit_task_description').value = task.description
      document.querySelector('#edit_task_status').value = task.status
      document.querySelector('#edit_task_date').value = task.date
    })
    taskContainer.appendChild(editButton)

    taskList.appendChild(taskContainer)
  }
}

document.querySelector('#edit_task_create').addEventListener('click', () => {
  allTasks[selectedTask] = {
    name: document.querySelector('#edit_task_name').value,
    description: document.querySelector('#edit_task_description').value,
    status: document.querySelector('#edit_task_status').value,
    date: document.querySelector('#edit_task_date').value,
    dueDate: Math.ceil((new Date(document.querySelector('#edit_task_date').value).getTime() - Date.now()) / (1000 * 60 * 60 * 24))
  }

  // On refait le rendu
  render()

  // On mets a jour le LS
  localStorage.setItem('tasks', JSON.stringify(allTasks))
})


// Pour faire filter et sorting

// soit (option 1)
// modifier l'array allTasks
// refaire le rendu

// soit (option 2)
// modifier la fonction render