const url = `https://api.giphy.com/v1/gifs/search?q=sun&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My&limit=10&offset=2`;

const retrieve = async (url) => {
    try {
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error(`HTTP error!: ${response.status}`);
      }
      const { data } = await response.json(); 
      console.log(data) ; 
    }
    catch (error) {
        console.error('Error:', error);
    }
    
}

retrieve(url);