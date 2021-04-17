const Discord = require('discord.js');
const fs = require('fs');

const { prefix } = require('./config.json');

const client = new Discord.Client();
client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync(`./cmds`).filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
    const command = require(`./cmds/${file}`)
    client.commands.set(command.name, command);
}

client.on('ready', () => {
    client.user.setStatus("dnd")
    client.user.setActivity("romain et ilian ken", {
        'type': 'WATCHING'
    });

    console.log(`Logged as ${client.user.tag}`);
});

client.on('message', message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    var cmdintrou = new Discord.MessageEmbed()
        .setColor("#36393F")
        .setTimestamp()
            .addField("⚠️Une erreur est survue⚠️", "La commande effectuez est un trouvable !")
    if (!client.commands.has(command)) return message.channel.send(cmdintrou);

    try {
        client.commands.get(command).execute(message, args);
    } catch (error) {
        console.error(error);
        message.reply("Une erreur s'est produite.")
    }    
})

client.on('messageDelete', async message => {
	if (!message.guild) return;
	const fetchedLogs = await message.guild.fetchAuditLogs({
		limit: 1,
		type: 'MESSAGE_DELETE',
	});
    
	const deletionLog = fetchedLogs.entries.first();

    const msgdel1 = new Discord.MessageEmbed()
        .setAuthor("Suppression d'un message")
        .setColor("#36393F") 
        .setDescription(`**Action**: Suppression de message\nUn message de ${message.setAuthor} a été supprimé, mais aucune logs pertinente n'a été trouvé.`)
        .setTimestamp()
        .setFooter(`𝓜𝓸𝓿𝓲𝓮𝓼 & 𝓒𝓱𝓲𝓵𝓵 🍿`)

	if (!deletionLog) return client.channels.cache.get('832975066941751346').send(msgdel1);

	const { executor, target } = deletionLog;

    if (target.id === message.author.id) {
        const msgdel2 = new Discord.MessageEmbed()
            .setAuthor("Suppression d'un message")
            .setDescription(`**Action**: Suppression de message\n**Message suprimé**: ${message.content}\n**Auteur du message**: ${message.author.tag}\n**Message suprimé par**: ${executor.tag}`)
            .setTimestamp()
            .setFooter(`𝓜𝓸𝓿𝓲𝓮𝓼 & 𝓒𝓱𝓲𝓵𝓵 🍿`)

        client.channels.cache.get('832975066941751346').send(msgdel2);
	} else {
        const msgdel3 = new Discord.MessageEmbed()
            .setAuthor("Suppression d'un message")
            .setDescription(`**Action**: Suppression de message\n**Message suprimé**: ${message.content}\n**Auteur du message**: ${message.author.tag}\n**Message suprimé par**: Introuvable`)
            .setTimestamp()
            .setFooter(`𝓜𝓸𝓿𝓲𝓮𝓼 & 𝓒𝓱𝓲𝓵𝓵 🍿`)

        client.channels.cache.get('832975066941751346').send(msgdel3);
	}
});

client.login(process.env.token)
