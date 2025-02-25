const config = require('../../settings');
const { cmd, commands } = require('../command');
const os = require("os");
const { runtime } = require('../functions');
const axios = require('axios');

cmd({
    pattern: "menu2",
    desc: "menu the bot",
    category: "menu",
    react: "⚡",
    filename: __filename
}, 
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        let dec = `╭┉┉┉〔 *${config.BOT_NAME}* 〕┉┉┉┈⊷
┋✮╭──────────────
┋✮│ Owner : *${config.OWNER_NAME}*
┋★│ Baileys : *⌨︎Multi Device*
┋✮│ Type : *☁️︎NodeJs*
┋✮│ Platform : *[${os.hostname()}]*
┋★│ Mode : *[${config.MODE}]*
┋✮│ Prifix : *[${config.PREFIX}]*
┋✮│ Version : *3.0.0 Bᴇᴛᴀ☯︎*
┋✮╰──────────────
╰━━━━━━━━━━━━━━━┈⊷
      〔 *☟︎𝗠𝗲𝗻𝘂 𝗟𝗶𝘀𝘁☟︎* 〕
 ╭─────────────·๏
 ┊• aimenu
 ┊• toolsmenu
 ┊• convertmenu
 ┊• funmenu
 ┊• dlmenu
 ┊• listcmd
 ┊• mainmenu
 ┊• groupmenu
 ┊• ownermenu
 ┊• othermenu
 ┊• logo <text>
 ┊• repo
 ╰──────────────┈⊷

> ${config.DESCRIPTION}`;

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
                        newsletterName: 'ᴄʀɪss ᴠᴇᴠᴏ',
                        serverMessageId: 143
                    }
                }
            },
            { quoted: mek }
        );

        // Send audio
        await conn.sendMessage(from, {
            audio: { url: 'https://github.com/criss-vevo/CRISS-DATA/raw/refs/heads/main/autovoice/menu2.mp3' },
            mimetype: 'audio/mp4',
            ptt: true
        }, { quoted: mek });
        
    } catch (e) {
        console.log(e);
        reply(`${e}`);
    }
});


// dlmenu

cmd({
    pattern: "dlmenu",
    desc: "menu the bot",
    category: "menu",
    react: "⤵️",
    filename: __filename
}, 
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        let dec = ` 〘 𝗗𝗢𝗪𝗡𝗟𝗢𝗔𝗗 𝗠𝗘𝗡𝗨 〙

╭─────────────⪼
┋ ☻ *ᴀᴘᴋ* 
┋ ☻ *ᴛᴡɪᴛᴛᴇʀ* 
┋ ☻ *ɢᴅʀɪᴠᴇ* 
┋ ☻ *ᴍᴇᴅɪᴀғɪʀᴇ* 
┋ ☻ *ᴍᴇᴅɪᴀғɪʀᴇᴘʀᴏ*
┋ ☻ *sᴘᴏᴛɪғʏ*
┋ ☻ *ғʙ*
┋ ☻ *ɪɢ* 
┋ ☻ *ᴍᴏᴠɪᴇ*
┋ ☻ *sᴏɴɢ* 
┋ ☻ *sᴏɴɢ1*
┋ ☻ *ᴠɪᴅᴇᴏ* 
┋ ☻ *ᴠɪᴅᴇᴏ3*
┋ ☻ *ᴠɪᴅᴘʀᴏ*
┋ ☻ *ᴘʟᴀʏ*
┋ ☻ *ᴘʟᴀʏ2*
┋ ☻ *ᴘʟᴀʏ3*
┋ ☻ *ᴘʟᴀʏᴛ*
┋ ☻ *ᴘʟᴀʏᴘʀᴏ*
┋ ☻ *ᴘʟᴀʏᴜʟᴛʀᴀ*
┋ ☻ *ʏᴛ*
┋ ☻ *ʏᴛᴍᴘ3*
┋ ☻ *ʏᴛᴍᴘ4*
┋ ☻ *ᴛɪᴋᴛᴏᴋ* 
┋ ☻ *ᴛɪᴋᴛᴏᴋ2*
┋ ☻ *ɪᴍɢ* 
┋ ☻ *ʙᴀɪsᴄᴏᴘᴇ*
┋ ☻ *sɪɴʜᴀʟᴀsᴜʙ*
┋ ☻ *ɢᴇɴɪsɪsɪʟᴀ*
┋ ☻ *xɴxxᴅᴏᴡɴ*
┋ ☻ *xᴠᴅʟ*
┋ ☻ *ᴘɪɴᴛᴇʀᴇsᴛ*
┋ ☻ *ʀᴀɴᴅᴏᴍᴀɴɪᴍᴇ*
╰━━━━∙⋆⋅⋆∙━ ─┉─ • ─┉─⊷

> ${config.DESCRIPTION}`;

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
                        newsletterName: 'ᴄʀɪss ᴠᴇᴠᴏ',
                        serverMessageId: 143
                    }
                }
            },
            { quoted: mek }
        );

    } catch (e) {
        console.log(e);
        reply(`${e}`);
    }
});

