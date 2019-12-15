const Discord = require("discord.js");
const prefix = "!";

const bot = new Discord.Client({disableEveryone: true})
    

bot.on("ready", async () => {



    console.log(`${bot.user.username} is ready!`);
    
    bot.user.setPresence({ status: 'online', game: { name: '!speak' } });



    try {

        let link = await bot.generateInvite(["ADMINISTRATOR"]);

        console.log(link);

    }    catch(e) {

        console.log(e.stack);

    }
//


});

bot.on("message", async message => {
    
    let messageArray = message.content.split(" ");

    let command = messageArray[0];

    let args = messageArray.slice(1);

    
    


    


        
    
    
    if(message.author.bot) return;
    if(message.channel.type === "dm") return;

if(command === `${prefix}speak`){

        message.channel.send(`Greetings, ${message.author}`);
                 



         return;

    }

    //Direct command
    //Put your name of the command here.
    if(command === `${prefix}nameHere`){

        //Put the text in the response here.
        message.channel.send(``);
                 



         return;



    }
    //Random Command
    //Put your name of the command here.
    if(command === `${prefix}nameHere2`){

        //Number of random quotes minus 1
        var number = 4;

        //random variable
        var random = Math.floor(Math.random()*number);

        //Array of random quotes
        var quote = ["", "", "", "", ""];

        //Put the text in the response here.
        message.channel.send(quote[random]);

              return;



    }
    }
);    
bot.login(process.env.BOT_TOKEN);
