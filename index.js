const Discord = require('discord.js');
//Make sure to remove this when you upload this to Github!
const token = "OTg0MjQ5NDI1NTkxNDMxMTg4.G6IQNq.Dxq0xeKPUrbgXYIz7aR_WtfvclhpsKFup-ixyM"

const client = new Discord.Client({
    allowedMentions: {
        parse: ['users', 'roles'],
        repliiedUser: true
    },
    intents: [
        "GUILDS",
        "GUILD_MESSAGES",
        "GUILD_PRESENCES",
        "GUILD_MEMBERS",
        "GUILD_MESSAGE_REACTIONS"
    ]
});

client.on('ready', () => {
    console.log('Hi lol')
})

//variables 'n' stuff
let roulette=["You win!!!","You lose :("];
let facts=["Fact: I started developing this bot using StacksJS bot tutorial, thanks Stacks!", "Fact: I started work on this bot on 6/30/2022 as a late night project.", "I code using Visual Studio Code."];

client.on('messageCreate', message => {
    if (message.content === "*help") {
        const helpembed = new Discord.MessageEmbed()
        .setTitle("Help command")
        .setDescription("Commands: *help*, roulette, ping")
        .setFooter("Prefix is asterisk. Do *help (command) for help on a specific command.");
        message.channel.send({embeds:[helpembed]});
    }
    if (message.content === "*help roulette") {
        const roulettehelpembed = new Discord.MessageEmbed()
        .setTitle("Help with roulette")
        .setDescription("Roulette has a 1/2 chance for you to win.");
        message.channel.send({embeds:[roulettehelpembed]});
    }
    if (message.content === "*help ping") {
        const pinghelpembed = new Discord.MessageEmbed()
        .setTitle("Help with ping")
        .setDescription("Ping sees if the bot is online.")
        message.channel.send({embeds:[pinghelpembed]});
    }
    if (message.content === "*roulette") {
        let rouletteR = roulette[Math.floor(Math.random() * roulette.length)];
        message.channel.send(rouletteR)
    }
    if (message.content === "*ping") {
        console.log(message.author.toString());
        message.reply(message.author.toString() + " pong!");
    }
})


client.login(token);