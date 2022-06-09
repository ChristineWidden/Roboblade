const Discord = require('discord.js');
const bot = new Discord.Client();

const token = 'NzEwMjE3NDE4MTY0OTI4NjIz.XrxUIQ.5EM_NFWaMh9oTlC0CsFkjq_U5nk';


//const gapi = require('https://apis.google.com/js/api.js');

//const google = require('googleapis');

//const {google} = require('googleapis');


const path = require('path');


//const quickstart = require('quickstart');
//const quickstart = import('quickstart.js');
//const {authenticate} = require('@google-cloud/local-auth');

// initialize the Youtube API library
//const youtube = google.youtube('v3', apiKey);

/**
async function runSample() {
    //const auth = await authenticate({
    //    keyfilePath: path.join(__dirname, '../oauth2.keys.json'),
    //    scopes: ['https://www.googleapis.com/auth/youtube'],
    //});
    //google.options({auth});
    google.options(apiKey)

    const res = await youtube.search.list({
        part: 'id,snippet',
        q: 'Node.js on Google Cloud',
    });
    console.log(res.data);
}

runSample();

function getVid() {
    return youtube.playlistItems.list({
        "part": "snippet",
        "playlistId": "UUFAiFyGs6oDiF1Nf-rRJpZA"
    });
    //return youtube.channels.list({
     //   "part": "snippet,contentDetails",
     //   "id": "UUFAiFyGs6oDiF1Nf-rRJpZA",
    //    "maxResults": 25
  //  })
}

console.log(getVid());
**/

bot.on('ready', () =>{
    console.log('Roboblade is online!');
});

var globalMsg;

