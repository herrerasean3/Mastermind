# Mastermind

Component | Estimated Time | Invested Time | % Complete | Actual Time 
--- | --- |--- |--- |---
Game Initialization | 3 Hours | 10 Minutes | 100% | 10 Minutes 
Playable Game | 8 Hours | 7 Hours | 100% | 7 Hours
Winning | 2 Hours | 2 Hours, 40 Minutes | 100% | 2 Hours, 10 Minutes
Reset Game | 1 Hour | 20 Minutes | 100% | 20 Minutes


Below details my Minimum Viable Product.

## What is Mastermind?

Mastermind is a code breaking logic game in which one player is the Mastermind and the other is the Codebreaker. Using a sequence of four colors, from a pool of six colors, in which there may be multiples of a given color, the Mastermind creates their hidden code. The Codebreaker then attempts to solve the Mastermind's code in 10 attempts. Solving the code entails the Codebreaker submitting a four color code, and the Mastermind responding by informing the Codebreaker of how many colors in the attempt were in code but in the wrong position, and how many colors were in the correct position. The Codebreaker is not informed of which colors, or which position in the sequence. Using this information, the Codebreaker must adjust their codes until they either solve the Mastermind's code or run out of tries.

In this particular variation of Mastermind, the code is a randomly generated sequence of numbers, from 0000 to 9999, presenting the player with 10000 possible codes. In order to reflect the massive hike from the original board game's 1296 possible patterns, a player has 50 attempts over the traditional 10.

### Landing Page: 

The landing page will have a header, stating the name of the game, and a large button prompting the user to start a new game. There will also be a link to a How to Play page. In parameters outside of my MVP, I would like to have this information stored in a hidden div and use JQuery to animate it into covering the page when a 'How to Play' button is pressed. The div could then be hidden with a 'Return to Game' button that would be at the bottom of said div.

### Initialization:

Upon the player pressing 'Start Game', a random code of four integers ranging from 0 to 9 will be generated, the 'Start Game' button is hidden and replaced with a 'Submit Code' button. Above it are four text input fields, each of which require a single number be entered. When all four text input fields are filled, the player may hit 'Submit Code' to submit their guess. 

### Game play:

Players submit 4 digit codes via the 4 text input fields and submit button, which is compared to the randomly generated master code. From there, the player's submitted code is compared first to the whole master code, reporting back the number of times a number the player used was in the master code, but in the incorrect position. Then they are given the total number of numbers the player submitted that are both in the master code, and correctly positioned in the master code.

### Win condition: 
When the player correctly guesses the master code, the game informs them that they are correct and prompts them to restart.

### Reset: 
The player may reset upon victory or loss via a button at the bottom of the page, which rolls a new random master code and starts a new game.