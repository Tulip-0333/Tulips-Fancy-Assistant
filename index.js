const fs = require('fs');
const Discord = require('discord.js');
//LEL you thought you could steal my token :))))
const token = "Lel :)";

const client = new Discord.Client({
    allowedMentions: {
        parse: ['users', 'roles'],
        repliedUser: true
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
        .setDescription("Commands: *help*, roulette, ping, invite, info, whois")
        //Why is this deprecated?
        .setFooter("Prefix is asterisk. Do *help (command) for help on a specific command.");
        message.channel.send({embeds:[helpembed]});
    }
    if (message.content === "*help info") {
        const helpinfoembed = new Discord.MessageEmbed()
        .setTitle("Help with info")
        .setDescription("Info gives lots of info")
        message.channel.send({embeds:[helpinfoembed]});
    }
    if (message.content === "*help roulette") {
        const roulettehelpembed = new Discord.MessageEmbed()
        .setTitle("Help with roulette")
        .setDescription("Roulette has a 1/2 chance for you to win.");
        message.channel.send({embeds:[roulettehelpembed]});
    }
    if (message.content === "*help invite") {
        const helpinviteembed = new Discord.MessageEmbed()
        .setTitle("Help with invite")
        .setDescription("Gives a link to invite the bot.")
        message.channel.send({embeds:[helpinfoembed]});
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
        let factR = facts[Math.floor(Math.random() * facts.length)];
        const pingembed = new Discord.MessageEmbed()
        .setTitle("pong!")
        .setDescription(factR);
        message.channel.send({embeds:[pingembed]});
    }
    if (message.content === "*invite") {
        const inviteembed = new Discord.MessageEmbed()
        .setTitle("Invite me here!:")
        .setDescription("https://discord.com/oauth2/authorize?client_id=984249425591431188&scope=bot&permissions=8");
        message.channel.send({embeds:[inviteembed]});
    }
    if (message.content === "*info") {
        const infoembed = new Discord.MessageEmbed()
        .setTitle("Info")
        .setDescription("Tulip's Fancy Assistant is a Discord bot made by Tulip#0333. If you find any bugs, go to my Github profile (Tulip-0333). Tell me any features you want added, if there are bugs, tell me. More facts: ping command.");
        message.channel.send({embeds:[infoembed]});
    }
    if (message.content === "*whois") {
        const whoisembed = new Discord.MessageEmbed()
        .setTitle(message.author.username+"'s info")
        .setImage(message.author.displayAvatarURL())
        .setDescription("ID: "+message.author.id);
        message.channel.send({embeds:[whoisembed]});
    }
})


client.login(token);
