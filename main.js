let gallery = document.querySelectorAll('.gallery_img')
let imgInModal = document.querySelector('.modal_img')
let modalImaWindow = document.querySelector('.position')
let modalCloseBtn = document.querySelector('.modal-close')

gallery.forEach(e => {
    e.addEventListener('click', el => {
        modalImaWindow.classList.remove('none')
        imgInModal.src = `./img/pic${el.target.id}.jpg`
        modalCloseBtn.addEventListener('click', () => {
            modalImaWindow.classList.add('none')
        })
        
    })
});