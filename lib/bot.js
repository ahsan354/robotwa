exports.bot = (id, BotName, corohelp, tampilTanggal, tampilWaktu, instagram, whatsapp, kapanbotaktif, grupch1, grupch2) => {
	return `  *${BotName}* 
  
*${tampilTanggal}* 
*${tampilWaktu}* 

Hi. *${id.split("@s.whatsapp.net")[0]}*

*Silahkan Pilih
Generasi Bot ini*
 
_*.botv3*_
_*.botv5*_
_*.botv4*_

*Follow Me On Instagram*
${instagram}
Whatsapp Owner Bot 
${whatsapp}


`
}
