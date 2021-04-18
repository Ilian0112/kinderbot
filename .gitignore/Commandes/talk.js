const Discord = require('discord.js');

module.exports.run = async(client, message, args) => {
    if (!args[0]) { 
        var nomessage = new Discord.MessageEmbed()
            .setColor("#36393F")
            .setTimestamp()
                .addField("⚠️Une erreur est survue⚠️", "La commande ne peut fonctionner si vous n'écrivez pas quelque chose !")

        message.channel.send(nomessage)
    } else {
        let talk = message.content.split(" ");
        talk.shift();

        message.delete();
        message.channel.send(talk.join(" "));
    }
};

module.exports.help = {
    name:"talk",
}