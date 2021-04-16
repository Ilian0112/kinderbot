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

client.login(process.env.token)
