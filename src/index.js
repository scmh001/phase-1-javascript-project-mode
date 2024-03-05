const api1 = "https://json-server-scmh.onrender.com/";
const charAPI = "https://json-server-scmh.onrender.com/gotChar";
const data = "gotChar"

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
     
      switch (selectedFamily) { //add backgrounds for the Great Houses
        case 'House Stark':
            document.body.style.backgroundImage = 'url("assets/House Logos/House Stark Logo.jpg")';
            break;
        case 'House Targaryen':
            document.body.style.backgroundImage = 'url("assets/House Logos/House Targaryen.jpg")';
            break;    
        case 'House Greyjoy':
            document.body.style.backgroundImage = 'url("assets/House Logos/House Greyjoy.jpg")';
            break;
        case 'House Tarly':
            document.body.style.backgroundImage = 'url("assets/House Logos/House Tarly.jpeg")';
            break;
        case 'House Baratheon':
            document.body.style.backgroundImage = 'url("assets/House Logos/Baratheon.webp")';
            break;
        case 'House Lannister':
            document.body.style.backgroundImage = 'url("assets/House Logos/House Lannister.jpg")';
            break;
        case 'House Lanister':
            document.body.style.backgroundImage = 'url("assets/House Logos/House Lannister.jpg")';
            break;
        case 'House Clegane':
            document.body.style.backgroundImage = 'url("assets/House Logos/House Clegane.jpeg")';
            break;
        case 'House Baelish':
            document.body.style.backgroundImage = 'url("assets/House Logos/House Baelish.jpeg")';
            break;
        case 'House Seaworth':
            document.body.style.backgroundImage = 'url("assets/House Logos/House Seaworth.jpeg")';
            break;
        case 'House Tyrell':
            document.body.style.backgroundImage = 'url("assets/House Logos/House Tyrell.jpg")';
            break;
        default:
            document.body.style.backgroundImage = 'url("assets/House Logos/ETC Family.jpg")';
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
}
// event listener for search button 'click'
document.getElementById('search-button').addEventListener('click', function() {
  console.log("i've been pressed")
  const searchInput = document.getElementById('search-bar').value.toLowerCase();
  const filteredCharacters = characters.filter(character => {
      const fullName = `${character.firstName} ${character.lastName}`.toLowerCase();
      return fullName.includes(searchInput);
  });
  displayCharacters(filteredCharacters);
});
 // Event listener for search button click //~~~~~need to de-bug search bar
     document.getElementById('search-button').addEventListener('click', function() {
      console.log("i've been pressed")
      const searchInput = document.getElementById('search-bar').value.toLowerCase();
      const filteredCharacters = characters.filter(character => {
          const fullName = `${character.firstName} ${character.lastName}`.toLowerCase();
          return fullName.includes(searchInput);
      });
      displayCharacters(filteredCharacters);
  });
  })
  .catch(error => console.error('Error fetching data:', error));

  




