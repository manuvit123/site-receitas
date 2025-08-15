// Menu hambúrguer
const menuToggle = document.getElementById('menu-toggle');
const menu = document.getElementById('menu');

if(menuToggle){
    menuToggle.addEventListener('click', () => {
        menu.classList.toggle('show');
    });
}

// Barra de pesquisa
const search = document.getElementById('search');
if(search){
    search.addEventListener('input', function(){
        const value = this.value.toLowerCase();
        document.querySelectorAll('.recipe').forEach(recipe => {
            recipe.style.display = recipe.innerText.toLowerCase().includes(value) ? '' : 'none';
        });
    });
}
