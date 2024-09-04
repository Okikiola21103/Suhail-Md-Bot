const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="samsamsun789@gmail.com"
global.location="Lahore,Pakistan."
global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "120363023983262391@g.us"
global.DATABASE_URI = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/d5b1c3544fedc23e11a06.jpg" ; // SET LOGO FOR IMAGE 



global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2348134782851";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5',  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "true";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3,
global.disablepm = process.env.DISABLE_PM || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES|| "text",
global.waPresence= process.env.WAPRESENCE ||  "set according to your need" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "923184474176,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd-1.vercel.app"
global.scan = "https://suhail-md-vtsf.onrender.com/";

module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "V.1.2.8",
  caption : process.env.CAPTION || "©sᴜʜᴀɪʟ²²¹-ᴍᴅ" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "Suhail-MD",
  packname: process.env.PACK_NAME || "♥️",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",

  sessionName:process.env.SESSION_ID || "SUHAIL_10_41_09_04_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOCxcbiAgICAgICAgMzAsXG4gICAgICAgIDEyLFxuICAgICAgICAxMDQsXG4gICAgICAgIDIzLFxuICAgICAgICAxOTMsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTcyLFxuICAgICAgICAxODMsXG4gICAgICAgIDEwNixcbiAgICAgICAgMjQ4LFxuICAgICAgICAyMTgsXG4gICAgICAgIDU5LFxuICAgICAgICA3MSxcbiAgICAgICAgODYsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxMTIsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMzAsXG4gICAgICAgIDU1LFxuICAgICAgICAxNDksXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTA1LFxuICAgICAgICAyMzMsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTQ0LFxuICAgICAgICAyMjgsXG4gICAgICAgIDMyLFxuICAgICAgICA3NSxcbiAgICAgICAgNjMsXG4gICAgICAgIDExMlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDYsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMjQzLFxuICAgICAgICAxOTUsXG4gICAgICAgIDE1NixcbiAgICAgICAgMjE5LFxuICAgICAgICAyMjgsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTQwLFxuICAgICAgICAyMDUsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMzIsXG4gICAgICAgIDE4LFxuICAgICAgICAyMzksXG4gICAgICAgIDgsXG4gICAgICAgIDI0MixcbiAgICAgICAgNjgsXG4gICAgICAgIDU0LFxuICAgICAgICA2NCxcbiAgICAgICAgMjI2LFxuICAgICAgICAxMzUsXG4gICAgICAgIDIwOSxcbiAgICAgICAgNjYsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMjI3LFxuICAgICAgICAyMjksXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTkxLFxuICAgICAgICAxMixcbiAgICAgICAgMjQ1LFxuICAgICAgICAxMjksXG4gICAgICAgIDg3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMjQsXG4gICAgICAgIDIzMSxcbiAgICAgICAgNDksXG4gICAgICAgIDIyMixcbiAgICAgICAgMTUyLFxuICAgICAgICAxMDEsXG4gICAgICAgIDEzMyxcbiAgICAgICAgOTUsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjI2LFxuICAgICAgICAxMzMsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMzAsXG4gICAgICAgIDYwLFxuICAgICAgICA0NyxcbiAgICAgICAgMjIxLFxuICAgICAgICA3OSxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxMDUsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTM4LFxuICAgICAgICAyOSxcbiAgICAgICAgMjM4LFxuICAgICAgICAyMDEsXG4gICAgICAgIDE3LFxuICAgICAgICAxNTEsXG4gICAgICAgIDE4NixcbiAgICAgICAgMjUxLFxuICAgICAgICA0OCxcbiAgICAgICAgMjE4LFxuICAgICAgICAxMDQsXG4gICAgICAgIDEyNVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxODcsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTI2LFxuICAgICAgICA2NSxcbiAgICAgICAgMTQyLFxuICAgICAgICA1MCxcbiAgICAgICAgMTIxLFxuICAgICAgICA3NSxcbiAgICAgICAgNTgsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTAzLFxuICAgICAgICAxMTksXG4gICAgICAgIDYxLFxuICAgICAgICA5MixcbiAgICAgICAgODAsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxNjcsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTcyLFxuICAgICAgICAzNixcbiAgICAgICAgMTU1LFxuICAgICAgICAyNTUsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTUsXG4gICAgICAgIDQ3LFxuICAgICAgICA4LFxuICAgICAgICAyNDEsXG4gICAgICAgIDkwLFxuICAgICAgICA4NyxcbiAgICAgICAgMjA0LFxuICAgICAgICA5MlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTIwLFxuICAgICAgICAxNjUsXG4gICAgICAgIDMwLFxuICAgICAgICAyNDIsXG4gICAgICAgIDMyLFxuICAgICAgICAxNzgsXG4gICAgICAgIDc5LFxuICAgICAgICAxMzgsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTQ5LFxuICAgICAgICAyMDQsXG4gICAgICAgIDIyLFxuICAgICAgICAxMDgsXG4gICAgICAgIDE2NixcbiAgICAgICAgMjMsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTI0LFxuICAgICAgICAxNDksXG4gICAgICAgIDI1NSxcbiAgICAgICAgMjQxLFxuICAgICAgICAxNjUsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMjM3LFxuICAgICAgICAyMDIsXG4gICAgICAgIDU5LFxuICAgICAgICAyMTAsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTMzLFxuICAgICAgICA1NCxcbiAgICAgICAgNSxcbiAgICAgICAgODksXG4gICAgICAgIDY1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEzLFxuICAgICAgICAxMzAsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTc1LFxuICAgICAgICA1NyxcbiAgICAgICAgMSxcbiAgICAgICAgMjM5LFxuICAgICAgICA3MixcbiAgICAgICAgMTMxLFxuICAgICAgICAxNTksXG4gICAgICAgIDMyLFxuICAgICAgICAxNzMsXG4gICAgICAgIDc4LFxuICAgICAgICAxNjgsXG4gICAgICAgIDE5NixcbiAgICAgICAgNyxcbiAgICAgICAgNzIsXG4gICAgICAgIDEwLFxuICAgICAgICAxNixcbiAgICAgICAgMTk5LFxuICAgICAgICA3OSxcbiAgICAgICAgMTc0LFxuICAgICAgICAxMzQsXG4gICAgICAgIDEwLFxuICAgICAgICAxMzYsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMjQ4LFxuICAgICAgICA2OSxcbiAgICAgICAgMjQ5LFxuICAgICAgICA0OSxcbiAgICAgICAgMjAwLFxuICAgICAgICA4MVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA0OCxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICA2NixcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICA2MixcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAzNixcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDExNlxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICA1NixcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDUwXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM4LFxuICAgICAgICAxMjgsXG4gICAgICAgIDkwLFxuICAgICAgICAxNjksXG4gICAgICAgIDAsXG4gICAgICAgIDIwLFxuICAgICAgICAxMjksXG4gICAgICAgIDE1NCxcbiAgICAgICAgMjI3LFxuICAgICAgICAxNzgsXG4gICAgICAgIDE4MixcbiAgICAgICAgNDEsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTE3LFxuICAgICAgICA3MSxcbiAgICAgICAgNTUsXG4gICAgICAgIDM0LFxuICAgICAgICAyNTUsXG4gICAgICAgIDE5MyxcbiAgICAgICAgNzIsXG4gICAgICAgIDcyLFxuICAgICAgICAyNSxcbiAgICAgICAgMTMzLFxuICAgICAgICAxMzksXG4gICAgICAgIDcyLFxuICAgICAgICAzOCxcbiAgICAgICAgMTMyLFxuICAgICAgICAyMzMsXG4gICAgICAgIDEyMyxcbiAgICAgICAgNTYsXG4gICAgICAgIDE4LFxuICAgICAgICAxODgsXG4gICAgICAgIDIxNCxcbiAgICAgICAgNzYsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTY2LFxuICAgICAgICA4OSxcbiAgICAgICAgNzQsXG4gICAgICAgIDk3LFxuICAgICAgICA1MCxcbiAgICAgICAgMTQ1LFxuICAgICAgICA2LFxuICAgICAgICAxNTIsXG4gICAgICAgIDYxLFxuICAgICAgICAxNCxcbiAgICAgICAgMTczLFxuICAgICAgICAyNDQsXG4gICAgICAgIDY3LFxuICAgICAgICAxMDEsXG4gICAgICAgIDY1LFxuICAgICAgICAyNDUsXG4gICAgICAgIDYsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTI1LFxuICAgICAgICAyMDMsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMjMsXG4gICAgICAgIDE1LFxuICAgICAgICA4NSxcbiAgICAgICAgMTAxLFxuICAgICAgICAxMjAsXG4gICAgICAgIDI4LFxuICAgICAgICAxMzEsXG4gICAgICAgIDVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE3MyxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJTNWFvV1dlVnhNK0VCbHNhT0RkVzM5NjNGd0ZMbThLZmt4cGZKQnMyRElRPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjIzNDgxMzQ3ODI4NTFAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjg4MkY2NkUzOEMxMkRBODhFN0Q0QzlEOEIwRUQ0OEIzXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyNTQ0NjQ4NVxuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjIzNDgxMzQ3ODI4NTFAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjcwMEYwOTZENzYyQ0VFMkVDRTAzQTdCN0NENjVGNjFDXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyNTQ0NjQ4N1xuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJXeUFEVEo3blNxLTJQWEhkTlBBZEN3XCIsXG4gIFwicGhvbmVJZFwiOiBcIjhiNmI2MTIyLTRiYmQtNDdlNi1iZWY0LTFmODAxNjkwMjA4Y1wiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA2MixcbiAgICAgIDcwLFxuICAgICAgMjA3LFxuICAgICAgMjA0LFxuICAgICAgMTI2LFxuICAgICAgMTgwLFxuICAgICAgNjUsXG4gICAgICAyNixcbiAgICAgIDI3LFxuICAgICAgNDcsXG4gICAgICAyNDksXG4gICAgICA5NixcbiAgICAgIDIxMixcbiAgICAgIDI1MyxcbiAgICAgIDE0OSxcbiAgICAgIDcwLFxuICAgICAgMjM1LFxuICAgICAgMTMzLFxuICAgICAgMjUxLFxuICAgICAgNTFcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgODEsXG4gICAgICAxNDQsXG4gICAgICA2MyxcbiAgICAgIDEzNSxcbiAgICAgIDQ2LFxuICAgICAgMjQ2LFxuICAgICAgMjIyLFxuICAgICAgODAsXG4gICAgICAyMjksXG4gICAgICAxNzUsXG4gICAgICA2NSxcbiAgICAgIDUyLFxuICAgICAgMjIwLFxuICAgICAgMTAwLFxuICAgICAgMjIyLFxuICAgICAgMTcsXG4gICAgICA2NyxcbiAgICAgIDE0NixcbiAgICAgIDE4NyxcbiAgICAgIDIzM1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCIxUVhUNjlaUlwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0ODEzNDc4Mjg1MToxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxNjgwMzY4MjA2Mzk4MzE6MUBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNKNnJ6cVVFRU03eTRMWUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIk9INDdIL0NKdWRGczVoT3lxZVk4R1lxaVZvZUhIOXZ4b2NrWXR4TFBXRHM9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiYlJ1VmhSa0daenVDTW9tNU0yMEIxeTllNWp2bEhMNDFjY2YvcE12a2s0YXRwQzBnTXJnbi9vd1EyVUlGckxkaTBNNXkyQmlMaEpTM1AxL1NYQlNyRFE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiNVRtTWFidmZPQXNHcWFrc1FYNlI0WDE2UzBKdGExUkdtTFpUQjdXelQ3dDMxK1Y2RTdjZmxWWlgycUgwN1k2c0NDemptMjlOQllZUFpwM2loTVZEQ3c9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0ODEzNDc4Mjg1MToxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICA1OVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzI1NDQ2NDgyXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LXVuZGVmaW5lZC5qc29uIjoge30KfQ==",  // PUT SESSION ID HERE 
  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,

  aitts_Voice_Id : process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE||process.env.MODE || "private",
  LANG: process.env.THEME ? process.env.THEME.toUpperCase() : "SUHAIL",



};




























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
 
