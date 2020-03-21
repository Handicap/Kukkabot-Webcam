# Kukkabot

Forkki Ynnän Jyrkibotista joka toimii hyödyntäen yleisempää webbikameratouhua Raspberry kameran sijaan.

## Riippuvuudet:
- dotenv
- discord.js
- node-webcam

## Käyttö tyhjästä:
- asenna node.js
 - linux: apt install nodejs
- asenna npm (nodejs package manager)
 - linux: apt install npm
- asenna vaaditut node.js paketit
  - dotenv
    - npm install dotenv
  - discord.js
    - npm install discord.js
  - (linux specific: asenna fswebcam)
    - (apt-get install fswebcam)
  - node-webcam
    - npm install node-webcam
- luo .env botillesi samaan kansioon, sisällöksi:
  - API_KEY:SunBottisiOmaSalainenAvain
- muuta server.js käyttöösi sopivaksi
  - muuta rivi 61 kanavanimi haluamaksesi
  - muuta kaikki viestit haluamaksesi
- aja 
  - node server.js
- nauti tai valita

Nykyisestä rakenteesta johtuen joudut myös luomaan "images" kansion botin juureen johon kuvat tallentuvat (mkdir images) because of reasons.

kts. https://github.com/roeyskoe/JyrkiBot
