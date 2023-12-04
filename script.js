function generatePlaylist() {
    const mood = document.getElementById("mood").value;
    const genre = document.getElementById("genre").value;

    const playlist = getPlaylist(mood, genre);

    displayPlaylist(playlist);
}

function getPlaylist(mood, genre) {
    const playlists = {
        happy: {
            pop: ["Happy Pop Song 1", "Happy Pop Song 2", "Happy Pop Song 3"],
            rock: ["Happy Rock Song 1", "Happy Rock Song 2", "Happy Rock Song 3"],
            hiphop: ["Happy Hip Hop Song 1", "Happy Hip Hop Song 2", "Happy Hip Hop Song 3"],
            electronic: ["Happy Electronic Song 1", "Happy Electronic Song 2", "Happy Electronic Song 3"],
        },
        sad: {
            pop: ["Sad Pop Song 1", "Sad Pop Song 2", "Sad Pop Song 3"],
            rock: ["Sad Rock Song 1", "Sad Rock Song 2", "Sad Rock Song 3"],
            hiphop: ["Sad Hip Hop Song 1", "Sad Hip Hop Song 2", "Sad Hip Hop Song 3"],
            electronic: ["Sad Electronic Song 1", "Sad Electronic Song 2", "Sad Electronic Song 3"],
        },
        energetic: {
            pop: ["Energetic Pop Song 1", "Energetic Pop Song 2", "Energetic Pop Song 3"],
            rock: ["Energetic Rock Song 1", "Energetic Rock Song 2", "Energetic Rock Song 3"],
            hiphop: ["Energetic Hip Hop Song 1", "Energetic Hip Hop Song 2", "Energetic Hip Hop Song 3"],
            electronic: ["Energetic Electronic Song 1", "Energetic Electronic Song 2", "Energetic Electronic Song 3"],
        },
        calm: {
            pop: ["Calm Pop Song 1", "Calm Pop Song 2", "Calm Pop Song 3"],
            rock: ["Calm Rock Song 1", "Calm Rock Song 2", "Calm Rock Song 3"],
            hiphop: ["Calm Hip Hop Song 1", "Calm Hip Hop Song 2", "Calm Hip Hop Song 3"],
            electronic: ["Calm Electronic Song 1", "Calm Electronic Song 2", "Calm Electronic Song 3"],
        },
    };

    return playlists[mood][genre];
}

function displayPlaylist(playlist) {
    const playlistContainer = document.getElementById("playlist");
    playlistContainer.innerHTML = "";

    playlist.forEach(song => {
        const listItem = document.createElement("li");
        listItem.textContent = song;
        playlistContainer.appendChild(listItem);
    });
}
