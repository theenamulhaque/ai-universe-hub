const loadData = async() => {
      const url = `https://openapi.programming-hero.com/api/ai/tools`
      const res = await fetch(url)
      const data = await res.json();
      displayData(data.data.tools.slice(0, 6));
}

const displayData = (datas) => {
      console.log(datas);
      
      const cardContainer = document.getElementById('cardContainer');
      cardContainer.innerHTML = '';
      // const insideId = document.getElementById('insideId');
      datas.forEach(data => {
            console.log(data);

            const cardDiv = document.createElement('cardDiv');
            cardDiv.classList.add('col');
            cardDiv.innerHTML = `
                  <div class="card h-100 p-3">
                  <img src="${data.image}" class="card-img-top" alt="...">
                  <div class="card-body">
                  <h5 class="card-title">${data.name}</h5>
                  
                  <div id="insideId">
                  
                  <p class="card-text fw-bold"><ol>
                        <li class="fw-bold">${data.features.join('<li class="fw-bold">')}</li>
                  </ol></p>
                  </div>


                  </div>
                  <div class="card-footer d-flex justify-content-between align-items-center">
                  <div>
                        <h5 class="card-title">Card title</h5>
                        <small class="text-body-secondary">Last updated 3 mins ago</small>
                  </div>
                  <div>
                        <button class="btn btn-info">a</button>
                  </div>
                  </div>
            </div>
            `;

            cardContainer.appendChild(cardDiv);
      });
}


loadData();

const loadMoreBtn = async() => {
      const url = `https://openapi.programming-hero.com/api/ai/tools`
      const res = await fetch(url)
      const data = await res.json();
      displayData(data.data.tools);
}
