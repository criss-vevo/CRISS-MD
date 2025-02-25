const axios = require('axios')
const fetch = require('node-fetch');
const {cmd , commands} = require('../command')
// ship command 
const toM = (a) => '@' + a.split('@')[0];
cmd({
    pattern: "ship",
    alias: ["cup", "love"],
    desc: "Randomly pairs the command user with another group member.",
    react: "❤️",
    category: "fun",
    filename: __filename,
}, 
async (conn, mek, m, { from, isGroup, groupMetadata, reply }) => {
    try {
        // Ensure command is used in a group
        if (!isGroup) {
            return reply("This command can only be used in groups.");
        }

        // Get group participants
        const participants = groupMetadata.participants.map(p => p.id);

        if (participants.length < 2) {
            return reply("Not enough members to pair.");
        }

        // Sender of the command
        const sender = m.sender;

        // Randomly select another participant
        let randomParticipant;
        do {
            randomParticipant = participants[Math.floor(Math.random() * participants.length)];
        } while (randomParticipant === sender);

        // Pairing message
        const message = `${toM(sender)} ❤️ ${toM(randomParticipant)}\nCongratulations 💖🍻`;

        // Send the message with contextInfo
        await conn.sendMessage(from, {
            text: message,
            contextInfo: {
                mentionedJid: [sender, randomParticipant], // Mention both users
                forwardingScore: 999,
                isForwarded: true,
                forwardedNewsletterMessageInfo: {
                    newsletterJid: '120363306168354073@newsletter',
                    newsletterName: 'ᴄʀɪss ᴠᴇᴠᴏ',
                    serverMessageId: 143,
                },
            },
        });
    } catch (e) {
        console.error("Error in ship command:", e);
        reply("An error occurred while processing the command. Please try again.");
    }
});
// Insult

cmd({
  pattern: 'insult',
  desc: 'Get a random insult',
  category: "fun",
  react: '🤥',
},
async (Void, citel) => {
  try {
    let response = await axios.get('https://evilinsult.com/generate_insult.php?lang=en&type=json');
    let data = response.data;

    if (!data || !data.insult) {
      return citel.reply('Unable to retrieve an insult. Please try again later.');
    }

    let insult = data.insult;
    return citel.reply(`*Insult:* ${insult}`);
  } catch (error) {
    citel.reply(`Error: ${error.message || error}`);
  }
});

// joke 

cmd({
    pattern: "joke",
    desc: "😂 Get a random joke",
    react: "🤣",
    category: "fun",
    filename: __filename
},
async (conn, mek, m, { from, q, reply }) => {
    try {
        const url = 'https://official-joke-api.appspot.com/random_joke';  // API for random jokes
        const response = await axios.get(url);
        const joke = response.data;

        const jokeMessage = `
😂 *Here's a random joke for you!* 😂

*${joke.setup}*

${joke.punchline} 😄

> *© ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴄʀɪss ᴠᴇᴠᴏ*`;

        return reply(jokeMessage);
    } catch (e) {
        console.log(e);
        return reply("⚠️ En Error Appears.");
    }
});

// fact

cmd({
    pattern: "fact",
    desc: "🧠 Get a random fun fact",
    react: "🧠",
    category: "fun",
    filename: __filename
},
async (conn, mek, m, { from, q, reply }) => {
    try {
        const url = 'https://uselessfacts.jsph.pl/random.json?language=en';  // API for random facts
        const response = await axios.get(url);
        const fact = response.data.text;

        const funFact = `
🧠 *Random Fun Fact* 🧠

${fact}

Isn't that interesting? 😄
`;

        return reply(funFact);
    } catch (e) {
        console.log(e);
        return reply("⚠️ An error occurred while fetching a fun fact. Please try again later.");
    }
});
    

// fancy 

cmd({
  pattern: "fancy",
  alias: ['font', "style"],
  react: '✍️',
  desc: "Convert text into various fonts.",
  category: "tools",
  filename: __filename
}, async (conn, mek, m, { from, quoted, body, args, q, reply }) => {
  try {
    if (!q) {
      return reply("Please provide text to convert into fonts.");
    }

    let response = await axios.get('https://www.dark-yasiya-api.site/other/font?text=' + encodeURIComponent(q));
    let data = response.data;

    if (!data.status) {
      return reply("Error fetching fonts. Please try again later.");
    }

    let fontResults = data.result.map(font => '*' + font.name + ":*\n" + font.result).join("\n\n");
    
    // Message formatting
    let message = `*CRISS VEVO FANCY FONTS*:\n\n${fontResults}\n\n> *BY CRISS VEVO*`;

    // Sending the message with context info
    await conn.sendMessage(
      from,
      {
        text: message,
        contextInfo: {
          mentionedJid: [m.sender],
          forwardingScore: 999,
          isForwarded: true,
          forwardedNewsletterMessageInfo: {
            newsletterJid: '120363306168354073@newsletter',
            newsletterName: 'CRISS VEVO',
            serverMessageId: 143
          }
        }
      },
      { quoted: mek }
    );

  } catch (error) {
    console.error(error);
    reply("An error occurred while fetching fonts.");
  }
});

