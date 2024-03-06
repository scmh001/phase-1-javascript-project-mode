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
    // fixed the empty space in the drop down menu
    const uniqueFamilies = [...new Set(characters.map(character => character.family.trim()))].filter(family => family.trim() !== "");


    
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
        // fixed back to all family background
        case "All Families" :
            document.body.style.backgroundImage = 'url("assets/background.jpg")';
            break;
        default:
            document.body.style.backgroundImage = 'url("assets/background.jpg")';
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
document.getElementById('search-bar').addEventListener('keydown', function(event) {
  if (event.key === 'Enter') {
    console.log("Enter key pressed");
    const searchInput = this.value.toLowerCase();
    const filteredCharacters = characters.filter(character => {
      const fullName = `${character.firstName} ${character.lastName}`.toLowerCase();
      return fullName.includes(searchInput);
    });
    displayCharacters(filteredCharacters);
  }
});

  });
  document.addEventListener('DOMContentLoaded', function () {
    // finds the audio player and source elements
    const audioPlayer = document.getElementById('audioPlayer');
    const audioSource = audioPlayer.querySelector('source');
  
    // finds the audio drop down
    const audioSelect = document.getElementById('audio-select');
  
    // added event listener to dropdown change
    audioSelect.addEventListener('change', function () {
        // stores drop down value
        const selectedAudio = audioSelect.value;
  
        // update audio source with dropdown value
        audioSource.src = selectedAudio;
  
        // The load() method is necessary to reload the audio element with the new source
        audioPlayer.load();
  
        // starts playing the song
        audioPlayer.play();
    })
  })

  //add footer
  const footer = document.getElementById('teamGotFooter');
  footer.innerHTML = '<p>© 2024 Game of Thrones Glossary. All rights reserved.</p><p>Flatiron GOT Team</p>';


  
