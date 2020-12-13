exports.donasi = (id, BotName, corohelp, tampilTanggal, tampilWaktu, instagram, whatsapp, kapanbotaktif, grupch1, grupch2) => {
	return `{ *MENU DONASI ${BotName}* }

*${id.split("@s.whatsapp.net")[0]}*
*${tampilTanggal}* 
*${tampilWaktu}* 


KALIAN BISA DONASI LEWAT :
   
*PULSA*: 085157566434
*DANA* : 085157566434

*Supaya Admin Semangat Update Bot ini*

${instagram}
${whatsapp}

`
}
