const api1 = "https://json-server-scmh.onrender.com/";
const charAPI = "https://json-server-scmh.onrender.com/gotChar";

let characters;

// Fetch the JSON data
fetch('https://json-server-scmh.onrender.com/gotChar')
  .then(response => response.json())
  .then(data => {
    characters = data; // characters are stored in gotChar array

    fetch('https://json-server-scmh.onrender.com/gotChar')
   .then(res => {
     if (res.ok) {
       return res.json()
     } else {
       console.error('something went wrong')
     }
   })
   .then(character => {
     displayCharacters(character)
   })


    // Get unique family names
    const uniqueFamilies = [...new Set(characters.map(character => character.family))];


    
    // Populate the dropdown with unique family names
    const select = document.getElementById('family-filter');
    uniqueFamilies.forEach(family => {
      const option = document.createElement('option');
      option.text = family;
      option.value = family;
      select.add(option);
    
  });
    

    // Function to filter characters based on selected family
    select.addEventListener('change', function() {
      const selectedFamily = this.value;
      const filteredCharacters = selectedFamily ? characters.filter(character => character.family === selectedFamily) : characters;

      // Display filtered characters in results container
      displayCharacters(filteredCharacters);
      
      function displayCharacters(characters) {
        const resultsContainer = document.getElementById('results-container');
        resultsContainer.innerHTML = ''; // Clear previous results
        
        characters.forEach(character => {
          const characterElement = document.createElement('div');
          characterElement.classList.add('character');
      
          // Check if the character belongs to House Targaryen
          if (character.family === "House Stark") {
            characterElement.style.backgroundImage = `url("assets/House Logos/House Stark Logo.jpg")`; // Use character's imageUrl as background
          } else {
            // Set default background for other families
            characterElement.style.backgroundColor = `url("assets/background.jpg");` // Change to your default background color or image
          }
      
          // Add other character information to the element
          // For example:
          // characterElement.textContent = character.fullName;
          
          // Append the character element to the results container
          resultsContainer.appendChild(characterElement);
        });
      }
    
});

// Function to display characters in results container with additional information
function displayCharacters(characters) {
  const resultsContainer = document.getElementById('results-container');
  resultsContainer.innerHTML = ''; // Clear previous results

  characters.forEach(character => {
      const card = document.createElement('div');
      card.classList.add('character-card');

      const name = document.createElement('p');
      name.textContent = `${character.firstName} ${character.lastName}`;
      
      card.appendChild(name);
      resultsContainer.appendChild(card);

      card.appendChild(name);
        resultsContainer.appendChild(card);
    });
    /*
    const hasStark = characters.some(character => character.family.includes('House Stark'));
    if (hasStark) {
        // House Stark 가족이 있는 경우 배경화면 변경
        document.body.style.backgroundImage = 'assets/House Logos/House of Stark Logo.jpg';
    } else {
        // House Stark 가족이 없는 경우 기본 배경화면으로 변경 (원하는 이미지의 경로를 여기에 설정)
        document.body.style.backgroundImage = 'assets/background.jpg';
    }
    */
}
    
  

      // const title = document.createElement('p'); // Removed
      // title.textContent = character.title; // Removed

      // const family = document.createElement('p'); // Removed
      // family.textContent = character.family; // Removed

      const image = document.createElement('img');
      image.src = character.imageUrl;
      image.alt = `${character.firstName} ${character.lastName}`;

      // Create a clickable element for more info
      const moreInfo = document.createElement('button');
      moreInfo.textContent = 'More Info';
      
      // Additional information about the character
      const infoDetails = document.createElement('div');
      infoDetails.style.display = 'none';
      infoDetails.innerHTML = `
          <p>Full Name: ${character.fullName}</p>
          <p>Title: ${character.title}</p>
          <p>Family: ${character.family} `;

      // Toggle display of additional information when clicking "More Info"
      moreInfo.addEventListener('click', function() {
          infoDetails.style.display = infoDetails.style.display === 'none' ? 'block' : 'none';
      });

      card.appendChild(name);
      // card.appendChild(title); // Removed
      // card.appendChild(family); // Removed
      card.appendChild(image);
      card.appendChild(moreInfo);
      card.appendChild(infoDetails);

      resultsContainer.appendChild(card);
  });

// Event listener for search input
document.getElementById('search-bar').addEventListener('input', function() {
  const searchInput = this.value.toLowerCase();
  const filteredCharacters = characters.filter(character => {
      const fullName = `${character.firstName} ${character.lastName}`.toLowerCase();
      return fullName.includes(searchInput);
  });
  displayCharacters(filteredCharacters);
});

  })
  .catch(error => console.error('Error fetching data:', error));

     // Event listener for search button click //need to de-bug search bar
     document.getElementById('search-button').addEventListener('click', function() {
      console.log("i've been pressed")
      const searchInput = document.getElementById('search-bar').value.toLowerCase();
      const filteredCharacters = characters.filter(character => {
          const fullName = `${character.firstName} ${character.lastName}`.toLowerCase();
          return fullName.includes(searchInput);
      });
      displayCharacters(filteredCharacters);
  });
  
  const backgrounds = ["url('background1.jpg')", "url('background2.jpg')", "url('background3.jpg')"]; // 변경할 배경 이미지들의 경로

  let currentBackgroundIndex = 0;
  
  function changeBackground() {
      // 다음 배경 이미지로 인덱스 증가
      currentBackgroundIndex++;
      
      // 인덱스가 배열 길이를 초과하면 처음으로 되돌림
      if (currentBackgroundIndex >= backgrounds.length) {
          currentBackgroundIndex = 0;
      }
      
      // 배경 변경
      document.getElementById('background').style.backgroundImage = backgrounds[currentBackgroundIndex];
  }