// group menu

cmd({
    pattern: "groupmenu",
    desc: "menu the bot",
    category: "menu",
    react: "⤵️",
    filename: __filename
}, 
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try
       {
        let dec = `〘 𝗚𝗥𝗢𝗨𝗣 𝗠𝗘𝗡𝗨〙

╭────────────⪼
┋ ☛ *ᴘʀᴏᴍᴏᴛᴇ* 
┋ ☛ *ᴅᴇᴍᴏᴛᴇ* 
┋ ☛ *ᴅᴇʟᴇᴛᴇ*
┋ ☛ *ᴋɪᴄᴋ* 
┋ ☛ *ᴋɪᴄᴋᴀʟʟ*
┋ ☛ *ᴋɪᴄᴋᴀʟʟ2*
┋ ☛ *ᴋɪᴄᴋᴀʟʟ3*
┋ ☛ *ᴋɪᴄᴋ+*
┋ ☛ *ғᴀᴍɪʟʏ* 
┋ ☛ *ᴇxᴏʀ* 
┋ ☛ *ᴘʀᴏᴍᴏᴛᴇsᴛᴀғғ* 
┋ ☛ *ᴀᴅᴅ* 
┋ ☛ *ᴀᴅᴍɪɴs* 
┋ ☛ *ɢᴇᴛᴘɪᴄ* 
┋ ☛ *sᴇᴛᴡᴇʟᴄᴏᴍᴇ* 
┋ ☛ *sᴇᴛɢᴏᴏᴅʙʏᴇ* 
┋ ☛ *ᴘᴏʟʟ*
┋ ☛ *ɢɴᴀᴍᴇ* 
┋ ☛ *ᴛᴀɢᴀʟʟ* 
┋ ☛ *ᴛᴀɢᴀᴘᴘ* 
┋ ☛ *ᴄʜᴀɴɴᴇʟ* 
┋ ☛ *ᴛᴀɢᴀᴅᴍɪɴ* 
┋ ☛ *ᴏᴘᴇɴᴛɪᴍᴇ/ᴄʟᴏsᴇᴛɪᴍᴇ* 
┋ ☛ *ɢɪɴғᴏ* 
┋ ☛ *ɢʟɪɴᴋ*
┋ ☛ *ᴜɴʟᴏᴄᴋ*
┋ ☛ *ʟᴏᴄᴋ*
┋ ☛ *ᴍᴜᴛᴇ*
┋ ☛ *ᴜɴᴍᴜᴛᴇ*
┋ ☛ *ɢᴅᴇsᴄ*
┋ ☛ *sᴇᴛsᴜʙᴊᴇᴄᴛ*
┋ ☛ *ɪɴᴠɪᴛᴇ*
┋ ☛ *ᴊᴏɪɴ*join
┋ ☛ *ʀᴇᴠᴏᴋᴇ*
┋ ☛ *ᴜᴘᴅᴀᴛᴇɢᴅsᴇᴄ*
┋ ☛ *ᴜᴘᴅᴀᴛᴇɢɴᴀᴍᴇ*
┋ ☛ *ʀᴇᴍᴏᴠᴇᴍᴇᴍʙᴇʀs*
┋ ☛ *ʀᴇᴍᴏᴠᴇᴀʟʟ2*
┋ ☛ *ʀᴇᴍᴏᴠᴇᴀᴅᴍɪɴs*
┋ ☛ *ᴜɴʟᴏᴄᴋɢs*
┋ ☛ *ʟᴏᴄᴋɢs*
┋ ☛ *sᴇɴᴅᴅᴍ*
┋ ☛ *ᴅɪsᴀᴘᴘᴇᴀʀ*
┋ ☛ *ᴀʟʟʀᴇϙ*
┋ ☛ *ᴊᴏɪɴʀᴇϙᴜᴇsᴛs*
┋ ☛ *ʜɪᴅᴇᴛᴀɢ*
╰━━━━∙⋆⋅⋆∙━ ─┉─ • ─┉─⊷

> ${config.DESCRIPTION}`;

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
                        newsletterName: 'ᴄʀɪss ᴠᴇᴠᴏ',
                        serverMessageId: 143
                    }
                }
            },
            { quoted: mek }
        );

    } catch (e) {
        console.log(e);
        reply(`${e}`);
    }
});

