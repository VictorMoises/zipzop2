exports.menu = (id, BotName, corohelp, tampilTanggal, tampilWaktu, instagramlu, whatsapplu, kapanbotaktif, grupch1, grupch2) => {
	return `🔰 -----[ *MENU ${BotName}* ]----- 🔰
  Olá *${id.split("@s.whatsapp.net")[0]}* 👋️


Aqui estão alguns dos recursos deste bot! ✨

♻ Comandos / Comandos :
   
=> *1.CRIAR FIGURINHA*
_enviará seu adesivo com uma legenda #sticker!_
Comando: #sticker
Exemplo: Mande uma imagem com legenda #sticker

=> *2.ESCRITA AUTOMÁTICA*
_irá enviar a escrita no livro de acordo com o que você enviou!_
Comando: #escrever [a palavra]
Exemplo: #escrever O belo autor 

=> *3.RECURSOS PANTUN*
_vai enviar uma rima aleatória!_
Comando: #pantun
Exemplo: #pantun

=> *4.DOWNLOAD DO YOUTUBE*
_irá enviar o downloader de vídeo do youtube de acordo com o seu comando!_
Comando: #yt [link]
Exemplo: #yt https://youtu.be/blablabla

=> *5.RECURSOS DE CITAÇÕES*
_irá enviar uma palavra aleatória de sabedoria!_
Comando: #quotes
Exemplo: #quotes

=> *6.GACHA*
_irá enviar a imagem /  de acordo com o que você enviou!_
Comando: #gacha [cewek/cowok]
Exemplo: #gacha cewek

=> *7.RECURSOS DO ANIME*
_irá enviar imagens de anime aleatoriamente!_
Comando: #randomanime
Exemplo: #randomanime

=> *10.INFORMAÇÕES DO BOT*
_irá enviar informações sobre o bot!_
Comando: #info
Exemplo: #info

=> *11.DIGA RECURSOS*
_vai enviar as palavras de acordo com você !_
Comando: #dizer [a palavra]
Exemplo: #dizer olá bonito autor

=> *12.DOWNLOAD DO YOUTUBE MP3*
_irá enviar a música de acordo com o comando que você enviou!_
Comando: #ytmp3 [link]
Exemplo: #ytmp3 https://youtu.be/xxxx

=> *13.VIDEO INSTAGRAM / FOTO DOWNLOADER*
_irá enviar vídeo / foto ig de acordo com o pedido que você enviar!_
Comando: #ig [link]
Exemplo: #ig https://instagram.com/xxxx

=> *14.FACEBOOK VIDEO / PHOTO DOWNLOADER*
_irá enviar o vídeo / foto fb de acordo com o pedido que você enviar!_
Comando: #fb [link]
Exemplo: #fb https://facebook.com/xxxx

=> *15.BAIXAR VÍDEO / FOTO NO TWITTER*
_irá enviar um vídeo / foto do twitter de acordo com o comando que você enviar!_
Comando: #twt [link]
Exemplo: #twt https://twitter.com/xxxx

=> *16.WIKIPEDIA*
_irá enviar os resultados da wikipedia de acordo com o comando que você enviar!_
Comando: #wiki [A pergunta] OFF
Exemplo: #wiki cat

=> *17.LETRA *
_enviará a letra de alguma música!_
Comando: #letra
Exemplo: #letra trem bala

✅ Siga o instagram do administrador 

⚠️ ÚLTIMAS INFORMAÇÕES SOBRE COVID-19!

⚠️ POSITIVO: *${corohelp.confirmed.value}*
⚠️ CURADOS: *${corohelp.recovered.value}*
⚠️ ATUALIZADO: *${corohelp.lastUpdate}*

♻️ _MANTENHA SUA SAÚDE E SEMPRE USE MASCARA!_


⚠️ Use-o com sabedoria ‼️
⚠️ Este bot está rodando ${kapanbotaktif} ‼️


🔰 -----[ *POWERED BY Victor* ]----- 🔰`
}
