/*
Project Name : CRISS MD
Creator      : CRISS VEVO
Repo         : https://github.com/criss-vevo/CRISS-MD
Support      : wa.me/255687068672
*/


const config = require('../../settings');
const { cmd, commands } = require('../command');
const os = require("os");
const { runtime } = require('../functions');
const axios = require('axios');
const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

cmd({
    pattern: "support",
    alias : "base",
    desc: "malvin menu",
    category: "menu",
    react: "📡",
    filename: __filename
}, 
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {

let dec = `    
╭──────────────≫
┋*ᴄʀᴇᴀᴛᴏʀ* : *𝐂𝐑𝐈𝐒𝐒 𝐕𝐄𝐕𝐎 (🇹🇿)*
┋*ᴍᴏᴅᴇ* : *${config.MODE}*
┋*ᴘʀᴇғɪx* : *${config.PREFIX}*
┋*ʀᴀᴍ* : ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB
┋*ᴠᴇʀsɪᴏɴ* : *2.0.4* 
┋*ᴜᴘᴛɪᴍᴇ* : ${runtime(process.uptime())}
┋
╰──────────────≫
   
 CRISS MD ՏႮᏢᏢϴᎡͲ ↷


${readMore}
\`CHANNEL🩵\`
https://whatsapp.com/channel/0029Vb0HIV2G3R3s2II4181g

\`GROUP💙\` 👥
https://whatsapp.com/channel/0029Vb0HIV2G3R3s2II4181g

\`YT CHANNEL\`🚀
https://youtube.com/@criss_vevo?si=S8WAlQgx37kI0iK_ 

\`CRISS VEVO\` *Developer🧑‍💻*
wa.me/255687068672?text=Support!


> 🚀ᴊᴏɪɴ ᴄʀɪss ᴍᴅ ᴄʜᴀɴɴᴇʟ 🚀

`;

await conn.sendMessage(
            from,
            {
                image: { url: `https://files.catbox.moe/xro4ka.jpeg` },
                caption: dec,
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
            { quoted: mek });
        
    } catch (e) {
        console.log(e);
        reply(`${e}`);
    }
});




//  CRISS-MD SC BY CRISS VEVO
