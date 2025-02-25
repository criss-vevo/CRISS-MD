/*
Project Name : CRISS MD
Creator      : CRISS VEVO
Repo         : https://github.com/criss-vevo/CRISS-MD
Support      : wa.me/255687068672
*/


const config = require('../../settings');


const {cmd , commands} = require('../command')
cmd({
    pattern: "about",
    alias: ["king"],
    react: "🧠",
    desc: "get owner dec",
    category: "main",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
let madeMenu = `╭┄┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅

*👋 ʜᴇʟʟᴏ ᴜsᴇʀ ${pushname}*\n\n *ɪ ᴀᴍ ᴄʀɪss ᴍᴅ*\n\n
  ɪ ᴀᴍ  ᴡʜᴀᴛsᴀᴘᴘ ʙᴀsᴇᴅ ᴍᴜʟᴛɪ ᴅᴇᴠɪᴄᴇ ʙᴏᴛ ᴄʀᴇᴀᴛᴇᴅ ʙʏ ᴄʀɪss ᴠᴇᴠᴏ ғʀᴏᴍ ᴛᴀɴᴢᴀɴɪᴀ.\nᴍʏ sᴏʟᴇ ᴘᴜʀᴘᴏsᴇ ɪs ᴛᴏ ʀᴇᴍᴏᴠᴇ ᴛʜᴇ ʙᴜʀᴅᴇɴ ᴏʀ ᴄᴏsᴛ ᴏғ ᴘᴜʀᴄʜᴜsɪɴɢ ᴅᴀᴛᴀ ʙᴜɴᴅʟᴇ ᴛᴏ ᴅᴏᴡɴʟᴏᴀᴅ sᴏɴɢs, ᴀᴘᴘs, ᴠɪᴅᴇᴏs & ᴍᴏᴠɪᴇs ʙʏ  ᴜsɪɴɢ ᴡʜᴀᴛsᴀᴘᴘ  ʙᴜɴᴅʟᴇs.
\n\n *ғᴏʀ ᴍᴏʀᴇ ɪɴғᴏʀ ᴠɪsɪᴛ.....
     ─┄┄┄┅┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┄┄─

> *SOURCE CODE* : https://github.com/criss-vevo/CRISS-MD

> *FOLLOW OWNER* :https://github.com/criss-vevo/

> *OWNER'S WHATSAPP* : https://wa.me/255687068672/?text=ᴄʀɪss-ᴍᴅ+Fan+Here

> *maintained by* :
https://wa.me/255687068672/?text=ᴄʀɪss-ᴍᴅ+Fan+Here

> *SUPPORT CHANNEL* : https://whatsapp.com/channel/0029Vb0HIV2G3R3s2II4181g

> *FOLLOW INSTAGRAM* :https://www.instagram.com/criss.vevo

> *FOLLOW OWNER* :https://www.youtube.com/@criss-vevo/

 *RELEASE DATE* - *25 ғᴇʙʀᴜᴀʀʏ 2025*
 
> *ᴄʀɪss ᴠᴇᴠᴏ*

━━━━━━━━━━━━━━━━━━━━━━━━
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

        // Send audio //https://github.com/criss-vevo/criss-database/raw/refs/heads/main/Media/menu.mp3
        await conn.sendMessage(from, { //https://github.com/criss-vevo/criss-database/raw/refs/heads/main/Media/menu.mp3
            audio: { url: 'https://github.com/criss-vevo/criss-database/raw/refs/heads/main/Media/menu.mp3' },
            mimetype: 'audio/mp4',
            ptt: true
        }, { quoted: mek });
        
    } catch (e) {
        console.log(e);
        reply(`${e}`);
    }
});

