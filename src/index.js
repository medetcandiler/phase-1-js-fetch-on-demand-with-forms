const input = document.querySelector('#searchByID');
const form = document.forms['form']



const init = () => {
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    let id;
    if( isNaN(input.value) || input.value == '' ){
      return alert('use only numbers');
    } else {
      id = input.value;
    }
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
    const data = await res.json();
    const title = document.querySelector('#movieDetails h4');
    const sum = document.querySelector('#movieDetails p');
    title.textContent = data.name;
    sum.textContent = data.username
    input.value = '';
  })
}

document.addEventListener('DOMContentLoaded', init);