exports.menu = (id, BotName, corohelp, tampilTanggal, tampilWaktu, instagramlu, whatsapplu, kapanbotaktif, grupch1, grupch2) => {
	return `🔰 -----[ *MENU* ]----- 🔰
  Olá *${id.split("@s.whatsapp.net")[0]}* 👋️


Aqui estão alguns dos recursos deste bot! ✨

♻ Comandos / Comandos :
   
=> *1.CRIAR FIGURINHA*
_enviará seu adesivo com uma legenda !sticker!_
Comando: !sticker
Exemplo: Mande uma imagem com legenda !sticker

=> *2.ESCRITA AUTOMÁTICA*
_irá enviar a escrita no livro de acordo com o que você enviou!_
Comando: !escrever [a palavra]
Exemplo: !escrever O belo autor 

=> *3.DOWNLOAD DO YOUTUBE*
_irá enviar o downloader de vídeo do youtube de acordo com o seu comando!_
Comando: !yt [link]
Exemplo: !yt https://youtu.be/blablabla


=> *4.GACHA*
_irá enviar a imagem /  de acordo com o que você enviou!_
Comando: !gacha [cewek/cowok]
Exemplo: !gacha cewek

=> *5.RECURSOS DO ANIME*
_irá enviar imagens de anime aleatoriamente!_
Comando: !randomanime

=> *6.INFORMAÇÕES DO BOT*
_irá enviar informações sobre o bot!_
Comando: !info

=> *7.DIGA RECURSOS*
_vai enviar as palavras de acordo com você !_
Comando: !dizer [a palavra]
Exemplo: !dizer olá

=> *8.DOWNLOAD DO YOUTUBE MP3*
_irá enviar a música de acordo com o comando que você enviou!_
Comando: !ytmp3 [link]
Exemplo: !ytmp3 https://youtu.be/xxx

=> *9.VIDEO INSTAGRAM / FOTO DOWNLOADER*
_irá enviar vídeo / foto ig de acordo com o pedido que você enviar!_
Comando: !ig [link]
Exemplo: !ig https://instagram.com/xxxx

=> *10.FACEBOOK VIDEO / PHOTO DOWNLOADER*
_irá enviar o vídeo / foto fb de acordo com o pedido que você enviar!_
Comando: !fb [link]
Exemplo: !fb https://facebook.com/xxxx

=> *11.BAIXAR VÍDEO / FOTO NO TWITTER*
_irá enviar um vídeo / foto do twitter de acordo com o comando que você enviar!_
Comando: !twt [link]
Exemplo: !twt https://twitter.com/xxxx

=> *12.WIKIPEDIA*
_irá enviar os resultados da wikipedia de acordo com o comando que você enviar!_
Comando: !wiki [A pergunta] OFF
Exemplo: !wiki cat

=> *13.LETRA *
_enviará a letra de alguma música!_
Comando: !letra
Exemplo: !letra trap do gago


⚠️ ÚLTIMAS INFORMAÇÕES SOBRE COVID-19!

⚠️ POSITIVO: *${corohelp.confirmed.value}*
⚠️ CURADOS: *${corohelp.recovered.value}*
⚠️ ATUALIZADO: *${corohelp.lastUpdate}*

♻️ _MANTENHA SUA SAÚDE E SEMPRE USE MASCARA!_


⚠️ Use-o com sabedoria ‼️
⚠️ Este bot está rodando ${kapanbotaktif} ‼️


🔰 -----[ *POWERED BY Victor* ]----- 🔰`
}
