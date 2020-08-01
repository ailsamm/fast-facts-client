# Fast Facts Client

## Local Usage

To run locally, simply clone the repo and run ```npm i``` then ```npm run start```.
The client is already connected to a remotely deployed server. 
A modifiable version can be found [here](https://github.com/ailsamm/moodi-server) (simply clone, run ```npm i``` and then, in this client app, change the URL in the ./src/config.js) or work with the already-deployed version that is specified in ./src/config.js.

## Live Version
A live version of the app (connected to a deployed server) can be found [here](https://fast-facts.vercel.app/).

## Interacting with the app
### Viewing saved episodes
To view saved episodes, simply click "episode library" at the top of the screen. You will be shown a screen with a list of saved episodes, as well as some of their properties and options for interaction.


### Creating a new episode
To create a new episode, click on "create episode" at the top of the screen. From there, you can name your episode. Following this, you can add as many or as few questions as you like. To add a question, simply write the statement in the input box and then click "add question". When you are satisied with the questions that you have added, ensure that you have clicked "add question" on your most recent question, and then click "submit episode". From there, you will be automatically redirected to the episode directory where you will be able to see your newly created episode.

### Playing an episode
To play an episode, go to "episode library" and then select the episode you would like to play with. You will then be presented with each of the episode's questions and will be able to choose between true (T) or false (F). After answering each question, you will receive feedback in the form of a pop-up. Your score is also updated for you to see after each question. After answering all of the questions, you will be presented with your final score.