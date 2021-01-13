// DOM elements
const newsbits = document.querySelector('.news-list');
const loggedOutLinks = document.querySelectorAll('.logged-out');
const loggedInLinks = document.querySelectorAll('.logged-in');

const UIsetUp = (user) => {
  if (user) {
    // toggle user UI elements
    loggedInLinks.forEach(item => item.style.display = 'block');
    loggedOutLinks.forEach(item => item.style.display = 'none');
  } else {
    // toggle user elements
    loggedInLinks.forEach(item => item.style.display = 'none');
    loggedOutLinks.forEach(item => item.style.display = 'block');
  }
}

// setup news Bits
const setupNewsBits = (data) => {
  if (data.length) {
    let html = '';
    data.forEach(doc => {
      const news = doc.data();
      console.log(news)
      const li = `
        <li>
          <div class="collapsible-header grey lighten-4"> ${news.heading} </div>
          <div class="collapsible-body white"> ${news.content} </div>
        </li>
      `;
      html += li;
    });
    newsbits.innerHTML = html
  } else {
    newsbits.innerHTML = '<h5 class="center-align">Login to view guides</h5>';
  }

};

// setup materialize components
document.addEventListener('DOMContentLoaded', function() {

    var modals = document.querySelectorAll('.modal');
    M.Modal.init(modals);
  
    var items = document.querySelectorAll('.collapsible');
    M.Collapsible.init(items);
  
  });