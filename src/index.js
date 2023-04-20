const input = document.querySelector('#searchByID');
const form = document.forms['form']



const init = () => {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const id = input.value
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then( res => res.json() )
      .then( data => {
        const title = document.querySelector('#movieDetails h4');
        const sum = document.querySelector('#movieDetails p');
        title.textContent = data.name;
        sum.textContent = data.username
      });
    input.value = '';
  })
}

document.addEventListener('DOMContentLoaded', init);