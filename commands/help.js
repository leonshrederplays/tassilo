const discord  = require('discord.js');
const {prefix} = require('../settiings/config.json');

module.exports.run = async (bot, message, args) => {
    let dmembed = new discord.RichEmbed()
    .setColor(0x00AC00)
    .setThumbnail(bot.user.avatarURL)
    .setAuthor(`Tassilo`, bot.user.avatarURL)
    .setDescription(`**Der Bot reagiert auf den Prefix: ${prefix}**`)
    .addField(`**Benutzer:**`, `${message.member.user.tag} schaue in deine DMs!`)
    .setFooter("Prefix: ! | Der Bot ist immernoch in Entwicklung", bot.user.avatarURL)
    .setTimestamp()
    message.delete();
    message.channel.send(dmembed).then(msg => msg.delete(5000));

    let hembed = new discord.RichEmbed()
    .setColor(0x00AC00)
    .setThumbnail(bot.user.avatarURL)
    .setAuthor(`Tassilo`, bot.user.avatarURL)
    .addField(`**Info-Befehle:**`, `${prefix}serverinfo |Zeigt dir die Serverinformationen an.| ` + `\n${prefix}userinfo |Zeigt dir die Benutzerinfos an.| ` + `\n${prefix}botinfo |Zeigt dir die Botinfos an.|`, true)
    .addField(`**Admin/Mod-Befehle:**`, `${prefix}clear |${prefix}clear 10 als beispiel: Löscht 10 Nachrichten.|` + `\n${prefix}say |${prefix}say Hallo ich bin ein Bot. als beispiel: Lässt den Bot schreiben "Hallo ich bin ein Bot."|\n `, true)
    .addField(`**User-Befehle:**`,`${prefix}8ball |${prefix}8ball Bin ich dumm? als beispiel: Fragt den Bot ob du Dumm bist. (Antworten sind zufällig...)|`)
    .setDescription(`**Der Bot reagiert auf den Prefix: ${prefix}**`)
    .setFooter("Prefix: ! | Der Bot ist immernoch in Entwicklung", bot.user.avatarURL)
    .setDescription(`**Der Bot reagiert auf den Prefix: ${prefix}**`)
    .setTimestamp()
    message.delete();
    message.author.send(hembed);

    let membed = new discord.RichEmbed()
        .setColor('RANDOM')
        .setThumbnail(bot.user.avatarURL)
        .setAuthor(`Tassilo {MUSIK IS ALPHA-VERSION!!!}`, bot.user.avatarURL)
        .setTitle(`-=- Help Music -=- <>: MUST, []: OPTIONAL`)
        .addField(`${prefix}play <music/url>`, 'Spielt Musik!', true)
        .addField(`${prefix}search <music>`, 'Gibt 10 Ergebnisse von der YouTube suche aus.', true)
        .addField(`${prefix}skip`, 'Skiped zum nächsten Lied in der Queue \n(3 votes gebraucht wenn du keine Berechtigung hast.)', true)
        .addField(`${prefix}volume [volume]`, 'Zeigt die aktuelle Lautstärke wenn eine Zahl zwischen 0-100 eingegeben wird dann ändert es die Lautstärke.', true)
        .addField(`${prefix}pause`, 'Pausiert die Musik.', true)
        .addField(`${prefix}resume`,'Spielt die Musik weiter ab.', true)
        .addField(`${prefix}stop`, 'Stoppt Musik und Bot disconnectet.', true)
        .addField(`${prefix}reload <command>`, 'Reloaded einen Command.', true)
        .setDescription(`**Der Bot reagiert auf den Prefix: ${prefix}**`)
        .setFooter("Prefix: ! | Der Bot ist immernoch in Entwicklung", bot.user.avatarURL)
        .setTimestamp()
    message.delete();
    message.author.send(membed);

};

module.exports.help = {
    name: 'help',
    aliases: []
};
