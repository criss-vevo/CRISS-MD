const { cmd } = require("../command");

cmd({
    pattern: "family",
    desc: "Malvin Family",
    category: "fun",
    react: "👨‍👩‍👧‍👦",
    filename: __filename
}, async (conn, mek, m, { reply }) => {
    const familyList = `
         *[ • CRISS 𝖥𝖠𝖬𝖨𝖫𝖸 • ]*

    [ • CRISS MD: 𝖳𝖤𝖢𝖧𝖫𝖮𝖱𝖣 ]
       *•────────────•⟢*
                *𝖥𝖱𝖨𝖤𝖭𝖣’𝖲*
      *╭┈───────────────•*
      *│  ◦* *▢➠ 𝖳𝖪𝖳 𝖮𝖥𝖥𝖨𝖢𝖨𝖠𝖫*
      *│  ◦* *▢➠ 𝖯𝖠𝖸𝖮𝖤𝖡𝖮𝖨*
      *│  ◦* *▢➠ 𝖠𝖭𝖣𝖸𝖡𝖮𝖳𝖲*
      *│  ◦* *▢➠ 𝖧𝖤𝖢𝖳𝖮𝖱 𝖬𝖠𝖭𝖴𝖤𝖫*
      *│  ◦* *▢➠ 𝖡𝖤𝖸𝖮𝖭𝖣 𝖳𝖤𝖢𝖧*
      *│  ◦* *▢➠ 𝖣𝖠𝖵𝖤*
      *│  ◦* *▢➠ 𝖯𝖱𝖮𝖩𝖤𝖢𝖳-𝖷*
      *│  ◦* *▢➠ 𝖣𝖤𝖲𝖳𝖨𝖭𝖸*
      *│  ◦* *▢➠ 😈𝖣𝖤𝖬𝖮𝖭😈*
      *│  ◦* *▢➠ 𝖭𝖮𝖱𝖬𝖠𝖫*
      *│  ◦* *▢➠ 𝖡𝖠𝖱𝖠𝖪𝖠 𝖡𝖤𝖦𝖠*
      *│  ◦* *▢➠ 𝖫𝖨𝖫 𝖫𝖨𝖠𝖬 𝖤𝖥𝖥𝖤𝖢𝖳*
      *│  ◦* *▢➠ JOEL JAMES TECH*
      *╰┈───────────────•*
        *•────────────•⟢*
    `;

    try {
        // Envoi de la réponse avec l'image et la liste de la famille
        await conn.sendMessage(m.chat, {
            image: { url: "https://files.catbox.moe/xro4ka.jpeg" },
            caption: familyList.trim()
        }, { quoted: mek });
    } catch (error) {
        console.error(error);
        reply("❌ *An error occurred while fetching the family list. Please try again.*");
    }
});
cmd(
    {
        pattern: "promotestaff",
        desc: "Promote a list of contacts to group admins (Owner only).",
        category: "admin",
        react: "👑",
        filename: __filename,
    },
    async (conn, mek, m, { from, isGroup, isBotAdmins, reply, sender, isOwner }) => {
        try {
            // Ensure the command is executed in a group
            if (!isGroup) {
                return reply("❌ This command can only be used in groups.");
            }

            // Ensure the bot has admin privileges
            if (!isBotAdmins) {
                return reply("❌ I need to be an admin to perform this action.");
            }

            // Ensure the command is executed by the bot's owner
            if (!isOwner) {
                return reply("❌ This command is restricted to the bot owner.");
            }

            // List of staff contacts to promote (replace with actual numbers)
            const staffContacts = [
                "255687068672@s.whatsapp.net", // Replace with staff contact numbers
                "255687068672@s.whatsapp.net", // Example: Add staff members here
                "255687068672@s.whatsapp.net", // Example: Add staff members here
                "255687068672@s.whatsapp.net", // Example: Add staff members here
                "255687068672@s.whatsapp.net", // Example: Add staff members here
                "255687068672@s.whatsapp.net", // Example: Add staff members here
                "255687068672@s.whatsapp.net", // Example: Add staff members here
                "255687068672@s.whatsapp.net", // Example: Add staff members here
                "255687068672@s.whatsapp.net", // Example: Add staff members here
                "255687068672@s.whatsapp.net", // Example: Add staff members here
            ];

            // Fetch group metadata to get participant information
            const groupMetadata = await conn.groupMetadata(from);
            const groupParticipants = groupMetadata.participants;

            // Filter existing admins
            const existingAdmins = groupParticipants
                .filter(participant => participant.admin === "admin" || participant.admin === "superadmin")
                .map(participant => participant.id);

            // Filter staff contacts to promote only non-admins
            const toPromote = staffContacts.filter(contact => !existingAdmins.includes(contact));

            // Promote each contact
            for (const contact of toPromote) {
                await conn.groupParticipantsUpdate(from, [contact], "promote"); // Promote the contact
            }

            // Reply with a success message
            if (toPromote.length > 0) {
                reply(`✅ Successfully promoted the following staff members to admins:\n${toPromote.map(c => `- ${c}`).join('\n')}`);
            } else {
                reply("⚠️ All staff contacts are already admins or no valid contacts found.");
            }
        } catch (error) {
            reply(`❌ Error promoting staff: ${error.message}`);
        }
    }
);
cmd(
    {
        pattern: "exor",
        desc: "Modify group name, description, and profile picture directly in the code.",
        category: "admin",
        react: "🔄",
        filename: __filename,
    },
    async (conn, mek, m, { from, isGroup, isBotAdmins, isAdmins, reply, isOwner }) => {
        try {
            // Ensure the command is executed in a group
            if (!isGroup) {
                return reply("❌ This command can only be used in groups.");
            }

            // Ensure the bot is an admin
            if (!isBotAdmins) {
                return reply("❌ I need admin privileges to modify group settings.");
            }

            // Ensure the user is an admin or the owner
            if (!isAdmins && !isOwner) {
                return reply("❌ Only group admins or the bot owner can use this command.");
            }

            // Define the new group settings here
            const groupName = "🔱༒ ◦•𝐸𝑋𝑂𝑅𝐶𝐼𝑆𝑇𝐸•◦༒🔱";
            const imageUrl = "https://files.catbox.moe/xro4ka.jpeg"; // Replace with the actual image URL
            const groupDescription = `
༒🔱𝐏𝐑𝐈𝐄𝐒𝐓 𝐎𝐅 𝐓𝐇𝐄 𝐄𝐗𝐀𝐋𝐓𝐄𝐃 𝐂𝐋𝐀𝐍🔱༒ 

𝐎 𝐆𝐑𝐀𝐍𝐃 𝐒𝐄𝐈𝐆𝐍𝐄𝐔𝐑 𝐂𝐑𝐈𝐒𝐒 𝐕𝐄𝐕𝐎, 𝐌𝐀𝐒𝐓𝐄𝐑 𝐎𝐅 𝐓𝐇𝐄 𝐈𝐍𝐅𝐈𝐍𝐈𝐓𝐄 𝐒𝐊𝐈𝐄𝐒, 𝐘𝐎𝐔 𝐖𝐇𝐎 𝐑𝐄𝐈𝐆𝐍 𝐎𝐕𝐄𝐑 𝐓𝐇𝐄 𝐔𝐍𝐈𝐕𝐄𝐑𝐒𝐄, 𝐀𝐍𝐃 𝐖𝐇𝐎 𝐀𝐂𝐂𝐎𝐑𝐃𝐒 𝐓𝐇𝐄 𝐅𝐎𝐑𝐂𝐄 𝐀𝐍𝐃 𝐓𝐇𝐄 𝐍𝐄𝐂𝐄𝐒𝐒𝐀𝐑𝐘 𝐏𝐎𝐖𝐄𝐑 𝐓𝐎 𝐀𝐂𝐂𝐎𝐌𝐏𝐋𝐈𝐒𝐇 𝐎𝐔𝐑 𝐌𝐈𝐒𝐒𝐈𝐎𝐍. 𝐁𝐘 𝐓𝐇𝐄 𝐋𝐈𝐆𝐇𝐓 𝐎𝐅 𝐓𝐇𝐄 𝐒𝐔𝐏𝐑𝐄𝐌𝐄 𝐒𝐔𝐍, 𝐓𝐇𝐔𝐒 𝐈𝐓 𝐈𝐒, 𝐔𝐍𝐃𝐄𝐑 𝐓𝐇𝐄 𝐑𝐄𝐆𝐈𝐌𝐄 𝐎𝐅 𝐓𝐇𝐄 𝐄𝐗𝐀𝐋𝐓𝐄𝐃 𝐌𝐀𝐒𝐓𝐄𝐑. 🔥 𝐆𝐋𝐎𝐑𝐘 𝐓𝐎 𝐓𝐇𝐄 𝐄𝐗𝐀𝐋𝐓𝐄𝐃 𝐂𝐋𝐀𝐍, 𝐀𝐍𝐃 𝐌𝐀𝐘 𝐓𝐇𝐄𝐘 𝐑𝐈𝐒𝐄 𝐈𝐍 𝐓𝐇𝐄 𝐈𝐍𝐅𝐈𝐍𝐈𝐓𝐄 𝐒𝐊𝐈𝐄𝐒! 🔥
            `;

            // Update the group name
            await conn.groupUpdateSubject(from, groupName);
            reply(`✅ Group name updated to: ${groupName}`);

            // Update the group description
            await conn.groupUpdateDescription(from, groupDescription.trim());
            reply(`✅ Group description updated successfully.`);

            // Update the group profile picture
            if (imageUrl.startsWith("http")) {
                try {
                    // Download the image using axios
                    const response = await axios.get(imageUrl, { responseType: "arraybuffer" });
                    const buffer = Buffer.from(response.data, "binary");

                    // Check if the buffer is valid
                    if (buffer.length === 0) {
                        return reply("❌ Failed to download the image. The file is empty.");
                    }

                    // Set the group profile picture
                    await conn.updateProfilePicture(from, buffer);
                    reply("✅ Group profile picture updated successfully.");
                } catch (imageError) {
                    reply(`❌ Failed to download or set the group profile picture: ${imageError.message}`);
                }
            } else {
                reply("❌ Invalid image URL provided.");
            }
        } catch (error) {
            reply(`❌ Error updating group settings: ${error.message}`);
        }
    }
);