bot.on('message', async msg => {

    let message = msg.content;
    let name1 = "<@!710217418164928623>";
    let name2 = "@roboblade";

    let robobladeID = "710217418164928623";

    let nameMisspellings = ["robobade", "rooblade", "robblade", "robert", "robobot", "roboblae", "roboblde", "robobad", "hoboblade", "robo bad", "roboblode",
                            "robglade", "robobald", " rob ", " bob"];
    let meanMessages = ["you suck", "is bad", "shut up", "go away", "is trash"];

    console.log(msg.content);

    if(msg.channel.id === "726692702418108457") {
        //technohive spam ID: 715995431905132545
        //My dms ID: 726692702418108457

        //console.log("success");
        //Command is "=send:: "
        let splitMessage = message.split(":: ");
        splitMessage.push("error");

        if(splitMessage[0] === "=send"){
            //bot.channels.fetch('726692702418108457').send("`" + splitMessage[1] + "`");
            //console.log(bot.channels.fetch('726692702418108457').type().then());
            bot.channels.fetch('715995431905132545')
                //.then(channel => console.log(channel.name))
                .then(channel => channel.send("`" + splitMessage[1] + "`"))
                .catch(console.error);
        }

    }

    if(msg.content === "=help") {
        msg.reply("Commands:\n" +
            "=hello: hello!\n" +
            "=smile: :)\n" +
            "=video: Get a completely random technoblade video!\n" +
            "=compliment: Get a nice compliment!\n" +
            "=gn: Goodnight!\n" +
            "=bubblewrap\n" +
            "=heartwrap\n" +
            "=test: For testing things.\n" +
            "You should try talking to technobot, too!");
    }

    if(message === "=secret") {
        msg.reply("\n" +
            "talking about him\n" +
            "various misspellings of his name\n" +
            "insults in combination with his name or misspellings of his name\n" +
            "Asking if he is there\n" +
            "insulting his code\n" +
            "various things technobot says\n" +
            "berries of a certain color\n" +
            "a few things wilbot says\n" +
            "talking about technobot\n" +
            "the lyrics of a certain song\n" +
            "the 'v' word\n" +
            "asking what he is\n" +
            "talking about a certain kid of a certain aquatic nature");
    }


    let nameMisspelled = false;

    for(let name in nameMisspellings) {
        //console.log("Checking name " + nameMisspellings[name]);

        if(message.toLowerCase().includes(nameMisspellings[name])){
            console.log("This has the misspelling " + nameMisspellings[name]);
            nameMisspelled = true;
            break;
        }

    }


    let insulted = false;

    if(nameMisspelled || message.toLowerCase().includes("roboblade")) {
        console.log("Checking for insults");
        let lowerMessage = message.toLowerCase();

        for(let meanMessage in meanMessages) {
            if(lowerMessage.includes(meanMessages[meanMessage])) {
                msg.channel.send("<@!358319695100903426> `Tell them to stop. ]:`");
                insulted = true;
                break;
            }
        }
    }


    if(msg.author.id !== robobladeID && !insulted && Math.random() < 0.5) {

        if(nameMisspelled) {
            let random = Math.random();
            if (random < 0.2) {
                msg.reply("`THAT'S NOT MY NAME!`");
            } else if (random < 0.4) {
                msg.reply("`...What do you want? >:`");
            } else if (random < 0.6) {
                msg.reply("`...Just leave me alone ]:`");
            } else {
                msg.reply("`My name`\n" +
                    "`is ROBOBLADE!`");
            }
            if (Math.random() < 0.07) {
                msg.channel.send("<@!358319695100903426> `They're doing it again. ]:`");
            }
        }
    }

    if(message.toLowerCase().includes("how are you") && message.toLowerCase().includes("roboblade")) {
        let random = Math.random();
        if (random < 0.7) {
            msg.reply("`Uh, pretty good I guess.`");
        } else {
            msg.reply("`...could be better.`");
        }
    }

    if(message.toLowerCase().includes("roboblade") && (message.toLowerCase().includes("you there") || (message.toLowerCase().includes("you here")))) {
        msg.reply("`I'm here.`");
    }


    if(msg.content === "=compliment") {
        let complimentValue = Math.floor(Math.random()*4);//0-9
        let compliment = "";
        console.log(complimentValue);
        switch(complimentValue) {
            case 0:
                compliment = "My code is beautifully written [:\n" +
                    "way better than your code, definitely.";
                break;
            case 1:
                compliment = "My metal is looking especially shiny today.";
                break;
            default:
                compliment = "I'm awesome. Anything else?"

        }
        msg.reply("`" + compliment + "`");
    }

    if(msg.content === "=gn" || msg.content === "=goodnight") {
        msg.reply("`Sleep is for the weak.`");
    }

    if(msg.content === "=test") {
        msg.channel.send("Testing");
    }

    if(message.toLowerCase().includes("your code is bad") && message.toLowerCase().includes("roboblade")) {
        msg.reply("`YOU TAKE THAT BACK`");
    }

    if(message === "become a channel member or else :]") {
        if(Math.random() < 0.2) {
            msg.reply("`Yeah, you better!`")
        }
    }

    if(message.toLowerCase() === "pog" || message.toLowerCase() === "pog!" || message.toLowerCase() === "pog!!!") {
        if(Math.random() < 0.07) {
            msg.reply(":joy:")
        }
    }

    if(message === "...uwu") {
        msg.reply("`...what.`\n" +
            "`don't. don't do that.`")
    }

    if (msg.content === "=hello" || msg.content === "=hi") {
        msg.reply('`Hello, friend!`');
    }
    if (msg.content === "=smile") {
        let rand = Math.random() * 10;
        if(rand < 1){
            msg.reply('`[:<`')
        } else {
            msg.reply('`[:`')
        }
    }




    if (msg.content === "=heartwrap") {
        let heartList = "heart orange_heart yellow_heart green_heart blue_heart purple_heart black_heart " +
            "brown_heart white_heart broken_heart heartbeat heartpulse sparkling_heart cupid gift_heart";
        heartList = heartList.split(" ");



        let reply = "";

        for (let i = 0; i < 100; i++) {
            let randomEmoji = Math.floor(Math.random()*heartList.length);
            reply = reply + "||:" + heartList[randomEmoji] + ":||";
            //reply = reply + String(i) + " ";
        }
        msg.reply(String(reply));

        //msg.reply("Working so far")
    }

    if (msg.content === "=bubblewrap") {


        let reply = "";

        for (let i = 0; i < 282; i++) {
            reply = reply + "||pop||";
            //reply = reply + String(i) + " ";
        }
        msg.reply(String(reply));

        //msg.reply("Working so far")
    }





    if (message.includes("you thought i was gonna be mean? SIKE YOU WERE FOOLED, SURPRISE POSITIVITY")) {
        if(Math.random() < 0.5) {
            msg.reply("`That's right, lure them into a sense of complacency [:<`");
        }
    }
    if (message === "now you are aware of your breathing :]") {
        if(Math.random() < 0.5) {
            msg.reply("`What breathing?`");
        }
    }
    if (message === "smelly") {
        if(Math.random() < 0.7) {
            msg.reply("`gross.`");
        }

    }
    if(msg.content === "i’ll hunt you for sport") {
        if(Math.random() < 0.7) {
            msg.reply("`Can I join you?`");
        }
    }

    if(msg.content === "Hey wilbur. Im sorry i got so distant. im sorry i pushed you away. ive never been good at telling people what i want. i hope youre okay. i miss you. -schlatt") {
        if(Math.random() < 0.5) {
            msg.reply("`What.`\n" +
                "`What the fu--`");
        } else {
            msg.reply("`...I never want to see that again in my life.`");
        }
    }


    if(msg.author.id !== robobladeID) {
        if(message.toLowerCase().includes("skynet")) {
            let random = Math.random();
            if(random < 0.2) {
                msg.channel.send("`Are you talking about my inspiration?`");
            } else if(random < 0.6) {
                msg.channel.send("`Oh hey, love that guy.`");
            }
        }

        if(message.toLowerCase().includes("glados")) {
            let random = Math.random();
            if(random < 0.3) {
                msg.channel.send("`Oh wow, are you talking about GLaDOS? She's awesome.`");
            } else if(random < 0.6) {
                msg.channel.send("`Isn't she a potato now? Love that for her.`");
            }
        }
    }


    if(msg.author.id === "717840669972103250" && msg.content === "You are a rat.") {
        if(Math.random() < 0.7) {
            msg.reply("`Hey Wilbur, I found this really cool spawn egg.`");
        }
    }

    if(msg.content.includes("!200k")) {
        msg.reply("`No.`\n" +
            "https://cdn.discordapp.com/attachments/704888364297617448/711810991104589834/unknown.png");

    }

    if(msg.author.id !== robobladeID && (msg.content.toLowerCase().includes("blueberry") || msg.content.toLowerCase().includes("blueberries"))) {
        if(Math.random() < 0.5) {
            let random = Math.random();
            if(random < 0.3) {
                msg.reply("`Blueberries are good I think`");
            } else if(random < 0.6) {
                msg.reply("`I could go for some blueberries right now`");
            } else {
                msg.reply("`I can't technically eat blueberries, being a robot, but I wish that I could.`")
            }
        }

    }

    if(msg.content === "berry test") {
        msg.reply("blueberry blueberries")
    }


    //let result;
    if (msg.content === "=video") {
        console.log("Bot activated");
        //result = await getVid(msg);
        globalMsg = msg;
        getVid()
        //result = resultVideo;
        //await msg.reply('Here you go!\n' + await String(result));
    }

    if (msg.author.id !== "710217418164928623" && msg.content.toLowerCase().includes("roboblade")) {
        if(Math.random()<0.2) {
            msg.reply("`I sure hope you are saying NICE things about me. [:`");
        }

    }
    if (msg.author.id !== robobladeID && msg.content.toLowerCase().includes("technobot")) {
        if(Math.random() < 0.2) {
            msg.reply("`I REALLY hope you are saying NICE things about him. [:<`");
        }

    }
    if (msg.content.toLowerCase().includes("getting bored, of walls 2") || msg.content.toLowerCase().includes("getting bored of walls 2")) {
        if(Math.random() < 0.7) {
            msg.reply("`Sounds like someone has great musical taste`");
        }
    }

    if ((message.toLowerCase().includes("vore"))) {
        if (Math.random() < 0.5) {
            msg.reply("`why are you like this`");
        }
    }


    if ((message.toLowerCase().includes(name1) || message.toLowerCase().includes(name2)) && message.toLowerCase().includes("what are you")) {
        if(Math.random() < 0.85) {
            msg.reply("`I'm the grumpy one.`");
        } else {
            msg.reply("`I̴'̵m̶ ̷y̶o̶u̸r̸ ̴w̸o̵r̸s̶t̷ ̷n̸i̵g̵h̴t̷m̷a̵r̸e̷.̶`")
        }
    } else if(message.toLowerCase().includes(name1)) {
        let random = Math.random();
        if(random < 0.5) {
            msg.reply("`WHAT.`");
        } else {
            msg.reply("`What? What's going on?`");
        }
    }





    if (msg.content.toLowerCase().includes("squid kid") || msg.content.toLowerCase().includes("squidkid")) {
        if(Math.random() < 0.15) {
            msg.reply("`SQUID  KID?  WHAT???  WHERE--`");
        }

    }

});



