document.addEventListener("DOMContentLoaded", () => {
    const menuBtn = document.querySelector(".menu-btn");
    const navLinks = document.querySelector(".nav-links");
    const langHuBtn = document.querySelector("#lang-hu");
    const langSrBtn = document.querySelector("#lang-sr");

    if (menuBtn && navLinks) {
        menuBtn.addEventListener("click", () => {
            const isOpen = navLinks.classList.toggle("active");
            menuBtn.setAttribute("aria-expanded", String(isOpen));
        });
    }

    const translations = {
        hu: {
            logoAria: "HOLD-IT főoldal",
            logoAlt: "HOLD-IT logó",
            mainNav: "Fő navigáció",
            navHome: "Főoldal",
            navProducts: "Termékek",
            navAbout: "Workshopok",
            navContact: "Rólunk",
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

            // Termék (QuadraBox) oldal
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

            workshopTitle: "Workshop | HOLD-IT",
            workshopEyebrow: "KÖVETKEZŐ ESEMÉNY",
            workshopHeading: "Építsd fel a tudásod <br><span class=\"hero-text\">a gyakorlatban</span>",
            workshopDescription: "Csatlakozz interaktív workshopjainkhoz, ahol a diákok saját maguk dolgozhatnak a 3D nyomtatott geometriai formákkal. Érintsd meg a matematikát, és értsd meg a térlátás alapjait kézzelfoghatóan!",
            workshopDate: "<strong>Időpont:</strong> 2026. április 15. | 14:00 - 17:00",
            workshopLocation: "<strong>Helyszín:</strong> Hold-IT Központ",
            workshopAudience: "<strong>Kiknek ajánljuk:</strong> Általános és középiskolásoknak",
            workshopImgAlt1: "3D nyomtatott geometriai formák workshopon",
            workshopImgAlt2: "Fotó a workshopról",

            aboutTitle: "Rólunk - HOLD-IT",
            teamHeading: "A csapat <span class=\"gradient-text\">mögöttünk</span>",
            teamSubtitle: "Ismerd meg a csapatunkat, akik azért dolgoznak, hogy a matematika tanulása szó szerint kézzelfogható élmény legyen.",
            role1: "Alapító &amp; 3D modellező",
            desc1: "Felel a geometriai testek precíz megtervezéséért. Célja, hogy a matematika vizuálisan is lenyűgöző legyen.",
            role2: "Csomagolás designer &amp; megvalósító &amp; hivatásos félisten",
            desc2: "Kidolgozza azokat a módszertanokat, amelyekkel eszközeink a leghatékonyabban építhetők be a tananyagba.",
            role3: "Webfejlesztő",
            desc3: "Bemutató szöveg",
            role4: "Designer",
            desc4: "Bemutató szöveg.",
            role5: "Marketing &amp; PR",
            desc5: "Bemutató szöveg.",
            role6: "Gyártásvezető",
            desc6: "Bemutató szöveg.",
            role7: "Mentor",
            desc7: "Bemutató szöveg."
        },

        sr: {
            logoAria: "HOLD-IT početna stranica",
            logoAlt: "HOLD-IT logo",
            mainNav: "Glavna navigacija",
            navHome: "Početna",
            navProducts: "Proizvodi",
            navAbout: "Radionice",
            navContact: "O nama",
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

            // Termék (QuadraBox) oldal
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

            workshopTitle: "Radionice | HOLD-IT",
            workshopEyebrow: "NAREDNI DOGAĐAJ",
            workshopHeading: "Izgradi svoje znanje <br><span class=\"hero-text\">kroz praksu</span>",
            workshopDescription: "Pridruži se našim interaktivnim radionicama, gde učenici mogu samostalno da rade sa 3D štampanim geometrijskim oblicima. Dodirni matematiku i razumi osnove prostornog razmišljanja na opipljiv način!",
            workshopDate: "<strong>Termin:</strong> 15. april 2026. | 14:00 - 17:00",
            workshopLocation: "<strong>Mesto:</strong> Hold-IT centar",
            workshopAudience: "<strong>Za koga je namenjeno:</strong> Za učenike osnovnih i srednjih škola",
            workshopImgAlt1: "Radionica sa 3D štampanim geometrijskim oblicima",
            workshopImgAlt2: "Fotografija sa radionice",

            aboutTitle: "O nama - HOLD-IT",
            teamHeading: "Tim <span class=\"gradient-text\">iza nas</span>",
            teamSubtitle: "Upoznaj naš tim koji radi na tome da učenje matematike postane doslovno opipljivo iskustvo.",
            role1: "Osnivač &amp; 3D modelar",
            desc1: "Odgovoran je za precizno projektovanje geometrijskih tela. Njegov cilj je da matematika bude i vizuelno zadivljujuća.",
            role2: "Dizajner ambalaže &amp; realizator &amp; professionalan polubog",
            desc2: "Razrađuje metode pomoću kojih se naši alati mogu najefikasnije uključiti u nastavni proces.",
            role3: "Veb programer",
            desc3: "Kratak opis",
            role4: "Dizajner",
            desc4: "Odgovorna je za korisničko iskustvo i čist, moderan vizuelni identitet cele platforme.",
            role5: "Marketing &amp; PR",
            desc5: "Njena misija je da naši interaktivni alati stignu do što više škola i učenika širom zemlje.",
            role6: "Rukovodilac proizvodnje",
            desc6: "Nadzire procese 3D štampe i garantuje vrhunski kvalitet i dugotrajnost proizvoda.",
            role7: "Mentor",
            desc7: "Kratak opis"
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

        if (dict.workshopTitle && document.body.dataset.page === "workshop") {
            document.title = dict.workshopTitle;
        }

        if (dict.aboutTitle && document.body.dataset.page === "about") {
            document.title = dict.aboutTitle;
        }
    }

    // --- MÓDOSÍTOTT RÉSZ: Az alapértelmezett nyelv most már biztosan a szerb ("sr") ---
    const savedLanguage = localStorage.getItem("language");
    const defaultLanguage = document.body.dataset.defaultLang || document.documentElement.lang || "sr";
    setLanguage(savedLanguage || defaultLanguage);

    if (langHuBtn) {
        langHuBtn.addEventListener("click", () => setLanguage("hu"));
    }

    if (langSrBtn) {
        langSrBtn.addEventListener("click", () => setLanguage("sr"));
    }

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
