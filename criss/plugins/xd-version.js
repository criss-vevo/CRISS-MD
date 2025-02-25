/*
Project Name : CRISS MD
Creator      : CRISS VEVO
Repo         : https://github.com/criss-vevo/CRISS-MD
Support      : wa.me/255687068672
*/




const axios = require('axios');
const config = require('../../settings');
const { cmd, commands } = require('../command');
const { fetchJson } = require('../functions');



cmd({
  pattern: 'version',
  react: '✔️',
  desc: 'Check the bot\'s version',
  category: 'info',
  filename: __filename
}, async (conn, mek, m, {
  from,
  quoted,
  body,
  isCmd,
  command,
  args,
  q,
  isGroup,
  sender,
  senderNumber,
  botNumber2,
  botNumber,
  pushname,
  isMe,
  isOwner,
  groupMetadata,
  groupName,
  participants,
  groupAdmins,
  isBotAdmins,
  isAdmins,
  reply
}) => {
  try {
    const packageName = require('../package.json');
    const currentVersion = packageName.version;

    const apiUrl = 'https://raw.githubusercontent.com/criss-vevo/CRISS-VMD/master/package.json';
    const response = await axios.get(apiUrl);
    const data = response.data;
    const latestVersion = data.version;

    let message = '';
    if (currentVersion === latestVersion) {
      message = `Your bot is up-to-date! 😊\n Current version is: ${currentVersion}`;
    } else {
      message = `Your ᴄʀɪss ᴍ𝙳 bot is outdated 😵!\n\n  Current version: ${currentVersion} \n Latest version: ${latestVersion}`;
    }

   // await reply(message);
    
 // } catch (error) {
  //  console.error('Error fetching version:', error);
   // await reply('Error fetching version. Please try again later.');
//  }
//});
       // Send the status message with an image
        await conn.sendMessage(from, { 
            image: { url: `https://files.catbox.moe/xro4ka.jpeg` },  // Image URL
            caption: message,
            contextInfo: {
                mentionedJid: [m.sender],
                forwardingScore: 999,
                isForwarded: true,
                forwardedNewsletterMessageInfo: {
                    newsletterJid: '120363306168354073@newsletter',
                    newsletterName: '『 ᴄʀɪss ᴍᴅ』',
                    serverMessageId: 143
                }
            }
        }, { quoted: mek });

    } catch (e) {
        console.error("Error in checking Criss Md Version:", e);
        reply(`An error Occured Fetching Version 😕`);
    }
});
