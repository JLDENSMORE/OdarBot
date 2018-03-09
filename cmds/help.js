const Discord = require ("discord.js");
const fs = require("fs");

module.exports.run = async (bot, message, args) => {

    const commandsList = fs.readFileSync("./commands.txt", "utf8");
    let bicon = bot.user.displayAvatarURL;

    let helpEmbed = new Discord.RichEmbed()
    .setThumbnail(bicon)
    .setColor("00ff00")
    .setTitle("**__Help commands__**")
    .setDescription(commandsList);
    
    message.channel.send(helpEmbed);
  

    message.delete();
    
 }

 module.exports.help = {
     name: "help" 
 }