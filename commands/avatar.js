const discord = require('discord.js');
const { bot, RichEmbed } = require('discord.js');

module.exports.run = async (bot, message, args) => {
    var user = message.mentions.users.first();
if (!message.mentions.users.size) {
    let avatarembed = new discord.RichEmbed()
        .setAuthor(`Dein Avatar:`, message.author.avatarURL)
        .setImage(message.author.avatarURL, true)
        .setFooter("Prefix: ! | Der Bot ist immernoch in Entwicklung", bot.user.avatarURL)
        .setTimestamp()
        .setColor("RANDOM");
    message.delete();
    message.channel.send(avatarembed);
    } else {
        let avatarembed2 = new discord.RichEmbed()
        .setAuthor(`Avatar von:` + user , user.avatarURL)
        .setImage(user.avatarURL, true)
        .setFooter("Prefix: ! | Der Bot ist immernoch in Entwicklung", bot.user.avatarURL)
        .setTimestamp()
        .setColor("RANDOM");
    message.delete();
    message.channel.send(avatarembed2);
    }
}

module.exports.help = {
  name: 'Avatar',
  aliases: ['ava']
};
