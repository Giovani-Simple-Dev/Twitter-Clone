document.addEventListener('DOMContentLoaded', () => {
    const tweetForm = document.getElementById('tweetForm');
    const tweetInput = document.getElementById('tweetInput');
    const tweetList = document.getElementById('tweetList');

    tweetForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const tweetText = tweetInput.value;
        if (tweetText.trim() === '') return;

        // Enviar o tweet para o servidor
        const response = await fetch('http://localhost:5000/api/tweets', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ text: tweetText })
        });
        
        const newTweet = await response.json();
        addTweetToList(newTweet);
        tweetInput.value = '';
    });

    // Função para adicionar tweet à lista
    function addTweetToList(tweet) {
        const li = document.createElement('li');
        li.textContent = tweet.text;
        tweetList.appendChild(li);
    }

    // Carregar tweets existentes ao iniciar
    async function loadTweets() {
        const response = await fetch('http://localhost:5000/api/tweets');
        const tweets = await response.json();
        tweets.forEach(addTweetToList);
    }

    loadTweets();
});
