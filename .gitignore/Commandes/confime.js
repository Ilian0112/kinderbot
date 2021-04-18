const db = require('quick.db');
const Discord = require('discord.js');
const item = new db.table("Items");
const {nsfwr, item1, itemdb1, item2, itemdb2, item3, itemdb3, item4, itemdb4, item5, itemdb5, item6, itemdb6} = require("../config.js");

module.exports.run = async(client, message, args) => {
    
    let user = message.author;
    
    let items1 = item.fetch(`${itemdb1}${message.guild.id}_${user.id}`);
    let items2 = item.fetch(`${itemdb2}${message.guild.id}_${user.id}`);
    let items3 = item.fetch(`${itemdb3}${message.guild.id}_${user.id}`);
    let items4 = item.fetch(`${itemdb4}${message.guild.id}_${user.id}`);
    let items5 = item.fetch(`${itemdb5}${message.guild.id}_${user.id}`);
    let items6 = item.fetch(`${itemdb6}${message.guild.id}_${user.id}`);

    if(message.member.roles.cache.find(r => r.name === nsfwr)) {
        if (message.author.id === "290105316740169728") {
            if(args[0] === "1") {
                if(items1 < 0) {
                    item.subtract(`${itemdb1}${message.guild.id}_${message.author.id}`, 1)
                    message.channel.send(`Tu viens de confirmé l'envoie d'un \`${item1}\` de la part d'Ilian`);  
                } return  message.channel.send(`Tu n'as plus de ${item1} à demander donc pourquoi essayer d'en confirmer.`) 
            }
            if(args[0] === "2") {
                if(items2 < 0) {
                    item.subtract(`${itemdb2}${message.guild.id}_${message.author.id}`, 1)
                    message.channel.send(`Tu viens de confirmé l'envoie d'un \`${item2}\` de la part d'Ilian`);  
                } return  message.channel.send(`Tu n'as plus de ${item2} à demander donc pourquoi essayer d'en confirmer.`) 
            }
            if(args[0] === "3") {
                if(items3 < 0) { 
                    item.subtract(`${itemdb3}${message.guild.id}_${message.author.id}`, 1)
                    message.channel.send(`Tu viens de confirmé l'envoie d'un \`${item3}\` de la part d'Ilian`);  
                } return  message.channel.send(`Tu n'as plus de ${item3} à demander donc pourquoi essayer d'en confirmer.`) 
            }
            if(args[0] === "4") {
                if(items4 < 0) { 
                    item.subtract(`${itemdb4}${message.guild.id}_${message.author.id}`, 1)
                    message.channel.send(`Tu viens de confirmé l'envoie d'une \`${item4}\` de la part d'Ilian`);  
                } return  message.channel.send(`Tu n'as plus de ${item4} à demander donc pourquoi essayer d'en confirmer.`) 
            }
            if(args[0] === "5") {
                if(items5 < 0) { 
                    item.subtract(`${itemdb5}${message.guild.id}_${message.author.id}`, 1)
                    message.channel.send(`Tu viens de confirmé l'envoie d'une \`${item5}\` de la part d'Ilian`);  
                } return  message.channel.send(`Tu n'as plus de ${item5} à demander donc pourquoi essayer d'en confirmer.`) 
            }
            if(args[0] === "6") {
                if(items6 < 0) { 
                    item.subtract(`${itemdb6}${message.guild.id}_${message.author.id}`, 1)
                    message.channel.send(`Tu viens de confirmé l'envoie d'une \`${item6}\` de la part d'Ilian`);  
                } return  message.channel.send(`Tu n'as plus de ${item6} à demander donc pourquoi essayer d'en confirmer.`) 
            }
        } else if (message.author.id === "193092758267887616") {
            if(args[0] === "1") {
                if(items1 < 0) {
                    item.subtract(`${itemdb1}${message.guild.id}_${message.author.id}`, 1)
                    message.channel.send(`Tu viens de confirmé l'envoie d'un \`${item1}\` de la part de Romain`);                        
                } return  message.channel.send(`Tu n'as plus de ${item1} à demander donc pourquoi essayer d'en confirmer.`) 
            }
        }
        if(args[0] === "2") {
            if(items2 < 0) {
                item.subtract(`${itemdb2}${message.guild.id}_${message.author.id}`, 1)
                message.channel.send(`Tu viens de confirmé l'envoie d'un \`${item2}\` de la part de Romain`);  
            } return  message.channel.send(`Tu n'as plus de ${item2} à demander donc pourquoi essayer d'en confirmer.`) 
        }
        if(args[0] === "3") {
            if(items3 < 0) {
                item.subtract(`${itemdb3}${message.guild.id}_${message.author.id}`, 1)
                message.channel.send(`Tu viens de confirmé l'envoie d'un \`${item3}\` de la part de Romain`);  
            } return  message.channel.send(`Tu n'as plus de ${item3} à demander donc pourquoi essayer d'en confirmer.`) 
        }
        if(args[0] === "4") {
            if(items4 === 0) {
                item.subtract(`${itemdb4}${message.guild.id}_${message.author.id}`, 1)
                message.channel.send(`Tu viens de confirmé l'envoie d'une \`${item4}\` de la part de Romain`);  
            } return  message.channel.send(`Tu n'as plus de ${item4} à demander donc pourquoi essayer d'en confirmer.`) 
        }
        if(args[0] === "5") {
            if(items5 === 0) {
                item.subtract(`${itemdb5}${message.guild.id}_${message.author.id}`, 1)
                message.channel.send(`Tu viens de confirmé l'envoie d'une \`${item5}\` de la part de Romain`);  
            } return  message.channel.send(`Tu n'as plus de ${item5} à demander donc pourquoi essayer d'en confirmer.`) 
        }
        if(args[0] === "6") {
            if(items6 === 0) {
                item.subtract(`${itemdb6}${message.guild.id}_${message.author.id}`, 1)
                message.channel.send(`Tu viens de confirmé l'envoie d'une \`${item6}\` de la part de Romain`);  
            } return  message.channel.send(`Tu n'as plus de ${item6} à demander donc pourquoi essayer d'en confirmer.`) 
        }
    } return;
    
};

module.exports.help = {  
    name:"confirme",
}