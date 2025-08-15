function menu() {
    if (links.style.display == 'flex') {
        links.style.display = 'none'
    } else {
        links.style.display = 'flex'
    }
}

function perfil() {
    if (perfilUser.style.display == 'flex') {
        perfilUser.style.display = 'none'
    } else {
        perfilUser.style.display = 'flex'
    }
}

const openButtons = document.querySelectorAll('.cadastro');

 openButtons.forEach(button => {
    button.addEventListener('click', () => {
        const modalId = button.getAttribute('data-modal');
        const modal = document.getElementById(modalId);

         modal.showModal();
    });
 });

 const closeButtons = document.querySelectorAll('.close');

 closeButtons.forEach(button => {
    button.addEventListener('click', () => {
        const modalId = button.getAttribute('data-modal');
        const modal = document.getElementById(modalId);

         modal.close();
    });
 });

 const openButton = document.querySelectorAll('.excluir');

 openButton.forEach(button => {
    button.addEventListener('click', () => {
        const modalId = button.getAttribute('data-modal');
        const modal = document.getElementById(modalId);

         modal.showModal();
    });
 });

  const closeButton = document.querySelectorAll('.naoexcluir');

 closeButton.forEach(button => {
    button.addEventListener('click', () => {
        const modalId = button.getAttribute('data-modal');
        const modal = document.getElementById(modalId);

         modal.close();
    });
 });