// fun menu

cmd({
    pattern: "funmenu",
    desc: "menu the bot",
    category: "menu",
    react: "😎",
    filename: __filename
}, 
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {

        let dec = `〘 𝗙𝗨𝗡 𝗠𝗘𝗡𝗨 〙

╭────────────⪼
┋ ◉ *sϙᴜɪᴅɢᴀᴍᴇ* 
┋ ◉ *ᴋᴏɴᴀᴍɪ* 
┋ ◉ *ғᴀᴄᴛ* 
┋ ◉ *ᴇᴍɪx* 
┋ ◉ *ᴄᴏᴍᴘᴀᴛɪʙɪʟɪᴛʏ* 
┋ ◉ *ᴀᴜʀᴀ* 
┋ ◉ *8ʙᴀʟʟ* 
┋ ◉ *ᴄᴏᴍᴘʟɪᴍᴇɴᴛ* 
┋ ◉ *ʟᴏᴠᴇᴛᴇsᴛ* 
┋ ◉ *ᴇᴍᴏᴊɪ*
┋ ◉ *ᴄʀʏ* 
┋ ◉ *ᴄᴜᴅᴅʟᴇ*
┋ ◉ *ʙᴜʟʟʏ*
┋ ◉ *ʜᴜɢ* 
┋ ◉ *ᴀᴡᴏᴏ* 
┋ ◉ *ʟɪᴄᴋ* 
┋ ◉ *ᴘᴀᴛ* 
┋ ◉ *sᴍᴜɢ* 
┋ ◉ *ʙᴏɴᴋ* 
┋ ◉ *ʏᴇᴇᴛ* 
┋ ◉ *ʙʟᴜsʜ* 
┋ ◉ *ʜᴀɴᴅʜᴏʟᴅ* 
┋ ◉ *ʜɪɢʜғɪᴠᴇ* 
┋ ◉ *ᴡᴀᴠᴇ* 
┋ ◉ *ɴᴏᴍ* 
┋ ◉ *sᴍɪʟᴇ* 
┋ ◉ *ᴡɪɴᴋ* 
┋ ◉ *ʜᴀᴘᴘʏ* 
┋ ◉ *ɢʟᴏᴍᴘ* 
┋ ◉ *ʙɪᴛᴇ* 
┋ ◉ *ᴘᴏᴋᴇ* 
┋ ◉ *ᴄʀɪɴɢᴇ* 
┋ ◉ *ᴅᴀɴᴄᴇ* 
┋ ◉ *ᴋɪʟʟ* 
┋ ◉ *sʟᴀᴘ* 
┋ ◉ *ᴋɪss* 
┋ ◉ *ʜᴀᴄᴋ*  
┋ ◉ *ʟᴏʟɪ* 
┋ ◉ *ᴡᴀɪғᴜ*
┋ ◉ *ɴᴇᴋᴏ*
┋ ◉ *ᴍᴇɢᴜᴍɪɴ*
┋ ◉ *ᴅᴏɢ*
┋ ◉ *ᴄᴀᴛ*
┋ ◉ *ʀᴡ/ᴡᴀʟʟᴘᴀᴘᴇʀ*
┋ ◉ *ʙɪʙʟᴇ*
┋ ◉ *sʜɪᴘ*
┋ ◉ *ɪɴsᴜʟᴛ*
┋ ◉ *ғᴀɴᴄʏ*
┋ ◉ *ᴘɪᴄᴋᴜᴘʟɪɴᴇ*
┋ ◉ *ᴄʜᴀʀᴀᴄᴛᴇʀ*
┋ ◉ *ʀɪɴɢᴛᴏɴᴇ*
┋ ◉ *ʀɪɴɢᴛᴏɴᴇs*
┋ ◉ *ʀᴄᴏʟᴏʀ*
┋ ◉ *ʀᴏʟʟ*
┋ ◉ *ᴘɪᴄᴋ*
┋ ◉ *ᴄᴏɪɴғʟɪᴘ*
┋ ◉ *ғʟɪᴘ*
┋ ◉ *ᴅᴀᴛᴇ*
┋ ◉ *ᴛɪᴍᴇɴᴏᴡ*
┋ ◉ *ᴄᴏᴜɴᴛ*
┋ ◉ *ᴄᴏᴜɴᴛx*
┋ ◉ *sʜᴀᴘᴀʀ*
┋ ◉ *ᴄᴀʟᴄᴜʟᴀᴛᴇ*
┋ ◉ *ʀᴀᴛᴇ*
┋ ◉ *ᴄᴏᴜᴘʟᴇ*
┋ ◉ *ғᴀᴍɪʟʏ*
╰━━━━∙⋆⋅⋆∙━ ─┉─• ─⊷

> ${config.DESCRIPTION}`;

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
                        newsletterName: 'ᴄʀɪss ᴠᴇᴠᴏ',
                        serverMessageId: 143
                    }
                }
            },
            { quoted: mek }
        );

    } catch (e) {
        console.log(e);
        reply(`${e}`);
    }
});

