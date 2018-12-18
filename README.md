# Aufgabe

EDIT: Im refactoring branch bin ich gerade etwas am umstrukturieren. Dort verwende ich jetzt vuex um das state management zu erleichtern. Außerdem werde ich die Komponenten noch etwas generalisieren. Die Readme werde ich dann auch noch etwas anpassen.

Hey Team,

ich versuche mal etwas über mein Gedankengang zu schreiben und warum ich was implementiert habe.
Also fange ich mal mit dem Framework an. Als JS Framework habe ich VueJS verwendet. Ich habe VueJS gewählt, da ich vor 
kurzem das erste mal damit gearbeitet habe. Ich habe noch nicht viel mit VueJS entwickelt. Allerdings hat es mir seit beginn super gefallen.
Außerdem kommt VueJS mit einer schlanken aber starken Toolbox um schnell und einfach zu Entwickeln. Ich fande für diese Aufgabe war dies
die richtige Wahl. Nicht zu viel, nicht zu wenig. Vue router habe ich verwendet um das "deep linking" von den 
Filmen zu vereinfachen.
Wir haben links die Detailansicht und rechts die Listenansicht.
Die Daten werden hauptsächlich von der "Home.vue" verwaltet, da die "DetailView" bzw.
"ListView" relativ "dumme Komponenten" sein sollen, die keine Logik (nur view Logik) enthalten sollen. 
Mit Api.js wird die Rest-Schnittstelle angesprochen. Da dies allerdings einee sehr kleine Aufgabe ist, wohl etwas überflüssig.
Dennoch mit der Option im Hinterkopf die Anwendung später mit mehr Features zu erweitern.
Tests habe ich ehrlich gesagt für VueJS nocht nie geschrieben (da gerade vieles Neuland). Habe angefangen ein paar zu schreiben, 
da müsste ich mich aber wohl noch etwas mit der Doku beschäftigen.

Ich denke grob war's das jetzt erst mal. Den Rest werden wir wohl auch persönlich dann besprechen.

Viele Grüße
Kevin

Hier kurz die Informationen um alles einzurichten:

Vorbereitung:
`npm install -g @vue/cli-service-global`

1. `git clone https://github.com/kwoodland/movie-db-challenge-frontend`
2. `cd movie-db-challenge-frontend`
3. `npm install`
4. `npm run serve`
5. Standardmäßig auf `http://localhost:8080/` erreichbar.

Tests (Nicht fertig):
`npm run test:unit`

