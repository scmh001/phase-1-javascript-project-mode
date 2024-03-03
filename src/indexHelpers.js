
   
   
   
   // Event listener for search button click //need to de-bug search bar
   document.getElementById('search-button').addEventListener('click', function() {
    const searchInput = document.getElementById('search-bar').value.toLowerCase();
    const filteredCharacters = characters.filter(character => {
        const fullName = `${character.firstName} ${character.lastName}`.toLowerCase();
        return fullName.includes(searchInput);
    });
    displayCharacters(filteredCharacters);
});