// other menu

cmd({
    pattern: "othermenu",
    desc: "menu the bot",
    category: "menu",
    react: "🤖",
    filename: __filename
}, 
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        let dec = `〘 𝗢𝗧𝗛𝗘𝗥 𝗠𝗘𝗡𝗨 〙

╭┈┈┈┈┈┉┉┉┈┈┈┈┈┈┈⪼
┋ ☻ *.ᴍᴏᴠɪᴇ*
┋ ☻ *.ɢꜱᴛᴀʟᴋ*
┋ ☻ *.ɢᴘᴀꜱꜱ*
┋ ☻ *.ɢɪᴛᴄʟᴏɴᴇ*
┋ ☻ *.ʀᴇᴘᴏ*
┋ ☻ *.ᴅᴇғɪɴᴇ*
┋ ☻ *.ᴜʀʟ*
┋ ☻ *.sᴀᴠᴇ*
┋ ☻ *.ϙᴜᴏᴛᴇ*
┋ ☻ *.sᴛᴀᴛᴜs*
┋ ☻ *.sʀᴇᴘᴏ*
┋ ☻ *.ɴᴘᴍ*
╰━━━━∙⋆⋅⋆∙━ ─┉┉─⊷

> ${config.DESCRIPTION}`;

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
                        newsletterName: 'ᴄʀɪss ᴠᴇᴠᴏ',
                        serverMessageId: 143
                    }
                }
            },
            { quoted: mek }
        );

    } catch (e) {
        console.log(e);
        reply(`${e}`);
    }
});

// main menu

cmd({
    pattern: "mainmenu",
    desc: "menu the bot",
    category: "menu",
    react: "🗿",
    filename: __filename
}, 
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        let dec = `〘 𝗠𝗔𝗜𝗡 𝗠𝗘𝗡𝗨 〙

╭─────────────
┋ ◕ *ᴀʟɪᴠᴇ* 
┋ ◕ *ᴀʟɪᴠᴇ2* 
┋ ◕ *ʟɪᴠᴇ*
┋ ◕ *ʙᴏᴛ*
┋ ◕ *ᴍᴇɴᴜ* 
┋ ◕ *ᴀʟʟᴍᴇɴᴜ* 
┋ ◉ *ʟɪsᴛ*
┋ ◕ *sᴜᴘᴘᴏʀᴛ* 
┋ ◕ *sʏsᴛᴇᴍ* 
┋ ◕ *ᴘɪɴɢ* 
┋ ◕ *ʀᴜɴᴛɪᴍᴇ* 
┋ ◕ *ᴜᴘᴅᴀᴛᴇ*
┋ ◕ *ɪɴғᴏ*
┋ ◕ *ᴀʙᴏᴜᴛ*
┋ ◕ *ᴛɪɴʏᴜʀʟ*
┋ ◕ *ᴏʙғ/ᴏʙғᴜsᴄᴀᴛᴇ*
┋ ◉ *ϙʀᴄᴏᴅᴇ*
┋ ◕ *ʙᴀsᴇ64*
┋ ◕ *ᴅᴇʙᴀsᴇ64*
┋ ◕ *ғᴇᴛᴄʜ / ᴀᴘɪ*
┋ ◕ *ɴᴘᴍɢᴜɪᴅᴇ*
┋ ◕ *ɴᴇᴡs* 
┋ ◕ *ᴡɪᴋɪ* 
╰━━━━∙⋆⋅⋆∙━ ─┉─ • ─┉─⊷-

> ${config.DESCRIPTION}`;

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
                        newsletterName: 'ᴄʀɪss ᴠᴇᴠᴏ',
                        serverMessageId: 143
                    }
                }
            },
            { quoted: mek }
        );

    } catch (e) {
        console.log(e);
        reply(`${e}`);
    }
});

