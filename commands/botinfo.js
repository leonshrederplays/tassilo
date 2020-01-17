const discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
    let embed = new discord.RichEmbed()
    .setAuthor(`Tassilo`, bot.user.avatarURL)
    .setThumbnail(bot.user.avatarURL)
    .addField(`Version:`, `1.0.0`, true)
    .addField(`Node JS:`, `v10.16.3`, true)
    .addField(`Library:`, `[discord.js](https://discord.js.org/#/)`, true)
    .addField(`Server:`, `${bot.guilds.size}`, true)
    .addField(`Benutzer:`, `${bot.users.size}`, true)
    .addField(`Website:`, `[PikaArmy](https://pika-army.jimdofree.com)`, true)
    .addField(`Erstellt am:`, bot.user.createdAt)
    .addField(`Developer:`, `@Leon|ShrederPlays#2076`, true)
    .setFooter("Prefix: ! | Der Bot ist immernoch in Entwicklung", bot.user.avatarURL)
    .setTimestamp()
    .setColor(0xFF0092);
  message.delete();
  message.channel.send(embed);
}

module.exports.help = {
  name: 'botinfo',
  aliases: ['binfo']
};