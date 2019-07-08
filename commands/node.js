exports.run = async (client, message, [coords, rss, ...args], level) => { // eslint-disable-line no-unused-vars
    let regex = /^\d{3},\d{3}$/;
    let results = regex.test(coords);
    let drags = args.join(' ');
    let time = calculateRssTime(rss);
    let real_time = convertMS(time);

    if (!results)
        message.channel.send("Please input valid coordinates. Example ~node 525,654 125000");

    if (rss==null || isNaN(rss))
        message.channel.send("Usage: ~node [coords] [rss in numbers]");
    else
        message.reply(`Pop that node in ${real_time.minute} minutes`);
        setTimeout(function() {
            message.reply(`Pop that node in ${real_time.minute} minutes`);
        }, time*1);


    function calculateRssTime(rss) {
        return (rss / 33.333) * 1000;
    }

    function convertMS( milliseconds ) {
        let day, hour, minute, seconds;
        seconds = Math.floor(milliseconds / 1000);
        minute = Math.floor(seconds / 60);
        seconds = seconds % 60;
        hour = Math.floor(minute / 60);
        minute = minute % 60;
        day = Math.floor(hour / 24);
        hour = hour % 24;
        return {
            day: day,
            hour: hour,
            minute: minute,
            seconds: seconds
        };
    }
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: "User"
};

exports.help = {
    name: "node",
    category: "Miscellaneous",
    description: "Tracks the time left on a node.  Example ~node 525,654 125000",
    usage: "node"
};