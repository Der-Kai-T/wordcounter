# wordcounter-bot
 A Discord-Bot to count a word
 Requested by u/AlessyoOnWiiSports on r/discordapp on [reddit](https://www.reddit.com/r/discordapp/comments/indsmo/is_there_a_bot_that_can_count_how_many_times_we/?utm_source=share&utm_medium=web2x&context=3). It's written with node.js as a framework.

 ## Installation (short)
1. Install [node.js](https://nodejs.org/) on your System
2. Download or Clone the content of this repository.
3. Copy config.json.sample to config.json and insert values (see below).
4. Edit Messages in messages.json
5. run bot.js with node (node bot.js)
6. make sure the bot is running and it will post a random Message of the Day.

## config.json
```
{
    "prefix": "?",
    "token": "",
    "search": "hi"
}
     
```

`prefix`sets the letter or symbol the bot should react to. Currently there aren't any commands to control the bot, so this setting can be ignored.

`token` is used to authenticate the bot agains discord. To create one, you need a discord developer account. Visit https://discord.com/developers/ to get one. You can find a tutorial to create a discord application [here](https://discordpy.readthedocs.io/en/latest/discord.html). It's for use with thy python-Library but as its only the discord-part, it's the same for this bot. The only permissions the bot currently needs are `Send Messages` and `Manage Messages`.

`search`: the word to search for. In lower case as the whole message will be converted to lower case for matching.

## data/data.json
The bot process needs permissions to write to that file.