// DOM elements
const newsbits = document.querySelector('.news-list');

// setup news Bits
const setupNewsBits = (data) => {

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

};

// setup materialize components
document.addEventListener('DOMContentLoaded', function() {

    var modals = document.querySelectorAll('.modal');
    M.Modal.init(modals);
  
    var items = document.querySelectorAll('.collapsible');
    M.Collapsible.init(items);
  
  });