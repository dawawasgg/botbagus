let handler = async m => m.reply(`
ππππ πππ ππΌππ ππππ ππΌ ππΌπΌπ
`.trim()) // Tambah sendiri kalo mau
handler.help = ['alquran *114 1*']
handler.tags = ['islam']
handler.command = /^(al)?quran$/i

module.exports = handler
