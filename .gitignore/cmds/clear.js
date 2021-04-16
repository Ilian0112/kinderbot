const Discord = require('discord.js');

module.exports = {
    name: 'clear',
    description: 'Pour supprimer des messages.',
    async execute(message, args) {
        var noperm = new Discord.MessageEmbed()
            .setColor("#36393F")
            .setTimestamp()
                .addField("⚠️Une erreur est survue⚠️", "Tu n’as pas la permission d'utiliser cette commande !")
        
        var nombreinv = new Discord.MessageEmbed()
            .setColor("#36393F")
            .setTimestamp()
                .addField("⚠️Une erreur est survue⚠️", "Il faut indiquer une valeur ! (*en chiffres*)")

        var nminc = new Discord.MessageEmbed()
            .setColor("#36393F")
            .setTimestamp()
                .addField("⚠️Une erreur est survue⚠️", "Tu doit choisir un nombre compris entre 1 et 100 !")
                
        if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send(noperm);
        const amount = parseInt(args[0]) + 1;

        if (isNaN(amount)) {
            return message.channel.send(nombreinv);
        }
        else if (amount < 1 || amount > 100) {
            return message.channel.send(nminc);
        }

        message.channel.bulkDelete(amount, true);
    }
}