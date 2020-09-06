//Load librarys
const Discord = require("discord.js");
const fs = require("fs");

//Load configuration
const {prefix, token, search} = require("./config.json");

//Load data
var data = require("./data/data.json");

var regex = new RegExp("\\b" + search + "\\b");

//create Bot-Instance
var client = new Discord.Client();

client.once("reconnecting", () => {
    console.log("Reconnecting!");
})

client.once("disconnect", () =>{
    console.log("Disconnect!");
})

client.on("ready", () => {
    console.log("Ready!");
   // client.channels.cache.get(channel).send("MOTD-Bot online");
    client.user.setPresence({
        game: {
            name: 'I am alive',
            type: 'PLAYING'
        },
        status: 'online'
    })
})

client.on("message", async message => {
    if (message.author.bot) return;
  
    if(regex.test(message.content.toLowerCase())){
        data.count += 1;
        var writestring = JSON.stringify(data);
        fs.writeFileSync("data/data.json", writestring);
        message.reply("\"" + search + "\" has been used " + data.count + " times.")
    }

});

client.login(token);