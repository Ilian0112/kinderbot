const Discord = require('discord.js');
const fs = require('fs');
const { nsfwr, nsfwrid } = require('../config.json');

module.exports = {
    name: 'hword',
    description: 'Pour avoir accès au salon..',
    execute(message) {
        message.delete()
        var checkrolensfw = message.guild.roles.cache.find(r => r.name === nsfwr);
        const member = message.member;

        var nonsf = new Discord.MessageEmbed()
            .setColor("#36393F")
            .setTimestamp()
                .addField("⚠️Une erreur est survue⚠️", `Le rôle \`${nsfwr}\` est introuvable !`)

        if(!checkrolensfw) return message.channel.send(nonsf)

        if(message.member.roles.cache.find(r => r.name === nsfwr)) {
            member.roles.remove(nsfwrid)
        } else if(!message.member.roles.cache.find(r => r.name === nsfwr)) {
            member.roles.add(nsfwrid)
        }
    }
}