const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_16_24_07_19_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTIwLFxuICAgICAgICAyNTUsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTYxLFxuICAgICAgICAxOTIsXG4gICAgICAgIDQyLFxuICAgICAgICAxODgsXG4gICAgICAgIDI2LFxuICAgICAgICAxOTksXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTE5LFxuICAgICAgICA2OSxcbiAgICAgICAgOSxcbiAgICAgICAgMjI1LFxuICAgICAgICAxNTcsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTE4LFxuICAgICAgICAyMDYsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMzcsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjAwLFxuICAgICAgICA3MSxcbiAgICAgICAgMTM4LFxuICAgICAgICAxOSxcbiAgICAgICAgMjEzLFxuICAgICAgICA5NCxcbiAgICAgICAgNzAsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTcxLFxuICAgICAgICAxMzcsXG4gICAgICAgIDkyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE1NCxcbiAgICAgICAgMjM4LFxuICAgICAgICA4OCxcbiAgICAgICAgMTEsXG4gICAgICAgIDY4LFxuICAgICAgICA2OSxcbiAgICAgICAgMjI2LFxuICAgICAgICA5MixcbiAgICAgICAgMTA0LFxuICAgICAgICAzMCxcbiAgICAgICAgMTAsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMjM3LFxuICAgICAgICAyMjgsXG4gICAgICAgIDIzNixcbiAgICAgICAgMzcsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMjUxLFxuICAgICAgICAyLFxuICAgICAgICAxNjksXG4gICAgICAgIDkwLFxuICAgICAgICAxNjEsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMjM1LFxuICAgICAgICAxMjAsXG4gICAgICAgIDE3MixcbiAgICAgICAgMjMwLFxuICAgICAgICAxNDMsXG4gICAgICAgIDE4MCxcbiAgICAgICAgNDcsXG4gICAgICAgIDcwLFxuICAgICAgICAxMDNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDg4LFxuICAgICAgICA5LFxuICAgICAgICA2MyxcbiAgICAgICAgOTMsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMjQxLFxuICAgICAgICAyMzAsXG4gICAgICAgIDI4LFxuICAgICAgICAyNCxcbiAgICAgICAgMjQwLFxuICAgICAgICAxOTUsXG4gICAgICAgIDI0MixcbiAgICAgICAgNCxcbiAgICAgICAgNDksXG4gICAgICAgIDE5MixcbiAgICAgICAgMjI5LFxuICAgICAgICA5OCxcbiAgICAgICAgOTQsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTEwLFxuICAgICAgICAxNDUsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTAzLFxuICAgICAgICAxMixcbiAgICAgICAgMTQyLFxuICAgICAgICAxOTksXG4gICAgICAgIDg5LFxuICAgICAgICAxMjksXG4gICAgICAgIDE0LFxuICAgICAgICAyNTAsXG4gICAgICAgIDQ4LFxuICAgICAgICAxMDBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzcsXG4gICAgICAgIDgzLFxuICAgICAgICAxODcsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxMixcbiAgICAgICAgMTc1LFxuICAgICAgICAyNDUsXG4gICAgICAgIDEzMyxcbiAgICAgICAgNjgsXG4gICAgICAgIDQzLFxuICAgICAgICAxNTMsXG4gICAgICAgIDU4LFxuICAgICAgICAxNDUsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTUwLFxuICAgICAgICAxMDYsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTk1LFxuICAgICAgICA2NixcbiAgICAgICAgMTE0LFxuICAgICAgICAyMDgsXG4gICAgICAgIDI0NixcbiAgICAgICAgMjQ2LFxuICAgICAgICAxNDEsXG4gICAgICAgIDE3NCxcbiAgICAgICAgNTQsXG4gICAgICAgIDIsXG4gICAgICAgIDE3MixcbiAgICAgICAgMjQsXG4gICAgICAgIDE1MyxcbiAgICAgICAgOTRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDgsXG4gICAgICAgIDM3LFxuICAgICAgICA3NyxcbiAgICAgICAgMTUyLFxuICAgICAgICAxNzIsXG4gICAgICAgIDg5LFxuICAgICAgICA0OCxcbiAgICAgICAgMzIsXG4gICAgICAgIDQ4LFxuICAgICAgICAxNTEsXG4gICAgICAgIDQ1LFxuICAgICAgICAyMjksXG4gICAgICAgIDIxMyxcbiAgICAgICAgMjAzLFxuICAgICAgICAxMTIsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMjUzLFxuICAgICAgICAxMzksXG4gICAgICAgIDE0MixcbiAgICAgICAgMTE3LFxuICAgICAgICAxNjgsXG4gICAgICAgIDY1LFxuICAgICAgICAxMTksXG4gICAgICAgIDQzLFxuICAgICAgICAxNTEsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjA5LFxuICAgICAgICAxNjAsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTM5LFxuICAgICAgICAxNzUsXG4gICAgICAgIDk5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTU0LFxuICAgICAgICA5NyxcbiAgICAgICAgMTg3LFxuICAgICAgICAxNzQsXG4gICAgICAgIDIxMyxcbiAgICAgICAgNSxcbiAgICAgICAgNzYsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTM3LFxuICAgICAgICAyNDMsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjI4LFxuICAgICAgICA5NixcbiAgICAgICAgODksXG4gICAgICAgIDI2LFxuICAgICAgICA1NSxcbiAgICAgICAgMzgsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxOTUsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjAzLFxuICAgICAgICAxNzEsXG4gICAgICAgIDE1LFxuICAgICAgICAyMTIsXG4gICAgICAgIDI0NyxcbiAgICAgICAgODksXG4gICAgICAgIDksXG4gICAgICAgIDY0LFxuICAgICAgICA2MixcbiAgICAgICAgODRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDYsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICA2N1xuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICA0NixcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICA5MixcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDU3XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNyxcbiAgICAgICAgMTQwLFxuICAgICAgICAxNjIsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTcsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTUsXG4gICAgICAgIDE0NyxcbiAgICAgICAgOTcsXG4gICAgICAgIDEwOSxcbiAgICAgICAgNzMsXG4gICAgICAgIDM3LFxuICAgICAgICA4LFxuICAgICAgICAyMyxcbiAgICAgICAgMTk5LFxuICAgICAgICAxMTAsXG4gICAgICAgIDE4OCxcbiAgICAgICAgNyxcbiAgICAgICAgMTA3LFxuICAgICAgICA2OCxcbiAgICAgICAgNTAsXG4gICAgICAgIDIxNCxcbiAgICAgICAgNjQsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTkzLFxuICAgICAgICA2MCxcbiAgICAgICAgNzYsXG4gICAgICAgIDIwMCxcbiAgICAgICAgNTIsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxMTcsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTgsXG4gICAgICAgIDIxMixcbiAgICAgICAgNjQsXG4gICAgICAgIDMyLFxuICAgICAgICAyOCxcbiAgICAgICAgMTYsXG4gICAgICAgIDExMCxcbiAgICAgICAgMjM2LFxuICAgICAgICA2MSxcbiAgICAgICAgMjU0LFxuICAgICAgICA0LFxuICAgICAgICA5MSxcbiAgICAgICAgMTgzLFxuICAgICAgICAyMyxcbiAgICAgICAgMzEsXG4gICAgICAgIDU0LFxuICAgICAgICAxNTEsXG4gICAgICAgIDIyMSxcbiAgICAgICAgODQsXG4gICAgICAgIDExMixcbiAgICAgICAgMTE5LFxuICAgICAgICA0MCxcbiAgICAgICAgMjAsXG4gICAgICAgIDg4LFxuICAgICAgICAyNTAsXG4gICAgICAgIDg5LFxuICAgICAgICAxMzAsXG4gICAgICAgIDMsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxMzdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE1NSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCIyZVRZU2cyUURIaHNCeVM4elJGeHgxS0ZiNFVjTUVybDBtQUFNZnEyLzNvPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjk0NzYyODkwOTAxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCJCRUQxNEY2MEQ2N0Y3QUNENTg0QzA1NUU4MkYwODZEN1wiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjE0MDYyOTRcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI5NDc2Mjg5MDkwMUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiMkM4RjhBQzY0RjlDREU2NTY4RkMyODE2RkE2NkVGOUFcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIxNDA2Mjk2XG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIkpxbFA4Zl9wU3lhYUNxUEJYTFNzendcIixcbiAgXCJwaG9uZUlkXCI6IFwiY2U3NDRkMzAtNDMyNS00NTA5LWFjOTItNmM0ZjUzOWIxY2M4XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDUyLFxuICAgICAgMjMsXG4gICAgICAxMTIsXG4gICAgICAxNSxcbiAgICAgIDE4NixcbiAgICAgIDEzNyxcbiAgICAgIDE0LFxuICAgICAgOCxcbiAgICAgIDIyOCxcbiAgICAgIDI1NCxcbiAgICAgIDI0MSxcbiAgICAgIDIxMCxcbiAgICAgIDE5MyxcbiAgICAgIDMwLFxuICAgICAgMjE2LFxuICAgICAgMjI0LFxuICAgICAgNDksXG4gICAgICAxOTksXG4gICAgICAxMjksXG4gICAgICA4MFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IGZhbHNlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjMyLFxuICAgICAgMTkyLFxuICAgICAgNzMsXG4gICAgICA1OSxcbiAgICAgIDExNyxcbiAgICAgIDQ3LFxuICAgICAgMzUsXG4gICAgICAxNTYsXG4gICAgICAxNTIsXG4gICAgICAxNTUsXG4gICAgICAzNixcbiAgICAgIDY2LFxuICAgICAgMTQ1LFxuICAgICAgMTY4LFxuICAgICAgMTgxLFxuICAgICAgMTY2LFxuICAgICAgNTgsXG4gICAgICAxMDQsXG4gICAgICAxNDcsXG4gICAgICAyMTBcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNJWHMwdllERU0rbTZyUUdHQVVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIk5uTEd1TFJWYjFSOUhPdlJLeWMwNk04UVJlUmRRWUJZcVUvUnZNVStGMms9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiUG9DQlNLblhaN05OYjhuaWVEWGhRaU5yTDFYUkVuOEtWWlV4RE5TZnNGdmVXM2M3VElQSW1WTlo4dWxxcUkvejJtZ0VKTVM4QW1JN1NZOUVJQXBkRFE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiWXUvd0pBWEJMQ1BLOExLTWVTWC82YlMvdFUvZ0gwK2dyZmp6eUFRWXZDUFpxKzNPWm44eFp0RGlxRzVxWFNQdndQd29ySzk3RWVoRE4xRzZ1SnZ3aUE9PVwiXG4gIH0sXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5NDc2Mjg5MDkwMTo4NkBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMTE1MzQ5OTM2Njg1MTAxOjg2QGxpZFwiLFxuICAgIFwibmFtZVwiOiBcIkNcIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjk0NzYyODkwOTAxOjg2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICA1MixcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDEwNVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIxNDA2MjkwLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBT0ZyXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFPRnEuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJiNVp3M1ErN3RSMWZ5ckMyaDFnSHVpb2VINEdYb3dzalR0WlRReXZ1RzNVPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjEwNTQxMjc2MjEsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQU9Gci5qc29uIjogIntcImtleURhdGFcIjpcIlRCMnlNb1lnZVczbjQyOWFGcUJ1MERSVWRnVENrT3M2RnVrcEhIbmVjbHc9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTA1NDEyNzYyMSxcImN1cnJlbnRJbmRleFwiOjIsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIwXCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBT0ZzLmpzb24iOiAie1wia2V5RGF0YVwiOlwiMHN2bUVUbzA5UDZuSmdqVlhwY0I2ZktQSEs5Nk1yVWJPQXllYnAxaW5yQT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxMDU0MTI3NjIxLFwiY3VycmVudEluZGV4XCI6MyxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFPRnQuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJTc2p5bVhjQW95bXo2dTZlWC9CQk4vaG1jbHFhUHNISkVLWVBsamdiVU44PVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjEwNTQxMjc2MjEsXCJjdXJyZW50SW5kZXhcIjo0LFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcyMTQwNjI1OTQyOFwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