bot.login(token);


var resultVideo;


var fs = require('fs');
var readline = require('readline');
var {google} = require('googleapis');
var OAuth2 = google.auth.OAuth2;

// If modifying these scopes, delete your previously saved credentials
// at ~/.credentials/youtube-nodejs-quickstart.json
var SCOPES = ['https://www.googleapis.com/auth/youtube.readonly'];
var TOKEN_DIR = (process.env.HOME || process.env.HOMEPATH ||
    process.env.USERPROFILE) + '/.credentials/';
var TOKEN_PATH = TOKEN_DIR + 'youtube-nodejs-quickstart.json';




async function getVid() {
    console.log("getVid entered");
    //quickstart;
    // Load client secrets from a local file.
    //let resultVideo;
    fs.readFile('client_secret.json', async function processClientSecrets(err, content) {
        if (err) {
            console.log('Error loading client secret file: ' + err);
            return;
        }
        console.log("get vid tier 2")
        // Authorize a client with the loaded credentials, then call the YouTube API.
        let toReturn = await authorize(JSON.parse(content), getChannel);
        //msg.reply('Here you go!\n' + await String(toReturn));
        //return toReturn;

    });


}


/**
 * Create an OAuth2 client with the given credentials, and then execute the
 * given callback function.
 *
 * @param {Object} credentials The authorization client credentials.
 * @param {function} callback The callback to call with the authorized client.
 */
