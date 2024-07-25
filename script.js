//Récupérer ce dont on a besoin 
let list = document.querySelector('#list')
let save = document.querySelector('#save')

//quand j'enregistre une tache 
save.addEventListener('click', ()=>{
    let task = document.querySelector('#search').value
    //afficher à l'écran la tâche
    let li = document.createElement('li')
    li.textContent = task
    list.appendChild(li)
    document.querySelector('#search').value = ""
    //validation
    let validateBtn = document.createElement('button')
    validateBtn.textContent = "valider"
    li.appendChild(validateBtn)
    validateBtn.addEventListener('click', ()=> {
        li.style.textDecoration = "line-through"
    })
    //suppression
    let deleteBtn = document.createElement('button')
    deleteBtn.textContent = "supprimer"
    li.appendChild(deleteBtn) 
    deleteBtn.addEventListener('click', ()=> {
        li.remove()
    })
})