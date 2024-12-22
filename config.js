
global.botNumber = null // Masih ngebug pairing dari sini. nanti no nya masukin di console aja

global.self = false

global.eggPanel = 16 // Semua server harus sama

global.admin = [
  "6289526758020"
]

global.timeReload = 30000 // auto reload server

global.reseller = ["6289526758020", "62895630140094"]
global.idgc = "" // Bisa di kosongin kalok mau bot nya bisa di akses dari pm sama reseller

global.ownerNumber = "6289526758020"
global.ownerText = `\`VanitasRe\`\n\n> Jasa Install-Backup Panel\n> Jasa Fix\n> Jasa Decrypt (Full)\n> Request Sc/Scraper/Etc\n \n_Semua Gratis_\n*Ngantri*` // Ubah terserah


let fs = require('fs')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(`Update ${__filename}`)
delete require.cache[file]
require(file)
})
