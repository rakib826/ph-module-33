console.log('index.js is connected');
function loadUsers2(){
  fetch('https://jsonplaceholder.typicode.com/users')
  .then(res=>res.json())
  .then(data=>displayUsers2(data))
}

function displayUsers2(data){
  // for(const user of data){
  //   console.log(user.email);
  // }
  const ul = document.getElementById('users-list');
  for(const user of data){
    console.log(user.email);
    const li = document.createElement('li');
    li.innerText = user.email;
    ul.appendChild(li);
  }
}

