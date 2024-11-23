// src/data/vocab.js

const vocab = [
  // // Regular Verbs
  // { english: "to answer", german: "antworten", gender: "nan" },
  // { english: "to work", german: "arbeiten", gender: "nan" },
  // { english: "to mean", german: "bedeuten", gender: "nan" },
  // { english: "to receive", german: "bekommen", gender: "nan" },
  // { english: "to use", german: "benutzen", gender: "nan" },
  // { english: "to order", german: "bestellen", gender: "nan" },
  // { english: "to visit", german: "besuchen", gender: "nan" },
  // { english: "to pay", german: "bezahlen", gender: "nan" },
  // { english: "to stay", german: "bleiben", gender: "nan" },
  // { english: "to need", german: "brauchen", gender: "nan" },
  // { english: "to think", german: "denken", gender: "nan" },
  // { english: "to discuss", german: "diskutieren", gender: "nan" },
  // { english: "to complete", german: "ergänzen", gender: "nan" },
  // { english: "to remember", german: "erinnern", gender: "nan" },
  // { english: "to explain", german: "erklären", gender: "nan" },
  // { english: "to allow", german: "erlauben", gender: "nan" },
  // { english: "to reach", german: "erreichen", gender: "nan" },
  // { english: "to tell", german: "erzählen", gender: "nan" },
  // { english: "to find", german: "finden", gender: "nan" },
  // { english: "to fly", german: "fliegen", gender: "nan" },
  // { english: "to photograph", german: "fotografieren", gender: "nan" },
  // { english: "to ask", german: "fragen", gender: "nan" },
  // { english: "to feel", german: "fühlen", gender: "nan" },
  // { english: "to go", german: "gehen", gender: "nan" },
  // { english: "to believe", german: "glauben", gender: "nan" },
  // { english: "to be called", german: "heißen", gender: "nan" },
  // { english: "to hear", german: "hören", gender: "nan" },
  // { english: "to buy", german: "kaufen", gender: "nan" },
  // { english: "to come", german: "kommen", gender: "nan" },
  // { english: "to cost", german: "kosten", gender: "nan" },
  // { english: "to live", german: "leben", gender: "nan" },
  // { english: "to learn", german: "lernen", gender: "nan" },
  // { english: "to love", german: "lieben", gender: "nan" },
  // { english: "to lie", german: "liegen", gender: "nan" },
  // { english: "to make/do", german: "machen", gender: "nan" },
  // { english: "to smoke", german: "rauchen", gender: "nan" },
  // { english: "to talk", german: "reden", gender: "nan" },
  // { english: "to travel", german: "reisen", gender: "nan" },
  // { english: "to say", german: "sagen", gender: "nan" },
  // { english: "to close", german: "schließen", gender: "nan" },
  // { english: "to taste", german: "schmecken", gender: "nan" },
  // { english: "to write", german: "schreiben", gender: "nan" },
  // { english: "to swim", german: "schwimmen", gender: "nan" },
  // { english: "to send", german: "senden", gender: "nan" },
  // { english: "to sing", german: "singen", gender: "nan" },
  // { english: "to sit", german: "sitzen", gender: "nan" },
  // { english: "to play", german: "spielen", gender: "nan" },
  // { english: "to stand", german: "stehen", gender: "nan" },
  // { english: "to study", german: "studieren", gender: "nan" },
  // { english: "to search", german: "suchen", gender: "nan" },
  // { english: "to dance", german: "tanzen", gender: "nan" },
  // { english: "to drink", german: "trinken", gender: "nan" },
  // { english: "to earn", german: "verdienen", gender: "nan" },
  // { english: "to sell", german: "verkaufen", gender: "nan" },
  // { english: "to understand", german: "verstehen", gender: "nan" },
  // { english: "to try", german: "versuchen", gender: "nan" },
  // { english: "to wait", german: "warten", gender: "nan" },
  // { english: "to reside", german: "wohnen", gender: "nan" },
  // { english: "to wish", german: "wünschen", gender: "nan" },
  // { english: "to show", german: "zeigen", gender: "nan" },

  // // Irregular Verbs
  // { english: "to drive/go", german: "fahren", gender: "nan" },
  // { english: "to eat", german: "essen", gender: "nan" },
  // { english: "to read", german: "lesen", gender: "nan" },
  // { english: "to have", german: "haben", gender: "nan" },
  // { english: "to load", german: "laden", gender: "nan" },
  // { english: "to give", german: "geben", gender: "nan" },
  // { english: "to recommend", german: "empfehlen", gender: "nan" },
  // { english: "to take", german: "nehmen", gender: "nan" },
  // { english: "to let/allow", german: "lassen", gender: "nan" },
  // { english: "to help", german: "helfen", gender: "nan" },
  // { english: "to see", german: "sehen", gender: "nan" },
  // { english: "to know", german: "wissen", gender: "nan" },
  // { english: "to run", german: "laufen", gender: "nan" },
  // { english: "to speak", german: "sprechen", gender: "nan" },
  // { english: "to be", german: "sein", gender: "nan" },
  // { english: "to sleep", german: "schlafen", gender: "nan" },
  // { english: "to meet", german: "treffen", gender: "nan" },
  // { english: "to become", german: "werden", gender: "nan" },
  // { english: "to carry/wear", german: "tragen", gender: "nan" },
  // { english: "to forget", german: "vergessen", gender: "nan" },
  // { english: "to wash", german: "waschen", gender: "nan" },
  // { english: "to advise/guess", german: "raten", gender: "nan" },
  
  // // Additional Separable Irregular Verbs
  // { english: "to begin", german: "anfangen", gender: "nan"},
  // { english: "to invite", german: "einladen", gender: "nan"},
  // { english: "to watch TV", german: "fernsehen", gender: "nan"},
  // { english: "to depart", german: "losfahren", gender: "nan"},
  // { english: "to take along", german: "mitnehmen", gender: "nan"},
  // { english: "to participate", german: "teilnehmen", gender: "nan"},

  // Adjectives
  // { english: "alone", german: "allein", gender: "nan" },
  // { english: "old", german: "alt", gender: "nan" },
  // { english: "young", german: "jung", gender: "nan" },
  // { english: "new", german: "neu", gender: "nan" },
  // { english: "poor", german: "arm", gender: "nan" },
  // { english: "rich", german: "reich", gender: "nan" },
  // { english: "good", german: "gut", gender: "nan" },
  // { english: "better", german: "besser", gender: "nan" },
  // { english: "best", german: "best", gender: "nan" },
  // { english: "bad", german: "schlecht", gender: "nan" },
  // { english: "cheap", german: "billig", gender: "nan" },
  // { english: "affordable", german: "günstig", gender: "nan" },
  // { english: "expensive", german: "teuer", gender: "nan" },
  // { english: "friendly", german: "freundlich", gender: "nan" },
  // { english: "happy", german: "glücklich", gender: "nan" },
  // { english: "sad", german: "traurig", gender: "nan" },
  // { english: "short", german: "kurz", gender: "nan" },
  // { english: "long", german: "lang", gender: "nan" },
  // { english: "big", german: "groß", gender: "nan" },
  // { english: "small", german: "klein", gender: "nan" },
  // { english: "nice", german: "nett", gender: "nan" },
  // { english: "great", german: "toll", gender: "nan" },
  // { english: "broken", german: "kaputt", gender: "nan" },
  // { english: "sick", german: "krank", gender: "nan" },
  // { english: "hot", german: "heiß", gender: "nan" },
  // { english: "cold", german: "kalt", gender: "nan" },
  // { english: "slow", german: "langsam", gender: "nan" },
  // { english: "fast", german: "schnell", gender: "nan" },
  // { english: "interesting", german: "interessant", gender: "nan" },
  // { english: "intelligent", german: "intelligent", gender: "nan" },
  // { english: "clean", german: "sauber", gender: "nan" },
  // { english: "beautiful", german: "schön", gender: "nan" },
  // { english: "wonderful", german: "wunderbar", gender: "nan" },
  // { english: "more", german: "mehr", gender: "nan" },
  // { english: "few", german: "wenig", gender: "nan" },
  // { english: "important", german: "wichtig", gender: "nan" },
  
  // Nouns
  // { english: "family", german: "Familie", gender: "die" },
  // { english: "man", german: "Mann", gender: "der" },
  // { english: "woman", german: "Frau", gender: "die" },
  // { english: "boy", german: "Junge", gender: "der" },
  // { english: "girl", german: "Mädchen", gender: "das" },
  // { english: "people", german: "Leute", gender: "die (plural)" },
  // { english: "friend (male)", german: "Freund", gender: "der" },
  // { english: "friend (female)", german: "Freundin", gender: "die" },
  // { english: "parents", german: "Eltern", gender: "die (plural)" },
  // { english: "father", german: "Vater", gender: "der" },
  // { english: "mother", german: "Mutter", gender: "die" },
  // { english: "brother", german: "Bruder", gender: "der" },
  // { english: "sister", german: "Schwester", gender: "die" },
  // { english: "grandparents", german: "Großeltern", gender: "die (plural)" },
  // { english: "grandfather", german: "Großvater", gender: "der" },
  // { english: "grandmother", german: "Großmutter", gender: "die" },
  // { english: "siblings", german: "Geschwister", gender: "die (plural)" },
  // { english: "child", german: "Kind", gender: "das" },
  // { english: "son", german: "Sohn", gender: "der" },
  // { english: "daughter", german: "Tochter", gender: "die" },
  // { english: "uncle", german: "Onkel", gender: "der" },
  // { english: "aunt", german: "Tante", gender: "die" },
  // { english: "profession", german: "Beruf", gender: "der" },
  // { english: "teacher (male)", german: "Lehrer", gender: "der" },
  // { english: "teacher (female)", german: "Lehrerin", gender: "die" },
  // { english: "student (male)", german: "Student", gender: "der" },
  // { english: "student (female)", german: "Studentin", gender: "die" },
  // { english: "doctor", german: "Arzt", gender: "der" },
  // { english: "engineer", german: "Ingenieur", gender: "der" },

  // { english: "address", german: "Adresse", gender: "die" },
  // { english: "country", german: "Land", gender: "das" },
  // { english: "language", german: "Sprache", gender: "die" },
  // { english: "city", german: "Stadt", gender: "die" },
  // { english: "street", german: "Straße", gender: "die" },
  // { english: "mobile number", german: "Handynummer", gender: "die" },
  // { english: "phone number", german: "Telefonnummer", gender: "die" },
  // { english: "gym", german: "Fitnessstudio", gender: "das" },
  // { english: "hobby", german: "Hobby", gender: "das" },
  // { english: "soccer", german: "Fußball", gender: "der" },
  // { english: "movie", german: "Film", gender: "der" },
  // { english: "book", german: "Buch", gender: "das" },
  // { english: "music", german: "Musik", gender: "die" },
  // { english: "sport", german: "Sport", gender: "der" },
  // { english: "favorite movie", german: "Lieblingsfilm", gender: "der" },
  // { english: "favorite music", german: "Lieblingsmusik", gender: "die" },
  // { english: "favorite sport", german: "Lieblingssport", gender: "der" },
  // { english: "year", german: "Jahr", gender: "das" },
  // { english: "month", german: "Monat", gender: "der" },
  // { english: "day", german: "Tag", gender: "der" },
  // { english: "Sunday", german: "Sonntag", gender: "der" },
  // { english: "Monday", german: "Montag", gender: "der" },
  // { english: "Tuesday", german: "Dienstag", gender: "der" },
  // { english: "Wednesday", german: "Mittwoch", gender: "der" },
  // { english: "Thursday", german: "Donnerstag", gender: "der" },
  // { english: "Friday", german: "Freitag", gender: "der" },
  // { english: "Saturday", german: "Samstag", gender: "der" },
  // { english: "week", german: "Woche", gender: "die" },
  // { english: "weekend", german: "Wochenende", gender: "das" },
  { english: "car", german: "Auto", gender: "das" },
  { english: "taxi", german: "Taxi", gender: "das" },
  { english: "bus", german: "Bus", gender: "der" },
  { english: "bicycle", german: "Fahrrad", gender: "das" },
  { english: "ship", german: "Schiff", gender: "das" },
  { english: "airplane", german: "Flugzeug", gender: "das" },
  { english: "flight", german: "Flug", gender: "der" },
  { english: "train", german: "Zug", gender: "der" },
  { english: "subway", german: "U-Bahn", gender: "die" },
  { english: "commuter train", german: "S-Bahn", gender: "die" },
  { english: "tram", german: "Straßenbahn", gender: "die" },
  { english: "train station", german: "Bahnhof", gender: "der" },
  { english: "main station", german: "Hauptbahnhof", gender: "der" },
  { english: "port/harbor", german: "Hafen", gender: "der" },
  { english: "airport", german: "Flughafen", gender: "der" },
  { english: "highway", german: "Autobahn", gender: "die" },

  // // Places
  // { english: "city", german: "Stadt", gender: "die" },
  // { english: "village", german: "Dorf", gender: "das" },
  // { english: "cafe", german: "Cafe", gender: "das" },
  // { english: "park", german: "Park", gender: "der" },
  // { english: "museum", german: "Museum", gender: "das" },
  // { english: "church", german: "Kirche", gender: "die" },
  // { english: "school", german: "Schule", gender: "die" },
  // { english: "appointment", german: "Termin", gender: "der" },
  // { english: "hotel", german: "Hotel", gender: "das" },
  // { english: "cinema", german: "Kino", gender: "das" },
  // { english: "restaurant", german: "Restaurant", gender: "das" },
  // { english: "shop", german: "Shop", gender: "der" },
  // { english: "store", german: "Laden", gender: "der" },
  // { english: "supermarket", german: "Supermarkt", gender: "der" },
  // { english: "fish market", german: "Fischmarkt", gender: "der" },
  // { english: "mall", german: "Einkaufszentrum", gender: "das" },
  // { english: "lake", german: "See", gender: "der" },
  // { english: "sea", german: "Meer", gender: "das" },
  // { english: "beach", german: "Strand", gender: "der" },
  // { english: "swimming pool", german: "Schwimmbad", gender: "das" },

  // Travel Items
  { english: "counter", german: "Schalter", gender: "der" },
  { english: "ticket", german: "Fahrkarte", gender: "die" },
  { english: "machine", german: "Automat", gender: "der" },
  { english: "ATM", german: "Geldautomat", gender: "der" },
  { english: "ticket machine", german: "Fahrkartenautomat", gender: "der" },
  { english: "vacation", german: "Urlaub", gender: "der" },
  { english: "holidays", german: "Ferien", gender: "die (plural)" },
  { english: "holiday home", german: "Ferienhaus", gender: "das" },
  { english: "guests", german: "Gäste", gender: "die (plural)" },
  { english: "passengers", german: "Fahrgäste", gender: "die (plural)" },
  { english: "excursion", german: "Ausflug", gender: "der" },

  // Entertainment
  // { english: "film", german: "Film", gender: "der" },
  // { english: "gym", german: "Fitnessstudio", gender: "das" },
  // { english: "photo", german: "Foto", gender: "das" },
  // { english: "camera", german: "Kamera", gender: "die" },
  // { english: "leisure time", german: "Freizeit", gender: "die" },
  // { english: "soccer", german: "Fußball", gender: "der" },
  // { english: "hobby", german: "Hobby", gender: "das" },
  // { english: "favorite movie", german: "Lieblingsfilm", gender: "der" },
  // { english: "favorite music", german: "Lieblingsmusik", gender: "die" },
  // { english: "melody", german: "Melodie", gender: "die" },
  // { english: "music", german: "Musik", gender: "die" },
  // { english: "message", german: "Nachricht", gender: "die" },
  // { english: "sports equipment", german: "Sportartikel", gender: "die (plural)" },
  // { english: "radio", german: "Radio", gender: "das" },
  // { english: "fun", german: "Spaß", gender: "der" },
  // { english: "song", german: "Lied", gender: "das" },
  // { english: "customer", german: "Kunde", gender: "der" },
  // { english: "relative", german: "Verwandte", gender: "die (plural)" },

  // Clothing
  { english: "suit", german: "Anzug", gender: "der" },
  { english: "belt", german: "Gürtel", gender: "der" },
  { english: "shirt", german: "Hemd", gender: "das" },
  { english: "pants", german: "Hose", gender: "die" },
  { english: "jacket", german: "Jacke", gender: "die" },
  { english: "clothing", german: "Kleidung", gender: "die" },
  { english: "skirt", german: "Rock", gender: "der" },
  { english: "bag", german: "Tasche", gender: "die" },
  { english: "scarf", german: "Tuch", gender: "das" },
  { english: "watch", german: "Uhr", gender: "die" },
  { english: "cup", german: "Tasse", gender: "die" },

  // Food and Drink
  // { english: "menu", german: "Speisekarte", gender: "die" },
  // { english: "breakfast", german: "Frühstück", gender: "das" },
  // { english: "dinner", german: "Abendessen", gender: "das" },
  // { english: "lunch", german: "Mittagessen", gender: "das" },
  // { english: "bakery", german: "Bäckerei", gender: "die" },
  // { english: "banana", german: "Banane", gender: "die" },
  // { english: "bread", german: "Brot", gender: "das" },
  // { english: "butter", german: "Butter", gender: "die" },
  // { english: "egg/eggs", german: "Ei", gender: "das" },
  // { english: "chocolate", german: "Schokolade", gender: "die" },
  // { english: "cake", german: "Kuchen", gender: "der" },
  // { english: "soup", german: "Suppe", gender: "die" },
  // { english: "sausage", german: "Wurst", gender: "die" },
  // { english: "sugar", german: "Zucker", gender: "der" },
  // { english: "onion", german: "Zwiebel", gender: "die" },
  // { english: "potato", german: "Kartoffel", gender: "die" },
  // { english: "potatoes", german: "Kartoffeln", gender: "die (plural)" },
  // { english: "cheese", german: "Käse", gender: "der" },
  // { english: "salad", german: "Salat", gender: "der" },
  // { english: "orange juice", german: "Orangensaft", gender: "der" },
  // { english: "drinks", german: "Getränke", gender: "die (plural)" },
  // { english: "meat", german: "Fleisch", gender: "das" },
  // { english: "chicken", german: "Hähnchen", gender: "das" },
  // { english: "fruit", german: "Obst", gender: "das" },
  // { english: "vegetables", german: "Gemüse", gender: "das" },
  // { english: "wine", german: "Wein", gender: "der" },
  // { english: "beer", german: "Bier", gender: "das" },

  // Shopping
  { english: "shopping cart", german: "Einkaufswagen", gender: "der" },
  { english: "shopping list", german: "Einkaufszettel", gender: "der" },
  { english: "checkout counter", german: "Kasse", gender: "die" },
  { english: "receipt", german: "Kassenbon", gender: "der" },
  { english: "bill/invoice", german: "Rechnung", gender: "die" },

  { english: "room", german: "Zimmer", gender: "das" },
{ english: "work room", german: "Arbeitszimmer", gender: "das" },
{ english: "shower room", german: "Bad / Badzimmer", gender: "das" },
{ english: "bedroom", german: "Schlafzimmer", gender: "das" },
{ english: "living room", german: "Wohnzimmer", gender: "das" },
{ english: "children's room", german: "Kinderzimmer", gender: "das" },
{ english: "toilet", german: "Toilette", gender: "die" },
{ english: "balcony", german: "Balkon", gender: "der" },
{ english: "kitchen", german: "Küche", gender: "die" },
{ english: "equipment", german: "Gerät", gender: "das" },
{ english: "stove", german: "Herd", gender: "der" },
{ english: "washing machine", german: "Waschmaschine", gender: "die" },
{ english: "TV", german: "Fernseher", gender: "der" },
{ english: "printer", german: "Drucker", gender: "der" },
{ english: "telephone", german: "Telefon", gender: "das" },
{ english: "lamp", german: "Lampe", gender: "die" },
{ english: "fridge", german: "Kühlschrank", gender: "der" },
{ english: "cupboard", german: "Schrank", gender: "der" },
{ english: "shelf", german: "Regal", gender: "das" },
{ english: "material", german: "Material", gender: "das" },
{ english: "contract", german: "Vertrag", gender: "der" },
{ english: "rent", german: "Miete", gender: "die" },
{ english: "neighbour", german: "Nachbar", gender: "der" },
{ english: "apartment", german: "Wohnung", gender: "die" },
{ english: "furniture", german: "Möbel", gender: "die" },
{ english: "table", german: "Tisch", gender: "der" },
{ english: "writing desk", german: "Schreibtisch", gender: "der" },
{ english: "stationery", german: "Schreibwaren", gender: "die" },
{ english: "armchair", german: "Sessel", gender: "der" },
{ english: "sofa", german: "Sofa", gender: "das" },
{ english: "chair", german: "Stuhl", gender: "der" },
{ english: "carpet", german: "Teppich", gender: "der" },
{ english: "bed", german: "Bett", gender: "das" },
{ english: "floor/level", german: "Stock", gender: "der" },
{ english: "floor/level", german: "Etage", gender: "die" },
{ english: "floor/level", german: "Geschoss", gender: "das" },
{ english: "basement", german: "Untergeschoss", gender: "das" },
{ english: "ground floor", german: "Erdgeschoss", gender: "das" },
{ english: "floor/floor surface", german: "Flur", gender: "der" },
{ english: "garden", german: "Garten", gender: "der" },
{ english: "paint/colour", german: "Farbe", gender: "die" },
{ english: "staircase", german: "Treppe", gender: "die" },
{ english: "escalator", german: "Rolltreppe", gender: "die" },
{ english: "elevator", german: "Aufzug", gender: "der" },
{ english: "magazine", german: "Zeitschrift", gender: "die" },
{ english: "newspaper", german: "Zeitung", gender: "die" }

];

export default vocab;
