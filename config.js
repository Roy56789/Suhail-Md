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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_08_37_08_02_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjMyLFxuICAgICAgICAyNDAsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTcxLFxuICAgICAgICAxOTUsXG4gICAgICAgIDk0LFxuICAgICAgICAxOTksXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjIsXG4gICAgICAgIDcsXG4gICAgICAgIDQyLFxuICAgICAgICAxNyxcbiAgICAgICAgMTc4LFxuICAgICAgICA5NCxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxNjgsXG4gICAgICAgIDE2MCxcbiAgICAgICAgODYsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMjE0LFxuICAgICAgICA4MCxcbiAgICAgICAgNTcsXG4gICAgICAgIDMyLFxuICAgICAgICAxNDQsXG4gICAgICAgIDksXG4gICAgICAgIDExOCxcbiAgICAgICAgMTc0LFxuICAgICAgICA5NCxcbiAgICAgICAgMTExLFxuICAgICAgICAxNTAsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTEyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2OCxcbiAgICAgICAgNTMsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMzksXG4gICAgICAgIDIzOSxcbiAgICAgICAgMjQwLFxuICAgICAgICAxNDgsXG4gICAgICAgIDE5MyxcbiAgICAgICAgNzIsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjI1LFxuICAgICAgICA0MixcbiAgICAgICAgMjQ3LFxuICAgICAgICA2OSxcbiAgICAgICAgNDQsXG4gICAgICAgIDE2MixcbiAgICAgICAgOTEsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTk5LFxuICAgICAgICAyMTMsXG4gICAgICAgIDksXG4gICAgICAgIDYsXG4gICAgICAgIDU5LFxuICAgICAgICAyMjYsXG4gICAgICAgIDE4MixcbiAgICAgICAgODksXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTQsXG4gICAgICAgIDExOCxcbiAgICAgICAgOSxcbiAgICAgICAgMTY4LFxuICAgICAgICAxMTJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDAsXG4gICAgICAgIDM3LFxuICAgICAgICA3LFxuICAgICAgICAxNDgsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjMxLFxuICAgICAgICAwLFxuICAgICAgICAyNDYsXG4gICAgICAgIDE5MixcbiAgICAgICAgNjcsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMyxcbiAgICAgICAgMTUxLFxuICAgICAgICAxMDQsXG4gICAgICAgIDI4LFxuICAgICAgICAxODgsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMjA4LFxuICAgICAgICAyMCxcbiAgICAgICAgMTY2LFxuICAgICAgICAyNyxcbiAgICAgICAgNCxcbiAgICAgICAgMjEzLFxuICAgICAgICAxNDYsXG4gICAgICAgIDM4LFxuICAgICAgICAyMDMsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTAwLFxuICAgICAgICAyMjIsXG4gICAgICAgIDE5MSxcbiAgICAgICAgODIsXG4gICAgICAgIDY4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDUsXG4gICAgICAgIDE4LFxuICAgICAgICAxNjEsXG4gICAgICAgIDU5LFxuICAgICAgICAxMzQsXG4gICAgICAgIDQ2LFxuICAgICAgICAyMTQsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTc3LFxuICAgICAgICA5NixcbiAgICAgICAgMTg0LFxuICAgICAgICAxMDcsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTg3LFxuICAgICAgICA2OSxcbiAgICAgICAgMjQwLFxuICAgICAgICA4NyxcbiAgICAgICAgMTQ2LFxuICAgICAgICAyNDAsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTU4LFxuICAgICAgICAyMzksXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTA1LFxuICAgICAgICAyNDIsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTE0LFxuICAgICAgICAxNzYsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTcwLFxuICAgICAgICAxOTksXG4gICAgICAgIDU4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAzMixcbiAgICAgICAgMjA4LFxuICAgICAgICAyNTMsXG4gICAgICAgIDE1LFxuICAgICAgICAzLFxuICAgICAgICAyMDMsXG4gICAgICAgIDcxLFxuICAgICAgICA0LFxuICAgICAgICA4OSxcbiAgICAgICAgMTY5LFxuICAgICAgICAyMjEsXG4gICAgICAgIDk2LFxuICAgICAgICA5MCxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxOTQsXG4gICAgICAgIDg2LFxuICAgICAgICAxMjIsXG4gICAgICAgIDI1MSxcbiAgICAgICAgNDcsXG4gICAgICAgIDY0LFxuICAgICAgICA1NSxcbiAgICAgICAgODksXG4gICAgICAgIDE1MixcbiAgICAgICAgNCxcbiAgICAgICAgMjM4LFxuICAgICAgICAyMjEsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjEsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMjI2LFxuICAgICAgICAxNjYsXG4gICAgICAgIDEwNVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjYsXG4gICAgICAgIDE1NixcbiAgICAgICAgOTAsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTk1LFxuICAgICAgICAyNDYsXG4gICAgICAgIDEzMixcbiAgICAgICAgMjA0LFxuICAgICAgICAyMzUsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMzUsXG4gICAgICAgIDE0NCxcbiAgICAgICAgNDAsXG4gICAgICAgIDE3MSxcbiAgICAgICAgOTYsXG4gICAgICAgIDE3OSxcbiAgICAgICAgODIsXG4gICAgICAgIDYwLFxuICAgICAgICA1NyxcbiAgICAgICAgMTk1LFxuICAgICAgICA0MyxcbiAgICAgICAgMTU2LFxuICAgICAgICAxMDMsXG4gICAgICAgIDcxLFxuICAgICAgICA1OSxcbiAgICAgICAgODUsXG4gICAgICAgIDc0LFxuICAgICAgICAxMzYsXG4gICAgICAgIDIwNCxcbiAgICAgICAgNjIsXG4gICAgICAgIDIsXG4gICAgICAgIDZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDkyXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDkyLFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAzLFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgODlcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA5NSxcbiAgICAgICAgNyxcbiAgICAgICAgOTYsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMjAxLFxuICAgICAgICAyMzMsXG4gICAgICAgIDExMyxcbiAgICAgICAgNzcsXG4gICAgICAgIDIwNCxcbiAgICAgICAgNjQsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxMDcsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTQ5LFxuICAgICAgICA5OSxcbiAgICAgICAgNzQsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMjQzLFxuICAgICAgICAxOTQsXG4gICAgICAgIDI0LFxuICAgICAgICA0MyxcbiAgICAgICAgOSxcbiAgICAgICAgMTI5LFxuICAgICAgICAxMDAsXG4gICAgICAgIDQxLFxuICAgICAgICA4MCxcbiAgICAgICAgOTIsXG4gICAgICAgIDkzLFxuICAgICAgICAyNDEsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTAzLFxuICAgICAgICAxMTUsXG4gICAgICAgIDIxLFxuICAgICAgICAxNzEsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjIwLFxuICAgICAgICA2MyxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxMjcsXG4gICAgICAgIDE0LFxuICAgICAgICAyMzIsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTE2LFxuICAgICAgICAyNTIsXG4gICAgICAgIDUwLFxuICAgICAgICA3NixcbiAgICAgICAgNDMsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjE1LFxuICAgICAgICA5OSxcbiAgICAgICAgMTQwLFxuICAgICAgICAxMjUsXG4gICAgICAgIDkyLFxuICAgICAgICAyNDUsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMjA0LFxuICAgICAgICAyNDUsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjQ1LFxuICAgICAgICA3NCxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxODMsXG4gICAgICAgIDEzN1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTM2LFxuICBcImFkdlNlY3JldEtleVwiOiBcIjVDTE1zZEFVbnlOMnBseFVwdUQ3UURlVkdsUGxwYjJNOGxtajBGSVRVRnM9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjU2NzA2NjA4MTMxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCJGNEZEM0YzODFGQzU3MDBBMDhGNDhGMkEyQUY2NjVBRFwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjI1ODc4NThcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiVGNaa2Qxb01USWk5b09zX3B4VzBwZ1wiLFxuICBcInBob25lSWRcIjogXCIyMzQyMzMwOC0xNWQ5LTQwNzYtYmRhZC1jNTIwZmUxNjY2NzFcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTQyLFxuICAgICAgNjUsXG4gICAgICA3MyxcbiAgICAgIDE5NyxcbiAgICAgIDIwMixcbiAgICAgIDIzOCxcbiAgICAgIDE0NyxcbiAgICAgIDE2NyxcbiAgICAgIDIyNyxcbiAgICAgIDIyMCxcbiAgICAgIDI1MyxcbiAgICAgIDE1MSxcbiAgICAgIDE2NSxcbiAgICAgIDUxLFxuICAgICAgMTQxLFxuICAgICAgMjE2LFxuICAgICAgMTM4LFxuICAgICAgMTYwLFxuICAgICAgNDIsXG4gICAgICAyMzdcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTUzLFxuICAgICAgMTUsXG4gICAgICAxNzgsXG4gICAgICAxMTgsXG4gICAgICAyMjIsXG4gICAgICA3MyxcbiAgICAgIDEwMyxcbiAgICAgIDE3MyxcbiAgICAgIDIwLFxuICAgICAgMjIsXG4gICAgICAxNjAsXG4gICAgICAyLFxuICAgICAgNTYsXG4gICAgICAyMjQsXG4gICAgICA4NyxcbiAgICAgIDE5MyxcbiAgICAgIDE1OCxcbiAgICAgIDI1NCxcbiAgICAgIDI0OSxcbiAgICAgIDUwXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIjJRM0dKOFlaXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyNTY3MDY2MDgxMzE6NTlAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjMxNjk2OTkyODc0NzUxOjU5QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ1BqLzdiUUdFTWkxc3JVR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiRGNaalBaSkMyK09DTUk0MjZ4eFNKUkxCRFQzMXdtVkJnRXV0U1hZVWhpQT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJ0MHp6aSswc2VMNVhsa3VIUDJZaG1Ibmc3WCtLK3YybkdxSHZYT2FxamtocjhUbDZKTnhENUFWQWtmb1FhNTYxcVVaQytnaTBUMHFtbEU3aGhJcHFCdz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCIrd09LR0k5T2JheWcveUt2VzdoVldUK05aUmJUZ2RtTGcvYnZ1Q2h5QWhPUWphMDVuSFpUdkI0aENQeGNkVFYwcUNnb09RZUptaEx5UThxekM4ZURqZz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyNTY3MDY2MDgxMzE6NTlAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAzMlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIyNTg3ODUyLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBUFlRXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFQWVEuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJoNGw4NWY2ajFtd2Z4dlFwaDROQng0czFNSDErZjJVbjR1WFVNVisyekJjPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE3MjE0NjY4NjksXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjI1NDMwODYwNDdcIn0iCn0="  // PUT your SESSION_ID 


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
