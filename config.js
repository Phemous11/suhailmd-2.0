const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/suhailmd-2.0";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© SuhailTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '0537299180') : "Phemous";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_10_06_12_22_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTYsXG4gICAgICAgIDE1MyxcbiAgICAgICAgODgsXG4gICAgICAgIDg1LFxuICAgICAgICAyNSxcbiAgICAgICAgMjIxLFxuICAgICAgICAyMTUsXG4gICAgICAgIDYwLFxuICAgICAgICA0OSxcbiAgICAgICAgNDksXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTE5LFxuICAgICAgICAyMzIsXG4gICAgICAgIDE4MyxcbiAgICAgICAgNTcsXG4gICAgICAgIDg0LFxuICAgICAgICAyMjgsXG4gICAgICAgIDEyNixcbiAgICAgICAgMjE5LFxuICAgICAgICAyMDEsXG4gICAgICAgIDIwMCxcbiAgICAgICAgNDgsXG4gICAgICAgIDc2LFxuICAgICAgICAxNTEsXG4gICAgICAgIDk2LFxuICAgICAgICAyNDMsXG4gICAgICAgIDEyLFxuICAgICAgICAxOTAsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMjM4LFxuICAgICAgICA1OSxcbiAgICAgICAgNzFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODEsXG4gICAgICAgIDUzLFxuICAgICAgICAxMDEsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTAzLFxuICAgICAgICA0MCxcbiAgICAgICAgMjM3LFxuICAgICAgICAxMDksXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTQzLFxuICAgICAgICAxMDMsXG4gICAgICAgIDIwLFxuICAgICAgICAyNCxcbiAgICAgICAgNjAsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMzIsXG4gICAgICAgIDI2LFxuICAgICAgICAyMjksXG4gICAgICAgIDg1LFxuICAgICAgICAzNSxcbiAgICAgICAgNjEsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMyxcbiAgICAgICAgNDEsXG4gICAgICAgIDk2LFxuICAgICAgICA5NixcbiAgICAgICAgNzksXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTY4LFxuICAgICAgICA2NSxcbiAgICAgICAgMjMsXG4gICAgICAgIDM2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxODQsXG4gICAgICAgIDgyLFxuICAgICAgICAxMzYsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMzEsXG4gICAgICAgIDEzNixcbiAgICAgICAgNzQsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTc3LFxuICAgICAgICAyMSxcbiAgICAgICAgMTA1LFxuICAgICAgICAxMTMsXG4gICAgICAgIDUwLFxuICAgICAgICAxOTAsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjI1LFxuICAgICAgICAyMzksXG4gICAgICAgIDk1LFxuICAgICAgICAxMzgsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTA1LFxuICAgICAgICAyMDUsXG4gICAgICAgIDM1LFxuICAgICAgICAyMzYsXG4gICAgICAgIDEwMSxcbiAgICAgICAgNDUsXG4gICAgICAgIDU5LFxuICAgICAgICA0MSxcbiAgICAgICAgNDYsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjAyLFxuICAgICAgICA4OVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDQsXG4gICAgICAgIDIsXG4gICAgICAgIDIzMixcbiAgICAgICAgOTIsXG4gICAgICAgIDg2LFxuICAgICAgICA1NyxcbiAgICAgICAgMTM4LFxuICAgICAgICA1OCxcbiAgICAgICAgODIsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTk1LFxuICAgICAgICAxNDAsXG4gICAgICAgIDExMSxcbiAgICAgICAgMjE0LFxuICAgICAgICAzOSxcbiAgICAgICAgMjA0LFxuICAgICAgICAyNTEsXG4gICAgICAgIDgsXG4gICAgICAgIDY3LFxuICAgICAgICAyMDQsXG4gICAgICAgIDExMCxcbiAgICAgICAgMjAwLFxuICAgICAgICAyNDksXG4gICAgICAgIDU2LFxuICAgICAgICA5MyxcbiAgICAgICAgMTAyLFxuICAgICAgICAxMjMsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMzksXG4gICAgICAgIDk5LFxuICAgICAgICAyNTMsXG4gICAgICAgIDkzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDAsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTg4LFxuICAgICAgICAyNixcbiAgICAgICAgMzAsXG4gICAgICAgIDIzNixcbiAgICAgICAgMjEsXG4gICAgICAgIDc0LFxuICAgICAgICA1NSxcbiAgICAgICAgNixcbiAgICAgICAgMTA0LFxuICAgICAgICAyMjYsXG4gICAgICAgIDUzLFxuICAgICAgICAxNzcsXG4gICAgICAgIDcwLFxuICAgICAgICAxMTMsXG4gICAgICAgIDI5LFxuICAgICAgICAxNDksXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTE1LFxuICAgICAgICA3MixcbiAgICAgICAgMTEyLFxuICAgICAgICAxOTgsXG4gICAgICAgIDE2NSxcbiAgICAgICAgNjksXG4gICAgICAgIDExNCxcbiAgICAgICAgMTc1LFxuICAgICAgICAyMTQsXG4gICAgICAgIDExOCxcbiAgICAgICAgMjAsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTA3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDcsXG4gICAgICAgIDkxLFxuICAgICAgICA2OCxcbiAgICAgICAgNTQsXG4gICAgICAgIDM5LFxuICAgICAgICAyOCxcbiAgICAgICAgNDEsXG4gICAgICAgIDE3NCxcbiAgICAgICAgNTAsXG4gICAgICAgIDc0LFxuICAgICAgICAxMjUsXG4gICAgICAgIDY2LFxuICAgICAgICAxOTUsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTUzLFxuICAgICAgICAxMTUsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTg2LFxuICAgICAgICAxOTgsXG4gICAgICAgIDYwLFxuICAgICAgICAyNTAsXG4gICAgICAgIDIxNCxcbiAgICAgICAgODYsXG4gICAgICAgIDE4LFxuICAgICAgICA5MixcbiAgICAgICAgNjQsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjAsXG4gICAgICAgIDQ5LFxuICAgICAgICA5MyxcbiAgICAgICAgMTA3LFxuICAgICAgICAxMTBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDY4XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDExMSxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICA0MSxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAxOFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0NyxcbiAgICAgICAgNDEsXG4gICAgICAgIDc4LFxuICAgICAgICAyNDEsXG4gICAgICAgIDYwLFxuICAgICAgICAyMDYsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTYyLFxuICAgICAgICA5OCxcbiAgICAgICAgMjIxLFxuICAgICAgICA3MSxcbiAgICAgICAgMTQ5LFxuICAgICAgICAyNyxcbiAgICAgICAgMTIwLFxuICAgICAgICAyMDUsXG4gICAgICAgIDYwLFxuICAgICAgICAxMzIsXG4gICAgICAgIDIyOCxcbiAgICAgICAgODcsXG4gICAgICAgIDYsXG4gICAgICAgIDE4NyxcbiAgICAgICAgNTEsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTA2LFxuICAgICAgICAyMTUsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTA1LFxuICAgICAgICAyMDgsXG4gICAgICAgIDkxLFxuICAgICAgICA2NyxcbiAgICAgICAgMTA5LFxuICAgICAgICAyMjksXG4gICAgICAgIDE3LFxuICAgICAgICAxMDgsXG4gICAgICAgIDk4LFxuICAgICAgICAxMjUsXG4gICAgICAgIDIxNyxcbiAgICAgICAgNjQsXG4gICAgICAgIDcyLFxuICAgICAgICAxOTAsXG4gICAgICAgIDEyOCxcbiAgICAgICAgNjYsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTYyLFxuICAgICAgICAyNDksXG4gICAgICAgIDMzLFxuICAgICAgICAyMjYsXG4gICAgICAgIDY4LFxuICAgICAgICAxMDcsXG4gICAgICAgIDI4LFxuICAgICAgICAxMTQsXG4gICAgICAgIDkwLFxuICAgICAgICAyMzksXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTkzLFxuICAgICAgICA4OSxcbiAgICAgICAgOTMsXG4gICAgICAgIDg2LFxuICAgICAgICAxODksXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTE3LFxuICAgICAgICAxMzEsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE4NyxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJtLzdWdGM5aS9Ya1VWd1YrQmZlWHZlU0VHUXFnNVpzeW9uNmNqK0xaVVpFPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJCZDBqdUpfX1JrNjFDajNBNG1Yak9BXCIsXG4gIFwicGhvbmVJZFwiOiBcIjc2M2QzODNjLTgwMmQtNGJiNy1hY2E4LWRmNzk4MmExZWI5NVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMzksXG4gICAgICA5MSxcbiAgICAgIDg5LFxuICAgICAgMTY0LFxuICAgICAgMzQsXG4gICAgICAxMTQsXG4gICAgICAzNixcbiAgICAgIDU1LFxuICAgICAgMTkzLFxuICAgICAgMjUyLFxuICAgICAgMTQ4LFxuICAgICAgOTAsXG4gICAgICAxODAsXG4gICAgICAxMTYsXG4gICAgICAyMTksXG4gICAgICAxNzUsXG4gICAgICAyMjAsXG4gICAgICAxNDUsXG4gICAgICA5NSxcbiAgICAgIDEyMVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyNTAsXG4gICAgICAyMzMsXG4gICAgICAxMCxcbiAgICAgIDEwMSxcbiAgICAgIDEyMyxcbiAgICAgIDU4LFxuICAgICAgMTU3LFxuICAgICAgMTcyLFxuICAgICAgMTY0LFxuICAgICAgMTI2LFxuICAgICAgMTE4LFxuICAgICAgMjIwLFxuICAgICAgMTc0LFxuICAgICAgOSxcbiAgICAgIDEyMCxcbiAgICAgIDIzOSxcbiAgICAgIDEzMyxcbiAgICAgIDEzOCxcbiAgICAgIDE3OSxcbiAgICAgIDE2XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIktTOFk3U1NBXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzM1MzcyOTkxODA6OUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMTk2NzU3MjE2NTYzMzM0OjlAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDUGpWOElzTEVMWEpuN3NHR0FJZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJrc1AxK3NJUUxtQlB6Yy9pNFZlRlB0eTNRZWtETVQ2dlh6em9VT1BqV2xJPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIlMyczVTUjIxVkVseVgvTVVId3B4Ykx2bDRSSzF0UGQydU12OWFLU2JwZXJqRytlajZ6WUtwc1FBYy9hdEswVWxualcrQ1pzRDRqdkliM0lJRTFCemlRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIkV5U0ZoMHF5TGxKb1hiNWJmeW1uYVJaNE1JMXo2b0hWMkRBRDFFSU40cUJDY1p3SUh6TzI1L1Vxc2lZSE1IVUhMdEhaTG5ieE5tT1VvRHk1YVBTckJBPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzMzUzNzI5OTE4MDo5QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAxNixcbiAgICAgICAgICA0NixcbiAgICAgICAgICA5NixcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDMsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDgyXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJpcGhvbmVcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTczNDg2MjAwOSxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQURmTlwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBRGZOLmpzb24iOiAie1wia2V5RGF0YVwiOlwiZm1IWVI3SXUxWXVXNS9mN3VKNDM3VjFYYmhjM0RhYlRLZ1cvUHZuZFdXMD1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoyOTc3NzA0Njk2LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMSwwXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MzQ4MzY5MTU4OTRcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "Don Phemou",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
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
