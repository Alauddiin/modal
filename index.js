let modal = document.querySelector('.modal')
let closeBtn = document.querySelector('.close-modal-btn')
let overlay = document.querySelector('.overlay')
let showModalBtn = document.querySelectorAll('.show-modal-btn')




let showModal = function(){
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
}

for(let modalElement of showModalBtn){
    modalElement.addEventListener('click',showModal)
};



let closeModal = function(){
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}
closeBtn.addEventListener('click',closeModal)
overlay.addEventListener('click',closeModal)
document.addEventListener('keydown',(e)=>{
    if(e.key==='Escape' && !modal.classList.remove('hidden')){
        closeModal()
    }
})

