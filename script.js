function toggleMenu() {
  const nav = document.querySelector('nav');
  nav.classList.toggle('open');
}

async function loadLang(lang) {
  const texts = langData[lang];
  if (!texts) return;

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (texts[key]) {
      el.textContent = texts[key];
    }
  });
}

document.addEventListener('DOMContentLoaded', () => {
  const select = document.getElementById('languageSelect');
  select.addEventListener('change', e => {
    const selectedLang = e.target.value;
    localStorage.setItem('selectedLang', selectedLang); // 👈 Salva in localStorage
    loadLang(e.target.value);
  });

  const savedLang = localStorage.getItem('selectedLang');
  if (savedLang) {
    select.value = savedLang; // imposta il valore selezionato nel menu
    loadLang(savedLang);
  } else {
    loadLang(select.value); // fallback se non c'è niente salvato
  }
});

const langData = {
  "it": {
    //generic
    "title": "Commander Armies",
    "titleBeginners": "Armies - Principianti",
    "titleContacts": "Armies - Contatti",
    "titleRules": "Armies - Regolamento",
    "titleTournaments": "Armies - Tornei",

    "header.title": "COMMANDER ARMIES",
    "footer": "© 2025 Commander Armies",

    "nav.home": "Home",
    "nav.rules": "Regolamento",
    "nav.tournaments": "Tornei",
    "nav.beginners": "Principianti",
    "nav.contact": "Contatti",

    // index
    "hero.h2": "Un nuovo formato tematico di Magic: The Gathering",
    "hero.p": "Costruisci armate coese e combatti epiche battaglie multiplayer!",
    "nav.indexContent1": "Commander Armies è un formato non competitivo per chi desidera immergersi in partite multigiocatore di Commander mantenendo una forte coerenza tematica",
    "nav.indexContent2": "In questo formato il tuo comandante sarà il capo di una grande armata di creature, pronto a fronteggiare orde di goblin, schiere angeliche, branchi di bestie o legioni di cavalieri.",
    "nav.indexContent3": "Chi riuscirà a reggersi ancora in piedi, vittorioso, alla  fine della partita?",

    //tournaments
    "tournaments.desc": "Partecipa agli eventi ufficiali e non ufficiali di Commander Armies! Segui il nostro calendario per rimanere aggiornato.",

    //contacts
    "contact.desc": "Per informazioni, domande o suggerimenti scrivici o unisciti su WhatsApp gruppo:",
    "contact.link": "https://chat.whatsapp.com/E4UlbvYa6ue3UrowMoCiNQ",

    //beginners
    "beginners.desc": "Nuovo a Magic o a Commander? Questa guida ti aiuterà a creare il tuo primo mazzo Army e iniziare a giocare!",
    "beginners.lands": "LE TERRE",
    "beginners.landsDesc": "Avere una solida base di terre è un'impresa ardua, ma tranquillo, ci pensiamo noi.",
    "beginners.landsDesc2": "In fondo alla pagina, nella descrizione, troverai una spiegazione del perchè queste terre sono utili",
    "beginners.landsLink": "https://archidekt.com/decks/14954099/armies_lands",

    //rules 
    "titleRules": "Regole - Magic Commander Armies",
    "header.title": "COMMANDER ARMIES",
    "nav.home": "Home",
    "nav.rules": "Regole",
    "nav.tournaments": "Tornei",
    "nav.beginners": "Principianti",
    "nav.contact": "Contatti",
    "rules.title": "REGOLE",
    "rules.intro": "Valgono tutte le normali regole di costruzione mazzo e di gioco di Commander, banlist inclusa, con in più le seguenti restrizioni in fase di costruzione mazzo:",
    "rules.deckbuilding.title": "COSTRUZIONE MAZZO",

    "rules.deckbuilding.creatures": "Tutte le creature del mazzo, compresi commander ed eventuali compagni o partner, devono condividere lo stesso sottotipo di creatura o fare riferimento a esso all'interno del testo (lo stesso vale per eventuali planeswalker utilizzati come comandanti).",
    "rules.deckbuilding.noncreatures": "Tutte le magie che non sono creatura o \"evergreen\" (vedi dopo) devono avere il sottotipo scelto (goblin, elfi, etc.) nel nome o nel testo dell'effetto, oppure avere in quest'ultimo una parola chiave (da qui in poi keyword) scelta per il mazzo tra quelle nella lista (vedi dopo).",
    "rules.deckbuilding.declaration": "Il sottotipo e la keyword scelti per il mazzo vengono dichiarati a inizio partita (es: Elfi - Esilia).",
    "rules.deckbuilding.notes.verbforms": "Tempi verbali e plurali sono considerati declinazioni della stessa parola (pescare, pescando, pescato, pescano sono declinazioni della keyword \"pesca\");",
    "rules.deckbuilding.notes.explanatory": "La keyword è valida anche se contenuta nel testo esplicativo di una meccanica (es: \"proliferare\" include la keyword \"segnalino\") o nel nome dell'icona (es: \"segnalino energia\" e include la keyword \"segnalino\");",
    "rules.deckbuilding.notes.changelings": "Ai fini della sola composizione del mazzo, cangianti, cloni e simili non sono considerati di sottotipi diversi da quelli stampati sulla carta stessa;",

    "rules.deckbuilding.notes.multipart": "In carte che si girano, si ruotano o hanno multiple istanze di carta (es: come avventure, battaglie, saghe/creatura, creatura/terra, stanze e affini) tutte le parti della carta vengono considerate (come fossero una carta unica) per stabilire se è legale o meno;",
    "rules.deckbuilding.notes.lands": "Le terre seguono le normali regole di commander;",
    "rules.deckbuilding.notes.aliases": "Carte nel cui nome c'è un alias utilizzato per definire varianti di razze o sotto-razze afferenti al tipo scelto sono legali (es: gli Akki sono i goblin su Kamigawa quindi la carta \"Pittura di Guerra degli Akki\" è giocabile in un mazzo goblin).",
    "rules.deckbuilding.examples": "Alcuni esempi generici possono essere:\nEnt per i Treefolk, Lossodonti e Mammuth per Elefanti, Kami per Spiriti, etc.",
    "rules.brackets.title": "REGOLE BRACKET E CARTE DECISIVE (GAME CHANGERS)",
    "rules.brackets.subtitle": "valgono inoltre le regole del bracket 3",
    "rules.evergreen.title": "LE CARTE EVERGREEN",

    "rules.evergreen.commander": "Carte non creatura con riferimento al Commander (es: Protezione feroce) sono legali;",
    "rules.evergreen.choosetype": "Carte non creatura contenenti il testo \"scegli un tipo di creatura\" sono permesse;",
    "rules.evergreen.addtype": "Carte creatura con \"ha il tipo scelto in aggiunta ai suoi tipi\" nel testo sono permesse.",
    "rules.keywords.title": "KEYWORD LEGALI IN ARMIES",
    "rules.keywords.attack": "Attacco",
    "rules.keywords.aura": "Aura",
    "rules.keywords.adventure": "Avventura",
    "rules.keywords.block": "Blocco",
    "rules.keywords.copy": "Copia",
    "rules.keywords.damage": "Danno",

    "rules.keywords.destroy": "Distruzione",
    "rules.keywords.equipment": "Equipaggiamento",
    "rules.keywords.exile": "Esilia",
    "rules.keywords.turn": "Gira",
    "rules.keywords.toss": "Lancio (toss, non cast)",
    "rules.keywords.mill": "Macina",
    "rules.keywords.maneuver": "Manovrare",
    "rules.keywords.counter": "Neutralizza",
    "rules.keywords.pay": "Paga",
    "rules.keywords.token": "Pedina",
    "rules.keywords.draw": "Pesca",
    "rules.keywords.scry": "Profetizza NUOVA",
    "rules.keywords.gift": "Regala",
    "rules.keywords.retake": "Riprendere",
    "rules.keywords.reveal": "Rivela",
    "rules.keywords.sacrifice": "Sacrifica",
    "rules.keywords.discard": "Scarta",
    "rules.keywords.counter_noun": "Segnalino",
    "rules.keywords.saddle": "Sellare",
    "rules.keywords.threshold": "Soglia",
    "rules.keywords.spend": "Spendere",
    "rules.keywords.landfall": "Terraferma",
    "rules.keywords.shoot": "Tiro",
    "rules.keywords.return": "Tornare (include Rimettere) NUOVA",
    "rules.keywords.void": "Vacuità",
    "rules.keywords.visit": "Visita",
    "rules.keywords.lifegain": "Vita (guadagno, valori specifici e raddoppio)",
    "rules.keywords.lifeloss": "Vita (perdita, valori specifici e dimezza)",
    "rules.keywords.vote": "Vota",
    "rules.keywords.plus": "+X/+X (aumentare e/o impostare statistiche)",
    "rules.keywords.minus": "-X/-X (abbassare e/o impostare statistiche)",
  },

  "en": {
    //generic
    "title": "Commander Armies",
    "titleBeginners": "Armies - Beginners",
    "titleContacts": "Armies - Contacts",
    "titleRules": "Armies - Rules",
    "titleTournaments": "Armies - Tournaments",

    "header.title": "COMMANDER ARMIES",
    "footer": "© 2025 Commander Armies",

    "nav.home": "Home",
    "nav.rules": "Rules",
    "nav.tournaments": "Tournaments",
    "nav.beginners": "Beginners",
    "nav.contact": "Contacts",

    // index
    "hero.h2": "A new themed format for Magic: The Gathering",
    "hero.p": "Build cohesive armies and fight epic multiplayer battles!",
    "nav.indexContent1": "Commander Armies is a non-competitive format for those who want to immerse themselves in multiplayer Commander games while maintaining a strong thematic consistency",
    "nav.indexContent2": "In this format, your commander will be the leader of a large army of creatures, ready to face hordes of goblins, angelic hosts, packs of beasts, or legions of knights.",
    "nav.indexContent3": "Who will still be standing victorious at the end of the game?",

    //tournaments
    "tournaments.desc": "Take part in official and unofficial Commander Armies events! Follow our calendar to stay up to date.",

    //contacts
    "contact.desc": "For information, questions, or suggestions, write to us or join our WhatsApp group:",
    "contact.link": "https://chat.whatsapp.com/E4UlbvYa6ue3UrowMoCiNQ",
    //beginners
    "beginners.desc": "New to Magic or Commander? This guide will help you build your first Army deck and start playing!",
    "beginners.lands": "LANDS",
    "beginners.landsDesc": "Building a solid land base is a daunting task, but don't worry, we've got you covered.",
    "beginners.landsDesc2": "At the bottom of the page, in the description, you'll find an explanation of why these lands are useful.",
    "beginners.landsLink": "https://archidekt.com/decks/14954099/armies_lands",

    //rules 
    "titleRules": "Rules - Magic Commander Armies",
    "header.title": "COMMANDER ARMIES",
    "nav.home": "Home",
    "nav.rules": "Rules",
    "nav.tournaments": "Tournaments",
    "nav.beginners": "Beginners",
    "nav.contact": "Contact",
    "rules.title": "RULES",
    "rules.intro": "All normal Commander deckbuilding and gameplay rules apply, including the banlist, with the following additional restrictions during deckbuilding:",
    "rules.deckbuilding.title": "DECK BUILDING",
    "rules.deckbuilding.creatures": "All creatures in the deck, including commanders and any companions or partners, must share the same creature subtype or reference it in their text (the same applies to any planeswalkers used as commanders).",
    "rules.deckbuilding.noncreatures": "All spells that are not creatures or 'evergreen' (see below) must have the chosen subtype (goblin, elf, etc.) in their name or effect text, or have a keyword (hereinafter referred to as ‘keyword’) chosen for the deck from those in the list (see below) in their effect text.",
    "rules.deckbuilding.declaration": "The subtype and keyword chosen for the deck are declared at the beginning of the game (e.g., Elves - Exile).",
    "rules.deckbuilding.notes.verbforms": "Verb tenses and plurals are considered inflections of the same word (draw, drawing, drawn, draw are inflections of the keyword ‘draw’);",
    "rules.deckbuilding.notes.explanatory": "The keyword is also valid if it is contained in the explanatory text of a mechanic (e.g., 'proliferate' includes the keyword 'counter') or in the name of the icon (e.g., 'energy counter' includes the keyword ‘counter’);",
    "rules.deckbuilding.notes.changelings": "For the purposes of deck building only, changelings, clones, and the like are not considered to be subtypes other than those printed on the card itself;",
    "rules.deckbuilding.notes.multipart": "In cards that flip, rotate, or have multiple instances of cards (e.g., adventures, battles, sagas/creatures, creatures/lands, rooms, and the like), all parts of the card are considered (as if they were a single card) to determine whether it is legal or not;",
    "rules.deckbuilding.notes.lands": "Lands follow the normal Commander rules.",
    "rules.deckbuilding.notes.aliases": "Cards with an alias in their name used to define variants of races or sub-races related to the chosen type are legal (e.g., Akki are goblins on Kamigawa, so the card 'Akki Warpaint' is playable in a goblin deck).",
    "rules.deckbuilding.examples": "Some generic examples may be:\nEnts for Treefolk, Lossodonti and Mammoths for Elephants, Kami for Spirits, etc.",
    "rules.brackets.title": "BRACKET RULES AND GAME CHANGERS",
    "rules.brackets.subtitle": "bracket 3 rules also apply",
    "rules.evergreen.title": "EVERGREEN CARDS",
    "rules.evergreen.commander": "Non-creature cards with reference to the Commander (e.g. Fierce Protection) are legal;",
    "rules.evergreen.choosetype": "Noncreature cards with text that says ‘choose a creature type’ are allowed;",
    "rules.evergreen.addtype": "Creature cards with text that says ‘has the chosen type in addition to its other types’ are allowed.",
    "rules.keywords.title": "LEGAL KEYWORDS IN ARMIES",
    "rules.keywords.attack": "Attack",
    "rules.keywords.aura": "Aura",
    "rules.keywords.adventure": "Adventure",
    "rules.keywords.block": "Block",
    "rules.keywords.copy": "Copy",
    "rules.keywords.damage": "Damage",
    "rules.keywords.destroy": "Destroy",
    "rules.keywords.equipment": "Equipment",
    "rules.keywords.exile": "Exile",
    "rules.keywords.turn": "Turn",
    "rules.keywords.toss": "Toss (not cast)",
    "rules.keywords.mill": "Mill",
    "rules.keywords.maneuver": "Maneuver",
    "rules.keywords.counter": "Counter",
    "rules.keywords.pay": "Pay",
    "rules.keywords.token": "Token",
    "rules.keywords.draw": "Draw",
    "rules.keywords.scry": "Scry NEW",
    "rules.keywords.gift": "Give",
    "rules.keywords.retake": "Retake",
    "rules.keywords.reveal": "Reveal",
    "rules.keywords.sacrifice": "Sacrifice",
    "rules.keywords.discard": "Discard",
    "rules.keywords.counter_noun": "Counter",
    "rules.keywords.saddle": "Saddle",
    "rules.keywords.threshold": "Threshold",
    "rules.keywords.spend": "Spend",
    "rules.keywords.landfall": "Landfall",
    "rules.keywords.shoot": "Shoot",
    "rules.keywords.return": "Return (includes Put Back) NEW",
    "rules.keywords.void": "Void",
    "rules.keywords.visit": "Visit",
    "rules.keywords.lifegain": "Life (gain, specific values, and double)",
    "rules.keywords.lifeloss": "Life (loss, specific values, and halve)",
    "rules.keywords.vote": "Vote",
    "rules.keywords.plus": "+X/+X (increase and/or set stats)",
    "rules.keywords.minus": "-X/-X (decrease and/or set stats)",
  },
  "es": {
    //genérico
    "title": "Comandante de ejércitos",
    "titleBeginners": "Ejércitos - Principiantes",
    "titleContacts": "Ejércitos - Contactos",
    "titleRules": "Ejércitos - Reglamento",
    "titleTournaments": "Ejércitos - Torneos",

    "header.title": "COMMANDER ARMIES",
    "footer": "© 2025 Commander Armies",

    "nav.home": "Inicio",
    "nav.rules": "Reglamento",
    "nav.tournaments": "Torneos",
    "nav.beginners": "Principiantes",
    "nav.contact": "Contactos",

    // índice
    "hero.h2": "Un nuevo formato temático de Magic: The Gathering",
    "hero.p": "¡Construye ejércitos cohesionados y libra épicas batallas multijugador!",
    "nav.indexContent1": "Commander Armies es un formato no competitivo para aquellos que desean sumergirse en partidas multijugador de Commander manteniendo una fuerte coherencia temática",
    "nav.indexContent2": "En este formato, tu comandante será el líder de un gran ejército de criaturas, listo para enfrentarse a hordas de goblins, ejércitos angelicales, manadas de bestias o legiones de caballeros.",
    "nav.indexContent3": "¿Quién seguirá en pie, victorioso, al final de la partida?",

    //tournaments
    "tournaments.desc": "¡Participa en los eventos oficiales y no oficiales de Commander Armies! Sigue nuestro calendario para estar al día.",

    //contacts
    "contact.desc": "Para obtener información, realizar preguntas o enviar sugerencias, escríbenos o únete a nuestro grupo de WhatsApp:",
    "contact.link": "https://chat.whatsapp.com/E4UlbvYa6ue3UrowMoCiNQ",

    //principiantes
    "beginners.desc": "¿Eres nuevo en Magic o Commander? ¡Esta guía te ayudará a crear tu primer mazo Army y empezar a jugar!",
    "beginners.lands": "LAS TIERRAS",
    "beginners.landsDesc": "Tener una base sólida de tierras es una tarea difícil, pero no te preocupes, nosotros nos encargamos.",
    "beginners.landsDesc2": "Al final de la página, en la descripción, encontrarás una explicación de por qué estas tierras son útiles",
    "beginners.landsLink": "https://archidekt.com/decks/14954099/armies_lands",

    //reglas 
    "titleRules": "Reglas - Ejércitos de Magic Commander",
    "header.title": "COMMANDER ARMIES",
    "nav.home": "Inicio",
    "nav.rules": "Reglas",
    "nav.tournaments": "Torneos",
    "nav.beginners": "Principiantes",
    "nav.contact": "Contacto",
    "rules.title": "REGLAS",
    "rules.intro": "Se aplican todas las reglas normales de construcción de mazos y de juego de Commander, incluida la lista de cartas prohibidas, con las siguientes restricciones adicionales en la fase de construcción de mazos:",
    "rules.deckbuilding.title": "CONSTRUCCIÓN DE MAZOS",
    "rules.deckbuilding.creatures": "Todas las criaturas del mazo, incluidos los comandantes y cualquier compañero o socio, deben compartir el mismo subtipo de criatura o hacer referencia a él en el texto (lo mismo se aplica a cualquier planeswalker utilizado como comandante)",
    "rules.deckbuilding.noncreatures": "Todas las magias que no sean criaturas o 'evergreen' (véase más adelante) deben tener el subtipo elegido (goblins, elfos, etc.) en el nombre o en el texto del efecto, o bien tener en este último una palabra clave (en adelante, 'keyword') elegida para el mazo entre las de la lista (véase más adelante)",
    "rules.deckbuilding.declaration": "El subtipo y la palabra clave elegidos para el mazo se declaran al comienzo de la partida (por ejemplo: Elfos - Exiliar)",
    "rules.deckbuilding.notes.verbforms": "Los tiempos verbales y los plurales se consideran declinaciones de la misma palabra (pescare, pescando, pescato, pescano son declinaciones de la palabra clave 'roba');",
    "rules.deckbuilding.notes.explanatory": "La palabra clave también es válida si aparece en el texto explicativo de una mecánica (por ejemplo: 'proliferar' incluye la palabra clave 'ficha') o en el nombre del icono (por ejemplo: 'ficha de energía' e incluye la palabra clave 'ficha');",
    "rules.deckbuilding.notes.changelings": "A efectos de la composición del mazo, los cambiantes, clones y similares no se consideran subtipos diferentes de los impresos en la propia carta;",

    "rules.deckbuilding.notes.multipart": "En las cartas que se voltean, se giran o tienen múltiples instancias de carta (por ejemplo: aventuras, batallas, sagas/criaturas, criaturas/tierras, habitaciones y similares), todas las partes de la carta se tienen en cuenta (como si fueran una sola carta) para determinar si es legal o no",
    "rules.deckbuilding.notes.lands": "Las tierras siguen las reglas normales de Commander;",
    "rules.deckbuilding.notes.aliases": "Las cartas cuyo nombre incluye un alias utilizado para definir variantes de razas o subrazas relacionadas con el tipo elegido son legales (por ejemplo: los Akki son los goblins de Kamigawa, por lo que la carta 'Pintura de guerra de los Akki' se puede jugar en un mazo de goblins)",
    "rules.deckbuilding.examples": "Algunos ejemplos genéricos pueden ser:\nEnt para los Treefolk, Lossodonti y Mammuth para Elefantes, Kami para Espíritus, etc.",
    "rules.brackets.title": "REGLAS DE BRACKET Y CARTAS DECISIVAS (GAME CHANGERS)",
    "rules.brackets.subtitle": "también se aplican las reglas del bracket 3",
    "rules.evergreen.title": "LAS CARTAS EVERGREEN",

    "rules.evergreen.commander": "Las cartas que no sean criaturas con referencia al comandante (por ejemplo, Protección feroz) son legales",
    "rules.evergreen.choosetype": "Las cartas que no sean criaturas y contengan el texto 'elige un tipo de criatura' están permitidas",
    "rules.evergreen.addtype": "Las cartas de criatura con 'tiene el tipo elegido además de sus tipos' en el texto están permitidas.",
    "rules.keywords.title": "PALABRAS CLAVE LEGALES EN ARMIES",
    "rules.keywords.attack": "Ataque",
    "rules.keywords.aura": "Aura",
    "rules.keywords.adventure": "Aventura",
    "rules.keywords.block": "Bloqueo",
    "rules.keywords.copy": "Copia",
    "rules.keywords.damage": "Daño",

    "rules.keywords.destroy": "Destrucción",
    "rules.keywords.equipment": "Equipo",
    "rules.keywords.exile": "Exiliar",
    "rules.keywords.turn": "Gira",
    "rules.keywords.toss": "Lancio (toss, non cast)",
    "rules.keywords.mill": "Moler",
    "rules.keywords.maneuver": "Maniobrar",
    "rules.keywords.counter": "Neutralizar",
    "rules.keywords.pay": "Pagar",
    "rules.keywords.token": "Ficha",
    "rules.keywords.draw": "Robar",
    "rules.keywords.scry": "Profetizar NUEVO",
    "rules.keywords.gift": "Regalar",
    "rules.keywords.retake": "Retomar",
    "rules.keywords.reveal": "Revelar",
    "rules.keywords.sacrifice": "Sacrificar",
    "rules.keywords.discard": "Descartar",
    "rules.keywords.counter_noun": "Ficha",
    "rules.keywords.saddle": "Ensillar",
    "rules.keywords.threshold": "Umbral",
    "rules.keywords.spend": "Usa",
    "rules.keywords.landfall": "Aterrizaje",
    "rules.keywords.shoot": "Tiro",
    "rules.keywords.return": "Regresa (include Regresar) NUOVA",
    "rules.keywords.void": "Vacìo",
    "rules.keywords.visit": "Visita",
    "rules.keywords.lifegain": "Vida (ganancia, valores específicos y duplicación)",
    "rules.keywords.lifeloss": "Vida (pérdida, valores específicos y reducción a la mitad)",
    "rules.keywords.vote": "Votar",
    "rules.keywords.plus": "+X/+X (aumentar y/o establecer estadísticas)",
    "rules.keywords.minus": "-X/-X (reducir y/o establecer estadísticas)",
  }
}