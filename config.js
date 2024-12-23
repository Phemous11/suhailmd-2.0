const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "Google,Youtube" ;  
global.video= "Youtube" ;
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
global.flush = process.env.FLUSH   || "true"; // Make it "true" if bot not responed
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
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_01_25_12_23_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTYsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMjIwLFxuICAgICAgICA3NyxcbiAgICAgICAgMTYwLFxuICAgICAgICA1MSxcbiAgICAgICAgNTgsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTExLFxuICAgICAgICAxNTMsXG4gICAgICAgIDIxMixcbiAgICAgICAgOTEsXG4gICAgICAgIDExNCxcbiAgICAgICAgMjE1LFxuICAgICAgICAzMSxcbiAgICAgICAgMzQsXG4gICAgICAgIDc2LFxuICAgICAgICAxNDQsXG4gICAgICAgIDEwNCxcbiAgICAgICAgODMsXG4gICAgICAgIDY4LFxuICAgICAgICAyNDQsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMzQsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjMyLFxuICAgICAgICAxOTMsXG4gICAgICAgIDU2LFxuICAgICAgICAyMjIsXG4gICAgICAgIDExOSxcbiAgICAgICAgOTgsXG4gICAgICAgIDk2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTMwLFxuICAgICAgICAxNDksXG4gICAgICAgIDkwLFxuICAgICAgICAyMDgsXG4gICAgICAgIDIxMyxcbiAgICAgICAgNzQsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjUwLFxuICAgICAgICAyMDMsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTY1LFxuICAgICAgICA3MyxcbiAgICAgICAgMjM4LFxuICAgICAgICAxOTksXG4gICAgICAgIDEwOCxcbiAgICAgICAgNDMsXG4gICAgICAgIDk5LFxuICAgICAgICAxNjMsXG4gICAgICAgIDI3LFxuICAgICAgICAxMjgsXG4gICAgICAgIDgxLFxuICAgICAgICAyMTQsXG4gICAgICAgIDI1MyxcbiAgICAgICAgOTUsXG4gICAgICAgIDk2LFxuICAgICAgICAxMjMsXG4gICAgICAgIDQsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTM3LFxuICAgICAgICAxNzUsXG4gICAgICAgIDEyNVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDgsXG4gICAgICAgIDEwMSxcbiAgICAgICAgNTQsXG4gICAgICAgIDIzNixcbiAgICAgICAgMjQ5LFxuICAgICAgICA4NixcbiAgICAgICAgMzgsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjI5LFxuICAgICAgICAxODAsXG4gICAgICAgIDE0MCxcbiAgICAgICAgNTMsXG4gICAgICAgIDIyMCxcbiAgICAgICAgNDEsXG4gICAgICAgIDEyNixcbiAgICAgICAgMjYsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTIxLFxuICAgICAgICAxNTYsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTQwLFxuICAgICAgICAxMDgsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMixcbiAgICAgICAgNzksXG4gICAgICAgIDY0LFxuICAgICAgICAxMCxcbiAgICAgICAgMTY3LFxuICAgICAgICAwLFxuICAgICAgICA4NSxcbiAgICAgICAgNzcsXG4gICAgICAgIDgyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTk4LFxuICAgICAgICA3LFxuICAgICAgICA5OSxcbiAgICAgICAgMzQsXG4gICAgICAgIDEzNixcbiAgICAgICAgODYsXG4gICAgICAgIDEwMyxcbiAgICAgICAgNjcsXG4gICAgICAgIDc3LFxuICAgICAgICAxNTQsXG4gICAgICAgIDksXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTM0LFxuICAgICAgICAyNDksXG4gICAgICAgIDE2OSxcbiAgICAgICAgNjAsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjIxLFxuICAgICAgICAxNzksXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTg1LFxuICAgICAgICAxNTAsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxOCxcbiAgICAgICAgNzcsXG4gICAgICAgIDE3MixcbiAgICAgICAgMjQ0LFxuICAgICAgICAxODcsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDU2LFxuICAgICAgICAyNDMsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMjksXG4gICAgICAgIDQ0LFxuICAgICAgICA3OSxcbiAgICAgICAgNDQsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjEyLFxuICAgICAgICAyMjQsXG4gICAgICAgIDIzLFxuICAgICAgICAyNDgsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMzksXG4gICAgICAgIDE5NixcbiAgICAgICAgMTQ4LFxuICAgICAgICAxMTAsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTUyLFxuICAgICAgICAxMjAsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTg3LFxuICAgICAgICAyMTcsXG4gICAgICAgIDgyLFxuICAgICAgICAyNixcbiAgICAgICAgNTQsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMjM0LFxuICAgICAgICAyMzQsXG4gICAgICAgIDExNyxcbiAgICAgICAgNDcsXG4gICAgICAgIDkyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDExMSxcbiAgICAgICAgMjE2LFxuICAgICAgICAzMixcbiAgICAgICAgNSxcbiAgICAgICAgMjgsXG4gICAgICAgIDg1LFxuICAgICAgICAxNzYsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjIwLFxuICAgICAgICAxNixcbiAgICAgICAgMjM2LFxuICAgICAgICA4MixcbiAgICAgICAgMTMsXG4gICAgICAgIDU1LFxuICAgICAgICAxNDUsXG4gICAgICAgIDIxMixcbiAgICAgICAgMjUyLFxuICAgICAgICAyMDgsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMjA0LFxuICAgICAgICAxNjQsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTY4LFxuICAgICAgICAyMTUsXG4gICAgICAgIDczLFxuICAgICAgICAyMyxcbiAgICAgICAgMTM2LFxuICAgICAgICAyMDEsXG4gICAgICAgIDI0MyxcbiAgICAgICAgNDQsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAxMDVcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICA4NixcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMCxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAzXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTcsXG4gICAgICAgIDE4MCxcbiAgICAgICAgNDcsXG4gICAgICAgIDIsXG4gICAgICAgIDI5LFxuICAgICAgICAxNTgsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMzUsXG4gICAgICAgIDczLFxuICAgICAgICAyNDgsXG4gICAgICAgIDE1MCxcbiAgICAgICAgODksXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTA2LFxuICAgICAgICA1OSxcbiAgICAgICAgOTQsXG4gICAgICAgIDIyLFxuICAgICAgICAyMjYsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTE0LFxuICAgICAgICA5OSxcbiAgICAgICAgMjUxLFxuICAgICAgICAxODYsXG4gICAgICAgIDMwLFxuICAgICAgICAxNzAsXG4gICAgICAgIDE1NCxcbiAgICAgICAgNDEsXG4gICAgICAgIDMzLFxuICAgICAgICAyMTUsXG4gICAgICAgIDE5LFxuICAgICAgICAxMzMsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMzMsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTM2LFxuICAgICAgICAxNzQsXG4gICAgICAgIDExLFxuICAgICAgICAxNTksXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjE1LFxuICAgICAgICAwLFxuICAgICAgICAxNzgsXG4gICAgICAgIDU2LFxuICAgICAgICAxMTYsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjE4LFxuICAgICAgICAxMjYsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTYwLFxuICAgICAgICAxMTcsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjIyLFxuICAgICAgICAxMjUsXG4gICAgICAgIDg2LFxuICAgICAgICAxOTQsXG4gICAgICAgIDIzNCxcbiAgICAgICAgNzMsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTY0LFxuICAgICAgICAyMjAsXG4gICAgICAgIDk4LFxuICAgICAgICA4NSxcbiAgICAgICAgMjQxLFxuICAgICAgICA3XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyMjgsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiSzJzT1g0NzhJelR5c1NwSmF4TnZEQUkvNlFnOTdwdG9oYlVROUJYOTJaND1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiS1g0ZjNwZnRSQjJRaGhHekhBcloyd1wiLFxuICBcInBob25lSWRcIjogXCI2OWVhZGI4Yy02ZDdkLTQxOTctOGI5ZC0xYzlhMmNhODE1NTFcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTkwLFxuICAgICAgOTksXG4gICAgICAxOTgsXG4gICAgICA4NixcbiAgICAgIDE0NCxcbiAgICAgIDMwLFxuICAgICAgMTc3LFxuICAgICAgODQsXG4gICAgICA3OSxcbiAgICAgIDE5NSxcbiAgICAgIDEwNixcbiAgICAgIDExNSxcbiAgICAgIDE0MyxcbiAgICAgIDI0MCxcbiAgICAgIDExMyxcbiAgICAgIDYzLFxuICAgICAgMjE4LFxuICAgICAgMTE4LFxuICAgICAgMTgxLFxuICAgICAgMjE5XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIxMSxcbiAgICAgIDY4LFxuICAgICAgMjgsXG4gICAgICAxMzEsXG4gICAgICAyMzcsXG4gICAgICAxOTQsXG4gICAgICAyMDQsXG4gICAgICAzNyxcbiAgICAgIDI1MyxcbiAgICAgIDE4LFxuICAgICAgMjQ5LFxuICAgICAgMjAwLFxuICAgICAgMTQ3LFxuICAgICAgMTk2LFxuICAgICAgMjM1LFxuICAgICAgMTkxLFxuICAgICAgMTI1LFxuICAgICAgMTU0LFxuICAgICAgNzEsXG4gICAgICA1M1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCI0UDdFQ1NYV1wiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjMzNTM3Mjk5MTgwOjExQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxOTY3NTcyMTY1NjMzMzQ6MTFAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDUGpWOElzTEVKWDRvcnNHR0FRZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJrc1AxK3NJUUxtQlB6Yy9pNFZlRlB0eTNRZWtETVQ2dlh6em9VT1BqV2xJPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcImVKeU9FVnByOWFnK0hQMUQxdndPTVFyaU1XNk9BVmJ5bGhmMmpnY3FDNFh5R1NrUVZQMC9abEF5N0U5RnAzTVRPcWk3UWVUQlNRUjY3RVdNQlB5R2pBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcImZOcndGZVdzcW9wZ1I0Z3R4Mld4K0Q0ZjJhSlozUHcyVGlNYzFpQlJFdjQrQWdiVjE3S0lqR3gyd3JjODVySzVzU0srY0VnUnZLOUJaNjJVV3RwMUR3PT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzMzUzNzI5OTE4MDoxMUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICA2MixcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICA4MlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiaXBob25lXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MzQ5MTcxNDQsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFEZlRcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQURmVC5qc29uIjogIntcImtleURhdGFcIjpcImYyTzkrOE1NV0M3UlJQbGtXeHNQZEZIOVJMUG42dE5zYkVjOEZNcURoNTQ9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6Mjk3NzcwNDY5NixcImN1cnJlbnRJbmRleFwiOjMsXCJkZXZpY2VJbmRleGVzXCI6WzAsM119LFwidGltZXN0YW1wXCI6XCIxNzM0OTE2NzM1Njk4XCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "Don Phemous",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Phemous",


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
