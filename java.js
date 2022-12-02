const button = document.querySelector('button.panel_button');
const input = document.querySelector('input.panel_input');
const list = document.querySelector('ul.boxlist');

button.addEventListener('click', function() {
    const newitem = document.createElement('li');
    newitem.innerHTML = input.value;
    list.appendChild(newitem);
    input.value = '';
});