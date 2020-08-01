import config from './config';

export async function fetchData(){
    let response = await fetch(`${config.serverUrl}/episodes`);
    let episodes = await response.json();
    return episodes;
}

// Handles delete request for removing episode from server DB 
export function deleteEpisodeInDb(episodeId) {
    fetch(`${config.serverUrl}/episodes/${episodeId}`, {
        method: 'DELETE',
      })
      .then(response => {
        if (!response.ok) {
          throw new Error('An error occurred while attempting to delete the episode');
        }
      })
      .catch(e => console.log(e));
}

// Carries out post request for adding new episode to server DB
export function addNewEpisodeInDb(newEpisode) {
        fetch(`${config.serverUrl}/episodes/`, {
            method: 'POST',
            body: JSON.stringify(newEpisode),
            headers: {
                'content-type': 'application/json'
            }
        })
        .then(episodesRes => {
            if (!episodesRes.ok) {
                throw new Error('An error occurred while attempting to add new episode');
            }
        })
        .catch(e => console.log(e));   
}
