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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '0537299180') : "0537299180";




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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_20_35_12_26_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY4LFxuICAgICAgICA5OSxcbiAgICAgICAgNDEsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjU1LFxuICAgICAgICA2MSxcbiAgICAgICAgMTY4LFxuICAgICAgICA0NixcbiAgICAgICAgOTMsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTA0LFxuICAgICAgICAxMTUsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTAyLFxuICAgICAgICAxMTgsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTIxLFxuICAgICAgICAyNDksXG4gICAgICAgIDIxMCxcbiAgICAgICAgMjExLFxuICAgICAgICAxMzksXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjAyLFxuICAgICAgICAxNTksXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTg2LFxuICAgICAgICA2OSxcbiAgICAgICAgMTIxLFxuICAgICAgICAxMTksXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTk3LFxuICAgICAgICA3M1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAzNyxcbiAgICAgICAgMjMwLFxuICAgICAgICAyMzUsXG4gICAgICAgIDc5LFxuICAgICAgICA5OSxcbiAgICAgICAgOTEsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMzgsXG4gICAgICAgIDQzLFxuICAgICAgICAxMTEsXG4gICAgICAgIDcxLFxuICAgICAgICAxOSxcbiAgICAgICAgNDIsXG4gICAgICAgIDEwLFxuICAgICAgICAxMzAsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTIwLFxuICAgICAgICA2MyxcbiAgICAgICAgMzgsXG4gICAgICAgIDE4NCxcbiAgICAgICAgODAsXG4gICAgICAgIDk0LFxuICAgICAgICA0LFxuICAgICAgICAyNSxcbiAgICAgICAgNjEsXG4gICAgICAgIDEyNyxcbiAgICAgICAgODYsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjE3LFxuICAgICAgICAxMTgsXG4gICAgICAgIDM2LFxuICAgICAgICAxMDJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDgwLFxuICAgICAgICAxOTMsXG4gICAgICAgIDIwOSxcbiAgICAgICAgNSxcbiAgICAgICAgNTQsXG4gICAgICAgIDI2LFxuICAgICAgICAxMjMsXG4gICAgICAgIDE0OCxcbiAgICAgICAgNzAsXG4gICAgICAgIDgsXG4gICAgICAgIDc3LFxuICAgICAgICAyNDYsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTQ2LFxuICAgICAgICA1OSxcbiAgICAgICAgMjIwLFxuICAgICAgICAyMTgsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTcsXG4gICAgICAgIDk3LFxuICAgICAgICAxMixcbiAgICAgICAgMTkyLFxuICAgICAgICAxMTEsXG4gICAgICAgIDQ2LFxuICAgICAgICAxOSxcbiAgICAgICAgMTI2LFxuICAgICAgICA5NCxcbiAgICAgICAgMzcsXG4gICAgICAgIDc3LFxuICAgICAgICAyMyxcbiAgICAgICAgMjMzLFxuICAgICAgICAxMDhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjUwLFxuICAgICAgICAxODYsXG4gICAgICAgIDEwOCxcbiAgICAgICAgNDksXG4gICAgICAgIDY0LFxuICAgICAgICA2MCxcbiAgICAgICAgMTUzLFxuICAgICAgICA0NSxcbiAgICAgICAgMTg1LFxuICAgICAgICAxOTAsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTYyLFxuICAgICAgICAxNjQsXG4gICAgICAgIDEzNCxcbiAgICAgICAgNTUsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTk4LFxuICAgICAgICA4MCxcbiAgICAgICAgMjM4LFxuICAgICAgICAxOTQsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMixcbiAgICAgICAgNzksXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTAsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTE5LFxuICAgICAgICAxLFxuICAgICAgICAyLFxuICAgICAgICAxNCxcbiAgICAgICAgMjI1LFxuICAgICAgICAxMjRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDU2LFxuICAgICAgICAxNSxcbiAgICAgICAgMjUyLFxuICAgICAgICAyMDYsXG4gICAgICAgIDg1LFxuICAgICAgICAxOTAsXG4gICAgICAgIDIzMyxcbiAgICAgICAgNyxcbiAgICAgICAgMTI5LFxuICAgICAgICA1NixcbiAgICAgICAgMjgsXG4gICAgICAgIDEwNSxcbiAgICAgICAgNDAsXG4gICAgICAgIDgzLFxuICAgICAgICA4OCxcbiAgICAgICAgNzAsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTI4LFxuICAgICAgICAxNTksXG4gICAgICAgIDIzMSxcbiAgICAgICAgNjgsXG4gICAgICAgIDY4LFxuICAgICAgICAxNjEsXG4gICAgICAgIDE3NixcbiAgICAgICAgMjIwLFxuICAgICAgICAxMDYsXG4gICAgICAgIDUzLFxuICAgICAgICA0OCxcbiAgICAgICAgMjE4LFxuICAgICAgICAyMzgsXG4gICAgICAgIDcsXG4gICAgICAgIDEwMFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA1MCxcbiAgICAgICAgNDUsXG4gICAgICAgIDE1NyxcbiAgICAgICAgOCxcbiAgICAgICAgNDUsXG4gICAgICAgIDQzLFxuICAgICAgICA3NyxcbiAgICAgICAgNjAsXG4gICAgICAgIDY3LFxuICAgICAgICAwLFxuICAgICAgICAyMjMsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTA1LFxuICAgICAgICAxNTMsXG4gICAgICAgIDY2LFxuICAgICAgICA2OCxcbiAgICAgICAgMjQ1LFxuICAgICAgICAyMzcsXG4gICAgICAgIDEwMSxcbiAgICAgICAgNDAsXG4gICAgICAgIDk4LFxuICAgICAgICA3MSxcbiAgICAgICAgNDMsXG4gICAgICAgIDY1LFxuICAgICAgICAyMzYsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMjM4LFxuICAgICAgICA3NSxcbiAgICAgICAgNzMsXG4gICAgICAgIDE2MSxcbiAgICAgICAgOSxcbiAgICAgICAgMTRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMTE0XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDYxLFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICA3MixcbiAgICAgICAgICA2MCxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICA2NixcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgOSxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgNFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDc2LFxuICAgICAgICAyMzYsXG4gICAgICAgIDQyLFxuICAgICAgICAyMTAsXG4gICAgICAgIDMsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTQ5LFxuICAgICAgICA2NSxcbiAgICAgICAgMTkzLFxuICAgICAgICAyNSxcbiAgICAgICAgMTI1LFxuICAgICAgICAxODcsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTgxLFxuICAgICAgICAxMDIsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMjA5LFxuICAgICAgICAxODEsXG4gICAgICAgIDc3LFxuICAgICAgICAxNTIsXG4gICAgICAgIDExNSxcbiAgICAgICAgMjA2LFxuICAgICAgICAyNDgsXG4gICAgICAgIDgsXG4gICAgICAgIDM1LFxuICAgICAgICAyNTMsXG4gICAgICAgIDE5MCxcbiAgICAgICAgNjUsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTQzLFxuICAgICAgICAyMjIsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMjUsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMjE5LFxuICAgICAgICA0MixcbiAgICAgICAgMTAxLFxuICAgICAgICA1NixcbiAgICAgICAgMjUyLFxuICAgICAgICA1MixcbiAgICAgICAgMTkzLFxuICAgICAgICA1OSxcbiAgICAgICAgODEsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTMwLFxuICAgICAgICA5OCxcbiAgICAgICAgOTcsXG4gICAgICAgIDk0LFxuICAgICAgICA1OSxcbiAgICAgICAgMjQyLFxuICAgICAgICA3NyxcbiAgICAgICAgMjYsXG4gICAgICAgIDc0LFxuICAgICAgICAxODIsXG4gICAgICAgIDE0NixcbiAgICAgICAgODEsXG4gICAgICAgIDgsXG4gICAgICAgIDgwLFxuICAgICAgICAyMzUsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTE2LFxuICAgICAgICAxNzMsXG4gICAgICAgIDI2LFxuICAgICAgICA3XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA0MixcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJvL1paME51Z2krRWQ1cXJYdGYxT29wK3NQemJUeTM5NytpeVBSYWpRREl3PVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJxR0EtOUxPWlJRT0szbE5Db1YyaVFnXCIsXG4gIFwicGhvbmVJZFwiOiBcIjVhMTc5YWM0LWJiMzgtNDIyYi1hMzI1LTA3N2MxZGU5YzFmZVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMzEsXG4gICAgICAyMTUsXG4gICAgICAyMzgsXG4gICAgICA0OSxcbiAgICAgIDE2NCxcbiAgICAgIDIsXG4gICAgICAxLFxuICAgICAgODgsXG4gICAgICAyMCxcbiAgICAgIDExMixcbiAgICAgIDE5LFxuICAgICAgMjIyLFxuICAgICAgOTcsXG4gICAgICAzNCxcbiAgICAgIDE4NCxcbiAgICAgIDI0NCxcbiAgICAgIDE5NyxcbiAgICAgIDM2LFxuICAgICAgOTYsXG4gICAgICA3NVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMjAsXG4gICAgICAyMTAsXG4gICAgICAzOCxcbiAgICAgIDI0MixcbiAgICAgIDExOSxcbiAgICAgIDE2MixcbiAgICAgIDIwNyxcbiAgICAgIDIyMixcbiAgICAgIDE5OCxcbiAgICAgIDIzNyxcbiAgICAgIDgyLFxuICAgICAgMjE0LFxuICAgICAgMTMsXG4gICAgICA0OCxcbiAgICAgIDEzNixcbiAgICAgIDIxNSxcbiAgICAgIDk4LFxuICAgICAgNzUsXG4gICAgICAzLFxuICAgICAgMTMxXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkFCS1FTWlJaXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzM1MzU0NTE5NTg6MTRAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJLb2JieVwiLFxuICAgIFwibGlkXCI6IFwiMjA0MTA1ODg4ODY2NTUzOjE0QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0xhTzlOc0dFUEg3dHJzR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiZjlmRWd5TDRLb2x1YzhyaHY5d3NpUldJVXZPcXdLUmphTWpsN1lmTnEycz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCI3R3laSG9mY1hMc0cxR2g1SlMvZTU1R0pkR21pQ05zLzl4SVF0U084Z2huYTl0RitvditkdE8rVDZpODRxemV1ZENzNTdOTnhGZm9PVmNWUUgxY3Zndz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJoeTJIbjBndGFydkhDZGxHRUJKR2xzMFB5alFtUUE4Y3BrVjg1Ny9ONkxIY29LaEpMNnlQa0dNbWRUZ21OSW12cTFidERIVUtGQjlBaU53V214amtDUT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzM1MzU0NTE5NTg6MTRAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMTA3XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJpXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MzUyNDUzMDIsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFDYWVcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUNhZS5qc29uIjogIntcImtleURhdGFcIjpcIjJuS1VwRXVDS1ArVjRUL0plMVVZYWExNnpJR3g1UnlvME45cFovSklXb1k9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTgwMzM1NTk1OCxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzM1MjQ1MzAyMjUxXCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
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
