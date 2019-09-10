const moment = require("moment");
require("moment-duration-format");


exports.run = async (client, message, [coords, rss, ...args], level) => {
    // eslint-disable-line no-unused-vars
    let time_left = calculateRssTime(rss);
    const duration = moment.duration(time_left).format(" H [hrs], m [mins]");
    const hit_time = moment.duration(calculateHitTime(time_left)).format(" H [hrs], m [mins]");

    if (!results)
        return message.channel.send("Please input valid coordinates. Example ~node 525,654 125000");

    if (rss==null || isNaN(rss))
        return message.channel.send("Usage: ~node [coords] [rss in numbers]");
    else

        message.channel.send(`= Clap-A-Node Reminder =
• Node Location  :: ${coords}
• When To Clap   :: ${duration}
• What To Do     :: Kick back and relax....I'll remind you`, {code: "asciidoc"});
    setTimeout(function() {
        message.channel.send(`= Clap-A-Node Reminder =
• Node Location  :: ${coords}
• When To Clap   :: Bout 10 mins`, {code: "asciidoc"});
        message.reply(`You may want to hit that 🌚`)
    }, hit_timer*1);


    function calculateRssTime(rss) {
        return (rss / 33.333) * 1000;
    }

    function calculateHitTime(time_left) {
        return time_left - 600000;
    }

};


exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: "User"
};

exports.help = {
    name: "shield",
    category: "Miscellaneous",
    description: "It like... Pings. Then Pongs. And it's not Ping Pong.",
    usage: "shield"
};
