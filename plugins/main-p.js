let handler = async (m, { conn, text, usedPrefix, command }) => {

conn.sendImageAsSticker(m.chat, 'https://telegra.ph/file/f79970601b4ca4e0a8e71.png', m, { packname: "πΌππππ½πππ", author: "@πππΏππ" })
}

handler.customPrefix = /^(p)$/i
handler.command = new RegExp

module.exports = handler
