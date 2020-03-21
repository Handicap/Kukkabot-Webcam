require("dotenv").config();
const apikey = process.env.API_KEY; // Ladataan salainen api-avain .env-tiedostosta

import { Client } from "discord.js";

/*
const PiCamera = require('pi-camera');
const myCamera = new PiCamera({
  mode: 'photo',
  output: `kuva.jpg`,
  width: 640,
  height: 480,
  nopreview: true,
});*/


import { capture } from "node-webcam";

//Default options 
var opts = {
    width: 1280,
    height: 720,
    quality: 100,
    delay: 0,
    saveShots: true,
    output: "jpeg",
    device: false,
    callbackReturn: "location",
    verbose: false
};

const commands = {
    saatana: function(msg) {
        msg.channel.send("Apua! Oon vaan kukka! :(");
    },
    kukka: function (msg) {
        capture("images/kukka", opts, function (err, data){
            if (!err){
                console.log("Picture taken!");
                //msg.channel.send("Naks! :)");
                msg.channel.send("Jee huomiota :)", { files: ["images/kukka.jpg"] });
            }                
            else{
                console.log(err);
                msg.channel.send("Kukalla on paha darra... Kerro isille... :(");
            }                
        });
    }
}

var prevtime = 0;
console.log("Initializing bot");
const bot = new Client();

bot.on("ready", () => {
    console.log("Discord connection ready");
});

bot.on("message", async message => {
    if (message.author.bot) return; // Jos botti lähettää viestin niin ignoorataan
    if (message.channel.name != "puutarha") return; // Kuunnellaan vaan tietyllä kanavalla
	//TODO: siirrä muuttujat jsoniksi


    var currtime = new Date();
    currtime = currtime.getTime();

    const command = message.content.toLowerCase();

    if (command in commands) {
        if (currtime - prevtime < 30000 && message.author.presence) { // puoli minsaa
            await message.channel.send("Kukkaa ahdistaa. Kukalla on myös käsiaseita. Älä häiritse kukkaa.");
            return;
        }

        console.log(command + " by " + message.author.username);
        prevtime = currtime;

        await commands[command](message);
    }

});

bot.login(apikey);
