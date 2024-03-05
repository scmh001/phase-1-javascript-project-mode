const api1 = "http://localhost:3000/";
const charAPI = "http://localhost:3000/gotChar";

const searchInput = document.getElementById('search-bar'); 
const resultsContainer = document.getElementById('results-container'); 

// Function to filter characters by name
function filterCharacters(characters, searchTerm) {
    return characters.filter(character => character.fullName.toLowerCase().includes(searchTerm.toLowerCase()));
}

// Function to display the filtered characters with additional information
function displayCharacters(characters) {
  // Clear previous results
  resultsContainer.innerHTML = '';

  // Create and append the character elements to the results container
  characters.forEach(character => {
      const characterElement = document.createElement('div');
      characterElement.textContent = `Name: ${character.fullName}, Title: ${character.title}, Family: ${character.family}`;

      // Create an image element for each character and set its source to the character's imageUrl
      const imageElement = document.createElement('img');
      imageElement.src = character.imageUrl;
      imageElement.alt = character.fullName; // Set alt text for accessibility

      resultsContainer.appendChild(characterElement);
      resultsContainer.appendChild(imageElement);
  });
}

// Event listener for the search input
searchInput.addEventListener('input', (event) => {
    const searchTerm = event.target.value;

    // Fetch the characters from the db.json
    fetch('db.json') // Replace with the actual path to your db.json
        .then(response => response.json())
        .then(data => {
            const filteredCharacters = filterCharacters(data.gotChar, searchTerm);
            displayCharacters(filteredCharacters);
        })
        .catch(error => console.error('Error fetching characters:', error));
});

// ^^ working search bar with name and image display

// ------------------------------------------------------------------------------------------------------------

/*const api1 = "http://localhost:3000/";
const charAPI = "http://localhost:3000/gotChar";*/

// Fetch the JSON data
fetch('./db.json')
  .then(response => response.json())
  .then(data => {
    const characters = data.gotChar; // Assuming the characters are stored in gotChar array

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
    });

    // Function to display characters in results container
    function displayCharacters(characters) {
      const resultsContainer = document.getElementById('results-container');
      resultsContainer.innerHTML = ''; // Clear previous results

      characters.forEach(character => {
        const card = document.createElement('div');
        card.classList.add('character-card');

        const name = document.createElement('p');
        name.textContent = `${character.firstName} ${character.lastName}`;

        const image = document.createElement('img');
        image.src = character.imageUrl;
        image.alt = `${character.firstName} ${character.lastName}`;

        card.appendChild(name);
        card.appendChild(image);
        resultsContainer.appendChild(card);
      });
    }

  })
  .catch(error => console.error('Error fetching data:', error));

  // ^^ working for family dropdown bar display names and images

  // ------------------------------------------------------------------------------------------------------------

/*const api1 = "http://localhost:3000/";
const charAPI = "http://localhost:3000/gotChar";*/
let characters;

// Fetch the JSON data
fetch('./db.json')
  .then(response => response.json())
  .then(data => {
    characters = data.gotChar; // Assuming the characters are stored in gotChar array

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
    });

  // Function to display characters in results container
function displayCharacters(characters) {
  const resultsContainer = document.getElementById('results-container');
  resultsContainer.innerHTML = ''; // Clear previous results
  characters.forEach(character => {
      const card = document.createElement('div');
      card.classList.add('character-card');
      const name = document.createElement('p');
      name.textContent = `${character.firstName} ${character.lastName}`;
      const image = document.createElement('img');
      image.src = character.imageUrl;
      image.alt = `${character.firstName} ${character.lastName}`;
      card.appendChild(name);
      card.appendChild(image);
      resultsContainer.appendChild(card);
  });
}
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
  // Function to filter characters based on individual search input
document.getElementById('search-bar').addEventListener('input', function() {
  const searchInput = this.value.toLowerCase();
  const filteredCharacters = characters.filter(character => {
      const fullName = `${character.firstName} ${character.lastName}`.toLowerCase();
      return fullName.includes(searchInput);
  });
  
});

//  ^^ working earch bar and drop down filter list (without extra character information)
  
// possible key press functionality
  /*// Handle arrow key presses
  if (event.key === 'ArrowLeft' && focusedIndex > 0) {
      characters[focusedIndex - 1].focus(); // Move focus to the previous image
  } else if (event.key === 'ArrowRight' && focusedIndex < characters.length - 1) {
      characters[focusedIndex + 1].focus(); // Move focus to the next image
  }
});*/


