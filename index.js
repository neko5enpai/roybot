const Discord = require('discord.js');
const bot = new Discord.Client();

const PREFIX = "!";

bot.on('ready', function() {
    console.log("I'm Ready !");
});

// Commands : Messages du bot
bot.on('message', message => {
    if(message.content[0] === PREFIX) {
        if(message.content === '!hello') {
            message.channel.send(" world!");
            //message.channel.send("``Code``")
            //message.channel.send("**Bold**")
            //message.channel.send("*Italic*")
            //message.channel.send("***Bold Italic***")
        }
        else if(message.content === "!whoisOurBoy") {
            message.channel.send({embed: {
                color: 3447003, // COLOR: STANDARD
                description: "Roy's our boy!"
            }});
        }
        else if(message.content === "!NSFW") {
            message.channel.send({embed: {
                color: 15158332, // COLOR: WARNING MESSAGES
                description: "NO SIN ALLOWED ON THIS PURE SERVER!"
            }});
        }
        else if(message.content === "!SmashQuote1") {
            message.channel.send({embed: {
                color: 10181046, // COLOR: SMASH QUOTES
                description: "僕 は 負けない! Boku wa makenai!"
            }});
        }
        else if(message.content === "!SmashQuote2") {
            message.channel.send({embed: {
                color: 10181046, // COLOR: SMASH QUOTES
                description: "真の戦いは、これからだ。Shin no tatakai wa, kore kara da."
            }});
        }
        else if(message.content === "!SmashQuote3") {
            message.channel.send({embed: {
                color: 10181046, // COLOR: SMASH QUOTES
                description: "苦しい戦いだった。Kurushii tatakai datta."
            }});
        }
        else if(message.content === "!SmashQuote4") {
            message.channel.send({embed: {
                color: 10181046, // COLOR: SMASH QUOTES
                description: "守るべきもののために、負けられない! Mamoru beki mono no tame ni, makerarenai!"
            }});
        }
    }
});


// Command : New member
bot.on('guildMemberAdd', member => {
    member.createDM().then(channel => {
        return channel.send('Welcome to the Roy Stans Home ' + member.displayName);
    }).catch(console.error)
})
// Command : Member leaving
bot.on('guildMemberRemove', member => {
    member.createDM().then(channel => {
        return channel.send('Bye bye ' + member.displayName);
    }).catch(console.error)
})


bot.login('process.env.BOT_TOKEN'); // TOKEN
