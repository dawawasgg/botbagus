let handler = async (m, { conn, text, usedPrefix, command }) => {

conn.sendImageAsSticker(m.chat, 'https://telegra.ph/file/f4ff2dcf458c7b871dd4e.png', m, { packname: "πΌππππ½πππ", author: "@πππΏππ" })
}

handler.customPrefix = /^(nice)$/i
handler.command = new RegExp

module.exports = handler
