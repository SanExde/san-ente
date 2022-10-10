const fs = require("fs");
const petik = '```'
let setting = JSON.parse(fs.readFileSync('./config.json'))
const { getLimit, getBalance, cekGLimit } = require("../lib/limit")
function toCommas(x) {
    x = x.toString()
    var pattern = /(-?\d+)(\d{3})/;
     while (pattern.test(x))
       x = x.replace(pattern, "$1,$2");
    return x;
}
exports.allMenu = (role, ucapanWaktu, pushname, mundur, upload, download, ownerName, botName, jam, tanggal, runtime, isCreator, isPremium, sender, limitCount, limit, gcount, glimit, balance, prefix) => {
    return`${ucapanWaktu} ${pushname !== undefined ? pushname : 'Kak'}
Hitung Mundur Tahun Baru
${mundur}

╭─❍〘 MAIN MENU 〙
│ ❏ ${prefix}menu
│ ❏ ${prefix}infobot
│ ❏ ${prefix}donate
│ ❏ ${prefix}dashboard
│ ❏ ${prefix}owner
│ ❏ ${prefix}cekdrive
│ ❏ ${prefix}cekbandwidth
│ ❏ ${prefix}cekpremium
│ ❏ ${prefix}listpremium
│ ❏ ${prefix}listsewa
│ ❏ ${prefix}speed
│ ❏ ${prefix}runtime
│ ❏ ${prefix}listbahasa
╰──❍
╭─❍ 〘 TOOLS 〙 
│ ❏ ${prefix}sticker
│ ❏ ${prefix}stickerwm
│ ❏ ${prefix}smeme
│ ❏ ${prefix}toimg
│ ❏ ${prefix}tovideo
│ ❏ ${prefix}tomp3
│ ❏ ${prefix}ttp
│ ❏ ${prefix}attp
│ ❏ ${prefix}emojimix
│ ❏ ${prefix}nuliskiri
│ ❏ ${prefix}nuliskanan
│ ❏ ${prefix}foliokiri
│ ❏ ${prefix}foliokanan
│ ❏ ${prefix}say
│ ❏ ${prefix}translate
╰──❍
╭─❍〘 ANOMUS CHAT 〙
│ ❏ ${prefix}menfess
│ ❏ ${prefix}anonymous
│ ❏ ${prefix}start
│ ❏ ${prefix}next
│ ❏ ${prefix}stop
│ ❏ ${prefix}sendprofile
╰──❍
╭─❍〘 STORE MENU 〙
│❏ ${prefix}list
│❏ ${prefix}addlist
│❏ ${prefix}dellist
│❏ ${prefix}update
│❏ ${prefix}jeda
│❏ ${prefix}tambah
│❏ ${prefix}kurang
│❏ ${prefix}kali
│❏ ${prefix}bagi
│❏ ${prefix}delsetdone
│❏ ${prefix}changedone
│❏ ${prefix}setdone
│❏ ${prefix}delsetproses
│❏ ${prefix}changeproses
│❏ ${prefix}setproses
│❏ proses
│❏ done
╰──❍
╭─❍〘 DOWNLOAD MENU 〙
│❏ ${prefix}play
│❏ ${prefix}ytmp3
│❏ ${prefix}ytmp4
│❏ ${prefix}instagram
│❏ ${prefix}igphoto
│❏ ${prefix}igvideo
│❏ ${prefix}igreels
│❏ ${prefix}tiktok
│❏ ${prefix}tiktoknowm
│❏ ${prefix}tiktokaudio
│❏ ${prefix}mediafire
│❏ ${prefix}gitclone
╰──❍
╭─❍〘 GROUP MENU 〙
│❏ ${prefix}afk
│❏ ${prefix}welcome
│❏ ${prefix}left
│❏ ${prefix}setopen
│❏ ${prefix}changesetopen
│❏ ${prefix}delsetopen
│❏ ${prefix}setclose
│❏ ${prefix}changesetclose
│❏ ${prefix}delsetclose
│❏ ${prefix}setwelcome
│❏ ${prefix}changewelcome
│❏ ${prefix}delsetwelcome
│❏ ${prefix}setleft
│❏ ${prefix}changeleft
│❏ ${prefix}delsetleft
│❏ ${prefix}linkgc
│❏ ${prefix}setppgc
│❏ ${prefix}setnamegc
│❏ ${prefix}setdesc
│❏ ${prefix}antilink
│❏ ${prefix}antiwame
│❏ ${prefix}open
│❏ ${prefix}close
│❏ ${prefix}add
│❏ ${prefix}kick
│❏ ${prefix}promote
│❏ ${prefix}demote
│❏ ${prefix}revoke
│❏ ${prefix}hidetag
│❏ ${prefix}checksewa
╰──❍
╭─❍〘 GAMES MENU 〙
│❏ ${prefix}tictactoe
│❏ ${prefix}delttt
│❏ ${prefix}casino
│❏ ${prefix}delcasino
╰──❍
╭─❍〘 SEARCH MENU$ 〙
│❏ ${prefix}lirik
│❏ ${prefix}grupwa
│❏ ${prefix}pinterest
│❏ ${prefix}ytsearch
│❏ ${prefix}searchbyimage
╰──❍
╭─❍〘 RANDOM MENU 〙
│❏ ${prefix}cecan
│❏ ${prefix}cogan
│❏ ${prefix}waifu
╰──❍
╭─❍〘 BALANCE MENU 〙
│❏ ${prefix}topglobal
│❏ ${prefix}toplocal
│❏ ${prefix}buylimit
│❏ ${prefix}buyglimit
│❏ ${prefix}transfer
│❏ ${prefix}limit
│❏ ${prefix}balance
╰──❍
╭─❍〘 STORAGE 〙
│❏ ${prefix}addstik
│❏ ${prefix}addvn
│❏ ${prefix}addimg
│❏ ${prefix}addvid
│❏ ${prefix}liststik
│❏ ${prefix}listvn
│❏ ${prefix}listimg
│❏ ${prefix}listvid
╰──❍ 
╭─❍〘 BAILYES 〙
│❏ ${prefix}fitnah
│❏ ${prefix}nowa
│❏ ${prefix}getquoted
│❏ ${prefix}fakehidetag
│❏ ${prefix}react
│❏ ${prefix}setcmd
│❏ ${prefix}delcmd
╰──❍
╭─❍〘 OWNER MENU 〙
│❏ ${prefix}autoread
│❏ ${prefix}autobio
│❏ ${prefix}autorespond
│❏ ${prefix}anticall
│❏ ${prefix}autoblok212
│❏ ${prefix}join
│❏ ${prefix}left
│❏ ${prefix}self
│❏ ${prefix}public
│❏ ${prefix}setppbot
│❏ ${prefix}broadcast
│❏ ${prefix}bcimg
│❏ ${prefix}bcstik
│❏ ${prefix}bcvn
│❏ ${prefix}bcvideo
│❏ ${prefix}bcsewa
│❏ ${prefix}addpremium
│❏ ${prefix}delpremium
│❏ ${prefix}addsewa
│❏ ${prefix}delsewa
╰──❍
`
}
exports.donate = (pushname, ownerNumber) => {
    return`Contact  Owner:
wa.me/${ownerNumber} (Owner)`
}
