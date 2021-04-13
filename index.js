
const {Client,MessageAttachment,MessageEmbed, Message} = require('discord.js');
const client = new Client();
const{prefix, token, furry, live, hentai, bizzarro, Reinicio} = require("./config.json");

function foto(repositorio){
    const max =repositorio.length;
    if(max>0){
            const pos = Math.floor(Math.random()*max);
            console.log(pos);
            const embed = new MessageEmbed()
          .setColor("RANDOM")
          .setTitle('NSFW BOT')
          .setImage(repositorio[pos])
            return embed;
            }
    else {
        const error = "No se encontro contenido con sus gustos, si gusta puede aportar en el canal de aportes :D";
        return error
    }
      
        }
client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
    
  });
client.on('message',message => {
    
    console.log(message.content);
    
  });
client.on("message", async (message) => {
    const args = message.content.slice(prefix.length).trim().split(/ +/);
    const command = args.shift().toLowerCase();
    if(message.content.startsWith(prefix)) {
        if (command == "furry"){
            if(message.channel.nsfw){
               message.channel.send(foto(furry));
            }
            else{
            message.channel.send("Este canal no permite NSFW, Quieres enojar al admin?");
        }
        }
        if (command == "live"){
            if(message.channel.nsfw){
                message.channel.send(foto(live));
            }
            else{
            message.channel.send("Este canal no permite NSFW, Quieres enojar al admin?");
        }
        }
        if (command == "hentai"){
            if(message.channel.nsfw){
                message.channel.send(foto(hentai));
            }
            else{
            message.channel.send("Este canal no permite NSFW, Quieres enojar al admin?");
        }
        }
        if (command == "bizarro"){
            if(message.channel.nsfw){
                message.channel.send(foto(bizzarro));
            }
            else{
            message.channel.send("Este canal no permite NSFW, Quieres enojar al admin?");
        }
        }
        if(command == "help"){
            message.channel.send("Comandos:\n Furry \n Hentai \n Live \n Bizarro \n \n Estoy aun trabajando en el bot espero les guste y les agrade")
            
        }
        if(command == "reinicio"){
            const pose = Math.floor(Math.random()*Reinicio.length);
            console.log(pose);
            resets= new MessageAttachment(Reinicio[pose]);
            message.channel.send(resets);
            
        }
    }
})

client.login(token);