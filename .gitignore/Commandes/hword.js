const Discord = require('discord.js');
const {nsfwr, nsfwrid} = require("../config.js");

module.exports.run = async(client, message, args) => {
    message.delete()
    var checkrolensfw = message.guild.roles.cache.find(r => r.name === nsfwr);
    const member = message.member;
    var foother = `Demande de @${message.author.username}#${message.author.discriminator}`;

    var nonsf = new Discord.MessageEmbed()
        .setColor("#36393F")
        .setTimestamp()
        .setFooter(foother, message.author.avatarURL())
            .addField("⚠️Une erreur est survue⚠️", `Le rôle \`${nsfwr}\` est introuvable !`)

    if(!checkrolensfw) return message.channel.send(nonsf)

    if(message.member.roles.cache.find(r => r.name === nsfwr)) {
        member.roles.remove(nsfwrid)
    } else if(!message.member.roles.cache.find(r => r.name === nsfwr)) {
        member.roles.add(nsfwrid)
    }
};

module.exports.help = {
    name:"hword",
}