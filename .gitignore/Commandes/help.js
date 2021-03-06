const Discord = require('discord.js');
const {PREFIX} = require("../config.js");

module.exports.run = async(client, message, args) => {
    message.delete()
    var foother = `Demande de @${message.author.username}#${message.author.discriminator}`;

    var help1_embed = new Discord.MessageEmbed()
    .setTitle("Message d'aide")
    .setColor("#36393F")
    .setFooter("Page 1/2 | " + foother, message.author.avatarURL())
        .addField(`${PREFIX}help`, "Pour afficher ce message.", true) 
        .addField(`${PREFIX}talk {ARGS}`, "Pour me faire parler.", true) 
        .addField(`${PREFIX}clear {NUMBER}`, "Pour supprimer plusieurs messages à la fois. (*entre 1 et 100*)", true)

    var help2_embed = new Discord.MessageEmbed()
    .setTitle("Message d'aide")
    .setColor("#cc0000")
    .setFooter("Page 2/2 | " + foother, message.author.avatarURL())
        .addField(`${PREFIX}hword`, "Pour.. accéder ou masquer un contenu secret.", true)
    
    const helpcmd = await message.channel.send(help1_embed);
    await helpcmd.react("1️⃣");
    await helpcmd.react("2️⃣"); 
    const helpcmdpann = helpcmd.createReactionCollector((reaction, user) => user.id === message.author.id);
    helpcmdpann.on('collect', async(reaction) => {
        if (reaction.emoji.name === "1️⃣") {
            helpcmd.edit(help1_embed);
        }
        if (reaction.emoji.name === "2️⃣") {
            helpcmd.edit(help2_embed);
        }
        await reaction.users.remove(message.author.id);
    })
};

module.exports.help = {
    name:"help",
}