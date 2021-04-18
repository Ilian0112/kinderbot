const db = require('quick.db');
const Discord = require('discord.js');
const economy = new db.table("Economy");
const item = new db.table("Items");
const {nsfwr, hdevise, devise, item1, itemdb1, itempx1, item2, itemdb2, itempx2, item3, itemdb3, itempx3, item4, itemdb4, itempx4, item5, itemdb5, itempx5, item6, itemdb6, itempx6} = require("../config.js");

module.exports.run = async(client, message, args) => {
    
    let user = message.author;
    
    let monnaie = economy.fetch(`money_${message.guild.id}_${user.id}`);

    if(message.member.roles.cache.find(r => r.name === nsfwr)) {
        if(args[0] === "1") {
            if(monnaie < itempx1) return message.channel.send("Tu n’as pas assez d'argent.")

            item.add(`${itemdb1}${message.guild.id}_${user.id}`, 1)
            economy.subtract(`money_${message.guild.id}_${user.id}`, itempx1)

            return message.channel.send(`Vous avez acheté 1 \`${item1}\` pour ${itempx1} ${hdevise}`);
        }

        if(args[0] === "2") {
            if(monnaie < itempx2) return message.channel.send("Tu n’as pas assez d'argent.")

            item.add(`${itemdb2}${message.guild.id}_${user.id}`, 1)
            economy.subtract(`money_${message.guild.id}_${user.id}`, itempx2)

            return message.channel.send(`Vous avez acheté 1 \`${item2}\` pour ${itempx2} ${hdevise}`);
        }

        if(args[0] === "3") {
            if(monnaie < itempx3) return message.channel.send("Tu n’as pas assez d'argent.")

            item.add(`${itemdb3}${message.guild.id}_${user.id}`, 1)
            economy.subtract(`money_${message.guild.id}_${user.id}`, itempx3)

            return message.channel.send(`Vous avez acheté 1 \`${item3}\` pour ${itempx3} ${hdevise}`);
        }

        if(args[0] === "4") {
            if(monnaie < itempx4) return message.channel.send("Tu n’as pas assez d'argent.")

            item.add(`${itemdb4}${message.guild.id}_${user.id}`, 1)
            economy.subtract(`money_${message.guild.id}_${user.id}`, itempx4)

            return message.channel.send(`Vous avez acheté 1 \`${item4}\` pour ${itempx4} ${hdevise}`);
        }

        if(args[0] === "5") {
            if(monnaie < itempx5) return message.channel.send("Tu n’as pas assez d'argent.")

            item.add(`${itemdb5}${message.guild.id}_${user.id}`, 1)
            economy.subtract(`money_${message.guild.id}_${user.id}`, itempx5)

            return message.channel.send(`Vous avez acheté 1 \`${item5}\` pour ${itempx5} ${hdevise}`);
        }

        if(args[0] === "6") {
            if(monnaie < itempx6) return message.channel.send("Tu n’as pas assez d'argent.")

            item.add(`${itemdb6}${message.guild.id}_${user.id}`, 1)
            economy.subtract(`money_${message.guild.id}_${user.id}`, itempx6)

            return message.channel.send(`Vous avez acheté 1 \`${item6}\` pour ${itempx6} ${hdevise}`);
        }

    } return;
    
};

module.exports.help = {  
    name:"buy",
}