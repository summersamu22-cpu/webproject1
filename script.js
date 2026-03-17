document.addEventListener("DOMContentLoaded", () => {
    const menuBtn = document.querySelector(".menu-btn");
    const navLinks = document.querySelector(".nav-links");
    const langHuBtn = document.querySelector("#lang-hu");
    const langSrBtn = document.querySelector("#lang-sr");

    // --- JAVÍTOTT MOBILMENÜ LOGIKA ---
    if (menuBtn && navLinks) {
        // Menü gomb megnyitás/bezárás
        menuBtn.addEventListener("click", (e) => {
            e.stopPropagation(); // Megakadályozza, hogy az esemény továbbterjedjen
            const isOpen = navLinks.classList.toggle("active");
            menuBtn.setAttribute("aria-expanded", String(isOpen));
        });

        // 1. Zárjuk be a menüt, ha rákattintanak egy linkre (nagyon fontos mobilon!)
        navLinks.querySelectorAll("a").forEach(link => {
            link.addEventListener("click", () => {
                navLinks.classList.remove("active");
                menuBtn.setAttribute("aria-expanded", "false");
            });
        });

        // 2. Zárjuk be a menüt, ha a felhasználó bárhova máshova (a menün kívülre) kattint
        document.addEventListener("click", (e) => {
            if (!navLinks.contains(e.target) && !menuBtn.contains(e.target) && navLinks.classList.contains("active")) {
                navLinks.classList.remove("active");
                menuBtn.setAttribute("aria-expanded", "false");
            }
        });
    }
    // --- MOBILMENÜ LOGIKA VÉGE ---

    const translations = {
        hu: {
            homeTitle: "HOLD-IT | Kezdőlap",
            productPageTitle: "Termékek | HOLD-IT",
            workshopTitle: "Workshopok | HOLD-IT",
            aboutTitle: "Rólunk | HOLD-IT",

            logoAria: "HOLD-IT főoldal",
            logoAlt: "HOLD-IT logó",
            mainNav: "Fő navigáció",
            navHome: "Főoldal",
            navProducts: "Termékek",
            navWorkshops: "Workshopok",
            navAbout: "Rólunk",
            menuOpen: "Menü megnyitása",

            eyebrow: "Interaktív matematikaoktatás",
            heroTitle: "Tartsd a jövőt<br>a kezedben",
            heroDescription: "3D nyomtatott geometriai testekkel tanítjuk a matematikát látványosan, kézzelfoghatóan és interaktív módon.",
            servicesBtn: "Szolgáltatások",
            whatWeOffer: "Mit kínálunk?",
            ourServices: "Szolgáltatásaink",
            card1Title: "3D Modellek",
            card1Text: "Geometriai testek kézzelfogható, fizikai modellekkel.",
            card2Title: "Interaktív Tanítás",
            card2Text: "Érthetőbb tanulás vizuális és tapintható modellekkel.",
            card3Title: "Gyakorlati foglalkozások",
            card3Text: "A gördülékenyebb geometriatanulásért.",

            productImgAlt: "HOLD-IT Geometriai Szett",
            productCategory: "Oktatási Segédeszköz",
            productName: "QuadraBox",
            productLongDesc: "Ez az összeállítás a legalapvetőbb mértani testeket tartalmazza, amelyek a középiskolai és egyetemi geometria oktatás alapkövei. A 3D nyomtatott formák segítenek a térfogat- és felszínszámítási képletek vizualizálásában.",
            matLabel: "Anyag:",
            matValue: "PLA",
            pieceLabel: "Darabszám:",
            pieceValue: "12 különböző test",
            feat1: "Precíz, matematikai pontosságú élek",
            feat2: "Könnyű, de strapabíró kivitel",
            feat3: "Egyedi színkombinációk lehetősége",

            workshopEyebrow: "KÖVETKEZŐ ESEMÉNY",
            workshopHeading: "Építsd fel a tudásod <br><span class=\"hero-text gradient-text\">a gyakorlatban</span>",
            workshopDescription: "Csatlakozz interaktív workshopjainkhoz, ahol a diákok saját maguk dolgozhatnak a 3D nyomtatott geometriai formákkal. Érintsd meg a matematikát, és értsd meg a térlátás alapjait kézzelfoghatóan!",
            workshopDate: "<strong>Időpont:</strong> 2026. április 15. | 14:00 - 17:00",
            workshopLocation: "<strong>Helyszín:</strong> Hold-IT Központ",
            workshopAudience: "<strong>Kiknek ajánljuk:</strong> Általános és középiskolásoknak",
            workshopImgAlt1: "3D nyomtatott geometriai formák workshopon",
            workshopImgAlt2: "Fotó a workshopról",

            teamHeading: "A csapat <span class=\"gradient-text\">mögöttünk</span>",
            teamSubtitle: "Ismerd meg a csapatunkat, akik azért dolgoznak, hogy a matematika tanulása szó szerint kézzelfogható élmény legyen.",
            teamname1:"Papp Szabolcs",
            role1: "Alapító &amp; 3D modellező",
            desc1: "Matematikus tanuló, a 3D modellek kidolgozásában és megtervezésében jeleskedik.",
            teamname2:"Bajai Leon",
            role2: "Csomagolás designer &amp; megvalósító &amp; hivatásos félisten",
            desc2: "Gyakorlatias problémamegoldó, aki a termékek csomagolásáért és a fizikai megvalósításért felel.",
            teamname3:"Virág Énok",
            role3: "Webfejlesztő",
            desc3: "Matematikus tanuló. Fejlesztőként ő felel a letisztult, oktatási célokat szolgáló webes felületeinkért. A kódbázis kezelésétől kezdve a stabil, hogy a platform mindig zökkenőmentesen működjön",
            teamname4:"Engi Anabela",
            role4: "Designer",
            desc4: "Matematikus tanuló. Kiváló szépérzékkel gondoskodik róla, hogy a HOLD-IT arculata modern, letisztult és a diákok számára is vonzó legyen.",
            teamname5: "Vastag Evelin",
            role5: "Marketing &amp; PR",
            desc5: "Matematikus tanuló.Célja, hogy a geometria oktatás mindenkihez eljusson",
            teamname6: "Kovács Bálint",
            role6: "Gyártásvezető",
            desc6: "Informatikus tanuló.A 3D nyomtatási folyamatok koordinátora.",
            teamname7: "Bálint Nóra",
            role7: "Mentor",
            desc7: "Programozás Tanár.Tapasztalatával és szakmai iránymutatásával támogatja a csapatot."
        },

        sr: {
            homeTitle: "HOLD-IT | Početna",
            productPageTitle: "Proizvodi | HOLD-IT",
            workshopTitle: "Radionice | HOLD-IT",
            aboutTitle: "O nama | HOLD-IT",

            logoAria: "HOLD-IT početna stranica",
            logoAlt: "HOLD-IT logo",
            mainNav: "Glavna navigacija",
            navHome: "Početna",
            navProducts: "Proizvodi",
            navWorkshops: "Radionice",
            navAbout: "O nama",
            menuOpen: "Otvori meni",

            eyebrow: "Interaktivna nastava matematike",
            heroTitle: "Drži budućnost<br>u svojim rukama",
            heroDescription: "Uz 3D štampana geometrijska tela podučavamo matematiku vizuelno, opipljivo i interaktivno.",
            servicesBtn: "Usluge",
            whatWeOffer: "Šta nudimo?",
            ourServices: "Naše usluge",
            card1Title: "3D modeli",
            card1Text: "Geometrijska tela kroz opipljive, fizičke modele.",
            card2Title: "Interaktivna nastava",
            card2Text: "Lakše učenje uz vizuelne i opipljive modele.",
            card3Title: "Praktične radionice",
            card3Text: "Za lakše i uspešnije učenje geometrije.",

            productImgAlt: "HOLD-IT Geometrijski Set",
            productCategory: "Edukativno pomagalo",
            productName: "QuadraBox",
            productLongDesc: "Ovaj set sadrži najosnovnija geometrijska tela koja su temelj nastave geometrije u srednjim školama i na fakultetima. 3D štampani oblici pomažu u vizuelizaciji formula za izračunavanje zapremine i površine.",
            matLabel: "Materijal:",
            matValue: "PLA",
            pieceLabel: "Broj komada:",
            pieceValue: "12 različitih tela",
            feat1: "Precizne ivice matematičke tačnosti",
            feat2: "Lagan, ali izdržljiv dizajn",
            feat3: "Mogućnost jedinstvenih kombinacija boja",

            workshopEyebrow: "NAREDNI DOGAĐAJ",
            workshopHeading: "Izgradi svoje znanje <br><span class=\"hero-text gradient-text\">kroz praksu</span>",
            workshopDescription: "Pridruži se našim interaktivnim radionicama, gde učenici mogu samostalno da rade sa 3D štampanim geometrijskim oblicima. Dodirni matematiku i razumi osnove prostornog razmišljanja na opipljiv način!",
            workshopDate: "<strong>Termin:</strong> 15. april 2026. | 14:00 - 17:00",
            workshopLocation: "<strong>Mesto:</strong> Hold-IT centar",
            workshopAudience: "<strong>Za koga je namenjeno:</strong> Za učenike osnovnih i srednjih škola",
            workshopImgAlt1: "Radionica sa 3D štampanim geometrijskim oblicima",
            workshopImgAlt2: "Fotografija sa radionice",

            teamHeading: "Tim <span class=\"gradient-text\">iza nas</span>",
            teamSubtitle: "Upoznaj naš tim koji radi na tome da učenje matematike postane doslovno opipljivo iskustvo.",
            teamname1:"Sabolč Pap",
            role1: "Osnivač &amp; 3D modelar",
            desc1: "Student matematike, ističe se u razvoju i dizajniranju 3D modela.",
            teamname2:"Leon Bajai",
            role2: "Dizajner ambalaže &amp; realizator &amp; profesionalni polubog",
            desc2: "Praktičan u rešavanju problema, zadužen za pakovanje proizvoda i fizičku realizaciju.",
            teamname3:"Enok Virag",
            role3: "Veb programer",
            desc3: "Student matematike. Kao programer, odgovoran je za naše čiste veb interfejse prilagođene edukativnim ciljevima. Upravlja bazom koda kako bi platforma uvek besprekorno funkcionisala.",
            teamname4:"Anabela Engi",
            role4: "Dizajner",
            desc4: "Studentkinja matematike. Svojim odličnim osećajem za estetiku brine da vizuelni identitet HOLD-IT-a bude moderan, čist i privlačan učenicima.",
            teamname5:"Evelin Vaštag",
            role5: "Marketing &amp; PR",
            desc5: "Studentkinja matematike. Njen cilj je da nastava geometrije postane dostupna svima.",
            teamname6:"Balint Kovač",
            role6: "Rukovodilac proizvodnje",
            desc6: "Student informatike. Koordinator procesa 3D štampe.",
            teamname7:"Nora Balint",
            role7: "Mentor",
            desc7: "Profesor programiranja. Svojim iskustvom i stručnim smernicama podržava tim."
        }
    };

    function setLanguage(lang) {
        const dict = translations[lang];
        if (!dict) return;

        document.documentElement.lang = lang;
        localStorage.setItem("language", lang);

        if (langHuBtn) langHuBtn.classList.toggle("active", lang === "hu");
        if (langSrBtn) langSrBtn.classList.toggle("active", lang === "sr");

        document.querySelectorAll("[data-i18n]").forEach((element) => {
            const key = element.dataset.i18n;
            if (dict[key] !== undefined) {
                element.innerHTML = dict[key];
            }
        });

        document.querySelectorAll("[data-i18n-aria-label]").forEach((element) => {
            const key = element.dataset.i18nAriaLabel;
            if (dict[key] !== undefined) {
                element.setAttribute("aria-label", dict[key]);
            }
        });

        document.querySelectorAll("[data-i18n-alt]").forEach((element) => {
            const key = element.dataset.i18nAlt;
            if (dict[key] !== undefined) {
                element.setAttribute("alt", dict[key]);
            }
        });

        // Dinamikus Title váltás minden oldalra
        const currentPage = document.body.dataset.page;
        const pageTitles = {
            home: dict.homeTitle,
            products: dict.productPageTitle,
            workshops: dict.workshopTitle,
            about: dict.aboutTitle
        };

        if (currentPage && pageTitles[currentPage]) {
            document.title = pageTitles[currentPage];
        }
    }

    // Szerb az alapértelmezett nyelv
    const savedLanguage = localStorage.getItem("language");
    const defaultLanguage = "sr";
    setLanguage(savedLanguage || defaultLanguage);

    // Oldal megjelenítése a fordítás betöltése után (FOUC elkerülése)
    document.body.classList.remove('lang-loading');
    document.body.classList.add('lang-loaded');

    if (langHuBtn) langHuBtn.addEventListener("click", () => setLanguage("hu"));
    if (langSrBtn) langSrBtn.addEventListener("click", () => setLanguage("sr"));

    const revealElements = document.querySelectorAll(".reveal");
    if ("IntersectionObserver" in window && revealElements.length > 0) {
        const observer = new IntersectionObserver((entries, obs) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("active");
                    obs.unobserve(entry.target);
                }
            });
        }, { threshold: 0.15 });

        revealElements.forEach((element) => observer.observe(element));
    } else {
        revealElements.forEach((element) => element.classList.add("active"));
    }
});
