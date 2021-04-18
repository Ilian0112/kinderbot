const db = require('quick.db');
const Discord = require('discord.js');
const {nsfwr, hdevise, devise} = require("../config.js");
const economy = new db.table("Economy")

module.exports.run = async(client, message, args) => {
    message.delete()
    var foother = `Demande de @${message.author.username}#${message.author.discriminator}`;

    let Owner = '193092758267887616'
    if (message.author.id !== Owner) return;

    let user = message.mentions.members.first() || message.author;

    if (isNaN(args[1])) return;
    economy.add(`money_${message.guild.id}_${user.id}`, args[1]);

    
    if(message.member.roles.cache.find(r => r.name === nsfwr)) {
        message.channel.send(`Vous avez donné ${args[1]}${hdevise} à ${message.mentions.members.first()}`);
    } else if(!message.member.roles.cache.find(r => r.name === nsfwr)) {
        message.channel.send(`Vous avez donné ${args[1]}${devise} Coins à ${message.mentions.members.first()}`);
    }
};

module.exports.help = {
    name:"addmoney",
}