// pick-up line

cmd({
    pattern: "pickupline",
    alias: ["pickup"],
    desc: "Get a random pickup line from the API.",
    react: "💬",
    category: "fun",
    filename: __filename,
}, 
async (conn, mek, m, { from, reply }) => {
    try {
        // Fetch pickup line from the API
        const res = await fetch('https://api.popcat.xyz/pickuplines');
        
        if (!res.ok) {
            throw new Error(`API request failed with status ${res.status}`);
        }

        const json = await res.json();

        // Log the API response (for debugging purposes)
        console.log('JSON response:', json);

        // Format the pickup line message
        const pickupLine = `*Here's a pickup line for you:*\n\n"${json.pickupline}"\n\n> *© Powered By Nexus*`;

        // Send the pickup line to the chat
        await conn.sendMessage(from, { text: pickupLine }, { quoted: m });

    } catch (error) {
        console.error("Error in pickupline command:", error);
        reply("Sorry, something went wrong while fetching the pickup line. Please try again later.");
    }
});

// char

cmd({
    pattern: "character",
    alias: ["char"],
    desc: "Check the character of a mentioned user.",
    react: "🔥",
    category: "fun",
    filename: __filename,
}, 
async (conn, mek, m, { from, isGroup, text, reply }) => {
    try {
        // Ensure the command is used in a group
        if (!isGroup) {
            return reply("This command can only be used in groups.");
        }

        // Extract the mentioned user
        const mentionedUser = m.message.extendedTextMessage?.contextInfo?.mentionedJid?.[0];
        if (!mentionedUser) {
            return reply("Please mention a user whose character you want to check.");
        }

        // Define character traits
        const userChar = [
            "Sigma",
            "Generous",
            "Grumpy",
            "Overconfident",
            "Obedient",
            "Good",
            "Simp",
            "Kind",
            "Patient",
            "Pervert",
            "Cool",
            "Helpful",
            "Brilliant",
            "Sexy",
            "Hot",
            "Gorgeous",
            "Cute",
        ];

        // Randomly select a character trait
        const userCharacterSelection =
            userChar[Math.floor(Math.random() * userChar.length)];

        // Message to send
        const message = `Character of @${mentionedUser.split("@")[0]} is *${userCharacterSelection}* 🔥⚡`;

        // Send the message with mentions
        await conn.sendMessage(from, {
            text: message,
            mentions: [mentionedUser],
        }, { quoted: m });

    } catch (e) {
        console.error("Error in character command:", e);
        reply("An error occurred while processing the command. Please try again.");
    }

});

cmd({
    pattern: "minutor",
    desc: "Start a countdown timer for a specified duration.",
    react: "⏳",
    category: "utility",
    use: ".minutor <time><s|m|h>",
    filename: __filename,
}, async (conn, mek, m, { args, reply }) => {
    try {
        // Validate input
        if (!args[0]) {
            return reply("❌ Please provide a valid duration.\nExamples: `.minutor 10s`, `.minutor 5m`, `.minutor 1h`");
        }

        // Extract time value and unit
        const input = args[0];
        const timeValue = parseInt(input.slice(0, -1)); // Extract number
        const timeUnit = input.slice(-1).toLowerCase(); // Extract unit (s, m, h)

        if (isNaN(timeValue) || timeValue <= 0 || !["s", "m", "h"].includes(timeUnit)) {
            return reply("❌ Invalid format. Use `<number><s|m|h>`.\nExamples: `.minutor 10s`, `.minutor 5m`, `.minutor 1h`");
        }

        // Convert time to milliseconds
        let duration;
        switch (timeUnit) {
            case "s": // Seconds
                duration = timeValue * 1000;
                break;
            case "m": // Minutes
                duration = timeValue * 60 * 1000;
                break;
            case "h": // Hours
                duration = timeValue * 60 * 60 * 1000;
                break;
            default:
                return reply("❌ Unsupported time unit. Use `s` for seconds, `m` for minutes, or `h` for hours.");
        }

        // Notify user that the countdown has started
        reply(`⏳ Countdown started for ${timeValue}${timeUnit}. I'll notify you when the time is up!`);

        // Wait for the specified duration
        await new Promise(resolve => setTimeout(resolve, duration));

        // Send message after the time is up
        reply(`⏰ Time's up! ${timeValue}${timeUnit} have passed.\n\n> ᴘᴏᴡᴇʀᴇᴅ ʙʏ ɴᴇxᴜs ᴛᴇᴄʜ🧞‍♂️.`);
    } catch (error) {
        console.error("Error in minutor command:", error);
        reply("❌ An error occurred while starting the timer. Please try again.");
    }
});