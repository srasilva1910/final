const btnSearch = document.getElementById('btnSearch');
const btnreset = document.getElementById('btnreset');
const form = document.getElementById("searchForm");
const resultDiv = document.getElementById('result');


function resetSearch() {
          document.getElementById("searchInput").value = "";
         resultDiv.innerHTML = '';
        }

function searchTravel() {
    const input = document.getElementById('searchInput').value.toLowerCase();
    resultDiv.innerHTML = '';
    
    fetch('travel_api.json')
      .then(response => response.json())
      .then(data => {

        if (Temples = data.temples.find(temples => temples.name.toLowerCase().includes(input))) 
        {
            const title = Temples.name;
            const desc = Temples.description;

            resultDiv.innerHTML += `<img src="${Temples.imageUrl}" width="450px" height="auto" alt="Image not found">`;
            resultDiv.innerHTML += `<h2>${Temples.name}</h2>`;
            resultDiv.innerHTML += `<p>${desc}</p>`;
          console.log (Temples);
        } 
        
        else if (Countries = data.countries.find(countries => countries.name.toLowerCase().includes(input)))
        {
            const title = Countries.name;
            const desc = Countries.cities[0].name;
            const desc1= Countries.cities[1].name;

            resultDiv.innerHTML += `<h2>${Countries.name}</h2>`;       
            resultDiv.innerHTML += `<img src="${Countries.cities[0].imageUrl}" width="450px" height="auto" alt="Image not found">`;
            resultDiv.innerHTML += `<p>${desc}</p>`;
            resultDiv.innerHTML += `<img src="${Countries.cities[1].imageUrl}" width="450px" height="auto" alt="Image not found">`;
            resultDiv.innerHTML += `<p>${desc1}</p>`;
            console.log (Countries);
        }

        else if (CitiesU = data.countries[0].cities.find(cities => cities.name.toLowerCase().includes(input)))
        {
            const title = CitiesU.name;
            const desc = CitiesU.description;

            resultDiv.innerHTML += `<img src="${CitiesU.imageUrl}" width="450px" height="auto" alt="Image not found">`;
            resultDiv.innerHTML += `<h2>${CitiesU.name}</h2>`;
            resultDiv.innerHTML += `<p>${desc}</p>`;

        console.log (CitiesU);
        }

        else if (CitiesD = data.countries[1].cities.find(cities => cities.name.toLowerCase().includes(input)))
        {
            const title = CitiesD.name;
            const desc = CitiesD.description;

            resultDiv.innerHTML += `<img src="${CitiesD.imageUrl}" width="450px" height="auto" alt="Image not found">`;
            resultDiv.innerHTML += `<h2>${CitiesD.name}</h2>`;
            resultDiv.innerHTML += `<p>${desc}</p>`;

        console.log (CitiesD);
        }

        else if (CitiesT = data.countries[2].cities.find(cities => cities.name.toLowerCase().includes(input)))
        {
            const title = CitiesT.name;
            const desc = CitiesT.description;

            resultDiv.innerHTML += `<img src="${CitiesT.imageUrl}" width="450px" height="auto" alt="Image not found">`;
            resultDiv.innerHTML += `<h2>${CitiesT.name}</h2>`;
            resultDiv.innerHTML += `<p>${desc}</p>`;

        console.log (CitiesT);
        }

        else if (Beaches = data.beaches.find(beaches => beaches.name.toLowerCase().includes(input)))
        {
            const title = Beaches.name;
            const desc = Beaches.description;

            resultDiv.innerHTML += `<img src="${Beaches.imageUrl}" width="450px" height="auto" alt="Image not found">`;
            resultDiv.innerHTML += `<h2>${Beaches.name}</h2>`;
            resultDiv.innerHTML += `<p>${desc}</p>`;

        console.log(Beaches);
        }

        else {
          resultDiv.innerHTML = 'Destination not found.';
        }
      })
      
        .catch(error => {
        console.error('Error:', error);
        resultDiv.innerHTML = 'An error occurred while fetching data.';
      })
  }
 
  form.addEventListener("submit", function(event) {
    event.preventDefault();
  });
  
  btnSearch.addEventListener('click', searchTravel);

  btnreset.addEventListener('click', resetSearch);