// owner menu

cmd({
    pattern: "ownermenu",
    desc: "menu the bot",
    category: "menu",
    react: "🔰",
    filename: __filename
}, 
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        let dec = `〘 𝗢𝗪𝗡𝗘𝗥 𝗠𝗘𝗡𝗨 〙

╭───────────────⪼
┋⚉ *.ᴏᴡɴᴇʀ*
┋☻ *.ʀᴀɴᴋ*
┋⚉ *.ʀᴇᴘᴏ*
┋⚉ *.ʙᴏᴛ*
┋⚉ *.sᴜᴘᴘᴏʀᴛ*
┋☻ *.sᴜᴘᴘᴏʀᴛ2*
┋⚉ *.ᴄʜᴀɴɴᴇʟ*
┋⚉ *.ꜱʏꜱᴛᴇᴍ*
┋⚉ *.ᴠᴇrsɪᴏɴ*
┋⚉ *.ʙʟᴏᴄᴋ*
┋⚉ *.ᴜɴʙʟᴏᴄᴋ*
┋⚉ *.ᴄʟᴇᴀʀᴄʜᴀᴛs*
┋⚉ *.sᴇᴛᴘᴘ*
┋⚉ *.ʙʀᴏᴀᴅᴄᴀsᴛ*
┋⚉ *.ᴘɪɴɢ*
┋⚉ *.ᴘɪɴɢ2*
┋⚉ *.ᴊɪᴅ*
┋⚉ *.ɢᴊɪᴅ*
┋⚉ *.ᴊɪᴅ1*
┋⚉ *.ᴊɪᴅ2*
┋⚉ *.ʀᴇꜱᴛᴀʀᴛ*
┋⚉ *.ᴡʜᴀᴛsɴᴇᴡ*
┋⚉ *.ɴᴇᴡᴘʟᴜɢɪɴs*
┋⚉ *.ᴘᴀɪʀ 263xxx*
┋⚉ *.ᴘᴀɪʀ2 263xxx*
┋☻ *.sᴘᴀᴍ*
┋⚉ *.ɴᴇᴡᴘʟᴜɢɪɴs*
┋⚉ *.ᴀɴᴛɪᴅᴇʟᴇᴛᴇ*
┋ ☻ *.ᴅɪᴀʀʏ*
┋ ☻ *.sᴇᴛᴅɪᴀʀʏ*
┋ ☻ *.ʀᴇsᴇᴛᴅɪᴀʀʏ*
┋ ☻ *.ʀᴇsᴇᴛᴘᴀssᴡᴏʀᴅ*
┋ ☻ *.ᴅᴀɪʟʏғᴀᴄᴛs*
┋ ☻ *.ᴀɢᴇ*
┋ ☻ *.ᴛɪᴍᴇᴢᴏɴᴇ*
╰━━━━∙⋆⋅⋆∙━ ─┉─ • ─┉─⊷

> ${config.DESCRIPTION}`;

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
                        newsletterName: 'ᴄʀɪss ᴠᴇᴠᴏ',
                        serverMessageId: 143
                    }
                }
            },
            { quoted: mek }
        );

    } catch (e) {
        console.log(e);
        reply(`${e}`);
    }
});

// convert menu

