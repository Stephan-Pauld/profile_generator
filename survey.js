
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
rl.question(`What's your name? Nicknames are also acceptable :)`, (questionOne) => {
  rl.question(`What's an activity you like doing?`, (questionTwo) => {

    rl.question(`What do you listen to while doing that?`, (questionThree) => {
  
      rl.question(`Which meal is your favourite (eg: dinner, brunch, etc.)`, (questionFour) => {
    
        rl.question(`What's your favourite thing to eat for that meal?`, (questionFive) => {
      
          rl.question(`Which sport is your absolute favourite?`, (questionSix) => {

            rl.close();
            console.log("=-=-=-=-=");
            console.log(`Hey everyone!!, most people call me ${questionOne} my fav sport is ${questionSix}. I LOVE FOOD ESPECIALLY ${questionFive} for ${questionFour} Im also a HUGE FAN of ${questionTwo} while jamming out to ${questionThree}`);
          });
        });
      });
    });
  });
});