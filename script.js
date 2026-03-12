const menuButton = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

if (menuButton && navLinks) {
    menuButton.addEventListener("click", () => {
        const isOpen = navLinks.classList.toggle("active");
        menuButton.setAttribute("aria-expanded", String(isOpen));
    });

    navLinks.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", () => {
            navLinks.classList.remove("active");
            menuButton.setAttribute("aria-expanded", "false");
        });
    });
}

const huButton = document.getElementById("lang-hu");
const srButton = document.getElementById("lang-sr");

const translations = {
    hu: {
        // Navigáció & Általános
        logoAria: "HOLD-IT főoldal",
        logoAlt: "HOLD-IT logó",
        menuOpen: "Menü megnyitása",
        mainNav: "Fő navigáció",
        navHome: "Főoldal",
        navProducts: "Termékek",
        navAbout: "Workshop",
        navContact: "Rólunk",

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
        productName: "Quadra-Box",
        productLongDesc: "Ez az összeállítás a legalapvetőbb mértani testeket tartalmazza, amelyek az általános és közép iskolás geometria oktatás alapkövei. A 3D nyomtatott formák segítenek a térfogat- és felszínszámítási képletek vizualizálásában.",
        matLabel: "Anyag",
        matValue: "PLA",
        pieceLabel: "Darabszám",
        pieceValue: "4 darabos szett",
        feat1: "Precíz, matematikai pontosságú élek",
        feat2: "Könnyű, de strapabíró kivitel",
        feat3: "Egyedi színkombinációk lehetősége",
    },
    sr: {
        logoAria: "HOLD-IT početna stranica",
        logoAlt: "HOLD-IT logo",
        menuOpen: "Otvori meni",
        mainNav: "Glavna navigacija",
        navHome: "Početna",
        navProducts: "Proizvodi",
        navAbout: "Workshop",
        navContact: "O nama",

        eyebrow: "Interaktivna nastava matematike",
        heroTitle: "Držite budućnost<br>u svojim rukama",
        heroDescription: "Podučavamo matematiku pomoću 3D štampanih geometrijskih tela na vizuelan, praktičan i interaktivan način.",
        servicesBtn: "Usluge",
        whatWeOffer: "Šta nudimo?",
        ourServices: "Naše usluge",
        card1Title: "3D modeli",
        card1Text: "Geometrijska tela predstavljena kroz opipljive, fizičke modele.",
        card2Title: "Interaktivna nastava",
        card2Text: "Jednostavnije učenje uz vizuelne i opipljive modele.",
        card3Title: "Praktične radionice",
        card3Text: "Za lakše i tečnije učenje geometrije.",


        productImgAlt: "HOLD-IT geometrijski set",
        productCategory: "Obrazovno sredstvo",
        productName: "Quadra-Box",
        productLongDesc: "Ova kolekcija sadrži najosnovnija geometrijska tela koja predstavljaju osnovu nastave geometrije u osnovnoj i srednjoj školi. 3D štampani oblici pomažu u vizualizaciji formula za zapreminu i površinu.",
        matLabel: "Materijal",
        matValue: "PLA",
        pieceLabel: "Broj komada",
        pieceValue: "Set od 4 komada",
        feat1: "Precizne ivice sa matematičkom tačnošću",
        feat2: "Lagana, ali izdržljiva konstrukcija",
        feat3: "Mogućnost jedinstvenih kombinacija boja",

    }
};

let currentLanguage = "hu";

function applyLanguage(lang) {
    document.documentElement.lang = lang;

    // Szövegek fordítása (innerHTML-t használunk a <br> miatt a címekben)
    document.querySelectorAll("[data-i18n]").forEach((element) => {
        const key = element.dataset.i18n;
        if (translations[lang][key]) {
            element.innerHTML = translations[lang][key];
        }
    });

    // Aria-label fordítása
    document.querySelectorAll("[data-i18n-aria-label]").forEach((element) => {
        const key = element.dataset.i18nAriaLabel;
        if (translations[lang][key]) {
            element.setAttribute("aria-label", translations[lang][key]);
        }
    });

    // Alt szövegek fordítása
    document.querySelectorAll("[data-i18n-alt]").forEach((element) => {
        const key = element.dataset.i18nAlt;
        if (translations[lang][key]) {
            element.setAttribute("alt", translations[lang][key]);
        }
    });

    // Gombok aktív állapotának kezelése
    huButton.classList.toggle("active", lang === "hu");
    srButton.classList.toggle("active", lang === "sr");
}

// Eseménykezelők a nyelvváltó gombokhoz
huButton.addEventListener("click", () => {
    currentLanguage = "hu";
    applyLanguage(currentLanguage);
});

srButton.addEventListener("click", () => {
    currentLanguage = "sr";
    applyLanguage(currentLanguage);
});

// Kezdeti nyelv beállítása
applyLanguage(currentLanguage);

// Scroll Reveal Animáció
const revealElements = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
        (entries, currentObserver) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("active");
                    currentObserver.unobserve(entry.target);
                }
            });
        },
        {
            threshold: 0.15
        }
    );

    revealElements.forEach((element) => observer.observe(element));
} else {
    revealElements.forEach((element) => element.classList.add("active"));
}