// ---------------------------------------------------------------------------------
 // Function to display characters in results container with additional information
 function displayCharacters(characters) {
  const resultsContainer = document.getElementById('results-container');
  resultsContainer.innerHTML = ''; // Clear previous results

  characters.forEach(character => {
      const card = document.createElement('div');
      card.classList.add('character-card');

      const name = document.createElement('p');
      name.textContent = `${character.firstName} ${character.lastName}`;

      const title = document.createElement('p');
      title.textContent = character.title;

      const family = document.createElement('p');
      family.textContent = character.family;

      const image = document.createElement('img');
      image.src = character.imageUrl;
      image.alt = `${character.firstName} ${character.lastName}`;

      //---------------------------------------------------------------------------------




      const api1 = "http://localhost:3000/";
const charAPI = "http://localhost:3000/gotChar";
let characters;

// Fetch the JSON data
fetch('http://localhost:3000/gotChar')
  .then(response => response.json())
  .then(data => {
    characters = data; // characters are stored in gotChar array

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
    });

// Function to display characters in results container with additional information
function displayCharacters(characters) {
  const resultsContainer = document.getElementById('results-container');
  resultsContainer.innerHTML = ''; // Clear previous results

  characters.forEach(character => {
      const card = document.createElement('div');
      card.classList.add('character-card');

      const id = document.createElement('p');
      id.textContent = `ID: ${character.id}`;

      const name = document.createElement('p');
      name.textContent = `${character.firstName} ${character.lastName}`;

      const image = document.createElement('img');
      image.src = character.imageUrl;
      image.alt = `${character.firstName} ${character.lastName}`;

      // Create a button to show more details
      const detailsButton = document.createElement('infoButton');
      detailsButton.textContent = 'Show Details';
      detailsButton.onclick = function() {
          alert(`ID: ${character.id}\nFull Name: ${character.fullName}\nTitle: ${character.title}\nFamily: ${character.family}`);
      };

      card.appendChild(id);
      card.appendChild(name);
      card.appendChild(image);
      card.appendChild(detailsButton);

      resultsContainer.appendChild(card);
  });
}
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



// functional with search bar, family list, buttons
// -----------------------------------------------------------------------------------------------------
})}


// -----------------------------------------------------------------------------------------------------


//working minimal mvp

const api1 = "https://json-server-scmh.onrender.com/";
const charAPI = "https://json-server-scmh.onrender.com/gotChar";

let characters;

// Fetch the JSON data
fetch('https://json-server-scmh.onrender.com/gotChar')
  .then(response => response.json())
  .then(data => {
    characters = data; // characters are stored in gotChar array

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

     // Event listener for search button click //~~~~~ need to de-bug search bar
     document.getElementById('search-button').addEventListener('click', function() {
      console.log("i've been pressed")
      const searchInput = document.getElementById('search-bar').value.toLowerCase();
      const filteredCharacters = characters.filter(character => {
          const fullName = `${character.firstName} ${character.lastName}`.toLowerCase();
          return fullName.includes(searchInput);
      });
      displayCharacters(filteredCharacters);
  });
  







// -----------------------------------------------------------------------------------------------------


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
     
      switch (selectedFamily) {
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

  document.addEventListener('DOMContentLoaded', function () {
    // finds the main audio container
    var audioContainer = document.getElementById('audioContainer');
    //finds the audio drop down
    var audioSelect = document.getElementById('audio-select');

    //created a new audio element
    var newAudio = document.createElement('audio')
    newAudio.id       = 'audioPlayer';
    newAudio.controls = 'controls';
    newAudio.type     = 'audio/mpeg';
    
    // added event listener to dropdown change
    audioSelect.addEventListener('change', function () {
        // stores drop down value
        var selectedAudio = audioSelect.value;

        //update audio source with dropdown value
        newAudio.innerHTML = `<source src="${selectedAudio}" type="audio/mpeg">`

        // clears old audio tag
        audioContainer.innerHTML = ''
        //appends new audio tag
        audioContainer.append(newAudio)

        // not sure what load() does but I need it/music won't play without it
        newAudio.load();
        // starts playing the song
        newAudio.play();
    });
  })

  .catch(error => console.error('Error fetching data:', error));

  




