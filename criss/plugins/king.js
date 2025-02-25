/*
Project Name : CRISS MD
Creator      : CRISS VEVO
Repo         : https://github.com/criss-vevo/CRISS-MD
Support      : wa.me/255687068672
*/


const config = require('../../settings');


const {cmd , commands} = require('../command')
cmd({
    pattern: "intro",
    alias: ["king"],
    react: "🧠",
    desc: "get owner dec",
    category: "main",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
let madeMenu = `
   *CRISS MD WHATSAPP USER BOT* 💫

                *MY MISSION*

🐼This is the result of my hard work and i Criss Vevo owns the bots rights and code rights. Therefore, you have no chance to change and submit my bot under any circumstances And 100+ Commands And logo, thumbnail,banner Maker Commands Ai Chatbot features On my Bot


🐼 The main hope of creating this bot is to take full advantage of the WhatsApp app and make its work easier


💡 Various things can be downloaded from this bot.  Also, managing groups, making logos & edit-images in different ways, searching for different things and getting information and more futures included.


⚠️ Also, if your Whatsapp account gets damaged or banned by using this, i am not responsible and you should take responsibility for it.


👨‍💻 OWNER CRISS VEVO

🎡 *GITHUB:*  https://github.com/criss-vevo/

🎡 *GITHUB:*  https://github.com/criss-vevo/CRISS-MD 

🪩 *MY CHANNEL:* https://whatsapp.com/channel/0029Vb0HIV2G3R3s2II4181g

*ᴘʟᴇᴀꜱᴇ ꜱᴛᴀʀ ᴛʜᴇ ʀᴇᴘᴏ ᴀɴᴅ ꜰᴏʟʟᴏᴡ ᴍᴇ ᴏɴ ɢɪᴛʜᴜʙ* 

`

await conn.sendMessage(
            from,
            {
                image: { url: `https://files.catbox.moe/xro4ka.jpeg` },
                caption: madeMenu,
                contextInfo: {
                    mentionedJid: [m.sender],
                    forwardingScore: 999,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: '120363306168354073@newsletter',
                        newsletterName: '🪀『 ᴄʀɪss-ᴍᴅ 』🪀 ',
                        serverMessageId: 143
                    }
                }
            },
            { quoted: mek }
        );

        // Send audio //https://github.com/criss-vevo/CRISS-DATA/raw/refs/heads/main/autovoice/menu.mp3
        await conn.sendMessage(from, { //https://github.com/criss-vevo/CRISS-DATA/raw/refs/heads/main/autovoice/menu.mp3
            audio: { url: 'https://github.com/criss-vevo/CRISS-DATA/raw/refs/heads/main/autovoice/menu3.mp3' },
            mimetype: 'audio/mp4',
            ptt: true
        }, { quoted: mek });
        
    } catch (e) {
        console.log(e);
        reply(`${e}`);
    }
});

