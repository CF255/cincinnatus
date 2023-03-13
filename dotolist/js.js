const formulario = document.getElementById("formulario");
const input = document.getElementById("input");
const listatarea = document.getElementById("lista-tareas");
const template = document.getElementById("template").content;
const fragment = document.createDocumentFragment();
let tareas  = {
    1678727223735:{
        id:1678727223735,
        texto: "tarea1",
        estado: false
    }
}

document.addEventListener('DOMContentLoaded', () =>{
    pintarTareas()
})

listatarea.addEventListener('click', e =>{
    btnAccion(e);
})

/* console.log(Date.now()) */

formulario.addEventListener("submit", e =>{

    e.preventDefault();
   /*  console.log(e.target.querySelector("input").value)
    console.log(input.value)
     */
    setTareas(e)

})

const setTareas = e =>{
    if(input.value.trim()===""){
        console.log("esta vacio");
        return
    }

    const tarea = {
        id: Date.now(),
        texto: input.value,
        estado: false
    }
    tareas[tarea.id] =tarea;
   /*  console.log(tareas); */
    formulario.reset();
    input.focus();

    pintarTareas()
}

const pintarTareas = () => {
    listatarea.innerHTML = "";
    Object.values(tareas).forEach(tarea => {
        const clone = template.cloneNode(true);
        clone.querySelector("p").textContent = tarea.texto;

        if(tarea.estado){
            clone.querySelector('.alert').classList.replace('alert-warning','alert-primary')
            clone.querySelectorAll('.fas')[0].classList.replace('fa-circle-check', 'fa-rotate-left')
        }

        clone.querySelectorAll('.fas')[0].dataset.id = tarea.id;
        clone.querySelectorAll('.fas')[1].dataset.id = tarea.id;
        fragment.appendChild(clone);
    }) 
    listatarea.appendChild(fragment);  
}       

 /*    const btnAccion = e =>{
        console.log(e.target.classList.contains('fa-circle-check'))
        if(e.target.classList.contains('fa-circle-check')){
            
        }
        e.stopPropagation()
    } */

/* 
const btnAccion = e =>{
    console.log(e.target.classList.contains('fa-circle-check'))
    if(e.target.classList.contains('fa-circle-check')){
        console.log(e.target.dataset.id);
        tareas[e.target.dataset.id].estado = true;
        pintarTareas();
        console.log(tareas)
    }

    if(e.target.classList.contains('fa-circle-minus')){
        delete tareas[e.target.dataset.id];
        pintarTareas();
        console.log(tareas)
    }

    e.stopPropagation()
}

 */