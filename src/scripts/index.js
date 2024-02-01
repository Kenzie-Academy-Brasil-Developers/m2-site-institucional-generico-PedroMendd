function handleModal () {
    const button = document.querySelector('.header__button')
    const modalContainer = document.querySelector('.modal__controller')

    button.addEventListener('click', () => {
        modalContainer.showModal()

        closeModal()
    })
}



function closeModal () {
    const button = document.querySelector('#closeModal')
    const modalContainer = document.querySelector('.modal__controller')

    button.addEventListener('click', () => {
        modalContainer.close()
    })
}

handleModal()