cmd({
    pattern: "convertmenu",
    desc: "menu the bot",
    category: "menu",
    react: "🥀",
    filename: __filename
}, 
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        let dec = `𝗖𝗢𝗡𝗩𝗘𝗥𝗧 𝗠𝗘𝗡𝗨

╭─────────────⪼
┋ ☻ *ᴄᴏɴᴠᴇʀᴛ* 
┋ ☻ *ᴘᴅғ*
┋ ☻ *ᴛɢs*
┋ ☻ *ss* 
┋ ☻ *ᴛʀᴛ*
┋ ☻ *ᴛᴛs*
┋ ☻ *ᴠᴠ*
┋ ☻ *ғᴀɴᴄʏ*
┋ ☻ *sᴛᴇᴀʟ*
┋ ☻ *ᴛᴀᴋᴇ*
┋ ☻ *sᴛɪᴄᴋᴇʀ*
┋ ☻ *ʟᴏɢᴏ*
┋ ☻ *ʙɪɴᴀʀʏ*
┋ ☻ *ᴅᴇʙɪɴᴀʀʏ*
┋ ☻ *ᴇɴᴄᴏᴅᴇ*
┋ ☻ *ᴅᴇᴄᴏᴅᴇ*
┋ ☻ *ᴜʀʟᴇɴᴄᴏᴅᴇ*
┋ ☻ *ᴜʀʟᴅᴇᴄᴏᴅᴇ*
┋ ☻ *ᴛɪɴʏᴜʀʟ*
┋ ☻ *ᴜʀʟ / ᴛᴏᴜʀʟ*
╰━━━━∙⋆⋅⋆∙━ ─┉─ •┉─⊷

> ${config.DESCRIPTION}`;

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
                        newsletterName: 'ᴄʀɪss ᴠᴇᴠᴏ',
                        serverMessageId: 143
                    }
                }
            },
            { quoted: mek }
        );

    } catch (e) {
        console.log(e);
        reply(`${e}`);
    }
});


// anmie menu 

cmd({
    pattern: "toolsmenu",
    desc: "menu the bot",
    category: "menu",
    react: "🧚",
    filename: __filename
}, 
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
          let dec = `〘 𝗧𝗢𝗢𝗟𝗦 𝗠𝗘𝗡𝗨 〙

╭────────────⪼
┋ ☻ *.ᴋɪss*
┋ ☻ *.ʜᴀɴᴅ*
┋ ☻ *.ʜᴀᴘᴘʏ*
┋ ☻ *.ʜᴇᴀʀᴛ*
┋ ☻ *.ᴀɴɢᴇʀ*
┋ ☻ *.sᴀᴅ*
┋ ☻ *.sʜʏ*
┋ ☻ *.ᴍᴏᴏɴ*
┋ ☻ *.ᴄᴏɴғᴜsᴇᴅ*
┋ ☻ *.ɴɪᴋᴀʟ*
╰━━━━∙⋆⋅⋆∙━ ─ • ─┉─⊷


> ${config.DESCRIPTION}`;

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
                        newsletterName: 'ᴄʀɪss ᴠᴇᴠᴏ',
                        serverMessageId: 143
                    }
                }
            },
            { quoted: mek }
        );

    } catch (e) {
        console.log(e);
        reply(`${e}`);
    }
});


// ai menu 

cmd({
    pattern: "aimenu",
    desc: "menu the bot",
    category: "menu",
    react: "🤖",
    filename: __filename
}, 
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        let dec = `〘 𝗔𝗜 𝗠𝗘𝗡𝗨 〙

╭─────────────⪼
┋ ☻ *ᴀɪ* 
┋ ☻ *ɢᴘᴛ*
┋ ☻ *ᴍᴀʟᴠɪɴ*
┋ ☻ *ɢᴇᴍɪɴɪ*
┋ ☻ *ɢᴘᴛ3*
┋ ☻ *ᴍɪsᴛʀᴀᴀɪ*
┋ ☻ *ʟʟᴀᴍᴀ3*
┋ ☻ *ɢᴘᴛ4o*
┋ ☻ *ᴍᴀʟᴠɪɴᴀɪ*
┋ ☻ *ᴀɪɪᴍɢ*
┋ ☻ *ɢᴇɴᴇʀᴀᴛᴇɪᴍɢ*
╰━━━━∙⋆⋅⋆∙━ ─ • ─┉─⊷

> ${config.DESCRIPTION}`;

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
                        newsletterName: 'ᴄʀɪss ᴠᴇᴠᴏ',
                        serverMessageId: 143
                    }
                }
            },
            { quoted: mek }
        );

    } catch (e) {
        console.log(e);
        reply(`${e}`);
    }
});

