// fetrch sur l'api
const data = await fetch('http://localhost:3000/hello')
  .then(response => response.json())
  .then(data => data)

document.getElementById('content').innerHTML = data.map(item => {
  return `
    <div class="card" style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-title">${item}</h5>
            <h6 class="card-subtitle mb-2 text-muted">Card Subtitle</h6>
            <p class="card-text">Card Text</p>
            <a href="#" class="card-link">Card link</a>
            <a href="#" class="card-link">Another link</a>
        </div>
    </div>
    `
}).join('')
