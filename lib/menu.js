exports.menu = (id, BotName, corohelp, tampilTanggal, tampilWaktu, instagram, whatsapp, kapanbotaktif, grupch1, grupch2) => {
	return `  *${BotName}* 
  
*${tampilTanggal}* 
*${tampilWaktu}* 

*Command*
 



*!ocr*
(untuk melihat text dari gambar yang kamu kirimkan)
Pengggunaan : Kirimkan gambarmu dengan caption !ocr

*!pantun*
(akan mengirimkanmu pantun secara random)

*!animepict*
(akan mengirimkanmu gambar anime secara random_



🎃_*!nulis <teks>*_
_${BotName}_✨ akan menuliskan teks yang kamu kirimkan

Contoh: !nulis pasti nana bangka dadang ko bang jamping jamping 

*!quotes*
*!pict <cewek/cowok>*
       Contoh: !pict cowok
*!animepict*
*!say* <teks>
       Contoh: !say buset bang
*!lirik* <penyanyi-judul lagu>
       contoh : !lirik Lisa-Gurenge
*!alay* <teks>
       contoh : !alay ampun bang jago
*!sholat* <daerah>
_${BotName}_✨ akan mengirimkan jadwal sholat sesuai dengan daerah yang kamu kirimkan

Penggunaan 	: !sholat + daerah kamu
Contoh		: !sholat Bekasi

🎇_*!quran*_
_${BotName}_✨ akan mengirimkanmu ayat Al-Quran secara random



🎃_*!wiki <yang kamu cari>*_
(akan mencarikan yang kamu mau di wikipedia
Contoh: !wiki gula

🎃_*!covid*_
_${BotName}_✨ akan menampilkan data tentang COVID-19 di Indonesia




 🍭 *Follow Me On Instagram*
${instagram}
👾Whatsapp : ${whatsapp}


`
}
