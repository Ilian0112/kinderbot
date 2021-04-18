const db = require('quick.db');
const Discord = require('discord.js');
const economy = new db.table("Economy");
const {nsfwr, hdevise, devise, item1, itempx1, item2, itempx2, item3, itempx3, item4, itempx4, item5, itempx5, item6, itempx6} = require("../config.js");


module.exports.run = async(client, message, args) => {
    message.delete()
    var foother = `Demande de @${message.author.username}#${message.author.discriminator}`;

    if(message.member.roles.cache.find(r => r.name === nsfwr)) {
        var hornyshop = new Discord.MessageEmbed()
            .setColor("#36393F")
            .setTimestamp()
            .setTitle("HornyShop's")
            .setFooter(foother, message.author.avatarURL())
                //.setDescription("Coming soon..")
                .setDescription(`__Nudes__:\n\`1\` - ${item1} : ${itempx1} ${hdevise}\n\`2\` -  ${item2} : ${itempx2} ${hdevise}\n\`3\` - ${item3} : ${itempx3} ${hdevise}\n\n__Vidéos__:\n\`4\` -  ${item4} : ${itempx4} ${hdevise}\n\`5\` -  ${item5} : ${itempx5} ${hdevise}\n\`6\` -  ${item6} : ${itempx6} ${hdevise}`)
            //.setImage("https://faire.paris/wp-content/uploads/2016/10/coming-soon.png")
        message.channel.send(hornyshop)
    } else if(!message.member.roles.cache.find(r => r.name === nsfwr)) {
        var shop = new Discord.MessageEmbed()
            .setColor("#36393F")
            .setTimestamp()
            .setTitle("Shop's")
            .setFooter(foother, message.author.avatarURL())
                .setDescription("Il n'y a rien ici pour le moment.")
         message.channel.send(shop)
    }

};

module.exports.help = {
    name:"shop",
}