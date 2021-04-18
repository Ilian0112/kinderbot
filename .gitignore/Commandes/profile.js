const db = require('quick.db');
const Discord = require('discord.js');
const {nsfwr, hdevise, devise, item1, itemdb1, item2, itemdb2, item3, itemdb3, item4, itemdb4, item5, itemdb5, item6, itemdb6} = require("../config.js");
const economy = new db.table("Economy");
const item = new db.table("Items");

module.exports.run = async(client, message, args) => {
    message.delete()
    var foother = `Demande de @${message.author.username}#${message.author.discriminator}`;

    let user = message.author;
    let member = message.member;

    let status = {
        online: "En ligne",
        idle: "Inactif",
        dnd: "Ne pas déranger",
        offline: "Hors ligne/Invisible"
      }

    let argent = economy.fetch(`money_${message.guild.id}_${user.id}`);
    if (argent === null) argent = 0;

    let items1 = item.fetch(`${itemdb1}${message.guild.id}_${user.id}`);
    if (items1 === null) items1 = 0;

    let items2 = item.fetch(`${itemdb2}${message.guild.id}_${user.id}`);
    if (items2 === null) items2 = 0;

    let items3 = item.fetch(`${itemdb3}${message.guild.id}_${user.id}`);
    if (items3 === null) items3 = 0;

    let items4 = item.fetch(`${itemdb4}${message.guild.id}_${user.id}`);
    if (items4 === null) items4 = 0;

    let items5 = item.fetch(`${itemdb5}${message.guild.id}_${user.id}`);
    if (items5 === null) items5 = 0;

    let items6 = item.fetch(`${itemdb6}${message.guild.id}_${user.id}`);
    if (items6 === null) items6 = 0;

    if (message.author.id === "689153093551784028") {
        if(message.member.roles.cache.find(r => r.name === nsfwr)) {
            var hornyshop = new Discord.MessageEmbed()
            .setColor("#36393F")
            .setTimestamp()
            .setAuthor("Horny's Profile")
            .setThumbnail(message.author.avatarURL())
            .setFooter(foother, message.author.avatarURL())
                .addField("Nom", `${message.author.username}#${message.author.discriminator}`, true)
                .addField("ID", `${message.author.id}`, true)
                .addField("Surnom", `${member.nickname !== null ? `${member.nickname}` : "Aucun"}`, true)
                .addField("Statut", `[BROKEN]${status[member.user.presence.status]}`, true)
                .addField("Jeu", `[BROKEN]${member.user.presence.game ? `🎮 ${member.user.presence.game.name}` : "Ne joue pas"}`, true)
                .addField("A rejoint", `${message.member.joinedAt}`, )
                .addField("Inscrit.e le", `${message.author.createdAt}`)
                .addField("** **", "** **")
                .addField("Inventaire", `💰: ${argent} ${hdevise}\n\n\n\n🔞\n__Nudes__:\n${items1} ${item1} d'Ilian\n${items2} ${item2} d'Ilian\n${items3} ${item3} d'Ilian\n\n__Vidéos__:\n${items4} ${item4} d'Ilian\n${items5} ${item5} d'Ilian\n${items6} ${item6} d'Ilian`)
            message.channel.send(hornyshop)
        } else if(!message.member.roles.cache.find(r => r.name === nsfwr)) {
            var shop = new Discord.MessageEmbed()
            .setColor("#36393F")
            .setTimestamp()
            .setAuthor("Profile")
            .setThumbnail(message.author.avatarURL())
            .setFooter(foother, message.author.avatarURL())
                .addField("Nom", `${message.author.username}#${message.author.discriminator}`, true)
                .addField("ID", `${message.author.id}`, true)
                .addField("Surnom", `${member.nickname !== null ? `${member.nickname}` : "Aucun"}`, true)
                .addField("Statut", `[BROKEN]${status[member.user.presence.status]}`, true)
                .addField("Jeu", `[BROKEN]${member.user.presence.game ? `🎮 ${member.user.presence.game.name}` : "Ne joue pas"}`, true)
                .addField("A rejoint", `${message.member.joinedAt}`, )
                .addField("Inscrit.e le", `${message.author.createdAt}`)
                .addField("** **", "** **")
                .addField("Inventaire", `💰: ${argent} ${devise}`)
            message.channel.send(shop)
        }
    } else if (message.author.id === "193092758267887616") {
        if(message.member.roles.cache.find(r => r.name === nsfwr)) {
            var hornyshop = new Discord.MessageEmbed()
                .setColor("#36393F")
                .setTimestamp()
                .setAuthor("Horny's Profile")
                .setThumbnail(message.author.avatarURL())
                .setFooter(foother, message.author.avatarURL())
                    .addField("Nom", `${message.author.username}#${message.author.discriminator}`, true)
                    .addField("ID", `${message.author.id}`, true)
                    .addField("Surnom", `${member.nickname !== null ? `${member.nickname}` : "Aucun"}`, true)
                    .addField("Statut", `[BROKEN]${status[member.user.presence.status]}`, true)
                    .addField("Jeu", `[BROKEN]${member.user.presence.game ? `🎮 ${member.user.presence.game.name}` : "Ne joue pas"}`, true)
                    .addField("A rejoint", `${message.member.joinedAt}`, )
                    .addField("Inscrit.e le", `${message.author.createdAt}`)
                    .addField("** **", "** **")
                    .addField("Inventaire", `💰: ${argent} ${hdevise}\n\n\n\n🔞\n__Nudes__:\n${items1} ${item1} de Romain\n${items2} ${item2} de Romain\n${items3} ${item3} de Romain\n\n__Vidéos__:\n${items4} ${item4} de Romain\n${items5} ${item5} de Romain\n${items6} ${item6} de Romain`)
            message.channel.send(hornyshop)
        } else if(!message.member.roles.cache.find(r => r.name === nsfwr)) {
            var shop = new Discord.MessageEmbed()
                .setColor("#36393F")
                .setTimestamp()
                .setAuthor("Profile")
                .setThumbnail(message.author.avatarURL())
                .setFooter(foother, message.author.avatarURL())
                    .addField("Nom", `${message.author.username}#${message.author.discriminator}`, true)
                    .addField("ID", `${message.author.id}`, true)
                    .addField("Surnom", `${member.nickname !== null ? `${member.nickname}` : "Aucun"}`, true)
                    .addField("Statut", `[BROKEN]${status[member.user.presence.status]}`, true)
                    .addField("Jeu", `[BROKEN]${member.user.presence.game ? `🎮 ${member.user.presence.game.name}` : "Ne joue pas"}`, true)
                    .addField("A rejoint", `${message.member.joinedAt}`, )
                    .addField("Inscrit.e le", `${message.author.createdAt}`)
                    .addField("** **", "** **")
                    .addField("Inventaire", `💰: ${argent} ${devise}`)
            message.channel.send(shop)
        }
    }
};

module.exports.help = {
    name:"profile",
}
