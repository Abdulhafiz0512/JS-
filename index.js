// .then() catch
fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(users => {
    let userListHTML = '<ul>';
    users.forEach(user => {
      userListHTML += `
        <li>
          <strong>Name:</strong> ${user.name}<br>
          <strong>Email:</strong> ${user.email}<br>
          <strong>Phone:</strong> ${user.phone}<br>
          <strong>Street:</strong> ${user.address.street}<br>
        </li>
      `;
    });
    userListHTML += '</ul>';
    
    document.body.innerHTML = userListHTML;
  })
  .catch(error => {
    console.error('Xatolik yuz berdi:', error);
  });


async function getUsers() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const users = await response.json();
  
    let userListHTML2 = '<ul>';
    users.forEach(user => {
      userListHTML2 += `
        <li>
          <strong>Name:</strong> ${user.name}<br>
          <strong>Email:</strong> ${user.email}<br>
          <strong>Phone:</strong> ${user.phone}<br>
          <strong>Street:</strong> ${user.address.street}<br>
        </li>
      `;
    });
    userListHTML2 += '</ul>';
  
    document.body.innerHTML = userListHTML2;
  } catch (error) {
    console.error('Xatolik yuz berdi:', error);
  }
}

getUsers();
