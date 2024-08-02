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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_21_44_08_02_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzIsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTQ1LFxuICAgICAgICA3MSxcbiAgICAgICAgMixcbiAgICAgICAgOSxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxMTAsXG4gICAgICAgIDEwNixcbiAgICAgICAgMjM0LFxuICAgICAgICA1OSxcbiAgICAgICAgMTc3LFxuICAgICAgICAyMDEsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMSxcbiAgICAgICAgMTksXG4gICAgICAgIDEyLFxuICAgICAgICA1MSxcbiAgICAgICAgMTAsXG4gICAgICAgIDc1LFxuICAgICAgICAzLFxuICAgICAgICA4MixcbiAgICAgICAgMzUsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTg1LFxuICAgICAgICAxMjcsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjE2LFxuICAgICAgICAxNTgsXG4gICAgICAgIDI0OSxcbiAgICAgICAgNzMsXG4gICAgICAgIDEwNlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMzMsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjE2LFxuICAgICAgICAyMDEsXG4gICAgICAgIDExNixcbiAgICAgICAgMjM1LFxuICAgICAgICAyMyxcbiAgICAgICAgNzcsXG4gICAgICAgIDE3OSxcbiAgICAgICAgODMsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTY0LFxuICAgICAgICAxMDYsXG4gICAgICAgIDM2LFxuICAgICAgICAyMjIsXG4gICAgICAgIDEwMSxcbiAgICAgICAgNzgsXG4gICAgICAgIDI4LFxuICAgICAgICAxMTYsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTIzLFxuICAgICAgICA2MyxcbiAgICAgICAgMTc5LFxuICAgICAgICAxNzIsXG4gICAgICAgIDEwMSxcbiAgICAgICAgNzYsXG4gICAgICAgIDE3LFxuICAgICAgICAyNTMsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTY1LFxuICAgICAgICAyMTIsXG4gICAgICAgIDg2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjAsXG4gICAgICAgIDE2NixcbiAgICAgICAgOSxcbiAgICAgICAgMjQ3LFxuICAgICAgICA4NCxcbiAgICAgICAgMzIsXG4gICAgICAgIDE1LFxuICAgICAgICA0LFxuICAgICAgICAxNjMsXG4gICAgICAgIDEwMixcbiAgICAgICAgMyxcbiAgICAgICAgMjI5LFxuICAgICAgICAxODcsXG4gICAgICAgIDQsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTc1LFxuICAgICAgICA2LFxuICAgICAgICAxMDUsXG4gICAgICAgIDY1LFxuICAgICAgICAxOTUsXG4gICAgICAgIDM4LFxuICAgICAgICAxODksXG4gICAgICAgIDMsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTAsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTEzLFxuICAgICAgICA1OCxcbiAgICAgICAgMjMwLFxuICAgICAgICAxMTUsXG4gICAgICAgIDY5LFxuICAgICAgICA5NlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4NixcbiAgICAgICAgMjIyLFxuICAgICAgICAzLFxuICAgICAgICAxNixcbiAgICAgICAgMjMzLFxuICAgICAgICAxOTgsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTEsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjI1LFxuICAgICAgICAxODksXG4gICAgICAgIDc0LFxuICAgICAgICA0MyxcbiAgICAgICAgMTk2LFxuICAgICAgICA0NSxcbiAgICAgICAgMTMwLFxuICAgICAgICAxNzAsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMjA2LFxuICAgICAgICA0NSxcbiAgICAgICAgMTUwLFxuICAgICAgICAxOTQsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTgzLFxuICAgICAgICA1NyxcbiAgICAgICAgMTEsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTEsXG4gICAgICAgIDY3LFxuICAgICAgICAyMzksXG4gICAgICAgIDE0OCxcbiAgICAgICAgODBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIxNixcbiAgICAgICAgMTc4LFxuICAgICAgICAyMzUsXG4gICAgICAgIDM4LFxuICAgICAgICAxMyxcbiAgICAgICAgMTEwLFxuICAgICAgICAyMDMsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTAwLFxuICAgICAgICAxLFxuICAgICAgICAxNTMsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjQ5LFxuICAgICAgICA4MyxcbiAgICAgICAgMTc5LFxuICAgICAgICAxMjAsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxNTcsXG4gICAgICAgIDcsXG4gICAgICAgIDExNixcbiAgICAgICAgMTYzLFxuICAgICAgICA3LFxuICAgICAgICAyLFxuICAgICAgICAyMDEsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTU4LFxuICAgICAgICA3NCxcbiAgICAgICAgMTk1LFxuICAgICAgICAyMzcsXG4gICAgICAgIDExNSxcbiAgICAgICAgODhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI5LFxuICAgICAgICAxNzEsXG4gICAgICAgIDEwOSxcbiAgICAgICAgNzYsXG4gICAgICAgIDg4LFxuICAgICAgICAyMTcsXG4gICAgICAgIDk2LFxuICAgICAgICA4OSxcbiAgICAgICAgMTMzLFxuICAgICAgICA4MixcbiAgICAgICAgMTQsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMjA1LFxuICAgICAgICAyMzQsXG4gICAgICAgIDcwLFxuICAgICAgICAxMzAsXG4gICAgICAgIDI1MixcbiAgICAgICAgMjM5LFxuICAgICAgICAyMDgsXG4gICAgICAgIDE0MCxcbiAgICAgICAgNixcbiAgICAgICAgMzEsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTAwLFxuICAgICAgICAyMjAsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTA4LFxuICAgICAgICAxMCxcbiAgICAgICAgMTY3LFxuICAgICAgICAxNDksXG4gICAgICAgIDk0LFxuICAgICAgICAxMlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICA0NixcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICA4NixcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICA4MixcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDEwMVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAxMjNcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzIsXG4gICAgICAgIDQ5LFxuICAgICAgICA2OCxcbiAgICAgICAgNjMsXG4gICAgICAgIDY0LFxuICAgICAgICAxNjcsXG4gICAgICAgIDY1LFxuICAgICAgICAxNTQsXG4gICAgICAgIDE5OSxcbiAgICAgICAgNjAsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTM0LFxuICAgICAgICAxNzYsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxNixcbiAgICAgICAgMTQ4LFxuICAgICAgICA2NyxcbiAgICAgICAgMTI1LFxuICAgICAgICAxNTQsXG4gICAgICAgIDQzLFxuICAgICAgICA3MyxcbiAgICAgICAgMzMsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjE0LFxuICAgICAgICA2NSxcbiAgICAgICAgMCxcbiAgICAgICAgODgsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjA5LFxuICAgICAgICAxMzIsXG4gICAgICAgIDExNixcbiAgICAgICAgMTAyLFxuICAgICAgICAyMTksXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTM5LFxuICAgICAgICAxNSxcbiAgICAgICAgMjQyLFxuICAgICAgICA3MCxcbiAgICAgICAgNzYsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTg1LFxuICAgICAgICAxOCxcbiAgICAgICAgMTc1LFxuICAgICAgICAyNyxcbiAgICAgICAgNjIsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMjMyLFxuICAgICAgICAyMjcsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjEyLFxuICAgICAgICAyLFxuICAgICAgICAxMzMsXG4gICAgICAgIDEzNSxcbiAgICAgICAgNjcsXG4gICAgICAgIDE3LFxuICAgICAgICAxMjQsXG4gICAgICAgIDYwLFxuICAgICAgICAxMzgsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMyxcbiAgICAgICAgMTEyLFxuICAgICAgICAxMjgsXG4gICAgICAgIDE0M1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTE5LFxuICBcImFkdlNlY3JldEtleVwiOiBcIklYZUc3bXdUTmhxbmwrS1B3bDNySlIrNUVEVmlCZkR0b24vTWRYVnBjSUk9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjU2NzA2NjA4MTMxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCIzNUE1NjdBRjQ1NUI5MzcyMkZFNDJDNjEzNDczMDVENVwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjI2MzUwNzRcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiS1BkR1BPaHZRdU9ZM3RkVlA2cmpJd1wiLFxuICBcInBob25lSWRcIjogXCI2YTIzZWY2ZS0xNTA5LTQwOGQtODhkMi0xNmU0NDlmNzYyMjNcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjQ1LFxuICAgICAgMjA4LFxuICAgICAgMjMxLFxuICAgICAgMTI0LFxuICAgICAgMTI3LFxuICAgICAgMTUzLFxuICAgICAgMTg5LFxuICAgICAgMTYsXG4gICAgICAyOCxcbiAgICAgIDExMixcbiAgICAgIDUwLFxuICAgICAgMTQyLFxuICAgICAgNjYsXG4gICAgICAxMCxcbiAgICAgIDI1MCxcbiAgICAgIDY5LFxuICAgICAgMTg2LFxuICAgICAgMTM5LFxuICAgICAgMjI0LFxuICAgICAgMTA5XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEyMyxcbiAgICAgIDE5NixcbiAgICAgIDQyLFxuICAgICAgMTgyLFxuICAgICAgNDUsXG4gICAgICAyMTUsXG4gICAgICAxNzYsXG4gICAgICAxNTEsXG4gICAgICAxNTcsXG4gICAgICA4NixcbiAgICAgIDE2OCxcbiAgICAgIDc4LFxuICAgICAgNTAsXG4gICAgICAxMTAsXG4gICAgICAxNTcsXG4gICAgICA1MixcbiAgICAgIDIyMyxcbiAgICAgIDEwNixcbiAgICAgIDE2LFxuICAgICAgMTcwXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIjZGQ0FLNU5FXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyNTY3MDY2MDgxMzE6NjFAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjMxNjk2OTkyODc0NzUxOjYxQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ1BqLzdiUUdFTGVtdGJVR0dBTWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiRGNaalBaSkMyK09DTUk0MjZ4eFNKUkxCRFQzMXdtVkJnRXV0U1hZVWhpQT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJoZHc0cGNBRnNselFYdFBTbXRMUSsrSzhUQS9Vdkl6K2FoTDJDVERVcndQTUVRSjZURlpmbnhnTFdmVFF5dit3RXhqUTJoRHhlQzBsc25PcWdpeURBUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJNbW5WWE1jWWJFT1paOWJuTGI3cWRvWXl0WTJZc1IyWUFiTHpxU2thcUNpWmo3WjQwOWZ1RXpyY2hkU3NabmFKV3hiU1V5NHA4b2UzUEF3TmpQcDBqZz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyNTY3MDY2MDgxMzE6NjFAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAzMlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIyNjM1MDY3LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBUFlRXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFQWVEuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJoNGw4NWY2ajFtd2Z4dlFwaDROQng0czFNSDErZjJVbjR1WFVNVisyekJjPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE3MjE0NjY4NjksXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjI1NDMwODYwNDdcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "Roy",
  packname: process.env.PACK_NAME || "Royyy_the_boyy",
  botname : process.env.BOT_NAME  || "ROY",
  ownername:process.env.OWNER_NAME|| "ROY-BOT",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "Roy"  ).toUpperCase(),



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
