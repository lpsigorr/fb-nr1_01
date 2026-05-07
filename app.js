// ─── TRANSLATIONS ────────────────────────────────────────────────────────────
// To add or edit text, just update this object. No touching the HTML needed.

const translations = {
  en: {
    tag_vehicles:         "200 vehicles",
    tab_nr1_hint:         "Types A–E · up to 5T",
    tab_fb_hint:          "Type F · up to 33T",
    tab_contact_title:    "Contact",
    tab_contact_hint:     "Orders & Sales",

    nr1_subtitle:         "Express Fleet",
    nr1_desc:             "From a single parcel to full pallet loads. Fast and reliable delivery by NR1 drivers.",

    fb_subtitle:          "Type F · Semi-Trailers",
    fb_desc:              "Heavy transport from 1g to 33 tonnes. 5 trailer configurations, all managed by the Truck Department.",
    fb_notice:            "📞 All Type F bookings via INT Sales: Eddy",

    stat_weight:          "Max Weight",
    stat_length:          "Max Length",
    stat_height:          "Max Height",
    stat_volume:          "Volume",
    stat_pallets:         "Pallets",

    vehicle_refrigerator: "Refrigerator",
    vehicle_boxtruck:     "Box Truck",
    vehicle_truck:        "Truck",
    cold_chip:            "❄ Cold",
    configs_2:            "2 configs",
    por:                  "💬 Price on Request",

    semi_bache_desc:      "Tarpaulin semi-trailer with open sides for easy multi-angle loading. Ideal for standard freight and oversized loads.",
    semi_box_desc:        "Fully enclosed box trailer. Secure and weatherproof for sensitive or high-value cargo.",
    semi_frigo_desc:      "Full refrigerated semi-trailer for large cold chain shipments. Temperature-controlled throughout.",
    semi_cityfrigo_desc:  "Refrigerated semi adapted for urban routes. Compact enough for city access restrictions.",
    semi_city_desc:       "Standard urban semi-trailer optimized for last-mile delivery in dense city environments.",

    contact_title:        "Contact & Orders",
    contact_desc:         "Reach the right person for your shipment. Click any email to open your mail client directly.",
    contact_nr1_title:    "NR1 Orders",
    contact_nr1_role:     "Types A → E · Express fleet",
    contact_fb_title:     "FB Sales",
    contact_fb_role:      "Sales & domestic freight",
    contact_general_title:"General Contact",
    contact_general_role: "All departments · international & domestic",
  },

  fr: {
    tag_vehicles:         "200 véhicules",
    tab_nr1_hint:         "Types A–E · jusqu'à 5T",
    tab_fb_hint:          "Type F · jusqu'à 33T",
    tab_contact_title:    "Contact",
    tab_contact_hint:     "Commandes & Ventes",

    nr1_subtitle:         "Flotte Express",
    nr1_desc:             "D'un simple colis à des chargements complets. Livraison rapide et fiable par les chauffeurs NR1.",

    fb_subtitle:          "Type F · Semi-remorques",
    fb_desc:              "Transport lourd de 1g à 33 tonnes. 5 configurations de remorques, toutes gérées par le département Camions.",
    fb_notice:            "📞 Toutes les réservations Type F via INT Sales : Eddy",

    stat_weight:          "Poids max",
    stat_length:          "Longueur max",
    stat_height:          "Hauteur max",
    stat_volume:          "Volume",
    stat_pallets:         "Palettes",

    vehicle_refrigerator: "Réfrigérateur",
    vehicle_boxtruck:     "Camion caisse",
    vehicle_truck:        "Camion",
    cold_chip:            "❄ Froid",
    configs_2:            "2 configs",
    por:                  "💬 Prix sur demande",

    semi_bache_desc:      "Semi-remorque bâchée avec ouverture latérale pour un chargement facile. Idéale pour les marchandises standard et les chargements hors-gabarit.",
    semi_box_desc:        "Remorque caisse entièrement fermée. Transport sécurisé et étanche pour marchandises sensibles ou à haute valeur.",
    semi_frigo_desc:      "Semi-remorque frigorifique pour les grands transports en chaîne du froid. Température contrôlée tout au long du trajet.",
    semi_cityfrigo_desc:  "Semi frigorifique adapté aux trajets urbains. Suffisamment compact pour les restrictions d'accès en ville.",
    semi_city_desc:       "Semi-remorque urbaine standard, optimisée pour la livraison du dernier kilomètre en milieu dense.",

    contact_title:        "Contact & Commandes",
    contact_desc:         "Contactez la bonne personne pour votre envoi. Cliquez sur un e-mail pour ouvrir directement votre client mail.",
    contact_nr1_title:    "Commandes NR1",
    contact_nr1_role:     "Types A → E · Flotte express",
    contact_fb_title:     "Ventes FB",
    contact_fb_role:      "Ventes & fret domestique",
    contact_general_title:"Contact Général",
    contact_general_role: "Tous départements · international & domestique",
  },

  nl: {
    tag_vehicles:         "200 voertuigen",
    tab_nr1_hint:         "Types A–E · tot 5T",
    tab_fb_hint:          "Type F · tot 33T",
    tab_contact_title:    "Contact",
    tab_contact_hint:     "Bestellingen & Verkoop",

    nr1_subtitle:         "Express Vloot",
    nr1_desc:             "Van één pakket tot volledige palletzendingen. Snelle en betrouwbare levering door NR1-chauffeurs.",

    fb_subtitle:          "Type F · Opleggers",
    fb_desc:              "Zwaar transport van 1g tot 33 ton. 5 opleggerconfiguraties, allemaal beheerd door de vrachtafdeling.",
    fb_notice:            "📞 Alle Type F-boekingen via INT Sales: Eddy",

    stat_weight:          "Max gewicht",
    stat_length:          "Max lengte",
    stat_height:          "Max hoogte",
    stat_volume:          "Volume",
    stat_pallets:         "Pallets",

    vehicle_refrigerator: "Koelwagen",
    vehicle_boxtruck:     "Bestelwagen",
    vehicle_truck:        "Vrachtwagen",
    cold_chip:            "❄ Koel",
    configs_2:            "2 configs",
    por:                  "💬 Prijs op aanvraag",

    semi_bache_desc:      "Zeildoek-oplegger met open zijkanten voor eenvoudig laden vanuit meerdere hoeken. Ideaal voor standaardvracht en grote ladingen.",
    semi_box_desc:        "Volledig gesloten kofferoplegger. Veilig en weerbestendig voor gevoelige of hoogwaardige lading.",
    semi_frigo_desc:      "Volledige koele oplegger voor grote koelketentransport. Temperatuurgecontroleerd gedurende de volledige rit.",
    semi_cityfrigo_desc:  "Gekoelde oplegger aangepast voor stedelijke routes. Compact genoeg voor toegangsbeperkingen in de stad.",
    semi_city_desc:       "Standaard stedelijke oplegger geoptimaliseerd voor last-mile levering in dichte stadsomgevingen.",

    contact_title:        "Contact & Bestellingen",
    contact_desc:         "Bereik de juiste persoon voor uw zending. Klik op een e-mail om uw mailclient direct te openen.",
    contact_nr1_title:    "NR1 Bestellingen",
    contact_nr1_role:     "Types A → E · Express vloot",
    contact_fb_title:     "FB Verkoop",
    contact_fb_role:      "Verkoop & binnenlands transport",
    contact_general_title:"Algemeen Contact",
    contact_general_role: "Alle afdelingen · internationaal & binnenlands",
  }
};

// ─── I18N ENGINE ─────────────────────────────────────────────────────────────

let currentLang = 'en';

function applyTranslations(lang) {
  const t = translations[lang];
  if (!t) return;
  currentLang = lang;
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (t[key] !== undefined) el.textContent = t[key];
  });
  document.documentElement.lang = lang;
}

// ─── LANGUAGE SWITCHER ────────────────────────────────────────────────────────

document.querySelectorAll('.lang-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.lang-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    applyTranslations(btn.dataset.lang);
  });
});

// ─── TAB SWITCHER ─────────────────────────────────────────────────────────────

document.querySelectorAll('.tab').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.tab').forEach(b => b.classList.remove('active'));
    document.querySelectorAll('.tab-section').forEach(s => s.classList.remove('active'));
    btn.classList.add('active');
    document.getElementById('tab-' + btn.dataset.tab).classList.add('active');
  });
});

// ─── INIT ─────────────────────────────────────────────────────────────────────

applyTranslations('en');