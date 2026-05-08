// ─── TRANSLATIONS ────────────────────────────────────────────────────────────
// To add or edit text, just update this object. No touching the HTML needed.

const translations = {
  en: {
    tag_vehicles:         "200 vehicles",
    fleet_title:          "Fleet",
    tab_nr1_hint:         "Types A–E · up to 5T",
    tab_fb_hint:          "Type F · up to 33T",
    tab_contact_title:    "Contact",
    tab_contact_hint:     "Orders & Sales",

    nr1_subtitle:         "Express Fleet",
    nr1_desc:             "From a single parcel to full pallet loads. Fast and reliable delivery by NR1 drivers.",
    nr1_about:            "We handle your express shipments to and from Belgium and every European country. Envelopes, pallets or bulky goods — our fleet of vans and trucks has the right vehicle for every need. Our drivers and dispatchers are fully at your service, including loading assistance. All shipments are covered by CMR insurance.",

    fb_subtitle:          "Type F · Semi-Trailers",
    fb_desc:              "Heavy transport from 1g to 33 tonnes. 5 trailer configurations, all managed by the Truck Department.",
    fb_about:             "For over 20 years, FB Logistics has specialised in express transport across Belgium and all of Europe — from 1 gram to 33 tonnes. We handle general cargo, ADR dangerous goods, temperature-controlled frigo transport and pharmaceutical logistics. Tailored solutions for professionals, including chauffeur-driven vehicles.",
    fb_notice:            "📞 All Type F bookings via INT Sales: Eddy",

    kf_years:             "Years of experience",
    kf_vehicles:          "Vehicles available",
    kf_clients:           "Loyal clients",
    kf_range:             "Weight range",
    conditions_btn:       "Conditions & Details",
    condition_1:          "Every shipment is carried out in accordance with our general terms and conditions of sale and CMR conditions.",
    condition_2:          "Our liability is covered by a CMR insurance policy.",

    stat_weight:          "Max Weight",
    stat_length:          "Max Length",
    stat_height:          "Max Height",
    stat_volume:          "Volume",
    stat_pallets:         "Pallets",

    vehicle_refrigerator: "Refrigerator",
    vehicle_boxtruck:     "Box Truck",
    vehicle_truck:        "Truck",
    vehicle_truck20:      "Truck 20m³",
    cold_chip:            "❄ Cold",
    configs_2:            "2 configs",
    por:                  "💬 Price on Request",

    semi_bache_desc:      "Tarpaulin semi-trailer with open sides for easy multi-angle loading. Ideal for standard freight and oversized loads.",
    semi_box_desc:        "Fully enclosed box trailer. Secure and weatherproof for sensitive or high-value cargo.",
    semi_frigo_desc:      "Full refrigerated semi-trailer for large cold chain shipments. Temperature-controlled throughout.",
    semi_cityfrigo_desc:  "Refrigerated semi adapted for urban routes. Compact enough for city access restrictions.",
    semi_city_desc:       "Standard urban semi-trailer optimized for last-mile delivery in dense city environments.",
    semi_mega_desc:       "High-volume mega trailer with maximum capacity. Available in standard, baché and frigo box configurations.",
    variant_normal:       "Normal",
    variant_frigo_box:    "Frigo Box",

    contact_intro:        "Here is the team you can contact for national and international shipments. Click any email to open your mail client directly.",
    contact_title:        "Contact & Orders",
    contact_desc:         "Reach the right person for your shipment. Click any email to open your mail client directly.",
    contact_nr1_title:    "NR1 Orders",
    contact_nr1_role:     "Types A → E · Express fleet",
    contact_fb_title:     "FB Sales",
    contact_fb_role:      "Sales & domestic freight",
    contact_general_title:"General Contact",
    contact_general_role: "All departments · international & domestic",
    map_title:            "Our location",

    certs_title:              "Certifications & Compliance",
    cert_ra_title:            "Regulated Agent",
    cert_ra_desc:             "FB Logistics is an officially recognised Regulated Agent for air freight security in Belgium. This certification guarantees that all cargo handled meets strict aviation security standards.",
    cert_qms_title:           "Quality · Prevention · Security",
    cert_qms_desc:            "All quality, prevention and security processes are managed through our QMS (Quality Management System), ensuring consistent standards across every operation.",
    cert_licenses_title:      "Additional Licences",
    cert_licenses_desc:       "Further licences and certifications are being compiled. Contact us for full details.",
    cert_nr1_pending_title:   "Certifications — Coming Soon",
    cert_nr1_pending_desc:    "Number One certifications are currently being gathered. Contact Patrick or Cathy for details.",
  },

  fr: {
    tag_vehicles:         "200 véhicules",
    fleet_title:          "Flotte",
    tab_nr1_hint:         "Types A–E · jusqu'à 5T",
    tab_fb_hint:          "Type F · jusqu'à 33T",
    tab_contact_title:    "Contact",
    tab_contact_hint:     "Commandes & Ventes",

    nr1_subtitle:         "Flotte Express",
    nr1_desc:             "D'un simple colis à des chargements complets. Livraison rapide et fiable par les chauffeurs NR1.",
    nr1_about:            "Nous prenons en charge vos envois express vers et depuis la Belgique et tous les pays européens. Plis, palettes ou colis volumineux — notre flotte dispose du véhicule adapté à chaque besoin. Nos chauffeurs et dispatcheurs sont entièrement à votre service, y compris pour la manutention. Tous les envois sont couverts par une police CMR.",

    fb_subtitle:          "Type F · Semi-remorques",
    fb_desc:              "Transport lourd de 1g à 33 tonnes. 5 configurations de remorques, toutes gérées par le département Camions.",
    fb_about:             "Depuis plus de 20 ans, FB Logistics est spécialiste du transport express en Belgique et dans toute l'Europe — de 1 gramme à 33 tonnes. Nous traitons le fret général, les marchandises dangereuses ADR, le transport frigorifique et la logistique pharmaceutique. Solutions sur mesure pour les professionnels, y compris la mise à disposition de véhicules avec chauffeur.",
    fb_notice:            "📞 Toutes les réservations Type F via INT Sales : Eddy",

    kf_years:             "Ans d'expérience",
    kf_vehicles:          "Véhicules disponibles",
    kf_clients:           "Clients fidèles",
    kf_range:             "Plage de poids",
    conditions_btn:       "Conditions & Détails",
    condition_1:          "Chaque envoi est effectué conformément à nos conditions générales de vente et aux conditions CMR.",
    condition_2:          "Notre responsabilité est bien évidemment couverte par une police CMR.",

    stat_weight:          "Poids max",
    stat_length:          "Longueur max",
    stat_height:          "Hauteur max",
    stat_volume:          "Volume",
    stat_pallets:         "Palettes",

    vehicle_refrigerator: "Réfrigérateur",
    vehicle_boxtruck:     "Camion caisse",
    vehicle_truck:        "Camion",
    vehicle_truck20:      "Camion 20m³",
    cold_chip:            "❄ Froid",
    configs_2:            "2 configs",
    por:                  "💬 Prix sur demande",

    semi_bache_desc:      "Semi-remorque bâchée avec ouverture latérale pour un chargement facile. Idéale pour les marchandises standard et les chargements hors-gabarit.",
    semi_box_desc:        "Remorque caisse entièrement fermée. Transport sécurisé et étanche pour marchandises sensibles ou à haute valeur.",
    semi_frigo_desc:      "Semi-remorque frigorifique pour les grands transports en chaîne du froid. Température contrôlée tout au long du trajet.",
    semi_cityfrigo_desc:  "Semi frigorifique adapté aux trajets urbains. Suffisamment compact pour les restrictions d'accès en ville.",
    semi_city_desc:       "Semi-remorque urbaine standard, optimisée pour la livraison du dernier kilomètre en milieu dense.",
    semi_mega_desc:       "Remorque mega grand volume avec capacité maximale. Disponible en configuration normale, baché et frigo box.",
    variant_normal:       "Normal",
    variant_frigo_box:    "Frigo Box",

    contact_title:        "Contact & Commandes",
    contact_desc:         "Contactez la bonne personne pour votre envoi. Cliquez sur un e-mail pour ouvrir directement votre client mail.",
    contact_nr1_title:    "Commandes NR1",
    contact_nr1_role:     "Types A → E · Flotte express",
    contact_fb_title:     "Ventes FB",
    contact_fb_role:      "Ventes & fret domestique",
    contact_general_title:"Contact Général",
    contact_general_role: "Tous départements · international & domestique",
    contact_intro:        "Voici l'équipe à contacter pour vos envois nationaux et internationaux. Cliquez sur un e-mail pour ouvrir directement votre client mail.",
    map_title:            "Notre localisation",

    certs_title:              "Certifications & Conformité",
    cert_ra_title:            "Agent Habilité",
    cert_ra_desc:             "FB Logistics est un Agent Habilité officiellement reconnu pour la sécurité du fret aérien en Belgique. Cette certification garantit que toutes les marchandises traitées respectent les normes strictes de sûreté aérienne.",
    cert_qms_title:           "Qualité · Prévention · Sécurité",
    cert_qms_desc:            "Tous les processus qualité, prévention et sécurité sont gérés via notre système QMS (Quality Management System), garantissant des standards cohérents dans chaque opération.",
    cert_licenses_title:      "Licences supplémentaires",
    cert_licenses_desc:       "D'autres licences et certifications sont en cours de compilation. Contactez-nous pour plus de détails.",
    cert_nr1_pending_title:   "Certifications — Bientôt disponibles",
    cert_nr1_pending_desc:    "Les certifications de Number One sont en cours de rassemblement. Contactez Patrick ou Cathy pour plus d'informations.",
  },

  nl: {
    tag_vehicles:         "200 voertuigen",
    fleet_title:          "Vloot",
    tab_nr1_hint:         "Types A–E · tot 5T",
    tab_fb_hint:          "Type F · tot 33T",
    tab_contact_title:    "Contact",
    tab_contact_hint:     "Bestellingen & Verkoop",

    nr1_subtitle:         "Express Vloot",
    nr1_desc:             "Van één pakket tot volledige palletzendingen. Snelle en betrouwbare levering door NR1-chauffeurs.",
    nr1_about:            "Wij verzorgen uw expreszendingen van en naar België en alle Europese landen. Brieven, pallets of grote goederen — onze vloot heeft het juiste voertuig voor elke nood. Onze chauffeurs en dispatchers staan volledig tot uw dienst, inclusief laadassistentie. Alle zendingen zijn gedekt door een CMR-verzekering.",

    fb_subtitle:          "Type F · Opleggers",
    fb_desc:              "Zwaar transport van 1g tot 33 ton. 5 opleggerconfiguraties, allemaal beheerd door de vrachtafdeling.",
    fb_about:             "Al meer dan 20 jaar is FB Logistics specialist in exprestransport in België en heel Europa — van 1 gram tot 33 ton. Wij verwerken algemene vracht, ADR-gevaarlijke goederen, gekoeld frigoTransport en farmaceutische logistiek. Oplossingen op maat voor professionals, inclusief voertuigen met chauffeur.",
    fb_notice:            "📞 Alle Type F-boekingen via INT Sales: Eddy",

    kf_years:             "Jaar ervaring",
    kf_vehicles:          "Voertuigen beschikbaar",
    kf_clients:           "Trouwe klanten",
    kf_range:             "Gewichtsbereik",
    conditions_btn:       "Voorwaarden & Details",
    condition_1:          "Elke zending wordt uitgevoerd conform onze algemene verkoopvoorwaarden en CMR-voorwaarden.",
    condition_2:          "Onze aansprakelijkheid is uiteraard gedekt door een CMR-verzekeringspolis.",

    stat_weight:          "Max gewicht",
    stat_length:          "Max lengte",
    stat_height:          "Max hoogte",
    stat_volume:          "Volume",
    stat_pallets:         "Pallets",

    vehicle_refrigerator: "Koelwagen",
    vehicle_boxtruck:     "Bestelwagen",
    vehicle_truck:        "Vrachtwagen",
    vehicle_truck20:      "Vrachtwagen 20m³",
    cold_chip:            "❄ Koel",
    configs_2:            "2 configs",
    por:                  "💬 Prijs op aanvraag",

    semi_bache_desc:      "Zeildoek-oplegger met open zijkanten voor eenvoudig laden vanuit meerdere hoeken. Ideaal voor standaardvracht en grote ladingen.",
    semi_box_desc:        "Volledig gesloten kofferoplegger. Veilig en weerbestendig voor gevoelige of hoogwaardige lading.",
    semi_frigo_desc:      "Volledige koele oplegger voor grote koelketentransport. Temperatuurgecontroleerd gedurende de volledige rit.",
    semi_cityfrigo_desc:  "Gekoelde oplegger aangepast voor stedelijke routes. Compact genoeg voor toegangsbeperkingen in de stad.",
    semi_city_desc:       "Standaard stedelijke oplegger geoptimaliseerd voor last-mile levering in dichte stadsomgevingen.",
    semi_mega_desc:       "Mega-oplegger met maximale capaciteit. Beschikbaar in normale, baché en frigo box configuraties.",
    variant_normal:       "Normaal",
    variant_frigo_box:    "Frigo Box",

    contact_title:        "Contact & Bestellingen",
    contact_desc:         "Bereik de juiste persoon voor uw zending. Klik op een e-mail om uw mailclient direct te openen.",
    contact_nr1_title:    "NR1 Bestellingen",
    contact_nr1_role:     "Types A → E · Express vloot",
    contact_fb_title:     "FB Verkoop",
    contact_fb_role:      "Verkoop & binnenlands transport",
    contact_general_title:"Algemeen Contact",
    contact_general_role: "Alle afdelingen · internationaal & binnenlands",
    contact_intro:        "Hier is het team dat u kunt contacteren voor nationale en internationale zendingen. Klik op een e-mail om uw mailclient direct te openen.",
    map_title:            "Onze locatie",

    certs_title:              "Certificeringen & Compliance",
    cert_ra_title:            "Erkend Agent",
    cert_ra_desc:             "FB Logistics is een officieel erkend Erkend Agent voor luchtvrachtveiligheid in België. Deze certificering garandeert dat alle behandelde goederen voldoen aan strenge luchtvaartveiligheidsstandaarden.",
    cert_qms_title:           "Kwaliteit · Preventie · Veiligheid",
    cert_qms_desc:            "Alle kwaliteits-, preventie- en veiligheidsprocessen worden beheerd via ons QMS-systeem (Quality Management System), wat consistente standaarden in elke operatie garandeert.",
    cert_licenses_title:      "Bijkomende licenties",
    cert_licenses_desc:       "Verdere licenties en certificeringen worden momenteel samengesteld. Neem contact op voor volledige details.",
    cert_nr1_pending_title:   "Certificeringen — Binnenkort beschikbaar",
    cert_nr1_pending_desc:    "De certificeringen van Number One worden momenteel verzameld. Neem contact op met Patrick of Cathy voor meer informatie.",
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

// ─── CONDITIONS ACCORDION ─────────────────────────────────────────────────────

document.querySelectorAll('.conditions-toggle').forEach(btn => {
  btn.addEventListener('click', () => {
    const panel = document.getElementById(btn.dataset.target);
    const arrow = btn.querySelector('.toggle-arrow');
    const isOpen = panel.classList.contains('open');
    panel.classList.toggle('open', !isOpen);
    arrow.style.transform = isOpen ? 'rotate(0deg)' : 'rotate(90deg)';
  });
});

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