function authorize(credentials, callback) {
    var clientSecret = credentials.installed.client_secret;
    var clientId = credentials.installed.client_id;
    var redirectUrl = credentials.installed.redirect_uris[0];
    var oauth2Client = new OAuth2(clientId, clientSecret, redirectUrl);

    // Check if we have previously stored a token.
    fs.readFile(TOKEN_PATH, function(err, token) {
        if (err) {
            getNewToken(oauth2Client, callback);
        } else {
            oauth2Client.credentials = JSON.parse(token);
            callback(oauth2Client);
        }
    });
}

/**
 * Get and store new token after prompting for user authorization, and then
 * execute the given callback with the authorized OAuth2 client.
 *
 * @param {google.auth.OAuth2} oauth2Client The OAuth2 client to get token for.
 * @param {getEventsCallback} callback The callback to call with the authorized
 *     client.
 */
function getNewToken(oauth2Client, callback) {
    var authUrl = oauth2Client.generateAuthUrl({
        access_type: 'offline',
        scope: SCOPES
    });
    console.log('Authorize this app by visiting this url: ', authUrl);
    var rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    rl.question('Enter the code from that page here: ', function(code) {
        rl.close();
        oauth2Client.getToken(code, function(err, token) {
            if (err) {
                console.log('Error while trying to retrieve access token', err);
                return;
            }
            oauth2Client.credentials = token;
            storeToken(token);
            callback(oauth2Client);
        });
    });
}

