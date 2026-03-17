document.addEventListener("DOMContentLoaded", () => {
    const menuBtn = document.querySelector(".menu-btn");
    const navLinks = document.querySelector(".nav-links");
    const langHuBtn = document.querySelector("#lang-hu");
    const langSrBtn = document.querySelector("#lang-sr");
    const applyBtn = document.querySelector("#apply-btn")

    if (menuBtn && navLinks) {
        
        menuBtn.addEventListener("click", (e) => {
            e.stopPropagation();
            const isOpen = navLinks.classList.toggle("active");
            menuBtn.setAttribute("aria-expanded", String(isOpen));
        });

        
        navLinks.querySelectorAll("a").forEach(link => {
            link.addEventListener("click", () => {
                navLinks.classList.remove("active");
                menuBtn.setAttribute("aria-expanded", "false");
            });
        });

       
        document.addEventListener("click", (e) => {
            if (!navLinks.contains(e.target) && !menuBtn.contains(e.target) && navLinks.classList.contains("active")) {
                navLinks.classList.remove("active");
                menuBtn.setAttribute("aria-expanded", "false");
            }
        });
    }

    let currentDict = {};
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
            pieceValue: "4 különböző test",
            feat1: "Precíz, matematikai pontosságú élek",
            feat2: "Könnyű, de strapabíró kivitel",
            feat3: "Egyedi színkombinációk lehetősége",
            prodTitle1: "Gúla",
            prodDesc1: "A gúla tökéletes eszköz a térfogatszámítás alapjainak elsajátításához. 3D nyomtatott modellünk segítségével könnyedén vizualizálható az alaplap és a magasság kapcsolata, így a képletek többé nem csak üres számok lesznek.",
            prodTitle2: "Kúp",
            prodDesc2: "A kúp modellünkkel a forgástestek világa válik kézzelfoghatóvá. Diákok és tanárok egyaránt imádják, hiszen a palást és az alapkör viszonya azonnal érthetővé válik a fizikai érintés során.",
            prodTitle3: "Ikozaéder",
            prodDesc3:"Az ikozaéder a szabályos testek egyik legizgalmasabbika, 20 egyenlő oldalú háromszöglappal. Ez a modell nemcsak a geometria szépségét mutatja be, de a térlátást is kiválóan fejleszti.",
            prodTitle4: "Kocka",
            prodDesc4: "A geometria alapköve. A kocka modellünk a legmegfelelőbb kiindulópont a térbeli koordináták, a felszín és a térfogat megértéséhez. Letisztult forma, amely minden matematikai eszköztár kötelező eleme.",


            workshopEyebrow: "KÖVETKEZŐ ESEMÉNY",
            workshopHeading: "Építsd fel a tudásod <br><span class=\"hero-text gradient-text\">a gyakorlatban</span>",
            workshopDescription: "Csatlakozz interaktív workshopjainkhoz, ahol a diákok saját maguk dolgozhatnak a 3D nyomtatott geometriai formákkal. Érintsd meg a matematikát, és értsd meg a térlátás alapjait kézzelfoghatóan!",
            workshopDate: "<strong>Időpont:</strong> Megbeszélés szerint.",
            workshopLocation: "<strong>Helyszín:</strong> Hold-IT Központ",
            workshopAudience: "<strong>Kiknek ajánljuk:</strong> Általános és középiskolásoknak",
            workshopImgAlt1: "3D nyomtatott geometriai formák workshopon",
            workshopImgAlt2: "Fotó a workshopról",
            workshopBtn: "Jelentkezés",
            workshopAlert: "Nincs több férőhely! További információkért keress minket Instagramon vagy Gmailen.",

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
            pieceValue: "4 različitih tela",
            feat1: "Precizne ivice matematičke tačnosti",
            feat2: "Lagan, ali izdržljiv dizajn",
            feat3: "Mogućnost jedinstvenih kombinacija boja",
            prodTitle1: "Piramida",
            prodDesc1: "Piramida je savršeno sredstvo za savladavanje osnova izračunavanja zapremine. Pomoću našeg 3D štampanog modela lako se vizuelizuje odnos između osnove i visine, tako da formule više nisu samo prazni brojevi.",
            prodTitle2: "Kupa",
            prodDesc2: "Sa našim modelom kupe, svet rotacionih tela postaje opipljiv. Učenici i nastavnici ga podjednako vole, jer odnos između omotača i osnove postaje odmah jasan kroz fizički dodir.",
            prodTitle3: "Ikozaedar",
            prodDesc3:"Ikozaedar je jedno od najzanimljivijih pravilnih tela, sa 20 jednakostraničnih trougaonih strana. Ovaj model ne samo da prikazuje lepotu geometrije, već i odlično razvija prostornu percepciju.",
            prodTitle4: "Kocka",
            prodDesc4: "Kamen temeljac geometrije. Naš model kocke je najpogodnija polazna tačka za razumevanje prostornih koordinata, površine i zapremine. Čist oblik, koji je obavezan element svakog matematičkog pribora.",



            workshopEyebrow: "NAREDNI DOGAĐAJ",
            workshopHeading: "Izgradi svoje znanje <br><span class=\"hero-text gradient-text\">kroz praksu</span>",
            workshopDescription: "Pridruži se našim interaktivnim radionicama, gde učenici mogu samostalno da rade sa 3D štampanim geometrijskim oblicima. Dodirni matematiku i razumi osnove prostornog razmišljanja na opipljiv način!",
            workshopDate: "<strong>Termin:</strong>Prema dogovoru.",
            workshopLocation: "<strong>Mesto:</strong> Hold-IT centar",
            workshopAudience: "<strong>Za koga je namenjeno:</strong> Za učenike osnovnih i srednjih škola",
            workshopImgAlt1: "Radionica sa 3D štampanim geometrijskim oblicima",
            workshopImgAlt2: "Fotografija sa radionice",
            workshopBtn: "Prijavi se",
            workshopAlert: "Nema više slobodnih mesta! Za više informacija kontaktirajte nas putem Instagrama ili Gmail-a.",

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
    if (applyBtn) {
        applyBtn.addEventListener("click", (e) => {
            e.preventDefault(); 
            const currentLang = localStorage.getItem("language") || "sr";
            alert(translations[currentLang].workshopAlert);
        });
    }

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
    const savedLanguage = localStorage.getItem("language");
    const defaultLanguage = "sr";
    setLanguage(savedLanguage || defaultLanguage);

    
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