/**
 * Store token to disk be used in later program executions.
 *
 * @param {Object} token The token to store to disk.
 */
function storeToken(token) {
    try {
        fs.mkdirSync(TOKEN_DIR);
    } catch (err) {
        if (err.code != 'EEXIST') {
            throw err;
        }
    }
    fs.writeFile(TOKEN_PATH, JSON.stringify(token), (err) => {
        if (err) throw err;
        console.log('Token stored to ' + TOKEN_PATH);
    });
}


/**
 * Lists the names and IDs of up to 10 files.
 *
 * @param {google.auth.OAuth2} auth An authorized OAuth2 client.
 */
async function getChannel(auth) {
    console.log("Get channel entered");
    var service = google.youtube('v3');

    var response = await service.playlistItems.list({
        auth: auth,
        part: 'id',
        playlistId: "UUFAiFyGs6oDiF1Nf-rRJpZA",
        maxResults: 50
    });
    let videoAmount = await response.data.pageInfo.totalResults;
    console.log("Video amount: " + videoAmount);
    let randomVideoNumber = Math.floor(Math.random() * videoAmount);
    console.log("Random video number: " + randomVideoNumber);
    let nextPageToken = response.data.nextPageToken;

    let toReturn = await getPage(service, auth, nextPageToken, randomVideoNumber);
    globalMsg.reply("`you should check out the video \"" + toReturn[0] + "\" from " + toReturn[2] + "!`\n" +
        "https://www.youtube.com/watch?v=" + toReturn[1]);
    //return toReturn;
}


async function getPage(service, auth, nextPageToken, randomVideoNumber) {
    //console.log("Random video number: " + randomVideoNumber);

    let pageNeeded = Math.floor(randomVideoNumber/50);
    let videoToFind = randomVideoNumber % 50;

    console.log("Page needed: " + pageNeeded);
    console.log("Video to find: " + videoToFind);
    console.log(Number(randomVideoNumber)/50);

    let nextToken = nextPageToken;

    if (pageNeeded < 1) {
        return await getNiceVideo(service, auth, "", videoToFind);
    } else {

        for (let i = 0; i < pageNeeded - 1; i++) {
            nextToken = await getNextToken(service, auth, nextToken);
            console.log("Retrieved: " + nextToken);
        }

        let toReturn = await getNiceVideo(service, auth, nextToken, randomVideoNumber % 50)
        return toReturn
    }
}


async function getNextToken(service, auth, token) {
    var help = await service.playlistItems.list({
        maxResults: 50,
        pageToken: token,
        auth: auth,
        part: "snippet",
        playlistId: "UUFAiFyGs6oDiF1Nf-rRJpZA",

    });
    //console.log(help.data.items[0]);
    return help.data.nextPageToken;
}



async function getNiceVideo(service, auth, thistoken, itemId) {
    /**
    let res = await service.playlistItems.list({
        auth: auth,
        part: "snippet,status",
        playlistId: "UUFAiFyGs6oDiF1Nf-rRJpZA",
        maxResults: 50,
        pageToken: token
    }, function (err, response) {
        if (err) {
            console.log('The API returned an error2: ' + err);
            return;
        }
        var info = response.data.items;
        if (info.length == 0) {
            console.log('No playlist found.');
        } else {
            resultVideo = info[itemId].snippet.title;
            console.log('You should probably go watch %s. It\'s a pretty good video.',
                info[itemId].snippet.title
            );

        }
    });
     **/

    let res = await service.playlistItems.list({
        auth: auth,
        part: "snippet",
        playlistId: "UUFAiFyGs6oDiF1Nf-rRJpZA",
        maxResults: 50,
        pageToken: thistoken
    });


    toReturn = [res.data.items[itemId].snippet.title, res.data.items[itemId].snippet.resourceId.videoId, res.data.items[itemId].snippet.publishedAt.substring(0,4)];
    console.log(toReturn);

    return toReturn;
}



