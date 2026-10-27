import { noAccents } from "./helpers";


const additiveList = [{
  id: "en:e420i",
  name: "D-sorbitol",
  es: "D-Sorbitol",
  aliases: ["D-Sorbitol", "D-sorbitol", "D-glucitol", "D-glucitolo", "D-Glucitol", "D-glucīts", "D-γλυκιτόλη", "D-glusitoli", "D-gliucitolis", "D-glütsitool", "D-gluċitol", "D-глюцитол", "D-Szorbit"],
  roles: ["humectant", "sequestrant", "stabiliser", "sweetener", "thickener"],
  children: []
}, {
  id: "en:e161a",
  name: "Flavoxanthin",
  es: "Flavoxantina",
  aliases: ["Flavoxanthin", "Flawoksantyna", "Flavoxantina", "Flavoxanthine", "Flavoksantīns", "Φλαβοξανθίνη", "Flavoksantiini", "Flavoksantinas", "Flavoksantiin", "Flavoxantină", "Flavoksantin", "Flavoxantin", "Флавоксантин"],
  roles: [],
  children: []
}, {
  id: "en:e468",
  name: "Cross-linked sodium carboxymethylcellulose",
  es: "Carboximetilcelulosa sódica entrelazada",
  aliases: ["Zamrežena natrijeva karboksimetilceluloza", "Vernette natriumcarboxymethylcellulose", "Carboximetilceluloză de sodiu reticulată", "Térhálós nátrium-karboxi-metil-cellulóz", "Zesíťovaná sodná sůl karboxymethylcelulosy", "Tvärbunden natriumkarboximetylcellulosa", "Напречно свързана натриева карбоксиметил целулоза", "Carboximetilcelulosa sódica entrelazada", "Šķērsšūtā nātrija karboksimetilceluloze", "Sól sodowa karboksymetylcelulozy usieciowana", "Carboximetilcelulose de sódio reticulada", "Carboxyméthylcellulose de sodium réticulée", "Cross-linked sodium carboxymethylcellulose", "Carbossimetilcellulosa sodica reticolata", "Vernetzte carboxymethylcellulose", "Sieťovaná karboxymetylcelulóza sodná", "Karbossimetilċelluloża tas-sodju retikolata", "Αλας με νατριο της καρβοξυμεθυλοκυτταρινης με σταυροδεσμους", "Kroskarmelloosi", "Võrkstruktuuriga naatriumkarboksümetüültselluloos", "Tværbunden natriumcarboxymethylcellulose (tværbunden cellulosegummi)"],
  roles: ["stabiliser", "thickener"],
  children: []
}, {
  id: "en:e560",
  name: "Potassium silicate",
  es: "Silicato de potasio",
  aliases: ["Kaliumsilicaat", "Silicat de potasiu", "Silicat de potassi", "Kalijev silikat", "Kálium-szilikát", "Silicato de potasio", "Калиев силикат", "규산 칼륨", "Силикат калия", "Silicate de potassium", "Silicato de potássio", "ケイ酸カリウム", "Potassium silicate", "Silicato di potassio", "Kaliumsilicat", "Krzemian potasu", "Kālija silikāts", "Potasyum silikat", "Kaaliumsilikaat", "Kalio silikatas", "سيليكات البوتاسيوم", "Πυριτικό κάλιο", "Kaliumsilikaatti", "Силікат калію", "Kalium silikat", "Silikat tal-potassju"],
  roles: [],
  children: []
}, {
  id: "en:e476",
  name: "Polyglycerol polyricinoleate",
  es: "Polirricinoleato de poliglicerol",
  aliases: ["Poliglicerīna polirīcinolāts", "Polyricinoléate de polyglycérol", "Polirricinoleato de poliglicerol", "Polyglycerol polyricinoleate", "Poliricinoleato di poliglicerolo", "Polyglycerin-Polyricinoleat", "Polirycynooleinian poliglicerolu", "polairicineoláit pholaigliocróil", "Polyglycerolpolyricínoleát", "Poligliċerol poligriċinoleat", "poliglicerol - poliricinoleat", "Ritsinoolhappe polüglütseroolestrid", "Poliglicerolio poliricinoleatas", "بولي غليسيرول بولي ريسينوليات", "Polyglyserolipolyrisiinioleaatti", "Πολυγλυκεριδια του πολυρικινελαϊκου οξεος", "Polyglycerolpolyricinoleat", "Poliricinoleat de poligliceril", "Poliglicerol poliricinoleat", "פוליגליצרול פוליריצינולאט", "Polyglycerolpolyricinoleaat", "Poliricinoleat de poliglicerol", "Полиглицерол полирицинолеат", "Poliglicerin-poliricinoleát", "Polyglycerolpolyricinoleát"],
  roles: ["emulsifier"],
  children: []
}, {
  id: "en:e450ix",
  name: "Magnesium dihydrogen diphosphate",
  es: "Magnesium dihydrogen diphosphate",
  aliases: ["Magnesium dihydrogen diphosphate"],
  roles: [],
  children: []
}, {
  id: "en:e1414",
  name: "Acetylated distarch phosphate",
  es: "Fosfato de dialmidón acetilado",
  aliases: ["Fosfato de diamido acetilado", "Phosphate de diamidon acétylé", "acetyliertes Distärkephosphat", "Fosfato di diamido acetilato", "Acetylated distarch phosphate", "Acetylowany fosforan diskrobiowy", "Acetylovaný diškrobfosfát", "Acetilētas dicietes fosfāts", "Acetilintas dikrakmolo fosfatas", "Atsetüülitud ditärklisfosfaat", "Ακετυλιωμενο οξινο φωσφορικο αμυλο", "Asetyloitu ditärkkelysfosfaatti", "Acetyleret distivelsephosphat", "Fosfat diammidiku aċetilat", "Geacetyleerd dizetmeelfosfaat", "Fosfat de diamidon acetilat", "Fosfat de dimidó acetilat", "Acetiliran diškrobni fosfat", "Acetilezett dikeményítő-foszfát", "Acetylovaný zesíťovaný fosforečnan škrobu", "Ацетилиран динишестен фосфат", "Fosfato de dialmidón acetilado", "Acetylerat distärkelsefosfat"],
  roles: ["emulsifier", "stabiliser", "thickener"],
  children: []
}, {
  id: "en:e101i",
  name: "Riboflavin",
  es: "Riboflavina",
  aliases: ["Riboflavina", "Riboflavin", "Riboflaviini", "Ριβοφλαβίνη", "Riboflavinas", "Riboflaviin", "Riboflavīns", "Ryboflawina", "Riboflavine", "Riboflavín", "Рибофлавин", "3a825i", "Riboflavină"],
  roles: ["colour"],
  children: []
}, {
  id: "en:e911",
  name: "Fatty acid methyl ester",
  es: "Éster metílico de ácidos grasos",
  aliases: ["Zsírsav-metil-észter", "Methyl ester mastných kyselin", "Fettsyrametylestrar", "Метилов естер на мастни киселини", "Éster metílico de ácidos grasos", "Methyl ester van vetzuren", "Metil esteri ai acizilor grași", "Metilni estri maščobnih kislin", "Rasvahappojen metyyliesterit", "Μεθυλικός εστέρας λιπαρών οξέων", "Riebalų rūgščių metilesteriai", "Rasvhapete metüülester", "Methyl ester af fedtsyrer", "Ester metiliku tal-akidi grassi", "Estry metylowe kwasów tłuszczowych", "Éster metílico de ácidos gordos", "Esters méthyliques d'acides gras", "Fatty acid methyl ester", "Esteri metilici degli acidi grassi", "Fettsäuremethylester", "Metyl ester mastných kyselín", "Taukskābju metilesteri"],
  roles: [],
  children: []
}, {
  id: "en:e573",
  name: "Aluminium stearate",
  es: "Estearato de aluminio",
  aliases: ["Estearat d'alumini", "Aluminiumstearaat", "Nhôm stearat", "Aluminia stearato", "Стеарат алюминия", "Алуминиев стеарат", "스테아르산 알루미늄", "Hlinitý stearát", "Alüminyum stearat", "Stearát hlinitý", "Aluminiumstearat", "Aluminium stearate", "硬脂酸铝", "Estearato de alumínio", "Stéarate d'aluminium", "ステアリン酸アルミニウム", "Stearynian glinu", "Aluminijev stearat", "Stearat tal-aluminju", "อะลูมิเนียมสเตียเรต", "Стеарат алюмінію", "Alumiiniumstearaat", "ستيرات الألومنيوم", "Στεατικό αργιλίου", "אלומיניום סטארט", "Stearat de aluminiu", "آلومینیوم استئارات", "Aluminium stearat", "Estearato de aluminio", "Stearat alumini", "Алуминиум стеарат", "Алуминијум стеарат", "Alumínium-sztearát", "Alumīnija stearāts", "एल्यूमिनियम स्टीयरेट", "Stearato di alluminio", "Alüminium stearat", "Aliuminio stearatas", "Alumiinistearaatti"],
  roles: [],
  children: []
}, {
  id: "en:e503",
  name: "Ammonium carbonates",
  es: "Carbonatos de amonio",
  aliases: ["Uhličitany amonné", "ammónium-karbonátok", "Carbonatos de amonio", "Амониеви карбонати", "Ammoniumkarbonater", "Карбонаты аммония", "Ammoniumcarbonaten", "Carbonați de amoniu", "carbonatos de amonio", "Amonijevi karbonati", "Amonio karbonatai", "Ammooniumkarbonaadid", "ammoniumkarbonaatit", "Αμμωνιακά άλατα", "ammoniumkarbonater", "Karbonati tal-ammonju", "Ammoniumcarbonate", "Carbonati d'ammonio", "Ammonium carbonates", "Carbonates d'ammonium", "Carbonatos de amónio", "węglany amonu", "Amoniakové uhličitany", "Amonija karbonāti"],
  roles: [],
  children: ["en:ammonium-and-sodium-carbonates", "en:e503i", "en:e503ii"]
}, {
  id: "en:e472c",
  name: "Citric acid esters of mono- and diglycerides of fatty acids",
  es: "Ésteres cítricos de monoglicéridos y diglicéridos de ácidos grasos",
  aliases: ["Estery mono- a diglyceridů mastných kyselin s kyselinou citronovou", "цитратни естери моно- и диглицерида масних киселина", "Zsírsavak mono- és digliceridjeinek citromsav-észterei", "Sitronsyreester av mono- og diglyserider av næringsfettsyrer", "Ésteres cítricos de monoglicéridos y diglicéridos de ácidos grasos", "Естери на лимонената киселина с моно- и диглицериди на мастни киселини", "Mono- och diglyceriders citronsyraestrar", "Éster diacetil-cítrico de mono- e diglicéridos de ácidos graxos", "Mono- en diglyceriden van vetzuren veresterd met citroenzuur", "Esteri ai acidului citric cu mono- și digliceridele acizilor grași", "èsters cítrics dels monoglicèrids i diglicèrids d'àcids grassos", "citratni esteri mono- i diglicerida masnih kiselina", "Citratni estri mono- in digliceridov maščobnih kislin", "Riebalų rūgščių mono- ir digliceridų citrinų rūgšties esteriai", "Rasvhapete mono- ja diglütseriidide estrid sidrunhappega", "Rasvahappojen mono- ja diglyseridien sitruunahappoesterit", "Εστερες του κιτρικου οξεος με μονο- και διγλυκεριδια λιπαρων οξεων", "Citronsyreestere af mono- og diglycerider af fedtsyrer", "Естери гліцерину та лимонної і жирних кислот", "Esteri tal-aċidu ċitriku tal-mono- u d-digliċeridi tal-aċidi grassi", "Citric acid esters of mono- and diglycerides of fatty acids", "Esteri citrici di mono- e digliceridi degli acidi grassi", "Citronensäureester von Mono- und Diglyceriden von Speisefettsäuren", "グリセリンクエン酸脂肪酸エステル", "Ésteres cítricos de mono e diglicéridos de ácidos gordos", "Ester citrique des mono et diglycérides d'acides gras alimentaires", "Mono- i diglicerydy kwasów tłuszczowych estryfikowane kwasem cytrynowym", "Estery mono- a diglyceridov mastných kyselín s kyselinou citrónovou", "sitrik asit esterleri of mono- ve diglycerides of fatty asits", "Taukskābju mono- un diglicerīdu citronskābes esteri"],
  roles: ["antioxidant", "emulsifier", "sequestrant", "stabiliser"],
  children: []
}, {
  id: "en:e625",
  name: "Magnesium diglutamate",
  es: "Diglutamato de magnesio",
  aliases: ["Magnesium diglutamate", "Magnio diglutamatas", "Οξινο γλουταμινικο μαγνησιο", "Magnesiumdiglutamaatti", "Magnesiumdiglutamat", "Diglutamat tal-manjeżju", "Diglutamato de magnésio", "Diglutamate de magnésium", "Diglutammato di magnesio", "Diglutaminian magnezu", "Glutaman horečnatý", "Magnija diglutamāts", "Magnézium-diglutamát", "Glutaman hořečnatý", "Diglutamato de magnesio", "Магнезиев диглутамат", "Magnesiumdiglutamaat", "Diglutamat de magneziu", "Diglutamat de magnesi", "Magnezijev diglutamat"],
  roles: [],
  children: []
}, {
  id: "en:e163iv",
  name: "E163iv",
  es: "E163iv",
  aliases: [],
  roles: [],
  children: []
}, {
  id: "en:e340i",
  name: "Monopotassium phosphate",
 es: "Fosfato monopotásico",
  aliases: ["Monokaliumphosphat", "Δισοξινο φωσφορικο καλιο", "Monokaliumfosfaatti", "Monokalio fosfatas", "Kaaliumdivesinikfosfaat", "Fosfat monopotassiku", "monokalijev fosfat", "Fosforečnan monodraselný", "Fosforan monopotasowy", "Fosfato monopotássico", "Phosphate monopotassique", "Fosfato monopotassico", "Monopotassium phosphate", "Monokālija fosfāts", "Monokaliumfosfat", "Fosfato monopotásico", "Монокалиев фосфат", "Monokálium-foszfát", "Dihydrogenfosforečnan draselný", "орто-Фосфат калия 3-замещенный", "Fosfat monopotasic", "Monokaliumfosfaat", "Monokalijev fosfat"],
  roles: ["emulsifier", "humectant", "sequestrant", "stabiliser", "thickener"],
  children: []
}, {
  id: "en:e246",
  name: "Glycolipids",
  es: "Glicolípidos",
  aliases: ["Glikolipidi", "Glikolipidai", "Glükolipiidid", "غليكوليبيد", "Γλυκολιπίδια", "Glykolipidit", "ไกลโคลิปิด", "Гліколіпіди", "Qlikolipidlər", "Glykolipider", "Glikolipīdi", "Glikolipitler", "Glycolipides", "Glicolipídios", "Glykolipide", "Glicolipidi", "Glycolipids", "Glikolipidy", "Glykolipidy", "Гликолипиды", "Glikolipid", "Glikolipidek", "Гликолипиди", "Glicolípidos", "Glicolípids", "Glycolipiden", "Glicolipide"],
  roles: [],
  children: []
}, {
  id: "en:e406",
  name: "Agar",
  es: "Agar-agar",
  aliases: ["Agar", "Agar-Agar", "Agar-agar", "ಅಗಾರ್", "Агар-агар", "ကျောက်ကျော", "أغار", "Ager", "আগার", "agar", "Агар", "agaragaro", "Agars", "Agaras", "Aqar", "اگاروز", "Ager-ager", "Agaragar", "آگار", "அகார்", "Agar-agaro", "агар", "Agari", "Ágar-ágar", "ਐਗਾਰ"],
  roles: ["carrier", "emulsifier", "humectant", "stabiliser", "thickener"],
  children: []
}, {
  id: "en:e163e",
  name: "Peonidin",
  es: "Peonidina",
  aliases: ["Peonidin", "Peonidina", "페오니딘", "Пеонидин", "Peonidino", "Peonidyna", "ペオニジン", "Péonidine", "Peonidín", "Παιονιδίνη", "Peonidiin", "بيونيدين", "Пеонідин", "พีโอนิดิน", "Peonidine", "پیونیدین", "Peonidină", "פאונידין", "पियोनिडिन", "Peonidīns", "Peonidiini", "Peonidinas"],
  roles: ["colour"],
  children: []
}, {
  id: "en:e520",
  name: "Aluminium sulphate",
  es: "Sulfato de aluminio",
  aliases: ["Alumīnija sulfāts", "Síran hlinitý", "Siarczan glinu", "Aluminium sulphate", "Solfato di alluminio", "Aluminiumsulfat", "Sulfate d'aluminium", "Sulfato de alumínio", "Sulfat tal-aluminju", "Alumiinisulfaatti", "Θειικο αργιλιο", "Alumiiniumsulfaat", "Aliuminio sulfatas", "Aluminijev sulfat", "Sulfat d'alumini", "Sulfat de aluminiu", "Aluminiumsulfaat", "Алуминиев сулфат", "Sulfato de aluminio", "Alumínium-szulfát"],
  roles: [],
  children: []
}, {
  id: "en:e215",
  name: "Sodium ethyl p-hydroxybenzoate",
  es: "P-hidroxibenzoato sódico de etilo",
  aliases: ["Nátrium-etil-p-hidroxi-benzoát", "Ethyl-p-hydroxybenzoát sodná sůl", "P-hydroxibensoesyraetylesterns natriumsalt", "P-hidroxibenzoato sódico de etilo", "Натриев етил р-хидроксибензоат", "Natrijev etil parahidroksi benzoat", "Ethyl-p-hydroxybenzoaat natriumzout", "Sarea de sodiu a p-hidroxibenzoatului de etil", "Etil p-idrossibenżoat tas-sodju", "Natriumetyyli-p-hydroksibentsoaatti", "P-υδροξυβενζοϊκος αιθυλεστερας αλασ με νατριο", "Natrio etilo p–hidroksibenzoatas", "Naatriumetüül-p-hüdroksübensoaat", "Ethyl-p-hydroxybenzoat natriumsalt", "Nātrija etil-p-hidroksibenzoāts", "Sól sodowa p-hydroksybenzoesanu etylu", "Sal sódico do p-hidroxibenzoato de etilo", "Dérivé sodique du 4-hydroxybenzoate d'éthyle", "Phb-ethylester-natriumsalz (natriumethyl-p-hydroxybenzoat)", "Etil-p-idrossibenzoato di sodio", "Sodium ethyl p-hydroxybenzoate", "Nátrium-etyl-p-hydroxybenzoát"],
  roles: [],
  children: []
}, {
  id: "en:e428",
  name: "Gelatine",
  es: "Gelatina",
  aliases: ["Gelatina", "Gélatine", "ゼラチン", "Gelatine", "Żelatyna", "Geilitín", "Želatína", "geltain", "Желатина", "ဂျယ်လတင်း", "sjelatine", "Jelatin", "želatiin", "جيلاتين", "ζελατίνη", "เจลาติน", "Желатин", "gelatine", "gelatin", "želatina", "sjilletien", "জেলাটিন", "Gelatin", "gelatina", "Gelatinum", "желатин", "gelateno", "जिलेटिन", "Želatina", "Liivate", "ژلاتین", "Жэлацін", "Gelatină", "ჟელატინი", "ג'לטין", "Želatin", "Gelatino", "Zselatin", "xhelatinë", "Xelatina", "ਸਰੇਸ਼"],
  roles: [],
  children: []
}, {
  id: "en:e924b",
  name: "Calcium bromate",
  es: "Bromato de calcio",
  aliases: ["Bromat de calci", "ברומט הסידן", "Kalcijev bromat", "Canxi bromat", "Calciumbromaat", "Bromat de calciu", "Бромат кальция", "Kalsium bromat", "Kalcia bromato", "Bromičnan vápenatý", "Калцијум бромат", "Kalcium-bromát", "Калциев бромат", "Bromato de calcio", "Bromat kalciumi", "Kalciumbromat", "브롬산 칼슘", "Калциум бромат", "कैल्शियम ब्रोमेट", "Kalsiyum bromat", "Kalcija bromāts", "Calciumbromat", "Bromato di calcio", "Calcium bromate", "Bromate de calcium", "Bromato de cálcio", "臭素酸カルシウム", "Bromian wapnia", "Bromat tal-kalċju", "Kaltsiumbromaat", "Kalcio bromatas", "برومات الكالسيوم", "Βρωμικό ασβέστιο", "Kalsiumbromaatti", "แคลเซียมโบรเมต", "Бромат кальцію"],
  roles: [],
  children: []
}, {
  id: "en:e160aii",
  name: "Plant carotenes",
  es: "Carotenos de plantas",
  aliases: ["Taimsed karoteenid", "Augaliniai karotenai", "Φυτικα καροτενια", "Kasvikaroteenit", "Plantecarotener", "Karoteni tal-pjanti", "Plant carotenes", "Caroteni vegetali", "Pflanzliche carotine", "Carotènes végétaux", "Carotenos provenientes de plantas", "Karoteny otrzymywane z roślin", "Rastlinné karotény", "Augu karotīni", "Rostlinné karoteny", "Növényi karotinok", "Carotenos de plantas", "Растителни каротини", "Karotener från växter", "Plantaardige carotenen", "Caroten din plante", "Rastlinski karoteni"],
  roles: ["colour"],
  children: []
}, {
  id: "en:e460i",
  name: "Microcrystalline cellulose",
  es: "Celulosa microcristalina",
  aliases: ["Микрокристална целулоза", "Celulosa microcristalina", "Mikrokristallin cellulosa", "Mikrokristályos cellulóz", "Mikrokrystalická celulosa", "Celuloză microcristalină", "Microkristallijne cellulose", "Mikrokristalna celuloza", "Mikrokrystallinsk cellulose", "Mikrokristalinė celiuliozė", "Mikrokristalne tselluloos", "Μικροκρυσταλλικη κυτταρινη", "Mikrokiteinen selluloosa", "Ċelluloża mikrokristallina", "Mikrokryštalická celulóza", "Cellulose microcristalline", "Celulose microcristalina", "Cellulosa microcristallina", "Mikrokristalline Cellulose", "Microcrystalline cellulose", "Celuloza mikrokrystaliczna", "Mikrokristāliskā celuloze"],
  roles: ["carrier", "emulsifier", "humectant", "stabiliser", "thickener"],
  children: []
}, {
  id: "en:e160diii",
  name: "Lycopene‚ Blakeslea trispora",
  es: "Lycopene‚ Blakeslea trispora",
  aliases: ["Lycopene‚ Blakeslea trispora"],
  roles: [],
  children: []
}, {
  id: "en:e163iii",
  name: "E163iii",
  es: "E163iii",
  aliases: [],
  roles: [],
  children: []
}, {
  id: "en:e1442",
  name: "Hydroxypropyl distarch phosphate",
  es: "Fosfato de dialmidón hidroxipropilado",
  aliases: ["Hydroxypropyl diškrobfosfát", "Phosphate de diamidon hydroxypropyle", "Fosfato de hidroxipropildiamido", "Fosfato di diamido idrossipropilato", "Hydroxypropyldistärkephosphat", "Hydroxypropyl distarch phosphate", "Hydroksypropylofosforan diskrobiowy", "Hidroksipropildicietes fosfāts", "Hydroxypropyldistivelsephosphat", "Hüdroksüpropüülditärklisfosfaat", "Hidroksipropildikrakmolo fosfatas", "Hydroksipropyyliditärkkelysfosfaatti", "Οξινο φωσφορικο υδροξυπροπυλαμυλο", "Fosfat diammid idrossipropiliku", "Fosfat de diamidon hidroxipropilic", "Hydroxypropyldizetmeelfosfaat", "Fosfat de dimidó hidroxipropilat", "Hidroksipropil diškrobni fosfat", "Fosfato de dialmidón hidroxipropilado", "Хидроксипропил динишестен фосфат", "Hydroxipropyldistärkelsefosfat", "Hidroxi-propil-dikeményítő-foszfát", "Hydroxypropylether zesíťovaného fosforečnanu škrobu", "дикрахмалфосфат оксипропилированный"],
  roles: ["emulsifier", "stabiliser", "thickener"],
  children: []
}, {
  id: "en:e1519",
  name: "Benzyl alcohol",
  es: "Alcohol bencílico",
  aliases: ["Benzylalkohol", "Alcol benzilico", "Benzyl alcohol", "Álcool benzílico", "Alcool benzylique", "Alkohol benzylowy", "Benzil alkol", "Benzilspirts", "Benzilo alkoholis", "Bensüülalkohol", "Βενζυλικη αλκοολη", "Bentsyylialkoholi", "Alkoħol benżiliku", "Benzylalcohol", "Alcool benzilic", "Alcohol benzílic", "Benzil alkohol", "Benzil-alkohol", "Alcohol bencílico", "Бензил алкохол", "Bensylalkohol"],
  roles: [],
  children: []
}, {
  id: "en:e512",
  name: "Stannous chloride",
  es: "Cloruro de estaño",
  aliases: ["Stannochlorid", "Tinakloriid", "Alavo chloridas", "Χλωριουχος κασσιτερος(ιι)", "Tinakloridi", "Klorur stannuż", "Chlorid cínatý", "Zinnii-chlorid", "Stannous cloruri", "Stannous chloride", "Cloreto estanoso", "Chlorure stanneux", "Chlorek cynawy", "Alvas hlorīds", "Cloruro de estaño", "Калаен хлорид", "Tennklorid", "Ón-klorid", "Clorură stanoasă", "Tiniichloride", "Clorur estannós", "Kositrov ii klorid"],
  roles: ["antioxidant"],
  children: []
}, {
  id: "en:e470a",
  name: "Sodium/potassium and calcium salts of fatty acids",
  es: "Sales sódicas/ potásicas y cálcicas de ácidos grasos",
  aliases: ["L-imlieħ tas-sodju/il-potassju u l-kalċju tal-aċidi grassi", "Rasvahappojen natrium-/kalium- ja kalsiumsuolat", "Αλατα λιπαρων οξεων με νατριο/καλιο και ασβεστιο", "Sodium/potassium and calcium salts of fatty acids", "Rasvhapete naatrium-/kaalium- ja kaltsiumsoolad", "Natrium-/kalium- og calciumsalte af fedtsyrer", "Taukskābju nātrija/kālija un kalcija sāļi", "Sole sodowe/potasowe i wapniowe kwasów tłuszczowych", "Sais de sódio/potássio e cálcio de ácidos gordos", "Stéarate de sodium/potassium/calcium", "Sali di sodio/di potassio e di calcio degli acidi grassi", "Natrium-/Kalium- und Calciumsalze der Speisefettsäuren", "Sodné/draselné a vápenaté soli mastných kyselín", "Zsírsavak nátrium/-kálium- és kalciumsói", "Sodné/draselné a vápenaté soli mastných kyselin", "Natrium-/kalium- och kalciumsalter av fettsyror", "Натриеви/калиеви и калциеви соли на мастни киселини", "Sales sódicas/ potásicas y cálcicas de ácidos grasos", "Natrijeve/kalijeve in kalcijeve soli maščobnih kislin", "Sal sòdica d'àcids grassos", "Natrium-/kalium- en calciumzouten van vetzuren", "Săruri de sodiu/potasiu și calciu ale acizilor grași"],
  roles: ["emulsifier", "stabiliser", "thickener"],
  children: ["en:e470ai", "en:e470aii", "en:e470aiii"]
}, {
  id: "en:e231",
  name: "Orthophenyl phenol",
  es: "Fenol ortofenil",
  aliases: ["Ortofenylfenol", "Ortofenil fenolo", "Orthophenylphenol", "Orthophenyl phenol", "Ortofenilfenol", "邻苯基苯酚", "オルトフェニルフェノール", "Orthophénylphénol", "Ortofenylofenol", "Ortofenil fenol", "Ortofenilfenols", "ออร์โทฟีนิล ฟีนอล", "Ортофенілфенол", "Ortofenüülfenool", "Ortofenilfenolis", "أورثو فينيل فينول، 2-هيدروكسي ثنائي الفينيل", "Ορθοφαινυλο φαινόλη", "Ortofenyylifenoli", "Fenylfenol", "Ортофенил фенол", "Fenol ortofenil", "오르토페닐 페놀", "Orthofenylfenol", "Ortofenil-fenol", "Ортофенилфенол"],
  roles: ["preservative"],
  children: []
}, {
  id: "en:e440ii",
  name: "Amidated pectin",
  es: "Pectina amidada",
  aliases: ["Pectina amidada", "Амидиран пектин", "Amiderat pektin", "아미드화 펙틴", "амидиран пектин", "Amidovaný pektin", "амидирани пектин", "Amidált pektin", "pektin teramidasi", "amidita pektino", "амидированный пектин", "Pectină amidată", "Geamideerde pectine", "Amidirani pektin", "פקטין אמידי", "Amideret pectin", "amidləşdirilmiş pektin", "амідірованний пектин", "بكتين أميد", "Amidintas pektinas", "Amiiditud pektiin", "Αμιδωμένη πηκτίνη", "Amidoitu pektiini", "Pektina amidata", "amidirani pektin", "Amidovaný pektín", "Amidated pectin", "Pectina amidata", "Amidiertes Pektin", "酰胺化果胶", "アミド化ペクチン", "Pectine amidée", "Pektyna amidowana", "amidlenmiş pektin", "Amidēts pektīns", "एमिडित पेक्टिन"],
  roles: ["emulsifier", "stabiliser", "thickener"],
  children: ["en:e440b"]
}, {
  id: "en:e1101",
  name: "Protease",
  es: "Peptidasa", 
  aliases: ["Protease", "peptidazo", "Протеаза", "단백질 가수 분해 효소", "Proteas", "Peptidasa", "Proteaza", "Proteáza", "Proteáz", "Peptidaza", "פרוטאז", "peptidasa", "Proteaze", "پروتئاز", "protease", "Պրոտեոլիտ ֆերմենտներ", "Πεπτιδάση", "Proteaasi", "Peptidazės", "Proteaasid", "ببتيداز", "Proteaz", "proteazy", "Proteasi", "Peptidase", "Protéases", "プロテアーゼ"],
  roles: ["stabiliser"],
  children: ["en:e1101i", "en:e1101ii", "en:e1101iii", "en:e1101iv", "en:e1101v", "en:e1101vi"]
}, {
  id: "en:e341iii",
  name: "Tricalcium phosphate",
  es: "Fosfato tricálcico",
  aliases: ["Trikalcijum fosfat", "Fosforečnan vápenatý", "Trikalcium-foszfát", "trikalsiumfosfat", "Трикалциев фосфат", "Fosfato tricálcico", "Trikalciumfosfat", "Fosfat de tricalci", "Trikalcij-fosfat", "Trikalcijev fosfat", "Tricanxi photphat", "Tricalciumfosfaat", "Fosfat tricalcic", "تری‌کلسیم فسفات", "trikalcijev fosfat", "Fosfat trikalċiku", "Trikalcio fosfatas", "Trikaltsiumfosfaat", "فوسفات ثلاثي الكالسيوم", "Trikalsiumfosfaatti", "Φωσφορικο ασβεστιο", "Tricalciumphosphat", "Ортофосфат кальцію", "Кальций фосфаты", "Trikalcija fosfāts", "Tricalcium fosfato", "Tricalcium phosphate", "Phosphate tricalcique", "リン酸三カルシウム", "Fosforan trójwapniowy", "Fosforečnan trivápenatý"],
  roles: ["emulsifier", "humectant", "sequestrant", "stabiliser", "thickener"],
  children: []
}, {
  id: "en:e331iii",
  name: "Trisodium citrate",
  es: "Citrato trisódico",
  aliases: ["trinatriumcitraat", "Cytrynian trisodowy", "Citrato trisodico", "Trisodium citrate", "Trinatriumcitrat", "クエン酸三ナトリウム", "Citrato trissódico", "Citrate trisodique", "citrat trisodic - citrat trisodic dihidrat", "Citrat trisòdic", "Trinatriumsitraatti", "Trinátrium-citrát", "Тринатриев цитрат", "Citrato trisódico", "цитрат натрия 3-замещенный", "trinatrijev citrat", "Trinatriumsitrat"],
  roles: [],
  children: []
}, {
  id: "en:e338",
  name: "Phosphoric acid",
  es: "Ácido fosfórico",
  aliases: ["Fosforihappo", "Fosforo rūgštis", "फास्फोरिक अम्ल", "Fosforskābe", "Asid ffosfforig", "Acido fosforico", "Ácido fosfórico", "Asid fosforik", "Acid fosforic", "ఫాస్పారిక్ ఆమ్లం", "asam fosfor", "Foszforsav", "фосфорна киселина", "Fosforsyra", "Фосфорна киселина", "Фосфор қышқылы", "Fosforjeva v kislina", "חומצה זרחתית", "Fosfatna kiselina", "பாசுபாரிக் காடி", "Fosforzuur", "azido fosforiko", "ფოსფორმჟავა", "فسفریک اسید", "fosforna kiselina", "Aċidu fosforiku", "Fosforsyre", "ফসফরিক এসিড", "Φωσφορικο οξυ", "Fosforhape", "օրթոֆոսֆորական թթու", "Ортофосфорна кислота", "Phosphorsyre", "фусфыр әчелеге", "กรดฟอสฟอริก", "फोस्फरिक अम्ल", "Fosforik asit", "Ортофосфор кислотасы", "Kwas fosforowy", "Acide orthophosphorique", "फॉस्फरिक आम्ल", "Phosphorsäure", "Phosphoric acid", "Kyselina fosforečná", "Aigéad fosfarach", "Fosfata acido", "Àcid fosfòric", "Axit phôtphoric"],
  roles: ["antioxidant", "sequestrant"],
  children: []
}, {
  id: "en:e241",
  name: "Gum Guaicum",
  es: "Goma Guaicum",
  aliases: ["Gomma Guaicum", "Gummi Guaicum", "Guajakki-kumi", "Κόμμι Γκουαϊακούμης", "Guma Guaicum", "Guaicum Kumm", "Gum Guaicum", "Guaicum Gummi", "Goma Guaicum", "Gomme gaïac", "Гума Гуайакум", "Guajakgumi", "Gumă Guaicum", "Gom Guaicum"],
  roles: [],
  children: []
}, {
  id: "en:e401",
  name: "sodium alginate",
  es: "alginato sódico",
  aliases: ["альгинат натрия", "Alginan sodný", "Nátrium-alginát", "alginato sódico", "Натриев алгинат", "natriumalginat", "Alginat de sodi", "Natrijev alginat", "Natriumalginaat", "alginat de sodiu", "Alġinat tas-sodju", "Natriumalginat", "Natrio alginatas", "Naatriumalginaat", "ألجينات الصوديوم", "natriumalginaatti", "Αλγινικο νατριο", "Альгінат натрію", "Nātrija algināts", "alginato di sodio", "sodium alginate", "alginato de sódio", "alginate de sodium", "アルギン酸ナトリウム", "alginian sodu", "Alginát sodný"],
  roles: ["carrier", "emulsifier", "humectant", "sequestrant", "stabiliser", "thickener"],
  children: []
}, {
  id: "en:e490",
  name: "E490",
  es: "E490",
  aliases: [],
  roles: [],
  children: []
}, {
  id: "en:e500iii",
  name: "Sodium sesquicarbonate",
  es: "Sesquicarbonato de sodio",
  aliases: ["Nātrija seskvikarbonāts", "Półtorawęglan sodu", "Sesquicarbonato de sódio", "セスキ炭酸ナトリウム", "Sesquicarbonate de sodium", "Sodium sesquicarbonate", "Natriumsesquicarbonat", "Seskviuhličitan sodný", "Seskwikarbonat tas-sodju", "Σεσκιανθρακικο νατριο", "Natriumseskvikarbonaatti", "Naatriumseskvikarbonaat", "Natrio seskvikarbonatas", "Տրինատրիումի հիդրոկարբոնատ", "natriumsesquikarbonat", "Natrijum seskvikarbonat", "Natrijev seskvikarbonat", "sodium sesquicarbonate", "Natriumsesquicarbonaat", "Sescvicarbonat de sodiu", "Гидрокарбонат тринатрия", "Natria seskvikarbonato", "Nátrium-szeszkvikarbonát", "Natriumseskvikarbonat", "Натриев сескикарбонат", "Sesquicarbonato de sodio"],
  roles: ["stabiliser", "thickener"],
  children: []
}, {
  id: "en:e161h",
  name: "Zeaxanthin",
  es: "Zeaxantina",
  aliases: ["Зеаксантин", "Zeaxantina", "Zeaxantin", "제아잔틴", "zeaxantin", "Zeaksantino", "Zeaxanthin", "زآگزانتین", "Zeaxantină", "Zeaxanthine", "Zeaksantin", "זאקסנטין", "ซีแซนทีน", "Zeaksantiin", "Zeaksantinas", "زياكسانثين", "Tseaksantiini", "Ζεαξανθίνη", "Zeaxantín", "玉米黄质", "Zéaxanthine", "ゼアキサンチン", "Zeaksantyna", "Zeaksantīns", "ज़ेक्सैंथिन"],
  roles: ["colour"],
  children: ["en:e161hi", "en:e161hii"]
}, {
  id: "en:e471",
  name: "Mono- and diglycerides of fatty acids",
  es: "mono- y diglicéridos de ácidos grasos",
  aliases: ["Mono- en diglyceriden van vetzuren", "Mono- și digliceride ale acizilor grași", "Monoglicèrids i diglicèrids d'àcids grassos", "Mono- in digliceridi maščobnih kislin", "Mono- a diglyceridy mastných kyselin", "mono- i digleciridi masnih kiselina", "mono- och diglycerider av fettsyror", "Zsírsavak mono- és digliceridjei", "Моно- и диглицериди на мастни киселини", "mono- y diglicéridos de ácidos grasos", "Моно- и диглицериды жирных кислот", "Mono- und Diglyceride von Speisefettsäuren", "Mono- e digliceridi degli acidi grassi", "Mono- and diglycerides of fatty acids", "Mono- et diglycérides d'acides gras", "Mono e diglicéridos de ácidos gordos", "Mono- i diglicerydy kwasów tłuszczowych", "Mono- a diglyceridy mastných kyselín", "Taukskābju mono- un diglicerīdi", "Rasvhapete mono- ja diglütseriidid", "Riebalų rūgščių mono- ir digliceridai", "أحادي وثنائي الجليسريدات للأحماض الدهنية", "Μονο- και διγλυκεριδια λιπαρων οξεων", "Rasvahappojen mono- ja diglyseridit", "โมโน- และไดกลีเซอไรด์ของกรดไขมัน", "Mono- og diglycerider af fedtsyrer", "mono- i digliceridi masnih kiselina", "Mono- u digliċeridi tal-aċidi grassi", "Mono- og diglyserider av fettsyrer"],
  roles: ["emulsifier", "stabiliser"],
  children: ["en:mono-and-diglycerides-of-vegetable-fatty-acids"]
}, {
  id: "en:e916",
  name: "Calcium iodate",
  es: "Yodato de calcio",
  aliases: ["Jodan vápenatý", "Kalcium-jodát", "Kalciumjodat", "Yodato de calcio", "Калциев йодат", "Calciumjodaat", "3b202", "Iodat de calciu", "Kalcijev jodat", "Ιωδικό ασβέστιο", "Kalsiumjodaatti", "Kaltsiumjodaat", "Kalcio jodatas", "Calciumiodat", "Jodat tal-kalċju", "Jodan wapnia", "Calcium iodate", "Iodato di calcio", "Iodate de calcium", "Iodato de cálcio", "Kalcija jodāts"],
  roles: [],
  children: []
}, {
  id: "en:e120",
  name: "Cochineal",
  es: "Cochinilla",
  aliases: ["Кармин", "Karmin", "Košenila", "echtes Karmin", "Cochineal", "Acide carminique", "Cochonilha", "コチニール色素", "Koszenila", "karmin", "Kuċċinilja", "ชาดลิ้นจี่", "karminer", "Կարմին", "Кармін", "Košenill", "Κοχενιλη", "Carmí", "Đỏ yên chi", "carmin", "karmino", "Кошениль", "Кохинил", "Košenils", "Cocciniglia", "Košenilis", "Karmiinit", "Karmino", "Košenilja", "קרמין", "Carmine", "Coșenilă", "Gorrimin", "Cochenille", "Carmin", "Cochinilla", "кармин", "Kosnil"],
  roles: ["colour"],
  children: []
}, {
  id: "en:e217",
  name: "Sodium propyl para-hydroxybenzoate",
  es: "Propil parahidroxibenzoato sódico",
  aliases: ["Natriumpropyl-p-hydroxybenzoat", "Natrio propilo p–hidroksibenzoatas", "Naatriumpropüül-p-hüdroksübensoaat", "Νάτριο προπυλο π-υδροξυβενζοϊκο", "Natriumpropyyli-p-hydroksibentsoaatti", "Natriju propil p-idrossibenżoat", "Sodná soľ propyl-p-hydroxybenzoátu", "Sodium propyl para-hydroxybenzoate", "Sodio propil p-idrossibenzoato", "Dérivé sodique du 4-hydroxybenzoate de propyle", "P-hidroxibenzoato de propilo sódico", "Sól sodowa p-hydroksybenzoesanu propylu", "Nātrija propil-p-hidroksibenzoāts", "Propil parahidroxibenzoato sódico", "Натриев пропил п-хидроксибензоат", "Natriumpropyl-p-hydroxybensoat", "Sodná sůl propyl-p-hydroxybenzoátu", "Nátrium-propil-para-hidroxibenzoát", "Sarea de sodiu a p-hidroxibenzoatului de propil", "Natriumpropyl-p-hydroxybenzoaat", "Natrijev propil parahidroksi benzoat"],
  roles: [],
  children: []
}, {
  id: "en:e352",
  name: "Calcium malates",
  es: "Malatos de calcio",
  aliases: ["Kalciummalater", "Malatos de calcio", "Калциеви малати", "Kalcium-malátok", "Vápenaté maláty", "Kalcijevi malati", "Malats de calci", "Malate de calciu", "Calciummalaten", "Malati tal-kalċju", "Calciummalater", "Kalsiummalaatit", "Μηλικά ασβεστίου", "Kaltsiummalaadid", "Kalcio malatai", "Kalcija malāti", "Jabłczany wapnia", "Malates de calcium", "Malatos de cálcio", "Malati di calcio", "Calcium malates"],
  roles: [],
  children: ["en:e352i", "en:e352ii"]
}, {
  id: "en:e459",
  name: "Beta-cyclodextrine",
  es: "Beta-ciclodextrina",
  aliases: ["Beta-ciklodekstrin", "Beta-ċiklodextrin", "Beta-cyclodextrin", "Beta-Siklodekstrin", "Βήτα-κυκλοδεξτρίνη", "Beeta-syklodekstriini", "Beeta-tsüklodekstriin", "Beta-ciklodekstrinas", "بيتا سيكلودكسترين", "Beta-ciklodekstrīns", "Beta-cyklodextrín", "Beta-cyklodekstryna", "β-环糊精", "Béta-cyclodextrine", "Beta-ciclodextrina", "ベータ-シクロデキストリン", "Beta-cyclodextrine", "Beta-ciclodestrina", "Beta-Cyclodextrin", "Beta-ciklodekstrino", "Бета-циклодекстрин", "베타-사이클로덱스트린", "Beta-cyklodextrin", "béta-ciklodextrin", "β-ciclodextrina", "Beta-ciclodextrină"],
  roles: ["carrier", "stabiliser", "thickener"],
  children: []
}, {
  id: "en:e1205",
  name: "Basic methacrylate copolymer",
  es: "Copolímero de metacrilato básico",
  aliases: ["Basisk metakrylatsampolymer", "Copolímero de metacrilato básico", "Основен метакрилат кополимер", "Bázikus metakrilát-kopolimer", "Bazický kopolymer methakrylátu", "Copolimer metacrilat bazic", "Basisch methacrylaatcopolymeer", "Osnovni kopolimer metakrilata", "Copolímer de metacrilat bàsic", "Basisk methacrylat-copolymer", "Emäksinen metakrylaattikopolymeeri", "Βασικο μεθακρυλικο συμπολυμερες", "Bazinis metakrilato kopolimeras", "Aluseline metakrülaatkopolümeer", "Kopolimeru metakrilat bażiku", "Kopolymér základného metakrylátu", "Zasadowy kopolimer metakrylanu", "Copolymère méthacrylate basique", "Copolimero di metacrilato basico", "Basic methacrylate copolymer", "Basisches methacrylat-copolymer", "Metakrilāta bāzes kopolimērs"],
  roles: [],
  children: []
}, {
  id: "en:e236",
  name: "Formic acid",
  es: "Ácido fórmico",
  aliases: ["Mierenzuur", "Acid formic", "Mravljinčna kislina", "Àcid fòrmic", "Hangyasav", "Kyselina mravenčí", "Myrsyra", "Мравчена киселина", "Ácido fórmico", "Kwas mrówkowy", "Acide formique", "Ácido metanoico", "Ameisensäure", "Acido formico", "Formic acid", "Kyselina mravčia", "Skudrskābe", "Muurahaishappo", "Μεθανικό οξύ", "Metaanhape", "Myresyre"],
  roles: [],
  children: []
}, {
  id: "en:e501i",
  name: "Potassium carbonate",
  es: "Carbonato de potasio",
  aliases: ["калијум карбонат", "kaliumkarbonat", "Kálium-karbonát", "Carbonato de potasio", "Сақар", "Kaliumkarbonat", "పొటాషియం కార్బోనేట్", "Potasium karbonat", "اُشنان", "Kaliumcarbonaat", "Carbonat de potasiu", "پتاسیم کربنات", "பொட்டாசியம் கார்பனேட்டு", "אשלג", "Kalijev karbonat", "Kalijum karbonat", "Potaso", "Kalio karbonatas", "Kaliumkarbonaatti", "Carbonato di potassio", "पोटासियम कार्बोनेट", "Kālija karbonāts", "Uhličitan draselný", "Калиев карбонат", "탄산 칼륨", "Карбонат калия", "kalia karbonato", "Kali cacbonat", "Pottaska", "Carbonat de potassi", "Potassa", "Kaaliumkarbonaat sünonüümid", "كربونات البوتاسيوم", "Ανθρακικα αλατα του καλιου", "โพแทสเซียมคาร์บอเนต", "Կալիումի կարբոնատ", "Карбонат калію", "Karbonat tal-potassju", "kalijevi karbonati", "পটাসিয়াম কার্বনেট", "Kaliumcarbonat", "Potassium carbonate", "Carbonato de potássio", "Carbonate de potassium", "炭酸カリウム", "Węglan potasu", "Калий карбонаты"],
  roles: ["stabiliser"],
  children: []
}, {
  id: "en:e385",
  name: "Calcium disodium ethylenediaminetetraacetate",
  es: "Ácido etilendiaminotetraacético",
  aliases: ["Kalcija dinātrija etilēndiamīna tetraacetāts", "Etyléndiamíntetraacetát vápenato-disodný", "Sól wapniowo-disodowa kwasu etylenodiaminotetraoctowego", "Etilendiamminotetraacetato di calcio disodico", "Calcium-dinatrium-ethylendiamintetraacetat", "Calcium disodium ethylenediaminetetraacetate", "etilenodiaminotetracetato de cálcio dissódico", "鈉鈣乙二胺四乙酸", "Éthylène diamine tétra-acétate de calcium disodium", "kalcijev dinatrijev etilendiamintetraacetat", "Etilendiammintetraaċetat disodiku tal-kalċju", "Calciumdinatriumethylendiamintetraacetat", "Kalsiumdinatriumetyleenidiamiinitetra-asetaatti", "Αιθυλενοδιαμινοτετραοξικο ασβεστιονατριο", "Kaltsiumdinaatriumetüleendiamiintetraatsetaat", "Kalcio dinatrio etilendiaminotetraacetatas", "ثنائي صوديوم كالسيوم الإيديتات", "Kalcijev dinatrijev etilendiamintetra acetat", "Etilendiaminotetracetat de calci i disodi", "Etilendiaminotetraacetat de calciu disodic", "ସୋଡ଼ିଅମ କ୍ୟାଲସିଅମ ଏଡେଟେଟ", "Natri canxi edetate", "Calciumdinatrium-ethyleendiaminetetraäcetaat", "Natrium kalsium edetat", "Этилендиаминтетраацетат кальция-натрия", "Kalciumdinatriumetylendiamintetraacetat", "Ácido etilendiaminotetraacético", "Калциев динатриев етилен диамин тетраацетат", "Dvojsodnovápenatá sůl kyseliny diamintetraoctové", "Kalcium-dinátrium-etilén-diamin-tetraacetát"],
  roles: ["antioxidant", "preservative", "sequestrant"],
  children: []
}, {
  id: "en:e173",
  name: "Aluminium",
  es: "Aluminio",
  aliases: ["Aluminium", "Alumiinium", "Aliuminis", "Alumiini", "Αργιλιο (αλουμινιο)", "Aluminju", "Hliník", "Alluminio", "Alumínio", "Glin", "Alumīnijs", "Алуминий", "Aluminio", "Alumínium", "Алюминий", "Aluminiu", "Alumini", "Aluminij"],
  roles: [],
  children: []
}, {
  id: "en:e627",
  name: "Disodium guanylate",
  es: "Guanilato disódico",
  aliases: ["Natriumguanylaat", "Dinatri guanylat", "دی‌سدیم گوانیلات", "Guanilat disodic", "Dinatrijev gvanilat", "Dinatrijum guanilat", "Guanilat de disodi", "Dinátrium-guanilát", "Guanylan sodný", "Dinatriumguanylat", "Динатриев гуанилат", "Guanilato disódico", "Dunatria guanilato", "Dinatrium guanilat", "Guanylan disodowy", "Guanylate disodique", "Guanilato dissódico", "Guanilato bisodico", "Disodium guanylate", "Guanylan disodný", "Dinātrija guanilāts", "Γουανιλικο νατριο", "Dinatriumguanylaatti", "Naatriumguanülaat", "Dinatrio guanilatas", "غوانيلات ثنائية الصوديوم", "Gwanilat disodiku", "dinatrijev guanilat"],
  roles: [],
  children: []
}, {
  id: "en:e414a",
  name: "E414a food additive",
  es: "E414a food additive",
  aliases: ["Acide octénylsuccinique", "Oktenyylimeripihkahappo"],
  roles: ["carrier", "emulsifier", "stabiliser", "thickener"],
  children: []
}, {
  id: "en:e103",
  name: "Alkannin",
  es: "Crisoína",
  aliases: ["Alkannin", "Krysoiini S", "Alcannina", "Jaune chrysoïne", "amarelo de alcanaína", "Alkanina", "Crisoína", "Alcanet"],
  roles: [],
  children: []
}, {
  id: "en:e440aiii",
  name: "Potassium pectate",
  es: "Potassium pectate",
  aliases: ["Pectate de potassium", "Kálium-pektát", "Potassium pectate", "Kaliumpektaatti", "Kaliumpectaat"],
  roles: ["emulsifier", "stabiliser", "thickener"],
  children: []
}, {
  id: "en:e945",
  name: "chloropentafluoroethane",
  es: "cloropentafluoroetano",
  aliases: ["cloropentafluoroetano", "क्लोरोपेंटाफ्लोरोइथेन", "hloropentafluoretāns", "Klooripentafluorietaani", "chlorpentafluoretanas", "xloropentafluoroetan", "Chloorpentafluorethaan", "Cloropentafluoro-etan", "כלורופנטאפלואורואתאן", "kloropentafluoroetan", "Kloropentafluoretán", "хлоропентафлуороетан", "kloropentafluoroetana", "chloropentafluoroetan", "クロロペンタフルオロエタン", "氯五氟乙烷", "Chloropentafluoroéthane", "Chlorpentafluorethan", "chloropentafluoroethane", "chlórpentafluóretán", "kloropentafloroetan", "χλωροπενταφθοροαιθάνιο", "kloropentafluoroetaan", "كلورو خماسي فلورو الإيثان", "хлоропентафторетан", "chlorpentafluorethan", "คลอโรเพนตาฟลูออโรอีเทน", "kloropentafluoroetanu", "chloorpentafluoroetaan", "cloropentafluoroetà", "chloropentafluorethan", "클로로펜타플루오로에탄", "хлорпентафторэтан", "kloropentafluoroetano"],
  roles: [],
  children: []
}, {
  id: "en:e160",
  name: "Carotenoids",
  es: "Carotenoides",
  aliases: ["Carotenoidi", "Carotenoids", "Carotinoide", "Carotenoides", "カロチノイド色素", "Caroténoïdes", "Karotenoidy", "Carotenoider", "Karotenoidid", "Karotenoidai", "Karotenoidit", "Καροτενοειδή", "Carotenoide", "Каротеноиди", "Karotinoidok"],
  roles: [],
  children: []
}, {
  id: "en:e960c",
  name: "Enzymatically produced steviol glycosides",
  es: "Glucósidos de esteviol producidos enzimáticamente",
  aliases: ["Glucósidos de esteviol producidos enzimáticamente", "Enzymatisch geproduceerde steviolglycosiden", "Glicosidi steviolici prodotti enzimaticamente", "Enzymatisch hergestellte Steviolglycoside", "Enzymatically produced steviol glycosides", "Glicosídeos de esteviol produzidos enzimaticamente", "Glycosides de stéviol produits par voie enzymatique"],
  roles: ["sweetener"],
  children: []
}, {
  id: "en:e905d",
  name: "Mineral oil high viscosity",
  es: "Aceite mineral de alta viscosidad",
  aliases: ["Magas viszkozitású ásványi olaj", "Minerální olej vysoké viskozity", "Aceite mineral de alta viscosidad", "Високовискозитно минерално масло", "Mineralolja med hög viskositet", "Minerale olie met hoge viscositeit", "Ulei mineral cu vâscozitate mare", "Mineralno olje visoke viskoznosti", "Aukštos klampumo mineralinė alyva", "Kõrge viskoossusega mineraalõli", "Nestemäinen parafiini", "Υψηλής ιξώδους ορυκτό έλαιο", "Mineralolie med høj viskositet", "Xibka ta' viskożità għolja tal-ħalib", "Paraffine liquide", "Óleo mineral de alta viscosidade", "Olio minerale ad alta viscosità", "Mineral oil high viscosity", "Mineralöl hohe Viskosität", "Olej mineralny o wysokiej lepkości", "Minerálny olej s vysokou viskozitou", "Augsta viskozitāte minerālais eļļa"],
  roles: [],
  children: []
}, {
  id: "en:e172ii",
  name: "Red iron oxide",
  es: "Óxido de hierro rojo",
  aliases: ["Црвен железен оксид", "Järn(III)oxid", "산화철(III) 적색", "Óxido de hierro rojo", "Червен железен оксид", "Oksid hekuri i kuq", "Црвени оксид гвожђа", "Oxid železitý", "Vas(III)-oxid", "Besi(III) oksida merah", "Красный оксид железа", "Oxid de fier roșu", "اکسید آهن سرخ", "IJzer(III)oxide", "Oxit sắt đỏ", "תחמוצת ברזל אדומה", "Železov(III) oksid", "Òxid de ferro vermell", "Qırmızı dəmir oksidi", "Rød jernoxid", "Червоний оксид заліза", "เหล็กออกไซด์สีแดง", "Punainen rautaoksidi", "Κόκκινο οξείδιο του σιδήρου", "Raudonasis geležies oksidas", "Raud(III)oksiid", "أكسيد الحديد الأحمر", "Crveni željezov oksid", "Czerwony tlenek żelaza", "Ossido di ferro rosso", "Eisen(III)-oxid", "Red iron oxide", "Óxido de ferro vermelho", "红色氧化铁", "Oxyde de fer rouge", "酸化鉄(III)", "Kırmızı demir oksit", "Sarkanais dzelzs oksīds"],
  roles: ["colour"],
  children: []
}, {
  id: "en:e1411",
  name: "Distarch glycerol",
  es: "Glicerol de distarco",
  aliases: ["Glycerol distarch", "Distärkeglycerol", "Glicerolo di distarch", "Distarch glycerol", "Glicerol de distarca", "Glycérol de diamidon", "glicerol diskrobiowy", "Distarča glicerols", "Distarch glikerolis", "Distärküülglütserool", "Distärkkelysglyseroli", "Γλυκερόλη διστάρχη", "Gliċerolu distarċ", "Glicerol de distarce", "Glicerol distarč", "Glicerol de distarco", "Глицерил дистарч", "Distärkelseglycerol", "Dikeményítő-glycerol"],
  roles: ["emulsifier", "stabiliser", "thickener"],
  children: []
}, {
  id: "en:e527",
  name: "Ammonium hydroxide",
  es: "Hidróxido amónico",
  aliases: ["Amonija hidroksīds", "Hydroxid amónny", "Wodorotlenek amonu", "Hydroxyde d'ammonium", "Ammonium hydroxide", "Idrossido di ammonio", "Ammoniumhydroxid", "Idrossidu tal-ammonju", "Υδροξειδιο του αμμωνιου", "Ammoniumhydroksidi", "Ammooniumhüdroksiid", "Amonio hidroksidas", "Amonijev hidroksid", "Hidròxid d'amoni", "Hidroxid de amoniu", "Ammoniumhydroxide", "Амониев хидроксид", "Hidróxido amónico", "Ammónium-hidroxid", "Hydroxid amonný"],
  roles: [],
  children: []
}, {
  id: "en:e125",
  name: "Scarlet GN",
  es: "Ponceau SX",
  aliases: ["Ponceau SX", "Skarletti GN", "Szkarłat GN", "Scarlet GN"],
  roles: [],
  children: []
}, {
  id: "en:e239",
  name: "Hexamethylene tetramine",
  es: "Hexametilentetramina",
  aliases: ["Hexamethylentetramin", "Hexametilén-tetramin", "Hexametilentetramina", "Хексаметилен тетрамин", "Hexametylentetramin", "Hexamethyleentetramine", "Hexametilentetramină", "Heksametilen-tetramin", "Heksametüleentetramiin", "Heksametileno tetraaminas", "Heksametyleenitetramiini", "Εξαμεθυλενοτετραμινη", "Eżametilen tetrammina", "Esametilentetramina", "Hexamethylene tetramine", "Hexametilenotetramina", "Hexaméthylènetétramine", "Heksametylenoczteroamina", "Hexametylén tetramín", "Heksametilēntetramīns"],
  roles: ["preservative"],
  children: []
}, {
  id: "en:e364",
  name: "Sodium succinates",
  es: "Succinato de sodio",
  aliases: ["Sukcinát sodný", "Bursztynian sodu", "琥珀酸钠", "Succinato de sódio", "コハク酸ナトリウム", "Succinates de sodium", "Sodium succinates", "Natriumsuccinat", "Sodyum süksinat", "Сукцинат натрію", "Natriumsukcinat", "โซเดียมซัคซิเนต", "Ηλεκτρικό νάτριο", "Naatrium suktsinaat", "سكسينات الصوديوم", "Suċċinat tas-sodju", "Natrijev sukcinat", "Natri succinat", "Succinat de sodi", "숙신산 나트륨", "Натриев сукцинат", "Natrium sukcinát", "Natria sukcinato", "Сукцинат натрия", "Succinato di sodio", "Nātrija sukcināts", "सोडियम सक्सीनेट", "Natrium süksinat", "Natriumsukkinaatti", "Natrio sukcinatas", "سدیم سوکسینات", "Succinat de sodiu", "Natriumsuccinaat", "נתרן סוקסינאט", "Натриум сукцинат", "Succinato de sodio", "Nátrium-szukcinát", "Натријум сукцинат", "Natrium suksinat"],
  roles: [],
  children: ["en:e364i", "en:e364ii"]
}, {
  id: "en:e495",
  name: "Sorbitan monopalmitate",
  es: "Monopalmitato de sorbitano",
  aliases: ["Monopalmitat tas-sorbitan", "Sorbitanmonopalmitat", "Sorbitano monopalmitatas", "Sorbitaanmonopalmitaat", "Sorbitaanimonopalmitaatti", "Μονοπαλμιτικη σορβιτανη", "Sorbitāna monopalmitāts", "Sorbitanmonopalmitát", "Monopalmitato de sorbitano", "Monopalmitate de sorbitane", "Monopalmitato di sorbitano", "Sorbitan monopalmitate", "Monopalmitynian sorbitolu", "Сорбитан монопалмитат", "Szorbitan-monopalmitát", "Monopalmitat de sorbitan", "Sorbitan monopalmitat"],
  roles: ["emulsifier"],
  children: []
}, {
  id: "en:e283",
  name: "Potassium propionate",
  es: "Propionato potásico",
  aliases: ["Propionat de potasiu", "Kaliumpropionaat", "Kalijev propionat", "Propionat de potassi", "Kaliumpropionat", "Propionato potásico", "Калиев пропионат", "Propionan draselný synonyma", "Kálium-propionát", "Propionan draselný", "Propionian potasu", "Propionato di potassio", "Potassium propionate", "Propionate de potassium", "Propionato de potássio", "Kālija propionāts", "Kaliumpropionaatti", "Προπιονικο καλιο", "Kalio propionatas", "Kaaliumpropionaat", "Propjonat tal-potassju"],
  roles: ["preservative"],
  children: []
}, {
  id: "en:e407a",
  name: "Processed eucheuma seaweed",
  es: "Alga eucheuma transformada",
  aliases: ["Apstrādātas eucheuma jūraszāles", "Spracovaná chaluha eucheuma", "Algues euchema transformées", "Algas eucheuma transformadas", "Alga eucheuma trasformata", "Processed eucheuma seaweed", "Verarbeitete Euchema-Algen", "Przetworzone wodorosty morskie z gatunku eucheuma", "prerađena morska alga euchema", "Alka tal-baħar eucheuma pproċessata", "Forarbejdet eucheuma-tang", "Tselluloosi sisaldav karrageen", "Apdoroti raudondumbliai", "Τροποποιημενα φυκη eucheuma", "Käsitelty eucheuma-levä", "Predelana morska alga eucheuma", "Algă eucheuma prelucrată", "Verwerkt eucheuma-wier", "Alga eucheuma transformada", "Обработени eucheuma водорасли", "bearbetad eucheumaalg", "Feldolgozott euchema moszat", "Guma eucheuma / afinát řasy eucheuma"],
  roles: ["carrier", "emulsifier", "humectant", "stabiliser", "thickener"],
  children: []
}, {
  id: "en:e322iii",
  name: "Lecithin‚ hydroxylated",
  es: "Lecithin‚ hydroxylated",
  aliases: ["Lecithin‚ hydroxylated"],
  roles: [],
  children: []
}, {
  id: "en:e919",
  name: "Nitrosyl chloride",
  es: "Cloruro de nitrosilo",
  aliases: ["Clorur de nitrosil", "Nitrozil klorid", "Clorură de nitrozil", "Nitrosylchloride", "Nitrozila klorido", "Хлорид нитрозила", "Klorur nitrozil", "Нитрозилов хлорид", "Cloruro de nitrosilo", "Нитрозил хлорид", "Nitrosylklorid", "니트로 실 염화물", "nitrozil-klorid", "Chlorid nitrosylu", "Nitrozilhlorīds", "Nitrozil klorür", "Nitrozylchlorid", "塩化ニトロシル", "氯化亚硝酰", "Cloreto de nitrosilo", "Chlorure de nitrosyle", "Nitrosylchlorid", "cloruro di nitrosile", "Nitrosyl chloride", "Chlorek nitrozylu", "Нітрозилхлорид", "Nitrozil xlorid", "Nitrozilo chloridas", "Nitrosüülkloriid", "كلوريد النيتروسيل", "Χλωριούχο νιτροσύλιο", "Nitrosyylikloridi"],
  roles: [],
  children: []
}, {
  id: "en:e444",
  name: "Sucrose acetate isobutyrate",
  es: "Acetato de isobutirato de sacarosa",
  aliases: ["Sakkaroosiasetaatti-isobutyraatti", "Ισοβουτυρικη οξικη σακχαροζη", "Sacharozės acetato izobutiratas", "Sahharoosdiatsetaatheksaisobutüraat", "Saccharoseacetatisobutyrat", "Aċetat isobutirat tas-sukrożju", "Octan izomaślanu sacharozy", "Acétate isobutyrate de saccharose", "Acetoisobutirato de sacarose", "Sucrose acetate isobutyrate", "Acetato isobutirrico di saccarosio", "Saccharoseacetat-isobutyrat", "Octanizomaselnan sacharózy", "Saharozes acetāta izobutirāts", "Szacharóz-acetát-izobutirát", "Isobutyrát octanu sacharosy", "Sackarosacetatisobutyrat", "Захароза ацетат изобутират", "Acetato de isobutirato de sacarosa", "Sucroseacetaatisobutyraat", "Acetat izobutirat de zaharoză", "Saharozni acetat izobutirat", "Acetat isobutirat de sacarosa"],
  roles: ["emulsifier", "stabiliser"],
  children: []
}, {
  id: "en:e1104",
  name: "lipase",
  es: "Lipasa",
  aliases: ["Lipaasi", "लाइपेज", "Lipasi", "Lipase", "ਲਾਈਪੇਸ", "Lipasa", "Липазалар", "Lipas", "Lipáz", "lipase", "липаза", "ליפאז", "Lipaza", "لیپاز", "Ліпаза", "ليباز", "λιπάση", "Lipaz", "Liopáis", "リパーゼ", "Lipases", "Lipasen", "Lipazy", "lipazo", "Липаза", "라이페이스", "Lipáza", "lipasa"],
  roles: [],
  children: []
}, {
  id: "en:e165",
  name: "Gardenia Blue",
  es: "Azul de Gardenia",
  aliases: ["Гардения синяя", "Gardénia kék", "Modrá gardénie", "Гардения синя", "Azul de Gardenia", "Gardenia Blå", "Modra gardenija", "Gardenia Blauw", "Albastru de gardénia", "Blu tal-Gardenia", "Gardenia Sinine", "Gardenijos mėlyna", "Gardenian sininen", "Μπλε γαρδένια", "Zilā gardēnija", "Bleu de gardénia", "Blu di Gardenia", "Gardenia Blue", "Gardenia Blau", "Gardenia niebieski", "Modrá gardénia"],
  roles: [],
  children: []
}, {
  id: "en:e940",
  name: "Dichlorodifluoromethane",
  es: "Dichlorodifluoromethane",
  aliases: ["Difluoridikloorimetaani", "Διφθοροδιχλωρομεθάνιο", "Dichlordifluormethan", "Difluor-diklórmetán", "Difluordiklormetan", "Дихлордифторметан", "Dichlorodifluormethaan", "Dichlorodifluorometan", "Dichlorodifluoromethane", "Diclorodifluorometano", "Dichlorodifluorométhane", "Diclorodifluoro-metan"],
  roles: [],
  children: []
}, {
  id: "en:e1206",
  name: "Neutral methacrylate copolymer",
  es: "Neutral methacrylate copolymer",
  aliases: ["Copolymère de méthacrylate neutre", "Neutral methacrylate copolymer"],
  roles: [],
  children: []
}, {
  id: "en:e553",
  name: "Magnesium silicates",
  es: "Silicato magnésico",
  aliases: ["Silikat tal-manjeżju", "Magnesiumsilikaatti", "Πυριτικο μαγνησιο", "Magneesiumsilikaat", "Magnio silikatas", "Magnesiumsilicat", "Magnija silikāts", "Krzemian magnezu", "Silicate de magnésium", "Silicato de magnésio", "Silicato di magnesio", "Magnesium silicates", "Kremičitan horečnatý", "Magnézium-szilikát", "Křemičitan hořečnatý", "Silicato magnésico", "Магнезиев силикат", "Magnezijev silikat", "Magnesiumsilicaat", "Silicat de magneziu"],
  roles: ["thickener"],
  children: ["en:e553a", "en:e553b", "en:e553i", "en:e553ii", "en:e553iii"]
}, {
  id: "en:e1403",
  name: "Bleached starch",
  es: "Almidón blanqueado",
  aliases: ["Beyazlatılmış nişasta", "Balināta ciete", "Skrobia bielona", "Bleached starch", "Amido sbiancato", "gebleichte Stärke", "Amido branqueado", "漂白淀粉", "Amidon blanchi", "漂白されたデンプン", "Bielené škroby", "Lamtu mġieba", "Λευκασμένο άμυλο", "Valkaistu tärkkelys", "Pleegitatud tärklis", "Balintas krakmolas", "نشا مبيَّض", "Blegnet stivelse", "Ağardılmış nişasta", "Вибілений крохмаль", "แป้งฟอกขาว", "Beljen škrob", "Midó blanquejat", "Gebleekt zetmeel", "Amidon alb", "Отбеленный крахмал", "Bělený škrob", "Fehérített keményítő", "표백 전분", "Blekt stärkelse", "Almidón blanqueado", "Избелен крахмал"],
  roles: ["emulsifier", "stabiliser", "thickener"],
  children: []
}, {
  id: "en:e324",
  name: "Ethoxyquin",
  es: "Etoxiquina",
  aliases: ["Etoxiquina", "Етоксиквин", "Ethoxyquin", "Etoxikvin", "Etoxiquină", "Ετοξυκίνη", "Etoksikviini", "Étoxyquine", "Etoxichina", "Etoksychina"],
  roles: [],
  children: []
}, {
  id: "en:e160ci",
  name: "E160ci",
  es: "E160ci",
  aliases: [],
  roles: [],
  children: []
}, {
  id: "en:e380",
  name: "Triammonium citrate",
  es: "Citrato triamónico",
  aliases: ["Triammoniumcitrat", "Citrato triamónico", "Триамониев цитрат", "Triammónium-citrát", "Citronan amonný", "Citrat de triamoniu", "Triammoniumcitraat", "Triamonijev citrat", "Citrat de triamoni", "Κιτρικο αμμωνιο", "Triammoniumsitraatti", "Ammooniumtsitraat", "Triamonio citratas", "Ċitrat triammoniku", "Citran triamónny", "Cytrynian triamonu", "Citrato de triamónio", "Citrate de triammonium", "Citrato triammonico", "Triammonium citrate", "Triamonija citrāts"],
  roles: [],
  children: []
}, {
  id: "en:e335i",
  name: "Monosodium tartrate",
  es: "Tartrato monosódico",
  aliases: ["Mononatriumtartrat", "Mononatrio tartratas", "Naatriumvesiniktartraat", "Mononatriumtartraatti", "Οξινο τρυγικο νατριο", "Tartrat monosodiku", "Vínan sodný", "Tartrato monosodico", "Monosodium tartrate", "Tartrate monosodique", "Tartarato monossódico", "Winian monosodowy", "Mononātrija tartrāts", "Tartrato monosódico", "Мононатриев тартарат", "Vinan monosodný", "Mononátrium-tartarát", "Tartrat monosodic", "Mononatriumtartraat", "Mononatrijev tartrat"],
  roles: ["sequestrant", "stabiliser"],
  children: []
}, {
  id: "en:e262",
  name: "Sodium acetates",
  es: "Acetatos de sodio",
  aliases: ["Natriumacetater", "CH_3 COONa", "Acetatos de sodio", "Natriumasetaatit", "Nátrium-acetátok", "octany sodné", "natrijevi acetati", "ацетат натрия", "acetați de sodiu", "Octany sodu", "natriumacetaten", "酢酸ナトリウム族", "acetatos de sódio", "Acétates de sodium", "Natriumacetate", "Sodium acetates", "acetati di sodio", "Natrijev acetats", "Acetats de sodi"],
  roles: ["preservative", "sequestrant"],
  children: ["en:e262i", "en:e262ii"]
}, {
  id: "en:e153",
  name: "Vegetable carbon",
  es: "Carbón vegetal",
  aliases: ["Biokull", "Karbonju tal-ħxejjex", "Vegetabilsk kul", "Kasviperäinen lääkehiili", "Φυτικος ανθρακας", "Augalinės anglys", "Taimne süsi", "Augogle", "Rastlinné uhlie", "Węgiel roślinny", "Charbon végétal médicinal", "Carvão vegetal", "Vegetable carbon", "Carbone vegetale", "Pflanzenkohle", "уголь растительный", "Vegetabiliskt kol", "Carbón vegetal", "Растителен въглен", "Növényi szén", "Rostlinná uhlíková čerň", "Rastlinsko oglje", "Carbó vegetal", "Carbon vegetal", "Plantaardige koolstof"],
  roles: [],
  children: []
}, {
  id: "en:e620",
  name: "Glutamic acid",
  es: "Ácido glutámico",
  aliases: ["Kyselina glutamová", "Acide glutamique", "Ácido glutâmico", "Glutamic acid", "Acido glutammico", "Glutaminsäure", "Kwas glutaminowy", "Glutamīnskābe", "Glutaminsyre", "Glutamiinhape", "Glutamo rūgštis", "Γλουταμινικο οξυ", "Glutamiinihappo", "Aċidu glutamiku", "Acid glutamic", "Glutaminezuur", "Àcid glutàmic", "Glutaminska kislina", "Ácido glutámico", "Глутаминова киселина", "Glutaminsyra", "Glutaminsav"],
  roles: [],
  children: []
}, {
  id: "en:e930",
  name: "calcium peroxide",
  es: "Peróxido de calcio",
  aliases: ["कैल्शियम पेरोक्साइड", "Kalcija peroksīds", "Perossido di calcio", "Kalsiumperoksidi", "Kalcio peroksidas", "Kalsium peroksid", "Kalcijev peroksid", "תחמוצת סידן", "Calciumperoxide", "Citrat de monoizopropil", "Peróxido de calcio", "Kalsium peroksida", "Калцијум пероксид", "Kalcium-peroxid", "Kalciumperoxid", "Калциум пероксид", "Peroksid kalciumi", "Kalsiyum peroksit", "Nadtlenek wapnia", "Calciumperoxid", "calcium peroxide", "Peróxido de cálcio", "过氧化钙", "過酸化カルシウム", "Peroxyde de Calcium", "Peroxid vápenatý", "Perossidu tal-kalċju", "Υπεροξείδιο του ασβεστίου", "Kaltsiumperoksiid", "بيروكسيد الكالسيوم", "Пероксид кальцію", "แคลเซียมเปอร์ออกไซด์", "Peròxid de calci", "Canxi peroxit", "Kalsiumperoksied", "Пероксид кальция", "Kalcia peroksido", "과산화칼슘", "Калциев пероксид"],
  roles: [],
  children: []
}, {
  id: "en:e160aiv",
  name: "Algal carotenes",
  es: "Carotenos de algas",
  aliases: ["Karotény z rias", "Algal carotenes", "Caroteni derivati dalle alghe", "Algencarotine", "Carotenos provenientes de algas", "Carotènes d'algues", "Karoteny otrzymywane z alg", "Aļģu karotīni", "Algecarotener", "Vetikalised karoteenid", "Dumblių karotenai", "Καροτενια απο φυκη", "Leväkaroteenit", "Karoteni mill-alga", "Caroten din alge", "Caroteen uit algen", "Karoteni iz alg", "Каротини от водорасли", "Carotenos de algas", "Karotener från alger", "Karoteny z řas", "Algakarotinok"],
  roles: ["colour"],
  children: []
}, {
  id: "en:e313",
  name: "Ethyl gallate",
  es: "Galato de etilo",
  aliases: ["Ethyl gallate", "Gallate d'éthyle", "Etyyligallaatti", "Gelat de etil", "etil-gallát", "Galato de etilo"],
  roles: [],
  children: []
}, {
  id: "en:e434",
  name: "Polyoxyethylene sorbitan monopalmitate",
  es: "Monopalmitato de sorbitán polioxietilenado",
  aliases: ["Polyoxyetylénsorbitanmonopalmitát", "Monopalmitato di poliossietilene sorbitano", "Polyoxyethylene sorbitan monopalmitate", "Polyoxyethylen-sorbitanmonopalmitat", "Monopalmitato de polioxietileno sorbitano", "Monopalmitate de polyoxyéthylène sorbitane", "Monopalmitynian polioksyetylenosorbitolu", "Polioksietilēna sorbitāna monopalmitāts", "Polyoxyethylen(20)sorbitanmonopalmitat", "Polüoksüetüleen sorbitaanmonopalmitaat", "Polioksietileno sorbitano monopalmitatas", "Polyoksyetyleenisorbitaanimonopalmitaatti", "Μονοπαλμιτικη πολυοξυ-αιθυλενο-σορβιτανη", "Monopalmitat tal-poliossietilen sorbitan", "Monopalmitat de polioxietilenă sorbitan", "Polyoxyethyleensorbitaanmonopalmitaat", "Monopalmitat de sorbitan polioxietilenat", "Polioksietilen sorbitan monopalmitat", "Monopalmitato de sorbitán polioxietilenado", "Полиоксиетилен сорбитан монопалмитат", "Polyoxietylensorbitanmonopalmitat", "Polyoxyethylensorbitanmonopalmitát", "Polioxietilén-szorbitan-monopalmitát"],
  roles: ["emulsifier"],
  children: []
}, {
  id: "en:e1430",
  name: "Distarch glycerine",
  es: "Glicerina de distarco",
  aliases: ["Distarch glycerine", "Glicerina de distarciu", "Glicerol distarča", "Glycerin distarch", "Dikeményítő-glicerin", "Distärkelseglycerin", "Дистарч глицерин", "Glicerina de distarco", "Gliceryna distarchowa", "Glicerina di distarco", "Distärkeglycerin", "Diamidon glycériné", "Glycerín distarch", "Distarča glicerīns", "Γλυκερίνη διστάρχη", "Tärkkelysglyseriini", "Distarch glütseriin", "Distarch gliukerinas", "Distarch glycerin", "Gliċerina diżtarċa"],
  roles: ["emulsifier", "stabiliser", "thickener"],
  children: []
}, {
  id: "en:e425i",
  name: "Konjac gum",
  es: "Goma konjac",
  aliases: ["Konjacgummi", "Rivieri titaanjuure kummi", "Konjako derva", "Konjak-hartsi", "Κομμι konjac", "konjak guma", "Gomma konjac", "Konjaková guma", "Gomma di konjac", "Konjakgummi", "Konjac gum", "Gomme de konjac", "Goma de konjac", "Guma konjac", '"konjac" sveķi', "Goma konjac", "Коняк гума", "Konjakgyanta", "загуститель конжаковая камедь", "Gumă konjac", "Konjacgom", "Konjac gumi"],
  roles: ["carrier", "emulsifier", "humectant", "stabiliser", "thickener"],
  children: []
}, {
  id: "en:e553aii",
  name: "Magnesium trisilicate",
  es: "Trisilicato magnésico",
  aliases: ["Magnija trisilikāts", "Trikremičitan horečnatý", "Trisilicate de magnésium", "Trissilicato de magnésio", "Trisilicato di magnesio", "Magnesium trisilicate", "Magnesiumtrisilicat", "Trikrzemian magnezu", "Trisilikat tal-manjeżju", "Magnio trisilikatas", "Magneesiumtrisilikaat", "Τριπυριτικο μαγνησιο", "Magnesiumtrisilikaatti", "Magnezijev trisilikat", "Trisilicat de magneziu", "Magnesiumtrisilicaat", "Магнезиев трисиликат", "Trisilicato magnésico", "Magnesiumtrisilikat", "Magnézium-triszilikát", "Trikřemičitan hořečnatý"],
  roles: ["thickener"],
  children: []
}, {
  id: "en:e222",
  name: "Sodium bisulphite",
  es: "Sulfito ácido de sodio",
  aliases: ["Bisulfit de sodi", "Natrijev bisulfit", "Natrijum bisulfit", "ביסולפיט", "Natri bisunfit", "Natriumwaterstofsulfiet", "سدیم بی‌سولفیت", "Bisulfit de sodiu", "Natria bisulfito", "Nátrium-hidrogén-szulfit", "Hydrogensiřičitan sodný", "Sulfito ácido de sodio", "Натриев бисулфит", "Natriumvätesulfit", "Nātrija bisulfīts", "Sodyum bisülfit", "Bisulfite de sodium", "亚硫酸氢钠", "Hidrogenossulfito de sódio", "亜硫酸水素ナトリウム", "Sodium bisulphite", "Sodio bisolfito", "Natriumhydrogensulfit", "Wodorosiarczyn sodu", "Hydrogensiričitan sodný", "Bisulfit tas-sodju", "Naatriumvesiniksulfit", "Natrio bisulfitas", "Natriumvetysulfiitti", "Οξινο θειωδες νατριο", "Նատրիումի հիդրոսուլֆիտ", "Natrium bisulfit"],
  roles: ["antioxidant", "preservative"],
  children: []
}, {
  id: "en:e445ii",
  name: "Glycerol ester of tall oil rosin",
  es: "Glycerol ester of tall oil rosin",
  aliases: ["Glycerol ester of tall oil rosin"],
  roles: [],
  children: []
}, {
  id: "en:e952i",
  name: "E952i",
  es: "E952i",
  aliases: [],
  roles: [],
  children: []
}, {
  id: "en:e451",
  name: "Triphosphates",
  es: "Tripolifosfatos",
  aliases: ["Trifosfaatit", "Τριφωσφορικο", "Trifosfatai", "Trifosfaadid", "ثلاثي الفوسفات", "Triphosphater", "Trifosfatlar", "Трифосфати", "ไตรฟอสเฟต", "trifosfati", "Trifosfati", "Trifosfater", "Trifosforany", "Triphosphates", "Tripolyphosphat", "Trifosfatos", "三磷酸盐", "三リン酸塩", "Trifosforečnany", "Trifosfāti", "Trifoszfátok", "삼인산염", "Tripolifosfatos", "Tрифосфаты", "Trifosfaten", "trifosfați", "Trifosfat"],
  roles: ["emulsifier", "humectant", "sequestrant", "stabiliser", "thickener"],
  children: ["en:di-and-triphosphates", "en:e451i", "en:e451ii", "en:e451iii"]
}, {
  id: "en:e409",
  name: "Arabinogalactan",
  es: "Arabinogalactan",
  aliases: ["Arabinogalactane", "Arabinogalactan", "Arabinogalaktaani", "Arabinogalaktan"],
  roles: [],
  children: []
}, {
  id: "en:e249",
  name: "Potassium nitrite",
  es: "Nitrito potásico",
  aliases: ["Kálium-nitrit", "Dusitan draselný", "Калиев нитрит", "Nitrito potásico", "Kaliumnitrit", "Kaliumnitriet", "Nitrit de potasiu", "Nitrit de potassi", "Kalijev nitrit", "Kalio nitritas", "Kaaliumnitrit", "Νιτρωδες καλιο", "Kaliumnitriitti", "Nitrit tal-potassju", "Nitrite de potassium", "Nitrito de potássio", "Nitrito di potassio", "Potassium nitrite", "Azotyn potasu", "Kālija nitrīts"],
  roles: ["preservative"],
  children: []
}, {
  id: "en:e339iii",
  name: "Trisodium phosphate",
  es: "Fosfato trisódico",
  aliases: ["Fosfat de trisodi", "Trinatrijum fosfat", "Trinatrijev fosfat", "تری‌سدیم فسفات", "Fosfat trisodic", "Trinatriumfosfaat", "Fosfato trisódico", "Тринатриев фосфат", "Trinatriumfosfat", "Trinátrium-foszfát", "Fosforečnan trisodný", "Trinātrija fosfāts", "リン酸三ナトリウム", "Fosfato trissódico", "Phosphate trisodique", "Fosfato trisodico", "Trisodium phosphate", "Trinatriumphosphat", "Fosforan trisodowy", "Fosfat trisodiku", "Trinaatriumfosfaat", "Trinatrio fosfatas", "Trinatriumfosfaatti", "Ουδέτερο φωσφορικό νάτριο"],
  roles: ["emulsifier", "humectant", "preservative", "sequestrant", "stabiliser", "thickener"],
  children: []
}, {
  id: "en:e450viii",
  name: "E450viii",
  es: "Difosfato de dimagnesio",
  aliases: ["Димагниевый дифосфат", "Dimagnesium difosfat", "Dimagnezia difosfato", "Dvojsodný difosfát hořečnatý", "Димагнезијум дифосфат", "Difoszfát-dimagnézium", "인산이 마그네슘", "Dimagnesiumdifosfat", "Димагнезиум дифосфат", "Difosfato de dimagnesio", "Димагнезиев дифосфат", "Difosfat dimagnezi", "דיפוספט דימגנזיום", "Dimagnezijev difosfat", "Difosfat de dimagnesi", "Dimagnesiumdifosfaat", "Difosfat de dimagneziu", "دی فسفات دی منیزیم", "Difosfat dimanjeżiku", "Dimagnesiumdifosfaatti", "Διμαγνησιου διφωσφορικό", "Dimagnio difosfatas", "Dimaagnesiumdifosfaat", "فوسفات ثنائي المغنيسيوم", "Dimaqnezium difosfat", "Dimagnesiumdiphosphat", "Димагнієвий дифосфат", "Dimagnezyum difosfat", "Dimagnija difosfāts", "Difosforan dimagnezu", "Difosfato di dimagnesio", "Difosfato de dimagnésio", "磷酸二镁", "Diphosphate dimagnésien", "リン酸二マグネシウム", "Dihorečnan difosforečnan"],
  roles: ["emulsifier", "humectant", "sequestrant", "stabiliser", "thickener"],
  children: []
}, {
  id: "en:e302",
  name: "Calcium ascorbate",
  es: "Ascorbato cálcico",
  aliases: ["Askorbat tal-kalċju", "Calciumascorbat", "Kaltsiumaskorbaat", "Kalcio askorbatas", "Kalsiumaskorbaatti", "Ασκορβικο ασβεστιο", "Kalcija askorbāts", "Askorban vápenatý", "Ascorbato de cálcio", "Ascorbate de calcium", "Calcium ascorbate", "Ascorbato di calcio", "Askorbinian wapnia", "Ascorbato cálcico", "Калциев аскорбат", "Kalciumaskorbat", "Kalcium-aszkorbát", "Ascorbat de calci", "Kalcijev askorbat", "Ascorbat de calciu", "Calciumascorbaat"],
  roles: ["antioxidant"],
  children: []
}, {
  id: "en:e127",
  name: "Erythrosine",
  es: "Eritrosina",
  aliases: ["Eritrozin", "Erythrosin", "Еритрозин", "Erytrosin", "Eritrosina", "эритрозин", "Erytrosine", "اریتروسین", "Eritrozină", "Ερυθροσινη", "Erytrosiini", "Erütrosiin", "Eritrozinas", "Erytrozyna", "エリスロシン", "Érythrosine", "Erythrosine", "Erytrozín", "Eritrozīns"],
  roles: ["colour"],
  children: []
}, {
  id: "en:e525",
  name: "Potassium hydroxide",
  es: "Hidróxido potásico",
  aliases: ["Idrossido di potassio", "पोटासियम हाइड्राक्साइड", "Kālija hidroksīds", "Kaliumhydroksidi", "Kalio hidroksidas", "Kaliumhydroxide", "Potasio hidroxido", "კალიუმის ჰიდროქსიდი", "Hidroxid de potasiu", "پتاسیم هیدروکسید", "Kalij hidroksid", "பொட்டாசியம் ஐதராக்சைடு", "Kalijev hidroksid", "אשלגן הידרוקסידי", "Kalijum hidroksid", "калијум-хидроксид", "Kálium-hidroxid", "Kaliumhydroxid", "Калиум хидроксид", "Hidróxido potásico", "Hidróxido de potasio", "kalium hidroksida", "Kalium hidroksida", "Wodorotlenek potasu", "Potassium hydroxide", "氢氧化钾", "Hidróxido de potássio", "水酸化カリウム", "Hydroxyde de potassium", "Hydroxid draselný", "Калийн гидроксид", "Potasyum hidroksit", "Калий гидроксиди", "Υδροξειδιο του καλιου", "Kaaliumhüdroksiid", "هيدروكسيد البوتاسيوم", "Гідроксид калію", "Կալիումի հիդրօքսիդ", "โพแทสเซียมไฮดรอกไซด์", "പൊട്ടാസ്യം ഹൈഡ്രോക്സൈഡ്", "kalijev hidroksid", "Idrossidu tal-potassju", "পটাসিয়াম হাইড্রোক্সাইড", "Kaliumhydroksid", "Kali hiđroxit", "Kaliumhidroksied", "Hidròxid de potassi", "Hydroxidum kalii", "수산화 칼륨", "Калиев хидроксид", "Kalia hidroksido"],
  roles: [],
  children: []
}, {
  id: "en:e210",
  name: "Benzoic acid",
  es: "Ácido benzoico",
  aliases: ["Benzoskābe", "Acide benzoïque", "Ácido benzóico", "Benzoic acid", "Acido benzoico", "Benzoesäure", "Kwas benzoesowy", "Kyselina benzoová", "Aċidu benżoiku", "Benzenkarboksirūgštis", "Bensoehape", "Βενζοϊκο οξυ", "Bentsoehappo", "Benzoesyre", "Àcid benzoic", "Benzojska kislina", "Benzoëzuur", "Acid benzoic", "Benzoesav", "Ácido benzoico", "Бензоена киселина", "Bensoesyra"],
  roles: ["preservative"],
  children: []
}, {
  id: "en:e900",
  name: "Dimethylpolysiloxane and Methylphenylpolysiloxane",
  es: "Dimetilpolisiloxano y Metilfenilpolisiloxano",
  aliases: ["Dimetilpolisiloksan in Metilfenilpolisiloksan", "Dimetilpolisiloxà i Metilfenilpolisiloxà", "Dimethylpolysiloxaan en Methylphenylpolysiloxaan", "Dimetilpolisiloxan și Metilfenilpolisiloxan", "Диметилполисилоксан и Метилфенилполисилоксан", "Dimethylpolysiloxan a Methylfenylpolysiloxan", "Dimetilpolisziloxán és Metil-fenil-polisziloxán", "디메틸폴리실록산 및 메틸페닐폴리실록산", "Dimetylpolysiloxan och Metylfenylpolysiloxan", "Dimetilpolisiloxano y Metilfenilpolisiloxano", "Dimetilpolisiloksāns un Metilfenilpolisiloksāns", "Dimetylopolisiloksan i Metylofenylopolisiloksan", "Dimetilpolisilossano e Metilfenilpolisilossano", "Dimethylpolysiloxane and Methylphenylpolysiloxane", "Dimethylpolysiloxan und Methylphenylpolysiloxan", "二甲基聚硅氧烷和甲基苯基聚硅氧烷", "ジメチルポリシロキサンとメチルフェニルポリシロキサン", "Dimetilpolisiloxano e Metilfenilpolisiloxano", "Diméthylpolysiloxane et Méthylphénylpolysiloxane", "Dimetylpolysiloxán a Metylfenylpolysiloxan", "Dimetilpolisilossan u Metilfenilpolisilossan", "Διμεθυλοπολυσιλοξάνη και Μεθυλοφαινυλοπολυσιλοξάνη", "Dimetyylipolysiloksaani ja Metyylifenyylipolysiloksaani", "Dimetilpolisiloksanas ir Metilfenilpolisiloksanas", "Dimetüülpolüsiloksaan ja Metüülfenüülpolüsiloksaan", "ثنائي ميثيل بولي سيلوكسان وميثيل فينيل بولي سيلوكسان", "Dimetilpolisiloksan və Metilfenilpolisiloksan", "Dimethylpolysiloxan og Methylphenylpolysiloxan"],
  roles: [],
  children: ["en:e900a", "en:e900b"]
}, {
  id: "en:e957",
  name: "Thaumatin",
  es: "Taumatina",
  aliases: ["Taumatiini", "Taumatino", "Taumatin", "Taumatina", "थौमेटिन", "Taumatīns", "Тауматин", "tuamitin", "Thaumatin", "Thaumatine", "Thaumatina", "توماتین", "תאומטין", "Θαυματίνη", "Thaumatiin", "ثوماتين", "ทอมาทิน", "Tàwmatin", "Taumatyna", "ソーマチン", "Taumatín", "Taumatain", "타우마틴", "Taŭmatino"],
  roles: ["sweetener"],
  children: []
}, {
  id: "en:e474",
  name: "Sucroglycerides",
  es: "Sucroglicéridos",
  aliases: ["Szaharózgliceridek", "Sacharoglyceridy", "Sackarosestrar i blandning med mono- och diglycerider av fettsyror", "Захароглицериди", "Sucroglicéridos", "Saharozni gliceridi", "Sucroglicèrid", "Sucroglyceriden", "Zaharogliceride", "Sukrogliċeridi", "Sokeriglyseridit", "Σακχαρογλυκεριδια", "Sahharoglütseriidid", "Sacharozės gliceridai", "Saccharoseestere i blanding med mono- og diglycerider af fedtsyrer", "Saharozes glicerīdi", "Sacharoglicerydy", "Sacaridoglicéridos", "Sucroglycérides", "Sucrogliceridi", "Zuckerglyceride", "Sucroglycerides"],
  roles: ["emulsifier"],
  children: []
}, {
  id: "en:e450v",
  name: "Tetrapotassium diphosphate",
  es: "Difosfato tetrapotásico",
  aliases: ["Difosforečnan tetradraselný", "Tetrakaliumdiphosphat", "Difosfato di tetrapotassio", "Tetrapotassium diphosphate", "Diphosphate tétrapotassique", "Difosfato tetrapotássico", "Difosforan tetrapotasowy", "Tetrakālija difosfāts", "Tetrakalio difosfatas", "Tetrakaaliumdifosfaat", "Tetrakaliumdifosfaatti", "Πυροφωσφορικο καλιο", "Difosfat tetrapotassiku", "tetrakalijev difosfat", "Difosfat tetrapotasic", "Tetrakaliumdifosfaat", "Tetrakalijev difosfat", "Difosfato tetrapotásico", "Тетракалиев дифосфат", "Tetrakaliumdifosfat", "Difosforečnan draselný", "Tetrakálium-difoszfát"],
  roles: ["emulsifier", "humectant", "sequestrant", "stabiliser", "thickener"],
  children: []
}, {
  id: "en:e404",
  name: "Calcium alginate",
  es: "Alginato de calcio",
  aliases: ["Alginat de calciu", "Calciumalginaat", "Kalcijev alginat", "Alginat de calci", "Kalciumalginat", "Калциев алгинат", "Alginato de calcio", "Alginan vápenatý", "Kalcium-alginát", "Alginát vápenatý", "Alginian wapnia", "Alginato di calcio", "Calcium alginate", "Calciumalginat", "Alginato de cálcio", "Alginate de calcium", "Kalcija algināts", "Αλγινικο ασβεστιο", "Kalsiumalginaatti", "Kalcio alginatas", "Alġinat tal-kalċju"],
  roles: ["carrier", "humectant", "sequestrant", "stabiliser", "thickener"],
  children: []
}, {
  id: "en:e1001ii",
  name: "Choline carbonate",
  es: "Choline carbonate",
  aliases: ["Choline carbonate"],
  roles: [],
  children: []
}, {
  id: "en:e163c",
  name: "Malvidin",
  es: "Malvidina",
  aliases: ["Malvidin", "Malvidină", "Malvidine", "Малвидин", "Malvidina", "Malvidīns", "Malwidyna", "Malvidiin", "Malvidinas", "Malvidiini", "Μαλβιδίνη"],
  roles: ["colour"],
  children: []
}, {
  id: "en:e472e",
  name: "Mono- and diacetyltartaric acid esters of mono- and diglycerides of fatty acids",
  es: "Ésteres monoacetiltartárico y diacetiltartárico de monoglicéridos y diglicéridos de ácidos grasos",
  aliases: ["Mono- i diacetil tartaratni esteri mono- i diglicerida masnih kiselina", "Èsters monoacetil i diacetil tartàrics de monoglicèrids i diglicèrids d'àcids grassos", "Esteri ai acizilor mono- și diacetiltartric cu mono- și digliceridele acizilor grași", "Mono- en diglyceriden van vetzuren veresterd met mono- en diacetylwijnsteenzuur", "Éster monoacetiltártrico de mono- e diglicéridos de ácidos graxos", "Эфиры глицерина диацетилвинной и жирных кислот", "Mono- och diglyceriders mono- och diacetylvinsyraestrar", "Ésteres monoacetiltartárico y diacetiltartárico de monoglicéridos y diglicéridos de ácidos grasos", "Естери на моно- и диацетилвинената киселина с моно- и диглицериди на мастни киселини", "Mono- og diacetylvinsyreester av mono- og diglyserider av næringsfettsyrer", "Zsírsavak mono- és digliceridjeinek mono- és diacetil-borkősav-észterei", "Моно- и диацетил тартаратни естери моно- и диглицерида масних киселина", "Estery mono- a diglyceridů mastných kyselin s kyselinou mono- a diacetylvinnou", "Taukskābju mono- un diglicerīdu mono- un diacetilvīnskābes esteri", "diasetiltartarik asit esters of mono- ve diglycerides of fatty asits", "Estery mono- a diglyceridov mastných kyselín s kyselinou mono- a diacetylvínnou", "Mono- i diglicerydy kwasów tłuszczowych estryfikowane kwasem mono- i diacetylowinowym", "Ester Monoacéthyltartrique de mono- et diglycérides d'acides gras", "Ésteres mono e diacetiltartáricos de mono e diglicéridos de ácidos gordos", "グリセリンジアセチル酒石酸脂肪酸エステル", "Mono- and diacetyltartaric acid esters of mono- and diglycerides of fatty acids", "Esteri mono- e diacetiltartarici di mono- e digliceridi degli acidi grassi", "Mono- und Diacetylweinsäureester von Mono- und Diglyceriden von Speisefettsäuren", "Mono- og diacetylvinsyreester av MDG", "Esteri tal-aċidu mono- u diaċetiltartariku tal-mono- u d-digliċeridi tal-aċidi grassi", "monoglicerid", "Естери гліцерину та діацетилвинної і жирних кислот", "Mono- og diacetylvinsyreestere af mono- og diglycerider af fedtsyrer", "Rasvahappojen mono- ja diglyseridien mono- ja diasetyyliviinihappoesterit", "Εστερες του μονο- και διακετυλοτρυγικου οξεος με μονο- και διγλυκεριδια λιπαρων οξεων", "Rasvhapete mono- ja diglütseriidide estrid mono- ja diatsetüülviinhappega", "Riebalų rūgščių mono- ir digliceridų mono- ir diacetilvyno rūgšties esteriai"],
  roles: ["emulsifier", "sequestrant", "stabiliser"],
  children: []
}, {
  id: "en:e905ci",
  name: "Microcrystalline wax",
  es: "Cera microcristalina",
  aliases: ["Mikrokristāliskais vasks", "Mikrokristallines wachs", "Cera microcristallina", "Microcrystalline wax", "Cera microcristalina", "Cire microcristalline", "Wosk mikrokrystaliczny", "Mikrokryštalický vosk", "Xama' mikrokristallina", "Mikrokristalne vaha", "Mikrokristalinis vaškas", "Μικροκρυσταλλικος κηρος", "Mikrokiteinen vaha", "Mikrokrystallinsk voks", "Mikrokristalni vosek", "Microkristallijne was", "Ceară microcristalină", "Mikrokrystalický vosk", "Mikrokristályos viasz", "Микрокристален восък", "Mikrokristallint vax"],
  roles: [],
  children: []
}, {
  id: "en:e963",
  name: "Tagatose",
  es: "Tagatosa",
  aliases: ["Tagatosa", "Tagatose", "Tagatozo", "Тагатоза", "타가토스", "Tagatóza", "Tagatoz", "Tagatoza", "タガトース", "Tagatoż", "แทกาโทส", "Ταγατόζη", "Tagatoos", "تاجتوز", "טאגאטוז", "تاگاتوز", "Tagatoză", "Tagatos", "Tagatozë", "tagatóz", "Tagatoze", "टैगाटोज़", "Tagatosio", "Taqatoza", "Tagatoosi", "Tagatozė"],
  roles: ["sweetener"],
  children: []
}, {
  id: "en:e181",
  name: "Tannin",
  es: "Tanino",
  aliases: ["Tanin", "Tanniinit", "Τανίνη", "تانين", "Taninas", "Tanniin", "Танін", "Tannin", "แทนนิน", "टैनिन", "Tanīns", "Tanen", "Taniny", "Tanino", "タンニン", "Tannino", "Tannine", "Tanín", "Танин", "Csersav", "Třísloviny", "טַנִין", "Čreslovina", "Taní", "Looizuur", "Tannien"],
  roles: ["colour", "emulsifier", "stabiliser", "thickener"],
  children: []
}, {
  id: "en:e350i",
  name: "Sodium malate",
  es: "Malato sódico",
  aliases: ["Natria malikato", "Nátrium-malát", "Jablečnan disodný", "Natrijum malat", "Natriummalat", "Malato sódico", "Натриев малат", "Natrijev malat", "சோடியம் மேலேட்டு", "Malat sòdic", "Natriummalaat", "سدیم مالات", "Malat de sodiu", "Malat tas-sodju", "Μηλικο νατριο", "Natriummalaatti", "Naatriummalaat", "Natrio malatas", "مالات صوديوم", "Nātrija malāts", "Jabłczan sodu", "Malato de sódio", "Malate de sodium", "Malato di sodio", "Sodium malate", "Jablčnan sodný"],
  roles: ["humectant"],
  children: []
}, {
  id: "en:e504i",
  name: "Magnesium carbonate",
  es: "Carbonato de magnesio",
  aliases: ["मैग्निसियम कार्बोनेट", "Magnija karbonāts", "Carbonato di magnesio", "Magnesiumkarbonaatti", "Magnio karbonatas", "Magnezijum karbonat", "Magnezijev karbonat", "மக்னீசியம் கார்பனேட்டு", "Magnesiumcarbonaat", "منیزیم کربنات", "Carbonat de magneziu", "magnesiumkarbonat", "Magnézium-karbonát", "магнезијум карбонат", "Magnesiumkarbonat", "Carbonato de magnesio", "Магний карбонаты", "Węglan magnezu", "Carbonato de magnésio", "Carbonate de magnésium", "炭酸マグネシウム", "Magnesium carbonate", "Magnesiumcarbonat", "Uhličitan horečnatý", "carbónáit mhaignéisiam", "Karbonat tal-manjeżju", "magnezijev karbonat", "Ανθρακικό μαγνήσιο", "Magneesiumkarbonaat", "كربونات المغنسيوم", "Карбонат магнію", "แมกนีเซียมคาร์บอเนต", "Carbonat de magnesi", "magie cacbonat", "карбонат магния", "magnezia karbonato", "Uhličitan hořečnatý", "Магнезиев карбонат"],
  roles: ["carrier"],
  children: []
}, {
  id: "en:e332",
  name: "Potassium citrates",
  es: "Citratos de potasio",
  aliases: ["Калиевые цитраты", "Kaliumcitrater", "Citratos de potasio", "Потасиеви цитрати", "Citronany draselné", "Kálium-citrátok", "Kalijevi citrati", "Citrats de potassi", "Citrați de potasiu", "Kaliumcitraten", "Ċitratu tal-potassju", "Kalijev citrat", "Kaliumcitrat", "Κιτρικά κάλια", "Kaliumsitraatit", "Kalio citratai", "Kaaliumtsitraadid", "Kālija citrāti", "Citrány draselné", "Cytryniany potasu", "Citrati di potassio", "Kaliumcitrate", "Potassium citrates", "Citratos de potássio", "Citrates de potassium"],
  roles: ["sequestrant", "stabiliser"],
  children: ["en:e332i", "en:e332ii"]
}, {
  id: "en:e633",
  name: "Calcium inosinate",
  es: "Inosinato cálcico",
  aliases: ["Inosinat tal-kalċju", "Calciuminosinat", "Ινοσινικο ασβεστιο", "Kalsiuminosinaatti", "Kalcio inozinatas", "Kaltsiuminosinaat", "Kalcija inozināts", "Inozínan vápenatý", "Inozynian wapnia", "Inosinato de cálcio", "Inosinate de calcium", "Inosinato di calcio", "Calcium inosinate", "Kalciuminosinat", "Inosinato cálcico", "Калциев инозинат", "Kalcium-inozinát", "Inosinan vápenatý", "Kalcijev inozinat", "Inosinat de calci", "Inozinat de calciu", "Calciuminosinaat"],
  roles: [],
  children: []
}, {
  id: "en:e954ii",
  name: "Calcium saccharin",
  es: "Calcium saccharin",
  aliases: ["Calcium saccharin"],
  roles: [],
  children: []
}, {
  id: "en:e483",
  name: "Stearyl tartrate",
  es: "Tartrato de estearilo",
  aliases: ["Τρυγικο στεατυλιο", "Stearyylitartraatti", "Stearüültartraat", "Stearilo tartratas", "Stearyltartrat", "Tartrat steariliku", "Winian stearylu", "Tartrato di stearile", "Stearyl tartrate", "Tartrate de stéaryle", "Tartarato de estearilo", "Steary tartrát", "Steariltartrāts", "Vinan stearylu", "Sztearil-tartarát", "Tartrato de estearilo", "Стеарил тартарат", "Stearyltartraat", "Tartrat de stearil", "Stearil tartrat", "Tartrat d'estearoïl"],
  roles: [],
  children: []
}, {
  id: "en:e586",
  name: "4-hexylresorcinol",
  es: "4-hexilresorcinol",
  aliases: ["4-hexylresorcinol", "4-hexil-rezorcin", "4-hexilresorcinol", "4-хексилрезорцинол", "4-heksilresorcinol", "4-hexilrezorcinol", "4-eżilresorċinol", "4-heksüülresortsinool", "4-heksilrezorcinolis", "4-εξυλορεσορκινολη", "4-heksyyliresorsinoli", "4-heksilrezorcīns", "4-esilresorcinolo", "4-hexylresorcin", "Héxylresorcinol", "4-heksylorezorcynol", "4-hexylrezorcinol"],
  roles: [],
  children: []
}, {
  id: "en:e307b",
  name: "concentrated tocopherol",
  es: "tocoferol concentrado",
  aliases: ["концентриран токоферол", "tocoferol concentrado", "koncentrerad tokoferol", "koncentrált tokoferol", "koncentrovaný tokoferol", "tocoferol concentrat", "geconcentreerde tocoferol", "koncentriran tokoferol", "koncentreret tocopherol", "kontsentreeritud tokoferool", "koncentruotas tokoferolis", "συμπυκνωμένο τοκοφερόλη", "tiivistetty tokoferoli", "tokoferol konċentrat", "tocophérol concentré", "concentrated tocopherol", "tocoferolo concentrato", "konzentrierter Tocopherol", "skoncentrowany tokoferol", "koncentrēts tokoferols"],
  roles: ["antioxidant"],
  children: []
}, {
  id: "en:e923",
  name: "ammonium persulfate",
  es: "Persulfato de amonio",
  aliases: ["अमोनियम परसल्फेट", "Amonija persulfāts", "Amonyum persülfat", "Nadsiarczan amonu", "Persulfate d'ammonium", "过硫酸铵", "Persulfato de amônia", "過硫酸アンモニウム", "Perossidisolfato d'ammonio", "Ammoniumperoxodisulfat", "ammonium persulfate", "Peroxodisíran amónny", "Persulfat tal-ammonju", "Amonijev persulfat", "Υπερσουλφονικό αμμώνιο", "Ammoniumpersulfaatti", "Amonio persulfatas", "Ammooniumpersulfaat", "بيرسلفات الأمونيوم", "Персульфат амонію", "Ammoniumpersulfat", "Ammonium persulfat", "แอมโมเนียมเปอร์ซัลเฟต", "אמוניום פרסולפט", "Persulfat d'amoni", "Amoni persulfat", "Ammoniumpersulfaat", "Persulfat de amoniu", "Персульфат аммония", "Amonia persulfato", "Amonium persulfat", "Ammónium-perszulfát", "Амонијум персулфат", "Peroxodisíran amonný", "Амониум персулфат", "과황산 암모늄", "Persulfat amon", "Амониев персулфат", "Persulfato de amonio"],
  roles: [],
  children: []
}, {
  id: "en:e450ii",
  name: "Trisodium diphosphate",
  es: "Difosfato trisódico",
  aliases: ["Trinātrija difosfāts", "Difosforečnan trisodný", "Diphosphate trisodique", "Difosfato trissódico", "Difosfato trisodico", "Trinatriumdiphosphat", "Trisodium diphosphate", "Difosforan trisodowy", "trinatrijev difosfat", "Difosfat trisodiku", "Trinatrio difosfatas", "Trinaatriumdifosfaat", "Trinatriumdifosfaatti", "Οξινο πυροφωσφορικο νατριο", "Trinatrijev difosfat", "Difosfat trisodic", "Trinatriumdifosfaat", "Тринатриев дифосфат", "Difosfato trisódico", "Trinatriumdifosfat", "Trinátrium-difoszfát", "Hydrogendifosforečnan sodný"],
  roles: ["emulsifier", "humectant", "sequestrant", "stabiliser", "thickener"],
  children: []
}, {
  id: "en:e1001v",
  name: "Choline tartrate",
  es: "Choline tartrate",
  aliases: ["Choline tartrate"],
  roles: [],
  children: []
}, {
  id: "en:e329",
  name: "Magnesium lactate",
  es: "Lactato de magnesio",
  aliases: ["Magnezijev laktat", "Magnesiumlactaat", "Lactat de magneziu", "Laktát hořečnatý", "Magnézium-laktát", "Лактат на магнезий", "Lactato de magnesio", "Magnesiumlaktat", "Magnija laktāts", "Magnesium lactate", "Lattato di magnesio", "Magnesiumlactat", "Lactate de magnésium", "Lactato de magnésio", "Mleczan magnezu", "Mliečnan horečnatý", "Lattat tal-maġnezju", "Magnio laktatas", "Magneesiumlaktaat", "Magnesiumlaktaatti", "Λακτικό μαγνήσιο"],
  roles: [],
  children: []
}, {
  id: "en:e297",
  name: "Fumaric acid",
  es: "Ácido fumárico",
  aliases: ["Acid fumaric", "Fumaarzuur", "Fumarna kislina", "Àcid fumàric", "Fumarsyra", "Фурмарова киселина", "Ácido fumárico", "Kyselina fumarová", "Fumársav", "Kwas fumarowy", "Acido fumarico", "Fumaric acid", "Fumarsäure", "Acide fumarique", "Fumārskābe", "Fumarsyre", "Φουμαρικο οξυ", "Fumaarihappo", "Fumaarhape", "Fumaro rūgštis", "Aċidu fumariku", "fumarna kiselina"],
  roles: [],
  children: []
}, {
  id: "en:e251",
  name: "Sodium nitrate",
  es: "Nitrato sódico i.",
  aliases: ["Natri nitrat", "Nitrat de sodi", "Натриев нитрат i.", "질산 나트륨", "Dusičnan sodný", "Natri-salpetro", "нитрат натрия", "níotráit sóidiam", "Dusičnan sodný i.", "Nitrate de sodium", "Nitrato de sódio", "硝酸ナトリウム", "Natriumnitrat", "Sodium nitrate", "Azotan sodu", "Натрий нитраты", "Sodyum nitrat", "Նատրիումի նիտրատ", "Нітрат натрію", "Naatriumnitraat i)", "نترات الصوديوم", "Νιτρικο νατριο", "Natriyu qullpa", "Nitrat tas-sodju i.", "Natrijev nitrat", "سدیم نیترات", "Nitrat de sodiu i.", "Txileko nitrato", "Natriumnitraat", "נתרן חנקתי", "Natrijum nitrat", "சோடியம் நைட்ரேட்டு", "Nitrati i natriumit", "Nitrato sódico i.", "Nátrium-nitrát", "натријум нитрат", "Natrium nitrat", "Nitrat de sòdi", "Nitrato di sodio", "Nātrija nitrāts i.", "सोडियम नाइट्रेट", "Natrio nitratas", "Natriumnitraatti i)"],
  roles: ["preservative"],
  children: []
}, {
  id: "en:e481i",
  name: "E481i",
  es: "E481i",
  aliases: [],
  roles: [],
  children: []
}, {
  id: "en:e422",
  name: "Glycerol",
  es: "Glicerol",
  aliases: ["Glicerolis", "Glyseroli", "Qliserin", "ग्लीसरीन", "Glicerīns", "Glicerolo", "Glicerol", "Gliserol", "Gliceròl", "glyserol", "Glicerin", "глицерол", "Глицерин", "Glycerol", "גליצרול", "கிளிசரால்", "গ্লিচাৰল", "glizerina", "گلیسیرین", "Гліцэрын", "glisreen", "Gliċerol", "ഗ്ലിസറിൻ", "গ্লিসারল", "Glütserool", "غليسرول", "Γλυκερολη", "Գլիցերին", "Гліцерин", "гөлсирин", "ग्लिसेरोल", "ဂလစ်ဆရင်း", "Gliserin", "Glycérol", "グリセリン", "Glycerin", "Gliocról", "глицерин", "glicerolo", "Глицерол", "글리세롤", "glyxêrin", "Glýseról"],
  roles: ["humectant", "thickener"],
  children: []
}, {
  id: "en:e1200",
  name: "Polydextrose",
  es: "Polidextrosa",
  aliases: ["Polydextros", "Полидекстроза", "Polidextrosa", "Polydextrosa", "Polidextróz", "Polidextroză", "Polydextrose", "Polidekstroza", "Polydekstroosi", "Πολυδεξτροζη", "Polüdekstroos", "Polidekstrozė", "polidekstroza", "Polidestrożju", "Polydextróza", "Polidestrosio", "Polidextrose", "Polidekstroz", "Polidekstroze"],
  roles: ["humectant", "stabiliser", "thickener"],
  children: []
}, {
  id: "en:e518",
  name: "Magnesium sulphate",
  es: "Sulfato de magnesio",
  aliases: ["Magnesiumsulfaatti", "Magneesiumsulfaat", "Síran hořečnatý", "Magnézium-szulfát", "Magnesiumsulfat", "Sulfato de magnesio", "Siarczan magnezu", "Magnesiumsulfaat", "Magnesium sulphate", "Solfato di magnesio", "Sulfato de magnésio", "Sulfate de magnésium", "Sulfat de magneziu", "Magnezijev sulfat", "Magnija sulfāts"],
  roles: [],
  children: []
}, {
  id: "en:e410",
  name: "Locust bean gum",
  es: "Goma garrofín",
  aliases: ["Ceratoniju augļu sveķi", "johannesbrødkjernemel", "Karobová guma", "Guma karobowa", "ローカストビーンガム", "刺槐豆膠", "gomme de caroube", "Johannisbrotgummi", "Farina di carrube", "Locust bean gum", "Johannesbrødkjernemel", "karuba guma", "Gomma tal-fażola tal-ħarrub", "Камедь рожкового дерева", "Karobikumi", "Κομμι χαρουπιων", "Saldžiųjų ceratonijų derva", "מסטיק שעועית חרוב", "Gumi iz zrn rožičevca", "Goma de garrofí", "Gumă din semințe de carruba", "Carobbegom", "algarrobo-goma", "Гума локуст бийн", "Goma garrofín", "Szentjánoskenyér-gumi", "Guma karubin"],
  roles: ["emulsifier", "stabiliser", "thickener"],
  children: []
}, {
  id: "en:e342",
  name: "Ammonium phosphate",
  es: "Fosfato de amonio",
  aliases: ["Fosfat tal-ammonju", "Ammoniumfosfat", "Fosfato de amonio", "Ammoniumfosfaatti", "Φωσφορικό αμμώνιο", "Ammónium-foszfát", "Ammooniumfosfaat", "Ammonio fosfatas", "Amonija fosfāts", "Amonijev fosfat", "Amóniumfosfát", "Fosfat de amoniu", "Ammoniumfosfaat", "Fosforan amonu", "Phosphates d'ammonium", "Fosfato de amónio", "Ammoniumphosphat", "Ammonium phosphate", "Fosfato di ammonio"],
  roles: ["stabiliser", "thickener"],
  children: ["en:e342i", "en:e342ii"] 
}, {
  id: "en:e914",
  name: "Oxidised polyethylene wax",
  es: "Cera de polietileno oxidada",
  aliases: ["Cera polietilenica ossidata", "Oksidēti polietilēnsveķi", "ऑक्सीकृत पॉलीथीन मोम", "Oksidləşmiş polietilen mumu", "Oksiduotas polietileno vaškas", "Hapetettu polyeteenivaha", "Ceară polietilenică oxidată", "Geoxideerde polyethyleenwas", "Oksidiran polietilenski vosek", "שעוות פוליאתילן מחומצנת", "Dyllë polietileni i oksiduar", "Cera de polietileno oxidada", "Оксидиран полиетиленски восок", "Oxiderat polyetylenvax", "Oxidált polietilénviasz", "Оксидовани полиетиленски восак", "Lilin polietilena teroksidasi", "Oxidovaný polyetylénový vosk", "氧化聚乙烯蜡", "Cire de polyéthylène oxydée", "酸化ポリエチレンワックス", "Oxidised polyethylene wax", "Polyethylenwachs-oxidate", "Wosk polietylenowy utleniony", "Oksitlenmiş polietilen mumu", "ขี้ผึ้งโพลีเอทิลีนออกซิไดซ์", "Окислений поліетиленовий віск", "Oxideret polyethylenvoks", "Oksüdeeritud polüetüleenvaha", "شمع البولي إيثيلين المؤكسد", "Κηρός οξειδωμένων πολυαιθυλενιων", "Oksidirani polietilenski vosak", "Xama' tal-polietilen ossidat", "Oksiderende poliëtileenwas", "Sáp polyetylen oxy hóa", "Cera de polietilè oxidada", "Окислен полиетиленов восък", "산화 폴리에틸렌 왁스", "Oxidovaný polyethylenový vosk", "Oksigenita polietilena vakso", "Окисленный полиэтиленовый воск"],
  roles: [],
  children: []
}, {
  id: "en:e209",
  name: "Heptylparaben",
  es: "Heptilparabeno",
  aliases: ["Heptilparaben", "Heptylparabeen", "Heptylparaben", "Хептилпарабен", "Heptilparabeno", "Heptilparabén", "Heptilparabēns", "P-hydroksybenzoesan heptylu", "Eptilparaben", "Hydroxybenzoate d'hépthyle", "Επτυλπαραβένιο", "Heptyyliparabeeni", "Heptüülparabeen", "Heptilparabenas"],
  roles: [],
  children: []
}, {
  id: "en:e369",
  name: "Alanin",
  es: "Alanina",
  aliases: ["Alanin", "Alanīns", "Alanín", "Alanina", "アラニン", "Alanine", "Аланін", "อะลานีน", "Alaniini", "Αλανίνη", "Alaninas", "Alaniin", "ألانين", "Alanină", "آلانین", "Alanino", "Аланин"],
  roles: [],
  children: []
}, {
  id: "en:e462",
  name: "Ethyl cellulose",
  es: "Etilcelulosa",
  aliases: ["Etilceluloze", "Etylcelulóza", "Etyloceluloza", "Etilcellulosa", "Ethylcellulose", "Ethyl cellulose", "Éthylcellulose", "Etilcelulose", "Ċelluloża etilika", "Αιθυλοκυτταρινη", "Etyyliselluloosa", "Etüültselluloos", "Etilceliuliozė", "Etilceluloza", "Etilcel·lulosa", "Etilceluloză", "Etylcellulosa", "Etilcelulosa", "Етил целулоза", "Ethylcelulosa", "Etil-cellulóz"],
  roles: ["carrier", "thickener"],
  children: []
}, {
  id: "en:e418i",
  name: "E418i",
  es: "E418i",
  aliases: [],
  roles: [],
  children: []
}, {
  id: "en:e955",
  name: "Sucralose",
  es: "Sucralosa",
  aliases: ["Sukraloza", "Sucralosa", "Sucraloză", "Sucralose", "Сукралоза", "Sukralos", "Szukralóz", "sukralose", "Sukralosa", "Sukraloze", "Sukralóza", "スクラロース", "Sucralosio", "Sukralożju", "sukraloza", "ซูคราโลส", "Σουκραλοζη", "Sukraloosi", "Sukralozė", "Sukraloos"],
  roles: ["sweetener"],
  children: []
}, {
  id: "en:e234",
  name: "Nisin",
  es: "Nisina",
  aliases: ["Nisiini", "Nisin", "Nisina", "Низин", "Nizin", "Нисин", "ניסין", "Nisine", "Nisină", "نایسین", "nizin", "Νισίνη", "نيسين", "Nisiin", "Нізин", "ไนซิน", "Nizyna", "ナイシン", "乳链菌肽", "Nizino"],
  roles: ["preservative"],
  children: []
}, {
  id: "en:e1412",
  name: "Distarch phosphate",
  es: "Fosfato de dialmidón",
  aliases: ["Динишестен фосфат", "Fosfato de dialmidón", "Distärkelsefosfat", "Zesíťovaný fosforečnan škrobu", "Dikeményítő-foszfát", "Fosfat de dimidó", "Diškrobni fosfat", "Fosfat de diamidon", "Dizetmeelfosfaat", "Fosfat diammidiku", "diškrob fosfat", "Distivelsephosphat", "Ditärklisfosfaat", "Dikrakmolo fosfatas", "Ditärkkelysfosfaatti", "Οξινο φωσφορικο αμυλο", "Dicietes fosfāts", "Diškrobfosfát", "Distärkephosphat", "Fosfato di diamido", "Distarch phosphate", "Phosphate de diamidon", "Fosfato de diamido", "Fosforan diskrobiowy"],
  roles: ["emulsifier", "stabiliser", "thickener"],
  children: []
}, {
  id: "en:e452iii",
  name: "Sodium calcium polyphosphate",
  es: "Polifosfato de sodio y calcio",
  aliases: ["Натриево-калциев полифосфат", "Polifosfato de sodio y calcio", "Natriumkalciumpolyfosfat", "Nátrium-kalcium-polifoszfát", "Polyfosforečnan sodno-vápenatý", "Natrijev kalcijev polifosfat", "Polifosfat de sodiu și calciu", "Natriumcalciumpolyfosfaat", "Polifosfat tal-kalċju u tas-sodju", "Natriumcalciumpolyphosphater", "Natrio kalcio polifosfatas", "Naatriumkaltsiumpolüfosfaat", "Natriumkalsiumpolyfosfaatti", "Πολυφωσφορικο νατριοασβεστιο", "Nātrija kalcija polifosfāts", "Polifosfato de sódio e cálcio", "Polyphosphate de sodium-calcium", "Natriumcalciumpolyphosphat", "Polifosfato di sodio e calcio", "Sodium calcium polyphosphate", "Polifosforan sodowo-wapniowy"],
  roles: ["emulsifier", "humectant", "sequestrant", "stabiliser", "thickener"],
  children: []
}, {
  id: "en:e161bi",
  name: "Lutein from Tagetes erecta",
  es: "Lutein from Tagetes erecta",
  aliases: ["Lutein from Tagetes erecta"],
  roles: [],
  children: []
}, {
  id: "en:e366",
  name: "Potassium fumarate",
  es: "Fumarato de potasio",
  aliases: ["Kalijev fumarat", "Kaliumfumaraat", "Fumarat de potasiu", "Kálium-fumarát", "Fumarát draselný", "Kaliumfumarat", "Калиев фумарат", "Fumarato de potasio", "Kālija fumarāts", "Fumaran potasu", "Fumarato de potássio", "Fumarate de potassium", "Fumarato di potassio", "Potassium fumarate", "Fumarat tal-potassju", "Kaliumfumaraatti", "Φουμαρικό κάλιο", "Kalio fumaratas", "Kaaliumfumaraat"],
  roles: [],
  children: []
}, {
  id: "en:e415",
  name: "Xanthan gum",
  es: "Goma xantana",
  aliases: ["Xanthaangom", "صمغ زانتان", "Gumă de xantan", "Goma de xantè", "Ksantan gumi", "קסנטן גאם", "xanthan gum", "Xantángumi", "Xanthan", "Гума ксантан", "Goma xantana", "Xantangummi", "Ксантановая камедь", "Xantano", "Gum xanthan", "Gomme xanthane", "キサンタンガム", "Xanthan gum", "Gomma di xantano", "Guma ksantanowa", "Xantánová živica", "xantangummi", "Ksantāna sveķi", "Ksantan zamkı", "Ksantano derva", "Ksantaankummi", "صمغ الكزانتان", "Ksantaanikumi", "Ξανθανικο κομμι", "xanthangummi", "ksantan", "Gomma xanthan"],
  roles: ["emulsifier", "stabiliser", "thickener"],
  children: []
}, {
  id: "en:e228",
  name: "Potassium bisulphite",
  es: "Sulfito ácido de potasio",
  aliases: ["Kaaliumvesiniksulfit", "Kalio bisulfitas", "Kaliumvetysulfiitti", "Οξινο θειωδες καλιο", "Kaliumhydrogensulfit", "Bisulfit tal-potassju", "Hidrogenossulfito de potássio", "Sulfite acide de potassium", "Potassio solfito acido", "Potassium bisulphite", "Wodorosiarczyn potasu", "Kālija bisulfīts", "Kálium-hidrogén-szulfit", "Hydrogensiřičitan draselný", "Sulfito ácido de potasio", "Калиев бисулфит", "Kaliumvätesulfit", "Kaliumwaterstofsulfiet synoniemen", "Bisulfit de potasiu", "Sulfit àcid de potassi", "Kalijev bisulfit"],
  roles: [],
  children: []
}, {
  id: "en:e308",
  name: "Gamme-tocopherol",
  es: "Gamma-tocoferol",
  aliases: ["แกมมา - โทโคฟีรอล", "Gamma-tocopherol", "Gamma-tokoferol", "Гамма-токоферол", "Gama-tokoferolis", "Gamma-tokopherol", "إي 308، غاما توكوفيرول", "Γάμμα-τοκοφερόλη", "Gamma-tokoferoli", "Gama-tokoferol", "Gamma-Tocopherol", "Gamma-tocoferolo", "Gamme-tocopherol", "γ-生育酚", "Gamma-tocophérol de synthèse", "Gama-tocoferol", "ガンマ - トコフェロール", "γ-Tokoferol", "Gamma-tokoferols", "Gamma-tocoferol", "Гама-токоферол", "감마 - 토코페롤", "gamma-tokoferol", "gamma-Tocopherol", "γ-tocoferol"],
  roles: [],
  children: []
}, {
  id: "en:e431",
  name: "Polyoxyethylene (40) stearate",
  es: "Estearato de polioxietileno (40)",
  aliases: ["Polyoxietylen(40)stearat", "Estearato de polioxietileno (40)", "Полиоксиетилен (40) стеарат", "Polioxietilén(40)-sztearát", "Polyoxyethylen (40) stearan", "Polioksietilen (40) stearat", "Estearat de polioxietilè (40)", "Stearat de polioxietilenă (40)", "Polyoxyethyleen(40)stearaat", "Stearat tal-poliossietilen (40)", "Polyoxyethylen (40) stearat", "Στεατικο πολυοξυαιθυλενιο (40)", "Polyoksyetyleeni(40)stearaatti", "Polioksietileno (40) stearatas", "Polüoksüetüleen(40)stearaat", "Polioksietilēna (40) stearāts", "Polyoxyetylén (40) stearát", "Stearynian polioksyetylenu (40)", "Stéarate de polyoxyéthylène (40)", "Polyoxyethylen(40)stearat", "Stearato di poliossietilene(40)", "Polyoxyethylene (40) stearate"],
  roles: ["emulsifier"],
  children: []
}, {
  id: "en:e470ii",
  name: "E470ii",
  es: "E470ii",
  aliases: [],
  roles: [],
  children: []
}, {
  id: "en:e440a",
  name: "E440a",
  es: "E440a",
  aliases: [],
  roles: ["emulsifier", "stabiliser", "thickener"],
  children: ["en:e440aii", "en:e440aiii", "en:e440aiv"]
}, {
  id: "en:e161j",
  name: "Astaxanthin",
  es: "Astaxantina",
  aliases: ["Astaxantín", "Astaksantyna", "Astaxantina", "アスタキサンチン", "Astaxanthine", "Astaxanthin", "Astaksantīns", "Astaksantin", "Астаксантин", "แอสตาแซนธิน", "Ασταξανθίνη", "Astaksantiini", "Astaksantinas", "أستازانتين", "Astaksantiin", "آستاگزانتین", "Astaxantină", "אסטקסנטין", "Astaxantin", "아스타잔틴", "Asztaxantin", "Astaksantino"],
  roles: [],
  children: []
}, {
  id: "en:e150c",
  name: "Ammonia caramel",
  es: "Caramelo amónico",
  aliases: ["Amoniakový karamel", "Ammóniás karamell", "ammoniakprocessen", "Амониев карамел", "Caramelo amónico", "Сахарный колер III", "Ammoniakkaramel", "Caramel amoniacal", "Amonijev karamel", "Εναμμωνιο καραμελοχρωμα", "Ammoniummenetelmän sokerikulööri", "Amoniakinė karamelė", "Ammooniumkaramell", "Ammonieret karamel", "Karamella tal-ammonja", "amonijačni karamel", "Ammoniert karamell", "Karmel amoniakalny", "Caramello ammoniacale", "Ammoniak-Zuckerkulör", "Ammonia caramel", "Caramel ammoniacal", "Caramelo de amónia", "Amonija karamele"],
  roles: ["colour"],
  children: []
}, {
  id: "en:e950",
  name: "Acesulfame k",
  es: "Acesulfamo K",
  aliases: ["Acesulfam k", "Ацесулфам к", "Acesulfamo K", "Aceszulfám k", "acesulfam K", "Acesulfamo", "Asesulfam", "Acesulfamo-k", "ацесульфам", "اسسولفام پتاسیم", "Acesulfaam-k", "Acesulfame K", "אצסולפאם-K", "Kalijum acesulfam", "Acesulfam K", "Ацесульфам", "Acesulfamkalium", "แอซีซัลเฟมโพแทสเซียม", "Ακεσουλφαμη κ", "Asesulfaami k", "Acesulfamas k", "Kaaliumatsesulfaam", "أسيسلفام البوتاسيوم", "Aċesulfam k", "acesulfam-K", "Acesulfám k", "乙酰磺胺酸钾", "Acésulfame K", "Acessulfame k", "アセスルファムカリウム", "Acesulfame k", "Acesulfam-K", "Acesulfāms k"],
  roles: ["sweetener"],
  children: []
}, {
  id: "en:e907",
  name: "Hydrogenated poly-1-decene",
  es: "Poli-1-deceno hidrogenado",
  aliases: ["Hidrogenirani poli-1-decen", "Poli-1-decè hidrogenat", "Gehydrogeneerd poly-1-deceen", "Poli-1-decenă hidrogenată", "Hydrogenovaný poly-1-decen", "Hidrogénezett poli-1-decén", "Hydrogenerat poly-1-deken", "Poli-1-deceno hidrogenado", "Хидрогениран поли-1-децен", "Hidrogenēts poli-1-decēns", "Uwodorniony poli-1-deken", "Hydriertes poly-1-decen", "Poli-1-decene idrogenato", "Hydrogenated poly-1-decene", "Poly-1-décène hydrogéné", "Hydrogenovaný poly-1-decén", "Poli-1-deċen idroġinata", "Vetykäsitelty poly-1-dekeeni", "Υδρογονωμενο πολυ-1-δεκενιο", "Hüdrogeenitud polü-1-detseen", "Hidrintas poli(1-decenas)", "Hydrogeneret poly-1-decen"],
  roles: [],
  children: []
}, {
  id: "en:e326",
  name: "potassium lactate",
  es: "lactato potasico",
  aliases: ["kaliumlactaat", "Lactat de potasiu", "Kalijev laktat", "Kalijum laktat", "பொட்டாசியம் லாக்டேட்டு", "Lactat de potassi", "Kálium-laktát", "Mléčnan draselný", "kaliumlaktat", "Калиев лактат", "lactato potasico", "лактат калия", "Kalia laktato", "mleczan potasu", "lactate de potassium", "lactato de potássio", "乳酸カリウム", "lattato di potassio", "Kalumlactat", "potassium lactate", "mliečnan draselný", "kālija laktāts", "Γαλακτικο καλιο", "kaliumlaktaatti", "kalio laktatas", "Kaaliumlaktaat", "kalijev laktat", "Lattat tal-potassju", "Kaliumlaktat"],
  roles: ["antioxidant", "emulsifier", "humectant"],
  children: []
}, {
  id: "en:e515i",
  name: "Potassium sulphate",
  es: "Sulfato potásico",
  aliases: ["Síran draselný", "Siarczan potasu", "Solfato di potassio", "Potassium sulphate", "Kaliumsulfat", "Sulfate de potassium", "Sulfato de potássio", "Kālija sulfāts", "Kaliumsulfaatti", "Θειικό άλας του καλίου", "Kalio sulfatas", "Kaaliumsulfaat", "Sulfat tal-potassju", "Sulfat de potasiu", "Kaliumsulfaat", "Kalijev sulfat", "Sulfat de potassi", "Калиев сулфат", "Sulfato potásico", "Kálium-szulfát"],
  roles: [],
  children: []
}, {
  id: "en:e999",
  name: "Quillaia extract",
  es: "Extracto de quilaya",
  aliases: ["Estratt tal-kwillaja", "Seebikoorepuu ekstrakt", "Muiliaus ekstraktas", "Εκχυλισμα κιλαϊας", "Kvillaiauute", "Quillaiaekstrakt synonymer —", "Kvilajas ekstrakts", "Quillaia extract", "Estratto di quillaia", "Quillajaextrakt", "Extraits de quillaia", "Extracto de quilaia", "Ekstrakt quillaia", "Extrakt quillaia", "Extrakt z kvillaji", "Quillajakivonat", "Extracto de quilaya", "Куилая екстракт", "Kvillajaextrakt", "Extracte de quil·laia", "Izvleček quillaia", "Quillaja-extract", "Extract de quillaia"],
  roles: ["emulsifier"],
  children: ["en:e999i", "en:e999ii"]
}, {
  id: "en:e1503",
  name: "Castor oil",
  es: "Aceite de ricino",
  aliases: ["Wonderolie", "Errizinu olio", "აბუსალათინის ზეთი", "روغن کرچک", "Ulei de ricin", "שמן קיק", "Ricinusovo olje", "Ricinusovo ulje", "Ricinusolaj", "Рицинусово уље", "Рицинусово масло", "Ricinolja", "Vaj ricini", "Aceite de ricino", "Minyak kastor", "Minyak jarak", "Olio di ricino", "अरंडी का तेल", "Rīcineļļa", "Ricinusolje", "Risiiniöljy", "Ricinų aliejus", "Kastor yağı", "Dầu thầu dầu", "Kasterolie", "Hægindisolía", "Oli de ricí", "Ricinový olej", "피마자 기름", "Рициново масло", "Касторовое масло", "Ricinoleo", "Olej rycynowy", "Huile de ricin", "Óleo de rícino", "ヒマシ油", "Rizinusöl", "Castor oil", "Ricínový olej", "Ola castor", "Hint yağı", "Καστορέλαιο", "Kastoorõli", "زيت الخروع", "Կասկածելի յուղ", "Рицинова олія", "Ricinusolie", "น้ำมันละหุ่ง", "Żejt ir-riġnu"],
  roles: ["carrier", "emulsifier"],
  children: []
}, {
  id: "en:e446",
  name: "Succistearin",
  es: "Succistearina",
  aliases: ["Succistearină", "سوکسیستئارین", "Succistearin", "Succistearine", "Sukcistearin", "סוקסיסטארין", "Succistearina", "Сукцистеарин", "숙시스테아린", "Szukcisztearin", "Suksisstearin", "Sukcistearino", "Sukcistearín", "Sukcystearyna", "琥珀酸硬脂酸酯", "サクシステアリン", "Succistéarine", "Sükkistearin", "Sukcistearīns", "सक्सिस्टेरिन", "Sukkisteariini", "Σουκκιστεαρίνη", "Suktsisteariin", "Sukcistearinas", "سكسيستيرين", "Suċċistearin"],
  roles: [],
  children: []
}, {
  id: "en:e452iv",
  name: "Calcium polyphosphate",
  es: "Polifosfato de calcio",
  aliases: ["Polifosfat de calci", "Kalcijev polifosfat", "פוליפוספט הסידן", "Polyphosphat canxi", "Calciumpolyfosfaat", "Polifosfat de calciu", "پلی فسفات کلسیم", "Полифосфат кальция", "Kalsium polifosfat", "Kalcia polifosfato", "Калијум полифосфат", "Polyfosforečnan vápenatý", "Kalcium-polifoszfát", "Polifosfato de calcio", "Калциев полифосфат", "Polifosfat kalciumi", "폴리인산 칼슘", "Kalciumpolyfosfat", "Калциум полифосфат", "Kalsiyum polifosfat", "Kalcija polifosfāts", "Polifosfato di calcio", "Calciumpolyphosphat", "Calcium polyphosphate", "多磷酸钙", "Polifosfato de cálcio", "ポリリン酸カルシウム", "Polyphosphate de calcium", "Polifosforan wapnia", "Polifosfat tal-kalċju", "Kalcio polifosfatas", "Kaltsiumpolüfosfaat", "بولي فوسفات الكالسيوم", "Πολυφωσφορικο ασβεστιο", "Kalsiumpolyfosfaatti", "แคลเซียมโพลีฟอสเฟต", "Calciumpolyphosphater", "Поліфосфат кальцію"],
  roles: ["emulsifier", "humectant", "sequestrant", "stabiliser", "thickener"],
  children: ["en:e544"]
}, {
  id: "en:e343ii",
  name: "Dimagnesium phosphate",
  es: "Fosfato de dimagnesio",
  aliases: ["Dimagnezijev fosfat", "Dimagnezijum fosfat", "இருமக்னீசியம் பாசுபேட்டு", "Fosfat dimagnezic", "Dimagnesiumfosfaat", "гидроортофосфат магния", "Fosfato de dimagnesio", "Димагнезиев фосфат", "Dimagnesiumfosfat", "Dimagnézium-foszfát", "Hydrogenfosforečnan hořečnatý", "Dimagnija fosfāts", "Fosforečnan dihorečnatý", "dimagnésium phosphate", "Fosfato de dimagnésio", "Dimagnesium phosphate", "Fosfato di dimagnesio", "Dimagnesiumphosphat", "Fosforan dimagnezu", "dimagnezijev fosfat", "Fosfat dimanjeżiku", "Dimagnio fosfatas", "Magneesiumvesinikfosfaat", "Dimagnesiumfosfaatti", "Οξινο φωσφορικο μαγνησιο"],
  roles: ["stabiliser", "thickener"],
  children: []
}, {
  id: "en:e543",
  name: "E543 food additive",
  es: "E543 food additive",
  aliases: [],
  roles: [],
  children: []
}, {
  id: "en:e133",
  name: "Brilliant blue FCF",
  es: "Azul brillante FCF",
  aliases: ["Brilliant Blue FCF", "Brilijantno plavo FCF", "Brilantní modř FCF", "Brilliánskék FCF", "Briljantblått FCF", "Брилянтно синьо FCF", "Azul brillante FCF", "Briljantno modro FCF", "כחול בוהק FCF", "Blau brillant FCF", "Briljantblauw FCF", "Albastru briliant FCF", "briljantna plava", "Blu brillanti FCF", "briljantblà FCF", "Briljanttisininen FCF", "Λαμπρο κυανο FCF", "Briliantinis mėlinasis FCF", "Briljantsinine FCF", "Brilliant blue FCF", "Діамантовий синій", "Briljantzilais FCF", "Błękit brylantowy FCF", "Brilliantblau FCF", "Blu brillante FCF", "Azul brilhante FCF", "ブリリアントブルーFCF", "Bleu brillant FCF", "Brilantná modrá FCF", "gorm lonrach FCF"],
  roles: ["colour"],
  children: []
}, {
  id: "en:e163xi",
  name: "E163xi",
  es: "E163xi",
  aliases: [],
  roles: [],
  children: []
}, {
  id: "en:e141i",
  name: "Copper complexes of chlorophylls",
  es: "Complejos cúpricos de clorofilas",
  aliases: ["Klorofillok rézkomplexei", "Měďnaté komplexy chlorofylů", "Kopparkomplex av klorofyller", "Медни комплекси на хлорофили", "Complejos cúpricos de clorofilas", "Bakrovi kompleksi klorofilov", "Kopercomplexen van chlorofylen", "Complexe de cupru ale clorofilelor", "Kumplessi tar-ram tal-klorofilli", "Συμπλοκα των χλωροφυλλων με χαλκο", "Klorofyllikuparikompleksit", "Klorofüllide vasekompleksid", "Chlorofilų vario kompleksiniai junginiai", "Chlorophyll-kobber-kompleks", "Hlorofilu vara kompleksi", "Kompleksy miedziowe chrolofili", "Complexos cúpricos de clorofilas", "Complexes cuivriques de chlorophylles", "Kupferkomplexe der Chlorophylle", "Complessi rameici delle clorofille", "Copper complexes of chlorophylls", "Meďnaté komplexy chlorofylov"],
  roles: ["colour"],
  children: ["en:ci-natural-green-3"]
}, {
  id: "en:e1102",
  name: "Glucose oxidase",
  es: "Glucosa oxidasa",
  aliases: ["Glikozes oksidāze", "Glukóza oxidáza", "Oksydaza glukozowa", "Glucosio ossidasi", "Glukose-Oxidase", "Glucose oxidase", "Glucose oxydase", "Glicose oxidase", "Ossidasi tal-Glukożi", "Glukoseoxidase", "Glukoosioksidaasi", "Γλυκόζη οξειδάση", "Glukozės oksidazė", "Glükoosoksüdaas", "Glukoza oksidaza", "Glucozoxidază", "Glucose-oxidase", "Glukosoxidase", "Glucosa oxidasa", "Глюкозна оксидаза", "Glükóz-oxidáz"],
  roles: ["antioxidant"],
  children: []
}, {
  id: "en:e143",
  name: "Fast Green FCF",
  es: "Verde rápido FCF",
  aliases: ["Verde solid FCF", "Fast Green FCF", "Verde rápido FCF", "Verde rapido FCF", "Vert solide FCF", "Verde rápido", "Zielony trwały FCF", "Nopea Vihreä FCF"],
  roles: ["colour"],
  children: []
}, {
  id: "en:e1441",
  name: "Hydroxy propyl distarch glycerine",
  es: "Glicerol de dialmidón hidroxipropil",
  aliases: ["Hydroxy propyl distarch glycerin", "Glicerolo di dialmid idrossipropilico", "Hydroxypropyldistärkeglycerin", "Hydroxy propyl distarch glycerine", "ヒドロキシプロピル二澱粉グリセリン", "Hidroxi propil distar glicerin", "Glycérine de diamidon hydroxypropylé", "Hydroksypropylowy glicerin diskrobiowy", "Hidroksi propil distar gliserol", "Hidroksi propil distarha glicerīns", "Hidroksi propil nişasta qliserin", "Hüdroksüpropüül-ditselluloosglütserin", "Hidroksi propil distarch glicerinas", "Hydroksi propyyli distärkkelys glyseriini", "Υδροξυ προπυλ διστάρχη γλυκερίνη", "Gliċerol tad-dijamiżella idrossi propil", "Glicerin de dialmidó hidroxipropil", "Hydroxy propyl distarch glicerin", "Glicerol de dialmidón hidroxipropil", "Хидрокси пропил дистарх глицерин", "하이드록시 프로필 디스타치 글리세린", "Hidroxi propil di keményítő glicerin", "Гидрокси пропил дистарх глицерин"],
  roles: ["emulsifier", "stabiliser", "thickener"],
  children: []
}, {
  id: "en:e333ii",
  name: "Dicalcium citrate",
  es: "Citrato dicálcico",
  aliases: ["Dikalcija citrāts", "Citrato dicálcico", "Citrate dicalcique", "Dicalciumcitrat", "Dicalcium citrate", "Citrato dicalcico", "Cytrynian diwapniowy", "Citran divápenatý", "Ċitrat dikalċiku", "Dikalcio citratas", "Kaltsiumvesiniktsitraat", "Dikalsiumsitraatti", "Dikalcijev citrat", "Dicalciumcitraat", "Citrat dicalcic", "Dikalcium-citrát", "Дикалциев цитрат", "Dikalciumcitrat"],
  roles: ["sequestrant", "stabiliser"],
  children: []
}, {
  id: "en:e470aiii",
  name: "Calcium salts of fatty acids",
  es: "Sales de calcio de ácidos grasos",
  aliases: ["Кальциевые соли жирных кислот", "Kalciaj saloj de grasacidoj", "Vápenaté soli mastných kyselin", "지방산 칼슘 염", "Калциеви соли на мастни киселини", "Sals de calci dels àcids grassos", "Kalcijeve soli masnih kiselina", "Imħlieħ tal-kalċju tal-aċidi grassi", "Άλατα ασβεστίου λιπαρών οξέων", "Rasvhapete kaltsiumsoolad", "أملاح الكالسيوم للأحماض الدهنية", "Кальцієві солі жирних кислот", "Calciumsalte af fedtsyrer", "เกลือแคลเซียมของกรดไขมัน", "Yağ asitlerinin kalsiyum tuzları", "Sole wapniowe kwasów tłuszczowych", "脂肪酸カルシウム塩", "脂肪酸钙盐", "Sais de cálcio de ácidos gordos", "Sels de calcium d'acides gras", "Calciumsalze der Speisefettsäuren", "Calcium salts of fatty acids", "Vápenaté soli mastných kyselín", "Salain chailciam d'aigéid shailleacha", "Sales de calcio de ácidos graxos", "Garam kalsium asid lemak", "Garam kalsium asam lemak", "Zsírsavak kalciumsói", "Калијумове соли масних киселина", "Kalciumsalter av fettsyror", "Калциумови соли на масни киселини", "Kripërat e kalciumit të acideve yndyrore", "Sales de calcio de ácidos grasos", "Kalcijeve soli maščobnih kislin", "מלחי סידן של חומצות שומן", "Calciumzouten van vetzuren", "نمک های کلسیم اسیدهای چرب", "Săruri de calciu ale acizilor grași", "Rasvahappojen kalsiumsuolat", "Kalcio riebalų rūgščių druskos", "Yağ turşularının kalsium duzları", "वसा अम्ल के कैल्शियम लवण", "Kalcija taukskābju sāļi", "Kalsiumsalter av fettsyrer", "Sali di calcio degli acidi grassi"],
  roles: ["emulsifier", "stabiliser", "thickener"],
  children: []
}, {
  id: "en:e1101iii",
  name: "E1101iii",
  es: "E1101iii",
  aliases: [],
  roles: [],
  children: []
}, {
  id: "en:e541i",
  name: "Acid sodium aluminium phosphate",
  es: "Fosfato ácido de aluminio y sodio",
  aliases: ["Hydrogénfosforečnan hlinito-sodný kyslý", "Fosforan glinowo-sodowy kwaśny", "Acid sodium aluminium phosphate", "Fosfato acido di sodio e alluminio", "Saures natriumaluminiumphosphat", "Fosfato ácido de alumínio e sódio", "Phosphate de sodium-aluminium acide", "Natriumaluminiumphosphat", "Οξινο φωσφορικο αργιλιονατριο", "elintarvikelisäaine", "Natrio aliuminio fosfatas rūgštinis", "Fosfat tas-sodju u tal-aluminju aċidiku", "Fosfat de aluminiu și sodiu acid", "zuur Natriumaluminiumfosfaat", "Natrijev aluminijev fosfat kisli", "Fosfat àcid de sodi i alumini", "Natriumaluminiumfosfat surt", "Fosfato ácido de aluminio y sodio", "Натриевоалуминиев фосфат кисел", "Kyselý fosforečnan sodno-hlinitý", "Savas nátrium-alumínium-foszfát"],
  roles: ["emulsifier", "stabiliser", "thickener"],
  children: []
}, {
  id: "en:e436",
  name: "Polyoxyethylene sorbitan tristearate",
  es: "Triestearato de sorbitán polioxietilenado",
  aliases: ["Polyoxyetylénsorbitantristearát", "Tristearato di poliossietilene sorbitano", "Polyoxyethylen-sorbitantristearat", "Polyoxyethylene sorbitan tristearate", "Triestearato de polioxietileno sorbitano", "Tristéarate de polyoxyéthylène sorbitane", "Tristearynian polioksyetylenosorbitolu", "Polioksietilēna sorbitāna tristearāts", "Polyoxyethylen(20)sorbitantristearat", "Polioksietileno sorbitano tristearatas", "Polüosküetüleen sorbitaantristearaat", "Τριστεατικη πολυοξυ-αιθυλενο-σορβιτανη", "Polyoksyetyleenisorbitaanitristearaatti", "Tristearat tal-poliossietilen sorbitan", "Tristearat de polioxietilenă sorbitan", "Polyoxyethyleensorbitaantristearaat", "Triestearat de sorbitan polioxietilenat", "Polioksietilen sorbitan tristearat", "Полиоксиетилен сорбитан тристеарат", "Triestearato de sorbitán polioxietilenado", "Polyoxietylensorbitantristearat", "Polyoxyethylensorbitantristearát", "Polioxietilén-szorbitan-trisztearát"],
  roles: ["emulsifier", "stabiliser"],
  children: []
}, {
  id: "en:e160d",
  name: "Lycopene",
  es: "Licopeno i.",
  aliases: ["Lykopen", "Likopin", "Licopeno i.", "Ликопен i", "Licopè", "Likopen", "Lycopeen", "Licopen", "Likopen i", "Lükopeen i", "Likopenas", "Λυκοπενιο", "Lykopeeni", "Lycopen", "Likopēns", "Lycopin", "Licopene", "Lycopene", "Licopeno", "Lycopène", "リコペン", "Lykopén"],
  roles: ["colour"],
  children: ["en:e160di", "en:e160dii", "en:e160diii"]
}, {
  id: "en:e482ii",
  name: "Calcium oleyl lactylate",
  es: "Calcium oleyl lactylate",
  aliases: ["Calcium oleyl lactylate"],
  roles: [],
  children: []
}, {
  id: "en:e905",
  name: "Synthetic wax",
  es: "cera sintética",
  aliases: ["sintetinis vaškas", "Szintetikus viasz", "sünteetiline vaha", "συνθετικός κηρός", "cera sintética", "синтетичен восък", "syntetisk voks", "Xama' sintetika", "Syntetisches Wachs", "cera sintetica", "Synthetic wax", "Cire synthétique", "wosk syntetyczny", "synthetische was", "Ceară sintetică", "sintetični vosek"],
  roles: [],
  children: ["en:e905a", "en:e905b", "en:e905c", "en:e905d", "en:e905e", "en:e905f", "en:e905g"]
}, {
  id: "en:e201",
  name: "Sodium sorbate",
  es: "Sorbato de sodio",
  aliases: ["Sórbát sodný", "Sorbinian sodu", "Sorbate de sodium", "Sorbato de sódio", "Natriumsorbat", "Sorbato di sodio", "Sodium sorbate", "Nātrija sorbāts", "Σορβικό νάτριο", "Natriumsorbaatti", "Naatriumsorbaat", "Natrio sorbatas", "Sorbat tas-sodju", "Sorbat de sodiu", "Natriumsorbaat", "Natrijev sorbat", "Натриев сорбат", "Sorbato de sodio", "Nátrium-szorbát", "Sodný sorbát"],
  roles: ["preservative"],
  children: []
}, {
  id: "en:e290",
  name: "Carbon dioxide",
  es: "Dióxido de carbono",
  aliases: ["कार्बन डायॉक्साइड", "二酸化炭素", "Dioxyde de carbone", "Dé-ocsaíd charbóin", "Oxid uhličitý", "कार्बनडाइअक्साइड", "ካርቦን ክልቶኦክሳይድ", "ကာဗွန်ဒိုင်အောက်ဆိုက်", "คาร์บอนไดออกไซด์", "Karbon dioksido", "ածխաթթու գազ", "Dioxido de carbonio", "Ugljikov oksid", "কার্বন ডাই অক্সাইড", "Chimlasay", "කාබන්ඩයොක්සයිඩ්", "Cacbon điôxít", "དབྱང་གཉིས་སོལ་འགྱུར།", "Koltvísýringur", "Koolstofdioksied", "ଅଙ୍ଗାରକାମ୍ଳ", "Karbonat angidrid", "Kuelendioxid", "Diyocside di carbone", "оксид углерода", "Kárbónì ọlọ́ksíjínìméjì", "carbon deuocsid", "Kaarboon laba ogsaydh", "Oglekļa dioksīds", "קוילן זייערס", "کاربن دو اکسید", "Koolstofdioxide", "Дыяксід вугляроду", "کـاربن ډای اکسايد", "Karbona dioksîd", "காபனீரொக்சைட்டு", "Ogljikov dioksid", "Ugljen-dioksid", "Szén-dioxid", "karbondioksid", "Dióxido de carbono", "Dioxid de carbòni", "కార్బన్ డయాక్సైడ్", "Karbon dioksida", "Carbon dioxide", "Kohlendioxid", "二氧化碳", "Dyoksid kabòn", "Dwutlenek węgla", "ಇಂಗಾಲದ ಡೈಆಕ್ಸೈಡ್", "Karbondioksit", "ثنائي أكسيد الكربون", "Süsinikdioksiid", "Διοξειδιο του ανθρακα", "Carbondioxid", "Діоксид вуглецю", "Diossidu tal-karbonju", "Kooldioxide", "കാർബൺ ഡയോക്സൈഡ്", "Diòxid de carboni", "Diòssidu de carboniu", "Carbonii dioxidum", "Въглероден диоксид", "이산화 탄소", "Anhydrido carbonic", "karbona dioksido", "Anidride carbonica", "Dà-ogsaid gualain", "कार्बन डाईऑक्साइड", "Anglies dioksidas", "Hiilidioksidi", "Dioxid de carbon", "کربن دی‌اکسید", "Daa-ocseed charboan", "ნახშირორჟანგი", "Ugljik-dioksid", "פחמן דו-חמצני", "Karbo dioxido", "ugljen-dioksid", "Көмірқышқыл газ", "Dioksidi i karbonit", "Јаглерод диоксид", "Koldioxid", "ਕਾਰਬਨ ਡਾਈਆਕਸਾਈਡ", "Ngeihyangjvaqdanq"],
  roles: ["preservative", "propellent-gas"],
  children: ["de:gärungskohlensäure", "de:quellkohlensäure"]
}, {
  id: "en:e441",
  name: "Superglycerinated hydrogenated rapeseed oil",
  es: "Aceite de semillas de colza superglicerinado hidrogenado",
  aliases: ["Aceite de semillas de colza superglicerinado hidrogenado", "Superglyseroitu hydrattu rypsiöljy", "Superglycerinated hydrogenated rapeseed oil", "Huile de colza superglycérinée hydrogénée"],
  roles: [],
  children: []
}, {
  id: "en:e321",
  name: "Butylated hydroxytoluene",
  es: "Butilhidroxitolueno",
  aliases: ["Butylhydroxytoluen (bht)", "Butilezett hidroxi-toluol (bht)", "Бутилхидрокситолуол (бхт)", "Butilhidroxitolueno", "Butylhydroxitoluen (bht)", "Butylhydroxytolueen", "Butilhidroxitoluen (bht)", "Butilhidroxitoluè", "Butilhidroksitoluen (bht)", "Butüülhüdroksütolueen (bht)", "Butilintas hidroksitoluenas (bht)", "Βουτυλ-υδροξυτολουολιο (βητ)", "Butyylihydroksitolueeni (bht)", "Idrositoluwen butilat (bht)", "Butylhydroxytoluen", "Butilidrossitoluene (bht)", "Butylated hydroxytoluene", "Butil-hidroxitolueno (bht)", "Butylhydroxytoluène", "Butylohydroksytoluen", "Butylovaný hydroxytoluén (bht)", "Butillendirilmiş hidroksi toluen", "Butilhidroksitoluols (bht)"],
  roles: ["antioxidant"],
  children: []
}, {
  id: "en:e1001iv",
  name: "Choline citrate",
  es: "Choline citrate",
  aliases: ["Choline citrate"],
  roles: [],
  children: []
}, {
  id: "en:e417",
  name: "Tara gum",
  es: "Goma tara",
  aliases: ["Gomma tara", "Κομμι ταρα", "Tarakumi", "Tarakummi", "Tara derva", "Taragummi", "Tara sveķi", "Guma tara", "Gomma di tara", "Tara gum", "Tarakernmehl", "Goma de tara", "Gomme tara", "Taramagliszt", "Goma tara", "Гума тара", "Tara gumi", "Taragom", "Gumă tara"],
  roles: ["stabiliser", "thickener"],
  children: []
}, {
  id: "en:e261",
  name: "Potassium acetate",
  es: "Acetato potásico",
  aliases: ["Octan draselný", "Acetato di potassio", "Potassium acetate", "Kaliumacetat", "Acetato de potássio", "酢酸カリウム", "Acétates de potassium", "Octan potasu", "Potasyum asetat", "Kālija acetāts", "Ацетат калію", "Kaaliumatsetaat", "Kalio acetatas", "أسيتات البوتاسيوم", "Kaliumasetaatti", "Οξικο καλιο", "Aċetat tal-potassju", "kalijevi acetati", "Acetat de potasiu", "پتاسیم استات", "Kali axetat", "Kaliumacetaat", "Acetat de potassi", "பொட்டாசியம் அசிட்டேட்டு", "Kalijev acetat", "Kalijum acetat", "Калиев ацетат", "Acetato potásico", "Kálium-acetát", "Kalium asetat", "kalia acetato", "ацетат калия"],
  roles: ["preservative"],
  children: ["en:e261i", "en:e261ii"]
}, {
  id: "en:e635",
  name: "Disodium 5'-ribonucleotide",
  es: "5'-ribonucleótido disódico",
  aliases: ["Dinatrium-5'-ribonucleotiden", "5'-ribonucleotidă disodică", "5'-ribonucleòtid de disodi", "Dinatrijev 5'-ribonukleotid", "5'-ribonukleotid sodný", "Dinátrium-5'-ribonukleotid", "5'-ribonucleótido disódico", "Динатриев 5'-рибонуклеотид", "Dinatrium-5'-ribonukleotider", "Disodium 5'-ribonucleotide", "5'ribonucleotide di disodio", "Dinatrium-5'-ribonukleotid", "5'-ribonucléotide disodique", "5'-ribonucleótidos dissódicos", "5'-リボヌクレオチド二ナトリウム", "5'-rybonukleotydy disodowe", "5'-ribonukleotid disodný", "Dinātrija 5'-ribonukleotīds", "Dinatrio 5'-ribonukleotidas", "Dinaatrium-5'-ribonukleotiid", "Dinatrium-5'-ribonukleotidi", "Αλατα με νατριο των 5'-ριβονουκλεοτιδιων", "Dinatrium-5'-ribonucleotider", "5'-ribonukleotid disodiku", "dinatrij 5'-ribonukleotidi"],
  roles: [],
  children: []
}, {
  id: "en:e925",
  name: "Chlorine",
  es: "cloro",
  aliases: ["klór", "chlor", "klor", "Хлор", "cloro", "Chloor", "Clor", "kloru", "kloori", "χλώριο", "kloor", "chloras", "hlors", "Chlore", "Chlor", "Chlorine", "chlór"],
  roles: [],
  children: []
}, {
  id: "en:e161hi",
  name: "Zeaxanthin‚ synthetic",
  es: "Zeaxanthin‚ synthetic",
  aliases: ["Zeaxanthin‚ synthetic"],
  roles: [],
  children: []
}, {
  id: "en:e485",
  name: "Sodium stearoyl fumarate",
  es: "Sodio estearoil fumarato",
  aliases: ["Nātrija stearoilfumarāts", "Stearoyl-fumaran sodný", "Stearylofumaran sodu", "硬脂酰富马酸钠", "Fumarate de stéaroyle sodique", "Estearoil fumarato de sódio", "ステアロイルフマル酸ナトリウム", "Natriumstearoylfumarat", "Stearoil fumarato di sodio", "Sodium stearoyl fumarate", "Στεαροϋλο φουμαρικό νάτριο", "Natriumstearyylifumaraatti", "Naatriumstearüülfumaraat", "Natrio stearoilfumaratas", "ستيرويل فومارات الصوديوم", "Natrijev stearoil fumarat", "Estearoil fumarat de sodi", "Fumaratul de stearoil de sodiu", "Natriumstearoylfumaraat", "Стеароилфумарат натрия", "스테아로일 푸마르산 나트륨", "Натриев стеароил фумарат", "Sodio estearoil fumarato", "nátrium-sztearil-fumarát", "Stearoyl-fumarát sodný"],
  roles: [],
  children: []
}, {
  id: "en:e221",
  name: "Sodium sulphite",
  es: "Sulfito sódico",
  aliases: ["سدیم سولفیت", "Sulfit de sodiu", "Natri sunfit", "Natriumsulfiet", "Sulfit de sodi", "Natrijum sulfit", "Natrijev sulfit", "Sulfito sódico", "Натриев сулфит", "Natriumsulfit", "Nátrium-szulfit", "Siřičitan sodný", "Natria sulfito", "сульфит натрия", "Siričitan sodný", "亚硫酸钠", "Sulfito de sódio", "亜硫酸ナトリウム", "Sulfite de sodium", "Solfito di sodio", "Sodium sulphite", "Siarczyn sodu", "Натрий сульфити", "Nātrija sulfīts", "Sodyum sülfit", "โซเดียมซัลไฟต์", "Сульфіт натрію", "Նատրիումի սուլֆիտ", "Natrio sulfitas", "Naatriumsulfit", "كبريتيت الصوديوم", "Θειωδες νατριο", "Natriumsulfiitti", "Sulfit tas-sodju"],
  roles: ["antioxidant", "preservative"],
  children: []
}, {
  id: "en:e359",
  name: "ammonium adipate",
  es: "Adipato de amonio",
  aliases: ["Amonija adipināts", "Ammoniumadipat", "Adipato di ammonio", "ammonium adipate", "Adipates d'ammonium", "Adipato de amónio", "Adypinian amonu", "Amoniový adipát", "Adipat tal-ammonju", "Amonio adipatas", "Ammooniumadipaat", "Αμμωνιο αδιπικο", "Ammoniumadipaatti", "Amonijev adipat", "Ammoniumadipaat", "Adipat de amoniu", "Ammónium-adipát", "Амониев адипат", "Adipato de amonio"],
  roles: [],
  children: []
}, {
  id: "en:e163d",
  name: "Pelargonidin",
  es: "Pelargonidina",
  aliases: ["Pelargonidină", "پلارگونیدین", "Pelargonidine", "Pelargonidin", "פלרגונידין", "Pelargonidina", "Пеларгонидин", "펠라르고니딘", "Pelargonidino", "Pelargonidín", "Pelargonidyna", "飞燕草素", "ペラルゴニジン", "Pélargonidine", "Pelargonidīns", "Pelarqonidin", "Пеларгонідин", "เพลาร์โกนิดิน", "Pelargonidiini", "Πελαργονιδίνη", "Pelargonidinas", "Pelargoniin", "بيلارغونيدين"],
  roles: ["colour"],
  children: []
}, {
  id: "en:e161biii",
  name: "Lutein esters from Tagetes erecta",
  es: "Lutein esters from Tagetes erecta",
  aliases: ["Lutein esters from Tagetes erecta"],
  roles: [],
  children: []
}, {
  id: "en:e452",
  name: "Polyphosphates",
  es: "Polifosfatos",
  aliases: ["Polifosfatos", "Polifosfat", "polifoszfátok", "Полифосфати", "Polyfosfater", "Polifosfati", "פוליפוספטים", "Polyfosfaten", "پلی فسفات", "Polifosfați", "Polifosfatai", "Polyfosfaatit", "Polifosfatlar", "Polifosfāti", "Полифосфаты", "Polifosfatoj", "Polyfosforečnany", "폴리인산염", "e 452", "Polyphosphat", "polifosfat", "Polüfosfaadid", "متعدد الفوسفات", "Πολυφωσφορικά άλατα", "โพลีฟอสเฟต", "Поліфосфати", "Polyphosphater", "多磷酸盐", "Polifosfato", "ポリリン酸塩", "Polyphosphates", "Polyphosphate", "Polifosforany", "Polaifosfáit"],
  roles: ["emulsifier", "humectant", "sequestrant", "stabiliser", "thickener"],
  children: ["en:e452i", "en:e452ii", "en:e452iii", "en:e452iv", "en:e452v", "en:e452vi"]
}, {
  id: "en:e140",
  name: "Chlorophylls and Chlorophyllins",
  es: "Clorofilas y Clorofilinas",
  aliases: ["Chlorophyller og Chlorophylliner", "Chlorofilai ir Chlorofilinai", "Klorofüllid ja Klorofülliinid", "Klorofyllit ja Klorofylliinit", "Χλωροφύλλες και Χλωροφυλλίνες", "Klorofili i Klorofilini", "Klorofilli u Klorofillini", "Chlorofyly a Chlorofyllíny", "Chlorophylles et Chlorophyllines", "Clorofilas e Clorofilinas", "Chlorophylls and Chlorophyllins", "Clorofille e Clorofilline", "Chlorophylle und Chlorophylline", "Chlorofile i Chlorofiliny", "Hlorofili un Hlorofilīni", "Clorofilas y Clorofilinas", "Хлорофили и Хлорофилини", "Klorofyller och Klorofylliner", "Klorofillok és Klorofillinek", "Chlorofyly a Chlorofylliny", "Clorofile și Clorofilini", "Chlorofylen en Chlorofyllinen", "Clorofil·les i Clorofil·lines", "Klorofili in Klorofilini"],
  roles: ["colour"],
  children: ["en:e140i", "en:e140ii"]
}, {
  id: "en:e965",
  name: "maltitol",
  es: "maltitol",
  aliases: ["Maltitol", "مالتیتول", "මෝල්ටිටෝල්", "maltitol", "מלטיטול", "Малтитол", "Maltit", "Мальтит", "maltitolo", "麦芽糖醇", "マルチトール", "Maltīts", "Мальтитол", "Μαλτιτολες", "maltitoli", "Maltitolis", "Maltitool", "مالتيتول"],
  roles: ["emulsifier", "humectant", "stabiliser", "sweetener", "thickener"],
  children: ["en:e965i", "en:e965ii"]
}, {
  id: "en:e301",
  name: "Sodium ascorbate",
  es: "Ascorbato sódico",
  aliases: ["Natrijum askorbat", "Natrijev askorbat", "Ascorbat de sodi", "Ascorbat de sodiu", "اسکوربات سدیم", "Natriumascorbaat", "Natria askorbato", "Аскорбат натрия", "Natriumaskorbat", "Ascorbato sódico", "Натриев аскорбат", "Askorban sodný", "Nátrium-aszkorbát", "Sodyum askorbat", "Nātrija askorbāts", "Askorbinian sodu", "Ascorbato di sodio", "Natriumascorbat", "Sodium ascorbate", "Ascorbate de sodium", "Ascorbato de sódio", "natrijev askorbat", "Askorbat tas-sodju", "Аскорбат натрію", "Նատրիումի ասկորբատ", "Ασκορβικο νατριο", "Natriumaskorbaatti", "Naatriumaskorbaat", "Natrio askorbatas"],
  roles: ["antioxidant"],
  children: []
}, {
  id: "en:e501ii",
  name: "Potassium hydrogen carbonate",
  es: "Bicarbonato de potasio",
  aliases: ["гидрокарбонат калия", "Kalia bikarbonato", "పొటాషియం బైకార్బోనేట్", "Kálium-hidrogén-karbonát", "kaliumhydrogenkarbonat", "Kalijum bikarbonat", "Hydrogenuhličitan draselný", "Kaliumvätekarbonat", "Калиев хидроген карбонат", "Bicarbonato de potasio", "Kalijev hidrogenkarbonat", "பொட்டாசியம் பைகார்பனேட்", "Kaliumwaterstofcarbonaat", "Kali bicacbonat", "بی‌کربنات پتاسیم", "Bicarbonat de potasiu", "Karbonat idroġenat tal-potassju", "Kaliumvetykarbonaatti", "Οξινο ανθρακικο καλιο", "Kalio hidrokarbonatas", "Kaaliumvesinikkarbonaat", "पोटासियम बाइकार्बोनेट", "Kālija hidrogēnkarbonāts", "Wodorowęglan potasu", "Hidrogenocarbonato de potássio", "碳酸氢钾", "Carbonate acide de potassium", "炭酸水素カリウム", "Potassium hydrogen carbonate", "Carbonato acido di potassio", "Kaliumhydrogencarbonat"],
  roles: ["stabiliser"],
  children: []
}, {
  id: "en:e1405",
  name: "Enzyme treated starch",
  es: "Almidón tratado con enzimas", 
  aliases: ["Enzymaticky modifikovaný škrob", "Enzimekkel kezelt keményítő", "Almidón tratado con enzimas", "Ензимно обработен крахмал", "Enzymbehandlad stärkelse", "효소 처리 전분", "Midó tractat amb enzims", "Škrob obdelan z encimi", "Enzymatisch behandeld zetmeel", "Amidon tratat cu enzime", "Lamtu ttrattat bl-enzimi", "Fermentais apdorotas krakmolas", "Ensüümidega töödeldud tärklis", "نشا معالج بالإنزيمات", "Entsyymikäsitelty tärkkelys", "Ένζυμο-επεξεργασμένο άμυλο", "Enzimlə işlənmiş nişasta", "Enzymbehandlet stivelse", "Enzīmu apstrādāta ciete", "Amido trattato con enzimi", "Enzymatisch modifizierte Stärke", "Enzyme treated starch", "酵素処理デンプン", "酶处理淀粉", "Amido tratado enzimaticamente", "Amidon traité aux enzymes", "Skrobia modyfikowana enzymatycznie", "Enzymaticky modifikované škroby"],
  roles: ["emulsifier", "stabiliser", "thickener"],
  children: []
}, {
  id: "en:e530",
  name: "Magnesium oxide",
  es: "Óxido de magnesio",
  aliases: ["Magnesiumoksidi", "Magnio oksidas", "मैग्निसियम ऑक्साइड", "Magnija oksīds", "Magnesiwm ocsid", "Ossido di magnesio", "Magnesium oksida", "Magnesiumoksid", "Magnézium-oxid", "магнезијум оксид", "Magnesiumoxid", "Óxido de magnesio", "תחמוצת המגנזיום", "Magnezijum oksid", "Magnezijev oksid", "Magnesiumoxide", "اکسید منیزیم", "Oxid de magneziu", "Магнію аксід", "Ossidu tal-manjeżju", "Qunta", "Οξειδιο του μαγνησιου", "Magneesiumoksiid", "أكسيد المغنسيوم", "Оксид магнію", "Մագնեզիումի օքսիդ", "แมกนีเซียมออกไซด์", "Магнийн исэл", "Магний оксиди", "Tlenek magnezu", "Oxyde de magnésium Périclase", "Óxido de magnésio", "酸化マグネシウム", "Magnesium oxide", "Oxid horečnatý", "Оксид магния", "magnezia oksido", "Oxid hořečnatý", "산화 마그네슘", "Магнезиев оксид", "Òxid de magnesi", "Magiê ôxít", "Magniy oksid"],
  roles: [],
  children: []
}, {
  id: "en:e967",
  name: "Xylitol",
  es: "Xilitol",
  aliases: ["קסיליטול", "Ksilitol", "Xylitol", "زایلیتول", "Xilitol", "Xilit", "xylitol", "ксилитол", "Ksilīts", "Xilitolo", "Ksylitoli", "Ksilitolis", "Ksilit", "Ксилит", "자일리톨", "Ксилитол", "Ksylitol", "キシリトール", "Xylit", "Ксиліт", "ไซลิทอล", "Ξυλιτολη", "Ksülitool", "زيليتول"],
  roles: ["emulsifier", "humectant", "stabiliser", "sweetener", "thickener"],
  children: []
}, {
  id: "en:e540",
  name: "E540",
  es: "E540",
  aliases: [],
  roles: [],
  children: []
}, {
  id: "en:e340ii",
  name: "Dipotassium phosphate",
  es: "Fosfato dipotásico",
  aliases: ["Гидроортофосфат калия", "Kalia fosfato dubaza", "Dikalijum fosfat", "Hydrogenfosforečnan draselný", "Dikálium-foszfát", "Dikaliumfosfat", "Fosfato dipotásico", "Дикалиев фосфат", "இருபொட்டாசியம் பாசுபேட்டு", "Dikalijev fosfat", "Dikaliumfosfaat", "Dikali photphat", "Fosfat dipotasic", "دی‌پتاسیم فسفات", "Fosfat dipotassiku", "dikalijev fosfat", "Οξινο φωσφορικο καλιο", "Dikaliumfosfaatti", "Dikalio fosfatas", "Dikaaliumvesinikfosfaat", "دیپوتاسیوم فوسفات", "Dikaliumphosphat", "ไดโพแทสเซียมฟอสเฟต", "Dikālija fosfāts", "Fosforan dipotasowy", "Fosfato dipotassico", "Dipotassium phosphate", "磷酸氫二鉀", "Phosphate dipotassique", "Fosfato dipotássico", "リン酸水素二カリウム", "Fosforečnan didraselný"],
  roles: ["emulsifier", "humectant", "sequestrant", "stabiliser", "thickener"],
  children: []
}, {
  id: "en:e1421",
  name: "mono starch acetate",
  es: "mono acetato de almidón",
  aliases: ["моно нишесте ацетат", "mono acetato de almidón", "Acetylerat stärkelse", "mono keményítő-acetát", "mono škrobový acetát", "mono acetat de amidon", "mono zetmeelacetaat", "mono škrobni acetat", "mono stivelseacetat", "mono krakmolo acetatas", "mono tärklise atsetaat", "mono tärkkelysasetaatti", "μονο αμυλο οξικο ασετατ", "mono aċetat tal-lamtu", "mono-acétate d'amidon", "mono acetato de amido", "mono acetato di amido", "Mono-Stärkeacetat", "mono starch acetate", "mono octan skrobi", "mono cietes acetāts"],
  roles: ["emulsifier", "stabiliser", "thickener"],
  children: []
}, {
  id: "en:e905e",
  name: "Mineral oil medium viscosity",
  es: "Aceite mineral de viscosidad media",
  aliases: ["Ulei mineral cu vâscozitate medie", "Minerale olie met medium viscositeit", "Mineralno olje srednje viskoznosti", "Средновискозитно минерално масло", "Aceite mineral de viscosidad media", "Mineralolja med medelhög viskositet", "Közepes viszkozitású ásványi olaj", "Minerální olej střední viskozity", "Minerálny olej strednej viskozity", "Óleo mineral de viscosidade média", "Huile minérale de viscosité moyenne", "Olio minerale a viscosità media", "Mineral oil medium viscosity", "Mineralöl mittlere Viskosität", "Olej mineralny o średniej lepkości", "Vidējas viskozitātes minerālais eļļa", "Mineralolie med medium viskositet", "Vidutinės klampumo mineralinė alyva", "Keskmise viskoossusega mineraalõli", "Keskitiheyksinen mineraaliöljy", "Μέσης ιξώδους ορυκτό έλαιο", "Xibka ta' viskożità medja tal-ħalib"],
  roles: [],
  children: []
}, {
  id: "en:e440b",
  name: "E440b",
  es: "E440b",
  aliases: [],
  roles: ["emulsifier", "stabiliser", "thickener"],
  children: []
}, {
  id: "en:e163vii",
  name: "E163vii",
  es: "E163vii",
  aliases: [],
  roles: [],
  children: []
}, {
  id: "en:e130",
  name: "Indanthrene blue RS",
  es: "Azul indantreno RS",
  aliases: ["Indantrena zila RS", "Azul indantreno RS", "Manascorubine", "Blu indantrene RS", "Indanthron", "Indanthrene blue RS", "Błękit indantrenowy RS", "Indantronová modrá RS", "Blu indantren RS", "Indantreen sinine RS", "Indantreno mėlyna RS", "Indantreenisininen RS", "Ινδανθρένιο μπλε RS", "Indanthrenblå RS", "Blau d'antraquinona", "Indantrensko modro RS", "Indantronblauw RS", "Albastru indantren RS", "Indantrénkék RS", "Indantronová modř RS", "Индантрен син RS", "Indantrenblå RS"],
  roles: [],
  children: []
}, {
  id: "en:e101ii",
  name: "Riboflavin-5′-phosphate",
  es: "Riboflavina-5′-fosfato",
  aliases: ["Riboflavină-5′-fosfat", "3a825ii", "Riboflavine-5'-fosfaat", "Riboflavina-5′-fosfat", "Riboflavin-5'-fosfat", "Riboflavina-5′-fosfato", "Рибофлавин-5′-фосфат", "Riboflavin-5′-fosfat", "Riboflavin-5′-fosfát", "Riboflavin-5'-foszfát", "Riboflavín–5′–fosfát", "Riboflavin-5′-phosphate", "Riboflavin-5′-phosphat", "Riboflavine-5′-phosphate", "Ryboflawiny-5′-fosforan", "Riboflavīn-5′-fosfāts", "Riboflavin-5′-fosfatas", "Riboflaviin-5′-fosfaat", "Riboflaviini-5′-fosfaatti", "5′-φωσφορικη ριβοφλαβινη", "Riboflavina-5'-fosfat"],
  roles: ["colour"],
  children: []
}, {
  id: "en:e519",
  name: "Copper sulphate",
  es: "Sulfato de cobre",
  aliases: ["Kopparsulfat", "Sulfato de cobre", "Меден сулфат", "Réz-szulfát", "Síran měďnatý", "BakrovII sulfat", "Sulfat de cupru", "KoperIIsulfaat", "bakrov sulfat", "KobberIIsulfat", "Kuparisulfaatti", "Θειικός χαλκός", "Vasksulfaat", "Vara sulfāts", "Síran meďnatý", "siarczan miedziII", "Sulfate de cuivre", "Kupfersulfat", "Solfato rameico", "Copper sulphate"],
  roles: [], 
  children: []
}, {
  id: "en:e1101vi",
  name: "Proteases from Bacillus subtilis",
  es: "Proteases from Bacillus subtilis",
  aliases: ["Proteases from Bacillus subtilis"],
  roles: [],
  children: []
}, {
  id: "en:e266",
  name: "Sodium dehydroacetate",
  es: "Dehidroacetato de sodio",
  aliases: ["Nātrija dehidroacetāts", "Dehydrooctan sodu", "Deidroacetato de sódio", "Déhydroacétate de sodium", "Deidroacetato di sodio", "Natriumdehydroacetat", "Sodium dehydroacetate", "Sodný dehydroacetát", "Dehidroacetat tas-sodju", "Natriumdehydroasetaatti", "Νάτριο δευϊδροακετάτη", "Naatriumdehüdroatsetaat", "Natrio dehidroacetatas", "Natrijev dehidroacetat", "Natriumdehydroacetaat", "Dehidroacetat de sodiu", "Nátrium-dehidroacetát", "Натриев дехидроацетат", "Dehidroacetato de sodio"],
  roles: [],
  children: []
}, {
  id: "en:e953",
  name: "isomalt",
  es: "isomalt",
  aliases: ["isomalt", "Изомалт", "Izomalt", "изомалт", "Isomalt", "изомальтит", "ایزومالت", "Ізомальт", "isomalti", "ισομάλτ", "Izomaltas", "إسومالت", "izomalt", "iseamalt", "異麥芽酮糖醇", "Isomalte", "イソマルト", "isomalto", "Izomalts"],
  roles: ["stabiliser", "sweetener", "thickener"],
  children: []
}, {
  id: "en:e420ii",
  name: "Sorbitol syrup",
  es: "Jarabe de sorbitol",
  aliases: ["ġulepp tas-sorbitol", "Sorbitolisiirappi", "Σιροπι σορβιτολης", "sorbitoolisiirup", "sorbitolio sirupas", "Sorbitolsirup", "Sorbīta sīrups", "Syrop sorbitolowy", "xarope de sorbitol", "sirop de sorbitol", "Sorbitol syrup", "sciroppo di sorbitolo", "Sorbitsirup", "sorbitolový sirup", "Szorbitszirup", "Sorbitol sirup", "Sorbitolsirap", "сорбитол сироп", "Jarabe de sorbitol", "Sirup sorbitola", "Sorbitolstroop", "Sirop de sorbitol"],
  roles: ["humectant", "sequestrant", "stabiliser", "sweetener", "thickener"],
  children: []
}, {
  id: "en:e328",
  name: "ammonium lactate",
 es: "Lactato de amonio",
  aliases: ["Amonijev laktat", "Lactat de amoniu", "Ammoniumlactaat", "Ammoniumlaktat", "Лактат на амония", "Lactato de amonio", "Amoniový laktát", "Ammónium-laktát", "Amonija laktāts", "Mleczan amonu", "Ammonio lattato", "Ammoniumlactat", "ammonium lactate", "Lactate d'ammonium", "Lactato de amônio", "Lattat tal-ammonju", "Ammoniumlaktaatti", "Λακτικό αμμωνίου", "Amonio laktatas", "Ammooniumlaktaat"],
  roles: [],
  children: []
}, {
  id: "en:e306",
  name: "Tocopherol-rich extract",
  es: "Extracto rico en tocoferoles",
  aliases: ["Tokoferolban gazdag kivonat", "Extrakt s vysokým obsahem tokoferolů", "Токоферол-обогатен екстракт", "Extracto rico en tocoferoles", "Tokoferolrika extrakt", "концентрат смеси токоферолов", "1b306i", "Tocoferolrijk extract", "Extract bogat în tocoferol", "Extracte ric en tocoferols", "Izvleček", "Tokoferolių koncentruotas ekstraktas", "Tokoferoolikontsentraat", "Tokoferoliuute", "Εκχυλισμα πλουσιο σε τοκοφερολες", "Tocopherolrig ekstrakt", "Esratt rikk fit-tokoferol", "ekstrakt bogat tokoferolima", "Extracto rico em tocoferóis", "Extrait riche en tocophérols", "Stark tocopherolhaltige Extrakte", "Estratto ricco in tocoferolo", "Tocopherol-rich extract", "Mieszanina tokoferoli", "Extrakt s vysokým obsahom tokoferolu", "Tokoferola ekstrakts"],
  roles: [],
  children: []
}, {
  id: "en:e927",
  name: "Azodicarbonamide and Carbamide",
  es: "Azodicarbonamida y Carbamide",
  aliases: ["Azodicarbonamid a Karbamide", "Azodikarbonamid és karbamid", "Azodikarbonamid och Karbamid", "아조 디카르 본 아미드 및 카르 바 미드", "Azodicarbonamida y Carbamide", "Азодикарбонамид и Карбамид", "Azodicarbonamide kaj Carbamide", "Azodicarbonamide en Carbamide", "Azodicarbonamidă Carbamidă", "Azodikarbonamid in Karbamid", "Azodicarbonamida i Carbamide", "Αζοδικαρβοναμίδιο και Καρβαμίδιο", "Atsoformamidi and Karbamidi", "Azodikarbonamidas ir Karbamidas", "Asodikarbamiid ja Karbamiid", "أزوديكاربوناميد وكارباميد", "azodikarbonamid og karbamid", "Azodikarbonamid və Karbamid", "Азодикарбонамід і Карбамід", "Azodikarbamid i Karbamid", "Azodicarbonamid und Carbamide", "Azodicarbonammide e Carbamide", "Azodicarbonamide and Carbamide", "Azodicarbonamida e Carbamida", "偶氮二甲酰胺和卡巴胺", "Azoformamide et Carbamide", "アゾジカーボンアミドとカルバミド", "Azodikarbonamid a Karbamid", "Azodikarbamid ve Karbamid", "Azodikarbonamīds un Karbamīds"],
  roles: [],
  children: ["en:e927a", "en:e927b"]
}, {
  id: "en:e1101i",
  name: "E1101i",
  es: "E1101i",
  aliases: [],
  roles: [],
  children: []
}, {
  id: "en:e470ai",
  name: "Sodium salts of fatty acids",
  es: "Sales de sodio de ácidos grasos",
  aliases: ["Zsírsavak nátriumsói", "Натријумове соли масних киселина", "Kripërat e natriumit të acideve yndyrore", "Sales de sodio de ácidos grasos", "Натриумови соли на масни киселини", "Natriumsalter av fettsyror", "Sales de sodio de ácidos graxos", "Garam natrium asid lemak", "Garam natrium asam lemak", "Natriumzouten van vetzuren", "Săruri de sodiu ale acizilor grași", "Natrijeve soli maščobnih kislin", "מלחי נתרן של חומצות שומן", "Natrio riebalų rūgščių druskos", "Rasvahappojen natriumsuolat", "Yağ turşularının natrium duzları", "Sali di sodio degli acidi grassi", "वसा अम्ल के सोडियम लवण", "Natriumsalter av fettsyrer", "Taukskābju nātrija sāļi", "Sodné soli mastných kyselin", "Натриеви соли на мастни киселини", "지방산의 나트륨 염", "Натриевые соли жирных кислот", "Natriaj saloj de grasacidoj", "Sals de sodi dels àcids grassos", "أملاح الصوديوم للأحماض الدهنية", "Rasvhapete naatriumsoolad", "Άλατα νατρίου λιπαρών οξέων", "เกลือโซเดียมของกรดไขมัน", "Натрієві солі жирних кислот", "Natriumsalte af fedtsyrer", "Natrijeve soli masnih kiselina", "Imħlieħ tas-sodju tal-aċidi grassi", "Sais de sódio de ácidos gordos", "脂肪酸的钠盐", "Sels de sodium d'acides gras", "脂肪酸ナトリウム塩", "Sodium salts of fatty acids", "Natriumsalze der Speisefettsäuren", "Sole sodowe kwasów tłuszczowych", "Salain sóidiam d'aigéid shailleacha", "Sodné soli mastných kyselín", "Yağ asitlerinin sodyum tuzları"],
  roles: ["emulsifier", "stabiliser", "thickener"],
  children: []
}, {
  id: "en:e440i",
  name: "non-amidated pectin",
  es: "Pectina no amidada",
  aliases: ["Pectina no amidada", "Pectine non amidée", "non-amidated pectin", "Niet-geamideerde pectines"],
  roles: ["emulsifier", "stabiliser", "thickener"],
  children: ["en:e440a"]
}, {
  id: "en:e487",
  name: "sodium dodecyl sulfate",
  es: "Dodecilsulfato sódico",
  aliases: ["Natriumlauryylisulfaatti", "nátrium-lauril-szulfát", "Natrio laurilsulfatas", "Dodecylsíran sodný", "Natriumdodecylsulfat", "Natriumlaurylsulfat", "Dodecilsulfato sódico", "natriumdodecylsulfaat", "Laurylosiarczan sodu", "Dodecil sulfato de sódio", "Laurylsulfate de sodium", "sodium dodecyl sulfate", "Laurilsolfato di sodio", "Laurii sulfat de sodiu"],
  roles: [],
  children: []
}, {
  id: "en:e637",
  name: "Ethyl maltol",
  es: "Etil maltol",
  aliases: ["Ethyl maltol", "Etylo-maltol", "Etil maltol", "Éthyl maltol", "Etil maltolo", "Etil maltols", "Αιθυλο μαλτολη", "Etyylimaltoli", "Etüül maltol", "Etil maltolis", "Etylmaltol", "Етил малтол", "Etil-maltol"],
  roles: [],
  children: []
}, {
  id: "en:e368",
  name: "ammonium fumarate",
  es: "Fumarato de amonio",
  aliases: ["Ammoniumfumarat", "Φουμαρικό αμμώνιο", "Ammoniumfumaraatti", "Ammooniumfumaraat", "Ammonio fumaratas", "Fumarat tal-ammonju", "Fumarát amónny", "Fumaran amonu", "Fumarato di ammonio", "ammonium fumarate", "Fumarato de amónio", "Fumarate d'ammonium", "Amonija fumarāts", "Fumarato de amonio", "Фумарат на амония", "Fumarát amonný", "Ammónium-fumarát", "Fumarat de amoniu", "Ammoniumfumaraat", "Amonijev fumarat"],
  roles: [],
  children: []
}, {
  id: "en:e460ii",
  name: "Powdered cellulose",
  es: "Celulosa en polvo",
  aliases: ["Porított cellulóz", "Prášková celulosa", "Cellulosapulver", "Целулоза на прах", "Celulosa en polvo", "Cellulose in poedervorm", "Celuloză pulbere", "uprašena", "Selluloosajauhe", "Κονιοποιημενη κυτταρινη", "Miltelinė celiuliozė", "Pulbertselluloos", "Cellulosepulver", "Trab taċ-ċelluloża", "Celuloza sproszkowana", "Celulose em pó", "Cellulose en poudre", "Powdered cellulose", "Cellulosa in polvere", "Prášková celulóza", "Celulozes pulveris"],
  roles: ["carrier", "emulsifier", "humectant", "stabiliser", "thickener"],
  children: []
}, {
  id: "en:e226",
  name: "Calcium sulphite",
  es: "Sulfito cálcico",
  aliases: ["Calciumsulfiet", "Sulfit de calciu", "Kalcijev sulfit", "Sulfit de calci", "Kalcium-szulfit", "Siřičitan vápenatý", "Kalciumsulfit", "Калциев сулфит", "Sulfito cálcico", "Siarczyn wapnia", "Sulfite de calcium", "Sulfito de cálcio", "Calciumsulfit", "Solfito di calcio", "Calcium sulphite", "Siričitan vápenatý", "Kalcija sulfīts", "Θειωδες ασβεστιο", "Kalsiumsulfiitti", "Kalcio sulfitas", "Kaltsiumsulfit", "Sulfit tal-kalċju"],
  roles: [],
  children: []
}, {
  id: "en:e1000",
  name: "Cholic acid",
  es: "Ácido cólico",
  aliases: ["Holskābe", "Kolik asit", "Kwas cholowy", "Ácido cólico", "Acide cholique", "コール酸", "Cholsäure", "Acido colico", "Cholic acid", "Kyselina cholová", "Χολικό οξύ", "Koolihappo", "Cholio rūgštis", "Koolhape", "حمض الكوليك", "Холева кислота", "Xolik turşusu", "Cholsyre", "Holna kislina", "Àcid còlic", "Cholinezuur", "Acid colic", "Холевая кислота", "Kolska acido", "Kólsav", "Cholsyra", "Холева киселина"],
  roles: [],
  children: []
}, {
  id: "en:e242",
  name: "Dimethyl dicarbonate",
  es: "Dimetil dicarbonato",
  aliases: ["dimetil dikarbonat", "Dimetil dikarbonat", "dimethyldikarbonat", "Dimetilo dikarbonatas", "Dimetüüldikarbonaat", "ثنائي ميثيل ثنائي الكربونات", "Dimetyylidikarbonaatti", "Δικαρβονικος διμεθυλεστερας", "Dimetildikarbonāts", "Dimetyl-dikarbonát", "Dicarbonato de dimetilo", "二炭酸ジメチル", "Dicarbonate de diméthyle", "Dimethyl dicarbonate", "Dimetildicarbonato", "Dimethyldicarbonat", "Dimetylodiwęglan", "Диметил дикарбонат", "Dimetil dicarbonato", "Dimetyldikarbonat", "Dimetil-dikarbonát", "Dimethyldiuhličitan", "Dicarbonat de dimetil", "Dimetildikarbonat", "دی‌متیل دی‌کربنات", "Dimethyldicarbonaat"],
  roles: ["preservative"],
  children: []
}, {
  id: "en:e425ii",
  name: "Konjac glucomannan",
  es: "Glucomanano de konjac",
  aliases: ["Konjak glukomanan", "Konjak-glucomannan", "Glucomannano di konjac", "Konjac glucomannan", "Glucomanano de konjac", "Glucomannane de konjac", "Glukomannan konjac", '"konjac" glikomannāns', "Konjacglucomannan", "Rivieri titaanjuure glükomannaan", "Konjako gliukomananas", "Γλυκομαννανη konjac", "Konjak-glukomannaani", "Glukomannan tal-konjac", "Glucomanan konjac", "Konjacglucomannaan", "Konjac glukomanan", "Коняк глюкоманан", "Konjakglukomannan", "Konjakový glukomannan", "Konjak-glükomannán"],
  roles: ["carrier", "emulsifier", "humectant", "stabiliser", "thickener"],
  children: []
}, {
  id: "en:e402",
  name: "Potassium alginate",
  es: "Alginato de potasio",
  aliases: ["Kaaliumalginaat", "Kalio alginatas", "Αλγινικο καλιο", "Kaliumalginaatti", "Kaliumalginat", "Alġinat tal-potassju", "Alginato di potassio", "Potassium alginate", "Alginato de potássio", "Alginate de potassium", "Alginian potasu", "Alginát draselný", "Kālija algināts", "Alginan draselný synonyma", "Kálium-alginát", "Калиев алгинат", "Alginato de potasio", "Kaliumalginaat", "Alginat de potasiu", "Alginat de potassi", "Kalijev alginat"],
  roles: ["carrier", "emulsifier", "humectant", "sequestrant", "stabiliser", "thickener"],
  children: []
}, {
  id: "en:e472",
  name: "acid esters of mono- and diglycerides of fatty acids",
  es: "ésteres ácidos de mono- y diglicéridos de ácidos grasos",
  aliases: ["yağ turşularının mono- və digliseridlərinin turşu efirləri", "syreestere af mono- og diglycerider af fedtsyrer", "όξινοι εστέρες των μονο- και διγλυκεριδίων των λιπαρών οξέων", "Rasvahappojen esterien seokset", "riebalų rūgščių mono- ir digliceridų rūgšties esteriai", "rasvhapete mono- ja diglütseriidide happelised estrid", "استرات الأحماض الدهنية الأحادية وثنائية الجليسريد", "kiselinski esteri mono- i diglicerida masnih kiselina", "kyslé estery mono- a diglyceridov mastných kyselín", "estry kwasów tłuszczowych mono- i diglicerydów", "Esters d'acides gras alimentaires", "脂肪酸的单甘油酯和二甘油酯的酸酯", "ésteres ácidos de mono e diglicerídeos de ácidos gordos", "脂肪酸のモノグリセリドとジグリセリドの酸エステル", "Säureester von Mono- und Diglyceride von Speisefettsäuren", "esteri dei mono- e digliceridi degli acidi grassi", "acid esters of mono- and diglycerides of fatty acids", "taukskābju mono- un diglicerīdu skābie esteri", "yağ asitlerinin mono ve digiseridleri", "киселински естери на моно- и диглицериди на масни киселини", "syraestrar av mono- och diglycerider av fettsyror", "지방산의 모노글리세리드 및 디글리세리드의 산 에스테르", "киселинни естери на моно- и диглицериди на мастни киселини", "ésteres ácidos de mono- y diglicéridos de ácidos grasos", "Zsírsavak mono- és digliceridjeinek észterei", "kyselé estery mono- a diglyceridů mastných kyselin", "Ésteres de ácidos graxos alimentarios", "эфиры кислот моно- и диглицеридов жирных кислот", "esteri acizi ai mono- și digliceridelor acizilor grași", "Esters van mono- en diglyceriden", "kislinski estri mono- in digliceridov maščobnih kislin", "èsters àcids de mono- i diglicèrids d'àcids grassos"],
  roles: [],
  children: []
}, {
  id: "en:e111",
  name: "Orange GGN",
  es: "Naranja GGN",
  aliases: ["Πορτοκαλί GGN", "Oranssi GGN", "Oranžinė GGN", "Oranž GGN", "Orange GGN", "Oranġjo GGN", "Oranż GGN", "Laranja GGN", "Arancione GGN", "Oranžový GGN", "Oranžs GGN", "Naranja GGN", "Оранжев GGN", "Oranje GGN", "Portocaliu alfa-naftol", "Oranžna GGN", "Taronja GGN"],
  roles: [],
  children: []
}, {
  id: "en:e309",
  name: "Delta-tocopherol",
  es: "Delta-tocoferol",
  aliases: ["delta-tokoferols", "Delta-tokoferol", "delta-tokoferol", "δ-生育酚", "Delta-tocophérol de synthèse", "delta-tocoferol", "デルタ-トコフェロール", "Delta-Tocopherol", "delta-tocoferolo", "Delta-tocopherol", "delta-Tokoferol", "เดลตา-โทโคฟีรอล", "Дельта-токоферол", "delta-tokoferolis", "Delta-tokopherol", "إي 309، دلتا توكوفيرول", "Delta-tokoferoli", "Δέλτα-τοκοφερόλη", "δ-tocoferol", "Delta-tocoferol", "Делта-токоферол", "델타-토코페롤"],
  roles: [],
  children: []
}, {
  id: "en:e537",
  name: "ferrous hexacyanomanganate",
  es: "hexacianomanganato ferroso",
  aliases: ["rauaheksatsüanomanganaat", "geležies heksacianomanganatas", "σιδηρούχο εξακυανομαγγανικό", "Rautaheksasyanomanganaatti", "ferro hexacyanomanganat", "dzelzs heksacianomangānāts", "ferrous hexacyanomanganate", "esacianomanganato ferroso", "ferrohexacyanomanganat", "hexacianomanganato ferroso", "hexacyanomanganate ferreux", "heksacyjanomanganianII żelazawy", "železný hexacyanomanganát", "vas-hexacyanomagnát", "ферозен хексацианоманганат", "železov heksacianomanganat", "ferrohexacyanomanganaat", "hexacianomanganat ferros"],
  roles: [],
   children: []
}, {
  id: "en:e150d",
  name: "Sulphite ammonia caramel",
  es: "Caramelo de sulfito amónico",
  aliases: ["Caramel cu sulfit de amoniu", "Sulfiet-ammoniakkaramel", "Amonijev sulfitni karamel", "Карамел амониев сулфит", "Caramelo de sulfito amónico", "ammoniaksulfitprocessen", "Amoniak-sulfitový karamel", "Szulfitos ammóniás karamell", "карамель сульфата аммиака", "Caramello solfito-ammoniacale", "Ammonsulfit-Zuckerkulör", "Sulphite ammonia caramel", "Caramelo sulfítico de amónia", "Caramel au sulfite d'ammonium", "Karmel amoniakalno-siarczynowy", "Sülfit amonyak karamel", "Amonija sulfīta karamele", "Ammonieret sulfiteret karamel", "Ammooniumsulfitkaramell", "Sulfitinė amoniakinė karamelė", "Ammoniumsulfiittimenetelmän sokerikulööri", "Εναμμωνιο θειωδες καραμελοχρωμα", "Karamella tal-ammonja tas-sulfit", "bojilo sulfitno amonijačni karamel"],
  roles: ["colour"],
  children: []
}, {
  id: "en:e351",
  name: "Potassium malate",
  es: "Malato potásico",
  aliases: ["Kálium-malát", "Jablečnan draselný", "Калиев малат", "Malato potásico", "Kaliummalat", "Kaliummalaat", "Malat de potasiu", "Malat de potassi", "Kalijev malat", "Kalio malatas", "Kaaliummalaat", "Kaliummalaatti", "Μηλικο καλιο", "Malat tal-potassju", "Malato de potássio", "Malate de potassium", "Potassium malate", "Malato di potassio", "Jabłczan potasu", "Jablčnan draselný", "Kālija malāts"],
  roles: [],
  children: ["en:e351i", "en:e351ii"]
}, {
  id: "en:e545",
  name: "E545",
  es: "E545",
  aliases: [],
  roles: [],
  children: []
}, {
  id: "en:e516",
  name: "Calcium sulphate",
  es: "Sulfato de calcio",
  aliases: ["Kalsium sulfat", "కాల్సియం సల్ఫేట్", "Kalciumsulfat", "Sulfato de calcio", "Кальций сульфаты", "Kalcium-szulfát", "калцијум-сулфат", "Kalcijum sulfat", "סידן גופרתי", "Kalcijev sulfat", "கால்சியம் சல்பேட்டு", "Sulfaayt kelkium", "کلسیم سولفات", "сульфат кальцыю", "Sulfat de calciu", "Calciumsulfaat", "Kalsiumsulfaatti", "Kalcio sulfatas", "Kalcija sulfāts", "कैल्सियम सल्फेट", "Solfato di calcio", "황산 칼슘", "Калциев сулфат", "Síran vápenatý", "Sulfat de calci", "Canxi sulfat", "Kalsiumsulfat", "ক্যালসিয়াম ফসফেট", "Sulfat tal-kalċju", "Կալցիումի սուլֆատ", "Сульфат кальцію", "Calciumsulfat", "แคลเซียมซัลเฟต", "Θειικο ασβεστιο", "Kaltsiumsulfaat", "كبريتات الكالسيوم", "Kalsiyum sülfat", "Siarczan wapnia", "Sulfato de cálcio", "硫酸カルシウム", "Sulfate de calcium", "Calcium sulphate"],
  roles: ["sequestrant", "stabiliser"],
  children: []
}, {
  id: "en:e1207",
  name: "Anionic methacrylate copolymer",
  es: "Anionic methacrylate copolymer",
  aliases: ["Copolymère de méthacrylate anionique", "Anionic methacrylate copolymer"],
  roles: [],
  children: []
}, {
  id: "en:e161g", 
  name: "Canthaxanthin",
  es: "Cantaxantina",
  aliases: ["Кантаксантин", "Cantaxantina", "Kantaxantin", "Kanthaxanthin", "Kantaksantin", "Cantaxantină", "Canthaxanthine", "Kantaksantina", "Canthaxanthin", "Kantaksantinas", "Kantaksantiin", "Kantaksantiini", "Κανθαξανθινη", "Kantaksantīns", "Kantaxantín", "Kantaksantyna"],
  roles: ["colour"],
  children: []
}, {
  id: "en:e640",
  name: "Glycine and its sodium salt",
  es: "Glicina y su sal sódica",
  aliases: ["Glicīns un tā nātrija sāls", "Glycín a jeho sodná soľ", "Glicyna i jej sól sodowa", "Glicina e seu sal de sódio", "Glycines et son sel de sodium", "Glicina e suo sale di sodio", "Glycine and its sodium salt", "Glycin und seine natriumsalze", "Gliċina u l-melħ tas-sodju tagħha", "Glycin og natriumsaltet heraf", "Γλυκινη και τα αλατα της με νατριο", "Glysiini ja sen natriumsuola", "Glütsiin ja glütsiini naatriumsool", "Glicinas ir jo natrio druska", "Glicin in njegova natrijeva sol", "Glicina i la seva sal de sodi", "Glicina și sarea sa de sodiu", "Glycine en natriumglycinaat", "Glycin och natriumglycinat", "Глицин и натриевата му сол", "Glicina y su sal sódica", "Glicin és nátriumsója", "Glycin a jeho sodná sůl"],
  roles: [],
  children: ["en:e640i", "en:e640ii"]
}, {
  id: "en:e413",
  name: "Tragacanth",
  es: "Goma tragacanto",
  aliases: ["Tragakanta", "Tragacanth", "Gomma adragante", "Traganth", "Tragacanto", "トラガカント", "Gomme de dragon", "Tragant", "Kitre", "Tragakants", "Τραγανκανθινο κομμι", "Tragantti", "Tragakantas", "Tragakant", "صمغ الكثيراء", "Трагакант", "Anzirat goʻshtxoʻr", "Adragant", "کتیرا", "Goma tragacant", "Tragakanto", "Tragantmézga", "Трагаканта", "Dragant", "Goma tragacanto"],
  roles: ["emulsifier", "stabiliser", "thickener"],
  children: []
}, {
  id: "en:e334",
  name: "L(+)-tartaric acid",
  es: "Ácido tartárico",
  aliases: ["टार्टरिक अम्ल", "L(+)-vīnskābe", "L(+)-acido tartarico", "Asid tartarig", "Vyno rūgštis (l(+)-)", "L(+)-viinihappo", "Vinska kiselina", "Vinska kislina (l (+) -)", "חומצה טרטרית", "Azido tartariko", "L(+)-wijnsteenzuur", "Acid l(+)- tartric", "اسید تارتاریک", "Ácido tartárico", "Asam tartarat", "టార్టారిక్ ఆమ్లం", "винска киселина", "L(+)-borkősav", "Винска киселина", "L(+)-vinsyra", "Tartarik asit", "တာတာရစ် အက်ဆစ်", "L(+)-Weinsäure", "L(+)-tartaric acid", "Ácido l(+)-tartárico", "Acide L-tartrique", "Kwas winowy l(+)", "Aigéad tartarach", "Kyselina l-(+)-vínna", "L(+)-aċidu tartariku", "vinska", "ടാർട്ടാറിക് അമ്ലം", "টারটারিক অ্যাসিড", "L(+)-viinhape", "حمض الطرطريك", "L(+)-τρυγικο οξυ", "Գինեթթու", "Винна кислота", "àcid L(+)-tartàric", "Vino kislota", "Tartrata acido", "L(+)-kyselina vinná", "L(+)-винена киселина", "타타르산"],
  roles: ["antioxidant", "sequestrant"],
  children: []
}, {
  id: "en:e952ii",
  name: "Calcium cyclamate",
  es: "Calcium cyclamate",
  aliases: ["Calcium cyclamate"],
  roles: [],
  children: []
}, {
  id: "en:e445i",
  name: "Glycerol ester of gum rosin",
  es: "Glycerol ester of gum rosin",
  aliases: ["Glycerol ester of gum rosin"],
  roles: [],
  children: []
}, {
  id: "en:e424",
  name: "Curdlan",
  es: "Curdlan",
  aliases: ["Кърдлан", "Curdlan", "Курдлан", "Kurdlano", "קורדלן", "เคอร์แดลน", "Kürdlan", "Kurdlanas", "Kurdlaan", "كوردلان", "Κουρντλάν", "Kurdlan", "Curdlana", "凝胶多糖", "カードラン", "Kurdlāns", "कर्डलन"],
  roles: ["stabiliser", "thickener"],
  children: []
}, {
  id: "en:e356",
  name: "Sodium adipate",
  es: "Adipato de sodio",
  aliases: ["Natriumadipaat", "Adipat de sodiu", "Natrijev adipat", "Adipat de sodi", "Adipan sodný synonyma", "Nátrium-adipát", "Natriumadipat", "Adipato de sodio", "Натриев адипат", "Adypinian sodu", "Adipato di sodio", "Sodium adipate", "Adipate de sodium", "Adipato de sódio", "Adipan sodný", "Nātrija adipināts", "Αδιπικο νατριο", "Natriumadipaatti", "Natrio adipatas", "Naatriumadipaat", "Adipat tas-sodju"],
  roles: [],
  children: []
}, {
  id: "en:e920",
  name: "l-cysteine",
  es: "L-cisteína",
  aliases: ["L cisteīns", "L-Sistein", "L-cysteina", "L-cisteína", "L-Cystéine et ses chlorhydrates", "L-システイン", "l-cysteine", "L-cisteina", "L-cystein", "L-cysteín", "L-cistein", "L-ċisteina", "L-κυστεϊνη", "L-kysteiini", "L-tsüsteiin", "L-cisteinas", "L-ցիստեին", "L-Цистеїн", "L-Cistein", "L-சிஸ்டீன்", "L-cisteïna", "L-cysteïne", "L-Cystein", "L-Zisteina", "L-cisteină", "L-Cisteína", "L-Цистеин", "L-cisztein", "L-цистеин"],
  roles: [],
  children: []
}, {
  id: "en:e912",
  name: "Montanic acid esters",
  es: "Ésteres de ácido montánico",
  aliases: ["Esteri tal-aċidu montaniku", "Montansyreestere", "Montano rūgšties esteriai", "Montaanhappe estrid", "Montaanahapon esterit", "Εστερες του μοντανικου οξεος", "Montānskābes esteri", "Estery kyseliny montánovej", "Ester de l'acide montanique", "Ésteres do ácido montânico", "Montansäureester", "Esteri dell'acido montanico", "Montanic acid esters", "Estry kwasu montanowego", "Естери на монтановата киселина", "Ésteres de ácido montánico", "Montansyraestrar", "Montánsav-észterek", "Montan acid esters", "Èster d'àcid montànic", "Estri montanske kisline", "Esteri ai acidului montanic", "Esters van montaanzuur"],
  roles: [],
  children: []
}, {
  id: "en:e1203",
  name: "Polyvinyl alcohol",
  es: "Alcohol polivinílico",
  aliases: ["Polivinilspirts", "Alcol polivinilico", "Polyvinylalkohol", "Polyvinyl alcohol", "Poli(álcool vinílico) (pva)", "Alcool polyvinylique", "Alkohol poliwinylowy", "Alkoħol poliviniliku", "Polivinilo alkoholis", "Polüvinüülalkohol", "Πολυβινυλικη αλκοολη", "Polyvinyylialkoholi", "Polivinil alkohol", "Polyvinylalcohol", "Alcool polivinilic", "Polyvinylalkohol (pva)", "Poli(vinil-alkohol)", "Поливинил алкохол", "Alcohol polivinílico"],
  roles: ["thickener"],
  children: []
}, {
  id: "en:e630",
  name: "Inosinic acid",
  es: "E630",
  aliases: ["Inozinska kislina", "Àcid inosínic", "Acid inozinic", "Inosinezuur", "Inosinsyra", "Инозинова киселина", "Inozinsav", "Inosinová kyselina", "Inozīnskābe", "Kyselina inozínová", "Kwas inozynowy", "Acide inosinique", "Ácido inosínico", "Acido inosinico", "Inosinsäure", "Inosinic acid", "Aċidu inosiniku", "Inosinsyre", "Inosiinihappo", "Ινοσινικο οξυ", "Inosiinhape", "Inozino rūgštis"],
  roles: [],
  children: []
}, {
  id: "en:e344",
  name: "Lecithin citrate",
  es: "Citrato de lecitina",
  aliases: ["Lecitin citrat", "Citrat de lecitină", "Lecithinecitraat", "Лецитин цитрат", "Citrato de lecitina", "Lecitin citrát", "Lecitīna citrāts", "Lecitín citrát", "Cytrynian lecytyny", "Citrate de lécithine", "Citrato di lecitina", "Lecithin Citrat", "Lecithin citrate", "Ċitrat tal-leċitina", "Lecithin citrat", "Λεκιθίνη κιτρική", "Lesitiinisitraatti", "Letsitiin tsitraat", "Lecitino citratas"],
  roles: [],
  children: []
}, {
  id: "en:e161f",
  name: "Rhodoxanthin",
  es: "Rodoxantina",
  aliases: ["โรดอกแซนทีน", "Родоксантин", "Rhodoxanthin", "Rodoksantinas", "Rodoksantiin", "رودوكسانثين", "Ροδοξανθίνη", "Rodoksantiini", "Rodoksantīns", "Rodoksantin", "Rodoxantín", "Rhodoxanthine", "Rodoxantina", "ロドキサンチン", "Rodoksantyna", "로독산틴", "Rodoxantin", "Rhodoxantin", "Rodoxantină"],
  roles: [],
  children: []
}, {
  id: "en:e172i",
  name: "Black iron oxide",
  es: "Óxido de hierro negro",
  aliases: ["Oxid de fier negru", "Zwart ijzeroxide", "Črni železov oksid", "Черен оксид на желязо", "Óxido de hierro negro", "Svart järnoxid", "Fekete vas-oxid", "Černý oxid železa", "Čierny oxid železa", "Óxido de ferro preto", "Oxyde de fer noir", "Ossido di ferro nero", "Eisenoxidschwarz", "Black iron oxide", "Czarny tlenek żelaza", "Melnais dzelzs oksīds", "Sort jernoxid", "Must rauaoksiid", "Juodasis geležies oksidas", "Μαύρος οξείδιο του σιδήρου", "Musta rautaoksidi", "Ossidu iswed tal-ħadid"],
  roles: ["colour"],
  children: []
}, {
  id: "en:e307a",
  name: "D-Alpha-tocopherol",
  es: "D-Alpha-tocoferol",
  aliases: ["D-Alpha-tocoferol", "D-Alpha-tokoferol", "D-Alpha-токоферол", "D-alpha-tocophérol", "D-Alpha-tocopherol", "D-Alpha-tocoferolo", "D-Alpha-Tocopherol", "D-Alpha-tokoferols", "D-Alpha-tokoferool", "D-Alpha-tokoferolis", "D-Alpha-τοκοφερόλη", "D-Alfa-tokoferoli"],
  roles: ["antioxidant"],
  children: []
}, {
  id: "en:e535",
  name: "Sodium ferrocyanide",
  es: "Ferrocianuro de sodio",
  aliases: ["Nātrija ferocianīds", "Ferrocianeto de sódio", "Ferrocyanure de sodium", "Ferrocianuro di sodio", "Sodium ferrocyanide", "Natriumferrocyanid", "Żelazocyjanek sodu", "Ferokyanid sodný", "Ferroċjanur tas-sodju", "Naatriumheksatsüanoferraatii", "Natrio ferocianidas", "Σιδηροκυανιουχο νατριο", "Natriumferrosyanidi", "Ferrocianur de sodi", "Natrijev ferocianid", "Natriumhexacyanoferraatii", "Ferocianură de sodiu", "Nátrium-ferro-cianid", "Hexakyanoželeznatan sodný", "Натриев фероцианид", "Ferrocianuro de sodio"],
  roles: [],
  children: []
}, {
  id: "en:e335ii",
  name: "Disodium tartrate",
  es: "Tartrato disódico", 
  aliases: ["Dinātrija tartrāts", "Tartrato disodico", "Disodium tartrate", "Dinatriumtartrat", "Tartrate disodique", "Tartarato dissódico", "Winian disodowy", "Vínan disodný", "Tartrat disodiku", "Naatriumtartraat", "Dinatrio tartratas", "Τρυγικο νατριο", "Dinatriumtartraatti", "Dinatrijev tartrat", "Dinatriumtartraat", "Tartrat disodic", "Vinan disodný", "Dinátrium-tartarát", "Динатриев тартарат", "Tartrato disódico"],
  roles: ["sequestrant", "stabiliser"],
  children: []
}, {
  id: "en:e160c",
  name: "Paprika extract",
  es: "Extracto de pimentón",
  aliases: ["Экстракт паприки", "Paprikaoleoresin", "Extracto de pimentón", "Паприка екстракт", "Paprikakivonat", "Paprikový extrakt", "Izvleček paprike", "Capsantina", "Extract de ardei roșu", "Paprika-extract", "Paprikaekstrakt", "Estratt tal-paprika", "Paprikaekstrakt (capsanthin og capsorubin)", "Paprikauute", "Εκχυλισμα παπρικας", "Paprikų ekstraktas", "Paprikas ekstrakts", "Paprika ekstraktı", "Ekstrakt z papryki", "Extrait de paprika", "Extracto de pimentão", "パプリカ色素", "Estratto di paprica", "Paprika extract", "Paprikaextrakt (Capsanthin und Capsorubin)"],
  roles: ["colour"],
  children: ["en:e160ci", "en:e160cii"]
}, {
  id: "en:e464",
  name: "Hydroxypropyl methyl cellulose",
  es: "Hidroxipropilmetilcelulosa",
  aliases: ["Hidroksipropilmetilceliuliozė", "Hüdroksüpropüülmetüültselluloos", "هيدروكسي بروبيل ميثيل سيللوز", "Hydroksipropyylimetyyliselluloosa", "Υδροξυπροπυλομεθυλοκυτταρινη", "Hydroxypropylmethylcellulose", "Ċelluloża metilika idrossipropilika", "hidroksipropil metil celuloza", "Hidroxipropilmetilcelulose", "羟丙甲纤维素", "ヒプロメロース", "Hydroxypropylméthylcellulose", "Idrossipropilmetilcellulosa", "Hydroxypropyl methyl cellulose", "Hydroksypropylometyloceluloza", "Hydroxypropylmetylcelulóza", "Hidroksipropilmetilceluloze", "Hidroxi-propil-metil-cellulóz", "Hipromeloza", "Hydroxypropylmethylcelulosa", "Hidroxipropilmetilcelulosa", "Хидроксипропил метил целулоза", "Хипермелоза", "Hydroxipropylmetylcellulosa", "하이프로멜로스", "Метилоксипропилцеллюлоза", "Hydroxypropyl methylcellulose", "اشک مصنوعی", "Hidroxipropilmetilceluloză", "Hidroxipropilmetilcel·lulosa", "Hidroksipropilmetil celuloza"],
  roles: ["emulsifier", "stabiliser", "thickener"],
  children: []
}, {
  id: "en:e960",
  name: "Steviol glycosides",
  es: "Glucósidos de esteviol",
  aliases: ["Glicòsid d'esteviol", "Steviol glikozidi", "சிடீவியால் கிளைகோசைடு", "Glicozide steviolice", "Steviolglycosiden", "Glucósidos de esteviol", "Стевиол гликозиди", "Steviolglykosider", "Szteviol-glikozidok szinonimák", "steviol glikozidi", "Steviol-glykosidy", "Steviolglikozīdi", "Glykozidy steviolu synonymá", "Glicósidos de esteviol", "ステビア", "Glucosides de stéviol", "Steviolglycoside", "Glicosidi dello steviolo", "Steviol glycosides", "Glikozydy stewiolowe", "steviol glikozid", "Glikosidi tal-istevjol", "Steviolglycosider", "Steviolio glikozidai", "Steviooglükosiidid", "Γλυκοζιτες στεβιολης συνώνυμα", "Stevioliglykosidit"],
  roles: ["sweetener"], 
  children: []
}, {
  id: "en:e903",
  name: "Carnauba wax",
  es: "Cera de carnauba",
  aliases: ["Карнаубский воск", "palma vakso", "carnauba voks", "Karnaubaviasz", "карнауба восак", "Karnaubský vosk", "Cera de carnauba", "Карнаубов восък", "Karnaubavax", "Karnauba vosek", "ווקס קרנובה", "Carnaubawas", "موم نخل", "Ceară de carnauba", "karnuba vosak", "Xama' tal-karnawba", "Karnaubavoks", "شمع الخارنوبا", "Karnaubo vaškas", "Karnaubavaha", "Καρναουβικος κηρος", "ไขคาร์นอบา", "Карнаубський віск", "Carnaubavoks", "कार्नायूबावैक्स", "Karnaubvasks", "Cire de carnauba", "Cera de carnaúba", "Cera carnauba", "Carnauba wax", "Carnaubawachs", "Wosk carnauba"],
  roles: ["carrier"],
  children: []
}, {
  id: "en:e232",
  name: "Sodium orthophenyl phenol",
  es: "Ortofenilfenato sódico",
  aliases: ["Ortofenylofenolan sodu", "邻苯基苯酚钠", "Orthophénylphénate de sodium", "Ortofenilfenol de sódio", "オルトフェニルフェノールナトリウム", "Sodium orthophenyl phenol", "Ortofenilfenolo di sodio", "Natriumorthophenylphenol", "Sodná soľ ortofenylfenolu", "Nātrija ortofenilfenols", "Ορθοφαινυλοφαινόλη νατρίου", "Natriumortofenyylifenoli", "Natrio ortofenilfenolis", "Naatriumortofenüülfenool", "أورثو فينيل فينول الصوديوم", "Natriumfenylfenol", "Ortofenilfenolat de sodiu", "Natrijev ortofenilfenol", "Ortofenilfenolat de sodi", "Nátrium-ortofenil-fenol", "Orthofenylfenolát sodný", "오르토페닐페놀 나트륨", "Natriumortofenylfenol", "Ortofenilfenato sódico", "Натриев ортофенил фенол", "Ортофенилфенолят натрия"],
  roles: ["preservative"],
  children: []
}, {
  id: "en:e511",
  name: "Magnesium chloride",
  es: "Cloruro de magnesio",
  aliases: ["Magnesiumchlorid", "Magnesiumkloridi", "Χλωριουχο μαγνησιο", "Magnio chloridas", "Magneesiumkloriid", "Klorur tal-manjeżju", "Chlorid horečnatý", "Chlorek magnezu", "Cloruro di magnesio", "Magnesium chloride", "Cloreto de magnésio", "塩化マグネシウム", "Chlorure de magnésium", "Magnija hlorīds", "Magnesiumklorid", "Магнезиев хлорид", "Cloruro de magnesio", "Chlorid hořečnatý", "Magnézium-klorid", "Clorură de magneziu", "Magnesiumchloride", "Magnezijev klorid", "Clorur de magnesi"],
  roles: ["stabiliser", "coagulant"],
  children: []
}, {
  id: "en:e213",
  name: "Calcium benzoate",
  es: "Benzoato cálcico",
  aliases: ["Kalcija benzoāts", "Benzoan vápenatý", "Benzoate de calcium", "Benzoato de cálcio", "Benzoato di calcio", "Calcium benzoate", "Calciumbenzoat", "Benzoesan wapnia", "Benżoat tal-kalċju", "Kaltsiumbensoaat", "Kalcio benzoatas", "Kalsiumbentsoaatti", "Βενζοϊκο ασβεστιο", "Benzoat de calci", "Kalcijev benzoat", "Benzoat de calciu", "Calciumbenzoaat", "Калциев бензоат", "Benzoato cálcico", "Kalciumbensoat", "Kalcium-benzoát", "Benzoát vápenatý"],
  roles: ["preservative"],
  children: []
}, {
  id: "en:e481ii",
  name: "Sodium oleyl lactylate",
  es: "Sodium oleyl lactylate",
  aliases: ["Sodium oleyl lactylate"],
  roles: [],
  children: []
}, {
  id: "en:e469",
  name: "Enzymatically hydrolysed carboxymethylcellulose",
  es: "Carboximetilcelulosa hidrolizada enzimáticamente",
  aliases: ["Carboximetilcel·lulosa hidrolitzada enzimàticament", "Encimsko hidrolizirana karboksimetil celuloza", "Enzymatisch gehydrolyseerde carboxymethylcellulose", "Carboximetilceluloză hidrolizată enzimatic", "Enzimesen hidrolizált karboxi-metil-cellulóz", "Enzymově hydrolyzovaná karboxymethylcelulosa", "Carboximetilcelulosa hidrolizada enzimáticamente", "Ензимно хидролизирана карбоксиметил целулоза", "Enzymatiskt hydrolyserad karboximetylcellulosa", "Fermentatīvi hidrolizēta karboksimetilceluloze", "Carboxyméthylcellulose hydrolysée de manière enzymatique", "Carboximetilcelulose hidrolisada enzimaticamente", "Carbossimetilcellulosa idrolizzata enzimaticamente", "Enzymatisch hydrolysierte carboxymethylcellulose", "Enzymatically hydrolysed carboxymethylcellulose", "Enzymatycznie zhydrolizowana karboksymetyloceluloza", "Enzymaticky hydrolyzovaná karboxymetylcelulóza", "Karbossimetilċelluloża idrolizzata bl-enżimi", "Fermentais hidrolizuota karboksimetilceliuliozė", "Ensümaatiliselt hüdrolüüsitud karboksümetüültselluloos", "Entsymaattisesti hydrolysoitu karboksimetyyliselluloosa", "Ενζυμικα υδρολυμενη καρβοξυμεθυλοκυτταρινη", "Enzymatisk hydroliseret carboxymethylcellulose (enzymatisk hydrolyseret cellulosegummi)"],
  roles: ["stabiliser", "thickener"],
  children: []
}, {
  id: "en:e553iii",
  name: "E553iii",
  es: "E553iii",
  aliases: [],
  roles: [],
  children: []
}, {
  id: "en:e349",
  name: "ammonium malate",
  es: "Malato de amonio",
  aliases: ["苹果酸铵", "Malate d'ammonium", "Malato de amónio", "リンゴ酸アンモニウム", "ammonium malate", "Malato di ammonio", "Ammoniummalat", "Jabłczan amonu", "Jablčnan amónny", "Amonija malāts", "Ammooniummalaat", "Amonio malatas", "مالات الأمونيوم", "Ammoniummalaatti", "Μηλικό αμμώνιο", "Ammonium malat", "Malat tal-ammonju", "Ammoniummalaat", "Malat de amoniu", "Malat d'amoni", "Amonijev malat", "Ammónium-malát", "Jablečnan amonný", "Malato de amonio", "Амониев малат", "말산 암모늄", "Малат аммония", "Amonia malato"],
  roles: [],
  children: []
}, {
  id: "en:e202",
  name: "Potassium sorbate",
  es: "Sorbato potásico",
  aliases: ["Сорбат калію", "Kaliumsorbat", "Σορβικο καλιο", "Kaliumsorbaatti", "Kaaliumsorbaat", "Kalio sorbatas", "kalijev sorbat", "Sorbat tal-potassju", "Sorban draselný", "Sorbinian potasu", "Sorbate de potassium", "山梨酸钾", "Sorbato de potássio", "ソルビン酸カリウム", "Sorbato di potassio", "Potassium sorbate", "Kālija sorbāts", "Potasyum sorbat", "Калиев сорбат", "Sorbato potásico", "Kálium-szorbát", "kaliumsorbat", "kalijum-sorbat", "Kalia sorbato", "Сорбат калия", "پتاسیم سوربات", "Kalíumsorbat", "Sorbat de potasiu", "Kaliumsorbaat", "Kali Sorbate", "1k202", "אשלגן סורבט", "Kalijev sorbat", "Kalij sorbat", "Sorbat de potassi"],
  roles: ["preservative"],
  children: []
}, {
  id: "en:e1400",
  name: "Dextrin",
  es: "Dextrina",
  aliases: ["Dekstrinlar", "Dextrin", "Dextrina", "Декстрин", "덱스트린", "декстрин", "Deistrin", "Dextríny", "Dextrines", "デキストリン", "Dextrine", "Декстриндер", "Dekstrin", "dekstrin", "دكسترين", "Δεξτρίνες", "ഡെക്സ്ട്രിൻ", "دکسترین", "Dextrină", "Дэкстрын", "Destrina", "Dextrino", "Dekstriini"],
  roles: ["carrier", "emulsifier", "stabiliser", "thickener"],
  children: []
}, {
  id: "en:e418ii",
  name: "Low-acyl clarified gellan gum",
  es: "Low-acyl clarified gellan gum",
  aliases: ["Low-acyl clarified gellan gum"],
  roles: [],
  children: []
}, {
  id: "en:e472d",
  name: "Tartaric acid esters of mono- and diglycerides of fatty acids",
  es: "Ésteres tartáricos de monoglicéridos y diglicéridos de ácidos grasos",
  aliases: ["Mono- en diglyceriden van vetzuren veresterd met wijnsteenzuur", "Esteri ai acidului tartric cu mono- și digliceridele acizilor grași", "Tartaratni esteri mono- i diglicerida masnih kiselina", "Tartratni estri mono- in digliceridov maščobnih kislin", "Тартаратни естери моно- и диглицерида масних киселина", "Estery mono- a diglyceridů mastných kyselin s kyselinou vinnou", "Vinsyreester av mono- og diglyserider av næringsfettsyrer", "Zsírsavak mono- és digliceridjeinek borkősav-észterei", "Mono- och diglyceriders vinsyraestrar", "Ésteres tartáricos de monoglicéridos y diglicéridos de ácidos grasos", "Естери на винената киселина с моно- и диглицериди на мастни киселини", "Éster tártrico de mono- e diglicéridos de ácidos graxos", "Mono- i diglicerydy kwasów tłuszczowych estryfikowane kwasem winowym", "Esteri tartarici di mono- e digliceridi degli acidi grassi", "Weinsäureester von Mono- und Diglyceriden von Speisefettsäuren", "Tartaric acid esters of mono- and diglycerides of fatty acids", "グリセリン酒石酸脂肪酸エステル", "Ésteres tartáricos de mono e diglicéridos de ácidos gordos", "Ester tartrique de mono- et diglycérides d'acides gras", "Estery mono- a diglyceridov mastných kyselín s kyselinou vínnou", "tartarik asit esters of mono- ve diglycerides of fatty asits", "Taukskābju mono- un diglicerīdu vīnskābes esteri", "Εστερες του τρυγικου οξεος με μονο- και διγλυκεριδια λιπαρων οξεων", "Rasvahappojen mono- ja diglyseridien viinihappoesterit", "Riebalų rūgščių mono- ir digliceridų vyno rūgšties esteriai", "Rasvhapete mono- ja diglütseriidide estrid viinhappega", "Vinsyreestere af mono- og diglycerider af fedtsyrer", "Естери моно- та дигліцеридів та винної і жирних кислот", "Esteri tal-aċidu tartariku tal-mono- u d-digliċeridi tal-aċidi grassi"],
  roles: [],
  children: []
}, {
  id: "en:e310",
  name: "Propyl gallate",
  es: "Galato de propilo",
  aliases: ["Galato de propilo", "Пропил галат", "Propylgallat", "Propylgallát", "Propil-gallát", "Galat de propil", "Propylgallaat", "Gal·lat de propil", "Propil galat", "Propüülgallaat", "Propilo galatas", "Γαλλικος προπυλεστερας", "Propyyligallaatti", "Gallat tal-propil", "propil galat", "Propylgalát", "Gallato di propile", "Propyl gallate", "Gallate de propyle", "Galusan propylu", "Propilgallāts"],
  roles: ["antioxidant"],
  children: []
}, { 
  id: "en:e442",
  name: "Ammonium phosphatides",
  es: "Fosfátidos de amonio",
  aliases: ["Fosfátidos de amonio", "Амониеви фосфатиди", "Ammoniumfosfatider", "Ammónium-foszfatidok", "Amonné soli fosfatidových kyselin", "Fosfatide de amoniu", "Ammoniumfosfatiden", "Fosfàtid d'amoni", "Amonijevi fosfatidi", "Ammoniumphosphatider", "Fosfatiidhappe ammooniumsoolad", "Amonio fosfatidai", "Ammoniumfosfatidit", "Φωσφατιδια του αμμωνιου", "Fosfatidi tal-ammonju", "amonijevi fosfatidi", "Fosfatidy amónne", "Fosfatidos de amónio", "Phosphatides d'ammonium", "Ammonium phosphatides", "Fosfatidi di ammonio", "Ammoniumphosphatide", "Fosfatydy amonu", "Amonija fosfatīdi"],
  roles: ["emulsifier"],
  children: []
}, {
  id: "en:e505",
  name: "Ferrous carbonate",
  es: "Carbonato ferroso",
  aliases: ["ŽelezovII karbonat", "Ferrocarbonaat", "3b101", "Carbonat ferros", "Uhličitan železnatý", "Vas-II-karbonát", "Järnkarbonat", "Carbonato ferroso", "Желязен карбонат", "Dzelzs karbonāts", "Węglan żelaza", "EisenII-carbonat", "Ferrous carbonate", "Carbonate de fer", "Karbonat ferruż", "Ανθρακικός σίδηρος", "Rautakarbonaatti", "Raudkarbonaat", "GeležiesII karbonatas", "jernkarbonat"],
  roles: [],
  children: []
}, {
  id: "en:e107",
  name: "Yellow 2G",
  es: "Amarillo 2G",
  aliases: ["Galben 2G", "Geel 2G", "Rumeno 2G", "Жълто 2G", "Amarillo 2G", "Gul 2G", "Žlutý 2G", "Sárga 2G", "Žltý 2G", "Yellow 2G", "Giallo 2G", "Gelb 2G", "Amarelo 2G", "Jaune 2G", "Żółcień 2G", "Dzeltenais 2G", "Geltonasis 2G", "Kollane 2G", "Κίτρινο 2G", "Keltainen 2G", "Isfar 2G"],
  roles: [],
  children: []
}, {
  id: "en:e623",
  name: "Calcium diglutamate",
  es: "Diglutamato de calcio",
  aliases: ["Kaltsiumdiglutamaat", "Kalcio diglutamatas", "جلوتامات الكالسيوم", "Οξινο γλουταμινικο ασβεστιο", "Kalsiumdiglutamaatti", "แคลเซียมไดกลูตาเมต", "Кальцію диглутамат", "Calciumdiglutamat", "Kalsium diqlutamat", "Diglutamat tal-kalċju", "谷氨酸钙", "グルタミン酸カルシウム", "Diglutamato de cálcio", "Diglutamate de calcium", "Calcium diglutamate", "Diglutammato di calcio", "Diglutaminian wapnia", "Glutaman vápenatý", "Kalcija diglutamāts", "Kalsiyum diglutamat", "Kalcium-diglutamát", "Калцијум диглутамат", "Kalcium diglutamat", "Diglutamato de calcio", "Калциев диглутамат", "글루탐산 칼슘", "Kalciumdiglutamat", "Калциум диглутамат", "Глутамат кальция", "Canxi glutamat", "Calciumdiglutamaat", "کلسیم دی گلوتامات", "Diglutamat de calciu", "Diglutamat de calci", "Kalcijev diglutamat"],
  roles: [],
  children: []
}, {
  id: "en:e322",
  name: "Lecithins",
  es: "Lecitinas",
  aliases: ["Лецитини", "Lecitinas", "Lecitiner", "Lecitinek", "Lecitiny", "Лецитины", "Lecitine", "Lecithinen", "lecitines", "Lecitini", "לציטינים", "Lecithiner", "Lecitinai", "ليسيثين", "Letsitiinid", "Λεκιθινες", "Lesitiinit", "lecitini", "Leċitini", "Lecitíny", "Lécithines", "Lecithins", "Lecithine", "Lecytyny", "Lecitīni"],
  roles: ["antioxidant", "emulsifier"],
  children: ["en:e322a", "en:e322i", "en:e322ii", "en:e322iii"]
}, {
  id: "en:e150",
  name: "Caramel",
  es: "Caramelo",
  aliases: ["Caramelo", "Карамель", "Карамела", "Karamell", "Karamela", "Karamel", "caramèl", "کارامل", "карамель", "Carmel", "კარამელი", "محروق", "Karamelu", "karamel", "Karamelo", "קרמל", "கேரமல்", "Karamelė", "Karamelli", "caramello", "karameles", "Карамел", "karamelo", "Karamella", "Nước caramen", "Caramel", "คาราเมล", "Կարամել", "كراميل", "καραμέλα", "karamell", "Sjloek", "Caramal", "caramelo", "キャラメル", "karmel", "ಕ್ಯಾರಮೆಲ್"],
  roles: [],
  children: []
}, {
  id: "en:e1505",
  name: "Triethyl citrate",
  es: "Citrato de trietilo",
  aliases: ["Триэтилцитрат", "Триетил цитрат", "Citrato de trietilo", "Trietylcitrat", "Triethyl-citrát", "Trietil citrat", "Trietil-citrát", "trietylsitrat", "Citrat de trietil", "Trietilcitrat", "تری‌اتیل سیترات", "Triëthylcitraat", "Ċitrat trietiliku", "Triethylcitrat", "Triethyl citrate", "Trietilcitratas", "Trietyylisitraatti", "Κιτρικος τριαιθυλεστερας", "Trietilcitrāts", "Trietylcitrát", "Citrato di trietile", "檸檬酸三乙酯", "Citrato trietílico", "Citrate de triéthyle", "Cytrynian trietylowy"],
  roles: ["carrier", "emulsifier", "sequestrant", "stabiliser"],
  children: []
}, {
  id: "en:e575",
  name: "Glucono-delta-lactone",
  es: "Glucono-delta-lactona",
  aliases: ["Glucono-delta-lactonă", "گلوکونو دلتا-لاکتون", "Glucono delta-lacton", "Glucono-delta-lacton", "Glukonodelta lakton", "Glukonolakton", "Delta-gluconolactona", "Glukonsyrans deltalakton", "Глюконо-делта-лактон", "Glucono-delta-lactona", "глуконолактон", "Glukono-delta-lakton", "Glükono-delta-lakton", "Glukóno-delta-laktón", "glúcón-deilte-lachtón", "Lakton kwasu glukonowego", "Gluconedeltalattone", "Glucono-delta-lactone", "葡萄糖酸内酯", "グルコノラクトン", "Glikonskābes delta-laktons", "Glukono-delta-laktoni", "Γλυκονο-δ-λακτονη", "Gliukono-delta-laktonas", "Glükoondeltalaktoon", "glukonsyrans deltalakton", "glukono-delta-lakton", "Glukono-delta-latton"],
  roles: ["sequestrant"],
  children: []
}, {
  id: "en:e429",
  name: "peptone",
  es: "Peptona",
  aliases: ["Pepton", "Peptona", "peptoni", "Peptony", "Tryptoon", "peptone", "Peptones"],
  roles: [],
  children: []
}, {
  id: "en:e105",
  name: "Fast Yellow AB",
  es: "Amarillo sólido",
  aliases: ["Nopea keltainen AB", "Żółcień trwała AB", "Jaune solide", "Fast Yellow AB", "Festgelb AB", "Amarillo sólido", "Groc sòlid", "Galben puternic AB", "Resorcinolgeel (verboden)"],
  roles: [],
  children: []
}, {
  id: "en:e507",
  name: "Hydrochloric acid",
  es: "Ácido clorhídrico",
  aliases: ["Aċidu idrokloriku", "Saltsyre", "Vandenilio chlorido rūgštis", "Soolhape", "Suolahappo", "Υδροχλωρικο οξυ", "Sālskābe", "Kyselina chlorovodíková", "Salzsäure", "Acido cloridrico", "Hydrochloric acid", "Ácido clorídrico", "Acide chlorhydrique", "Kwas chlorowodorowy", "Солна киселина", "Ácido clorhídrico", "Saltsyra", "Sósav", "Àcid clorhídric", "Klorovodikova kislina", "Acid clorhidric", "Zoutzuur"],
   roles: [],
  children: []
}, {
  id: "en:e550",
  name: "Sodium silicate",
  es: "Silicato de sodio",
  aliases: ["Kremičitan sodný", "Натријум силикат", "Nátrium-szilikát", "규산 나트륨", "Natriumsilikat", "Натриум силикат", "Натриев силикат", "Silicato de sodio", "Силикат натрия", "Natrium silikat", "Natria silikato", "Natriumsilicaten", "Silicat de sodiu", "سیلیکات سدیم", "צורן נתרן", "Natrijev silikat", "Silicat de sodi", "Πυριτικό νάτριο", "Natriumsilikaatti", "Naatriumsilikaat", "Natrio silikatas", "سيليكات الصوديوم", "Силікат натрію", "Krzemian sodu", "Sodium silicate", "Silicato di sodio", "Silicato de sódio", "ケイ酸ナトリウム", "Silicate de sodium", "Sodyum silikat", "Nātrija silikāts"],
  roles: [],
  children: ["en:e550i", "en:e550ii"]
}, {
  id: "en:e350ii",
  name: "Sodium hydrogen malate",
  es: "Malato ácido de sodio",
  aliases: ["Jablečnan monosodný", "Nátrium-hidrogén-malát", "Natriumvätemalat", "Malato ácido de sodio", "Натриев хидроген малат", "Natriumwaterstofmalaat", "Malat acid de sodiu", "Natrijev hidrogenmalat", "Οξινο μηλικο νατριο", "Natriumvetymalaatti", "Natrio vandenilio malatas", "Naatriumvesinikmalaat", "Natriumhydrogenmalat", "Malat idroġenat tas-sodju", "Wodorojabłczan sodu", "Malato acido di sodio", "Sodium hydrogen malate", "Malate acide de sodium", "Hidrogenomalato de sódio", "Hydrogenjablčnan sodný", "Nātrija hidrogēnmalāts"],
  roles: ["humectant"],
  children: []
}, {
  id: "en:e451iii",
  name: "Sodium potassium triphosphate",
  es: "Sodium potassium triphosphate",
  aliases: ["Sodium potassium triphosphate"],
  roles: [],
  children: []
}, {
  id: "en:e458",
  name: "Gamma-Cyclodextrine",
  es: "Gamma-ciclodextrina",
  aliases: ["Гама-циклодекстрин", "Gamma-ciclodextrina", "감마-사이클로덱스트린", "Gamma-cyklodextrin", "gamma-ciklodextrin", "Gama-cyklodextrin", "Gama-ciklodekstrino", "Гамма-циклодекстрин", "Gama-ciclodextrină", "Gamma-cyclodextrine", "Gama-ciklodekstrin", "Gamma-cyclodextrin", "Gamma-Siklodekstrin", "Gama-ciklodekstrinas", "Gamma-tsüklodekstriin", "غاما سيكلودكسترين", "Γάμμα-κυκλοδεξτρίνη", "Gamma-Syklodekstriini", "Gamma-ċiklodextrin", "Gama-cyklodextrín", "γ-环糊精", "Gamma-Cyclodextrine", "Gama-ciclodextrina", "ガンマ-シクロデキストリン", "Gamma-Cyclodextrin", "Gamma-ciclodestrina", "Gamma-cyklodekstryna", "Gamma-ciklodekstrīns", "Gama-Siklodekstrin"],
  roles: ["stabiliser", "thickener"],
  children: []
}, {
  id: "en:e1521",
  name: "Polyethylene glycol",
  es: "Polietilenglicol",
  aliases: ["Glikol polietylenowy", "Polyéthylène glycol", "Polietilenoglicol", "Polyethylenglycol", "Polietilenglicole", "Polyethylene glycol", "Polyetylénglykol", "Polietilēnglikols", "Polyeteeniglykolit", "Πολυαιθυλενογλυκολες", "Polüetüleenglükool", "Polietilenglikolis", "Glikol tal-polietilen", "Polyethyleenglycol", "Polietilenglicol", "Polietilenglikol", "Polietilénglikol", "Polyethylenglykol", "Polyetylenglykol", "Полиетиленгликол"],
  roles: [],
  children: []
}, {
  id: "en:e1100iv",
  name: "alpha-Amylase from Bacillus megaterium expressed in Bacillus subtilis",
  es: "alpha-Amylase from Bacillus megaterium expressed in Bacillus subtilis",
  aliases: ["alpha-Amylase from Bacillus megaterium expressed in Bacillus subtilis"],
  roles: [],
  children: []
}, {
  id: "en:e905c",
  name: "Petroleum wax",
  es: "Cera de petróleo",
  aliases: ["ნავთობის ცვილი", "Ceară de petrol", "موم نفتی", "Petroleumwas", "Petrolio-argizaria", "שעוות נפט", "Parafinski vosek", "Петролејски восок", "Petroleumvax", "Cera de petróleo", "Dylli i naftës", "Петролејски восак", "Paraffinviasz", "Lilin petroleum", "Cera di petrolio", "Naftas vasks", "Parafinvoks", "पेट्रोलियम मोम", "Neft mum", "Maaöljyvaha", "Naftos vaškas", "Jarðolíu vax", "Sáp dầu hỏa", "Cera de petroli", "석유 왁스", "Петролен восък", "Ropný vosk", "Nafta vakso", "Нефтяной воск", "Wosk naftowy", "Petroleumwachs", "Petroleum wax", "石油ワックス", "Cire de pétrole", "Petrol mumu", "Petroleumsvoks", "Նավթային մոմ", "Нафтовий віск", "ขี้ผึ้งปิโตรเลียม", "Κερί πετρελαίου", "Naftavaha", "شمع البترول", "Petrolni vosak", "Xama' tal-petroleum"],
  roles: [],
  children: ["en:e905ci", "en:e905cii"]
}, {
  id: "en:e264",
  name: "Ammonium acetate",
  es: "Acetato de amonio",
  aliases: ["Ammoniumasetaatti", "Οξικό αμμώνιο", "Ammooniumatsetaat", "Amonio acetatas", "أسيتات الأمونيوم", "Ammonyum asetat", "Ammoniumacetat", "Octan amonu", "Acetato de amónio", "Acétate d'ammonium", "酢酸アンモニウム", "Acetato di ammonio", "Ammonium acetate", "Octan amónny", "Amonija acetāts", "Ammónium-acetát", "Octan amonný", "아세트산 암모늄", "Амониев ацетат", "Acetato de amonio", "Ацетат аммония", "Amonia acetato", "Ammoniumacetaat", "Acetat de amoniu", "Amonijev acetat", "Acetat d'amoni"],
  roles: [],
  children: []
}, {
  id: "en:e960d",
  name: "Glucosylated steviol glycosides",
  es: "Glucósidos de esteviol glucosilados",
  aliases: ["Глюкозилированные стевиолгликозиды", "Steviol glikosida terglukosil", "Steviol glikosida terglukosilasi", "Glükozilezett szteviol-glikozidok", "Glukosylované steviol-glykosidy", "Гликозиловани стевиол гликозиди", "Glikozidet steviol glukozil", "Глюкозилирани стевиол гликозиди", "Glucósidos de esteviol glucosilados", "Гликозилирани стевиол гликозиди", "Glukosylerade steviolglykosider", "글루코실화 스테비올 배당체", "Glicòsids d'esteviol glucosilat", "Glukozilirani steviol glikozidi", "גליקוזידים סטיביול גלוקוזיל", "Glycoside Steviol Glucosyl hóa", "Geglucosyleerde steviolglycosiden", "Glicozide steviolice glucozilate", "Glikosidi ta' stevjol glukosilati", "Glükosüülitud stevioolglükosiidid", "Gliukozilinti steviolio glikozidai", "جليكوسيدات ستيفيول جلوكوزيل", "Glukosylaatit stevioliglykosidit", "Γλυκοζυλιωμένα γλυκοσίδια στεβιόλης", "สตีวิออลไกลโคไซด์กลูโคซิลเลต", "Глюкозильовані стевіол глікозиди", "Glucosyleret steviolglycosider", "Qlükozilli Steviol qlikozidləri", "ग्लूकोसिलेटेड स्टीविओल ग्लाइकोसाइड", "Glikozilēti steviolglikozīdi", "Glikosillenmiş steviol glikozitler", "Glicosídeos de esteviol glicosilados", "葡萄糖基化甜菊醇糖苷", "グルコシル化ステビオール配糖体", "Glycosides de stéviol glucosylés", "Glucosylated steviol glycosides", "Glicosidi steviolici glucosilati", "Glycosylierte Steviolglycoside", "Glikozydy stewiolowe glukozylowane", "Glukozilované steviol glykozidy"],
  roles: ["sweetener"],
  children: []
}, {
  id: "en:e175",
  name: "Gold",
  es: "Oro",
  aliases: ["Zelts", "Złoto", "Gold", "Ouro", "Zlato", "Deheb", "Χρυσος", "Kulta", "Kuld", "Auksas", "Guld", "Goud", "Arany", "Злато"],
  roles: [],
  children: []
}, {
  id: "en:e383",
  name: "calcium glycerophosphate",
  es: "glicerofosfato de calcio",
  aliases: ["Kalcijum glicerilfosfat", "kalcijev glicerofosfat", "glicerofosfat de calciu", "calciumglycerofosfaat", "Глицерофосфат кальция", "Калциев глицерофосфат", "glicerofosfato de calcio", "kalciumglycerolfosfat", "glycerofosforečnan vápenatý", "kalcium-glicerofoszfát", "kalcija glicerofosfāts", "calcium glycerophosphate", "glicerofosfato di calcio", "Calciumglycerophosphat", "glicerofosfato de cálcio", "glycérophosphate de calcium", "glicerofosforan wapnia", "gliċerofosfat tal-kalċju", "kaltsiumglütserofosfaat", "kalcio glicerofosfatas", "فوسفات غليسيريل الكالسيوم", "Kalsiumglyserofosfaatti", "γλυκεροφωσφορικό ασβέστιο"],
  roles: [],
  children: []
}, {
  id: "en:e577",
  name: "Potassium gluconate",
  es: "Gluconato potásico",
  aliases: ["Kaliumgluconaat", "Gluconat de potasiu", "Kalijev glukonat", "Gluconat de potassi", "Glukonan draselný", "Kálium-glükonát", "Kaliumglukonat", "Калиев глюконат", "Gluconato potásico", "Glukonian potasu", "Potassium gluconate", "Gluconato di potassio", "Kaliumgluconat", "Gluconato de potássio", "Gluconate de potassium", "Kālija glikonāts", "Γλυκονικο καλιο", "Kaliumglukonaatti", "Kalio gliukonatas", "Kaaliumglükonaat", "Glukonat tal-potassju"],
  roles: ["sequestrant"],
  children: []
}, {
  id: "en:e432",
  name: "Polyoxyethylene sorbitan monolaurate",
  es: "Monolaurato de sorbitán polioxietilenado",
  aliases: ["Polioksietilēna sorbitāna monolaurāts)", "Monolaurynian polioksyetylenosorbitolu)", "Monolaurato de polioxietileno sorbitano", "Monolaurate de polyoxyéthylène sorbitane", "Monolaurato di poliossietilene sorbitano", "Polyoxyethylen-sorbitanmonolaurat", "Polyoxyethylene sorbitan monolaurate", "Polyoxylénsorbitanmonolaurát", "Monolawrat tal-poliossietilen sorbitan", "Polyoksyetyleenisorbitaanimonolauraatti", "Μονολαυρικη πολυοξυ-αιθυλενο-σορβιτανη", "Polioksietileno sorbitano monolauratas", "Polüoksüetüleen sorbitaanmonolaureaat", "Polyoxyethylen(20)sorbitanmonolaurat", "Polioksietilen sorbitan monolaurat", "Monolaurat de sorbitan polioxietilenat", "Polyoxyethyleensorbitaanmonolauraat", "Monolaurat de polioxietilenă sorbitan", "Polioxietilén-szorbitan-monolaurát", "Polyoxyethylensorbitanmonolaurát", "Polyoxietylensorbitanmonolaurat", "Полиоксиетилен сорбитан монолаурат", "Monolaurato de sorbitán polioxietilenado"],
  roles: ["emulsifier", "stabiliser"],
  children: []
}, {
  id: "en:e450vi",
  name: "Dicalcium diphosphate",
  es: "Difosfato dicálcico",
  aliases: ["Dikalcijev difosfat", "Difosfat dikalċiku", "Dicalciumdiphosphat", "Dikaltsiumdifosfaat", "Dikalcio difosfatas", "ثنائي فوسفات الكالسيوم", "Πυροφωσφορικο ασβεστιο", "Dikalsiumdifosfaatti", "Dikalcija difosfāts", "Difosforečnan divápenatý", "Difosfato di dicalcio", "Dicalcium diphosphate", "磷酸二钙", "Difosfato dicálcico", "Diphosphate dicalcique", "リン酸二カルシウム", "Difosforan diwapniowy", "Dukalcia difosfato", "Дикальцийдифосфат", "Дикалциев дифосфат", "인산이칼슘", "Dikalciumdifosfat", "Difosforečnan vápenatý", "Dikalcium-difoszfát", "Difosfat dicàlcic", "Difosfat dicalcic", "دی کلسیم دی فسفات", "Dicalciumdifosfaat"],
  roles: ["emulsifier", "humectant", "sequestrant", "stabiliser", "thickener"],
  children: ["en:e540"]
}, {
  id: "en:e339",
  name: "Sodium phosphates",
  es: "Fosfatos de sodio",
  aliases: ["Fosfat de sodiu", "سدیم فسفات", "Natri phosphat", "natriumfosfaten", "Fosfati de sodi", "natrijev fosfat", "Натриеви фосфати", "Fosfatos de sodio", "Natriumfosfater", "Fosforečnan sodný", "natriumfosfat", "Nátrium-foszfátok", "Natria fosfato", "Натрия фосфаты", "fosfati di sodio", "Sodium phosphates", "Natriumphosphaten", "fosfatos de sódio", "phosphates de sodium", "リン酸塩", "Fosforan sodu", "Nātrija fosfāts", "Natriumphosphate", "Naatriumfosfaat", "Natrio fosfatas", "فوسفات الصوديوم", "Natriumfosfaatit", "Φωσφορικο νατριο", "Fosfat tas-sodju", "natrijevi fosfati"],
  roles: ["emulsifier", "humectant", "preservative", "sequestrant", "stabiliser", "thickener"],
  children: ["en:e339i", "en:e339iii"]
}, {
  id: "en:e450i",
  name: "Disodium diphosphate",
  es: "Difosfato disódico",
  aliases: ["Difosfat disodiku", "Dinatriumdiphosphat", "Dinatriumdifosfaatti", "Δισοξινο πυροφωσφορικο νατριο", "Dinatrio difosfatas", "Dinaatriumdifosfaat", "بيروفوسفات ثنائي الصوديوم", "Dinātrija difosfāts", "Difosforečnan disodný", "Difosforan disodowy", "Difosfato dissódico", "酸式焦磷酸钠", "Pyrophosphate de sodium acide", "ピロリン酸ナトリウム", "Difosfato disodico", "Disodium diphosphate", "дигидропирофосфат натрия", "Dinatriumdifosfat", "Динатриев дифосфат", "Difosfato disódico", "Dinátrium-difoszfát", "disodique - Dihydrogendifosforečnan disodný", "Dinatrijum pirofosfat", "Dinatrijev difosfat", "difosfat de disodi", "دی‌سدیم پیروفسفات", "Difosfat disodic", "Dinatriumdifosfaat", "Natri đihiđropyrophotphat"],
  roles: ["emulsifier", "humectant", "sequestrant", "stabiliser", "thickener"],
  children: ["ca:carbonat-acid-de-sodi-i-difosfat-de-disodi"]
}, {
  id: "en:e224",
  name: "Potassium metabisulphite",
  es: "Metabisulfito potásico",
  aliases: ["Metabisulfit de potassi", "Kalijum metabisulfit", "Kalijev metabisulfit", "Metabisulfit de potasiu", "پتاسیم متابی‌سولفیت", "Kali metabisunfit", "Kaliumdisulfiet", "Kalia pirosulfito", "Пиросульфит калия", "Калиев метабисулфит", "Metabisulfito potásico", "Kaliumdisulfit", "Disiřičitan draselný", "Kálium-metabiszulfit", "Kālija metabisulfīts", "Metabisolfito di potassio", "Kaliummetabisulfit", "Potassium metabisulphite", "Metabissulfito de potássio", "Disulfite de potassium", "ピロ亜硫酸カリウム", "Pirosiarczyn potasu", "kalijev metabisulfit", "Metabisulfit tal-potassju", "Kalio metabisulfitas", "Kaaliumdisulfit", "ميتابيسلفيت البوتاسيوم", "Μεταδιθειωδες καλιο", "Kaliumdisulfiitti"],
  roles: ["antioxidant", "preservative"],
  children: []
}, {
  id: "en:e280",
  name: "Propionic acid",
  es: "Ácido propiónico",
  aliases: ["Propionska kislina", "Àcid propiònic", "Acid propionic", "Propionzuur", "Propionsyra", "Ácido propiónico", "Пропионова киселина", "Propionsav", "Kyselina propionová", "Propionskābe", "Kyselina propiónová", "Kwas propionowy", "Acide propionique", "Acido propionico", "Propionsäure", "Propionic acid", "Aċidu propjoniku", "Propionsyre", "Propionihappo", "Προπιονικο οξυ", "Propioonhape", "Propiono rūgštis"],
  roles: ["preservative"],
  children: []
}, {
  id: "en:e954i",
  name: "E954i",
  es: "E954i",
  aliases: [],
  roles: [],
  children: []
}, {
  id: "en:e504ii",
  name: "Magnesium hydroxide carbonate",
  es: "Carbonato ácido de magnesio",
  aliases: ["Magnézium-hidroxid-karbonát", "Uhličitan-dihydroxid hořečnatý", "Магнезиев хидрокси карбонат", "Carbonato ácido de magnesio", "Magnesiumhydroxidkarbonat", "Magnesiumcarbonaathydroxide", "Hidroxid de carbonat de magneziu", "Magnezijev hidroksidkarbonat", "Magneesiumvesinikkarbonaat", "Magnio hidroksido karbonatas", "Ανθρακικο υδροξειδιο του μαγνησιου", "Magnesiumhydroksikarbonaatti", "magnesiumhydroxidkarbonat", "Karbonat tal-idrossidu tal-manjeżju", "Carbonate acide de magnésium", "Hidroxicarbonato de magnésio", "Magnesio carbonato idrossido", "Magnesium hydroxide carbonate", "Magnesiumhydroxidcarbonat", "Hydroksywęglan magnezu", "Hydrogenuhličitan horečnatý", "Magnija hidroksīdkarbonāts"],
  roles: ["carrier"],
  children: []
}, {
  id: "en:e304",
  name: "Fatty acid esters of ascorbic acid",
  es: "ésteres de ácidos grasos del ácido ascórbico",
  aliases: ["Estri maščobnih kislin askorbinske kisline", "אסטרים של חומצות שומן של חומצה אסקורבית", "Èster d'àcids grassos d'àcid ascòrbic", "استرهای اسید چرب اسید آسکوربیک", "Esteri ai acizilor grași ai acidului ascorbic", "vetzuuresters van ascorbinezuur", "Azido askorbikoaren gantz-azidoen esterrak", "Ester asam lemak asam askorbat", "Эфиры жирных кислот аскорбиновой кислоты", "Естри на масни киселини на аскорбинска киселина", "fettsyraestrar av askorbinsyra - askorbinsyraestrar av fettsyror", "아스코르브산의 지방산 에스테르", "Мастнокиселинни естери на аскорбиновата киселина", "ésteres de ácidos grasos del ácido ascórbico", "Aszkorbil-palmitát zsírsavészeteri", "Естри масних киселина аскорбинске киселине", "Estery mastných kyselin kyseliny askorbové", "Askorbīnskābes taukskābju esteri", "Askorbik asidin yağ asidi esterleri", "Estery mastných kyselín kyseliny askorbovej", "ইস্টেরí aicídí sailleacha d'aigéad ascorbic", "Estry kwasów tłuszczowych i kwasu askorbinowego", "抗坏血酸的脂肪酸酯", "Acide palmityle-6-L-ascorbique - esters d'acides gras de l'acide ascorbique", "Ésteres de ácidos gordos do ácido ascórbico", "アスコルビン酸脂肪酸エステル", "Fatty acid esters of ascorbic acid", "esteri dell'acido ascorbico con acidi grassi", "Fettsäureester der Ascorbinsäure - Palmitinsäureascorbylester", "esteri masnih kiselina askorbinske kiseline", "Esteri ta' aċidi grassi ta' aċidu askorbiku", "Ефіри жирних кислот аскорбінової кислоти", "Askorbin turşusunun yağ turşusu esterləri", "Fedtsyreestere af ascorbinsyre", "เอสเทอร์ของกรดไขมันของกรดแอสคอร์บิก", "askorbiinihapon rasvahappoesterit", "Εστέρες λιπαρών οξέων του ασκορβικού οξέος", "Askorbo rūgšties riebalų rūgščių esteriai", "Askorbiinhappe rasvhappeestrid", "إسترات الأحماض الدهنية لحمض الأسكوربيك"],
  roles: ["antioxidant"],
  children: ["en:e304i", "en:e304ii"]
}, {
  id: "en:e1100v",
  name: "E1100v",
  es: "E1100v",
  aliases: [],
  roles: [],
  children: []
}, {
  id: "en:e317",
  name: "Erythorbin acid",
  es: "Ácido eritorbínico",
  aliases: ["Eritorbīnskābe", "Ácido eritorbínico", "Isoascorbate de potassium", "Acido eritorbinico", "Erythorbin acid", "Kwas erytrobinowy", "Aċidu erythorbin", "Киселина ериторбин", "Erytorbinsyra", "Eritorbinsav", "Eritorbiinhape", "Kyselina erythorbinová", "Ερυθορβικό οξύ"],
  roles: [],
  children: []
}, { 
  id: "en:e163",
  name: "Anthocyanins",
  es: "Antocianinas",
  aliases: ["Antocianinai", "Antosyaanit", "Antocianīni", "Antociani", "Antosianin", "Антоцијан", "Antocianinok", "Antocianinas", "Антоциандар", "Antocyaner", "אנתוציאנין", "Antocianini", "Antozianina", "Anthocyanen", "Антацыяны", "Antocianine", "آنتوسیانین", "Antocyanin", "antocijani", "Antocijanini", "ആൻതോസയാനിൻ", "Antocyaniner", "Antotsüaniinid", "أنثوسيان", "Ανθοκυανινες", "แอนโทไซยานิน", "Anthocyaniner", "Антоціани", "Անտոցիաններ", "Anthocyanin", "Antosiyanin", "Anthocyanins", "Anthocyane", "アントシアニン", "花色素苷", "Anthocyanes", "Antocyjany", "Antokyaníny", "Антоцианы", "Antocianino", "Anthokyany", "Антоцианини", "안토시아닌", "Antocianines", "Антосианҳо", "Antósýanefni", "Antotsianinlar"],
  roles: ["colour"],
  children: ["en:e163ii", "en:e163iii", "en:e163iv", "en:e163ix", "en:e163v", "en:e163vi", "en:e163vii", "en:e163viii", "en:e163x", "en:e163xi"]
}, {
  id: "en:e252",
  name: "Potassium nitrate",
  es: "Nitrato potásico",
  aliases: ["Nitrato di potassio", "Kālija nitrāts", "पोटैशियम नाइट्रेट", "Kaliumnitraatti", "Kalio nitratas", "Nitrat de potasiu", "نیترات پتاسیم", "Kaliumnitraat", "Salpetro", "Kalij-nitrat", "பொட்டாசியம் நைத்திரேட்டு", "אשלגן חנקתי", "Kalijev nitrat", "Šalitra", "Kaliumnitrat", "калиум нитрат", "Nitrato potásico", "Калий селитрасы", "Калијум нитрат", "Kálium-nitrát", "Saunitre", "Kalium nitrat", "kalium nitrat", "Dusičnan draselný", "níotráit photaisiam", "Azotan potasu", "Potassium nitrate", "Nitrato de potássio", "硝酸カリウム", "Nitrate de potassium", "Potasyum nitrat", "ယမ်းစိမ်း", "Калий нитраты", "Нітрат калію", "Կալիումի նիտրատ", "Salitre", "ดินประสิว", "Νιτρικο καλιο", "نترات البوتاسيوم", "Kaaliumnitraat", "পটাসিয়াম নাইট্রেট", "Kalyu qullpa", "kalijev nitrat", "Nitrat tal-potassju", "Saltpétur", "kali nitrat", "Nitrat de potassi", "질산 칼륨", "Калиев нитрат", "kalia nitrato", "нитрат калия"],
  roles: ["preservative"],
  children: []
}, {
  id: "en:e482i",
  name: "Calcium stearoyl lactylate",
  es: "Calcium stearoyl lactylate",
  aliases: ["Calcium stearoyl lactylate"],
  roles: [],
  children: []
}, {
  id: "en:e160di",
  name: "Lycopene‚ synthetic",
  es: "Lycopene‚ synthetic",
  aliases: ["Lycopene‚ synthetic"],
  roles: [],
  children: []
}, {
  id: "en:e421",
  name: "Mannitol",
  es: "Manitol",
  aliases: ["Manitol", "מניטול", "Mannitol", "manitol", "ମାନିଟଲ", "مانیتول", "Mannit", "манитол", "Mannīts", "mannitol", "マンニトール", "mannitolo", "mainníotól", "manit", "Mannitoli", "Μαννιτολη", "mannitool", "manitolis", "مانيتول", "Манітол"],
  roles: ["humectant", "stabiliser", "sweetener", "thickener"],
  children: []
}, {
  id: "en:e238",
  name: "Calcium formiate",
  es: "Formiato de calcio",
  aliases: ["칼슘 포르메이트", "Kalciumformiat", "Formiato de calcio", "Формиат на калций", "Vápenatý formiát", "Kalcium-formiát", "Kalsium format", "Формиат кальция", "Formiat de calciu", "Kalsiumformiaat", "Calciumformiaat", "סידן פורמט", "Kalcijev formiat", "Formiat de calci", "Calciumformiat", "Форміат кальцію", "แคลเซียมฟอร์เมต", "Φορμικό ασβέστιο", "Kalsiumformiaatti", "Kaltsiumformiaat", "Kalcio formiatas", "فورمات الكالسيوم", "Formjat tal-kalċju", "Mrówczan wapnia", "Calcium formiate", "Formiato di calcio", "Formiate de calcium", "Formiato de cálcio", "ギ酸カルシウム", "Kalsiyum format", "Kalcija formiāts", "कैल्शियम फॉर्मेट"],
  roles: [],
  children: []
}, {
  id: "en:e341",
  name: "Calcium phosphates",
  es: "Fosfatos de calcio",
  aliases: ["Fosfat de calci", "Kalcijeve fosfate", "Calciumfosfaten", "Fosfați de calciu", "Фосфат кальция", "Kalcium-foszfátok", "CaPO4", "Fosfatos de calcio", "Калциеви фосфати", "Kalciumfosfater", "Kalcija fosfāti", "Phosphates de calcium", "Fosfatos de cálcio", "Fosfati di calcio", "Calcium phosphates", "Calciumphosphate", "Fosforan wapnia", "Fosfáty vápnika", "kalcijevi fosfati", "Fosfat tal-kalċju", "Kaltsiumfosfaadid", "Kalcio fosfatai", "Kalsiumfosfaatit", "Φωσφορικά ασβέστια"],
  roles: ["emulsifier", "humectant", "sequestrant", "stabiliser", "thickener"],
  children: ["en:e341i", "en:e341ii", "en:e341iii"]
}, {
  id: "en:e541ii",
  name: "Alkaline sodium aluminium phosphate",
  es: "Fosfato alcalino de aluminio y sodio",
  aliases: ["Fosfat alcalin de aluminiu și sodiu", "Basisch natriumaluminiumfosfaat", "Alkalni natrijev aluminijev fosfat", "Fosfat alcalí de sodi i alumini", "Alkaliskt natriumaluminiumfosfat", "Fosfato alcalino de aluminio y sodio", "Lúgos nátrium-alumínium-foszfát", "Alkalický fosforečnan sodno-hlinitý", "Alkalický hydrogénfosforečnan hlinito-sodný", "Zasadowy glinofosforan sodu", "Fosfato alcalino de alumínio e sódio", "Phosphate de sodium-aluminium basique", "Fosfato alcalino di sodio e alluminio", "Alkaline sodium aluminium phosphate", "Alkalisches Natriumaluminiumphosphat", "Sārmains nātrija alumīnija fosfāts", "Alkalisk natriumaluminiumphosphat", "Αλκαλικό φωσφορικό αργιλιονατριο", "Emäksinen natriumalumiinifosfaatti", "Šarminis natrio aliuminio fosfatas", "Aluseline naatriumalumiiniumfosfaat"],
  roles: ["emulsifier", "stabiliser", "thickener"],
  children: []
}, {
  id: "en:e170",
  name: "Calcium carbonates",
  es: "Carbonatos de calcio",
  aliases: ["Kalsium karbonatlar", "Kalsiumkarbonaatit", "Kalcio karbonatai", "Kalcija karbonāti", "Kalsiumkarbonater", "कैल्शियम कार्बोनेट", "Carbonati di calcio", "Kalsium karbonat", "Carbonatos de calcio", "Kalciumkarbonater", "Калциум карбонати", "Karbonatet kalcium", "Калцијум карбонати", "Kalcium-karbonátok", "Kalsiumkarbonatar", "קרבונטים של סידן", "Kalcijevi karbonati", "Карбанаты кальцыю", "Carbonați de calciu", "کربنات کلسیم", "Calciumcarbonaten", "Kaltzio karbonatoak", "ক্যালসিয়াম কার্বোনেটস", "Karbonati tal-kalċju", "calciumkarbonater", "Карбонати кальцію", "กลุ่มแคลเซียมคาร์บอเนต", "ανθρακικά άλατα ασβεστίου", "Kaltsiumkarbonaadid", "مجموعة كربونات الكالسيوم", "Kalsiyum karbonatlar", "Uhličitany vápnika", "Carbónáití cailciam", "Węglany wapnia", "Calcium carbonates", "Calciumcarbonate", "Carbonatos de cálcio", "Carbonates de calcium", "炭酸カルシウム族", "Kalcia karbonatoj", "Карбонаты кальция", "탄산 칼슘 계열", "Калциеви карбонати", "Uhličitany vápenaté", "Carbonats de calci", "Kalsíumkarbónöt", "Kalsiumkarbonate", "Cacbonat canxi"],
  roles: [],
  children: ["en:e170i", "en:e170ii"]
}, {
  id: "en:e333i",
  name: "Monocalcium citrate",
  es: "Citrato monocálcico",
  aliases: ["Monocalciumcitraat", "Citrat monocalcic", "Monokalcijev citrat", "Monocalcium citrate", "Monokalcium-citrát", "Monokalciumcitrat", "Монокалциев цитрат", "Citrato monocálcico", "Cytrynian monowapniowy", "Citrato monocalcico", "Monocalciumcitrat", "Citrate monocalcique", "Citran monovápenatý", "Monokalcija citrāts", "Δισοξινο κιτρικο ασβεστιο", "Monokalsiumsitraatti", "Kaltsiumdivesiniktsitraat", "Monokalcio citratas", "Ċitrat monokalċiku"],
  roles: ["sequestrant", "stabiliser"],
  children: []
}, {
  id: "en:e555",
  name: "Potassium aluminium silicate",
  es: "Silicato de potasio y aluminio",
  aliases: ["Kaliumaluminiumsilicaat", "Silicat de aluminiu și potasiu", "Kalijev aluminijev silikat", "Silicat de potassi i alumini", "Kálium-alumínium-szilikát", "Křemičitan draselno-hlinitý", "Kaliumaluminiumsilikat", "Silicato de potasio y aluminio", "Калиевоалуминиев силикат", "Krzemian glinowo-potasowy", "Silicate alumino-potassique", "Silicato de alumínio e potássio", "Potassium aluminium silicate", "Silicato di potassio e alluminio", "Kaliumaluminiumsilicat", "Kremičitan hlinitodraselný", "Kālija alumīnija silikāts", "Πυριτικο αργιλιοκαλιο", "Kaliumalumiinisilikaatti", "Kalio aliuminio silikatas", "Kaaliumalumiiniumsilikaat", "Silikat tal-potassju u tal-aluminju"],
  roles: [],
  children: []
}, {
  id: "en:e100",
  name: "Curcumin",
  es: "curcumina",
  aliases: ["kurkumin", "куркумин", "curcumina", "куркумины", "curcumine", "curcumin", "کورکومین", "curcumină", "כורכומין", "குர்க்குமின்", "kurkumiin", "kurkuminas", "كركومين", "κουρκουμινη", "kurkumiini", "เคอร์คูมิน", "куркумін", "kurkumina", "クルクミン", "Curcumin", "Kurkumin", "kurkumín", "ಕರ್ಕ್ಯುಮಿನ್", "kurkumīns"],
  roles: ["colour"],
  children: ["en:e100i", "en:e100ii"]
}, {
  id: "en:e650",
  name: "Zinc acetate",
  es: "Acetato de cinc",
  aliases: ["Octan zinečnatý", "Цинков ацетат", "아세트산 아연", "Ацетат цинка", "Zinka acetato", "Kẽm axetat", "Sinkasetat", "Sinkasetaat", "Acetat de zinc", "Tsinkatsetaat", "أسيتات الزنك، ملح الزنك", "Οξικός ψευδάργυρος", "ซิงค์อะซิเตต", "Zinkacetat", "Цинк ацетат", "Aċetat taż-żingu", "Cinkov acetat", "Zinc acetate", "Acetato de zinco", "醋酸锌，锌盐", "Acétate de zinc", "酢酸亜鉛", "Octan cynku", "Octan zinočnatý", "Çinko asetat", "Cink-acetát", "Acetato de cinc", "Acetat zinku", "Seng asetat", "Zink asetat", "Zinkacetaat", "אבץ אצטט", "Cink acetat", "Cinko acetatas", "Sinkkiasetaatti", "Sink asetat", "Acetato di zinco", "जस्ता एसीटेट", "Sinkacetat", "Cinka acetāts"],
  roles: [],
  children: []
}, {
  id: "en:e123",
  name: "Amaranth",
  es: "Amaranto",
  aliases: ["Amarant", "Αμαρανθη", "Amarantti", "Amarantas", "Amaranth", "Amarants", "vermelho amaranto", "Amarante", "Amaranto", "Амарант"],
  roles: ["colour"],
  children: []
}, {
  id: "en:e461",
  name: "methyl cellulose",
  es: "Metilcelulosa",
  aliases: ["Metilceluloze", "Metyloceluloza", "méthylcellulose", "Metilcelulose", "メチルセルロース", "Metilcellulosa", "methyl cellulose", "Methylcellulose", "ceallalós carbocsaimeitile", "Ċelluloża metilika", "metilceluloza", "Μεθυλοκυτταρινη", "Metyyliselluloosa", "Metilceliuliozė", "Metüültselluloos", "ميثيل السليولوز", "Метилцелюлоза", "methylcellulose", "Metilceluloza", "Metilcel·lulosa", "متیل سلولز", "Metilceluloză", "метилцеллюлоза", "Metil-cellulóz", "Methylcelulóza", "Metylcellulosa", "Метил целулоза", "Metilcelulosa"],
  roles: ["emulsifier", "stabiliser", "thickener"],
  children: []
}, {
  id: "en:e336",
  name: "Potassium tartrates",
  es: "tartratos de potasio",
  aliases: ["тартрат калия", "Kalia tartrato", "kaliumtartraatit", "Vinany draselné", "Kalijum tartrat", "Kálium-tartarát", "Kaliumtartrater", "tartratos de potasio", "Tartrat de potassi", "Winiany potasu", "Kaliumtartraten", "Potassium tartrates", "tartrati di potassio", "Kaliumtartrate", "Tartrates de potassium", "Tartarato de potássio"],
  roles: [],
  children: ["en:e336i", "en:e336ii"]
}, {
  id: "en:e1100ii",
  name: "E1100ii",
  es: "E1100ii",
  aliases: [],
  roles: [],
  children: []
}, {
  id: "en:e285",
  name: "Sodium tetraborate (borax)",
  es: "Tetraborato sódico (bórax)",
  aliases: ["Τετραβορικο νατριο (βορακασ)", "Natriumtetraboraatti (booraksi)", "Naatriumtetraboraat", "Natrio tetraboratas (boraksas)", "Natriumtetraborat (boraks)", "Tetraborat tas-sodju (borax)", "Czteroboran sodu (boraks)", "Tétraborate de sodium", "Tetraborato de sódio (bórax)", "Tetraborato di sodio (borace)", "Natriumtetraborat (borax)", "Sodium tetraborate (borax)", "Tetraboritan sodný (borax)", "Nātrija tetraborāts (boraks)", "Nátrium-tetraborát (bórax)", "Tetraborato sódico (bórax)", "Натриев тетраборат (боракс)", "Natriumtetraboraat (borax)", "Tetraborat de sodiu (borax)", "Natrijev tetraborat (boraks)", "Tetraborat de sodi"],
  roles: [],
  children: []
}, {
  id: "en:e493",
  name: "Sorbitan monolaurate",
  es: "Monolaurato de sorbitano",
  aliases: ["Sorbitanmonolaurat", "Monolaurato de sorbitano", "Сорбитан монолауарат", "Sorbitanmonolaurát", "Szorbitan-monolaurát", "Monolaurat de sorbitan", "Sorbitaanmonolauraat", "Sorbitan monolaurat", "Μονολαυρικη σορβιτανη", "Sorbitaanimonolauraatti", "Sorbitano monolauratas", "Monolawrat tas-sorbitan", "Monolaurynian sorbitolu", "Monolaurato di sorbitano", "Sorbitan monolaurate", "Monolaurate de sorbitane", "Sorbitāna monolaurāts"],
  roles: ["emulsifier", "stabiliser"],
  children: []
}, {
  id: "en:e514",
  name: "Sodium sulphates",
  es: "Sulfatos de sodio",
  aliases: ["Solfatos di sodio", "सोडियम सल्फेट", "Natriumsulfater", "Nātrija sulfāti", "Natrio sulfatai", "Natriumsulfaatit", "Natrium sulfatlar", "Sodio sulfatoak", "Natriumsulfaten", "سولفات سدیم", "Sulfati de sodiu", "ნატრიუმის სულფატები", "סולפטים של נתרן", "Natrijevi sulfati", "Nátrium-szulfátok", "Натријум сулфати", "Sulfatet e natriumit", "Sulfatos de sodio", "Натриум сулфати", "natriumsulfater", "Natrium sulfat", "Sulfatos de sódio", "Sulfates de sodium", "硫酸ナトリウム", "Sodium sulphates", "Siarczany sodu", "sirany sodné", "Sodyum sülfatlar", "Naatriumsulfaadid", "كبريتات الصوديوم", "Θειικά άλατα νατρίου", "โซเดียมซัลเฟต", "Նատրիումի սուլֆատներ", "Сульфати натрію", "Sulfati tas-sodju", "Natri sulfat", "Natriumsulfate", "Natríumsúlfat", "Sulfats de sodi", "Sírany sodné", "Натриеви сулфати", "황산 나트륨", "Сульфаты натрия", "Natriaj sulfatoj"],
  roles: [],
  children: ["en:e514i", "en:e514ii"]
}, {
  id: "en:e1422",
  name: "Acetylated distarch adipate",
  es: "adipato de dialmidón acetilado",
  aliases: ["Adipato di diamido acetilato", "acetyliertes Distärkeadipat", "Acetylated distarch adipate", "Adipate de diamidon acétylé", "Adipato de diamido acetilado", "Acetylowany adypinian diskrobiowy", "Acetylovaný diškrobadipát", "Acetilētais dicietes adipāts", "Acetilintas dikrakmolo adipatas", "Atsetüülitud ditärk lisadipaat", "Ακετυλιωμενο οξινο αδιπικο αμυλο", "Asetyloitu ditärkkelysadipaatti", "Acetyleret distivelseadipat", "Adipat diammidiku aċetilat", "Acetylert distivelseasdipat", "Geacetyleerd dizetmeeladipaat", "Adipat de diamidon acetilat", "Adipat de dimidó acetilat", "Acetiliran diškrobni adipat", "Acetylovaný zesíťovaný adipan škrobu", "Acetilezett dikeményítő-adipát", "Ацетилиран динишестен адипат", "adipato de dialmidón acetilado", "Acetylerat distärkelseadipat", "Дикрахмаладипат ацетилированный"],
  roles: ["emulsifier", "stabiliser", "thickener"],
  children: []
}, {
  id: "en:e918",
  name: "Nitrogen oxides",
  es: "Óxidos de nitrógeno",
  aliases: ["Ossidu tal-nitroġenu", "Nitrogenoxider", "Typpioksidit", "Οξείδια του αζώτου", "Azoto oksidai", "Lämmastikoksiidid", "Slāpekļa oksīdi", "Oxidy dusíka", "Tlenki azotu", "Óxidos de nitrogênio", "Oxydes d'azote", "Nitrogen oxides", "Ossidi di azoto", "Stickoxide", "Kväveoxider", "Óxidos de nitrógeno", "Азотни оксиди", "Nitrogén-oxidok", "Oxidy dusíku", "Dušikovi oksidi", "Oxizi de azot", "Stikstofoxiden"],
  roles: [],
  children: []
}, {
  id: "en:e470i",
  name: "E470i",
  es: "E470i",
  aliases: [],
  roles: [],
  children: []
}, {
  id: "en:e473a",
  name: "Oligoesters of sucrose type I",
  es: "Oligoésteres de sacarosa tipo I",
  aliases: ["Oligoestery sacharosy typu I", "Szacharóz oligoészterei", "Олигоестери от захароза тип I", "Oligoésteres de sacarosa tipo I", "Oligoestrar av sackaros typ I", "Oligoestri saharoze tipa I", "Oligo-esters van sacharose type I", "Oligoesteri de zaharoză de tip I", "Oligoestri tas-sukrożju tip I", "Sahharoosi oligoestrid tüüp I", "Sacharozės oligoestrai I tipo", "Ολιγοεστέρες σακχάρου τύπου I", "Sakkaroosin oligoesterit tyyppi I", "Oligoestere af sukrose type I", "Saharozes oligoestri I tips", "Oligoester von Saccharose Typ I", "Oligoesteri di saccarosio di tipo I", "Oligoesters of sucrose type I", "Oligoesters de saccharose de type I", "Oligoésteres de sacarose tipo I", "Oligoestry sacharozy typu I", "Oligoestery sacharózy typu I"],
  roles: ["emulsifier", "stabiliser"],
  children: []
}, {
  id: "en:e426",
  name: "Soybean hemicellulose",
  es: "Hemicelulosa de soja",
  aliases: ["Emiċelluloża tas-sojja", "hemiceluloza", "Soijapapuhemiselluloosa", "Ημικυτταρινη σογιας", "Soja hemitselluloos", "Sojų hemiceliuliozė", "Sojabønnehemicellulose", "Sojas pupiņu hemiceluloze", "Hemiceluloza sojowa", "Hemicelulose de soja", "Hémicellulose de soja", "Soybean hemicellulose", "Emicellulosa di soia", "Sojabohnen-polyose", "Sójová hemicelulóza", "Szója-hemicellulóz", "Sójová hemicelulosa", "Sojabönshemicellulosa", "Hemicelulosa de soja", "Соева хемицелулоза", "Hemiceluloza iz soje", "Hemicel·lulosa de soja", "Hemicellulose van soja", "Hemiceluloză de soia"],
  roles: [],
  children: []
}, {
  id: "en:e161b",
  name: "Lutein",
  es: "Luteína",
  aliases: ["לוטאין", "Lutein", "Luteïne", "Luteina", "لوتئین", "Luteină", "Luteína", "lutein", "лутеин", "Лутеин", "Luteīns", "Luteoliini", "Liuteinas", "luteïna", "лютеин", "luteino", "ルテイン", "Lutéine", "Luteín", "Λουτεϊνη", "Luteiin", "لوتين", "Лютеїн"],
  roles: ["colour"],
  children: ["en:e161bi", "en:e161bii", "en:e161biii"]
}, {
  id: "en:e523",
  name: "Aluminium ammonium sulphate",
  es: "Sulfato de aluminio y amonio",
  aliases: ["Sulfato de aluminio y amonio", "Алуминиевоамониев сулфат", "Aluminiumammoniumsulfat", "Síran hlinito-amonný", "Alumínium-ammónium-szulfát", "Sulfat doble d'alumini i amoni", "Amonijev aluminijev sulfat", "Sulfat de aluminiu și amoniu", "Aluminiumammoniumsulfaat", "Sulfat tal-aluminju u tal-ammonju", "Aliuminio amonio sulfatas", "Aluminium ammonium sulphate", "Θειικο αργιλιοαμμωνιο", "Alumiiniammoniumsulfaatti", "Alumīnija amonija sulfāts", "Síran hlinitoamónny", "Solfato di alluminio e ammonio", "Sulfato de alumínio e amónio", "Sulfate d'aluminium ammonique", "Siarczan glinowo-amonowy"],
  roles: ["stabiliser"],
  children: []
}, {
  id: "en:e182",
  name: "Orcein",
  es: "Orceína",
  aliases: ["ออร์ซีน", "Орцеїн", "Orsein", "Orcein", "أورسين", "Orceinas", "Orseiin", "Ορσεΐνη", "Orseiini", "Orceín", "Orseille", "奥cein", "Orceína", "オルセイン", "Orceina", "Orceīns", "Орсеин", "Орцеин", "오르세인", "Orceino", "Orchil", "Orceïna", "אורצאין"],
  roles: [],
  children: []
}, {
  id: "en:e354",
  name: "Calcium tartrate",
  es: "Tartrato de calcio",
  aliases: ["Tartrat de calci", "Kalcijev tartrat", "Tartrat de calciu", "Calciumtartraat", "Tartrato de calcio", "Калциев тартарат", "Kalciumtartrat", "Vinan vápenatý", "Kalcium-tartarát", "Kalcija tartrāts", "Vínan vápenatý", "Calcium tartrate", "Tartrato di calcio", "Calciumtartrat", "Tartarato de cálcio", "Tartrate de calcium", "Winian wapnia", "Tartrat tal-kalċju", "Kaltsiumtartraat", "Kalcio tartratas", "Τρυγικο ασβεστιο", "Kalsiumtartraatti"],
  roles: [],
  children: []
}, {
  id: "en:e478",
  name: "Lactylated fatty acid esters of glycerol and propane-1",
  es: "Ésteres lactilados de ácidos grasos de glicerol y propano-1",
  aliases: ["Glicerīna un propāna-1 laktilēti taukskābju esteri", "Laktylowane estry kwasów tłuszczowych glicerolu i propanu-1", "Ésteres lactilados de ácidos graxos de glicerol e propano-1", "Esters lactyles d'acides gras du glycérol et du propane-1", "Lactylated fatty acid esters of glycerol and propane-1", "Esteri lattoilati di acidi grassi di glicerolo e propano-1", "Lactylierte Fettsäureester von Glycerin und Propan-1", "Laktylované estery mastných kyselín glycerolu a propánu-1", "Laktilirani esteri masnih kiselina glicerola i propana-1", "Γαλακτυλιωμένοι εστέρες λιπαρών οξέων γλυκερόλης και προπανίου-1", "Glyserolin ja propyleeniglykolin laktyloitujen rasvahappojen esterit", "Glütserooli ja propaan-1 lakteeritud rasvhapete estrid", "Glicerolio ir propano-1 laktiliuotų riebalų rūgščių esteriai", "Lactylerede fedtsyreestere af glycerol og propan-1", "Laktilirani estri maščobnih kislin glicerola in propana-1", "Èsters lactilats d'àcids grassos de glicerol i propà-1", "Mengsel van glycerol- en propyleenglycolesters met melkzuur en vetzuren", "Esteri lactilați ai acizilor grași ai glicerolului și propanului-1", "tej- és zsírsavak glicerin és propilén-glikol-észterei", "Laktylované estery mastných kyselin glycerolu a propanu-1", "Laktylerade fettsyraestrar av glycerol och propan-1", "Ésteres lactilados de ácidos grasos de glicerol y propano-1", "Лактилирани естери на мастни киселини на глицерол и пропан-1"],
  roles: [],
  children: []
}, {
  id: "en:e570",
  name: "Fatty acids",
  es: "Ácidos grasos",
  aliases: ["Aċidi grassi", "Fedtsyrer", "Rasvahapot", "Λιπαρα οξεα", "Riebalų rūgštys", "Rasvhapped", "Taukskābes", "Mastné kyseliny", "Kwasy tłuszczowe", "Speisefettsäuren", "Acidi grassi", "Fatty acids", "Acide stéarique", "Ácidos gordos", "Fettsyror", "Ácidos grasos", "Мастни киселини", "Zsírsavak", "Maščobne kisline", "Àcid gras", "Acizi grași", "Vetzuren"],
  roles: [],
  children: []
}, {
  id: "en:e141ii",
  name: "Copper complexes of chlorophyllins",
  es: "Complejos cúpricos de clorofilinas",
  aliases: ["Complexe de cupru ale clorofilinelor", "Kopercomplexen van chlorofylinen", "Bakrovi kompleksi klorofilinov", "Kopparkomplex av klorofylliner", "Complejos cúpricos de clorofilinas", "Медни комплекси на хлорофилини", "Měďnaté komplexy chlorofylinů", "Klorofillinek rézkomplexei", "Meďnaté komplexy chlorofylínov", "Kompleksy miedziowe chlorofilin", "Kupferkomplexe der Chlorophylline", "Complessi rameici delle clorofilline", "Copper complexes of chlorophyllins", "Complexos cúpricos de clorofilinas", "Sels de sodium et de potassium de complexes cupriques de chlorophyllines", "Hlorofilīnu vara kompleksi", "Chlorophyllin-kobber-kompleks", "Klorofylliinikuparikompleksit", "Συμπλοκα των χλωροφυλλινων με χαλκο", "Klorofülliinide vasekompleksid", "Chlorofilinų vario kompleksiniai junginiai", "Kumplessi tar-ram tal-klorofillini"],
  roles: ["colour"],
  children: []
}, {
  id: "en:e163x",
  name: "E163x",
  es: "E163x",
  aliases: [],
  roles: [],
  children: []
}, {
  id: "en:e160e",
  name: "Beta-apo-8′-carotenal (c30)",
  es: "Beta-apo-8′-carotenal (c30)",
  aliases: ["Beta-apo-8′-carotenal (c30)", "Beta-apo-8'-carotenal (c30)", "Beta-apo-8'-karotenal (c30)", "Beta-apo-8′-karotenal (c 30)", "Бета-апо-8′-каротенал (c30)", "Béta-apo-8′-karotinal (c30)", "Β-apo-8′-karotenal (c 30)", "Beta-apo-8′-karotenal (c30)", "Apocaroténal 8'", "Beta-apo-8′-carotenale (c30)", "Beta-apo-8′-Carotinal (C30)", "Βeta-apo-8′-karotenāls (c30)", "Beta-apo-8′-carotenal(c30)", "Β-απο-8′-καροτεναλη (c30)", "Beta-apo-8′-karotenaali (c30)", "Beta-apo-8′-karotenalis (c30)", "Beeta-apo-8′-karotenaal (c30)", "beta-apo-8'-carotenal"],
  roles: ["colour"],
  children: []
}, {
  id: "en:e557",
  name: "hemimorphite",
  es: "Hemimorfita",
  aliases: ["hemimorfit", "Ημιμορφίτης", "Hemimorfiitti", "Hemimorfita", "Kiselgalmeja", "hemimorphite", "Hemimorphit", "Emimorfite", "Silicate de zinc", "Zinksilicaat", "Hemimorfit"],
  roles: [],
  children: []
}, {
  id: "en:e155",
  name: "Brown ht",
  es: "Marrón ht",
  aliases: ["Brūnais ht", "Bruno ht", "Braun ht", "Brown ht", "Brun chocolat HT", "Castanho ht", "Brąz ht", "Hnedá ht", "Kannella ht", "Rudasis ht", "Pruun ht", "Καστανο ht", "Ruskea ht", "Marró HT", "Rjavo ht", "Bruin ht", "Brun ht", "Hněď ht", "Barna HT", "Marrón ht", "Кафяво ht"],
  roles: ["colour"],
  children: []
}, {
  id: "en:e1518", 
  name: "Glyceryl triacetate",
  es: "Triacetato de glicerilo",
  aliases: ["gliceril triacetat", "Triaċetat tal-gliċeril", "Glyceryltriacetat", "Τριακετινη (τριγλυκεριδιο του οξικου οξεος)", "Glyserolitriasetaatti", "Gliceriltriacetatas", "Glütserüültriatsetaat", "Glicerīna triacetāts", "Glyceryltriacetát", "Trioctan glicerolu", "Triacetato de glicerilo", "Triacétine", "Glyceryl triacetate", "Triacetato di glicerile", "Glycerintriacetat", "Глицерил триацетат", "Gliceril-triacetát", "Glyceryl-triacetát", "Gliceriltriacetat", "Triacetat de gliceril", "Glyceryltriacetaat"],
  roles: ["carrier", "emulsifier", "humectant"],
  children: []
}, {
  id: "en:e343i",
  name: "Monomagnesium phosphate",
  es: "Fosfato de monomagnesio",
  aliases: ["磷酸二氢镁", "Fosfato de monomagnési", "Phosphate monomagnésique", "Monomagnesium phosphate", "Fosfato di magnesio", "Monomagnesiumphosphat", "Fosforan monomagnezu", "Fosforečnan horečnatý", "Monomagnija fosfāts", "Magneesiumdivesinikfosfaat", "Monomagnio fosfatas", "فوسفات المغنسيوم", "Monomagnesiumfosfaatti", "Δισοξινο φωσφορικο μαγνησιο", "Fosfat monomanjeżiku", "Monomagnesiumfosfaat", "Fosfat monomagnezic", "Magnezijum fosfat", "Monomagnezijev fosfat", "மக்னீசியம் பாசுபேட்டு", "Monomagnézium-foszfát", "Dihydrogenfosforečnan hořečnatý", "Мономагнезиев фосфат", "Fosfato de monomagnesio", "Monomagnesiumfosfat", "Дигидроортофосфат магния"],
  roles: ["stabiliser", "thickener"], 
  children: []
}, {
  id: "en:e470b",
  name: "Magnesium salts of fatty acids",
  es: "Sales magnésicas de ácidos grasos",
  aliases: ["Hořečnaté soli mastných kyselin", "Zsírsavak magnéziumsói", "Sales magnésicas de ácidos grasos", "Магнезиеви соли на мастни киселини", "Magnesiumsalter av fettsyror", "Magnesiumzouten van vetzuren", "Săruri de magneziu ale acizilor grași", "Sal magnèsica d'àcids grassos", "Magnezijeve soli maščobnih kislin", "Rasvhapete magneesiumisoolad", "Magnesium salts of fatty acids", "Αλατα λιπαρων οξεων με μαγνησιο", "Rasvahappojen magnesiumsuolat", "Magnesiumsalte af fedtsyrer", "magn soli masnih kiselina", "Imlieħ tal-manjeżju tal-aċidi grassi", "Magnesiumsalter av fettsyrer", "Sali di magnesio degli acidi grassi", "Magnesiumsalze der Speisefettsäuren", "Sais de magnésio de ácidos gordos", "Sels de magnésium d'acides gras", "Sole magnezowe kwasów tłuszczowych", "Horečnaté soli mastných kyselín", "Taukskābju magnija sāļi"],
  roles: ["emulsifier", "stabiliser", "thickener"],
  children: []
}, {
  id: "en:e331",
  name: "Sodium citrates",
  es: "Citratos de sodio",
  aliases: ["Natriumcitrater", "natrio citratas", "Naatriumtsitraadid", "Natriumsitraatit", "natriumsitrater", "ċitrat tas-sodju", "natrijevi citrati", "Citrates de sodium", "Sodium citrates", "Citrati di sodio", "Natriumcitrate", "cytryniany sodu", "nātrija citrāts", "натриеви цитрати", "Citratos de sodio", "natriumsitrat", "nátrium-citrátok", "Citronany sodné", "Натрия гидроцетрат", "citrați de sodiu", "Natriumcitraten", "Citrats de sodi"],
  roles: ["emulsifier", "sequestrant", "stabiliser"],
  children: ["en:e331i", "en:e331ii", "en:e331iii"]
}, {
  id: "en:e101a",
  name: "E101a food additive",
  es: "5'-fosfato de riboflavina sódica",
  aliases: ["5'-fosfat de riboflavină sodică", "5'-fosfato de riboflavina sódica", "5'-phosphate sodique de riboflavine", "5'-Phosphat Natriumsalz der Riboflavin", "natrijev riboflavin 5-fosfat", "Flaviinimononukleotidi"],
  roles: ["colour"],
  children: []
}, {
  id: "en:e408",
  name: "Bakers yeast glycan",
  es: "Bakers yeast glycan",
  aliases: ["Furcelleran", "Pékélesztő-glikán", "Glycane de levure de boulanger", "Bakers yeast glycan"],
  roles: [],
  children: []
}, {
  id: "en:e500",
  name: "Sodium carbonates",
   es: "Carbonatos de sodio",
  aliases: ["Carbonatos de sódio", "Carbonates de sodium", "Carbonati di sodio", "Natriumcarbonate", "Sodium carbonates", "Węglany sodu", "Uhličitany sodné", "Nātrija karbonāti", "Naatriumkarbonaadid", "Natrio karbonatai", "Ανθρακικά νάτρια", "natriumkarbonaatit", "natriumkarbonater", "Karbonati tas-sodju", "natrijevi karbonati", "Natriumkarbonater", "Natriumcarbonaten", "Carbonati de sodiu", "Carbonats de sodi", "Natrijevi karbonati", "קרבונטים של נתרן", "nátrium-karbonátok", "Натриеви карбонати", "Carbonatos de sodio", "Карбонаты натрия"],
  roles: ["stabiliser", "thickener"],
  children: ["en:ammonium-and-sodium-carbonates", "en:diphosphates-and-sodium-carbonates", "en:e500i", "en:e500ii", "en:e500iii"]
}, {
  id: "en:e515ii",
  name: "Potassium hydrogen sulphate",
  es: "Sulfato ácido de potasio",
  aliases: ["Hydrogensíran draselný", "Solfato acido di potassio", "Potassium hydrogen sulphate", "Kaliumhydrogensulfat", "Hidrogenossulfato de potássio", "Sulfate acide de potassium", "Wodorosiarczan potasu", "Kālija hidrogēnsulfāts", "Kalio vandenilio sulfatas", "Kaaliumvesiniksulfaat", "Οξινο θειικο καλιο", "Kaliumvetysulfaatti", "Sulfat idroġenat tal-potassju", "Bisulfat de potasiu", "Kaliumwaterstofsulfaat", "Kalijev hidrogensulfat", "Sulfato ácido de potasio", "Калиев хидроген сулфат", "Kaliumvätesulfat", "Kálium-hidrogén-szulfát"],
  roles: [],
  children: []
}, {
  id: "en:e315",
  name: "Erythorbic acid",
  es: "Ácido eritórbico",
  aliases: ["Eritorbo rūgštis", "Isoaskorbiinhape", "Erytorbiinihappo", "Ερυθορβικο οξυ", "Erythorbinsyre", "izoaskorbinska kiselina", "Aċidu eritorbiku", "Acido eritorbico", "Isoascorbinsäure", "Erythorbic acid", "Ácido eritórbico", "Acide érythorbique", "Kwas izoaskorbinowy (erytrobowy)", "Kyselina erytorbová", "Eritorbik asit", "Eritrobīnskābe", "Kyselina erythorbová", "Eritroaszkorbinsav", "Ериторбинова киселина", "Isoaskorbinsyra", "Erythorbinezuur", "Acid eritorbic", "Àcid eritòrbic", "Eritorbinska kislina"],
  roles: ["antioxidant"],
  children: []
}, {
  id: "en:e1450",
  name: "Starch sodium octenyl succinate",
  es: "Octenilsuccinato sódico de almidón",
  aliases: ["Ottenilsuċċinat tal-lamtu u tas-sodju", "Krakmolo natrio oktenilsukcinatas", "Naatriumoktenüülsuktsinaattärklis", "Οκτενυληλεκτρικο αμυλονατριο", "Tärkkelysnatriumoktenyylisukkinaatti", "Stivelsenatriumoctenylsuccinat", "Cietes nātrija oktenilsukcināts", "Octenilsuccinato de amido sódico", "Octényle succinate d'amidon sodique", "Starch sodium octenyl succinate", "Ottenilsuccinato di amido e sodio", "Stärkenatriumoctenylsuccinat", "Sól sodowa oktenylobursztynianu skrobiowego", "Škrobový oktenyljantaran sodný", "Keményítő-nátrium-oktenil-szukcinát", "Sodná sůl oktenyljantaranu škrobu", "Octenilsuccinato sódico de almidón", "Натриев октенил сукцинат на нишестето", "Natriumoktenylsuccinatstärkelse", "Octenilsuccinat sòdic de midó", "Natrijev oktenilsukcinat škroba", "Zetmeelnatriumoctenylsuccinaat", "Octenilsuccinat de amidon și sodiu"],
  roles: ["emulsifier", "stabiliser", "thickener"],
  children: []
}, {
  id: "en:e466",
  name: "Sodium carboxy methyl cellulose",
  es: "Carboximetilcelulosa sódica",
  aliases: ["Ċelluloża karbossimetilika tas-sodju", "karboksi metil celuloza", "Карбоксиметилцелюлоза", "Natriumcarboxymethylcellulose", "Naatriumkarboksümetüültselluloos", "Natrio karboksimetilceliuliozė", "كربوكسي ميثيل السليولوز", "Karboksimetyyliselluloosa", "Αλας με νατριο της καρβοξυμεθυλοκυτταρινης", "Nātrija karboksimetilceluloze", "Sodná soľ karboxymetylcelulózy", "Carboximetilcelulose de sódio", "羧甲基纖維素", "Carboxyméthylcellulose", "カルボキシメチルセルロース", "Sodium carboxy methyl cellulose", "Carbossimetilcellulosa sodica", "Carboxymethylcellulose", "Sól sodowa karboksymetylocelulozy", "Карбоксиметилцеллюлоза", "Carboximetilcelulosa sódica", "Натриева карбокси метил целулоза", "Karboximetylcellulosa", "Nátrium-karboxi-metil-cellulóz", "Sodná sůl karboxymethylcelulosy", "Carboximetil cel·lulosa sòdica", "Natrijeva karboksimetil celuloza", "کربوکسی متیل سلولز", "Carboximetilceluloză de sodiu"],
  roles: ["emulsifier", "humectant", "stabiliser", "thickener"],
  children: []
}, {
  id: "en:e924a",
  name: "Potassium bromate",
  es: "Bromato de potasio",
  aliases: ["Bromato di potassio", "पोटेशियम ब्रोमेट", "Kālija bromāts", "Kalio bromatas", "Kaliumbromaatti", "Kalium bromat", "Kaliumbromaat", "برمات پتاسیم", "Bromat de potasiu", "Kalijev bromat", "ברומט אשלגן", "Kálium-bromát", "Калијум бромат", "Bromat kaliumi", "Bromato de potasio", "Kaliumbromat", "Калиум бромат", "Bromate de potassium", "Bromato de potássio", "臭素酸カリウム", "Potassium bromate", "Bromian potasu", "Bromičnan draselný", "Potasyum bromat", "Kaaliumbromaat", "برومات البوتاسيوم", "Βρωμικό κάλιο", "โพแทสเซียมโบรเมต", "Бромат калію", "Bromat tal-potassju", "KBrO3", "Kali bromat", "Bromat de potassi", "Калиев бромат", "브롬산 칼륨", "Бромат калия", "Kalia bromato"],
  roles: [],
  children: ["en:e924"]
}, {
  id: "en:e160bii",
  name: "Annatto norbixin",
  es: "norbixina",
  aliases: ["norbixina de bixa", "norbiksin", "annatto norbixine", "norbixină (i)", "norbixin", "анато норбиксин", "norbixina", "norbixin i.", "norbiksīns", "Norbixine", "norbissina", "Norbixin", "Annatto norbixin", "norbiksyna", "norbixín", "annato norbixin", "norbiksinas", "norbiksiin (i)", "νορμπιξινη (i)", "norbiksiini"],
  roles: ["colour"],
  children: []
}, {
  id: "en:e161i",
  name: "Citranaxanthin",
  es: "Citranaxantina",
  aliases: ["Citranaxantină", "Citranaxanthine", "Citranaxantina", "Citranaksantin", "Цитранксантин", "시트라나크산틴", "Citranaxanthin", "Citranaxantin", "Citranaxantín", "柑橘黄质", "シトラナキサンチン", "Cytranaksantyna", "Sitranaksantin", "Citranaksantīns", "ซิทรานาแซนทิน", "Tsitranaksantiin", "Citranaksantinas", "سيتراناكسانثين", "Sitranaksantiini", "Κιτραναξανθίνη"],
  roles: [],
  children: []
}, {
  id: "en:e932",
  name: "Nitrogen oxide",
  es: "Óxido de nitrógeno",
  aliases: ["תחמוצת חנקן", "Dušikov oksid", "Oxid de azot", "اکسید نیتروژن", "Stikstofoxide", "Nitrogen oksida", "Óxido de nitróxeno", "Азотен оксид", "Kväveoxid", "Óxido de nitrógeno", "Oksid azoti", "Азотни оксид", "Nitrogén-oxid", "Slāpekļa oksīds", "नाइट्रोजन ऑक्साइड", "Ossido di azoto", "Azot oksid", "Typpioksidi", "Azoto oksidas", "Òxid de nitrogen", "Stikstofoksied", "Ôxít nitơ", "Nitrogena oksido", "Оксид азота", "질소 산화물", "Oxid dusíku", "Azot oksit", "Oxid dusíka", "Tlenek azotu", "Nitrogen oxide", "Stickstoffoxid", "氮氧化物", "Óxido de azoto", "窒素酸化物", "Oxyde d'azote", "Ossidu tan-nitroġenu", "Nitrogenoxid", "Оксид азоту", "ไนโตรเจนออกไซด์", "Οξείδιο του αζώτου", "Lämmastikoksiid", "أكسيد النيتروجين"],
  roles: [],
  children: []
}, {
  id: "en:e927a",
  name: "Azodicarbonamide",
  es: "Azodicarbonamida",
  aliases: ["Azodikarbonamid", "Atsodikarbonamidi", "Azodikarbamidas", "Azodicarbonammide", "Azodikarbamīds", "एजोडिकार्बोनामाइड", "Азодикарбонамид", "Azodicarbonamida", "Azodikarbondiamida", "Azodicarbonamidă", "آزودیکربونآمید", "Azodicarbonamide", "அசோ-டை-கார்போனமைடு", "אזודיקרבונמיד", "Azodikarbamid", "azodikarbonamid", "Азодикарбонамід", "แอโซไดคาร์บอนาไมด์", "Αζοδικαρβοναμίδιο", "Asodikarbamiid", "أزوديكاربوناميد", "Ażodikarbonamide", "Azodicarboxamid", "Azoformamide", "偶氮甲酰胺", "アゾジカーボンアミド", "아조디카본아마이드", "Azodicarbonamid", "Azodikarbonamido"],
  roles: [],
  children: []
}, { 
  id: "en:e203",
  name: "Calcium sorbate",
  es: "Sorbato cálcico",
  aliases: ["Canxi sorbat", "Calciumsorbaat", "کلسیم سوربات", "Sorbat de calciu", "Sorbat de calci", "Kalcijev sorbat", "Kalcijum sorbat", "கால்சியம் சார்பேட்டு", "Kalcium-szorbát", "Sorban vápenatý", "Sorbato cálcico", "Калциев сорбат", "Kalciumsorbat", "Sorbate de calcium", "Sorbato de cálcio", "ソルビン酸カルシウム", "Calciumsorbat", "Sorbato di calcio", "Calcium sorbate", "Sorbinian wapnia", "Kalcija sorbāts", "Kalcio sorbatas", "Kaltsiumsorbaat", "سوربات الكالسيوم", "Kalsiumsorbaatti", "Σορβικο ασβεστιο", "kalcijev sorbat", "Sorbat tal-kalċju"],
  roles: ["preservative"],
  children: []
}, {
  id: "en:e443",
  name: "Brominated vegetable oil",
  es: "Aceite vegetal bromado",
  aliases: ["Bromovaný rastlinný olej", "Bromowany olej roślinny", "Brominated vegetable oil", "Bromiertes Pflanzenöl", "溴化植物油", "Óleo vegetal bromado", "臭素化植物油", "Huile végétale bromée", "Bromlu bitkisel yağ", "Bromeret vegetabilsk olie", "Бромована рослинна олія", "น้ำมันพืชโบรมีน", "Βρωμιούχο φυτικό έλαιο", "Bromitud taimne õli", "زيت نباتي مبروم", "Żejt veġetali brominat", "Bromirano biljno ulje", "Dầu thực vật brom hóa", "Oli vegetal bromat", "브롬화 식물성 기름", "Бромирано растително масло", "Bromovaný rostlinný olej", "Bromigita vegetala oleo", "Бромированное растительное масло", "Olio vegetale bromurato", "Bromēta augu eļļa", "ब्रोमिनेटेड वनस्पति तेल", "Bromlaşdırılmış bitki yağı", "Bromattu kasviöljy", "Bromintas augalinis aliejus", "Ulei vegetal bromurat", "روغن نباتی برم دار", "Gebromeerde plantaardige olie", "Bromirano rastlinsko olje", "שמן צמחי מבורמם", "Бромиран растително масло", "Bromerad vegetabilisk olja", "Aceite vegetal bromado", "Броминовано биљно уље", "Brómozott növényi olaj", "Minyak nabati terbrominasi", "Minyak sayuran berbromin"],
  roles: [],
  children: []
}, {
  id: "en:e546",
  name: "Magnesium pyrophosphate",
  es: "pirofosfato de magnesio",
  aliases: ["magnezyum pirofosfat", "magnija pirofosfāts", "Magnesium pyrophosphate", "pirofosfato di magnesio", "Magnesiumpyrophosphat", "Pyrophosphate de magnésium", "焦磷酸镁", "pirofosfato de magnésio", "ピロリン酸マグネシウム", "pirofosforan magnezu", "pyrofosforečnan horečnatý", "magnezijev pirofosfat", "pirofosfat tal-manjeżju", "magneesiumpürofosfaat", "magnio pirofosfatas", "بيروفوسفات المغنيسيوم", "Magnesiumpyrofosfaatti - Magnesiumpyrofosfaattia", "πυροφωσφορικό μαγνήσιο", "maqnezium pirofosfat", "magnesiumpyrophosphat", "пірофосфат магнію", "pirofosfat de magnesi", "מגנזיום פירופוספט", "Magnesiumpyrofosfaat", "pirofosfat de magneziu", "پیروفسفات منیزیم", "пирофосфат магния", "magnesium pirofosfat", "magnezia pirofosfato", "магнезијум пирофосфат", "hořečnatý pyrofosfát", "Magnézium-pirofoszfát", "pirofosfato de magnesio", "Магнезиев пирофосфат", "pirofosfat magnezi", "магнезиум пирофосфат", "magnesiumpyrofosfat", "마그네슘 피로포스페이트"],
  roles: [],
  children: [] 
}, {
  id: "en:e260",
  name: "Acetic acid",
  es: "Ácido acético",
  aliases: ["Ácido acético", "Asam asetat", "ఎసిటిక్ ఆమ్లం", "ਐਸੀਟਿਕ ਤੇਜ਼ਾਬ", "Asid asetik", "сирћетна киселина", "Ecetsav", "Оцетна киселина", "Ättiksyra", "Сірке қышқылы", "Acetatna kiselina", "அசிட்டிக் காடி", "Ocetna kislina", "Sirćetna kiselina", "חומצה אצטית", "Acetat-acido", "Azijnzuur", "azido azetiko", "ایسیٹک ایسڈ", "Acid acetic", "воцатная кіслата", "استیک اسید", "Etikkahappo", "Acto rūgštis", "Sirkə turşusu", "एसिटिक अम्ल", "Etiķskābe", "Asid asetig", "Acido acetico", "Acido acetic", "aceta acido", "Kyselina octová", "아세트산", "Àcid acètic", "Acidum aceticum", "ඇසිටික් අම්ලය", "axit axetic", "Ediksýra", "Asynsuur", "അസറ്റിക് അമ്ലം", "Aekzoer", "Asam asétat", "Aċidu aċetiku", "Octena kiselina", "অ্যাসিটিক এসিড", "Mama aqha p'uchqu", "eddiksyre", "Οξικο οξυ", "Äädikhape", "حمض الخليك", "Eddikesyre", "Քացախաթթու", "оцтова кислота", "Asidong asetiko", "กรดน้ำส้ม", "ಅಸಿಟಿಕ್ ಆಮ್ಲ", "Asetik asit", "Kwas octowy", "Acetic acid", "Essigsäure", "Acide acétique", "Aigéad aicéiteach"],
  roles: ["preservative"],
  children: []
}, {
  id: "en:e622",
  name: "Monopotassium glutamate",
  es: "Glutamato de monopotasio",
  aliases: ["Monokalijev glutamat", "Glutamat de monopotassi", "Monokaliumglutamaat", "Glutamat monopotasic", "Monokálium-glutamát", "Glutaman draselný", "Monokaliumglutamat", "Монокалиев глутамат", "Glutamato de monopotasio", "Monokālija glutamāts", "Glutaminian monopotasowy", "Glutamato monopotássico", "Glutamate monopotassique", "Glutammato di monopotassio", "Monopotassium glutamate", "Glutamat monopotassiku", "Monokaliumglutamaatti", "Οξινο γλουταμινικο καλιο", "Kaaliumvesinikglutamaat", "Monokalio glutamatas"],
  roles: [],
  children: []
}, {
  id: "en:e323",
  name: "Anoxomer",
  es: "Anoxómero",
  aliases: ["Аноксомер", "Anoxomer", "Anoxómero", "아녹소머", "Anoxòmer", "Anoksomer", "Anoxomeer", "Anossomeru", "Anoksomeras", "Anoksomeer", "أنوكسومير", "Ανοξομερές", "Anoksomeeri", "Anoksoomer", "Anoksomers", "阿诺索默", "アノクソマー", "Anoxomère", "Anossomero"],
  roles: [],
  children: []
}, {
  id: "en:e958",
  name: "Glycyrrhizin",
  es: "Glicirricina",
  aliases: ["Глицирризин", "Glicirizino", "Glicirrizin", "Glycyrrhizin", "글리시리진", "Glicirricina", "Глициризин", "Glicirizin", "גליציריזין", "Glicirrizina", "Glycyrrhizinezuur", "Glicirizină", "Γλυκυρριζίνη", "Glysyrritsiini", "Glicirizinas", "Glütsürrisiin", "غليسيريزين", "Гліциризин", "Qlisirrizin", "Glicirizīns", "Glisirizin", "Glicyryzyna", "甘草甜素", "グリチルリチン", "Acide glycyrrhizique et sels", "Glycyrrhizín"],
  roles: ["sweetener"],
  children: []
}, {
  id: "en:e713",
  name: "Tylosin",
  es: "Tilosina",
  aliases: ["Тилозин", "Tilosin", "Tylosin", "타이로신", "Tilosina", "Tilozin", "Tylosine", "تیلوزین", "Tylosiini", "Τυλοσίνη", "Tülosiin", "Tilozinas", "تايلوزين", "ไทโลซิน", "Tilozīns", "Tylozyna", "チロシン", "泰乐菌素", "Tylosine Antibiotique", "Tylosín"],
  roles: [],
  children: [] 
}, {
  id: "en:e554",
  name: "Sodium aluminium silicate",
  es: "Silicato de sodio y aluminio",
  aliases: ["Natriumaluminiumsilicat", "Naatriumalumiiniumsilikaat", "Natrio aliuminio silikatas", "Πυριτικο αργιλιονατριο", "Natriumalumiinisilikaatti", "Silikat tas-sodju u tal-aluminju", "Kremičitan hlinitosodný", "Silicate alumino-sodique", "Silicato de alumínio e sódio", "Silicato di sodio e alluminio", "Sodium aluminium silicate", "Krzemian glinowo-sodowy", "Nātrija alumīnija silikāts", "Натриевоалуминиев силикат", "Silicato de sodio y aluminio", "Natriumaluminiumsilikat", "Nátrium-alumínium-szilikát", "Křemičitan sodno-hlinitý", "Silicat de aluminiu și sodiu", "Natriumaluminiumsilicaat", "Silicat de sodi i alumini", "Natrijev aluminijev silikat"],
  roles: [],
  children: []
}, {
  id: "en:e370",
  name: "1‚4-Heptonolactone",
  es: "1‚4-Heptonolactona",
  aliases: ["1‚4-Heptonolaktons", "1‚4-Heptonolakton", "1‚4-ヘプタノラクトン", "1‚4-庚内酯", "1‚4-Heptonolactona", "4-Heptonolactone", "1‚4-Heptonolactone", "1‚4-Eptonolattone", "1‚4-Heptonolacton", "1‚4-Heptonolaktón", "1‚4-Eptonolakton", "1‚4-Επτονολακτόνη", "1‚4-Heptonolaktoni", "1‚4-Heptonolaktonas", "1‚4-Heptonolaktoon", "1‚4-هبتونولاكتون", "1‚4-Гептонолактон", "1‚4-เฮปโทโนแลคโตน", "Delta-lacton", "1‚4-Heptonolactonă", "1‚4-Heptonolaktono", "4-Heptonolaktonát", "1‚4-Хептонолактон", "1‚4-헵톤락톤"],
  roles: [],
  children: []
}, {
  id: "en:e141",
  name: "Copper complexes of chlorophylls and chlorophyllins",
  es: "Complejos cúpricos de clorofilas y clorofilinas",
  aliases: ["Complexe de cupru ale clorofilelor și clorofilinei", "Kopercomplexen van chlorophyllen", "bakreni kompleksi klorofila i klorofilina", "Complexos cúprics de clorofil i clorofilines", "Complejos cúpricos de clorofilas y clorofilinas", "Klorofillok és klorofillinek rézkomplexei", "Mědnaté komplexy chlorofylů a chlorofylinů", "Complexe cuivrique des chlorophylles et des chlorophyllines", "Complessi rameici delle clorofille e delle clorofilline", "Kupferhaltigen Komplexe der Chlorophylle und Chlorophylline", "Copper complexes of chlorophylls and chlorophyllins", "Kompleksy miedziowe chlorofili i chlorofilin", "Klorofylliinikuparikompleksit ja Klorofylli-kuparikompleksi"],
  roles: ["colour"],
  children: ["en:e141i", "en:e141ii"]
}, {
  id: "en:e357",
  name: "Potassium adipate",
  es: "Adipato de potasio",
  aliases: ["Kalijev adipat", "Adipat de potassi", "Kaliumadipaat", "Adipat de potasiu", "Kálium-adipát", "Adipan draselný synonyma", "Kaliumadipat", "Калиев адипат", "Adipato de potasio", "Kālija adipināts", "Adypinian potasu", "Adipate de potassium", "Adipato de potássio", "Potassium adipate", "Adipato di potassio", "Adipan draselný", "Adipat tal-potassju", "Αδιπικο καλιο", "Kaliumadipaatti", "Kalio adipatas", "Kaaliumadipaat"],
  roles: [],
  children: []
}, {
  id: "en:e212",
  name: "Potassium benzoate",
  es: "Benzoato potásico",
  aliases: ["Benzoan draselný", "Kálium-benzoát", "Kaliumbensoat", "Benzoato potásico", "Калиев бензоат", "Kalijev benzoat", "Benzoat de potassi", "Kaliumbenzoaat", "Benzoat de potasiu", "Benżoat tal-potassju", "Kaliumbentsoaatti", "Βενζοϊκο καλιο", "Kaaliumbensoaat", "Kalio benzoatas", "Kaliumbenzoat", "Kālija benzoāts", "Benzoesan potasu", "Benzoato di potassio", "Potassium benzoate", "Benzoate de potassium", "Benzoato de potássio"],
  roles: ["preservative"],
  children: []
}, {
  id: "en:e331ii",
  name: "Disodium citrate",
  es: "Citrato disódico",
  aliases: ["Citran disodný", "Cytrynian disodowy", "Dinatriumcitrat", "Citrato disodico", "Disodium citrate", "Citrato dissódico", "Citrate disodique", "Dinātrija citrāts", "Οξινο κιτρικο νατριο", "Dinatriumsitraatti", "Dinatrio citratas", "Naatriumvesiniktsitraat", "Ċitrat disodiku", "Citrat disodic", "Dinatriumcitraat", "Dinatrijev citrat", "Citrat disòdic", "Динатриев цитрат", "Citrato disódico", "Dinátrium-citrát"], 
  roles: ["emulsifier", "sequestrant", "stabiliser"],
  children: []
}, {
  id: "en:e500ii",
  name: "Sodium hydrogen carbonate",
  es: "Bicarbonato de sodio",
  aliases: ["Sodyum bikarbonat", "ખાવાનો સોડા", "ಸೋಡಿಯಂ ಬೈ ಕಾರ್ಬೋನೇಟ್", "Hydrogenuhličitan sodný", "碳酸氢钠", "Hidrogenocarbonato de sódio", "Carbonate acide de sodium", "炭酸水素ナトリウム", "Sodium hydrogen carbonate", "Natriumhydrogencarbonat", "Wodorowęglan sodu", "Natriumbikarbonat", "সোডিয়াম বাইকার্বনেট", "Karbonat idroġenat tas-sodju", "Natrijev hidrogenkarbonat", "സോഡിയം ബൈകാർബണേറ്റ്", "โซเดียมไบคาร์บอเนต", "Гідрокарбонат натрію", "Սոդա", "natriumhydrogenkarbonat", "Naatriumvesinikkarbonaat", "بيكربونات الصوديوم", "Οξινο ανθρακικο νατριο", "Bicarbonat de sodi", "ସୋଡ଼ିଅମ ବାଇକାର୍ବୋନେଟ", "Natriumbikarbonaat", "Matarsódi", "සෝඩියම් බයිකාබනේට්", "natri bicacbonat", "natria bikarbonato", "Bicarbonato de Sodium", "натрий двууглекислый", "Натриев хидроген карбонат", "탄산 수소 나트륨", "Nātrija hidrogēnkarbonāts", "सोडियम बाईकार्बोनेट", "Saadiyom bicarbonate", "Carbonato acido di sodio", "sodiwm deucarbonad", "Natrio hidrokarbonatas", "Natriumvetykarbonaatti", "Natrijum hidrogenkarbonat", "סודה לשתייה", "சமையல் சோடா", "Natrij-hidrogenkarbonat", "جوش شیرین", "Bicarbonat de sodiu", "Magadi", "sodio hidrogenokarbonato", "Natriumwaterstofcarbonaat", "ਮਿੱਠਾ ਸੋਡਾ", "Natrium bikarbonat", "సోడియం బైకార్బొనేట్", "Idrogenocarbonat de sòdi", "Bicarbonato de sodio", "Bikarbonati i natriumit", "Ас содасы", "Natriumvätekarbonat", "Nátrium-hidrogén-karbonát", "natriumvätekarbonat", "натријум хидрогенкарбонат"],
  roles: ["stabiliser", "thickener"],
  children: ["ca:carbonat-acid-de-sodi-i-difosfat-de-disodi"]
}, {
  id: "en:e999i",
  name: "Quillaia extract type 1",
  es: "Quillaia extract type 1",
  aliases: ["Quillaia extract type 1"],
  roles: [],
  children: []
}, {
  id: "en:e300",
  name: "Ascorbic acid",
  es: "Ácido ascórbico",
  aliases: ["Askorbinsyre", "askorbinska kiselina", "Aċidu askorbiku", "Ascorbinsyre", "Askorbiinihappo", "Ασκορβικο οξυ", "Askorbiinhape", "Askorbo rūgštis", "Askorbīnskābe", "Kyselina askorbová", "Kwas askorbinowy", "Ascorbic acid", "Acido ascorbico", "Ascorbinsäure", "Acide ascorbique", "Ácido ascórbico", "Аскорбиновая кислота", "Askorbinsyra", "Аскорбинова киселина", "Aszkorbinsav", "Askorbinska kislina", "Àcid ascòrbic", "Acid ascorbic", "Ascorbinezuur", "3a300"],
  roles: ["antioxidant", "sequestrant"],
  children: []
}, {
  id: "en:e391",
  name: "Phytic acid",
  es: "Ácido fítico",
  aliases: ["Fitična kislina", "Phytinsäure", "Phytic acid", "Acido fitico", "Acide phytique", "Ácido fítico", "Kwas fitowy", "Fytin", "Fytinsyra", "Fitinsav", "Fytiinihappo"],
  roles: [],
  children: []
}, {
  id: "en:e220",
  name: "Sulphur dioxide",
  es: "Dióxido de azufre",
  aliases: ["Diòxid de sofre", "Lưu huỳnh điôxit", "Brennisteinsoxíð", "серный диоксид", "sulfura dioksido", "Oxid siřičitý", "이산화 황", "Серен двуокис", "kükürt dioksit", "Күкүрттүү ангидрид", "Dwutlenek siarki", "Sulphur dioxide", "Schwefeldioxid", "二氧化硫", "सल्फर डायॉक्साईड", "Dióxido de enxofre", "Anhydride sulfureux", "二酸化硫黄", "Oxid siričitý", "dé-ocsaíd sulfair", "സൾഫർ ഡയോക്‌സൈഡ്", "Walirang dioksida", "sumporni dioksid", "Diossidu tal-kubrit", "সালফার ডাইঅক্সাইড", "svoveldioksid", "Διοξειδιο του θειου", "Vääveldioksiid", "ثنائي أكسيد الكبريت", "Svovldioxid", "Ծծմբի օքսիդ", "Діоксид сірки", "ซัลเฟอร์ไดออกไซด์", "Sumpor dioksid", "கந்தக டைஆக்சைடு", "גופרית דו-חמצנית", "Žveplov dioksid", "Zwaveldioxide", "Dioxid de sulf", "گوگرد دی‌اکسید", "Belerang dioksida", "Sulfur dioksida", "сумпор-диоксид", "Kén-dioxid", "Svaveldioxid", "Сулфур диоксид", "Күкірт диоксиді", "Dióxido de azufre", "सल्फर डाइआक्साइड", "Sēra dioksīds", "Sylffwr deuocsid", "Anidride solforosa", "Rikkidioksidi", "Sieros dioksidas", "Kükürd qazından təmizlənmə üsulları"],
  roles: ["antioxidant", "preservative"],
  children: []
}, {
  id: "en:e515",
  name: "Potassium sulphates",
  es: "Sulfatos de potasio",
  aliases: ["Draselné sírany", "Kálium-szulfátok", "Sulfatos de potasio", "Калиеви сулфати", "Kaliumsulfater", "Kaliumsulfaten", "Sulfati de potasiu", "Sulfats de potassi", "Kalijevi sulfati", "Kaaliumsulfaadid", "Kalio sulfatai", "Θειικα αλατα του καλιου", "Kaliumsulfaatit", "Sulfati tal-potassju", "Solfatos di potassio", "Kaliumsulfate", "Potassium sulphates", "Sulfatos de potássio", "Sulfates de potassium", "Siarczany potasu", "Kālija sulfāti"],
  roles: [],
  children: ["en:e515i", "en:e515ii"]
}, {
  id: "en:e284",
  name: "Boric acid",
  es: "Ácido bórico",
  aliases: ["Borsyre", "Boorihappo", "Βορικο οξυ", "Boro rūgštis", "Boorhape", "Aċidu boriku", "Kyselina boritá", "Kwas borowy", "Acido borico", "Boric acid", "Borsäure", "Acide borique", "Ácido bórico", "Borskābe", "Borsyra", "Борна киселина", "Bórsav", "Acid boric", "Boorzuur", "Borova kislina", "Àcid bòric"],
  roles: [],
  children: []
}, {
  id: "en:e160biii",
  name: "Oil-extracted annatto",
  es: "Oil-extracted annatto",
  aliases: ["Oil-extracted annatto"],
  roles: [],
  children: []
}, {
  id: "en:e363",
  name: "Succinic acid",
  es: "Ácido succínico",
  aliases: ["Acid succinic", "Barnsteenzuur", "Jantarna kislina", "Àcid succínic", "Bärnstenssyra", "Ácido succínico", "Сукцинова киселина", "Kyselina jantarová", "Borostyánkősav", "Kyselina jantárová", "Kwas bursztynowy", "Acido succinico", "Succinic acid", "Bernsteinsäure", "Acide succinique", "Dzintarskābe", "Ravsyre", "Ηλεκτρικο οξυ", "Meripihkahappo", "Merevaikhape", "Gintaro rūgštis", "Aċidu suċċiniku"],
  roles: [],
  children: []
}, {
  id: "en:e1510",
  name: "Ethanol",
  es: "etanol",
  aliases: ["Etanol", "ethanol", "etanol", "Етанол", "etanols", "Éthanol", "Ethanol", "etanolo", "Etanool", "Etanolis", "etanoli", "Αιθανόλη"],
  roles: [],
  children: []
}, {
  id: "en:e517",
  name: "Ammonium sulphate",
  es: "Sulfato amónico",
  aliases: ["Amonija sulfāts", "Siarczan amonu", "Solfato di ammonio", "Ammoniumsulfat", "Ammonium sulphate", "Sulfate d'ammonium", "Sulfato de amónio", "Síran amónny", "Sulfat tal-ammonju", "Ammoniumsulfaatti", "Θειικο αμμωνιο", "Ammooniumsulfaat", "Amonio sulfatas", "Amonijev sulfat", "Sulfat d'amoni", "Ammoniumsulfaat", "Sulfat de amoniu", "Сульфат аммония", "Síran amonný", "Ammónium-szulfát", "Sulfato amónico", "Амониев сулфат"],
  roles: [],
  children: []
}, {
  id: "en:e163ii",
  name: "E163ii",
  es: "E163ii",
  aliases: [],
  roles: [],
  children: []
}, {
  id: "en:e160ai",
  name: "Beta-carotene",
  es: "Beta-caroteno",
  aliases: ["Β-καροτενιο", "Beetakaroteeni", "Beta karotenas", "Beetakaroteen", "Beta-caroten", "бета-каротин", "Beta-karotên", "beta karoten", "Betakaroten", "Beta-karoten", "Beta-Carotin", "Beta-carotene", "Bêta-carotène", "Beta-caroteno", "β-カロチン", "Beta-karotén", "Beta-karotīns", "Béta-karotin", "betakaroten", "Бета-каротин", "Bèta-caroteen", "Beta karoten"],
  roles: ["colour"],
  children: []
}, {
  id: "en:e969",
  name: "Advantame",
  es: "Advantame",
  aliases: ["Advantame"],
  roles: ["sweetener"],
  children: []
}, {
  id: "en:e541",
  name: "Sodium aluminium phosphate", 
  es: "Fosfato de aluminio y sodio",
  aliases: ["Natrijev aluminijev fosfat", "Fosfat de sodi i alumini", "Fosfat de aluminiu și sodiu", "Natriumaluminiumfosfaten", "Natriumaluminiumfosfat", "Fosfato de aluminio y sodio", "Натриевоалуминиев фосфат", "Nátrium-alumínium-foszfát", "fosforečnan sodno-hlinitý", "Skābais nātrija alumīnija fosfāts", "Hydrogénfosforečnan hlinito-sodný", "Fosforan glinowo-sodowy", "Fosfato de alumínio e sódio", "Phosphate d'aluminium et de sodium", "Fosfato di sodio e alluminio", "Sodium aluminium phosphate", "Natriumaluminiumphosphat", "Fosfat tas-sodju u tal-aluminju", "Natriumaluminiumphosphater", "Natriumalumiinifosfaatti", "Naatriumalumiiniumfosfaat", "Natrio aliuminio fosfatas"],
  roles: ["emulsifier", "stabiliser", "thickener"],
  children: ["en:e541i", "en:e541ii"]
}, {
  id: "en:e341ii",
  name: "Dicalcium phosphate",
  es: "Fosfato dicálcico",
  aliases: ["Dicanxi photphat", "Dicalciumfosfaat", "Fosfat dicalcic", "دی‌کلسیم فسفات", "Fosfat de dicalci", "Dikalcij-fosfat", "Dikalcijum fosfat", "Dikalcijev fosfat", "Hydrogenfosforečnan vápenatý", "Dikalcium-foszfát", "Дикалциев фосфат", "Fosfato dicálcico", "Dikalciumfosfat", "Гидроортофосфат кальция", "Dicalciumphosphat", "Fosfato dicalcico", "Dicalcium phosphate", "磷酸氫鈣", "リン酸一水素カルシウム", "Phosphate dicalcique", "Fosforan diwapniowy", "Fosforečnan divápenatý", "Dikalcija fosfāts", "Kaltsiumvesinikfosfaat", "Dikalcio fosfatas", "فوسفات ثنائي الكالسيوم", "Dikalsiumfosfaatti", "Οξινο φωσφορικο ασβεστιο", "dicalciumfosfat", "dikalcijev fosfat", "Fosfat dikalċiku"],
  roles: ["emulsifier", "humectant", "sequestrant", "stabiliser", "thickener"],
  children: []
}, {
  id: "en:e170ii",
  name: "Calcium hydrogen carbonate",
  es: "carbonato ácido de calcio",
  aliases: ["Wodorowęglan wapnia", "carbonate acide de calcium", "碳酸氫鈣", "carbonato ácido de cálcio", "炭酸水素カルシウム", "Calcium hydrogen carbonate", "idrogenocarbonato di calcio", "Calciumhydrogencarbonat", "kalsiumvetykarbonaatti", "όξινο ανθρακικό ασβέστιο", "بيكربونات الكالسيوم", "Калійні солі", "calciumhydrogenkarbonat", "แคลเซียมไบคาร์บอเนต", "calciumwaterstofcarbonaat", "Canxi bicacbonat", "kaltzio hidrogenokarbonato", "کلسیم بی‌کربنات", "Kalcijum bikarbonat", "கால்சியம் பைகார்பனேட்டு", "Hidrogencarbonat de calci", "Kalcium-hidrogén-karbonát", "Hydrogenuhličitan vápenatý", "kalciumvätekarbonat", "carbonato ácido de calcio", "Гидрокарбонат кальция", "kalsium hidrogen karbonat", "kalcia hidrogenkarbonato"],
  roles: [],
  children: []
}, {
  id: "en:e355",
  name: "Adipic acid",
  es: "Ácido adípico",
  aliases: ["Adipiinhape", "Adipo rūgštis", "Adipiinihappo", "Αδιπικο οξυ", "Adipinsyre", "Aċidu adipiku", "Ácido adípico", "Acide adipique", "Acido adipico", "Adipinsäure", "Adipic acid", "Kwas adypinowy", "Kyselina adipová", "Adipīnskābe", "Adipinsav", "Адипинова киселина", "Adipinsyra", "Adipinezuur", "Acid adipic", "Àcid adípic", "Adipinska kislina"],
  roles: [],
  children: []
}, {
  id: "en:e100ii",
  name: "E100ii",
  es: "E100ii",
  aliases: [],
  roles: [],
  children: []
}, {
  id: "en:e131",
  name: "Patent blue v",
  es: "Azul patentado V",
  aliases: ["Patentzilais v", "Błękit patentowy v", "專利藍V", "Azul patenteado v", "Bleu patenté V", "Blu patentato v", "Patentblau V", "Patent blue v", "Patentná modrá v", "gorm paitinne V", "Πατεντ μπλε v", "Patenttisininen v", "Patentsinine v", "Mėlynasis patentuotas v", "Синій патентований V", "Patentno modro v", "פטנט כחול V", "Blau patentat V", "Patentblauw v", "Albastru patent v", "синий патентованный V", "Patentkék V", "Patentní modř v", "Patentblått v", "Патент синьо v", "Azul patentado V"],
  roles: [],
  children: []
}, {
  id: "en:e1204",
  name: "Pullulan",
  es: "Pululano",
  aliases: ["Pullulan", "Pullulaani", "Πουλουλανη", "Pululanas", "Pullulaan", "Pululán", "Pululana", "Pullulane", "Pullulano", "Pullulāns", "Пулулан", "Pululano", "Pullulán", "Pululan"],
  roles: ["thickener"],
  children: []
}, {
  id: "en:e489",
  name: "Methyl glucoside-coconut oil ester",
  es: "Éster de aceite de coco de metil glucósido",
  aliases: ["Metil glukozit-hindistan cevizi yağı esteri", "Metilglikozīda-kokosriekstu eļļas esteris", "Estere di olio di cocco metil glucosidico", "Methylglucosid-Kokosöl-Ester", "Methyl glucoside-coconut oil ester", "Éster de óleo de coco de metil glucosídeo", "甲基葡萄糖苷-椰子油酯", "メチルグルコシド-ココナッツオイルエステル", "Ester de méthylglycoside d'huile de coco", "Ester metyloglukozydowy oleju kokosowego", "Ester metylglukozidu a kokosového oleja", "Ester metil glukozida i kokosovog ulja", "Metilglikozido-kokosų aliejaus esteris", "Metüülglükosiid-kookosõli ester", "استر زيت جوز الهند ميثيل جلوكوزيد", "Metyyliglukosidi - kookosöljyesteri", "Εστέρας μεθυλογλυκοσίδης-κοκκοφοινικέλαιου", "Metilqlükozid-kokos yağı esteri", "Methylglucosid-kokosolieester", "Èster d'oli de coco de metil glucòsid", "Ester metil glukozida in kokosovega olja", "Methylglucoside-kokosolie-ester", "Ulei de nucă de cocos și ester de metil glucozidă", "Метилглюкозид-кокосовое масло эфир", "Ester methyl-glukosidu a kokosového oleje", "Metil-glükozid-kókuszolaj-észter", "Метил глюкозид-кокосово масло естер", "Éster de aceite de coco de metil glucósido", "메틸 글루코사이드-코코넛 오일 에스테르", "Metylglukosid-kokosoljaester"],
  roles: [],
  children: []
}, {
  id: "en:e1423",
  name: "Acetylated distarch glycerol",
  es: "Glicerol de dialmidón acetilado",
  aliases: ["Acetylovaný škrobový glycerol", "Acetilezett dikeményítő-glicerin", "Acetylerad distärkelseglycerol", "Ацетилиран динишестен глицерол", "Glicerol de dialmidón acetilado", "Acetiliran diškrobni glicerol", "Geacetyleerd dizetmeelglycerol", "Glicerol de amidon acetilat", "Gliċerolu diammidiku aċetilat", "Asetyloitu ditärkkelysglyseroli", "Ακετυλιωμένος δισταρχογλυκερόλη", "Atsetüülitud ditärk lisglütserool", "Acetilintas dikrakmolo gliukerolis", "Acetyleret distivelseglycerol", "Acetilētais dicietes glicerīns", "Acetylowany glicerol diskrobiowy", "Acetylated distarch glycerol", "Glicerolo di diamido acetilato", "Acetyliertes Distärkeglycerin", "Glycérol de diamidon acétylé", "Glicerol de distarca acetilado"],
  roles: ["emulsifier", "stabiliser", "thickener"],
  children: []
}, {
  id: "en:e905b",
  name: "petroleum jelly",
  es: "vaselina",
  aliases: ["Baselina", "petroleum jelly", "Петралатум", "Vaselină", "ژله پترولیوم", "واسلين", "தைலக்களிம்பு", "וזלין", "Vazelino", "Вазелин", "kvit mjuk parafin", "Petrolátum", "vaselina", "Vaselin", "Vaselina", "Petroleum_jelly", "Vaseline", "Petrolato", "पेट्रोलियम जेली", "Vaseliini", "Vazelin", "וואזעלין", "VE905b - aseline", "Petroleumjellie", "Vazelína", "Petroleum jelly", "석유 젤리", "вазелин", "Petrolatum", "ワセリン", "Wazelina", "Mastiaci tuk", "Petrolaatum", "هلام النفط", "Βαζελίνη", "Վազելին", "Вазелін", "hvit myk parafin"],
  roles: [],
  children: []
}, {
  id: "en:e929",
  name: "acetone peroxide",
  es: "Peróxido de acetona",
  aliases: ["Asetoniperoksidi", "Aceton-peroxid", "Acetono peroksidas", "Peroxidy acetonu", "Acetonperoxid", "Acetoneperoxid", "Peróxido de acetona", "Ацетонов пероксид", "Aceton peroksid", "Acetona peroksīds", "Acetonperoxide", "Nadtlenek acetonu", "Triperóxido de triacetona", "Peroxyde d'acétone", "Perossido di acetone", "acetone peroxide", "Peroxid de acetonă"],
  roles: [],
  children: []
}, {
  id: "en:e154",
  name: "Brown FK",
  es: "Marrón FK",
  aliases: ["Hněď FK", "Barna FK", "Кафяво FK", "Marrón FK", "Brun FK", "Marró FK", "Rjava FK", "Bruin FK", "Marron FK", "Rudasis FK", "Pruun FK", "Ruskea FK", "Καστανό FK", "Brūns FK", "Brown FK", "Marrone FK", "Braun FK", "Castanho FK", "Brąz FK", "Hnede FK"],
  roles: [],
  children: []
}, {
  id: "en:e336ii",
  name: "Dipotassium tartrate",
  es: "Tartrato dipotásico",
  aliases: ["Dikalijev tartrat", "Tàrtic dipotàssic", "پتاسیم تارترات", "Tartrat dipotasic", "Dikaliumtartraat", "Dikaliumtartrat", "Дикалиев тартарат", "Tartrato dipotásico", "Dikálium-tartarát", "Dipotassium tartrate", "Dikālija tartrāts", "Vínan didraselný", "Winian dipotasowy", "Tartarato dipotássico", "酒石酸カリウム", "Tartrate dipotassique", "Tartrato dipotassico", "Tartrat dipotassiku", "Dikaliumtartraatti", "Τρυγικο καλιο", "Dikalio tartratas", "Kaaliumtartraat"],
  roles: [],
  children: []
}, {
  id: "en:e1100iii",
  name: "E1100iii",
  es: "E1100iii",
  aliases: [],
  roles: [],
  children: []
}, {
  id: "en:e536",
  name: "Potassium ferrocyanide",
  es: "Ferrocianuro de potasio",
  aliases: ["Kalijev ferocianid", "Ferrocianur de potassi", "Kaliumhexacyanoferraatii", "Ferocianură de potasiu", "ферроцианид калия", "Kálium-ferro-cianid", "Hexakyanoželeznatan draselný", "Kaliumferrocyanid", "Ferrocianuro de potasio", "Калиев фероцианид", "Kālija ferocianīds", "Żelazocyjanek potasu", "Ferrocyanure de potassium", "Ferrocianeto de potássio", "Ferrocianuro di potassio", "Potassium ferrocyanide", "Ferokyanid draselný", "Ferroċjanur tal-potassju", "Kaliumferrosyanidi", "Σιδηροκυανιουχο καλιο", "Kalio ferocianidas", "Kaaliumheksatsüanoferraatii"],
  roles: [],
  children: []
}, {
  id: "en:e1440",
  name: "Hydroxypropyl starch",
  es: "Hidroxipropilalmidón",
  aliases: ["Hidroxipropilamido", "Amidon hydroxypropyle", "Amido idrossipropilato", "Hydroxypropylstärke", "Hydroxypropyl starch", "Hydroksypropyloskrobia", "Hydroxypropylškrob", "Hidroksipropilciete", "Hidroksipropilkrakmolas", "Hüdroksüpropüültärklis", "Υδροξυπροπυλαμυλο", "Hydroksipropyylitärkkelys", "Hydroxypropylstivelse", "Lamtu idrossipropiliku", "Hydroxypropylzetmeel", "Hidroxipropilamidon", "Midó hidroxipropilat", "Hidroksipropil škrob", "Hidroxi-propil-keményítő", "Hydroxypropylether škrobu", "Hidroxipropilalmidón", "Хидроксипропил нишесте", "Hydroxipropylstärkelse"],
  roles: ["emulsifier", "stabiliser", "thickener"],
  children: []
}, {
  id: "en:e314",
  name: "Guaiacum",
  es: "Guayaco",
  aliases: ["Guaiaç", "גואיאק", "Gvajak", "Guaiac gum", "Rășină de guaiac", "Гваяк", "Guaiacum", "Guaiakum", "guajak", "Guajak", "Гвајак", "Guayaco", "Гваякум", "구아이악", "Gvajaks", "Guayak", "Guaiaco", "グアヤク樹脂", "résine de gaïac", "Guaak", "Gvajakas", "غاياكوم", "Γκουαγιακ", "Guaaksihartsi", "Qvayyakum"],
  roles: ["antioxidant"],
  children: []
}, {
  id: "en:e514ii",
  name: "Sodium hydrogen sulphate",
  es: "Sulfato ácido de sodio",
  aliases: ["Nātrija hidrogēnsulfāts", "Wodorosiarczan sodu", "Sodium hydrogen sulphate", "Solfato acido di sodio", "Natriumhydrogensulfat", "Sulfate acide de sodium", "Hidrogenossulfato de sódio", "Hydrogensíran sodný", "Sulfat idroġenat tas-sodju", "Οξινο θειικο νατριο", "Natriumvetysulfaatti", "Naatriumvesiniksulfaat", "Natrio vandenilio sulfatas", "Natrijev hidrogensulfat", "Natriumwaterstofsulfaat", "Bisulfat de sodiu", "Nátrium-hidrogén-szulfát", "natriumvätesulfat", "Sulfato ácido de sodio", "Натриев хидроген сулфат"],
  roles: [],
  children: []
}, {
  id: "en:e433",
  name: "Polyoxyethylene sorbitan monooleate",
  es: "Monooleato de sorbitán polioxietilenado",
  aliases: ["Polyoxylénsorbitanmonooleát", "Mono-oleato de polioxietileno sorbitano", "Monooléate de polyoxyéthylène de sorbitane", "Monoleato di poliossietilene sorbitano", "Polyoxyethylen-sorbitanmonooleat", "Polyoxyethylene sorbitan monooleate", "Monooleinian polioksyetylenosorbitolu", "Polioksietilēna sorbitāna monooleāts", "Polyoxyethylen(20)sorbitanmonooleat", "Polioksietileno sorbitano monooleatas", "Polüoksüetüleen sorbitaanmonooleaat", "Μονοελαϊκη πολυοξυ-αιθυλενο-σορβιτανη", "Polyoksyetyleenisorbitaanimono-oleaatti", "polioksietilen sorbitan monooleat", "Monooleat tal-poliossietilen sorbitan", "Monooleat de polioxietilenă sorbitan", "Polyoxyethyleensorbitaanmonoöleaat", "Monooleat de sorbitan polioxietilenat", "Polioksietilen sorbitan monooleat", "Monooleato de sorbitán polioxietilenado", "Полиоксиетилен сорбитан моноолеат", "Polyoxietylensorbitanmonooleat", "Polioxietilén-szorbitan-monooleát", "Polyoxyethylensorbitanmonooleát"],
  roles: ["emulsifier", "stabiliser"],
  children: []
}, {
  id: "en:e163v",
  name: "E163v",
  es: "E163v",
  aliases: [],
  roles: [],
  children: []
}, {
  id: "en:e942",
  name: "Nitrous oxide",
  es: "Óxido nitroso",
  aliases: ["Slāpekļ-i oksīds", "द्विभूयाति जारेय", "Protossido di azoto", "ocsid nitrus", "Azot-1 oksid", "Diazoto oksidas", "Typpioksiduuli", "Dušik suboksid", "நைட்ரஸ் ஆக்சைடு", "Azotsuboksid", "Dušikov-i oksid", "חמצן דו-חנקני", "Protoxid de azot", "دی نیتروژن مونوکسید", "Oxido nitroso", "Distikstofoxide", "Dinitrogen oksida", "Nitrus oksida", "Óxido nitroso", "Шаттандырғыш газ", "азотен субоксид", "Dikväveoxid", "азотсубоксид", "dinitrogenmonoksid", "Dinitrogén-oxid", "नाइट्रस अक्साइड", "Ocsaíd nítriúil", "Oxid dusný", "Nitrous oxide", "Distickstoffoxid", "一氧化二氮", "亜酸化窒素", "Protoxyde d'azote", "Podtlenek azotu", "নাইট্রাস অক্সাইড", "Dinitrogenoksid", "Ossidu nitruż", "Dušikov-I oksid", "നൈട്രസ് ഓക്സൈഡ്", "ไนตรัสออกไซด์", "Dinitrogenoxid", "Оксид азотуvi:Dinitơ monoxid", "Ծիծաղեցնող գազ", "Dilämmastikmonooksiid", "أكسيد النيتروس", "Υποξειδιο του αζωτου", "Òxid nitrós", "ନାଇଟ୍ରସ ଅକ୍ସାଇଡ", "Закись азота", "Азотист оксид", "아산화 질소"],
  roles: ["antioxidant", "propellent-gas"],
  children: []
}, {
  id: "en:e122",
  name: "Azorubine",
  es: "Azorrubina",
  aliases: ["Azorubin", "Азорубин", "Azorrubina", "Azorubín", "Azorubină", "Azorubine", "Azorubin (carmoisin)", "Αζωρουμπινη", "Atsorubiini", "Asorubiin", "Azorubinas", "Ażorubina", "Azorubina", "Azorubine carmoisine", "Azorubīns"],
  roles: ["colour"],
  children: []
}, {
  id: "en:e307",
  name: "Alpha-tocopherol",
  es: "Alfa-tocoferol",
  aliases: ["Alfa-tokoferols", "Alfa-tokoferol", "Alphatocophérol", "Alfa-tocoferol", "Alfa-tocoferolo", "Alpha-Tocopherol", "Alpha-tocopherol", "alfa-tokoferol", "Alfa-tocopherol", "Alfa tokoferolis", "Alfa-tokoferool", "Α-τοκοφερολη", "Alfatokoferoli", "α-tocoferol", "Alfa tokoferol", "Алфа-токоферол"],
  roles: [],
  children: []
}, {
  id: "en:e926",
  name: "Chlorine dioxide",
  es: "Dióxido de cloro",
  aliases: ["Klor dioksit", "Hlora dioksīds", "Ditlenek chloru", "Chlordioxid", "Diossido di cloro", "Chlorine dioxide", "Dióxido de cloro", "二氧化氯", "二酸化塩素", "Dioxyde de chlore", "Oxid chloričitý", "Διοξείδιο του χλωρίου", "Klooridioksidi", "Chloro dioksidas", "Kloordioksiid", "ثاني أكسيد الكلور", "Xlor dioksid", "Діоксид хлору", "Klorov dioksid", "Diòxid de clor", "Chloordioxide", "Dioxid de clor", "Диоксид хлора", "Klora dioksido", "Klór-dioxid", "Klordioxid", "이산화 염소", "Хлорен диоксид"],
  roles: [],
  children: [] 
}, {
  id: "en:e550ii",
  name: "Sodium metasilicate",
  es: "Sodium metasilicate",
  aliases: ["Sodium metasilicate"],
  roles: [],
  children: []
}, {
  id: "en:e350",
  name: "Sodium malates",
  es: "malatos de sodio",
  aliases: ["מלאטים של נתרן", "Natrijevi malati", "Malat de sodi", "natriummalaten", "Malați de sodiu", "Малаты натрия", "Natrium malat", "Nátrium-malátok", "Jablečnan sodný", "Натријум малати", "natriummalater", "나트륨 말산염", "Натриум малати", "Натриеви малати", "malatos de sodio", "सोडियम मैलेट", "Nātrija malāti", "Sodyum malatlar", "Jabłczany sodu", "malatos de sódio", "苹果酸钠", "リンゴ酸ナトリウム", "malates de sodium", "malati di sodio", "Sodium malates", "Natriummalate", "jablčnany sodné", "Malati tas-sodju", "άλατα του μηλικού οξέος με νάτριο", "natriummalaatit", "Naatriummalaadid", "natrio malatai", "مالات الصوديوم", "Малати натрію", "Natriummalater", "Natrium malatlar"],
  roles: ["humectant"],
  children: ["en:e350i", "en:e350ii"]
}, {
  id: "en:e486",
  name: "Calcium stearoyl fumarate",
  es: "Estearoil fumarato de calcio",
  aliases: ["Stearoyl-fumarát vápenatý", "Kalcium-sztearil-fumarát", "Калциев стеароил фумарат", "Estearoil fumarato de calcio", "Kalcium Stearoil Fumarat", "Калциум стеароил фумарат", "Kalciumstearoylfumarat", "스테아로일 푸마르산 칼슘", "Стеароилфумарат кальция", "Calciumstearoylfumaraat", "Fumarat de stearoil de calciu", "Kalsiumstearoylfumaraat", "Estearoil fumarat de calci", "Kalcijev stearoil fumarat", "Kaltsiumstearoüülfumaraat", "Kalcio stearoilfumaratas", "ستيرويل فومارات الكالسيوم", "Στεατοϋλο φουμαρικό ασβέστιο", "Kalsiumstearyylifumaraatti", "Calciumstearoylfumarat", "Kalsium Stearoil Fumarat", "Кальцій стеароїл фумарат", "Fumarat stearojl tal-kalċju", "Calcium stearoyl fumarate", "Stearoil fumarato di calcio", "ステアロイルフマル酸カルシウム", "硬脂酰富马酸钙", "Estearoil fumarato de cálcio", "Stearoylfumarate de calcium", "Stearylofumaran wapnia", "Stearoylfumarát vápenatý", "Kalsiyum stearoil fumarat", "Kalcija stearoilfumarāts"],
  roles: [],
  children: []
}, {
  id: "en:e960a",
  name: "Steviol glycosides from Stevia",
  es: "Glucósidos de esteviol procedentes de estevia",
  aliases: ["Stevia'dan Steviol glikozitleri", "Steviola glikozīdi no Stevia", "स्टीविया से स्टीविओल ग्लाइकोसाइड", "Steviol glykozidy zo Stévie", "Steviolglycoside aus Stevia", "Glicosidi steviolici da Stevia", "Steviol glycosides from Stevia", "Glicosídeos de esteviol provenientes de estévia", "甜菊糖苷来自甜叶菊", "ステビアからのステビオール配糖体", "Glycosides de stéviol issus de Stevia", "Glikozydy stewiolowe ze stewii", "Glikosidi ta' stevjol minn Stevia", "Steviol glikozidi iz Stevije", "สตีวิออลไกลโคไซด์จากหญ้าหวาน", "Steviolglycosider fra Stevia", "Steviyadan Steviol qlikozidləri", "Стевіол глікозиди зі Стевії", "Steviolio glikozidai iš Stevia", "Steviolglükosiidid Steviast", "جليكوسيدات ستيفيول من ستيفيا", "Stevioliglykosidit Steviasta", "Γλυκοσίδες στεβιόλης από Στέβια", "Glicòsids d'esteviol procedents d'estèvia", "Steviol glikozidi iz Stevie", "גליקוזידים סטיביול מסטיביה", "Glicozide steviolice din Stevia", "Glycoside Steviol từ Stevia", "Steviolglycosiden uit Stevia", "Steviol glikosida dari Stevia", "Steviol glikosida daripada Stevia", "Стевиол гликозиды из стевии", "Glucósidos de esteviol procedentes de estevia", "Стевиол гликозиди от Стевия", "Glikozidet Steviol nga Stevia", "Steviolglykosider från Stevia", "스테비아에서 추출한 스테비올 배당체", "Стевиол гликозиди од Стевиа", "Steviol glykosidy ze Stévie", "Steviol-glikozidok a Steviából"],
  roles: ["sweetener"],
  children: []
}, {
  id: "en:e445iii",
  name: "E445iii",
  es: "E445iii",
  aliases: [],
  roles: [],
  children: []
}, {
  id: "en:e553ai",
  name: "Synthetic magnesium silicate",
  es: "Silicato de magnesio sintético",
  aliases: ["Silikat sintetiku tal-manjeżju", "Sintetski magnezijev silikat", "Sintetinis magnio silikatas", "Sünteetiline magneesiumsilikaat", "سيليكات المغنيسيوم الاصطناعية", "Συνθετικό πυριτικό μαγνήσιο", "Synteettinen magnesiumsilikaatti", "Sintetik maqnezium silikat", "Syntetisk magnesiumsilikat", "Синтетичний силікат магнію", "Sentetik magnezyum silikat", "Sintētiskais magnija silikāts", "Magnesio silicato sintetico", "Synthetic magnesium silicate", "Synthetisches Magnesiumsilikat", "合成硅酸镁", "合成ケイ酸マグネシウム", "Silicato de magnésio sintético", "Silicate de magnésium synthétique", "Syntetyczny krzemian magnezu", "Syntetický kremičitan horečnatý", "Синтетический силикат магния", "Sinteza magnezia silikato", "Sintetički magnezijum silikat", "Syntetický křemičitan hořečnatý", "Szintetikus magnézium-szilikát", "Silicato de magnesio sintético", "Синтетичен магнезиев силикат", "Silikat sintetik i magnezit", "합성 규산 마그네슘", "Синтетички магнезиум силикат", "Silicat de magnesi sintètic", "Sintetični magnezijev silikat", "Synthetisch magnesiumsilicaat", "Silicat de magneziu sintetic"],
  roles: ["thickener"],
  children: []
}, {
  id: "en:e492",
  name: "Sorbitan tristearate",
  es: "Triestearato de sorbitano",
  aliases: ["Sorbitan tristearat", "sorbitan tristearat", "Sorbitantristearat", "Τριστεατικη σορβιτανη", "Sorbitaanitristearaatti", "Sorbitano tristearatas", "Sorbitaantristearaat", "Sorbitāna tristearāts", "Sorbitantristearát", "Tristearynian sorbitolu", "Tristéarate de sorbitane", "Triestearato de sorbitano", "Sorbitan tristearate", "Tristearato di sorbitano", "сорбитан-тристеарат", "Сорбитан тристеарат", "Szorbitan-trisztearát", "Triestearat de sorbitan", "Tristearat de sorbitan"],
  roles: ["emulsifier", "stabiliser"],
  children: []
}, {
  id: "en:e1105",
  name: "Lysozyme",
  es: "Lisozima",
  aliases: ["Lizocimas", "Lysotsyymi", "Lizocīms", "Lisozima", "ਲਾਈਜ਼ੋਜਾਈਮ", "Lisozim", "Lisocima", "Лизоцим", "Лизозим", "Lysozym", "Lizozim", "лизозим", "Lizocim", "ליזוזים", "லைசோசைம்", "لیزوزیم", "Lisożima", "Լիզոցիմ", "Лізоцим", "Lüsosüüm", "ليزوزيم", "Λυσοζυμη", "Lísisím", "Lyzozým", "Lysozyme", "リゾチーム", "Lizozym"],
  roles: ["preservative"],
  children: []
}, {
  id: "en:e636",
  name: "Maltol",
  es: "Maltol",
  aliases: ["Maltolo", "Мальтол", "Maltol", "Малтол", "مالتول", "มอลทอล", "Maltolis", "Maltoli", "Μαλτόλη", "Maltols", "マルトール"],
  roles: [],
  children: []
}, {
  id: "en:e110",
  name: "Sunset yellow FCF",
  es: "Amarillo anaranjado s",
  aliases: ["Apus galben FCF", "Zonnegeel FCF", "Sončno rumeno FCF", "Groc ataronjat S", "Para-orange", "Amarillo anaranjado s", "Сънсет жълто FCF", "Sunset yellow FCF", "Желтый солнечный закат", "Žltá FCF", "Żółcień pomarańczowa FCF", "Giallo tramonto FCF", "Gelborange S", "Jaune orangé S", "Amarelo-sol FCF", "Saulrieta dzeltenais FCF", "Κιτρινο sunset FCF", "Paraoranssi", "Päikeseloojangukollane FCF", "Saulėlydžio geltonasis FCF"],
  roles: ["colour"],
  children: []
}, {
  id: "en:e399",
  name: "Calcium lactobionate",
  es: "Calcium lactobionate",
  aliases: ["Kalsiumlaktobionaatti", "Kalcium-laktobionát", "Lactobionate de calcium", "Lattobionato di calcio", "Calcium lactobionate"],
  roles: [],
  children: []
}, {
  id: "en:e227",
  name: "Calcium bisulphite",
  es: "Sulfito ácido de calcio",
  aliases: ["sulfit àcid de calci", "Kalcijev bisulfit", "Calciumwaterstofsulfiet synoniemen", "Bisulfit de calciu", "Hydrogensiřičitan vápenatý", "Kalcium-hidrogén-szulfit", "Sulfito ácido de calcio", "Калциев бисулфит", "Kalciumvätesulfit", "Kalcija bisulfīts", "Calcio bisolfito", "Calciumhydrogensulfit", "Calcium bisulphite", "Hidrogenossulfito de cálcio", "Sulfite acide de calcium", "Wodorosiarczyn wapnia", "Hydrogensiričitan vápenatý", "Bisulfit tal-kalċju", "Kalcio bisulfitas", "Kaltsiumvesiniksulfit", "Οξινο θειωδες ασβεστιο", "Kalsiumvetysulfiitti"],
  roles: [],
  children: []
}, {
  id: "en:e539",
  name: "sodium thiosulfate",
  es: "Tiosulfato de sodio",
  aliases: ["Nātrija tiosulfāts", "Natrijev tiosulfat", "Tiosulfat de sodiu", "Tiosíran sodný", "sodium thiosulfate", "tiosolfato di sodio", "Natriumthiosulfat", "Thiosulfate de sodium", "Tiossulfato de sódio", "Natriumthiosulfaat", "Tiosiarczan sodu", "Tiosulfato de sodio", "Natriumtiosulfat", "Thiosíran sodný", "Nátrium-tioszulfát", "Natriumtiosulfaatti"],
  roles: ["antioxidant", "sequestrant"],
  children: []
}, {
  id: "en:e339ii",
  name: "Disodium phosphate",
  es: "Fosfato disódico",
  aliases: ["Dinatriumphosphat", "Οξινο φωσφορικο νατριο", "Dinatriumfosfaatti", "Dinatrio fosfatas", "Dinaatriumvesinikfosfaat", "Fosfat disodiku", "dinatrijev fosfat", "Fosforečnan disodný", "Fosforan disodowy", "Disodium phosphate", "Fosfato disodico", "磷酸一氢钠", "リン酸水素二ナトリウム", "Fosfato dissódico", "Phosphate disodique", "Dinātrija fosfāts", "Dinatriumfosfat", "Fosfato disódico", "Динатриев фосфат", "Hydrogenfosforečnan disodný", "Dinátrium-foszfát", "Dunatria fosfato", "гидрофосфат натрия", "Fosfat disodic", "دی‌سدیم فسفات", "Natri hiđrophotphat", "Dinatriumfosfaat", "இருசோடியம் பாசுபேட்டு", "Dinatrijum fosfat", "Dinatrijev fosfat"],
  roles: ["emulsifier", "humectant", "preservative", "sequestrant", "stabiliser", "thickener"],
  children: []
}, {
  id: "en:e966",
  name: "Lactitol",
  es: "Lactitol",
  aliases: ["Lactitol", "Laktitol", "Лактитол", "Laktit", "Laktīts", "Lactitolo", "Lactit", "laktitol", "Lattitol", "Laktitolis", "Laktitool", "Laktitoli", "Λακτιτολη"],
  roles: ["emulsifier", "sweetener", "thickener"],
  children: []
}, {
  id: "en:e162",
  name: "Beetroot red",
  es: "Rojo de remolacha",
  aliases: ["Rojo de remolacha", "Оцветител от червено цвекло", "Rödbetsrött", "Céklavörös", "Betalainová červeň", "краситель красный свекольный", "بتانین", "Roșu de sfeclă", "Betanine", "Betanina", "Betalain", "Betanin", "Rødbedefarve", "Peedipunane", "Burokėlių raudonasis", "بيتانين", "Ερυθρα χρωστικη της ριζας των τευτλων", "Punajuuriväri", "Rødbeterødt", "betanin", "Aħmar tal-pitravi", ":ബെറ്റാനിൻ", "Cviklová červená", "Vermelho de beterraba", "ベタニン", "Rouge de betterave", "Rosso di radice di barbabietola", "Beetroot red", "Czerwień buraczana", "Biešu sarkanais"],
  roles: ["colour"],
  children: []
}, {
  id: "en:e332i",
  name: "Monopotassium citrate",
  es: "Citrato monopotásico",
  aliases: ["Monokālija citrāts", "Citrato monopotassico", "Monopotassium citrate", "Monokaliumcitrat", "Citrate monopotassique", "Citrato monopotássico", "Cytrynian monopotasowy", "Ċitrat monopotassiku", "Kaaliumdivesiniktsitraat", "Monokalio citratas", "Δισοξινο κιτρικο καλιο", "Monokaliumsitraatti", "Monokalijev citrat", "Monokaliumcitraat", "Citrat monopotasic", "Citronan monodraselný", "Monokálium-citrát", "Монокалиев цитрат", "Citrato monopotásico"],
  roles: ["sequestrant", "stabiliser"],
  children: []
}, {
  id: "en:e641",
  name: "Leucine",
  es: "L-leucina", 
  aliases: ["Leucina", "Leusina", "L-leucina", "Leucin", "Леуцин", "леуцин", "L-leucin", "Leusin", "லியூசின்", "Leusîn", "לאוצין", "Levcin", "Лейцын", "Leucină", "لوسین", "Leuzina", "leucine", "Leucinas", "l-leusiini", "leicīns", "Leŭcino", "лейцин", "Левцин", "leucin", "leucina", "Leytsin", "Leucine", "লিউসিন", "ลิวซีน", "Лейцин", "Leutsiin", "ليوسين", "Λευκίνη", "Lösin", "Leucín", "L-Leucin", "ロイシン", "l-leucine", "L-leucyna"],
  roles: [],
  children: []
}, {
  id: "en:e504",
  name: "Magnesium carbonates",
  es: "Carbonatos de magnesio",
  aliases: ["Magnija karbonāti", "Carbonatos de magnésio", "Carbonates de magnésium", "Magnesium carbonates", "Carbonati di magnesio", "Magnesiumcarbonaten", "Węglany magnezu", "Uhličitany hořečnaté", "Karbonati tal-magniżju", "Magnio karbonatai", "Magneesiumkarbonaadid", "Ανθρακικά μαγνήσια", "Magnesiumkarbonaatit", "magnesiumkarbonater", "Carbonats de magnesi", "Magnezijevi karbonati", "Carbonați de magneziu", "Magnézium-karbonátok", "Carbonatos de magnesio", "Магнезиеви карбонати", "Magnesiumkarbonater"],
  roles: ["carrier"],
  children: ["en:e504i", "en:e504ii"]
}, {
  id: "en:e304ii",
  name: "Ascorbyl stearate",
  es: "Estearato de ascorbilo",
  aliases: ["Stearat de ascorbil", "Ascorbylstearaat", "Askorbil stearat", "Askorbylstearat", "Аскорбил стеарат", "Estearato de ascorbilo", "Askorbylstearát", "Aszkorbil-sztearát", "Askorbylstearan", "Stearynian askorbylu", "Ascorbyl stearate", "Stearato di ascorbile", "Ascorbylstearat", "Stéarate d'ascorbyle", "Askorbilstearāts", "Askorbyylistearaatti", "Στεατικο ασκορβυλιο", "Askorbüülstearaat", "Askorbilstearatas", "Stearat askorbili"],
  roles: ["antioxidant"],
  children: []
}, {
  id: "en:e900b",
  name: "Methylphenylpolysiloxane",
  es: "Metilfenilpolisiloxano",
  aliases: ["Метилфенилполисилоксан", "Methylfenylpolysiloxan", "Metil-fenil-polisziloxán", "Metilfenilpolisiloxano", "메틸페닐폴리실록산", "Metylfenylpolysiloxan", "Metilfenilpolisiloxan", "Metilfenilpolisiloksan", "Methylfenylpolysiloxaan", "Metil-fenil-poli-siloxan", "Metilfenilpolisilossan", "Metüülfenüülpolüsiloksaan", "Metilfenilpolisiloksanas", "ميثيل فينيل بولي سيلوكسان", "Metyylifenyyli-polysiloksaani", "Μεθυλφαινυλπολυσιλοξάνη", "Methylphenylpolysiloxan", "Metilfenilpolisiloksāns", "Metilfenilpolisilossano", "Methylphenylpolysiloxane", "Metilfenilpolissiloxano", "甲基苯基聚硅氧烷", "メチルフェニルポリシロキサン", "Méthylphénylpolysiloxane", "Metylfenylopolisiloksan", "Metyl-fenyl-polysiloxán"],
  roles: [],
  children: []
}, {
  id: "en:e574",
  name: "Gluconic acid",
  es: "Ácido glucónico",
  aliases: ["Глюконова киселина", "Ácido glucónico", "Glukonsyra", "Kyselina glukonová", "Glükonsav", "Acid gluconic", "Gluconzuur", "Àcid glucònic", "Glukonska kislina", "Gluconsyre", "Gliukono rūgštis", "Glükoonhape", "Glukonihappo", "Γλυκονικο οξυ", "Aċidu glukoniku", "Kyselina glukónová", "Gluconsäure", "Acido gluconico", "Gluconic acid", "Acide gluconique", "Kwas glukonowy", "Glikonskābe"],
  roles: [],
  children: []
}, {
  id: "en:e908",
  name: "Rice bran wax",
  es: "Cera de salvado de arroz",
  aliases: ["ขี้ผึ้งรำข้าว", "Düyü kəpəyi mumu", "Risklidvoks", "Віск рисових висівок", "Ryžių sėlenų vaškas", "Riisikliivaha", "شمع نخالة الأرز", "Riisilesevaha", "Κερί πίτουρου ρυζιού", "Pirinç kepeği mumu", "Rīsu kliju vasks", "Vosk z ryžových otrúb", "Cera di crusca di riso", "Rice bran wax", "Reiskleiewachs", "Cire de son de riz", "Cera de farelo de arroz", "米ぬかワックス", "Wosk z otrębów ryżowych", "Воск рисовых отрубей", "Cera de salvado de arroz", "Восък от оризови трици", "쌀겨 왁스", "Risklivax", "Vosk z rýžových otrub", "Arrosviasz", "Cera de segó d'arròs", "Vosek riževih otrobov", "Ceară de tărâțe dde orez", "Riijstkorrelwas"],
  roles: [],
  children: []
}, {
  id: "en:e267",
  name: "Buffered vinegar",
  es: "Buffered vinegar",
  aliases: ["Gebufferde azijn - gebufferd azijn", "Buffered vinegar", "Aceto tamponato", "Gepufferter Essig", "Vinaigre tamponné", "Puferirani ocat", "oțet tamponat"],
  roles: [],
  children: []
}, {
  id: "en:e104",
  name: "Quinoline yellow",
  es: "Amarillo de quinoleína",
  aliases: ["Hinolīna dzeltenais", "Chinolínová žltá", "Żółcień chinolinowa", "Quinoline yellow", "Giallo chinolina", "Chinolingelb", "Jaune de quinoléine", "Amarelo de quinoleína", "Isfar tal-kinolin", "Quinolingult", "Kinoliinikeltainen", "Κιτρινο κινολινης", "Chinolino geltonasis", "Kinoliinkollane", "Kinolinsko rumeno", "Groc de Quinoleína", "Galben de chinolină", "Chinolinegeel", "Kinolingult", "Amarillo de quinoleína", "Хинолин жълто", "Chinolinová žluť", "Kinolinsárga"],
  roles: ["colour"],
  children: []
}, {
  id: "en:e174",
  name: "Silver",
  es: "Plata",
  aliases: ["Plata", "Srebro", "Zilver", "Argint", "Ezüst", "Stříbro", "Сребро", "Silver", "Sudrabs", "Argent", "Prata", "Argento", "Silber", "Striebro", "Fidda", "Sidabras", "Hõbe", "Αργυρος", "Hopea", "Sølv"],
  roles: [],
  children: []
}, {
  id: "en:e631",
  name: "Disodium inosinate",
  es: "Inosinato disódico",
  aliases: ["Inosinat disodiku", "dinatrijev inozinat", "Dinatriuminosinat", "Dinatrio inozinatas", "Naatriuminosinaat", "إينوسينات ثنائية الصوديوم", "Ινοσινικο νατριο", "Dinatriuminosinaatti", "Dinātrija inozināts", "disodyum inosinat", "Inozínan disodný", "Inosinate disodique", "Inosinato dissódico", "Inosinato disodico", "Disodium inosinate", "Inozynian disodowy", "Dunatria inozinato", "Dinatrium inosinat", "Инозинат натрия", "Inosinato disódico", "Динатриев инозинат", "Dinátrium-inozinát", "dinatrijum-inozitat", "Inosinan sodný", "Inosinat de disodi", "Dinatrijum inozinat", "Dinatrijev inozinat", "دی‌سدیم اینوزینات", "Inozinat disodic", "Dinatriuminosinaat", "Natri-II inosinat"],
  roles: [],
  children: []
}, {
  id: "en:e265",
  name: "Dehydroacetic acid",
  es: "Ácido dehidroacético",
  aliases: ["Dehidroacetīnskābe", "Dehydrooctová kyselina", "Kwas dehydrooctowy", "Acido deidroacetico", "Dehydroacetic acid", "Dehydroessigsäure", "Acide déhydracétique", "Ácido dehidroacético", "Aċidu deħidroacetiku", "Dehydroeddikesyre", "Dehydroetikkahappo", "Αποξηραμένο οξύ αιθανοϊκό", "Dehüdroäädikhape", "Dehidroacto rūgštis", "Dehidrooctena kislina", "Acid dehidroacetic", "Dehydroazijnzuur", "Dehydroättiksyra", "Киселина дехидроацетна", "Dehidroecetsav"],
  roles: [],
  children: []
}, {
  id: "en:e160f",
  name: "Ethyl ester of beta-apo-8'-carotenic acid (C 30)",
  es: "Éster etílico del ácido beta-apo-8'-carotenoico (C 30)",
  aliases: ["Beta-apo-carotenic", "β-apo-8′-karotenian etylu", "Beta-8'-caroteenzure ethylester", "β-阿朴-8'-胡萝卜酸乙酯 (C 30)", "Éster etílico do ácido beta-apo-8'-carotênico (C 30)", "ベータ-アポ-8'-カロテン酸エチルエステル (C 30)", "Ester éthylique de l'acide -apocaroténique-8'", "β-Apo-8′-carotinsäureethylester", "Ethyl ester of beta-apo-8'-carotenic acid (C 30)", "Estere etilico dell'acido beta-apo-8'-carotenico (C 30)", "Этиловый эфир бета-апо-8'-каротиновой кислоты (C 30)", "베타-아포-8'-카로틴산 에틸 에스테르 (C 30)", "Beta-apo-8'-karotensyraetylester", "Éster etílico del ácido beta-apo-8'-carotenoico (C 30)", "Етилов естер на бета-апо-8'-каротенова киселина (C 30)", "Beta-apo-8'-karoteenihapon etyyliesteri", "Béta-apo-8'-karoténsav-etil észter"],
  roles: ["colour"],
  children: []
}, {
  id: "en:e342i",
  name: "Ammonium dihydrogen phosphate",
  es: "Ammonium dihydrogen phosphate",
  aliases: ["Ammonium dihydrogen phosphate"],
  roles: [],
  children: []
}, {
  id: "en:e160cii",
  name: "E160cii",
  es: "E160cii",
  aliases: [],
  roles: [],
  children: []
}, {
  id: "en:e481",
  name: "Sodium stearoyl-2-lactylate",
  es: "Estearoil-2-lactilato de sodio",
  aliases: ["Stearoyl-2-mléčnan sodný", "Natrijum stearoil laktilat", "Nátrium-sztearoil-2-laktilát", "Натриев стераоил-2-лактилат", "Estearoil-2-lactilato de sodio", "Natriumstearoyl-2-laktylat", "Natria stearoila laktilato", "Natriumstearoyl-2-lactylaat", "Stearoil-2-lactilat de sodiu", "Estearoïl-2-lactilat de sodi", "Natrijev stearoil-2-laktilat", "Natrio stearoil-2-laktilatas", "Naatriumstearoüül-2-laktülaat", "Natriumstearoyyli-2-laktylaatti", "Στεατοϋλο-2-γαλακτυλικο νατριο", "Natriumstearoyllactylat", "natrijev stearoil-2-laktilat", "Stearojl-2-lattilat tas-sodju", "Natriumstearoyl-2-lactylat", "Stearoil-2-lattilato di sodio", "Sodium stearoyl-2-lactylate", "Estearoíl-2-lactilato de sódio", "Stéaroyl-2-lactylate de sodium", "ステアロイル乳酸ナトリウム", "Stearoilomleczan sodu", "lachtaláit stéiril sóidiam", "Stearoyl-2-laktylát sodný", "Nātrija stearoil-2-laktilāts"],
  roles: ["emulsifier", "stabiliser"],
  children: ["en:e481i", "en:e481ii"]
}, {
  id: "en:e921",
  name: "L-cysteine hydrochloride monohydrate",
  es: "Monohidrato de hidrocloruro de L-cisteína",
  aliases: ["L-cisteīna hidrohlorīda monohidrāts", "Monohydrát hydrochloridu L-cysteínu", "Monohydrat chlorowodorku L-cysteiny", "L-Cystein-Hydrochlorid-Monohydrat", "Monoidrato di L-cisteina cloridrato", "L-cysteine hydrochloride monohydrate", "Cloridrato de L-cisteína monohidratado", "L-半胱氨酸盐酸盐一水合物", "L-システイン塩酸塩一水和物", "Cystine", "L-cystein hydrochlorid monohydrat", "L-sistein hidroxlorid monohidrat", "L-kystiini", "Μονοϋδρική υδροχλωρική L-κυστεΐνη", "L-cisteino hidrochlorido monohidratas", "L-tsüsteiinhüdrokloriidmonohüdraat", "مونوهيدرات هيدروكلوريد L-سيستين", "L-cisteinijev hidroklorid monohidrat", "Monohidrat d'hidroclorur de L-cisteïna", "Cistina hidroclorică și sărurile ei de sodiu și potasiu", "L-Cystine", "L-цистеина гидрохлорид моногидрат", "L-cystein hydrokloridmonohydrat", "L-시스테인 염산염 일수화물", "Monohidrato de hidrocloruro de L-cisteína", "L-цистеин хидрохлорид монохидрат", "Monohydrát hydrochloridu L-cysteinu", "L-cisztein-hidroklorid-monohidrát"],
  roles: [],
  children: []
}, {
  id: "en:e172iii",
  name: "Yellow iron oxide",
  es: "Óxido de hierro amarillo",
  aliases: ["Gul järnoxid", "Óxido de hierro amarillo", "Жълт оксид на желязо", "Žlutý oxid železa", "Sárga vas-oxid", "Oxid de fier galben", "Geel ijzeroxide", "Rumeno železov oksid", "Gul jernoxid", "Keltainen rautaoksidi", "Κίτρινο οξείδιο του σιδήρου", "Kollane rauaoksiid", "Geltonasis geležies oksidas", "Ossidu iswed tal-ħadid isfar", "Žltý oxid železa", "Żółty tlenek żelaza", "Ossido di ferro giallo", "Yellow iron oxide", "Eisenoxidgelb", "Óxido de ferro amarelo", "Oxyde de fer jaune", "Dzelzs oksīds dzeltenais"],
  roles: ["colour"],
  children: []
}, {
  id: "en:e225",
  name: "Calcium Disulphite",
  es: "disulfito cálcico",
  aliases: ["kalcija disulfīts", "Siřičitan draselný", "Disulfite de calcium", "Dissulfito de cálcio", "Kaliumsulfit", "Disolfito di calcio", "Calcium Disulphite", "Siarczyn potasu", "Disulfitt tal-kalċju", "Kalcio disulfitas", "Kaltsiumdisulfit", "Θειώδες ασβέστιο", "Kalsiumdisulfiitti", "Kalcijev disulfit", "Disulfit de calciu", "Kaliumsulfiet", "Калциев дисулфит", "disulfito cálcico", "Kalciumdisulfit", "Kalcium-diszulfit"],
  roles: ["antioxidant", "preservative"],
  children: []
}, {
  id: "en:e472a",
  name: "Acetic acid esters of mono- and diglycerides of fatty acids",
  es: "Ésteres acéticos de monoglicéridos y diglicéridos de ácidos grasos",
  aliases: ["Taukskābju mono- un diglicerīdu etiķskābes esteri", "acetic asit esters of mono- ve diglycerides of fatty asits", "Ésteres acéticos de mono e diglicéridos de ácidos gordos", "Ester diacétyl-acétique d'acides gras", "グリセリン酢酸脂肪酸エステル", "Essigsäureester von Mono- und Diglyceriden von Speisefettsäuren", "Esteri acetici di mono- e digliceridi degli acidi grassi", "Acetic acid esters of mono- and diglycerides of fatty acids", "Mono- i diglicerydy kwasów tłuszczowych estryfikowane kwasem octowym", "Estery mono- a diglyceridov mastných kyselín s kyselinou octovou", "esteri octene kiseline mono- i diglicerida masnih kiselina", "Esteri tal-aċidu aċetiku tal-mono- u d-digliċeridi tal-aċidi grassi", "Rasvhapete mono- ja diglütseriidide estrid äädikhappega", "Riebalų rūgščių mono- ir digliceridų acto rūgšties esteriai", "Εστερες του οξικου οξεος με μονο- και διγλυκεριδια λιπαρων οξεων", "Rasvahappojen mono- ja diglyseridien etikkahappoesterit", "Естери гліцерину та оцтової і жирних кислот", "Edikkesyreestere af mono- og diglycerider af fedtsyrer", "Èster acètic de monoglicèrids o diglicèrids d'àcids grassos", "Acetatni estri mono- in digliceridov maščobnih kislin", "Acetatni esteri mono- i diglicerida masnih kiselina", "Mono- en diglyceriden van vetzuren veresterd met azijnzuur", "Esteri ai acidului acetic cu mono- și digliceridele acizilor grași", "Éster diacetil-acético de ácidos graxos", "Zsírsavak mono- és digliceridjeinek ecetsav-észterei", "eddiksyreestere av mon- og diglyserider av fettsyrer", "Ацетатни естери моно- и диглицерида масних киселина", "Estery mono- a diglyceridů mastných kyselin s kyselinou octovou", "Естери на оцетната киселина с моно- и диглицериди на мастни киселини", "Ésteres acéticos de monoglicéridos y diglicéridos de ácidos grasos", "Mono- och diglyceriders ättiksyraestrar"],
  roles: ["emulsifier", "sequestrant", "stabiliser"],
  children: []
}, {
  id: "en:e510",
  name: "ammonium chloride",
  es: "Cloruro de amonio",
  aliases: ["Chlorid amonný", "Амониев хлорид", "염화 암모늄", "хлорид аммония", "Amonia klorido", "Amoni clorua", "Ammoníumklóríð", "Ammoniumchloried", "Ammoniy xlorid", "clorur d'amoni", "Навшодир", "Ammooniumkloriid", "كلوريد الأمونيوم", "Χλωριούχο αμμώνιο", "แอมโมเนียมคลอไรด์", "ammoniumklorid", "хлорид амонію", "Ամոնիումի քլորիդ", "Amonijev klorid", "navasaram", "অ্যামোনিয়াম ক্লোরাইড", "Salmiakk", "Ammoniumchlorid", "ammonium chloride", "Chlorure d'ammonium", "cloreto de amónio", "塩化アンモニウム", "chlorek amonu", "Chlorid amónny", "Аммоний хлориди", "Amonyum klorür", "ဇဝက်သာ", "амонијум хлорид", "Ammónium-klorid", "Cloruro de amonio", "salmiak", "అమ్మోనియం క్లోరైడ్", "amonium klorida", "Amonium klorida", "ਨਸਾਦਰ", "نشادر", "Ammoniumchloride", "Clorură de amoniu", "آمونیوم کلرید", "ამონიუმქლორიდი", "Amonijum hlorid", "அம்மோனியம் குளோரைடு", "Amonyûmklorîd", "אמוניום כלוריד", "ammoniumkloridi", "Cloruro d'ammonio", "Amoniwm clorid", "नौसादर", "amonija hlorīds"],
  roles: [],
  children: []
}, {
  id: "en:e418",
  name: "Gellan gum",
  es: "Goma gellan",
  aliases: ["Gomma di gellano", "Gellan", "Gellan gum", "ゲランガム", "Goma gelana", "Gomme gellane", "Guma gellan", "Želena sveķi", "Gelano derva", "Gellankummi", "صمغ الجيلان", "Gellaanikumi", "Κομμι τζελαν", "Gellangummi", "gelan guma", "Gomma ġellan", "Gellangom", "Gumă gellan", "Goma gellan", "Gelanski gumi", "Gellángumi", "Гума джелан"],
  roles: ["stabiliser", "thickener"],
  children: ["en:e418i", "en:e418ii"]
}, {
  id: "en:e522",
  name: "Aluminium potassium sulphate",
  es: "Sulfato de aluminio y potasio",
   aliases: ["Sulfat tal-aluminju u tal-potassju", "Alumiiniumkaaliumsulfaat", "Aliuminio kalio sulfatas", "Alumiinikaliumsulfaatti", "Θειικο αργιλιοκαλιο", "Aluminiumkaliumsulfat", "Alumīnija kālija sulfāts", "Sulfate d'aluminium potassique", "Sulfato de alumínio e potássio", "Aluminium potassium sulphate", "Solfato di alluminio e potassio", "Siarczan glinowo-potasowy", "Síran hlinito-draselný", "Alumínium-kálium-szulfát", "Síran draselno-hlinitý", "Sulfato de aluminio y potasio", "Алуминиевокалиев сулфат", "Sulfat doble d'alumini i potassi", "Kalijev aluminijev sulfat", "Aluminiumkaliumsulfaat", "Sulfat de aluminiu și potasiu"],
  roles: [],
  children: []
}, {
  id: "en:e322ii",
  name: "Partially hydrolyzed lecithin",
  es: "Lecitina parcialmente hidrolizada",
  aliases: ["Μερικώς υδρολυμένη λεκιθίνη", "Osittain hydrolysoitu lesitiini", "Osaühendatud letsitiin", "Dalinai hidrolizuotas lecitinas", "Delvist hydrolyseret lecithin", "Lecitina parzjalment idrolizzata", "Częściowo uwodorniony lecytyna", "Lecitina parzialmente idrolizzata", "Teilweise hydrolysiertes Lecithin", "Partially hydrolyzed lecithin", "Lécithine partiellement hydrolysée", "Lecitina parcialmente hidrolisada", "Čiastočne hydrolyzovaný lecitín", "Daļēji hidrolizēts lecitīns", "Částečně hydrolyzovaný lecitin", "Részben hidrolizált lecitin", "Delvis hydrolyserad lecitin", "Lecitina parcialmente hidrolizada", "Частично хидролизирана лецитин", "Gedeeltelijk gehydrolyseerde lecithine", "Lecitină parțial hidrolizată", "Delno hidrolizirana lecitin"],
  roles: ["antioxidant", "emulsifier"],
  children: []
}, {
  id: "en:e1201",
  name: "Polyvinylpyrrolidone",
  es: "Polivinilpirrolidona",
  aliases: ["Polivinilpirolidons", "Poliwinylopirolidon", "Polyvinylpyrrolidone", "Polivinilpirrolidone", "Polyvinylpyrrolidon", "Poly vinyl pyrrolidone", "Polivinilpirrolidona", "Polyvinylpyrolidón", "Polivinilpirrolidon", "Polyvinyylipyrrolidoni", "Πολυβινυλοπυρρολιδονη", "Polüvinüülpürrolidoon", "Polivinilpirolidonas", "Polivinilpirolidon", "Polivinilpirolidonă", "Polyvinylpyrolidon", "Poli(vinil-pirrolidon)", "Поливинилпиролидон"],
  roles: ["emulsifier", "stabiliser", "thickener"],
  children: []
}, {
  id: "en:e161c",
  name: "Cryptoaxanthin",
  es: "Criptoxantina",
  aliases: ["Криптоксантин", "Criptoxantina", "Kryptoxantin", "크립토잔틴", "Kriptoxantin", "Kriptoksantin", "קריפטוקסנטין", "Kryptoxantină", "Kryptoxanthine", "Kryptoxanthin", "Kriptoksantinas", "كريبتوزانتين", "Κρυπτοξανθίνη", "Kryptoksantiini", "Kryptoxantín", "Cryptoxanthin", "Cryptoaxanthin", "クリプトキサンチン", "Cryptoxanthine", "Kryptoksantyna"],
  roles: [],
  children: []
}, {
  id: "en:e961",
  name: "Neotame",
  es: "Neotamo",
  aliases: ["Neotam", "Неотам", "Neotamo", "Neotám", "Neotaam", "Νεοταμη", "Neotaami", "Neotamas", "Neotame", "Néotame", "Neotams"],
  roles: ["sweetener"],
  children: []
}, {
  id: "en:e375",
  name: "Nicotinic acid",
  es: "Ácido nicotínico",
  aliases: ["Nikotinska kiselina", "Aċidu nikotiniku", "Nikotiinihappo", "Νικοτινικό οξύ", "Nikotino rūgštis", "Nikotiinhape", "Nikotinsyre", "Nikotīnskābe", "Kwas nikotynowy", "Acide nicotinique", "Ácido nicotínico", "Acido nicotinico", "Nicotinic acid", "Nikotinsäure", "Kyselina nikotínová", "Nikotinsav", "Kyselina nikotinová", "Nikotinsyra", "Никотинова киселина", "Nikotinska kislina", "Nicotinezuur", "3a314", "Acid nicotinic"],
  roles: [],
  children: []
}, {
  id: "en:e364i",
  name: "Monosodium succinate",
  es: "Monosodium succinate",
  aliases: ["Monosodium succinate"],
  roles: [],
  children: []
}, {
  id: "en:e388",
  name: "Thiodipropionic acid",
  es: "Ácido tiodipropiónico",
  aliases: ["Acid tiodipropionic", "Thiodipropionzuur", "Tiopropionska kislina", "Ácido tiodipropiónico", "Тиодипропионова киселина", "Tiopropionsyra", "Thiodipropionová kyselina", "Tiódipropionsav", "Thiodipropiónová kyselina", "Acido tiodipropionico", "Thiodipropionic acid", "Thiodipropionsäure", "Acide thiodipropanoïque", "Ácido tiodipropiônico", "Kwas tiodipropionowy", "Tiopropionskābe", "Thiodipropionsyre", "Tiopropiono rūgštis", "Tiodipropioonhape", "Θειοδιπροπιονικό οξύ", "Tiodipropionihappo", "Aċidu tiodipropjoniku"],
  roles: ["antioxidant"],
  children: []
}, {
  id: "en:e553b",
  name: "Talc",
  es: "Talco",
  aliases: ["Talko", "Talk", "Talc", "Тальк", "تالک", "ტალკი", "டால்க்", "Smukec", "талк", "Talkum", "Talco", "Talek", "टाल्क", "Talks", "Talkas", "Talkki", "talc", "Talcum", "Талк", "talko", "Mastenec", "تالك", "Ταλκησ", "ทัลก์", "Տալկ", "Terra", "ടാൽക്", "talk"],
  roles: ["thickener"],
  children: []
}, {
  id: "en:e556",
  name: "Calcium aluminium silicate",
  es: "Silicato de calcio y aluminio",
  aliases: ["Kalcijev aluminijev silikat", "Silicat de calci i alumini", "Silicat de aluminiu și calciu", "Calciumaluminiumsilicaat", "Kalciumaluminiumsilikat", "Silicato de calcio y aluminio", "Калциевоалуминиев силикат", "Kalcium-alumínium-szilikát", "Křemičitan vápenato-hlinitý", "Kalcija alumīnija silikāts", "Kremičitan hlinitovápenatý", "Krzemian glinowo-wapniowy", "Silicato de alumínio e cálcio", "Silicate alumino-calcique", "Calcium aluminium silicate", "Calciumaluminiumsilicat", "Silikat tal-kalċju u tal-aluminju", "Kalsiumalumiinisilikaatti", "Πυριτικο αργιλιασβεστιο", "Kalcio aliuminio silikatas", "Kaltsiumalumiiniumsilikaat"],
  roles: [],
  children: []
}, {
  id: "en:e1202",
  name: "Polyvinylpolypyrrolidone",
  es: "Polivinilpolipirrolidona",
  aliases: ["Poli(vinil-polipirrolidon)", "Polyvinylpolypyrolidon", "Polyvinylpolypyrrolidon", "Polivinilpolipirrolidona", "Поливинилполипиролидон", "Polivinilpolipirolidon", "Polivinilpolipirolidonă", "Polivinilpolipirrolidon", "Πολυβινυλοπολυπυρρολιδονη", "Polyvinyylipolypyrrolidoni", "Polivinilpolipirolidonas", "Polüvinüülpolüpürrolidoon", "Polivinilpolipirolidons", "Poliwinylopolipirolidon", "Polyvinylpolypyrrolidone", "Polivinilpolipirrolidone", "Polyvinylpolypyrolidón"],
  roles: ["stabiliser"],
  children: []
}, {
  id: "en:e467",
  name: "Ethulose",
  es: "Etulosa",
  aliases: ["Etulosa", "Etuloza", "Ethulose", "Etulose", "Etuloză", "Этулоза", "etulóz", "Етулоза", "에툴로스", "Etulos", "Etuloze", "乙基纤维素", "エツロース", "Ethyl-hydroxyéthyl-cellulose", "Etulosio", "Etulóza", "Etuloos", "Etuliozė", "إيثولوز", "Etyylihydroksietyyliselluloosa", "Αιθυλόζη", "Etuloz"],
  roles: ["emulsifier", "stabiliser", "thickener"],
  children: []
}, {
  id: "en:e948",
  name: "Oxygen",
  es: "Oxígeno",
  aliases: ["Oxigénio", "Dioxygène", "Oxygen", "Ossigeno", "Sauerstoff", "Tlen", "Kyslík", "Skābeklis", "Deguonis", "Hapnik", "Οξυγονο", "Happi", "Ossiġnu", "Zuurstof", "Oxigen", "Kisik", "Oxigén", "Кислород", "Oxígeno", "Syre"],
  roles: [],
  children: []
}, {
  id: "en:e544",
  name: "E544",
  es: "E544",
  aliases: [],
  roles: [],
  children: []
}, {
  id: "en:e905g",
  name: "Mineral oil medium and low viscosity class III",
  es: "Aceite mineral de viscosidad media y baja clase III",
  aliases: ["Minerale olie met medium en lage viscositeit klasse III", "Ulei mineral cu vâscozitate medie și scăzută clasă III", "Mineralno olje srednje in nizke viskoznosti razred III", "Minerální olej střední a nízké viskozity třída III", "Közepes és alacsony viszkozitású ásványi olaj III. osztály", "Mineralolja med medelhög och låg viskositet klass III", "Aceite mineral de viscosidad media y baja clase III", "Минерално масло средна и ниска вискозитетна клас III", "Olej mineralny o średniej i niskiej lepkości klasy III", "Mineralöl mittlere und niedrige Viskosität Klasse III", "Olio minerale a viscosità media e bassa classe III", "Mineral oil medium and low viscosity class III", "Óleo mineral de viscosidade média e baixa classe III", "Huile minérale de viscosité moyenne et faible classe III", "Minerálny olej strednej a nízkej viskozity trieda III", "Vidējas un zemas viskozitātes minerālais eļļa III klase", "Ορυκτό έλαιο με μέτρια και χαμηλή ιξώδες κλάση III", "Keskiviskositeettinen ja matalaviskositeettinen mineraaliöljy luokka III", "Keskmise ja madala viskoossusega mineraalõli klass III", "Vidutinės ir mažos klampumo mineralinė alyva III klasė", "Mineralolie med medium og lav viskositet klasse III", "Xibka ta' viskożità medja u baxxa tal-ħalib klassi III"],
  roles: [],
  children: []
}, {
  id: "en:e335",
  name: "Sodium tartrates",
  es: "Tartratos de sodio",
  aliases: ["Tartrati tas-sodju", "Ταρτρικά αλάτα νατρίου", "Natriumtartraatti", "Natrio tartratai", "Naatriumtartraadid", "Natriumtartrater", "Nātrija tartrāti", "Winiany sodu", "Tartrates de sodium", "Tartratos de sódio", "Tartrati di sodio", "Sodium tartrates", "Natriumtartrate", "Sodné soli kyseliny vínovej", "Nátrium-tartarátok", "Vinany sodné", "Натриеви тартарати", "Tartratos de sodio", "Natrijevi tartrati", "Tartrats de sodi", "Natriumtartraat", "Tartrati de sodiu"],
  roles: ["sequestrant", "stabiliser"],
  children: ["en:e335i", "en:e335ii"]
}, {
  id: "en:e151",
  name: "Brilliant black bn",
  es: "Negro brillante bn",
  aliases: ["Negru briliant bn", "Briljantzwart bn", "Negre brillant BN", "Briljantno črno bn", "Брилянтно черно bn", "Negro brillante bn", "Briljantsvart bn", "Fekete PN", "Čerň bn", "Brilantná čierna bn", "Noir brillant BN", "Negro brilhante bn", "Brilliant black bn", "Nero brillante bn", "Brillantschwarz BN", "Czerń brylantowa bn", "Briljanta melnais bn", "Black pn (brilliant black bn)", "Briliantinis juodasis bn", "Briljantmust bn", "Λαμπρο μαυρο βν", "Briljanttimusta bn", "Iswed brillanti bn"],
  roles: ["colour"],
  children: []
}, {
  id: "en:e553i",
  name: "Magnesium silicate‚ synthetic",
  es: "Magnesium silicate‚ synthetic",
  aliases: ["Magnesium silicate‚ synthetic"],
  roles: [],
  children: []
}, {
  id: "en:e427",
  name: "Cassia gum",
  es: "Goma casia",
  aliases: ["Gomma tal-kassja", "Kasijos derva", "Kassiakummi", "Kassiakumi", "Κομμι κασσιας", "Cassiagummi", "Kasijas sveķi", "Gomma cassia", "Cassia gum", "Cassia-gummi", "Gomme de casse", "Goma de cássia", "Guma kasja", "Kasia guma", "Guma cassia synonyma", "Kassziagumi", "Гума касия", "Goma casia", "Goma de càssia", "Gumi kasijevca", "Cassiagom", "Gumă cassia"],
  roles: ["emulsifier", "stabiliser", "thickener"],
  children: []
}, {
  id: "en:e943a",
  name: "Butane",
  es: "Butano",
  aliases: ["Butan", "Butano", "Бутан", "Bután", "Butà", "Butaan", "Βουτανιο", "Butaani", "Butanas", "Butāns", "Butane"],
  roles: [],
  children: []
}, {
  id: "en:e311",
  name: "Octyl gallate",
  es: "Galato de octilo",
  aliases: ["Gal·lat d'octil", "Oktilgalat", "Octylgallaat", "Galat de octil", "Oktil-gallát", "Oktylgallát", "Октил галат", "Galato de octilo", "Oktylgallat", "Oktilgallāts", "Gallate d'octyle", "Gallato di ottile", "Octylgallat", "Octyl gallate", "Galusan oktylu", "Oktylgalát", "Gallat tal-ottil", "Oktüülgallaat", "Oktilo galatas", "Oktyyligallaatti", "Γαλλικος οκτυλεστερας"],
  roles: [],
  children: []
}, {
  id: "en:e1410",
  name: "Monostarch phosphate",
  es: "Fosfato de monoalmidón",
  aliases: ["Fosfat monoammidiku", "Monokrakmolo fosfatas", "Monotärklisfosfaat", "Δισοξινο φωσφορικο αμυλο", "Monotärkkelysfosfaatti", "Monostivelsephosphat", "Monocietes fosfāts", "Fosfato de monoamido", "Phosphate d'amidon", "Fosfato di monoamido", "Monostärkephosphat", "Monostarch phosphate", "Fosforan monoskrobiowy", "Fosforečnanový monoester škrobu", "Monokeményítő-foszfát", "Fosforečnan škrobu", "Мононишестен фосфат", "Fosfato de monoalmidón", "Monostärkelsefosfat", "Fosfat de monomidó", "Monoškrobni fosfat", "Monozetmeelfosfaat", "Fosfat de amidon"],
  roles: ["emulsifier", "stabiliser", "thickener"],
  children: []
}, {
  id: "en:e579",
  name: "iron gluconate",
  es: "Gluconato ferroso",
  aliases: ["Železov glukonat", "Gvožđe glukonat", "Ijzergluconaat", "گلوکونات آهن", "Gluconat feros", "глюконат железа", "Vas-glukonát", "Glukonan železnatý", "Järnglukonat", "Gluconato ferroso", "Феро глюконат", "Dzelzs glikonāts", "ferrous gluconate", "Glukonian żelazawy", "gluconate de fer", "gluconato di ferro", "iron gluconate", "Eisengluconat", "Glukonat ferruż", "Ferroglukonaatti", "Γλυκονικος σιδηρος", "غلوكونات الحديد الثنائي", "Geležies gliukonatas", "Ferroglükonaat", "Ferrogluconat"],
  roles: [],
  children: []
}, {
  id: "en:e425",
  name: "Konjac",
  es: "Konjac",
  aliases: ["Konjac", "Konjak", "extrait de racine de Konjac"],
  roles: ["carrier", "emulsifier", "humectant", "stabiliser", "thickener"],
  children: ["en:e425i", "en:e425ii"]
}, {
  id: "en:e218",
  name: "Methyl p-hydroxybenzoate",
  es: "P-hydroxibenzoato de metilo",
  aliases: ["P-hidroxibenzoat de metil", "Methyl-p-hydroxybenzoaat", "Metil parahidroksi benzoat", "P-hydroxibensoesyrametylester", "P-hydroxibenzoato de metilo", "Метил р-хидроксибензоат", "Methyl-p-hydroxybenzoát", "Metil-p-hidroxi-benzoát", "Metyl-p-hydroxybenzoát", "P-hydroksybenzoesan metylu", "P-idrossibenzoato di metile", "Methyl p-hydroxybenzoate", "Phb-methylester (methyl-p-hydroxybenzoat)", "P-hidroxibenzoato de metilo", "4-hydroxybenzoate de méthyle", "Metil-p-hidroksibenzoāts", "Methyl-p-hydroxybenzoat", "P-υδροξυβενζοϊκος μεθυλεστερας", "Metyyli-p-hydroksibentsoaatti", "Metüül-p-hüdroksübensoaat", "Metilo p-hidroksibenzoatas", "P-idrossibenżoat tal-metil"],
  roles: ["preservative"],
  children: []
}, {
  id: "en:e1209",
  name: "Polyvinyl alcohol-polyethylene glycol-graft-co-polymer",
  es: "Polyvinyl alcohol-polyethylene glycol-graft-co-polymer",
  aliases: ["Copolymère greffé d'alcool polyvinylique et de polyéthylèneglycol", "Polyvinyl alcohol-polyethylene glycol-graft-co-polymer"],
  roles: [],
  children: []
}, {
  id: "en:e479b",
  name: "Thermally oxidised soya bean oil interacted with mono- and diglycerides of fatty acids",
  es: "Aceite de soja oxidado térmicamente en interacción con monoglicéridos y diglicéridos de ácidos grasos",
  aliases: ["Oli de soja oxidat tèrmicament i en interacció amb monoglicèrids i diglicèrids d'àcids grassos", "Toplotno oksidirano sojino olje", "Thermisch geoxideerde sojaolie", "Ulei de soia oxidat termic interacționat cu mono- și digliceridele acizilor grași", "Směsný produkt interakce tepelně opracovaného sójového oleje s mono- a diglyceridy mastných kyselin", "Hőkezeléssel oxidált szójaolaj zsírsavak mono- és digliceridjeivel reagáltatva", "Aceite de soja oxidado térmicamente en interacción con monoglicéridos y diglicéridos de ácidos grasos", "Термично окислено соево масло с моно-и диглицериди на мастни киселини", "Termiskt oxiderad sojabönsolja som reagerat med mono- och diglycerider av fettsyror", "Termiski oksidētas sojas eļļas iedarbības produkts ar taukskābju mono- un diglicerīdiem", "Thermally oxidised soya bean oil interacted with mono- and diglycerides of fatty acids", "Prodotto di reazione dell'olio di soia ossidato termicamente con mono- e digliceridi degli acidi grassi", "Thermooxidiertes Sojaöl verestert mit Mono- und Diglyceriden von Speisefettsäuren", "Huile de soja oxydée par chauffage ayant réagi avec des mono- et diglycérides d'acides gras", "Óleo de soja oxidado termicamente em interacção com mono e diglicéridos de ácidos gordos", "Termoutleniony olej sojowy z mono- i diglicerydami kwasów tłuszczowych", "Tepelne zoxidovaný olej sójových bôbov zreagovaný s mono- a diglyceridmi mastných kyselín", "Żejt tas-sojja termalment ossidizzat b'interazzjoni mal-mono- u d-digliċeridi tal-aċidi grassi", "Termiliselt oksüdeeritud sojaõli rasvhapete mono- ja diglütseriidide estrid", "Termiškai oksiduotas sojų aliejus", "Θερμικως οξειδωμενο σογιελαιο που εχει αντιδρασει με μονο- και διγλυκεριδια λιπαρων οξεων", "Termisesti hapetettu polymeroitu soijaöljy", "Termisk oxideret sojaolie omsat med mono- og diglycerider af fedtsyrer"],
  roles: ["emulsifier"],
  children: []
}, {
  id: "en:e509",
  name: "Calcium chloride",
  es: "Cloruro de calcio",
  aliases: ["Cloruro di calcio", "calsiwm clorid", "कैल्सियम क्लोराइड", "Kalcija hlorīds", "Kalcio chloridas", "Kalsiumkloridi", "Calciumchloride", "کلرید کلسیم", "Clorură de calciu", "Kalcijum hlorid", "Kalcijev klorid", "கல்சியம் குளோரைட்டு", "Kálcium-klorid", "kalsiumklorid", "калцијум хлорид", "Cloruro de calcio", "Kalciumklorid", "Kalsium klorida", "కాల్సియం క్లోరైడ్", "Cloreto de cálcio", "塩化カルシウム", "Chlorure de calcium", "Calcium chloride", "Calciumchlorid", "Chlorek wapnia", "Chlorid vápenatý", "Кальций хлориди", "Kalsiyum klorür", "Kaltsiumkloriid", "كلوريد الكالسيوم", "Χλωριουχο ασβεστιο", "Կալցիումի քլորիդ", "Кальцій хлористий", "kalcijev klorid", "Klorur tal-kalċju", "Kalsiumklorid", "ক্যালসিয়াম ক্লোরাইড", "canxi clorua", "Kalsiumchloried", "Clorur de calci", "Калциев хлорид", "염화 칼슘", "Хлорид кальция", "kalcia klorido"],
  roles: ["stabiliser", "thickener", "coagulant"],
  children: []
}, {
  id: "en:e322a",
  name: "Oat lecithin",
  es: "Lecitina de avena",
  aliases: ["Haverlecithine", "Lecitină de ovăz", "Ovesni lecitin", "Lecitina de civada", "Ovesný lecitin", "Овсени лецитин", "Zab lecitin", "Havrelecitin", "귀리 레시틴", "Лецитин од овес", "Овесен лецитин", "Lecitina de avena", "Lecitinë tërshëre", "Овсяный лецитин", "Avena lecitino", "Lecytyna owsiana", "lecitina di avena", "Haferlecithin", "Oat lecithin", "Lécithine d'avoine", "燕麦卵磷脂", "Lecitina de aveia", "オート麦レシチン", "Ovsený lecitín", "Yulaf lesitini", "Auzu lecitīns", "Λεκιθίνη βρώμης", "Kauralesitiini", "Avižų lecitinas", "Kaera letsitiin", "ليسيثين الشوفان", "Havrel lecithin", "Вівсяний лецитин", "Zobeni lecitin", "Leċitina tal-ħafur"],
  roles: [],
  children: []
}, {
  id: "en:e337",
  name: "Potassium sodium tartrate",
  es: "Tartrato doble de sodio y potasio",
  aliases: ["Калиево-натриев тартарат", "Tartrato doble de sodio y potasio", "Kaliumnatriumtartrat", "Vinan sodno-draselný", "Kálium-nátrium-tartarát", "Tartrat de sodiu și potasiu", "Kaliumnatriumtartraat", "Tartrat doble de sodi i potassi", "Natrijev kalijev tartrat", "Natriumkaliumtartrat", "Kaaliumnaatriumtartraat", "Kalio natrio tartratas", "Τρυγικο καλιονατριο", "Kaliumnatriumtartraatti", "Tartrat tas-sodju u l-potassju", "Vínan draselno-sodný", "Kalium-natrium-tartrat", "Tartrato di potassio e di sodio", "Potassium sodium tartrate", "Tartarato de sódio e de potássio", "Tartrate double de sodium et de potassium", "Winian potasowo-sodowy", "Kālija nātrija tartrāts"],
  roles: ["sequestrant", "stabiliser"],
  children: []
}, {
  id: "en:e1001vi",
  name: "Choline lactate",
  es: "Choline lactate",
  aliases: ["Choline lactate"],
  roles: [],
  children: []
}, {
  id: "en:e150a",
  name: "Plain caramel",
  es: "color caramelo",
  aliases: ["colorant de caramel", "Navaden karamel", "Karamel boja", "Caramel simplu", "Màu caramel", "karamelkleurstof", "карамельный краситель", "color caramelo", "Обикновен карамел", "Sockerkulör", "Tömény karamell", "karamelové barvivo", "Obyčajný karamel", "カラメル色素", "焦糖色素", "Caramelo simples", "Caramel E150a", "Plain caramel", "Caramello semplice", "Zuckerkulör", "aromat karmelowy", "Sukkerkulør", "Karamella naturali", "obični karamel", "кәрәмил буягычы", "Madkulør", "Tavaline karamell", "Paprastoji karamelė", "لون الكراميل", "Sokerikulööri", "Απλο καραμελοχρωμα"],
  roles: ["colour"],
  children: []
}, {
  id: "en:e551",
  name: "Silicon dioxide",
  es: "Dióxido de silicio",
  aliases: ["Διοξειδιο του πυριτιου", "ثنائي أكسيد السيليكون", "Ränidioksiid", "Siliciumdioxid", "Սիլիցիումի երկօքսիդ", "Діоксид кремнію", "ซิลิกอนไดออกไซด์", "Silica", "Silicijev dioksid", "Diossidu tas-silikon", "সিলিকন ডাই অক্সাইড", "Ullaya", "silisiumdioksid", "Dwutlenek krzemu", "Silicon dioxide", "二氧化硅", "Dioxyde de silicium", "Dióxido de silício", "二酸化ケイ素", "Oxid kremičitý", "Silice", "Цахиурын давхар исэл", "Silisyum dioksit", "ကျောက်သလင်း", "Кремний кош оксиди", "Oxid křemičitý", "이산화 규소", "Силициев диоксид", "диоксид кремния", "silicia dioksido", "silic điôxít", "Diòxid de silici", "silica", "Piidioksidi", "Silicio dioksidas", "Lüssatit", "Biossido di silicio", "सिलिका", "Silīcija dioksīds", "силицијум диоксид", "Szilícium-dioxid", "Kiseldioxid", "Силициум диоксид", "Dióxido de silicio", "Кремний оксиді", "Silikon dioksida", "ਸਿਲੀਕਾਨ ਡਾਈਆਕਸਾਈਡ", "Siliciumdioxide", "Silizio dioxido", "Dioxid de siliciu", "سیلیسیم دی‌اکسید", "سليكان ډای اکسايډ", "சிலிக்கா", "Silicij-dioksid", "צורן דו-חמצני", "Silicijum dioksid", "Silico"],
  roles: ["carrier"],
  children: []
}, {
  id: "en:e351ii",
  name: "E351ii",
  es: "E351ii",
  aliases: [],
  roles: [],
  children: []
}, {
  id: "en:e450iii",
  name: "Tetrasodium diphosphate",
  es: "Difosfato tetrasódico",
  aliases: ["etranatrijum pirofosfat", "Tetranatrijev difosfat", "Difosfat tetrasodic", "تتراسدیوم پیروفسفات", "Tetranatriumdifosfaat", "Natri pyrophotphat", "Natria pirofosfato", "Tetranatriumdifosfat", "Difosfato tetrasódico", "Тетранатриев дифосфат", "Tetranatrijum pirofosfat", "Difosforečnan sodný", "Tetranátrium-difoszfát", "Tetranātrija difosfāts", "Difosforečnan tetrasodný", "Difosforan tetrasodowy", "Tetrasodium diphosphate", "Difosfato tetrasodico", "Tetranatriumdiphosphat", "焦磷酸钠", "Difosfato tetrassódico", "Diphosphate tétrasodique", "tetranatrijev difosfat", "Difosfat tetrasodiku", "Tetranatriumdifosfaatti", "Πυροφωσφορικο νατριο", "Tetranaatriumdifosfaat", "Tetranatrio difosfatas", "بيروفوسفات صوديوم"],
  roles: ["emulsifier", "humectant", "sequestrant", "stabiliser", "thickener"],
  children: []
}, {
  id: "en:e954iii",
  name: "Potassium saccharin",
  es: "Potassium saccharin",
  aliases: ["Potassium saccharin"],
  roles: [],
  children: []
}, {
  id: "en:e345",
  name: "Magnesium citrate",
  es: "Citrato de magnesio",
  aliases: ["Magnija citrāts", "Citrát horečnatý", "Citrato di magnesio", "Magnesiumcitrat", "Magnesium citrate", "Citrato de magnésio", "Citrate de magnésium", "Cytrynian magnezu", "Ċitrat tal-magneżju", "Magneesiumtsitraat", "Magnio citratas", "Κιτρικό μαγνήσιο", "Magnesiumsitraatti", "Citrat magnezija", "Citrat de magneziu", "Magnesiumcitraat", "Citrato de magnesio", "Магнезиев цитрат", "Citrát hořečnatý", "Magnézium-citrát"],
  roles: [],
  children: []
}, {
  id: "en:e262i",
  name: "Sodium acetate",
  es: "Acetato sódico",
  aliases: ["Nātrija acetāts", "Sodyum asetat", "Octan sodný", "Acetato de sódio", "酢酸ナトリウム", "Acétate de sodium", "Natriumacetat", "Acetato di sodio", "Sodium acetate", "Octan sodu", "Natrijev acetat", "Aċetat tas-sodju", "Ацетат натрію", "Naatriumatsetaat", "Natrio acetatas", "أسيتات الصوديوم", "Natriumasetaatti", "Οξικα αλατα του νατριου", "Acetat de sodi", "סודיום אצטט", "Natrijum acetat", "Natrij-acetat", "சோடியம் அசிட்டேட்", "سدیم استات", "Acetat de sodiu", "sodio azetato", "Natri axetat", "Natriumacetaat", "natria acetato", "Natrium asetat", "సోడియం అసిటేట్", "Acetato sódico", "Натриев ацетат", "Nátrium-acetát", "натријум ацетат"],
  roles: ["preservative", "sequestrant"],
  children: []
}, {
  id: "en:e316",
  name: "sodium erythorbate",
  es: "eritorbato sódico",
  aliases: ["Natria eritorbato", "Эриторбат натрия", "natriumisoaskorbat", "Натриев ериторбат", "eritorbato sódico", "Erythorban sodný", "Natrijum erithorbat", "Nátrium-eritroaszkorbát", "Natrijev eritorbat", "Eritorbat de sodi", "eritorbat de sodiu", "سدیم اریتوربات", "natriumisoascorbaat", "natrijev izoaskorbat", "Eritorbat tas-sodju", "Natriumerythorbat", "Ερυθορβικο νατριο", "Natriumerytorbaatti", "Natrio eritorbatas", "Naatriumerütorbaat", "إيريثوربات صوديوم", "Nātrija eritorbāts", "Erytorban sodný", "Izoaskorbinian sodu", "eritorbato di sodio", "sodium erythorbate", "Natriumisoascorbat", "异抗坏血酸钠", "エリソルビン酸ナトリウム", "Eritorbato de sódio", "érythorbate de sodium"],
  roles: ["antioxidant"],
  children: []
}, {
  id: "en:e465",
  name: "Ethyl methyl cellulose",
  es: "Etilmetilcelulosa",
  aliases: ["Ethylmethylcelulosa", "Etil-metil-cellulóz", "Етил метил целулоза", "Etilmetilcelulosa", "Metyletylcellulosa", "Ethylmethylcellulose", "Etilmetilceluloză", "Etilmetilcel·lulosa", "Etilmetil celuloza", "Etilmetilceliuliozė", "Etüülmetüültselluloos", "Metyylietyyliselluloosa", "Αιθυλομεθυλοκυτταρινη", "Ċelluloża etilmetilika", "Etilmetilcellulosa", "Ethyl methyl cellulose", "Etilmetilcelulose", "Éthylméthylcellulose", "Etylometyloceluloza", "Etylmetylcelulóza", "Etilmetilceluloze"],
  roles: ["emulsifier", "stabiliser", "thickener"],
  children: []
}, {
  id: "en:e905f",
  name: "Mineral oil medium and low viscosity class II",
  es: "Aceite mineral de viscosidad media y baja clase II",
  aliases: ["Mineralno olje srednje in nizke viskoznosti razred II", "Minerale olie met medium en lage viscositeit klasse II", "Ulei mineral cu vâscozitate medie și scăzută clasă II", "Minerální olej střední a nízké viskozity třída II", "Közepes és alacsony viszkozitású ásványi olaj II. osztály", "Mineralolja med medelhög och låg viskositet klass II", "Aceite mineral de viscosidad media y baja clase II", "Минерално масло със средна и ниска вискозитетна клас II", "Vidējas un zemas viskozitātes minerālais eļļa II klase", "Olej mineralny o średniej i niskiej lepkości klasy II", "Olio minerale a viscosità media e bassa classe II", "Mineralöl mittlere und niedrige Viskosität Klasse II", "Mineral oil medium and low viscosity class II", "Huile minérale de viscosité moyenne et faible classe II", "Óleo mineral de viscosidade média e baixa classe II", "Minerálny olej strednej a nízkej viskozity trieda II", "Xibka ta' viskożità medja u baxxa tal-ħalib klassi II", "Ορυκτό έλαιο με μέτρια και χαμηλή ιξώδες κλάση II", "Keskiviskositeettinen ja matalaviskositeettinen mineraaliöljy luokka II", "Vidutinės ir mažos klampumo mineralinė alyva II klasė", "Keskmise ja madala viskoossusega mineraalõli klass II", "Mineralolie med medium og lav viskositet klasse II"],
  roles: [],
  children: []
}, {
  id: "en:e1001i",
  name: "Choline acetate",
  es: "Choline acetate",
  aliases: ["Choline acetate"],
  roles: [],
  children: []
}, {
  id: "en:e640ii",
  name: "Sodiumglycinate",
  es: "Glicinato de sodio",
  aliases: ["Glicynian sodu", "Glicinato di sodio", "Sodiumglycinate", "Natriumglycinat", "グリシン酸ナトリウム", "甘氨酸钠", "Glicinato de sódio", "Glycinát sodný", "Sodyum glisinat", "Nātrija glicināts", "Γλυκινικό νάτριο", "Natriumglysinaatti", "Natrio glicinatas", "Naatriumglütsinaat", "غليسينات الصوديوم", "Natrium qlisinat", "Гліцинат натрію", "โซเดียมไกลซิเนต", "Gliċinat tas-sodju", "Natriumglycinaat", "Natri glycine", "Glicinat de sodiu", "گلیسینات سدیم", "Natrijev glicinat", "Glicinat de sodi", "nátrium-glicinát", "글리신산 나트륨", "Натриев глицинат", "Glicinato de sodio", "Глицинат натрия", "Natria glicinato"],
  roles: [],
  children: []
}, {
  id: "en:e450iv",
  name: "dipotassium dihydrogenpyrophosphate",
  es: "Difosfato dipotásico",
  aliases: ["Dikaliumdiwaterstofpyrofosfaat", "Dihidrogen pirofosfat dipotasic", "Dikalijev dihidrogen pirofosfat", "Dihidrogenpirofosfat dipotàssic", "Dihydrogendifosforečnan didraselný", "Dikalium-dihidrogén-pirofoszfát", "이칼륨 이수소 피로인산", "Dikaliumdivätepyrofosfat", "Дикалиум дихидроген пирофосфат", "Дикалиев дихидрогенпирофосфат", "Difosfato dipotásico", "Дигидропирофосфат дикалия", "Dukalia dihidrogena pirofosfato", "Dihydrogenopirofosforan dipotasowy", "Diidrogenopirofosfato dipotassico", "dipotassium dihydrogenpyrophosphate", "Dikaliumdihydrogendiphosphat", "Dihidrogenopirofosfato dipotássico", "焦磷酸二氢二钾", "二カリウム二水素ピロリン酸", "Diphosphate dipotasique", "Dihydrogénpyrofosforečnan didraselný", "Dipotasyum dihidrojen pirofosfat", "Dikālija dihidrogēnpirofosfāts", "Dikaliumdivetypyrofosfaatti", "Διϋδρογονοπυροφωσφορικό διποτάσσιο", "Dikalio dihidrogeno pirofosfatas", "Dikaaliumdivesinikpürofosfaat", "ثنائي هيدروجين بيروفوسفات ثنائي البوتاسيوم", "Дикалій дигідроген пірофосфат", "Dihidroġenpirofosfat dipotassiku"],
  roles: ["emulsifier", "humectant", "sequestrant", "stabiliser", "thickener"],
  children: []
}, {
  id: "en:e938",
  name: "Argon",
  es: "Argón",
  aliases: ["Argon", "Argó", "Аргон", "Argón", "Argons", "Árgon", "Αργο", "Argonas", "Argoon"],
  roles: [],
  children: []
}, {
  id: "en:e163ix",
  name: "E163ix",
  es: "E163ix",
  aliases: [],
  roles: [],
  children: []
}, {
  id: "en:e954iv",
  name: "E954iv",
  es: "E954iv",
  aliases: [],
  roles: [],
  children: []
}, {
  id: "en:e451i",
  name: "Pentasodium triphosphate",
  es: "Trifosfato de pentasodio",
  aliases: ["Trifosfat pentasodic", "Pentanatriumtrifosfaat", "Pentanatrijev trifosfat", "Trifosfato de pentasodio", "Пентанатриев трифосфат", "Pentanatriumtrifosfat", "Pentanátrium-trifoszfát", "Trifosforečnan pentasodný", "Trifosfato pentassódico", "Pentasodium triphosphate", "Trifosfato pentasodico", "Pentanatriumtriphosphat", "Trifosforan pentasodowy", "Pentanātrija trifosfāts", "Pentanaatriumtrifosfaat", "Pentanatrio trifosfatas", "Pentanatriumtrifosfaatti", "Trifosfat pentasodiku"],
  roles: ["emulsifier", "humectant", "sequestrant", "stabiliser", "thickener"],
  children: []
}, {
  id: "en:e628",
  name: "Dipotassium guanylate",
  es: "Guanilato dipotásico",
  aliases: ["Gwanilat dipotassiku", "Dikaliumguanylaatti", "Γουανιλικο καλιο", "Dikalio guanilatas", "Kaaliumguanülaat", "Dikaliumguanylat", "Dikālija guanilāts", "Guanylan dipotasowy", "Guanylate dipotassique", "Guanilato dipotássico", "Guanilato dipotassico", "Dipotassium guanylate", "Guanylan dvojdraselný", "Dikálium-guanilát", "Guanylan draselný", "Guanilato dipotásico", "Дикалиев гуанилат", "Dikalijev gvanilat", "Guanilat de dipotassi", "Kaliumguanylaat", "Guanilat dipotasic"],
  roles: [],
  children: []
}, {
  id: "en:e281",
  name: "Sodium propionate",
  es: "Propionato sódico",
  aliases: ["Propionian sodu", "Propionate de sodium", "Propionato de sódio", "プロピオン酸ナトリウム", "Propionato di sodio", "Sodium propionate", "Natriumpropionat", "Propionan sodný", "Nātrija propionāts", "Sodyum propionat", "Προπιονικο νατριο", "Natriumpropionaatti", "Natrio propionatas", "Naatriumpropionaat", "بروبيونات الصوديوم", "Նատրիումի պրոպիոնատ", "Propjonat tas-sodju", "Natriumpropionaat", "Natri propionat", "سدیم پروپیونات", "Propionat de sodiu", "Natrijev propionat", "Natrijum propionat", "சோடியம் புரோப்பனோயேட்டு", "Propionat de sodi", "Nátrium-propionát", "Propionan sodný synonyma", "Propionato sódico", "Натриев пропионат", "Пропионат натрия", "Natria propanoato"],
  roles: ["preservative"],
  children: []
}, {
  id: "en:e905cii",
  name: "Paraffin wax",
  es: "parafina",
  aliases: ["Parabhan", "Paraffina", "Paraffîn", "parafīns", "पैराफिन", "paraffin wax", "Parafin", "Parafinas", "Parafiini", "פאראפין", "پارافین", "Парафін", "نالفین", "Parafina", "Parafine was", "פרפין", "பாராஃபின் மெழுகு", "Парафин", "parafina", "Paraffin", "parafinvoks", "Céir pharaifín", "パラフィン", "Cire de paraffine", "Paraffin wax", "พาราฟิน", "Պարաֆին", "Parafiin", "برافين", "പാരഫിൻ മെഴുക്", "Paraffínvax", "Paraffinum", "Parafín", "parafino", "парафин"],
  roles: [],
  children: []
}, {
  id: "en:e952",
  name: "Cyclamic acid and its Na and Ca salts",
  es: "Ciclamato",
  aliases: ["Siklamat", "ciklāmskābe un tās na un ca sāļi", "Acido ciclamico e suoi sali di sodio e di calcio", "Cyclamic acid and its Na and Ca salts", "Cyclamat", "Acide cyclamique et ses sels", "ácido ciclâmico e seus sais de sódio e cálcio", "Kwas cyklaminowy i jego sole: potasowa i wapniowa", "Cioglamáit", "Kyselina cyklámová a jej na a ca soli", "aċidu ċiklamiku u l-imlieħ tiegħu na u ca i", "natrijev ciklamat", "syklamat", "Tsüklamiinhape ning selle naatrium- ja kaltsiumsoolad i", "Ciklamo rūgštis ir jos na bei ca druskos", "Κυκλαμικο οξυ και τα αλατα του με νατριο και ασβεστιο", "Syklamaatti", "Cyclaminsyre samt na- og ca-salte deraf", "Àcid ciclàmic i les seves sals de sodi i calci", "Ciklamna kislina ter njene natrijeve in kalcijeve soli i", "ציקלמאט", "ziklamato", "Cyclaamzuur en het natrium- en calciumzout daarvan", "Acid ciclamic și sărurile sale de na și ca", "Цикламат", "Ciclamato", "Ciklamato", "Kyselina cyklamová a její sodná a vápenatá sůl", "Ciklaminsav", "цикламова киселина и нейните натриеви и калиеви соли i", "Cyklaminsyra och dess na- och ca-salter"],
  roles: ["sweetener"],
  children: ["en:e952i", "en:e952ii", "en:e952iv"]
}, {
  id: "en:e634",
  name: "Calcium 5'-ribonucleotide",
  es: "5'-ribonucleótido de calcio",
  aliases: ["Kalcio 5′-ribonukleotidas", "Kaltsium-5'-ribonukleotiid", "Αλατα με ασβεστιο των 5′-ριβονουκλεοτιδιων", "Kalsium-5'-ribonukleotidi", "Calcium-5'-ribonucleotider", "5'-ribonukleotid tal-kalċju", "5'-ribonucléotide calcique", "5'-ribonucleótidos de cálcio", "5'ribonucleotide di calcio", "Calcium-5'-ribonukleotid", "Calcium 5'-ribonucleotide", "5'-rybonukleotydy wapnia", "5'-ribonukleotid vápenatý", "Kalcija 5'-ribonukleotīds", "Kalcium-5'-ribonukleotid", "5'-ribonucleótido de calcio", "Калциев 5'-рибонуклеотид", "Kalcium-5'-ribonukleotider", "Calcium-5'-ribonucleotiden", "5'-ribonucleotidă de calciu", "5'-ribonucleòtid de calci", "Kalcijev 5'-ribonukleotid"],
  roles: [],
  children: []
}, {
  id: "en:e1100",
  name: "Alpha-Amylase", 
  es: "Amilasa",
  aliases: ["amilāze", "Amylazy", "Alpha-Amylase", "Amilasi", "Amylasen", "Amylases", "Amilase", "Amyláza", "alfa-amilaza", "Amylaasi", "Αμυλάση", "Amülaas", "أميلاز", "amylase", "Amilaza", "amilasa", "Amylase", "Amilasa", "Amilază", "آمیلاز", "Амилазы", "amelazo", "Amiláz", "Amylas"],
  roles: [],
  children: ["en:e1100i", "en:e1100ii", "en:e1100iii", "en:e1100iv", "en:e1100v", "en:e1100vi"]
}, {
  id: "en:e171",
  name: "Titanium dioxide",
  es: "Dióxido de titanio",
  aliases: ["टाइटानियम डाइऑक्साइड", "Titāna dioksīds", "Biossido di titanio", "Titaanidioksidi", "Titano dioksidas", "טיטניום דו-חמצני", "Titanov dioksid", "Titanijum dioksid", "தைட்டானியம் ஈராக்சைடு", "Titanij dioksid", "Titaandioxide", "تیتانیوم دی اکسید", "Dioxid de titan", "Аксід тытану", "Titanium dioksida", "Titán-dioxid", "титанијум диоксид", "Titandioxid", "Dióxido de titanio", "Titanyum dioksit", "Титан оксиддери", "Dwutlenek tytanu", "二氧化鈦", "Oxyde de titane", "Dióxido de titânio", "酸化チタン", "Titanium dioxide", "Oxid titaničitý", "dé-ocsaíd tíotáiniam", "ടൈറ്റാനിയം ഡൈഓക്സൈഡ്", "Diossidu tat-titanju", "titandioxid", "Διοξειδιο του τιτανιου", "Titaandioksiid", "ثنائي أكسيد التيتانيوم", "Տիտանի երկօքսիդ", "Білила титанові", "Diòxid de titani", "ටයිටේනියම් ඩයොක්සයිඩ්", "Titani dioxide", "Títandíoxíð", "Титана диоксид", "titana dioksido", "이산화 타이타늄", "Титанов диоксид"],
  roles: ["colour"],
  children: []
}, {
  id: "en:e412",
  name: "Guar gum", 
  es: "Goma guar",
  aliases: ["Guar gumi", "Goma de guar", "Gumă de guar", "Guarpitmeel", "Гуаровая камедь", "Guarkärnmjöl", "Goma guar", "Гума гуар", "Guargumi", "Guma guar", "Guāra sveķi", "Guar zamkı", "Guarová guma", "Gomme de guar", "Guar gum", "Gomma di guar", "Guarkernmehl", "Guarkjernemel", "guar guma", "Gomma tal-guar", "Guargummi", "Guarkumi", "Κομμι γκουαρ", "Pupenių derva", "Guarkummi"],
  roles: ["emulsifier", "stabiliser", "thickener"],
  children: []
}, {
  id: "en:e340",
  name: "Potassium phosphates",
  es: "Fosfatos de potasio",
  aliases: ["Kalio fosfatai", "Kaliumfosfaatti", "kalijev fosfat", "Fosfati tal-potassju", "Kaliumphosphat", "Potassium phosphates", "Fosfato di potassio", "Fosfato de potássio", "Orthophosphates de potassium", "Fosforan potasu", "Fosforečnany draselné", "Potasyum fosfat", "Kālija fosfāti", "Kálium-foszfátok", "Калиеви фосфати", "Fosfatos de potasio", "Kaliumfosfater", "Kalium Fosfat", "Kaliumorthofosfaten", "Fosfați de potasiu", "Fosfat de potassi", "Kalijevi fosfati"],
  roles: ["emulsifier", "humectant", "sequestrant", "stabiliser", "thickener"],
  children: ["en:e340i", "en:e340ii", "en:e340iii"]
}, {
  id: "en:e503i",
  name: "Ammonium carbonate",
  es: "Carbonato de amonio",
  aliases: ["Amonijum karbonat", "Uhličitan amonný", "Ammónium-karbonát", "ammoniumkarbonat", "Амониев карбонат", "Carbonato de amonio", "탄산 암모늄", "Ammoniumkarbonat", "карбонат аммония", "Amonium karbonat", "Amonia karbonato", "Amoni cacbonat", "Ammoniumcarbonaat", "Hjartarsalt", "Carbonat de amoniu", "آمونیوم کربنات", "Ammoniumkarbonaat", "Ammoniy karbonat", "Carbonat d'amoni", "Amonijev karbonat", "Amonio karbonatas", "Ammooniumkarbonaat", "كربونات الأمونيوم", "Ανθρακικα αλατα του αμμωνιου", "Ammoniumkarbonaatti", "แอมโมเนียมคาร์บอเนต", "Ամոնիումի կարբոնատ", "Karbonat tal-ammonju", "amonijev karbonat", "Ammoniumcarbonat", "Carbonato d'ammonio", "Ammonium carbonate", "Carbonato de amónio", "Carbonate d'ammonium", "炭酸アンモニウム", "Węglan amonu", "Uhličitan amónny", "Amonija karbonāts"],
  roles: [],
  children: []
}, {
  id: "en:e163viii",
  name: "E163viii",
  es: "E163viii",
  aliases: [],
  roles: [],
  children: []
}, {
  id: "en:e319",
  name: "Tertiary-butylhydroquinone (tbhq)",
  es: "Terbutilhidroquinona (tbhq)",
  aliases: ["Terc-butilhidrohinons (tbhq)", "Terciálny butylhydrochinón (tbhq)", "Butylhydroquinone tertiaire", "Terc butil-hidroquinona (tbhq)", "Butilidrochinone terziario (tbhq)", "Tertiär-butylhydrochinon", "Tertiary-butylhydroquinone (tbhq)", "Tert-butylohydrochinon (tbhq)", "Butilidrokinon terzjarju (tbhq)", "Tert-butylhydroquinon (tbhq)", "Tertsiaarbutüülhüdrokinoon (tbhq)", "Tretinis butilhidrochinonas (tbhq)", "Τριτοταγης βουτυλ-υδροκινονη (tbhq)", "Tertbutyylihydroksikinoni (tbhq)", "Tertbutilhidroquinona", "Terc-butilhidrokinon (tbhq)", "Butilhidrochinonă terțiară (tbhq)", "Tert-butylhydrochinon (tbhq)", "Terbutilhidroquinona (tbhq)", "Третичен бутилхидроквинон (тбхк)", "Tertiär-butylhydrokinon (tbhq)", "Terc-butil-hidrokinon (tbhq)", "Terciární butylhydrochinon (tbhq)"],
  roles: ["antioxidant"],
  children: []
}, {
  id: "en:e101",
  name: "Riboflavins",
  es: "Riboflavins",
  aliases: ["Riboflavini", "3a825", "Riboflavins"],
  roles: ["colour"],
  children: ["en:e101i", "en:e101ii", "en:e101iii", "en:e101iv"]
}, {
  id: "en:e924",
  name: "E924",
  es: "E924",
  aliases: [],
  roles: [],
  children: []
}, {
  id: "en:e484",
  name: "Stearyl citrate",
  es: "Citrato de estearilo",
  aliases: ["Stearyl citrát", "Stearyl citrate", "Stearil citrato", "Stearylcitrat", "Citrato de estearilo", "柠檬酸硬脂酯", "Citrate de stéaryle", "クエン酸ステアリル", "Cytrynian stearylowy", "Stearil sitrat", "Stearilcitrāts", "Стеарил цитрат", "Stearilo citratas", "Stearüültsitraat", "ستيريل سترات", "Κιτρικός στεατυλίου", "Stearyylisitraatti", "Ċitrat steariliku", "Stearil citrat", "Citrat de stearil", "Stearielsitraat", "Stearylcitraat", "Citrat d'estearil", "סטריל ציטראט", "Stearil Citrat", "스테아릴 시트르산", "Sztearil-citrát", "Stearila citrato"],
  roles: ["antioxidant", "emulsifier", "sequestrant"],
  children: []
}, {
  id: "en:e528",
  name: "Magnesium hydroxide",
  es: "Hidróxido magnésico",
  aliases: ["Magnézium-hidroxid", "Hydroxid hořečnatý", "Магнезиев хидроксид", "Hidróxido magnésico", "Magnesiumhydroxid", "Magnesiumhydroxide", "Hidroxid de magneziu", "Hidròxid de magnesi", "Magnezijev hidroksid", "Magneesiumhüdroksiid", "Magnio hidroksidas", "Magnesiumhydroksidi", "Υδροξειδιο του μαγνησιου", "Idrossidu tal-manjeżju", "Hidróxido de magnésio", "Hydroxyde de magnésium", "Magnesium hydroxide", "Idrossido di magnesio", "Wodorotlenek magnezu", "Hydroxid horečnatý", "Magnija hidroksīds"],
  roles: [],
  children: []
}, {
  id: "en:e420",
  name: "Sorbitol",
  es: "Sorbitol",
  aliases: ["Sorbitol", "Sorbitolis", "sorbitool", "Σορβιτολη", "Sorbitoli", "sorbitol", "Sorbitolo", "Sorbit", "ソルビトール", "Sorbitole", "sorbitolis", "Сорбитол", "Szorbit", "Сорбит"],
  roles: ["humectant", "sequestrant", "stabiliser", "sweetener", "thickener"],
  children: ["en:e420i", "en:e420ii"]
}, {
  id: "en:e243",
  name: "Ethyl lauroyl arginate",
  es: "Etil lauroil arginato",
  aliases: ["Αιθυλική λαουροϋλ αργινίνη", "Etyylilauryyliarginaatti", "Etil lauroil arginatas", "إيثيل لورويل أرجينات", "Ethyllauroylarginat", "Etil lauroil arginat", "Etylu lauroilu arginian", "乙基月桂酰精氨酸酯", "エチルラウロイルアルギネート", "Etil lauroil arginato", "Arginate d'éthyle laurique", "Ethyl lauroyl arginate", "Etyl lauroyl arginát", "Etil lauroil argināts", "Etil-lauroil-arginát", "Ethyl lauroyl arginát", "에틸 라우로일 아르기네이트", "Etyllauroylarginat", "Етил лауроил аргинат", "Этил лауроил аргинат", "Ethyllauroylarginaat"],
  roles: ["preservative"],
  children: []
}, {
  id: "en:e333iii",
  name: "Tricalcium citrate",
  es: "Citrato tricálcico",
  aliases: ["Trikalcijev citrat", "Tricalciumcitraat", "کلسیم سیترات", "Citrat tricalcic", "Trikalcium-citrát", "Tricalcium citrate", "Трикалциев цитрат", "Citrato tricálcico", "Trikalciumcitrat", "Trikalcija citrāts", "柠檬酸钙", "Citrate tricalcique", "Citrato tricalcico", "Tricalciumcitrat", "Cytrynian triwapniowy", "Citran trivápenatý", "Ċitrat trikalċiku", "trikalcijcitrat", "Trikalsiumsitrat", "Trikalcio citratas", "Kaltsiumtsitraat", "Trikalsiumsitraatti"],
  roles: ["sequestrant", "stabiliser"],
  children: []
}, {
  id: "en:e403",
  name: "Ammonium alginate",
  es: "Alginato de amonio",
  aliases: ["Alginan amonný synonyma", "Ammónium-alginát", "Alginato de amonio", "Амониев алгинат", "Ammoniumalginat", "Alginat d'amoni", "Amonijev alginat", "Ammoniumalginaat", "Alginat de amoniu", "Alġinat tal-ammonju", "Amonio alginatas", "Ammooniumalginaat", "Αλγινικο αμμωνιο", "Ammoniumalginaatti", "Amonija algināts", "Alginato di ammonio", "Ammonium alginate", "Alginate d'ammonium", "Alginato de amónio", "Alginian amonu", "Alginát amónny"],
  roles: ["carrier", "emulsifier", "humectant", "sequestrant", "stabiliser", "thickener"],
  children: []
}, {
  id: "en:e473",
  name: "Sucrose esters of fatty acids",
  es: "Sucroésteres de ácidos grasos",
  aliases: ["Saccharoseestere af fedtsyrer", "Εστερες λιπαρων οξεων με σακχαροζη", "Rasvahappojen sakkaroosiesterit", "Rasvhapete sahharoosestrid", "Riebalų rūgščių sacharozės esteriai", "Esteri tas-sukrożju tal-aċidi grassi", "Estery sacharózy s mastnými kyselinami", "Estry kwasów tłuszczowych i sacharozy", "Esteri di saccarosio degli acidi grassi", "Sucrose esters of fatty acids", "Zuckerester von Speisefettsäuren", "Ésteres de sacarose de ácidos gordos", "Sucroester", "Taukskābju saharozes esteri", "Sackarosestrar av fettsyror", "Sucroésteres de ácidos grasos", "Естери на мастни киселини и захароза", "Estery sacharosy s mastnými kyselinami", "sukroseestere av fettsyrer", "Zsírsavak szacharóz-észterei", "Esteri ai zaharozei cu acizi grași", "Sucrose-esters van vetzuren", "Saharozni estri maščobnih kislin", "Sucroèster d'àcids grassos"],
  roles: ["emulsifier", "stabiliser"],
  children: []
}, {
  id: "en:e576",
  name: "Sodium gluconate",
  es: "Gluconato sódico",
  aliases: ["Natrio gliukonatas", "Naatriumglükonaat", "Natriumglukonaatti", "Γλυκονικο νατριο", "Natriumgluconat", "Glukonat tas-sodju", "Gluconate de sodium", "Gluconato de sódio", "Sodium gluconate", "Gluconato di sodio", "Glukonian sodu", "Glukonan sodný", "Nātrija glikonāts", "Nátrium-glükonát", "Gluconato sódico", "Натриев глюконат", "Natriumglukonat", "Natriumgluconaat", "Gluconat de sodiu", "Gluconat de sodi", "Natrijev glukonat"],
  roles: ["sequestrant", "stabiliser", "thickener"],
  children: []
}, {
  id: "en:e964",
  name: "Polyglycitol syrup",
  es: "Jarabe de poliglicitol",
  aliases: ["Sirup ta' poligliċitol", "สารละลายโพลีกลีซีทอล", "Polyglycitol sirup", "Poligliçitol siropu", "Сироп полігліцитолу", "Poliglicitolio sirupas", "Polüglütsitoolisiirup", "شراب بولي جليسيتول", "Σιρόπι πολυγλυκιτόλης", "Polyglysitolisiirappi", "Poligliserol şurubu", "Poliglicīta sīrups", "पॉलीग्लिसिटोल सिरप", "Sirup polyglycitolu", "Sciroppo di poliglicitolo", "Polyglycitol syrup", "Polyglycitol-Sirup", "Xarope de poliglicitol", "聚甘油糖醇糖浆", "ポリグリシトールシロップ", "Sirop de polyglycitol", "Syrop poliglicytolowy", "Sirup poligliserol", "Сироп полиглицитола", "Jarabe de poliglicitol", "Сироп от полиглицитол", "Polyglycitol sirap", "폴리글리시톨 시럽", "Poliglicitol szirup", "Xarop de poliglicitol", "Sirup poliglicitola", "סירופ פוליגליציטול", "Sirop de poliglicitol", "Polyglycitol siroop"],
  roles: ["sweetener"],
  children: []
}, {
  id: "en:e460",
  name: "Cellulose",
  es: "Celulosas",
  aliases: ["Բջջանյութ", "Целюлоза", "Cellulose", "Tsellüloza", "เซลลูโลส", "Κυτταρίνη", "Tselluloos", "سليولوز", "cellulose", "Silulusa", "সেলুলোজ", "സെല്ലുലോസ്", "Celuloza", "ċelluloża", "Selulosa", "Celulóza", "ceallalós", "Celulose", "सेल्युलोज", "セルロース", "Seliloz", "ဆဲလျူလို့", "Selüloz", "셀룰로스", "Целулоза", "celulozo", "целлюлоза", "Sellulose", "Sellulósi", "Cel·lulosa", "Sellüloza", "Selluloosa", "Celiuliozė", "Seliwlos", "cellulosa", "Celuloze", "целулоза", "Cellulosa", "Celulosas", "Жасұнық", "Cellulóz", "ਸੈਲੂਲੋਜ਼", "Cellulòsa", "Celulosa", "ცელულოზა", "Selulosi", "سلولز", "Celuloză", "Цэлюлоза", "zelulosa", "Celuloso", "सेल्यूलोज़", "Seluloz", "மாவியம்"],
  roles: ["carrier", "emulsifier", "humectant", "stabiliser", "thickener"],
  children: ["en:e460i", "en:e460ii"]
}, {
  id: "en:e261ii",
  name: "Potassium diacetate",
  es: "Potassium diacetate",
  aliases: ["Potassium diacetate"],
  roles: [],
  children: []
}, {
  id: "en:e160b",
  name: "Annatto",
  es: "Annato",
  aliases: ["Biksa kolorigilo", "Annatto", "Annato", "Анато", "Annattoextrakt", "Anato", "Arxiota", "Màu điều nhuộm", "annatto", "Anatas", "Annaato", "أناتو", "Αννατο", "ಅನಾಟೋ", "Annatto (Bixin und Norbixin)", "胭脂樹紅", "Rocou", "アナトー色素"],
  roles: ["colour"],
  children: ["en:e160bi", "en:e160bii", "en:e160biii"]
}, {
  id: "en:e352i",
  name: "Calcium malate",
  es: "Malato cálcico",
  aliases: ["Kalcija malāts", "Jablčnan vápenatý", "Malato de cálcio", "Malate de calcium", "Calcium malate", "Malato di calcio", "Calciummalat", "Jabłczan wapnia", "Malat tal-kalċju", "Kaltsiummalaat", "Kalcio malatas", "Μηλικο ασβεστιο", "Kalsiummalaatti", "Kalcijev malat", "Malat de calciu", "Calciummalaat", "Калциев малат", "Malato cálcico", "Kalciummalat", "Kalcium-malát", "Jablečnan vápenatý"],
  roles: [],
  children: []
}, {
  id: "en:e902",
  name: "Candelilla wax",
  es: "Cera candelilla",
  aliases: ["Kandelilni vosek", "Cera de candelilla", "Ceară de candelilla", "Candelillawas", "Kandelillavax", "Канделилов восък", "Cera candelilla", "Kandelillaviasz", "Kandelilový vosk", "Kandelilvasks", "Vosk kandelila", "Wosk candelilla", "Cera de candelilha", "Cire de Candelilla", "Candelilla wax", "Candelillawachs", "Xama' tal-kandelilla", "Candelillavoks", "Κανδελιλλικος κηρος", "Kandelillavaha", "Kandelila vaškas"],
  roles: ["carrier", "emulsifier", "thickener"],
  children: []
}, {
  id: "en:e106",
  name: "flavin mononucleotide",
  es: "flavín mononucleótido",
  aliases: ["flavīnmononukleotīds", "flavínmononukleotid", "Mononucleótido de flavina", "flavine mononucléotide", "flavina mononucleotide", "flavin mononucleotide", "Flavinmononukleotid", "Mononukleotyd flawinowy", "flavin mononukleotid", "flavinmononukleotid", "flavinmononukleotidas", "flavinmononukleotiid", "flavinmononukleotidi", "φλαβίνη μονονουκλεοτίδιο", "flavin mononucleotid", "flavinmononucleotide", "flavín mononucleótido", "флавин мононуклеотид", "flavin-mononukleotid"],
  roles: [],
  children: []
}, {
  id: "en:e452v",
  name: "Ammonium polyphosphate",
  es: "Polifosfato de amonio",
  aliases: ["Ammonium polifosfat", "Amonia polifosfato", "Полифосфат аммония", "Ammoniumpolyfosfat", "Амониум полифосфат", "폴리인산 암모늄", "Амониев полифосфат", "Polifosfato de amonio", "Амонијум полифосфат", "Polyfosforečnan amonný", "Ammónium-polifoszfát", "Amonijev polifosfat", "פוליפוספט אמוניום", "Polifosfat d'amoni", "Polifosfat de amoniu", "پلی فسفات آمونیوم", "Ammoniumpolyfosfaat", "Polifosfat tal-ammonju", "Ammoniumpolyphosphat", "Поліфосфат амонію", "Ammoniumpolyfosfaatti", "Πολυφωσφορικό αμμώνιο", "Amonio polifosfatas", "Ammooniumpolüfosfaat", "بولي فوسفات الأمونيوم", "Amonyum polifosfat", "Amonija polifosfāts", "Polyfosforečnan amónny", "Polifosforan amonu", "Polifosfato di ammonio", "Ammonium polyphosphate", "Polyphosphate d'ammonium", "聚磷酸铵", "Polifosfato de amónio", "ポリリン酸アンモニウム"],
  roles: ["emulsifier", "humectant", "sequestrant", "stabiliser", "thickener"],
  children: ["en:e545"]
}, {
  id: "en:e343iii",
  name: "Trimagnesium phosphate",
  es: "Trimagnesium phosphate",
  aliases: ["Trimagnesium phosphate"],
  roles: [],
  children: []
}, {
  id: "en:e233",
  name: "Thiabendazole",
  es: "Tiabendazol",
  aliases: ["Thiabendazol", "Thiabendazool", "Tiabendazol", "Thiabendazole", "Thiabendazolo", "Thiabendazols", "Tiabendatsoli", "Thiabendazolas"],
  roles: [],
  children: []
}, {
  id: "en:e163a",
  name: "Cyanidin",
  es: "Cianidina",
  aliases: ["Cyanidín", "Cyjanidyna", "Cyanidin", "Cianidina", "Cyanidine", "シアニジン", "Siyanidin", "Cianidīns", "Ціанідин", "Κυανιδίνη", "Syanidiini", "Cianidinas", "Tsüanidiin", "سيانيدين", "Ċjanidin", "Cijanidin", "Cianidină", "ציאנידין", "Cianidin", "시아니딘", "Цијанидин", "Цианидин", "Sianidin", "Cianidino"],
  roles: ["colour"],
  children: []
}, {
  id: "en:e161bii",
  name: "E161bii",
  es: "E161bii",
  aliases: [],
  roles: [],
  children: []
}, {
  id: "en:e559",
  name: "Aluminium silicate",
  es: "Silicato de aluminio",
  aliases: ["Silicat de aluminiu", "Aluminiumsilicaat", "Aluminijev silikat", "Silicat d'alumini", "Aluminiumsilikat", "Silicato de aluminio", "Алуминиев силикат", "Alumínium-szilikát", "Křemičitan hlinitý", "Kremičitan hlinitý", "Krzemian glinu", "Silicato de alumínio", "Silicate d'aluminium", "Aluminiumsilicat", "Silicato di alluminio", "Aluminium silicate", "Alumīnija silikāts (kaolīns)", "Πυριτικο αργιλιο", "Alumiinisilikaatti", "Alumiiniumsilikaat", "Aliuminio silikatas", "Silikat tal-aluminju"],
  roles: [],
  children: []
}, {
  id: "en:e452ii",
  name: "Potassium polyphosphate",
  es: "Polifosfato de potasio",
  aliases: ["Kālija polifosfāts", "Polifosfato di potassio", "Potassium polyphosphate", "Kaliumpolyphosphat", "polifosfato de potássio", "Polyphosphate potassique", "Polifosforan potasu", "Polyfosforečnan draselný", "Polifosfat tal-potassju", "kalijev polifosfat", "Kaaliumpolüfosfaat", "Kalio polifosfatas", "Kaliumpolyfosfaatti", "Πολυφωσφορικο καλιο", "Kaliumpolyphosphater", "Kalijev polifosfat", "Kaliumpolyfosfaat", "Polifosfat de potasiu", "Kálium-polifoszfát", "Калиев полифосфат", "Polifosfato de potasio", "Kaliumpolyfosfat"],
  roles: ["emulsifier", "humectant", "sequestrant", "stabiliser", "thickener"],
  children: []
}, {
  id: "en:e128",
  name: "Red 2G",
  es: "Rojo 2G",
  aliases: ["Röd 2G", "Rojo 2G", "Vörös 2G", "Vermell 2G", "Roșu 2G", "Rood 2G", "Rød 2G", "Punainen 2G", "Czerwień 2G", "Rosso 2G", "Red 2G", "Rot 2G", "Rouge 2G", "Vermelho 2G"],
  roles: ["colour"],
  children: []
}, {
  id: "en:e965ii",
  name: "Maltitol syrup",
  es: "Jarabe de maltitol",
  aliases: ["Maltīta sīrups", "Maltitol şurubu", "Maltitolový sirup", "Syrop maltitolowy", "麦芽糖醇糖浆", "マルチトールシロップ", "Xarope de maltitol", "Sirop de maltitol", "Maltitol syrup", "Sciroppo di maltitolo", "Maltitsirup", "maltitol sirup", "Ġulepp tal-maltitol", "Мальтитоловий сироп", "Maltitol siropu", "Maltitolsirup", "ไซรัปมอลทิทอล", "Σιρόπι μαλτιτόλης", "Maltitolisiirappi", "Maltitoolisiirup", "Maltitolio sirupas", "شراب مالتيتول", "Maltitol sirup", "Xarop de maltitol", "شربت مالتیتول", "Sirô Maltitol", "Maltitolstroop", "Maltitola siropo", "Sirup Maltitol", "Мальтитоловый сироп", "말티톨 시럽", "Maltitolsirap", "Shurup Maltitoli", "Jarabe de maltitol", "Малтитол сироп", "Maltitszirup"],
  roles: ["emulsifier", "humectant", "stabiliser", "sweetener", "thickener"],
  children: []
}, {
  id: "en:e140ii",
  name: "Chlorophyllins",
  es: "Clorofilinas",
  aliases: ["Chlorofiliny", "Clorofilline", "Chlorophylline", "Chlorophyllins", "Clorofilinas", "Chlorophyllines", "Chlorofylíny", "Hlorofilīni", "Χλωροφυλλινες", "Klorofylliinit", "Chlorofilinai", "Klorofülliinid", "Chlorophylliner", "Klorofillini", "Chlorofylinen", "Clorofiline", "Klorofilini", "Chlorofyliny", "Klorofillinek", "Klorofylliner", "Хлорофилини"],
  roles: ["colour"],
  children: []
}, {
  id: "en:e470iii",
  name: "E470iii",
  es: "E470iii",
  aliases: [],
  roles: [],
  children: []
}, {
  id: "en:e571",
  name: "E571",
  es: "Estearato de amonio",
  aliases: ["Амонијум стеарат", "ammónium-sztearát", "Estearato de amonio", "Stearat Amonijum", "Амониум стеарат", "Ammoniumstearat", "Amonium stearat", "Ammoniumstearaat", "Stearat de amoniu", "آمونیوم استئارات", "סטארט אמוניום", "Amonijev stearat", "Amonio stearatas", "Ammoniumstearaatti", "Ammonium stearat", "Stearato di ammonio", "अमोनियम स्टीयरेट", "Amonija stearāts", "Stearát amonný", "Амониев стеарат", "스테아르산 암모늄", "Стеарат аммония", "Amonia stearato", "Amoni stearat", "Estearat d'amoni", "Ammooniumstearaat", "ستيرات الأمونيوم", "Στεατικό αμμώνιο", "สเตียเรตแอมโมเนียม", "Стеарат амонію", "Stearat tal-ammonju", "Stéarate d'ammonium", "硬脂酸铵", "Estearato de amónio", "ステアリン酸アンモニウム", "Stearynian amonu", "Stearát amónny", "Amonyum stearat"],
  roles: [],
  children: []
}, {
  id: "en:e913",
  name: "Lanolin",
  es: "Lanolina",
  aliases: ["Lanolín", "Lanólin", "Lanolina", "Lanoline", "ラノリン", "Wollwachs", "Lanolin", "Լանոլին", "Ланолін", "ลาโนลิน", "Λανολίνη", "اللانولين", "Lanolien", "Ланолин", "Lanolino", "Lanolīns", "लैनोलिन", "Lanoliini", "Lanolinas", "ლანოლინი", "لانولین", "Lanolină", "לנולין", "லானோலின்", "Lanolinë"],
  roles: [],
  children: []
}, {
  id: "en:e161e",
  name: "Violaxanthin",
  es: "Violaxantina",
  aliases: ["Wiolaksantyna", "Violaxantina", "Violaxanthine", "ビオラキサンチン", "Violaxanthin", "Violaksantīns", "Βιολαξανθίνη", "Violaksantiini", "Violaksantinas", "Violaksantiin", "فيولاكسانثين", "Violoxanthine", "Violoxantină", "Violaxantin", "비올라잔틴", "Виолаксантин"],
  roles: [],
  children: []
}, {
  id: "en:e501",
  name: "Potassium carbonates",
  es: "Carbonatos de potasio",
  aliases: ["Kálium-karbonátok", "Kaliumkarbonater", "калиеви карбонати", "Carbonatos de potasio", "Kaliumcarbonaten", "Carbonați de potasiu", "carbonats de potassi", "ανθρακικά άλατα καλίου", "kaliumkarbonaatit", "kaaliumkarbonaadid", "kalio karbonatai", "kaliumkarbonater", "karbonati tal-potassju", "Węglany potasu", "Carbonates de potassium", "Carbonatos de potássio", "Potassium carbonates", "Carbonati di potassio", "Kaliumcarbonate", "uhličitany draselné"],
  roles: ["stabiliser"],
  children: ["en:e501i", "en:e501ii"]
}, {
  id: "en:e330",
  name: "Citric acid",
  es: "Ácido cítrico",
  aliases: ["Лимонена киселина", "시트르산", "Seur di citron", "Kyselina citronová", "Citra acido", "Лимонная кислота", "Sítrónusýra", "Sitroensuur", "Axít citric", "Zitrounesaier", "acid citric", "Citronsyre", "Կիտրոնաթթու", "лимонная кислота", "Sidrunhape", "حمض الليمون", "Κιτρικο οξυ", "সাইট্রিক অ্যাসিড", "Sitronsyre", "Aċidu ċitriku", "kiselina limunska kiselina", "സിട്രിക് ആസിഡ്", "Aigéad citreach", "Kyselina citrónová", "Citronensäure", "Citric acid", "Acide citrique", "Ácido cítrico", "クエン酸", "Kwas cytrynowy", "Лимон кислотасы", "sitrik asit", "Лимон қышқылы", "Citronsyra", "лимонска киселина", "limunska kiselina", "Citromsav", "sitronsyre", "Asam sitrat", "సిట్రిక్ ఆమ్లం", "ਸਿਟਰਿਕ ਤੇਜ਼ਾਬ", "Asid sitrik", "Acid citric", "Лімонная кіслата", "سیتریک اسید", "ლიმონმჟავა", "azido zitriko", "سٹرک تیزاب", "சிட்ரிக் அமிலம்", "Limunska kiselina", "Citronska kislina", "חומצה ציטרית", "Limon turşusu", "Citrinų rūgštis", "Sitruunahappo", "Acido citrico", "Asid sitrig", "Citronskābe", "सिट्रिक अम्ल"],
  roles: ["antioxidant", "sequestrant"],
  children: []
}, {
  id: "en:e1404",
  name: "Oxidised starch",
  es: "Almidón oxidado",
  aliases: ["Amido ossidato", "Oxidierte stärke", "Oxidised starch", "Amido oxidado", "Amidon oxydé", "Skrobia utleniona", "Oxidovaný škrob", "Oksidētā ciete", "Oksiduotasis krakmolas", "Oksüdeeritud tärklis", "Οξειδωμενο αμυλο", "Hapetettu tärkkelys", "Oxideret stivelse", "Lamtu ossidat", "Geoxideerd zetmeel", "Amidon oxidat", "Midó oxidat", "Oksidirani škrob", "Oxidált keményítő", "Almidón oxidado", "Окислено нишесте", "Oxiderad stärkelse"],
  roles: ["emulsifier", "stabiliser", "thickener"],
  children: []
}, {
  id: "en:e100i",
  name: "E100i",
  es: "E100i",
  aliases: [],
  roles: [],
  children: []
}, {
  id: "en:e910",
  name: "Wax ester",
  es: "Éster de cera",
  aliases: ["Vosek ester", "Esteri de ceară", "Wasester", "Vaxester", "Восъчен естер", "Éster de cera", "Viaszészter", "Voskový ester", "Vaska esters", "Ester woskowy", "Esters de cires", "Esteri di cera", "Wachsester", "Wax ester", "Ester tal-vaża", "Voksester", "Vahaesteri", "Εστέρας κεριού", "Vahaester", "Vaško esteris"],
  roles: [],
  children: []
}, {
  id: "en:e414",
  name: "Acacia gum",
  es: "Goma arábiga",
  aliases: ["Arabische gom", "Arabiako goma", "صمغ عربی", "Гуміарабік", "Gumă arabică", "Akacijeva guma", "גומי ערבי", "Gumiarábikum", "gummi arabicum", "Гуммиарабик", "Goma arábiga", "Goma arabica", "Gom arab", "Gomma d'acacia", "Akācijas sveķi", "Arabikumi", "Akacijų derva (gumiarabikas)", "Aqoqiyo", "Goma aràbiga", "Arabská guma", "아라비아검", "Акациева гума", "Araba gumo", "Guma akacjowa", "Goma arábica", "阿拉伯膠", "アラビアガム", "Gomme d'acacia", "Gummi arabicum", "Acacia gum", "બાવળ", "Arap zamkı", "Αραβικό κόμμι", "Kummiaraabik", "صمغ عربي", "Արաբական խեժ", "Gom arabek", "Arabisk gummi (akaciegummi)", "Gomma tal-akaċja", "guma arabika", "gummi arabikum"],
  roles: ["carrier", "emulsifier", "stabiliser", "thickener"],
  children: ["en:e414a"]
}, {
  id: "en:e333",
  name: "Calcium citrates",
  es: "Citratos de calcio",
  aliases: ["Citrát trivápenatý", "Cytryniany wapnia", "Calciumcitrat", "Citrato di calcio", "Calcium citrates", "Citrato de cálcio", "Citrates de calcium", "kalsiumsitrat", "kalcijevi citrati", "Kalsiumsitraatit", "Κιτρικο ασβεστιο", "Kaltsiumtsitraadid", "Citrats de calci", "Calciumcitraten", "Цитрат кальция", "Kalciumcitrater", "Citratos de calcio", "Калциев цитрат", "Citronany vápenaté", "Kalcium-citrátok"],
  roles: ["sequestrant", "stabiliser"],
  children: ["en:e333i", "en:e333ii", "en:e333iii"]
}, {
  id: "en:e632",
  name: "Dipotassium inosinate",
  es: "Inosinato dipotásico",
  aliases: ["Inosinato dipotássico", "Inosinate dipotassique", "Inosinato dipotassico", "Dipotassium inosinate", "Dikaliuminosinat", "Inozynian dipotasowy", "Inozínan didraselný", "Dikālija inozināts", "Dikaaliuminosinaat", "Dikalio inozinatas", "Ινοσινικο καλιο", "Dikaliuminosinaatti", "Inosinat dipotassiku", "Dikaliuminosinaat", "Inozitat dipotasic", "Inosinat de dipotassi", "Dikalijev inozinat", "Dikálium-inozinát", "Inosinan draselný", "Дикалиев инозинат", "Inosinato dipotásico"],
  roles: [],
  children: []
}, {
  id: "en:e170i",
  name: "Calcium carbonate",
  es: "Carbonato de calcio",
  aliases: ["Uhličitan vápenatý", "carbónáit chailciam", "Węglan wapnia", "Calciumcarbonat", "Calcium carbonate", "Carbonato de cálcio", "炭酸カルシウム", "कॅल्शियम कार्बोनेट", "Carbonate de calcium", "Kalsiyum karbonat", "Kalsium karbonat", "Кальций карбонаты", "calciumkarbonat", "Կալցիումի կարբոնատ", "Карбонат кальцію", "แคลเซียมคาร์บอเนต", "Ανθρακικο ασβεστιο", "Kaltsiumkarbonaat", "كربونات الكالسيوم", "ক্যালসিয়াম কার্বনেট", "kalsiumkarbonat", "ചുണ്ണാമ്പ്", "Carbonato calcico", "Kalcijev karbonat", "Karbonat tal-kalċju", "Kalsiy karbonat", "Kalsíumkarbónat", "Kalsiumkarbonaat", "කැල්සියම් කාබනේට්", "canxi cacbonat", "Carbonatum calcii", "Carbonat de calci", "탄산 칼슘", "Калциев карбонат", "kalcia karbonato", "карбонат кальция", "calsiwm carbonad", "Carbonato di calcio", "Kalcija karbonāts", "कैल्सियम कार्बोनेट", "Kalsiumkarbonaatti", "Kalcio karbonatas", "Carboanaayt kelkium", "Carbonat de calciu", "کلسیم کربنات", "Calciumcarbonaat", "Kaltzio karbonato", "கால்சியம் கார்பனேட்", "Kalcij-karbonat", "סידן פחמתי", "Kalcijum karbonat", "Калциум карбонат", "Kalciumkarbonat", "Carbonato de calcio", "калцијум карбонат", "Kalcium-karbonát", "calsium carbonat"],
  roles: ["colour", "stabiliser"],
  children: []
}, {
  id: "en:e496",
   name: "Sorbitan trioleate",
  es: "Trioleato de sorbitano", 
  aliases: ["Сорбитан триолеат", "Trioleato de sorbitano", "소르비탄 트라이올리에이트", "Sorbitantrioleat", "Szorbitan-trioleát", "Sorbitan trioleát", "Trioleat de sorbità", "Sorbitan trioleat", "Sorbitantrioleaat", "Sorbitano trioleatas", "ثلاثي الأوليات سوربيتان", "Sorbitaanitrioleaatti", "Τριολεϊκός σορβιτάνης", "Sorbitāna trioleāts", "Trioléate de sorbitane", "脱水山梨醇三油酸酯", "トリオレイン酸ソルビタン", "Trioleato di sorbitano", "Sorbitan trioleate", "Trioleinian sorbitanu"],
  roles: [],
  children: []
}, {
  id: "en:e949",
  name: "Hydrogen",
  es: "Hidrógeno",
  aliases: ["Vety", "Υδρογόνο", "Vandenilis", "Vesinik", "Brint", "Idroġenu", "Wodór", "Wasserstoff", "Idrogeno", "Hydrogen", "Hidrogénio", "Hydrogène", "Vodík", "Ūdeņradis", "Hidrogén", "Väte", "Водород", "Hidrógeno", "Waterstof", "Hidrogen", "Vodik"],
  roles: [],
  children: []
}, {
  id: "en:e470aii",
  name: "Potassium salts of fatty acids",
  es: "Potassium salts of fatty acids",
  aliases: ["Sole potasowe kwasów tłuszczowych", "Kaliumsalze der Speisefettsäuren", "Potassium salts of fatty acids", "Sali di potassio degli acidi grassi", "脂肪酸钾盐", "Sais de potássio de ácidos gordos", "Sels de potassium d'acides gras", "脂肪酸カリウム塩", "Draselné soli mastných kyselín", "Săruri de potasiu ale acizilor grași", "Kalijeve soli maščobnih kislin", "Kālija taukskābju sāļi", "Rasvahappojen kaliumsuolat", "Kalio riebalų rūgščių druskos", "Zsírsavak káliumsói", "Kaliumsalter av fettsyror", "지방산 칼륨 염", "Калийные соли жирных кислот"],
  roles: ["emulsifier", "stabiliser", "thickener"],
  children: []
}, {
  id: "en:e341i",
  name: "Monocalcium phosphate",
  es: "Fosfato monocálcico",
  aliases: ["Fosforan monowapniowy", "Monocalcium phosphate", "Fosfato monocalcico", "Monocalciumphosphat", "Fosfato monocálcico", "磷酸二氢钙", "Phosphate monocalcique", "リン酸二水素カルシウム", "Fosforečnan monovápenatý", "Sárfhosfáit", "Monokalcija fosfāts", "Δισοξινο φωσφορικο ασβεστιο", "Monokalsiumfosfaatti", "Monokalcio fosfatas", "Kaltsiumdivesinikfosfaat", "فوسفات أحادي الكالسيوم", "monokalcijev fosfat", "Fosfat monokalċiku", "মনোক্যালসিয়াম ফসফেট", "Superphosphate", "Monocalciumfosfaat", "Fosfat monocalcic", "مونوکلسیم فسفات", "Monokalcij-fosfat", "Monokalcijev fosfat", "Monokalcijum fosfat", "Fosfat de monocalci", "Monokalcium-foszfát", "Monokalciumfosfat", "Монокалциев фосфат", "Дигидроортофосфат кальция"],
  roles: ["emulsifier", "humectant", "sequestrant", "stabiliser", "thickener"],
  children: []
}, {
  id: "en:e1101ii",
  name: "E1101ii",
  es: "E1101ii",
  aliases: [],
  roles: [],
  children: []
}, {
  id: "en:e101iv",
  name: "Riboflavin from Ashbya gossypii",
  es: "Riboflavin from Ashbya gossypii",
  aliases: ["Riboflavin from Ashbya gossypii"],
  roles: [],
  children: []
}, {
  id: "en:e160a",
  name: "carotene",
  es: "Alfa-caroteno",
  aliases: ["Carotè", "Caroten", "caroteen", "каротины", "Alfa-caroteno", "Каротин", "Karoten", "Karotinok", "karoteny", "karoten", "Karotén", "Caroteno", "カロチン", "carotènes mélangés", "Carotine", "Carotene", "carotene", "Karotener", "Karotin", "Karoteenid", "Karotinas", "Karoteeni", "Καροτίνη"],
  roles: ["colour"],
  children: ["en:e160ai", "en:e160aii", "en:e160aiii", "en:e160aiv"]
}, {
  id: "en:e482",
  name: "Calcium stearoyl-2-lactylate",
  es: "Estearoil-2-lactilato de calcio",
  aliases: ["Lattilat stearojliku-2 tal-kalċju", "Calciumstearoyllactylat", "Kalcio stearoil-2-laktilatas", "Kaltsiumstearoüül-2-laktülaat", "Στεατοϋλο-2-γαλακτυλικο ασβεστιο", "Kalsiumstearoyyli-2-laktylaatti", "Kalcija stearoil-2-laktilāts", "Stearoyl-2-laktylát vápenatý", "Stearoil-2-lattilato di calcio", "Calciumstearoyl-2-lactylat", "Calcium stearoyl-2-lactylate", "Estearoíl-2-lactilato de cálcio", "Stéaroyl-2-lactylate de calcium", "Stearoilomleczan wapnia", "Калциев стераоил-2-лактилат", "Estearoil-2-lactilato de calcio", "Kalciumstearoyl-2-laktylat", "Stearoyl-2-mléčnan vápenatý", "Kalcium-sztearoil-2-laktilát", "Estearoïl-2-lactilat de calci", "Kalcijev stearoil-2-laktilat", "Stearoil-2-lactilat de calciu", "Calciumstearoyl-2-lactylaat"],
  roles: ["emulsifier", "stabiliser"],
  children: ["en:e482i", "en:e482ii"]
}, {
  id: "en:e307c",
  name: "DL-Alpha-tocopherol",
  es: "DL-α-tocoferol",
  aliases: ["dl-α-tokoferols", "DL-α-tokoferol", "dl-α-tokoferol", "DL-alfa-Tocoferolo", "DL-Alpha-tocopherol", "DL-Alpha-Tocopherol", "DL-alpha-Tocophérol", "dl-α-Tocoferol", "dl-α-Tokoferol", "DL-a-tokoferol acetat", "dl-α-Tocopherol", "DL-Alfa-tokoferoli", "dl-α-Τοκοφερόλη", "DL-alfa-tokoferool", "dl-α-tokoferolis", "dl alfa tokoferol", "DL-alfa-tocoferol", "DL-α-Tokoferol", "dl-α-токоферол", "DL-α-tocoferol", "DL-alfa-tokoferol"],
  roles: ["antioxidant"],
  children: []
}, {
  id: "en:e1103",
  name: "Invertase",
  es: "Invertasa",
  aliases: ["inbhéartáis", "Inertáza", "Invertase", "サッカラーゼ", "Invertasi", "Inwertaza", "Invertāze", "Інвертаза", "Invertazė", "Invertaas", "أنزيمة الانفرتاز", "Ιμβερταση", "Invertaasi", "Invertażi", "invertaza", "Invertază", "Invertazo", "Invertasa", "אינוורטאז", "Invertaza", "Инвертаза", "Invertas", "Invertáz", "invertase"],
  roles: ["stabiliser"],
  children: []
}, {
  id: "en:e922",
  name: "Potassium persulfate",
  es: "Persulfato de potasio",
  aliases: ["Калијум персулфат", "Peroxodisíran draselný", "Kálium-perszulfát", "Калиев персулфат", "Persulfato de potasio", "Калиум персулфат", "Kaliumpersulfat", "과황산 칼륨", "Пероксодисульфат калия", "Kalium persulfat", "Kalia persulfato", "Kali persulfat", "Kaliumpersulfaat", "Persulfat de potasiu", "Persulfat de potassi", "אשלגן פרסולפט", "Kalijev persulfat", "Kalio persulfatas", "Kaaliumpersulfaat", "بيرسلفات البوتاسيوم", "Kaliumpersulfaatti", "Υπερσουλφικό κάλιο", "โพแทสเซียมเปอร์ซัลเฟต", "Персульфат калію", "Persulfat tal-potassju", "Potassium persulfate", "Perossidisolfato di potassio", "Kaliumperoxodisulfat", "过硫酸钾", "Persulfate de potassium", "Persulfato de potássio", "過硫酸カリウム", "Nadsiarczan potasu", "पोटेशियम परसल्फेट", "Potasyum persülfat", "Kālija persulfāts"],
  roles: [],
  children: []
}, {
  id: "en:e101iii",
  name: "Riboflavin from Bacillus subtilis",
  es: "Riboflavin from Bacillus subtilis",
  aliases: ["Riboflavin from Bacillus subtilis"],
  roles: [],
  children: []
}, {
  id: "en:e163vi",
  name: "E163vi",
  es: "E163vi",
  aliases: [],
  roles: [],
  children: []
}, {
  id: "en:e514i",
  name: "Sodium sulphate",
  es: "Sulfato sódico",
  aliases: ["Sulfato sódico", "Натриев сулфат", "natriumsulfat", "Síran sodný", "Nátrium-szulfát", "Sulfat de sodi", "Natrijev sulfat", "Sulfat de sodiu", "Natriumsulfaat", "Sulfat tas-sodju", "Natriumsulfat", "Naatriumsulfaat", "Natrio sulfatas", "Θειικα αλατα του νατριου", "Natriumsulfaatti", "Nātrija sulfāts", "Solfato di sodio", "Sodium sulphate", "Sulfato de sódio", "Sulfate de sodium", "Siarczan sodu"],
  roles: [],
  children: []
}, {
  id: "en:e336i",
  name: "Monopotassium tartrate",
  es: "Tartrato monopotásico",
  aliases: ["Monokaliumtartrat", "Οξινο τρυγικο καλιο", "Monokaliumtartraatti", "Monokalio tartratas", "Kaaliumvesiniktartraat", "monokalijev tartarat", "Tartrat monopotassiku", "Vínan draselný", "Winian monopotasowy", "Monopotassium tartrate", "Tartrato monopotassico", "Tartrate monopotassique", "Tartarato monopotássico", "Monokālija tartrāts", "Tartrato monopotásico", "Монокалиев тартарат", "Vinan monodraselný", "Monokálium-tartarát", "Tartrat monopotasic", "Monokaliumtartraat", "Monokalijev tartrat"],
  roles: [],
  children: []
}, {
  id: "en:e230",
  name: "Biphenyl",
  es: "Bifenilo",
  aliases: ["ไบฟีนิล", "Біфеніл", "Biphenyl", "Bifenil", "Bifenilas", "Bifenüül", "ثنائي الفينيل، ثنائي الفينيل، (C6H5)2", "Bifenyyli", "Διφαινύλιο", "Bifenyl", "联苯，二苯，(C6H5)2", "Bifenilo", "Biphényle", "ビフェニル、ジフェニル、(C6H5)2", "Bifenile", "Bifenils", "Бифенил", "Difenyl"],
  roles: ["preservative"],
  children: []
}, {
  id: "en:e340iii",
  name: "Tripotassium phosphate",
  es: "fosfato tripotasico",
  aliases: ["Fosfat tripotasic", "تری‌پتاسیم فسفات", "Trikaliumfosfaat", "டிரைபொட்டாசியம் பாசுபேட்டு", "Trikalijev fosfat", "Trikalijum fosfat", "Трикалиев фосфат", "fosfato tripotasico", "Trikaliumfosfat", "Fosforečnan draselný", "Trikálium-foszfát", "Kalia fosfato tribaza", "Ортофосфат калия", "Fosforečnan tridraselný", "Trikaliumphosphat", "Fosfato tripotassico", "Tripotassium phosphate", "Fosfato tripotássico", "Phosphate tripotassique", "リン酸三カリウム", "Fosforan tripotasowy", "Trikālija fosfāts", "Trikalio fosfatas", "Kaaliumfosfaat", "Φωσφορικο καλιο", "Trikaliumfosfaatti", "trikalijev fosfat", "Fosfat tat-tripotassju"],
  roles: ["emulsifier", "humectant", "sequestrant", "stabiliser", "thickener"],
  children: []
}, {
  id: "en:e472f",
  name: "Mixed acetic and tartaric acid esters of mono- and diglycerides of fatty acids",
  es: "Mixed acetic and tartaric acid esters of mono- and diglycerides of fatty acids",
  aliases: ["Směsné estery mono- a diglyceridů mastných kyselin s kyselinou octovou a vinnou", "Мијешани ацетатни и тартаратни естери моно- и диглицерида масних киселина", "Blandete vin- og eddiksyreester av mono- og diglyserider av næringsfettsyrer", "Zsírsavak mono- és digliceridjeinek vegyes ecetsav- és borkősav-észterei", "Mixed acetic and tartaric acid esters of mono- and diglycerides of fatty acids", "Смесени естери на оцетната и винената киселина с моно- и диглицериди на мастни киселини", "Blandade ättik- och vinsyraestrar av mono- och diglycerider", "Ésteres mixtos acéticos e tártricos mono- e diglicéridos de ácidos graxos", "Mono- en diglyceriden van vetzuren veresterd met een mengsel van azijnzuur en wijnsteenzuur", "Amestec de esteri ai acidului acetic și ai acidului tartric cu mono- și digliceridele acizilor grași", "Miješani acetatni i tartaratni esteri mono- i diglicerida masnih kiselina", "Mešanica acetatnih in tartratnih estrov mono- in digliceridov maščobnih kislin", "Riebalų rūgščių mono- ir digliceridų acto ir vyno rūgščių mišinio esteriai", "Rasvhapete mono- ja diglütseriidide estrid äädik- ja viinhappe seguga", "Rasvahappojen mono- ja diglyseridien etikka- ja viinihappoesterit", "Μεικτοι εστερες του οξικου και τρυγικου οξεος με μονο- και διγλυκεριδια λιπαρων οξεων", "Blandede eddikesyre- og vinsyreestere af mono- og diglycerider af fedtsyrer", "Змішані естери гліцерину та винної", "Esteri tal-aċidu aċetiku u l-aċidu tartariku mħallta tal-mono- u d-digliċeridi tal-aċidi grassi", "Esteri misti acetico-tartarici di mono- e digliceridi degli acidi grassi", "Gemischte Essig- und Weinsäureester von Mono- und Diglyceriden von Speisefettsäuren", "Esters mixtes acétiques et tartriques des mono- et diglycérides d'acides gras", "Ésteres mistos acéticos e tartáricos de mono e diglicéridos de ácidos gordos", "Mono- i diglicerydy kwasów tłuszczowych estryfikowane mieszaniną kwasu octowego i winowego", "Zmesné estery mono- a diglyceridov mastných kyselín s kyselinou octovou a vínnou", "mixed asetik ve tartarik asit esters of mono- ve diglycerides of fatty asits", "Taukskābju mono- un diglicerīdu jauktie etiķskābes un vīnskābes esteri"],
  roles: [],
  children: []
}, {
  id: "en:e521",
  name: "Aluminium sodium sulphate",
  es: "Sulfato de aluminio y sodio",
  aliases: ["Sulfat de aluminiu și sodiu", "Aluminiumnatriumsulfaat", "Natrijev aluminijev sulfat", "Sulfat doble d'alumini i sodi", "Aluminiumnatriumsulfat", "Алуминиевонатриев сулфат", "Sulfato de aluminio y sodio", "Síran sodno-hlinitý", "Alumínium-nátrium-szulfát", "Síran hlinito-sodný", "Siarczan glinowo-sodowy", "Solfato di alluminio e sodio", "Aluminium sodium sulphate", "Sulfato de alumínio e sódio", "Sulfate d'aluminium sodique", "Alumīnija nātrija sulfāts", "Θειικο αργιλιονατριο", "Alumiininatriumsulfaatti", "Aliuminio natrio sulfatas", "Sulfat tal-aluminju u tas-sodju"],
  roles: [],
  children: []
}, {
  id: "en:e163b",
  name: "Delphinidin",
  es: "Delphinidina",
  aliases: ["Delphinidin", "Делфинидин", "Delphinidina", "Delphinidină", "Delphinidine", "Δελφινιδίνη", "Delfiinidiini", "Delphinidinas", "Delphinidiin", "Delphinidín", "Delfinidyna", "Delfinidīns"],
  roles: ["colour"],
  children: []
}, {
  id: "en:e962",
  name: "Salt of aspartame-acesulfame",
  es: "Sal de aspartamo-acesulfamo",
  aliases: ["Aspartam-acesulfamsalt", "Aspartaamiasesulfaamisuola", "Αλας ασπαρταμης-ακεσουλφαμης", "Aspartamo-acesulfamo druska", "Aspartaam-atsesulfaamsool", "Melħ tal-aspartam u l-aċesulfam", "Soľ aspartám-acesulfámu", "Sól aspartamu-acesulfamu", "Sal de aspartame-acessulfame", "Sel d'aspartame-acésulfame", "Sale di aspartame-acesulfame", "Salt of aspartame-acesulfame", "Aspartam-acesulfamsalz", "Aspartāma acesulfāma sāls", "Salt av aspartam och acesulfam", "Sal de aspartamo-acesulfamo", "Сол на аспартам-ацесулфам", "Aszpartám-aceszulfámsó", "Aspartam-acesulfamska so", "Sůl aspartamu-acesulfamu", "Sare de aspartam-acesulfam", "Aspartaam-acesulfaamzout", "Sol aspartam-acesulfama", "Sal d'aspartam-acesulfam"],
  roles: ["sweetener"],
  children: []
}, {
  id: "en:e1101v",
  name: "Protease from Streptomyces fradiae",
  es: "Protease from Streptomyces fradiae",
  aliases: ["Protease from Streptomyces fradiae"],
  roles: [],
  children: []
}, {
  id: "en:e166",
  name: "Sandalwood",
  es: "Sándalo",
  aliases: ["Sándalo", "Сандалово дърво", "Sandelträ", "Szantálfa", "Santalovník", "Lemn de santal", "Sandelhout", "Sandalovina", "Sandeltræ", "Sandlipuu", "Sandalmedis", "Σανδαλόξυλο", "Santelipuu", "Sandal", "Bois de santal", "Sândalo", "Sandalo", "Sandalwood", "Sandelholz", "Drzewo sandałowe", "Sandalkoks"],
  roles: [],
  children: []
}, {
  id: "en:e121",
  name: "Citrus Red 2",
  es: "Rojo cítrico 2",
  aliases: ["Ħamra ċitri 2", "Κίτρινο κόκκινο 2", "Sitruspunainen 2", "Tsitruseline punane 2", "Citrinų raudonas 2", "Citrus Rød 2", "Citrusa sarkans 2", "Lakmus", "Vermelho cítrico 2", "Rouge citrus no.2", "Citrus Red 2", "Rosso agrumi 2", "Zitrusrot 2", "Citrusová červená 2", "Citromvörös 2", "Citrusröd 2", "Цитрусово червено 2", "Rojo cítrico 2", "Citrusno rdeče 2", "Vermell cítric 2", "Citrusrood 2", "Colorant citric roşu"],
  roles: [],
  children: []
}, {
  id: "en:e463",
  name: "Hydroxypropyl cellulose",
  es: "Hidroxipropilcelulosa",
  aliases: ["Hidroxipropilcel·lulosa", "Hidroksipropil celuloza", "Hidroxipropilceluloză", "Hydroxypropylcellulose", "Hidroxipropilcelulosa", "Хидроксипропил целулоза", "Hydroxipropylcellulosa", "Hidroxi-propil-cellulóz", "Hydroxypropylcelulosa", "Hidroksipropilceluloze", "Hydroxypropylcelulóza", "Hidroxipropilcelulose", "Idrossipropilcellulosa", "Hydroxypropyl cellulose", "Hydroksypropyloceluloza", "hidroksipropil celuloza", "Ċelluloża idrossipropilika", "Hüdroksüpropüültselluloos", "Hidroksipropilceliuliozė", "Υδροξυπροπυλοκυτταρινη", "Hydroksipropyyliselluloosa"],
  roles: ["emulsifier", "stabiliser", "thickener"],
  children: []
}, {
  id: "en:e472g",
  name: "Succinylated monoglycerides",
  es: "Monoglicéridos succinilados",
  aliases: ["Gesuccinyleerde monoglyceriden", "Monogliceride succinilate", "Monoglicèrids succinilats", "Sukcinilirani monogliceridi", "Szukcinilezett monogliceridek", "Sukcinylované monoglyceridy", "Сукцинилирани моноглицериди", "Monoglicéridos succinilados", "숙신산 모노글리세리드", "Succinylerade monoglycerider", "Сукцинилированные моноглицериды", "琥珀酰化甘油单酯", "Monoglycérides succinyles", "Monoglicerídeos succinilados", "コハク酸モノグリセリド", "Succinylierte Monoglyceride", "Monogliceridi succinilati", "Succinylated monoglycerides", "Monoglicerydy sukcynylowane", "Sukcinilēti monoglicerīdi", "Suktsinüülitud monoglütseriidid", "Sukcinilinti monogliceridai", "مونوغليسريدات سكسينيلات", "Ηλεκτρικά μονογλυκερίδια", "Sukkinyloidut monoglyseridit", "Succinylerede monoglycerider"],
  roles: [],
  children: []
}, {
  id: "en:e1451",
  name: "Acetylated oxidised starch",
  es: "Almidón oxidado acetilado",
  aliases: ["Acetiliran oksidiran škrob", "Midó acetilat oxidat", "Geacetyleerd geoxideerd zetmeel", "Amidon oxidat acetilat", "Acetylovaný oxidovaný škrob", "Acetilezett oxidált keményítő", "Acetylerad oxiderad stärkelse", "Almidón oxidado acetilado", "Ацетилирано окислено нишесте", "Acetilēta oksidētā ciete", "Acetylowana skrobia utleniona", "Amido acetilato ossidato", "Acetylierte oxidierte stärke", "Acetylated oxidised starch", "Amidon oxydé acétylé", "Amido oxidado acetilado", "Lamtu ossidat aċetilat", "Asetyloitu hapetettu tärkkelys", "Ακετυλιωμενο οξειδωμενο αμυλο", "Atsetüülitud oksüdeeritud tärklis", "Acetilintas oksiduotas krakmolas", "Acetyleret oxideret stivelse"],
  roles: ["emulsifier", "stabiliser", "thickener"],
  children: []
}, {
  id: "en:e400",
  name: "Alginic acid",
 es: "Ácido algínico",
  aliases: ["Alginska kislina", "Àcid algínic", "Acid alginic", "Alginezuur", "Alginsyra", "Ácido algínico", "Алгинова киселина", "Alginsav", "Kyselina alginová", "Algīnskābe", "Kyselina algínová", "Kwas alginowy", "Acide alginique", "Alginic acid", "Acido alginico", "Alginsäure", "Aċidu alġiniku", "Alginsyre", "Algiinihappo", "Αλγινικο οξυ", "Algiinhape", "Algino rūgštis"],
  roles: ["carrier", "emulsifier", "humectant", "sequestrant", "stabiliser", "thickener"],
  children: []
}, {
  id: "en:e508",
  name: "Potassium chloride",
  es: "Cloruro de potasio",
  aliases: ["Kalijev klorid", "Clorur de potassi", "Clorură de potasiu", "Kaliumchloride", "Kaliumklorid", "Cloruro de potasio", "Калиев хлорид", "Kálium-klorid", "Chlorid draselný", "Kālija hlorīds", "kaliumklorid", "Chlorek potasu", "Cloreto de potássio", "Chlorure de potassium", "Kaliumchlorid", "Cloruro di potassio", "Potassium chloride", "Klorur tal-potassju", "Kaliumkloridi", "Χλωριουχο καλιο", "Kalio chloridas", "Kaaliumkloriid"],
  roles: ["stabiliser", "thickener", "preservative"],
  children: []
}, {
  id: "en:e491",
  name: "Sorbitan monostearate",
  es: "Monoestearato de sorbitano",
  aliases: ["Monoestearat de sorbitan", "Sorbitan monostearat", "Monostearat de sorbitan", "Sorbitaanmonostearaat", "Сорбитан моностеарат", "Monoestearato de sorbitano", "Sorbitanmonostearat", "Sorbitanmonostearát", "Szorbitan-monosztearát", "Sorbitāna monostearāts", "Monostearato di sorbitano", "Sorbitan monostearate", "Monostéarate de sorbitane", "Monostearynian sorbitolu", "Sorbitano monostearatas", "Μονοστεατικη σορβιτανη", "Sorbitaanimonostearaatti"],
  roles: ["emulsifier"],
  children: []
}, {
  id: "en:e240",
  name: "Formaldehyde",
  es: "Formaldehído",
  aliases: ["Formaldehyd", "Μεθανάλη", "Formaldehydi", "Formaldehidas", "Metanaal", "Formaldehīds", "Aldehyd mrówkowy", "Formaldéhyde", "metanal", "Formaldehyde", "Formaldeide", "Формальдегид", "Формалдехид", "Formaldehído", "Formaldehid", "Formaldehidă"],
  roles: [],
  children: []
}, {
  id: "en:e457",
  name: "Alpha-Cyclodextrine",
  es: "Alfa-ciclodextrina",
  aliases: ["Alfa-cyklodextrín", "Alfa-ciclodestrina", "Alpha-Cyclodextrin", "Alpha-Cyclodextrine", "α-环糊精", "Alfa-ciclodextrina", "アルファ-シクロデキストリン", "Alfa-cyklodekstryna", "Alfa-Siklodekstrin", "Alfa-ciklodekstrīns", "Alfa-cyclodextrin", "Alfa-ciklodekstrinas", "Alfa-tsüklodekstriin", "ألفا سيكلودكسترين", "Άλφα-κυκλοδεξτρίνη", "Alfa-syklodekstriini", "Alfa-ciklodekstrin", "Alfa-ciclodextrină", "Alfa-cyclodextrine", "Алфа-циклодекстрин", "알파-사이클로덱스트린", "Alfa-cyklodextrin", "alfa-ciklodextrin", "Alfa-ciklodekstrino", "Альфа-циклодекстрин"],
  roles: ["stabiliser", "thickener"],
  children: []
}, {
  id: "en:e904",
  name: "Shellac",
  es: "Goma laca",
  aliases: ["Goma laca", "Sơn cánh kiến", "Ŝelako", "Шеллак", "Skellakk", "Šelak", "Şellak", "ချိပ်ဆေး", "Seileaic", "Szelak", "Schellack", "Shellac", "Gomme-laque", "Goma-laca", "シェラック", "লাক্ষা", "Skjellakk", "കോലരക്ക്", "Xellak", "Shellak", "Շելլակ", "Шелак", "shellac", "เชลแล็ก", "Σελακ", "شيلاك", "שלאק", "Șelac", "شلاک", "Schellak", "లక్క", "Syelek", "Shellack", "Sellak", "Šellaka", "चपड़ा", "Gommalacca", "Sellakka", "Šelakas"],
  roles: [],
  children: []
}, {
  id: "en:e470",
  name: "Sodium/potassium/calcium and magnesium salts of fatty acids",
  es: "Sales de sodio/potasio/calcio y magnesio de ácidos grasos",
  aliases: ["Sole sodowe potasowe wapniowe i magnezowe kwasów tłuszczowych", "Natrium- Kalium- Calcium- und Magnesiumsalze von Fettsäuren", "Sali di sodio potassio calcio e magnesio degli acidi grassi", "Sodium/potassium/calcium and magnesium salts of fatty acids", "脂肪酸的钠/钾/钙和镁盐", "脂肪酸のナトリウム/カリウム/カルシウム/マグネシウム塩", "Sais de sódio potássio cálcio e magnésio de ácidos gordos", "Sels de sodium/potassium/calcium d'acides gras", "Sodné draselné vápenaté a horečnaté soli mastných kyselín", "Taukskābju nātrija kālija kalcija un magnija sāļi", "Άλατα νατρίου/καλίου/ασβεστίου και μαγνησίου λιπαρών οξέων", "Rasvahappojen suolat", "Natrio kalio kalcio ir magnio riebalų rūgščių druskos", "Rasvhapete naatrium/kaalium/kaltsium- ja magneesiumisoolad", "Natrium/kalium/calcium- og magnesiumsalte af fedtsyrer", "Yağ turşularının natrium/kalium/kalsium və maqnezium duzları", "Imħlieħ tas-sodju potassju kalċju u manjesju tal-aċidi grassi", "natrijeve kalijeve i kalcijeve soli masnih kiselina", "Vetzuurzouten Natrium- kalium- calcium- en magnesiumzouten van vetzuren", "Săruri de sodiu potasiu calciu și magneziu ale acizilor grași", "Natrium/kalium/kalsium- en magnesiumsoute van vetsure", "Natrijeve kalijeve kalcijeve in magnezijeve soli maščobnih kislin", "Sal sòdica/potàssica/càlcica/magnèsica d'àcids grassos", "Натријумове калијумове калцијумове и магнезијумове соли масних киселина", "Sodné/draselné/vápenaté a hořečnaté soli mastných kyselin", "nátrium/kálium/kalcium és magnézium sók és zsírsavak", "지방산의 나트륨/칼륨/칼슘 및 마그네슘 염", "Natrium- kalium- kalcium- och magnesiumsalter av fettsyror", "Натриумови калиумови калциумови и магнезиумови соли на масни киселини", "Натриеви/калиеви/калциеви и магнезиеви соли на мастни киселини", "Sales de sodio/potasio/calcio y magnesio de ácidos grasos", "Натриевые калиевые кальциевые и магниевые соли жирных кислот"],
  roles: ["emulsifier", "stabiliser", "thickener"],
  children: ["en:e470i", "en:e470ii", "en:e470iii"]
}, {
  id: "en:e219",
  name: "Sodium methyl p-hydroxybenzoate",
  es: "P-hidroxibenzoato sódico de metilo",
  aliases: ["Methyl-p-hydroxybenzoát sodná sůl", "Nátrium-metil-p-hidroxi-benzoát", "P-hydroxibensoesyrametylesterns natriumsalt", "P-hidroxibenzoato sódico de metilo", "Натриев метил р-хидроксибензоат", "Methyl-p-hydroxybenzoaat natriumzout", "Sarea de sodiu a p-hidroxibenzoatului de metil", "Natrijev metil parahidroksi benzoat", "P-υδροξυβενζοϊκος μεθυλεστερας αλας με νατριο", "Natriummetyyli-p-hydroksibentsoaatti", "Natrio metilo p–hidroksibenzoatas", "Naatriummetüül-p-hüdroksübensoaat", "Methyl-p-hydroxybenzoat natriumsalt", "Metil p-idrossibenżoat tas-sodju", "Sól sodowa p-hydroksybenzoesanu metylu", "Phb-methylester-natriumsalz (natriummethyl-p-hydroxybenzoat)", "Metil-p-idrossibenzoato di sodio", "Sodium methyl p-hydroxybenzoate", "Dérivé sodique du 4-hydroxybenzoate de méthyle", "Sal sódico do p-hidroxibenzoato de metilo", "Nátrium-metyl-p-hydroxybenzoát", "Nātrija metil-p-hidroksibenzoāts"],
  roles: [],
  children: []
}, {
  id: "en:e578",
  name: "calcium gluconate",
  es: "Gluconato cálcico",
  aliases: ["kalcija glikonāts", "glukónan vápenatý", "Glukonian wapnia", "calsiwm gluconad", "gluconato di calcio", "Calciumgluconat", "calcium gluconate", "gluconato de cálcio", "葡萄糖酸钙", "グルコン酸カルシウム", "Gluconate de calcium", "glukonat tal-kalċju", "Kalsium qlükonat", "Глюконат кальцію", "Kalsiumglukonaatti", "γλυκονικό ασβέστιο", "kalcio gliukonatas", "kaltsiumglükonaat", "غلوكونات الكالسيوم", "கால்சியம் குளுக்கோனேட்டு", "Kalcijum glukonat", "kalcijev glukonat", "Gluconat de calci", "gluconat de calciu", "Kalsiumglukonaat", "କ୍ୟାଲସିଅମ ଗ୍ଲୁକୋନେଟ", "کلسیم گلوکونات", "canxi gluconat", "calciumgluconaat", "kalcia glukonato", "Глюконат кальция", "kalciumglukonat", "Gluconato cálcico", "Калциев глюконат", "Glukonát vápenatý", "kalcium-glükonát", "kalsiumglukonat"],
  roles: ["sequestrant"],
  children: []
}, {
  id: "en:e161",
  name: "Xanthophylls",
  es: "Xantofilos",
  aliases: ["Xanthophylle", "Xantofille", "Xanthophylls", "Xantofilos", "Xanthophylles", "Ksantofile", "Xantofyly", "Ksantofili", "Ksantofüllid", "Ksantofilai", "Ξανθοφύλλες", "Ksantofyllit", "Xanthophyller", "Xantofilli", "Xanthofylen", "Xantofile", "Xantofil", "Xantofillek", "Ксантофили", "Xantofyller"],
  roles: [],
  children: []
}, {
  id: "en:e629",
  name: "Calcium guanylate",
  es: "Guanilato cálcico",
  aliases: ["Calciumguanylaat", "Guanilat de calciu", "Guanilat de calci", "Kalcijev gvanilat", "Kalcium-guanilát", "Guanylan vápenatý", "Калциев гуанилат", "Guanilato cálcico", "Kalciumguanylat", "Guanylate de calcium", "Guanilato de cálcio", "Guanilato di calcio", "Calciumguanylat", "Calcium guanylate", "Guanylan wapnia", "Kalcija guanilāts", "Kalcio guanilatas", "Kaltsiumguanülaat", "Γουανιλικο ασβεστιο", "Kalsiumguanylaatti", "Gwanilat tal-kalċju"],
  roles: [],
  children: []
}, {
  id: "en:e526",
  name: "Calcium hydroxide",
  es: "Hidróxido de calcio",
  aliases: ["Υδροξειδιο του ασβεστιου", "Kalsiumhydroksidi", "Kaltsiumhüdroksiid", "Kalcio hidroksidas", "Calciumhydroxid", "Idrossidu tal-kalċju", "Wodorotlenek wapnia", "Hidróxido de cálcio", "Hydroxyde de calcium", "Idrossido di calcio", "Calcium hydroxide", "Hydroxid vápenatý", "Kalcija hidroksīds", "Kalcium-hidroxid", "Kalciumhydroxid", "Калциев хидроксид", "Hidróxido de calcio", "Гидроксид кальция", "Calciumhydroxide", "Hidroxid de calciu", "Kalcijev hidroksid", "Hidròxid de calci"],
  roles: [],
  children: []
}, {
  id: "en:e999ii",
  name: "Quillaia extract type 2",
  es: "Quillaia extract type 2",
  aliases: ["Quillaia extract type 2"],
  roles: [],
  children: []
}, {
  id: "en:e500i",
  name: "Sodium carbonate",
  es: "Carbonato sódico",
  aliases: ["Natriumkarbonat", "সোডিয়াম কার্বনেট", "Karbonat tas-sodju", "Natrijev karbonat", "സോഡിയം കാർബണേറ്റ്", "โซเดียมคาร์บอเนต", "Карбонат натрію", "natriumkarbonat", "Naatriumkarbonaat", "كربونات الصوديوم", "Ανθρακικα αλατα του νατριου", "Sodyum karbonat", "Uhličitan sodný", "Carbonato de sódio", "炭酸ナトリウム", "Carbonate de sodium", "Natriumcarbonat", "Sodium carbonate", "Węglan sodu", "natria karbonato", "карбонат натрия", "Натриев карбонат", "탄산 나트륨", "carbonat de sodi", "Natriy karbonat", "Natri carbonat", "Natrio karbonatas", "Sooda", "Nātrija karbonāts", "क्षारातु प्रांगारीय", "Carbonato di sodio", "Natrium karbonat", "సోడియమ్ కార్బొనేట్", "Carbonat de sòdi", "Karbonati i natriumit", "Carbonato sódico", "натриум карбонат", "Nátrium-karbonát", "натријум карбонат", "Кальцирланған сода", "Natrijum karbonat", "נתרן פחמתי", "சோடியம் காபனேற்று", "Natrij-karbonat", "سدیم کربنات", "Carbonat de sodiu", "Carboanaayt sodjum", "صودا دردار", "Natriumcarbonaat"],
  roles: ["stabiliser", "thickener"],
  children: []
}, {
  id: "en:e331i",
  name: "Monosodium citrate",
  es: "Citrato monosódico",
  aliases: ["Mononatriumcitrat", "Citrato monosódico", "Мононатриев цитрат", "Mononátrium-citrát", "Citronan monosodný", "Mononatrijev citrat", "Citrat monosòdic", "Citrat monosodic", "Mononatriumcitraat", "Ċitrat monosodiku", "Mononatriumsitraatti", "Δισοξινο κιτρικο νατριο", "Mononatrio citratas", "Naatriumdivesiniktsitraat", "Mononātrija citrāts", "Cytrynian monosodowy", "Citrato monossódico", "Citrate monosodique", "Citrato monosodico", "Monosodium citrate"],
  roles: ["emulsifier", "sequestrant", "stabiliser"],
  children: []
}, {
  id: "en:e939",
  name: "Helium",
  es: "Helio",
  aliases: ["Hélium", "Elio", "Helium", "Hélio", "Hēlijs", "Ηλιο", "Heelium", "Helis", "Elju", "Heliu", "Helij", "Heli", "Helio", "Хелий", "Гелий"],
  roles: [],
  children: []
}, {
  id: "en:e343",
  name: "Magnesium phosphates",
  es: "Fosfatos de magnesio",
  aliases: ["Fosfati di magnesio", "Magnesium phosphates", "Magnesiumphosphate", "Fosfatos de magnésio", "Phosphates de magnésium", "Fosforany magnezu", "Fosfáty hořečnaté", "Magnija fosfāti", "Magneesiumfosfaadid", "Magnio fosfatai", "Φωσφορικά μαγνησίου", "Magnesiumfosfaatit", "Magnesiumfosfater", "magnezijevi fosfati", "Fosfat tal-magni", "Magnesiumfosfaten", "Fosfați de magneziu", "Fosfat de magnesi", "Magnezijevi fosfati", "Magnézium-foszfátok", "Магнезиеви фосфати", "Fosfatos de magnesio"],
  roles: ["stabiliser", "thickener"],
  children: ["en:e343i", "en:e343ii", "en:e343iii"]
}, {
  id: "en:e642",
  name: "E642",
  es: "Lisina hidrocloruro",
  aliases: ["Idroklorid tal-lisina", "ไลซีนไฮโดรคลอไรด์", "Lizin hidroxlorid", "Lysinhydrochlorid", "Лізину гідрохлорид", "Lüsiinvesinikkloriid", "Lizino hidrochloridas", "هيدروكلوريد ليسين", "Lysiinihydrokloridi", "Υδροχλωρική λυσίνη", "Lizin hidroklorür", "Lizīna hidrohlorīds", "Hydrochlorid lyzínu", "Lisina cloridrato", "Cloridrato de lisina", "赖氨酸盐酸盐", "Hydrochlorure de lysine", "塩酸リシン", "Chlorowodorek lizyny", "Lisin hidroklorida", "Lizina hidroclorido", "Лизина гидрохлорид", "Lisina hidrocloruro", "Лизин хидрохлорид", "Lizin hidroklorid", "Lysinhydroklorid", "리신 염산염", "Hydrochlorid lysinu", "Lizin-hidroklorid", "Lisina hidroclorur", "Clorhidrat de lizină", "لیزین هیدروکلراید", "Lysine hydrochloride", "Lysinehydrochloride"],
  roles: [],
  children: []
}, {
  id: "en:e161hii",
  name: "E161hii", 
  es: "E161hii",
  aliases: [],
  roles: [],
  children: []
}, {
  id: "en:e529",
  name: "Calcium oxide",
  es: "Óxido de calcio",
  aliases: ["Kalsiumoksid", "Q'atawi", "ক্যালসিয়াম অক্সাইড", "Ossidu tal-kalċju", "Živo vapno", "Calso", "നീറ്റുകക്ക", "แคลเซียมออกไซด์", "Calcium oxide", "Կալցիումի օքսիդ", "Оксид кальцію", "Calciumoxid", "кәлси әчемәсе", "Kaltsiumoksiid", "أكسيد الكالسيوم", "Οξειδιο του ασβεστιου", "Кальций оксиди", "ထုံး", "kalsiyum oksit", "Oxid vápenatý", "酸化カルシウム", "Óxido de cálcio", "Oxyde de calcium", "Tlenek wapnia", "kalcia oksido", "Калциев оксид", "Òxid de calci", "Ongebluste kalk", "Ohak", "Canxi ôxít", "Kalcio oksidas", "Kalsiumoksidi", "Kalcija oksīds", "Ossido di calcio", "Kapur tohor", "Calç", "Сөндірілмеген әк", "Óxido de calcio", "Kalciumoxid", "Kalcium-oxid", "калцијум оксид", "Kalcijev oksid", "Kalcijum oksid", "கால்சியம் ஆக்சைடு", "Kalcij-oksid", "کلسیم اکسید", "Oxid de calciu", "Kaltzio oxido", "Calciumoxide"],
  roles: [],
  children: []
}, {
  id: "en:e475",
  name: "Polyglycerol esters of fatty acids",
  es: "Ésteres poliglicéricos de ácidos grasos",
  aliases: ["Полиглицериновые эфиры жирных кислот", "Полиглицеролови естери на мастни киселини", "Ésteres poliglicéricos de ácidos grasos", "Polyglycerolestrar av fettsyror", "Estery polyglycerolu s mastnými kyselinami", "Zsírsavak poliglicerin-észterei", "Èster poliglicèrid d'àcids grassos", "Poliglicerolni estri maščobnih kislin", "Esteri poliglicerici ai acizilor grași", "Polyglycerolesters van vetzuren", "Esteri tal-poligliċerol tal-aċidi grassi", "poliglicerolni esteri masnih kiselina", "Polyglycerolestere af fedtsyrer", "Riebalų rūgščių poliglicerolio esteriai", "Rasvhapete polüglütseroolestrid", "Rasvahappojen polyglyseroliesterit", "Πολυγλυκεριδια λιπαρων οξεων", "Taukskābju poliglicerīna esteri", "eistir pholaigliocróil d'aigéid shailleacha", "Esteri poliglicerici degli acidi grassi", "Polyglycerinester von Speisefettsäuren", "Polyglycerol esters of fatty acids", "Esters polyglycériques d'acides gras", "Ésteres de poliglicerol de ácidos gordos", "Estry kwasów tłuszczowych i poliglicerolu"],
  roles: ["emulsifier", "stabiliser"],
  children: []
}, {
  id: "en:e237",
  name: "Sodium formiate",
  es: "Formiato de sodio",
  aliases: ["Natrium format", "Natria formiato", "Формиат натрия", "Натриум формиат", "Natriumformiat", "포름산 나트륨", "Натриев формиат", "Formiato de sodio", "Format natriumi", "Натријум формат", "Mravenčan sodný", "Nátrium-formiát", "Natrijev formiat", "פורמט נתרן", "Formiat de sodi", "Formiat de sodiu", "سدیم فرمت", "Natri format", "Natriumformiaat", "Formjat tas-sodju", "Natrijev format", "Форміат натрію", "โซเดียมฟอร์เมต", "Φορμικό νάτριο", "Natriumformiaatti", "Natrio formiatas", "Naatriumformiaat", "فورمات الصوديوم", "Sodyum format", "Nātrija formiāts", "Mravčan sodný", "Mrówczan sodu", "Formiato di sodio", "Sodium formiate", "Formato de sódio", "Formiate de sodium", "ギ酸ナトリウム"],
  roles: [],
  children: []
}, {
  id: "en:e150b",
  name: "Caustic sulphite caramel",
  es: "Caramelo de sulfito cáustico",
  aliases: ["Caramel de sulfit caustic", "Alkali-sulfietkaramel", "Alkalni sulfitni karamel", "Карамел основен сулфит", "Caramelo de sulfito cáustico", "kaustiksulfitprocessen", "Kaustický sulfitový karamel", "Szulfitos karamell", "Caramello solfito-caustico", "Caustic sulphite caramel", "Sulfitlaugen-Zuckerkulör", "Caramelo sulfítico cáustico", "Caramel de sulfite caustique", "Karmel siarczynowy", "Sulfīta karamele", "Kaustisk sulfiteret karamel", "Šarminė sulfitinė karamelė", "Leeliseline sulfitkaramell", "Emäksinen sulfiittisokerikulööri", "Καυστικο θειωδες καραμελοχρωμα", "Kaustisk sulfitert sukkerkulør", "Karamella tas-sulfit kawstiku"],
  roles: ["colour"],
  children: []
}, {
  id: "en:e626",
  name: "Guanylic acid",
  es: "Ácido guanílico",
  aliases: ["Acid guanilic", "Guanylzuur", "Àcid guanílic", "Gvanilna kislina", "Гуанилова киселина", "Ácido guanílico", "Guanylsyra", "Guanilsav", "Guanylic acid", "Acide guanylique", "Guanylsäure", "Acido guanilico", "Kwas guanylowy", "Guanilskābe", "Guanylsyre", "Guanüülhape", "Guanilo rūgštis", "Guanyylihappo", "Γουανιλικο οξυ", "Aċidu gwaniliku"],
  roles: [],
  children: []
}, {
  id: "en:e405",
  name: "Propane-1‚2-diol alginate",
  es: "Alginato de propilenglicol",
  aliases: ["Alginato de propilenglicol", "Пропан-1‚2-диол алгинат", "1‚2-propylenglykolalginat", "Propán-1‚2-diol-alginát", "Propan-1‚2-diol-alginát", "Alginat d'1‚2-propà-diol", "Propan-1‚2-diol alginat", "Alginat de 1‚2-propandiol", "Propyleenglycolalginaat", "Alġinat tal-propan-1‚2-diol", "Propylenglycolalginat", "1‚2-propaandioolalginaat", "1‚2-propandiolio alginatas", "Αλγινικη προπανοδιολη-1‚2", "Propyleeniglykolialginaatti", "Propān-1‚2-diola algināts", "Propán-1‚2-diol alginát", "Alginato de propano-1‚2-diol", "Alginate de propane-1", "アルギン酸エステル", "Alginato di propan-1‚2-diolo", "Propane-1‚2-diol alginate", "Alginian glikolu propylenowego"],
  roles: ["carrier", "emulsifier", "stabiliser", "thickener"],
  children: []
}, {
  id: "en:e542",
  name: "Bone phosphate",
  es: "Fosfato de hueso",
  aliases: ["Sümük fosfatı", "Luun fosfaatti", "Kaulų fosfatas", "Fosfato osseo", "Kaulu fosfāts", "अस्थि फास्फेट", "Коскен фосфат", "Benfosfat", "Fosfat kockash", "Fosfato de hueso", "Csontfoszfát", "Коштани фосфат", "Tulang fosfat", "Fosfato óseo", "فسفات استخوان", "Fosfat osos", "Beendermeel", "Hezur fosfatoa", "פוספט עצם", "Kostni fosfat", "எலும்பு பாஸ்பேட்", "Кiстковий фосфат", "Knoglefosfat", "Οστικό φωσφορικό άλας", "Luufosfaat", "فوسفات العظام", "Koštani fosfat", "Fosfat tal-għadam", "Kostný fosfát", "Fosforan kostny", "Fosfato de osso", "骨磷酸盐", "Phosphate d'os comestible", "骨リン酸", "Bone phosphate", "Knochenphosphat", "Kemik fosfat", "뼈 인산염", "Костен фосфат", "Kostní fosfát", "Osta fosfato", "Костный фосфат", "Fosfat d'os"],
  roles: ["emulsifier", "humectant"],
  children: []
}, {
  id: "en:e342ii",
  name: "Diammonium hydrogen phosphate",
  es: "Diammonium hydrogen phosphate",
  aliases: ["Diammonium hydrogen phosphate"],
  roles: [],
  children: []
}, {
  id: "en:e1401",
  name: "Acid-treated modified starch",
  es: "Almidón modificado tratado con ácido",
  aliases: ["Модифікований крохмаль", "Syrebehandlet modificeret stivelse", "Turşu ilə işlənmiş modifikasiya olunmuş nişasta", "แป้งดัดแปรที่ผ่านการบำบัดด้วยกรด", "Τροποποιημένο άμυλο επεξεργασμένο με οξύ", "Happokäsitelty tärkkelys", "Rūgštimi apdorotas modifikuotas krakmolas", "Happe abil töödeldud modifitseeritud tärklis", "نشا معالج بالحمض", "Lamtu modifikat ittrattat bl-aċidu", "Škrob modifikovaný kyselinou", "Skrobia modyfikowana kwasami", "酸处理改性淀粉", "Amido modificado tratado com ácido", "酸処理変性澱粉", "Amidon traité aux acides", "säurebehandelte Stärke", "Amido modificato trattato con acido", "Acid-treated modified starch", "Ar skābi apstrādāta modificēta ciete", "Asitle işlenmiş modifiye nişasta", "Syra-behandlad modifierad stärkelse", "산처리 변성 전분", "Kиселинно обработено модифицирано нишесте", "Almidón modificado tratado con ácido", "Savval kezelt módosított keményítő", "Škrob upravený kyselinou", "обработанный кислотой", "Amidon modificat tratat cu acid", "Zuur-behandeld zetmeel", "S kislino obdelan modificiran škrob", "Midó modificat tractat amb àcid"],
  roles: ["emulsifier", "stabiliser", "thickener"],
  children: []
}, {
  id: "en:e318",
  name: "Calcium erythorbin",
  es: "Eritorbinato de calcio",
  aliases: ["Izosorbinian wapnia", "Calcium erythorbin", "Eritorbato di calcio", "Calciumerythorbat", "Isoascorbate de calcium", "Eritorbato de cálcio", "Vápenatý erytorbát", "Kalcija eritorbāts", "Ερυθορβικό ασβέστιο", "Kalsiumerytorbaatti", "Kaltsiumerütorbaat", "Kalcio eritorbatas", "Eritorbat tal-kalċju", "Calciumerythorbaat", "Isoascorbat de calciu", "Kalcijev eritorbat", "Vápenatý erythorbin", "Kalcium-eritorbin", "Calciumerytorbat", "Калциев ериторбин", "Eritorbinato de calcio"],
  roles: [],
  children: []
}, {
  id: "en:e132",
  name: "Indigotine",
  es: "Indigotina",
  aliases: ["Indigotiin", "Indigotinas", "Ινδικοτινη", "Indigotiini", "Indigotin (indigocarmin)", "Indigotina", "Indigotine", "Indigotin (Indigokarmin)", "Indigotine carmin d'indigo", "Indygotyna", "Indigotín", "Indigotīns", "Indigotin", "Индиготин", "Indigotină"],
  roles: ["colour"],
  children: []
}, {
  id: "en:e1208",
  name: "Polyvinylpyrrolidone-vinyl acetate copolymer",
  es: "Polyvinylpyrrolidone-vinyl acetate copolymer",
  aliases: ["Polyvinylpyrrolidone-vinyl acetate copolymer", "Copolymère d'acétate de vinyle et de polyvinylpyrrolidone"],
  roles: [],
  children: []
}, {
  id: "en:e1413",
  name: "Phosphated distarch phosphate",
  es: "Fosfato de dialmidón fosfatado",
  aliases: ["Fosfaterat distärkelsefosfat", "Фосфориран динишестен фосфат", "Fosfato de dialmidón fosfatado", "Fosforečnan zesíťovaného fosforečnanu škrobu", "Foszfatált dikeményítő-foszfát", "Fosforiliran diškrobni fosfat", "Fosfat de dimidó fosfatat", "Fosfat de diamidon fosfatat", "Gefosfateerd dizetmeelfosfaat", "Fosfat diammidiku ffosfat", "Phosphateret distivelsephosphat", "Fosfatoitu ditärkkelysfosfaatti", "Φωσφορυλιωμενο οξινο φωσφορικο αμυλο", "Fosfatuotas dikrakmolo fosfatas", "Fosfaaditud ditärklisfosfaat", "Fosfatētais dicietes fosfāts", "Fosfátový diškrobfosfát", "Fosforanowany fosforan diskrobiowy", "Fosfato di diamido fosfatato", "Phosphatiertes distärkephosphat", "Phosphated distarch phosphate", "Phosphate de diamidon phosphaté", "Fosfato de diamido fosfatado"],
  roles: ["emulsifier", "stabiliser", "thickener"],
  children: []
}, {
  id: "en:e381",
  name: "ferric ammonium citrate",
  es: "citrato férrico de amonio",
  aliases: ["Железен амониев цитрат", "citrato férrico de amonio", "ferriammoniumcitrat", "vas-III-ammónium-citrát", "citrát železito-amonný", "železov amonijev citrat", "citrat feric de amoniu", "ijzer-III-ammoniumcitraat", "ċitrat ferriku tal-ammonju", "raud-III-ammooniumtsitraat", "geležies amonio citratas", "Ammoniumrautasitraatti", "εναμμώνιος κιτρικός σίδηρος", "dzelzs amonija citrāts", "citran amónno-železitý", "citrate ferrique d'ammonium", "citrato férrico de amónio", "ferric ammonium citrate", "Ammoniumeisen-III-citrat", "citrato ferrico di ammonio", "cytrynian amonu i żelaza-III"],
  roles: [],
  children: []
}, {
  id: "en:e322i",
  name: "Lecithin",
  es: "Lecitina",
  aliases: ["Lesitin", "Lecitino", "Лецитин", "Lecitina", "Lecitin", "lecitin", "lecitina", "לציטין", "Lecitină", "Lesitín", "لسیتین", "Letsinlar", "Lezitina", "Lecithine", "Lecithin", "Lésitin", "เลซิทิน", "Լեցիտիններ", "Letsitiin", "λεκιθίνη", "Lesitiini", "レシチン", "Lécithine", "lecytyna"],
  roles: ["antioxidant", "emulsifier"],
  children: []
}, {
  id: "en:e917",
  name: "potassium iodate",
  es: "yodato de potasio",
  aliases: ["jodat tal-potassju", "kalijev jodat", "Kaliumjodaatti", "ιωδικό κάλιο", "kalio jodatas", "kaaliumjodaat", "يودات البوتاسيوم", "Йодат калію", "Potasyum iyodat", "kālija jodāts", "Jodan potasu", "Iodato di potassio", "Kaliumiodat", "potassium iodate", "Iodate de potassium", "Iodato de potássio", "ヨウ素酸カリウム", "jodičnan draselný", "иодат калия", "Kalium iodat", "kalia jodato", "Kalijum jodat", "Kálium-jodát", "kaliumjodat", "yodato de potasio", "Калиев йодат", "பொட்டாசியம் அயோடேட்டு|", "iodat de potassi", "Kali iodat", "Kaliumjodaat", "Iodat de potasiu", "پتاسیم یدات"],
  roles: [],
  children: []
}, {
  id: "en:e216",
  name: "Propyl para-hydroxybenzoate",
  es: "Propil parahidroxibenzoato",
  aliases: ["Propylparaben", "Propil para-hidroksibenzoat", "Пропіл пара-гідроксибензоат", "โพรพิล พารา-ไฮดรอกซีเบนโซเอต", "Προπυλ παραϋδροξυβενζοϊκός", "Propyyli-p-hydroksibentsoaatti", "Propilparahidroksibenzoatas", "Propüülparabeen", "بروبيل بارا هيدروكسي بنزوات", "Propilparahidroksibenzoāts", "Paraben propylu", "4-Hydroxybenzoesäurepropylester", "Propilparaben", "Propyl para-hydroxybenzoate", "羟苯丙酯", "プロピルパラヒドロキシベンゾアート", "Propilparabeno", "4-hydroxybenzoate de propyle", "Пропил пара-гидроксибензоат", "Пропил пара-хидроксибензоат", "프로필 파라-하이드록시벤조에이트", "Propil parahidroxibenzoato", "Propil-para-hidroxibenzoát", "פרופיל пара-הידרוקסיבנזואט", "Propil parahidroksibenzoat", "Propil parahidroxibenzoat", "Propil para-hidroxibenzoat", "Propyl-p-hydroxybenzoaat"],
  roles: [],
  children: []
}, {
  id: "en:e941",
  name: "Nitrogen",
  es: "Nitrógeno",
  aliases: ["Azoto", "Azoti", "Naitridean", "नाइट्रोजन", "Nitrogen", "Azotas", "Typpi", "hauota", "Azot", "نیتروژن", "აზოტი", "Neetragien", "חנקן", "dušik", "nitro", "নাইট্ৰ'জেন", "азот", "Азот", "Kväve", "Azotu", "ਨਾਈਟ੍ਰੋਜਨ", "941 - 氮", "Azòt", "Stickstoff", "નત્રલવાયુ", "ಸಾರಜನಕ", "نيتروجين", "Lämmastik", "Αζωτο", "Nitroġenu", "Nitrogén", "നൈട്രജൻ", "Stikstof", "nitrogen", "អាសូត", "nitrogenium", "Køvievni", "nitrogeno", "ئازوت", "Nitrojiin", "Slāpeklis", "941 - אזאט", "941 - نطرساز", "Nitrojeni", "Dušik", "நைதரசன்", "Nîtrojen", "Nitrógeno", "nitróxeno", "నత్రజని", "azòt", "नत्रवायू", "Azote", "Nítrigin", "Dusík", "ናይትሮጅን", "နိုက်ထရိုဂျင်", "ไนโตรเจน", "Nitroheno", "नैट्रोजन्", "ազոտ", "Nitrochén", "Qullpachaq", "নাইট্রোজেন", "ཟེ་རླུང་།", "941 - nitơ", "නයිට්‍රජන්", "stikstof", "ଯବକ୍ଷାରଜାନ", "köfnunarefni", "941 - Azot", "Stéckstoff", "941 - Nítrójínì"],
  roles: ["propellent-gas"],
  children: ["en:e931"]
}, {
  id: "en:e931",
  name: "E931",
  es: "E931",
  aliases: [],
  roles: [],
  children: []
}, {
  id: "en:e339i",
  name: "Monosodium phosphate",
  es: "Fosfato monosódico",
  aliases: ["Mononatriumphosphat", "Naatriumdivesinikfosfaat", "Mononatrio fosfatas", "مونوسودیوم فوسفات", "Δισοξινο φωσφορικο νατριο", "Mononatriumfosfaatti", "Fosfat monosodiku", "Fosforečnan monosodný", "磷酸二氢钠", "Phosphate monosodique", "Fosfato monossódico", "リン酸二水素ナトリウム", "Fosfato monosodico", "Monosodium phosphate", "Fosforan monosodowy", "Mononātrija fosfāts", "Мононатриев фосфат", "Fosfato monosódico", "Mononatriumfosfat", "Mononátrium-foszfát", "Dihydrogenfosforečnan sodný", "Mononatrijum fosfat", "Natria bifosfato", "Дигидрофосфат натрия", "Fosfat monosodic", "Mononatriumfosfaat", "Natri đihiđrophotphat", "Mononatrijev fosfat"],
  roles: ["emulsifier", "humectant", "preservative", "sequestrant", "stabiliser", "thickener"],
  children: []
}, {
  id: "en:e1001iii",
  name: "E1001iii",
  es: "E1001iii",
  aliases: [],
  roles: [],
  children: []
}, {
  id: "en:e553a",
  name: "synthetic magnesium silicates",
  es: "silicatos de magnesio sintéticos",
  aliases: ["silikate sintetike të magnezit", "silicatos de magnesio sintéticos", "синтетични магнезиеви силикати", "syntetiska magnesiumsilikater", "합성 마그네슘 규산염", "синтетички магнезиум силикати", "szintetikus magnézium-szilikátok", "syntetické křemičitany hořečnaté", "синтетички магнезијум силикати", "sintezaj magneziaj silikatoj", "синтетические силикаты магния", "silicați de magneziu sintetici", "synthetische magnesiumsilicaten", "silicats de magnesi sintètics", "sintetični magnezijevi silikati", "синтетичні силікати магнію", "syntetiske magnesiumsilikater", "sintetik maqnezium silikatlar", "sünteetilised magneesiumsilikaadid", "sintetiniai magnio silikatai", "مجموعة سيليكات المغنيسيوم الاصطناعية", "συνθετικά πυριτικά άλατα μαγνησίου", "synteettiset magnesiumsilikaatit", "silikati tal-manjeżju sintetiċi", "sintetički magnezijevi silikati", "syntetické kremičitany horečnaté", "silicatos de magnésio sintéticos", "合成硅酸镁族", "silicates de magnésium synthétiques", "合成ケイ酸マグネシウム族", "silicati di magnesio sintetici", "synthetische Magnesiumsilikate", "synthetic magnesium silicates", "syntetyczne krzemiany magnezu", "sintētiskie magnija silikāti", "sentetik magnezyum silikatlar"],
  roles: ["thickener"],
  children: ["en:e553ai", "en:e553aii"]
}, {
  id: "en:e621",
  name: "Monosodium glutamate",
  es: "Glutamato monosódico",
  aliases: ["Mononatriumglutamaatti", "Mononatrio glutamatas", "मोनोसोडियम ग्लूटामेट", "Mononātrija glutamāts", "Glutammato di monosodio", "మోనో సోడియం గ్లూటామేట్‌", "Mononatrium glutamat", "Monosodium glutamat", "Mononatrijum glutamat", "Mononátrium-glutamát", "natriumglutamat", "Mononatriumglutamat", "Glutamato monosódico", "மோனோ சோடியம் குளூட்டாமேட்", "Mononatrijev glutamat", "מונוסודיום גלוטמט", "Mononatriumglutamaat", "چینی نمک", "Глутамат натрыю", "Glutamat monosodic", "مونوسدیم گلوتامات", "അജിനോമോട്ടോ", "Glutamat monosodiku", "mononatrijev glutaminat", "Natriumglutamat", "Οξινο γλουταμινικο νατριο", "Naatriumvesinikglutamaat", "غلوتامات أحادي الصوديوم", "Глутамат натрію", "โมโนโซเดียมกลูตาเมต", "Betsin", "Monosodyum glutamat", "အချိုမှုန့်", "Glutaminian monosodowy", "Monosodium glutamate", "Glutamato monossódico", "Glutamate monosodique", "मोनोसोडियम ग्लुटामेट", "L-グルタミン酸ナトリウム", "Glutaman sodný", "Glútamáit aonsóidiam", "Глутамат натрия", "ununatria L-glutamato", "글루탐산 나트륨", "Мононатриев глутамат", "Glutamat de monosodi", "mononatrijum glutamat", "මොනොසෝඩියම් ග්ලූටමේට්", "bột ngọt", "E 621"],
  roles: ["flavour-enhancer"],
  children: []
}, {
  id: "en:e550i",
  name: "E550i",
  es: "E550i",
  aliases: [],
  roles: [],
  children: [] 
}, {
  id: "en:e915",
  name: "Esters of Colophane",
  es: "Ésteres de colofonia",
  aliases: ["Estery kolofónu", "Estry kolofonii", "Ésteres de colofónia", "Esters de colophane", "Esters of Colophane", "Esteri di colofonia", "Kolophanester", "Kolofonija esteri", "Estere af colophane", "Εστέρες της κολοφωνίας", "Kolofaanin esterit", "Kolofooni estrid", "Kolofonio esteriai", "Estri tal-kolofonja", "Esterii colofoniului", "Esters van colofonium", "Esteri kolofona", "Estrar av kolofonium", "Ésteres de colofonia", "Естери на колофонията", "Kolofán-észter", "Estery kolofonu"],
  roles: [],
  children: []
}, {
  id: "en:e946",
  name: "octafluorocyclobutane",
  es: "octafluorociclobutano",
  aliases: ["oktaflorosiklobutan", "oktafluorciklobutāns", "oktafluórcyklobután", "oktafluorocyklobutan", "Octafluorcyclobutan", "octafluorociclobutano", "octafluorocyclobutane", "八氟环丁烷", "Octafluorocyclobutane", "オクタフルオロシクロブタン", "oktaflorotsiklobutan", "octafluorcyclobutan", "октафлуороциклобутан", "οκταφθοροκυκλοβουτάνιο", "Oktafluorisyklobutaani", "oktafluorciklobutanas", "oktafluorotsüklobutaan", "أوكتافلوروسيكلوبوتان", "oktafluorociklobutan", "octafluorociclobutà", "octafluorociclo-butan", "oktafluorosiklobutaan", "Octafluorcyclobutaan", "oktafluorociklobutano", "oktafluorcyklobutan", "옥타플루오로시클로부탄", "oktafluor-ciklobután"],
  roles: [],
  children: []
}, {
  id: "en:e142",
  name: "Green s",
  es: "Verde s",
  aliases: ["Zöld S", "Zeleň s", "Zeleno S", "Verde s", "Зелено s", "Grön s", "Зелёный S", "Groen s", "سبز اس", "Verd àcid brillant BS", "Zeleno s", "ירוק S", "Žaliasis s", "Roheline s", "Vihreä s", "Πρασινο s", "Зелений S", "Green s", "Aħdar s", "Vert acide brillant BS", "Grün s", "Zieleń s", "uaine aigéadach lonrach BS", "Zelená s", "Zaļais s"],
  roles: [],
  children: []
}, {
  id: "en:e952iv",
  name: "E952iv",
  es: "E952iv",
  aliases: [],
  roles: [],
  children: []
}, {
  id: "en:e304i",
  name: "Ascorbyl palmitate",
  es: "Palmitato ascorbilo",
  aliases: ["Palmitat askorbili", "Παλμιτικο ασκορβυλιο", "Askorbyylipalmitaatti", "Askorbilpalmitatas", "Askorbüülpalmitaat", "بالميتات الأسكوربيل", "Ascorbylpalmitat", "Askorbilpalmitāts", "Palmitynian askorbylu", "パルミチン酸アスコルビル", "Palmitato de ascorbilo", "Palmitate d'ascorbyle", "Palmitato di ascorbile", "Ascorbyl palmitate", "Askorbyl-palmitan", "Aszkorbil-palmitát", "Askorbylpalmitát", "Askorbil palmitat", "Askorbylpalmitat", "Аскорбил палмитат", "Palmitato ascorbilo", "Palmitat d'ascorbil", "Ascorbylpalmitaat", "Palmitat de ascorbil"],
  roles: ["antioxidant"],
  children: []
}, {
  id: "en:e332ii",
  name: "Tripotassium citrate",
  es: "Citrato tripotásico",
  aliases: ["Trikalio citratas", "kaaliumtsitraat", "κιτρικό κάλιο", "Trikaliumsitraatti", "Trikaliumcitrat", "Ċitrat tripotassiku", "Kaliumsitrat", "Tripotassium citrate", "Citrato tripotassico", "Citrate tripotassique", "檸檬酸鉀", "Citrato tripotássico", "クエン酸カリウム", "Potasiwm sitrad", "Cytrynian tripotasowy", "Citran tridraselný", "Trikālija citrāts", "Kalijum citrat", "Trikálium-citrát", "Citrato tripotásico", "Трикалиев цитрат", "цитрат калия", "పొటాషియం సిట్రేట్", "Kali xitrat", "Trikaliumcitraat", "Citrat tripotasic", "پتاسیم سیترات", "பொட்டாசியம் சிட்ரேட்டு", "Kalij citrat", "Trikalijev citrat"],
  roles: ["sequestrant", "stabiliser"],
  children: []
}, {
  id: "en:e943b",
  name: "Isobutane",
  es: "Isobutano",
  aliases: ["Izobután", "Isobutan", "Изобутан", "Isobutano", "Isobutà", "Izobutan", "Isobutaan", "Izobutanas", "Isobutaani", "Ισοβουτανιο", "Izobutāns", "Isobutane"],
  roles: [],
  children: []
}, {
  id: "en:e211",
  name: "Sodium benzoate",
  es: "Benzoato sódico",
  aliases: ["Benzoat de sodi", "Natrijev benzoat", "סודיום בנזואט", "Natrijum-benzoat", "Natrijum benzoat", "سدیم بنزوئیک اسید", "Natríumbensóat", "Benzoat de sodiu", "natri benzoat", "Natriumbenzoaat", "natria benzoato", "Natrium benzoat", "Бензоат натрия", "Benzoato sódico", "Натриев бензоат", "Natriumbensoat", "Nátrium-benzoát", "натријум-бензоат", "Benzoan sodný", "Nātrija benzoāts", "Sodyum Benzoat", "苯甲酸钠", "Benzoate de sodium", "Benzoato de sódio", "Benzoato di sodio", "Natriumbenzoat", "Sodium benzoate", "Benzoesan sodu", "Benżoat tas-sodju", "konzervans natrijev benzoat", "Naatriumbensoaat", "Natrio benzoatas", "بنزوات الصوديوم", "Βενζοϊκο νατριο", "Natriumbentsoaatti"],
  roles: ["preservative"],
  children: []
}, {
  id: "en:e392",
  name: "Extracts of rosemary",
  es: "Extractos de romero",
  aliases: ["Rozmaringkivonatok", "Výtažky z rozmarýnu", "Extrakt av rosmarin", "Екстракти от розмарин", "Extractos de romero", "Extracten van rozemarijn", "Extracte de rozmarin", "Izvlečki rožmarina", "Extracte de romaní", "Εκχυλισματα δενδρολιβανου", "Rosmariiniuutteet", "Rozmarinų ekstraktai", "Rosmariiniekstrakt", "Ekstrakter af rosmarin", "antioksidans ekstrakt ružmarina", "Estratti tar-rosmarin", "Ekstrakty z rozmarynu", "Extractos de rosmaninho", "Extrait de romarin", "Extracts of rosemary", "Estratti di rosmarino", "Extrakt aus Rosmarin", "Extrakty z rozmarínu", "Ekstrakti no rozmarīna"],
  roles: [],
  children: []
}, {
  id: "en:e954",
  name: "saccharin and its salts",
  es: "sacarina",
  aliases: ["แซกคารีน", "saccharin and its na. k and ca salts", "սախարին", "сахарин", "Sahhariin ning selle naatrium- kaalium- ja kaltsiumsoolad", "سكارين", "σακχαρινες", "স্যাকারিন", "sakkarin", "Saccharin and its na. k and ca salts", "saharin", "siúicrín", "Sacharín a jeho soli na k a ca", "saccharin and its salts", "Saccharin", "Sacarina e seus sais de sódio potássio e cálcio", "Saccharine et ses sels", "サッカリン", "Sacharyna i jej sole: sodowa potasowa i wapniowa", "sakarin", "захарин и неговите натриеви", "sacharin a jeho sodná draselná a vápenatá sůl", "sakarino", "saccharin", "sacarina i les seves sals de sodi potassi i calci", "Sacharinas ir jo na k ir ca druskos", "āwenewene", "sakariini", "Saccarina e suoi sali na k e ca", "सेकेरिन", "sacarina", "sackarin", "szacharin", "сахарын", "ساخارین", "sakarina", "Sacharine en het natrium- kalium- en calciumzout daarvan", "சாக்கரின்", "Saharin in njegove natrijeve kalijeve in kalcijeve soli", "סכרין"],
  roles: ["sweetener"],
  children: ["en:e954i", "en:e954ii", "en:e954iii", "en:e954iv"]
}, {
  id: "en:e235",
  name: "Natamycin",
  es: "Natamicina",
  aliases: ["natamicīns", "natamycín", "Natamicina", "ナタマイシン", "Natamycine", "Natamycin", "Natamycyna", "natamycin", "natamicin", "Натаміцин", "natamicinas", "ناتاميسين", "ναταμυκίνη", "Natamysiini", "Natamicin", "ناتامایسین", "ନାଟାମାଇସିନ", "natamicină", "Pimaricine", "натамицин", "Натамицин"],
  roles: ["preservative"],
  children: []
}, {
  id: "en:e477",
  name: "Propane-1‚2-diol esters of fatty acids",
  es: "Ésteres de propano-1‚2-diol de ácidos grasos", 
  aliases: ["Esteri 1‚2-propandiolici ai acizilor grași", "Esters van propaan-1‚2-diol met vetzuren", "Èster d'1‚2-propà-diol d'àcids grassos", "Propan-1‚2-diolni estri maščobnih kislin", "Пропан-1‚2-диол естери на мастни киселини", "Ésteres de propano-1‚2-diol de ácidos grasos", "1‚2-propylenglykolestrar av fettsyror", "Zsírsavak propán-1‚2-diol-észterei", "Estery propan-1‚2-diolu s mastnými kyselinami", "эфиры пропиленгликоля и жирных кислот", "Propán-1‚2-diolestery mastných kyselín", "Esters du propylène-glycol d'acide gras", "Ésteres de propano-1‚2-diol de ácidos gordos", "Esteri dell'1‚2-propandiolo degli acidi grassi", "Propane-1‚2-diol esters of fatty acids", "Propylenglycolester von Speisefettsäuren", "Estry kwasów tłuszczowych i glikolu propylenowego", "Taukskābju propān-1‚2-diola esteri", "Propylenglycolestere af fedtsyrer", "Rasvhapete propüleenglükoolestrid", "Riebalų rūgščių propan-1‚2-diolio esteriai", "Εστερες λιπαρων οξεων με προπανοδιολη-1‚2", "Rasvahappojen propyleeniglykoliesterit", "propan-1‚2-diol esteri masnih kiselina", "Esteri tal-propan-1‚2-diol tal-aċidi grassi"],
  roles: ["emulsifier"],
  children: []
}, {
  id: "en:e129",
  name: "Allura red",
  es: "Rojo allura ac",
  aliases: ["Aħmar allura ac", "Alura raudonasis ac", "Võlupunane ac", "Ερυθρο allura ac", "Alluranpunainen ac", "Allura red ac", "Alūra sarkanais ac", "Rosso allura ac", "Allurarot ac", "Allura red", "Rouge allura AC", "Vermelho allura ac", "Czerwień allura ac", "Červená allura ac", "Alluravörös AC", "Rojo allura ac", "Алура червено ac", "Allurarött ac", "Vermell Allure 2C", "Alura rdeče ac", "Allurarood ac", "Roșu allura ac"],
  roles: ["colour"],
  children: []
}, {
  id: "en:e1520",
  name: "Propylene glycol",
  es: "Propilenglicol",
  aliases: ["Propyleeniglykoli", "Προπυλενογλυκόλη", "Propan-1‚2-diolis", "Propüleenglükool", "بروبيلين غليكول", "Пропіленгліколь", "Propan-1‚2-diol", "Propilen qlikol", "propilen glikol", "Glikol propylenowy", "Propylène glycol", "Propilenoglicol", "プロピレングリコール", "Propylene glycol", "Glicole propilenico", "1‚2-Propandiol", "Propán-1‚2-diol", "1‚2-Propāndiols", "Propilen glikol", "propilénglikol", "프로필렌 글리콜", "Пропилен гликол", "Пропан-1‚2-диол", "Propilenglicol", "Пропиленгликоль", "Propaan-1‚2-diol", "پروپیلن گلیکول", "פרופילן גליקול"],
  roles: ["emulsifier", "humectant"],
  children: ["en:e490"]
}, {
  id: "en:e558",
  name: "Bentonite",
  es: "Bentonita",
  aliases: ["Bentonit", "Bentonita", "Бентонит", "בנטוניט", "بنتونیت", "Bentoniet", "Bentonitas", "Bentoniitti", "Bentonitt", "Bentonīts", "बेंटोनाइट", "Bentonite", "Bentonito", "벤토나이트", "Bentónít", "1m558i", "เบนโทไนต์", "Бентоніт", "Bentoniit", "بنتونيت", "Μπεντονίτης", "ベントナイト"],
  roles: [],
  children: []
}, {
  id: "en:e1101iv",
  name: "E1101iv",
  es: "E1101iv",
  aliases: [],
  roles: [],
  children: []
}, {
  id: "en:e450",
  name: "Diphosphates",
  es: "Difosfatos",
  aliases: ["Difosfát", "디포스페이트", "Дифосфат", "Пирофосфаты", "Du fosfato", "Diphosphat", "Difosfat", "Διφωσφορικά άλατα", "Difosfaat", "ثنائي الفوسفات", "Дифосфати", "diphosphater", "ไดฟอสเฟต", "difosfati", "Difosfater", "Difosforany", "二リン酸塩", "焦磷酸盐", "Pirofosfato", "Diphosphates", "Diphosphate", "Difosfáty", "Défosfáit", "Difoszfátok", "Difosfatos", "difosfaat", "دی فسفات", "difosfați", "Difosfati", "דיפוספטים", "Difosfaatit", "Difosfatas", "Difosfāts"],
  roles: ["emulsifier", "humectant", "sequestrant", "stabiliser", "thickener"],
  children: ["en:di-and-triphosphates", "en:diphosphates-and-sodium-carbonates", "en:e450i", "en:e450ii", "en:e450iii", "en:e450iv", "en:e450ix", "en:e450v", "en:e450vi", "en:e450vii", "en:e450viii"]
}, {
  id: "en:e407",
  name: "Carrageenan",
  es: "Carragenatos",
  aliases: ["Каррагинан и его соли", "Karageno", "Karagenan", "Karragenan", "Karragén", "Карагенан", "Carragenatos", "கராகீனன்", "Carragahen", "Carrageen", "Carrageenan", "کاراگینان", "Caragenan", "karagenan", "Καραγενανη", "Karrageeni", "Karrageen", "Karageninas", "Каррагінан", "Karagināns", "karragenan", "Karagen", "カラギーナン", "Carragenina", "Carraghénanes", "Karagénan"],
  roles: ["carrier", "emulsifier", "humectant", "stabiliser", "thickener"],
  children: []
}, {
  id: "en:e262ii",
  name: "Sodium diacetate",
  es: "Diacetato de sodio",
  aliases: ["Nātrija diacetāts", "Dioctan sodu", "Sodium diacetate", "Diacetato di sodio", "Natriumdiacetat", "双乙酸钠", "Diacetato de sódio", "二酢酸ナトリウム", "Diacétate de sodium", "Dioctan sodný (kyslý octan sodný)", "Diaċetat tas-sodju", "Διοξικο νατριο", "Natriumvetyasetaatti", "Naatriumdiatsetaat", "Natrio diacetatas", "சோடியம் ஈரசிட்டேட்டு", "Natrijum diacetat", "Natrijev diacetat", "Natriumdiacetaat", "Diacetat de sodiu", "Natria duacetato", "Hydrogendvojoctan sodný", "Nátrium-diacetát", "Diacetato de sodio", "Натриев диацетат"],
  roles: ["preservative", "sequestrant"],
  children: []
}, {
  id: "en:e1504",
  name: "ethyl acetate",
  es: "Etanoato de etilo",
  aliases: ["Αιθανικός αιθυλεστέρας", "Etyyliasetaatti", "Etilacetatas", "Etüülatsetaat", "Ethylacetát", "Etil-acetát", "Etylacetat", "Etanoato de etilo", "Octan etylu", "Ethylacetaat", "ethyl acetate", "Acetato di etile", "Essigsäureethylester", "Acetato de etila", "Acétate d'éthyle", "Etylacetát", "Acetat de etil", "Etilacetat", "Etilacetāts"],
  roles: ["carrier"],
  children: []
}, {
  id: "en:e180",
  name: "Litholrubine bk",
  es: "Litolrubina bk",
  aliases: ["Litolrubin BK", "Litholrubin bk", "Litolrubin bk", "Litolrubina bk", "Литолрубин bk", "Litholrubine bk", "Litolrubină bk", "Litol-Rubina BK", "Λιθορουμπινη βκ", "Litolirubiini bk", "Litolrubinas bk", "Litoolrubiin bk", "Rubinpigment bk", "Czerwień litolowa bk", "Lithol-rubine BK", "Litholrubin BK", "Litolrubino bk", "Litolrubín bk", "Litolrubīns bk"],
  roles: [],
  children: []
}, {
  id: "en:e959",
  name: "Neohesperidine dihydrochalcone",
  es: "Neohesperidina dihidrocalcona",
  aliases: ["Neohesperidine-dihydrochalcon", "نئوهسپریدین دی هیدرو کالکون", "Dihidrocalconă de neohesperidină", "Neohesperidina dihidrocalcona", "Neohesperidin dc", "Neoheszperidin-dihidro-kalkon", "neohesperidin DC", "Неохесперидин дихидрохалкон", "新橙皮苷二氢查耳酮", "Neo-hesperidina dc", "Néohespéridine dihydrochalcone", "Neoesperidina diidrocalcone", "Neohesperidine dihydrochalcone", "Neohesperydyna diwodorochalkonu", "Neohesperidín dc", "Neohesperidīns dc", "Neohesperidiindivesinikkalkoon", "Neohesperidinas dc", "Νεοεσπεριδινη dc", "Neohesperidiinidihydrokalkoni", "Neohesperidindihydrochalcon", "Neoesperidina diidroċalkon"],
  roles: ["sweetener"],
  children: []
}, {
  id: "en:e351i",
  name: "Potassium hydrogen malate",
  es: "Potassium hydrogen malate",
  aliases: ["Potassium hydrogen malate"],
  roles: [],
  children: []
}, {
  id: "en:e124",
  name: "Ponceau 4r",
  es: "Ponceau 4r",
  aliases: ["Ponceau 4r", "Ponceau 4R", "Nykockin", "Понсо 4r", "Rdeče 4r", "Vermell cotxinilla A", "Uuskokkiini", "Πονσω 4r", "Erkpunane 4r", "Ponso 4r", "Ponceau 4r (cochenillerød a)", "Kumačs 4r", "Pąs 4r", "Cochenillerot a (ponceau 4r)"],
  roles: ["colour"],
  children: []
}, {
  id: "en:e901",
  name: "white and yellow beeswax",
  es: "Cera de abeja blanca y amarilla",
  aliases: ["Cera d'abelles", "Муми занбӯри асал", "මී ඉටි", "Sáp ong", "Byewas", "Asalari mumi", "пчелиный воск", "Abelvakso", "Včelí vosk bílý a žlutý", "Пчелен восък бял и жълт", "मौरीको मैन", "Bijewaaks", "Balmumu", "Cera de abelhas (branca e amarela)", "Cire d'abeille", "white and yellow beeswax", "Bienenwachs weiß und gelb", "Wosk pszczeli biały i żółty", "céir bheach", "Biely a žltý včelí vosk", "pčelinji vosak", "Xama' tan-naħal", "തേനീച്ചയുടെ മെഴുക്", "Bivoks", "Kollane ja valge meevaha", "شمع العسل", "Κηρος μελισσων", "Mantika de papel", "ขี้ผึ้ง", "Մեղրամոմ", "Бджолиний віск", "Bivoks hvidt og gult", "דונג דבורים", "Čebelji vosek beli in rumeni", "Pčelinji vosak", "şima", "Erle-argizari", "Bijenwas wit en geel", "Malam", "موم زنبور عسل", "Ceară de albine albă și galbenă", "Пчаліны воск", "ფუტკრის ცვილი", "Cera estampada", "Lilin lebah", "Cera d'abelha", "Fehér és sárga méhviasz", "пчелињи восак", "Dylli", "Cera de abeja blanca y amarilla", "Bivax vitt och gult", "मधुमोम", "Baltais un dzeltenais bišu vasks", "Cera d'api binaca e gialla", "Igishashara", "Bičių vaškas baltas ir geltonas", "Mehiläisvaha valkoinen ja keltainen", "Arı mumu"],
  roles: ["carrier", "emulsifier", "stabiliser", "thickener"],
  children: []
}, {
  id: "en:e513",
  name: "Sulphuric acid",
  es: "Ácido sulfúrico",
  aliases: ["Sērskābe", "Kyselina sírová", "Kwas siarkowy", "Ácido sulfúrico", "Acide sulfurique", "Sulphuric acid", "Acido solforico", "Schwefelsäure", "Aċidu sulfuriku", "Svovlsyre", "Rikkihappo", "Θειικο οξυ", "Sulfato rūgštis", "Väävelhape", "Žveplova vi kislina", "Àcid sulfúric", "Acid sulfuric", "Zwavelzuur", "Svavelsyra", "Сярна киселина", "Kénsav"],
  roles: [],
  children: []
}, {
  id: "en:e494",
  name: "Sorbitan monooleate",
  es: "Sorbitan monooleate",
  aliases: ["Sorbitanmonooleát", "Szorbitan-monooleát", "Sorbitanmonooleat", "Сорбитан моноолеат", "Sorbitan monooleate", "Sorbitan monooleat", "Monooleat de sorbitan", "Sorbitaanmonoöleaat", "Monooleat tas-sorbitan", "Sorbitaanimono-oleaatti", "Μονοελαϊκη σορβιτανη", "Sorbitano monoleatas", "Sorbitaanmonoleaat", "Sorbitāna monooleāts", "Monooleinian sorbitolu", "Monooleato di sorbitano", "Mono-oleato de sorbitano", "Monoléate de sorbitane"],
  roles: ["emulsifier", "stabiliser"],
  children: []
}, {
  id: "en:e365",
  name: "Sodium fumarate",
  es: "Fumarato de sodio",
  aliases: ["Fumarat tas-sodju", "Natriumfumarat", "Natriumfumaraatti", "Φουμαρικό νάτριο", "Natrio fumaratas", "Naatriumfumaraat", "Nātrija fumarāts", "Sodný fumarát", "Fumaran sodu", "Sodium fumarate", "Fumarato di sodio", "Fumarato de sódio", "Fumarate de sodium", "Fumarato de sodio", "Натриев фумарат", "Nátrium-fumarát", "Natrijev fumarat", "Fumarat de sodiu", "Natriumfumaraat"],
  roles: [],
  children: []
}, {
  id: "en:e416",
  name: "Karaya-gum",
  es: "Goma karaya",
  aliases: ["Guma karaya", "Goma karaya", "Gomme karaya", "Karaya-gummi", "Gomma karaya", "Karaya-gum", "Karaja sveķi", "Κομμι καραγια", "Karaijakumi", "Karaja derva", "Karaiakummi", "Gomma tal-karaya", "Gumă karaya", "Karayagom", "Karaja gumi", "Goma de karaya", "Karayagummi", "Гума карая", "Karayagumi"],
  roles: ["emulsifier", "stabiliser", "thickener"],
  children: []
}, {
  id: "en:e445",
  name: "Glycerol esters of wood rosin",
  es: "Ésteres glicéridos de resina de madera",
  aliases: ["Ésteres glicéridos de resina de madera", "Глицеролови естери на дървесна смола", "Glycerolestrar av trähartser", "Fagyanta glicerin-észterei", "Glycerolestery dřevných pryskyřic", "Esteri glicerinici ai colofoniului din lemn", "Glycerolesters van houthars", "Èster glicèrid de la colofònia de fusta", "Glicerolni estri lesne smole", "Glycerolestere af fyrreharpiks", "Medienos kanifolijos glicerolio esteriai", "kampoli glütseroolestrid", "Εστερες γλυκερολης με κολοφωνιο ξυλου", "Puuhartsien glyseroliesterit", "Glyserolestere av trekolofonium", "Esteri tal-gliċerol tar-rożin tal-injam", "Glycerolestery živíc z dreva", "Esters glycériques de résine de bois", "Ésteres de glicerol da colofónia", "ウッドロジングリセリンエステル", "Esteri della glicerina della resina del legno", "Glycerol esters of wood rosin", "Glycerinester aus Wurzelharz", "Estry glicerolu i żywicy roślinnej", "Kolofonija glicerīna esteri"],
  roles: ["emulsifier", "stabiliser"],
  children: ["en:e445i", "en:e445ii", "en:e445iii"]
}, {
  id: "en:e451ii",
  name: "Pentapotassium triphosphate",
  es: "Trifosfato de pentapotasio",
  aliases: ["Pentakalio trifosfatas", "Pentakaaliumtrifosfaat", "Τριφωσφορικο καλιο", "Pentakaliumtrifosfaatti", "Pentakaliumtriphosphat", "Trifosfat pentapotassiku", "Pentapotassium triphosphate", "Trifosfato pentapotassico", "Triphosphate pentapotassique", "Trifosfato pentapotássico", "Trifosforan pentapotasowy", "Trifosforečnan pentadraselný", "Pentakālija trifosfāts", "Pentakálium-trifoszfát", "Trifosfato de pentapotasio", "Пентакалиев трифосфат", "Pentakaliumtrifosfat", "Pentakaliumtrifosfaat", "Trifosfat pentapotasic", "Pentakalijev trifosfat"],
  roles: ["emulsifier", "humectant", "sequestrant", "stabiliser", "thickener"],
  children: []
}, {
  id: "en:e164",
  name: "saffron",
  es: "azafrán",
  aliases: ["cróch", "szafran", "Safran", "saffron", "açafrão", "केशर", "safran", "サフラン", "ကုံကုမံ", "ಕೇಸರಿ", "safron", "шафран", "केसरम्", "หญ้าฝรั่น", "σαφράνι", "زعفران", "জাফরান", "കുങ്കുമം", "zafrán", "šafran", "saffran", "saffraan", "කුංකුම", "safranum", "safrà", "zafferano", "šafrán", "safrano", "safrāns", "केसर", "زافران", "sahrami", "זאפרען", "șofran", "ګنګو", "azafrai", "குங்குமப்பூ", "žafran", "זעפרן", "azafrán", "ކުކުން", "కుంకుమ పువ్వు", "kuma-kuma", "ਕੇਸਰ"],
  roles: [],
  children: []
}, {
  id: "en:e572",
  name: "Magnesium stearate",
  es: "Estereato de magnesio",
  aliases: ["magnezijum-stearat", "Стеарат магния", "Estereato de magnesio", "Магнезиев стеарат", "Magnesiumstearaatti", "Magnézium-sztearát", "Stearan hořečnatý", "ستيرات المغنسيوم", "Magnezijum stearat", "Estereat de magnesi", "منیزیم استارات", "Stearat de magneziu", "Magnesiumstearaat", "Stearynian magnezu", "硬脂酸镁", "Estearato de magnésio", "Stéarate de magnésium", "Stearato di magnesio", "Magnesium stearate", "Magnesiumstearat"],
  roles: [],
  children: []
}, {
  id: "en:e450vii",
  name: "Calcium dihydrogen diphosphate",
  es: "Difosfato cálcico de dihidrógeno",
  aliases: ["kalcijev dihidrogen difosfat", "Difosfat diidroġenat tal-kalċju", "Calciumdihydrogendiphosphat", "Kalsiumdivetydifosfaatti", "Δισοξινο πυροφωσφορικο ασβεστιο", "Kalcio divandenilio difosfatas", "Kaltsiumdivesinikdifosfaat", "Kalcija dihidrogendifosfāts", "Dihydrogendifosforečnan divápenatý", "Diwodoro-difosforan wapnia", "Di-idrogenodifosfato di calcio", "Calcium dihydrogen diphosphate", "Diphosphate biacide de calcium", "Di-hidrogenodifosfato de cálcio", "Kalciumdivätedifosfat", "Difosfato cálcico de dihidrógeno", "Калциев дихидроген дифосфат", "Dihydrogendifosforečnan vápenatý", "Kalcium-dihidrogén-difoszfát", "Kalcijev dihidrogen difosfat", "Difosfat diacid de calciu", "Calciumdiwaterstofdifosfaat"],
  roles: ["emulsifier", "humectant", "sequestrant", "stabiliser", "thickener"],
  children: []
}, {
  id: "en:e163f",
  name: "Petunidin",
  es: "Petunidin",
  aliases: ["Petunidiini", "Petunidin", "Petunidyna", "Pétunidine"],
  roles: ["colour"],
  children: []
}, {
  id: "en:e472b",
  name: "Lactic acid esters of mono- and diglycerides of fatty acids",
  es: "Ésteres lácticos de monoglicéridos y diglicéridos de ácidos grasos",
  aliases: ["Estery mono- a diglyceridov mastných kyselín s kyselinou mliečnou", "Esteri lattici di mono- e digliceridi degli acidi grassi", "Lactic acid esters of mono- and diglycerides of fatty acids", "Milchsäureester von Mono- und Diglyceriden von Speisefettsäuren", "グリセリン乳酸脂肪酸エステル", "Ésteres lácticos de mono e diglicéridos de ácidos gordos", "Ester diacétyl-lactique de mono- et diglycérides d'acides gras", "Mono- i diglicerydy kwasów tłuszczowych estryfikowane kwasem mlekowym", "laktik asit esterleri of mono- ve diglycerides of fatty asits", "Taukskābju mono- un diglicerīdu pienskābes esteri", "Mælkesyreestere af mono- og diglycerider af fedtsyrer", "Естери гліцерину та молочної і жирних кислот", "Riebalų rūgščių mono- ir digliceridų pieno rūgšties esteriai", "Rasvhapete mono- ja diglütseriidide estrid piimhappega", "Εστερες του γαλακτικου οξεος με μονο- και διγλυκεριδια λιπαρων οξεων", "Rasvahappojen mono- ja diglyseridien maitohappoesterit", "esteri mliječne kiseline mono- i diglicerida masnih kiselina", "Esteri tal-aċidi lattiċi tal-mono- u d-digliċeridi tal-aċidi grassi", "Esteri ai acidului lactic cu mono- și digliceridele acizilor grași", "Mono- en diglyceriden van vetzuren veresterd met melkzuur", "Lactatni esteri mono- i diglicerida masnih kiselina", "Laktatni estri mono- in digliceridov maščobnih kislin", "Естери на млечната киселина с моно- и диглицериди на мастни киселини", "Ésteres lácticos de monoglicéridos y diglicéridos de ácidos grasos", "Mono- och diglyceriders mjölksyraestrar", "Estery mono- a diglyceridů mastných kyselin s kyselinou mléčnou", "Лацтатни естери моно- и диглицерида масних киселина", "Melkesyreester av mono- og diglyserider av næringsfettsyrer", "Zsírsavak mono- és digliceridjeinek tejsav-észterei", "Éster diacetil-láctico de mono- e diglicéridos de ácidos graxos"],
  roles: ["emulsifier", "sequestrant", "stabiliser"],
  children: []
}, {
  id: "en:e640i",
  name: "Glycine",
  es: "Glicina",
  aliases: ["Glicin", "Glycin", "Glicina", "Глицин", "Glycine", "Γλυκινη", "Glysiini", "Glütsiin", "Glicinas", "Gliċina", "Glicyna", "グリシン", "Glycín", "Glicīns"],
  roles: [],
  children: []
}, {
  id: "en:e1001",
  name: "Choline salt",
  es: "Sal de colina",
  aliases: ["Kolina salo", "Холиновая соль", "Sal de colina", "Холинова сол", "Kolinsalt", "콜린 염", "Kolin-só", "Cholinová sůl", "Holinska sol", "نمک کولین", "Esteri și săruri de colină", "Cholinezout", "kolin bitartarat", "Холінова сіль", "Cholinsalt", "Xolin duzu", "Koliinisool", "Cholino druska", "ملح الكولين", "Koliinin suolat ja esterit", "Άλας χολίνης", "Holīna sāls", "Kolin tuzu", "Cholínová soľ", "コリン塩", "Sels et esters de choline", "Sale di colina", "Choline salt", "Cholinsalz", "Sól choliny"],
  roles: [],
  children: ["en:e1001i", "en:e1001ii", "en:e1001iii", "en:e1001iv", "en:e1001v", "en:e1001vi"]
}, {
  id: "en:e502",
  name: "Carbonates",
  es: "Carbonatos",
  aliases: ["Karbonati", "Karbonaadid", "Karbonatai", "Karbonaatit", "Ανθρακικά", "karbonater", "Karbonāti", "Carbonate", "Carbonati", "Carbonates", "Carbonatos", "Węglany", "Uhličitany", "Karbonátok", "Карбонати", "Carbonater", "Carbonaten", "Carbonați"],
  roles: [],
  children: []
}, {
  id: "en:e325",
  name: "sodium lactate",
  es: "lactato sódico",
  aliases: ["natriumlaktat", "lactato sódico", "Натриев лактат", "Mléčnan sodný", "Natrijum laktat", "Nátrium-laktát", "Natria laktato", "лактат натрия", "Lactat de sodiu", "سدیم لاکتات", "Natri lactat", "natriumlactaat", "Natrijev laktat", "Lactat de sodi", "Natriumlactat", "natriumlaktaatti", "Γαλακτικο νατριο", "Natrio laktatas", "Naatriumlaktaat", "لاكتات الصوديوم", "natrijev laktilat", "Lattat tas-sodju", "Mliečnan sodný", "lachtaláit sóidiam", "Mleczan sodu", "sodium lactate", "lattato di sodio", "乳酸ナトリウム", "lactato de sódio", "lactate de sodium", "Nātrija laktāts"],
  roles: ["antioxidant", "emulsifier", "humectant", "thickener"],
  children: []
}, {
  id: "en:e172",
  name: "Iron oxides and iron hydroxides",
  es: "Óxidos e hidróxidos de hierro",
  aliases: ["Òxids i hidròxids de ferro", "Železovi oksidi in hidroksidi", "Ijzeroxiden en -hydroxiden", "Oxizi și hidroxizi de fier", "Оксид железа желтый", "Oxidy a hydroxidy železa", "Vas-oxidok és vas-hidroxidok", "Óxidos e hidróxidos de hierro", "Железни оксиди и железни хидроксиди", "Järnoxider och järnhydroxider", "Dzelzs oksīdi un dzelzs hidroksīdi", "Eisenoxide und Eisenhydroxide", "Ossidi di ferro e idrossidi di ferro", "Iron oxides and iron hydroxides", "Óxidos de ferro e hidróxidos de ferro", "Oxyde et hydroxyde de fer", "Tlenki żelaza i wodorotlenki żelaza", "Ossidi tal-ħadid u idrossidi tal-ħadid", "željezo oksidi i hidroksidi", "Raudoksiidid ja raudhüdroksiidid", "Geležies oksidai ir geležies hidroksidai", "Rautaoksidit ja -hydroksidit", "Οξειδια του σιδηρου και υδροξειδια του σιδηρου συνώνυμα", "Jernoxider og jernhydroxider"],
  roles: ["colour"],
  children: ["en:e172i", "en:e172ii", "en:e172iii"]
}, {
  id: "en:e411",
  name: "E411 food additive",
  es: "E411 food additive",
  aliases: ["Kaurakumi", "Havergom", "Mączka z tamaryszku", "Gomme d'avoine"],
  roles: [],
  children: []
}, {
  id: "en:e906",
  name: "Benzoin resin",
  es: "Resina de benjuí",
  aliases: ["Benzin qətranı", "Bentsoiinikumi", "Benzoinė derva", "Benzoīna sveķi", "बेंजोइन राल", "Resina di benzoino", "Resin benzoin", "Damar benzoin", "Бензоин смола", "Bensoeharts", "Rrëshirë benzoine", "Resina de benjuí", "Benzoeviasz", "שרף בנזואין", "Benzoinska smola", "Gumă de benzoia", "Benzoïnegum", "Raża tal-benżoin", "Benzoin smola", "Бензойна смола", "Benzoinharpiks", "เรซินเบนโซอิน", "Ρητίνη βενζόης", "Bensoe vaik", "صمغ بنزوين", "Benzoil reçinesi", "Benzoínová živica", "Styraks", "Gomme benzoïque", "安息香树脂", "Resina de benzoim", "安息香樹脂", "Benzoe", "Benzoin resin", "Benzoina rezino", "Бензойная смола", "안식향 수지", "Бензое смола", "Bensoëhars", "Nhựa benzoin"],
  roles: [],
  children: []
}, {
  id: "en:e327",
  name: "calcium lactate",
  es: "lactato de calcio",
  aliases: ["Lactat de calci", "Kalcijev laktat", "Kalcijum laktat", "கால்சியம் லாக்டேட்டு", "calciumlactaat", "کلسیم لاکتات", "Lactat de calciu", "лактат кальция", "Kalcium-laktát", "mléčnan vápenatý", "lactato de calcio", "Калциев лактат", "kalciumlaktat", "kalcija laktāts", "乳酸カルシウム", "lactato de cálcio", "lactate de calcium", "calcium lactate", "lattato di calcio", "Calciumlactat", "mleczan wapnia", "mliečnan vápenatý", "Lattat tal-kalċju", "kalcijev laktat", "Kaltsiumlaktaat", "kalcio laktatas", "لاكتات الكالسيوم", "kalsiumlaktaatti", "Γαλακτικο ασβεστιο"],
  roles: ["thickener"],
  children: []
}, {
  id: "en:e102",
  name: "Tartrazine",
  es: "Tartrazina",
  aliases: ["Tartrazine", "ටාට්‍රසින්", "تارترازین", "Tartrazină", "Tartrazina", "Tartrazin", "טרטרזין", "Тартразин", "타트라진", "Tartarazina", ":柠檬黄", "タートラジン", "Tartrazyna", "Tartraiséin", "Tartrazín", "Tartrazīns", "Tartrazinas", "Tartrasiin", "Ταρτραζινη", "Tartratsiini", "Tartrażina"],
  roles: ["colour"],
  children: []
}, {
  id: "en:e968",
  name: "Erythritol",
  es: "Eritritol",
  aliases: ["इरिथ्रोटोल", "Eritritols", "Ertytrytol", "Eritritol", "エリトリトール", "Érythritol", "Erythrit", "Eritritolo", "Erythritol", "erytritol", "eiritríotól", "Erytritoli", "Ερυθριτολη", "Eritritolis", "Erütritool", "إريثريتول", "אריתריטול", "Erytritol", "اریتریتول", "Eritrit", "에리트리톨", "Еритритол"],
  roles: ["humectant", "sweetener"],
  children: []
}, {
  id: "en:e250",
  name: "Sodium nitrite",
  es: "Nitrito sódico",
  aliases: ["natrium nitrit", "Natriumnitrit", "Nitrito sódico", "натријум нитрит", "Nátrium-nitrit", "Natrijum nitrit", "Natrijev nitrit", "נתרן חנקיתי", "Nitrit de sodiu", "سدیم نیتریت", "Natriumnitriet", "Natriumnitriitti", "Natrio nitritas", "Nātrija nitrīts", "natriumnitritt", "Nitrito di sodio", "natria nitrito", "Нитрит натрия", "아질산 나트륨", "Натриев нитрит", "Dusitan sodný", "Nitrit de sodi", "Natri nitrit", "Natriumnitritt", "natrijev nitrit", "Nitrit tas-sodju", "Нітрит натрію", "Νιτρωδες νατριο", "Naatriumnitrit", "نتريت الصوديوم", "Sodyum nitrit", "Натрий нитрити", "nítrít sóidiam", "Azotyn sodu", "Sodium nitrite", "亜硝酸ナトリウム", "亚硝酸钠", "Nitrito de sódio", "Nitrite de sodium"],
  roles: ["preservative"],
  children: []
}, {
  id: "en:e440aiv",
  name: "Ammonium Pectate",
  es: "Ammonium Pectate",
  aliases: ["Ammoniumpektaatti", "Ammoniumpectaat", "Ammónium-pektát", "Pectate d'ammonium", "Ammonium Pectate"],
  roles: ["emulsifier", "stabiliser", "thickener"],
  children: []
}, {
  id: "en:e364ii",
  name: "Disodium succinate",
  es: "Disodium succinate",
  aliases: ["Disodium succinate"],
  roles: [],
  children: []
}, {
  id: "en:e960b",
  name: "Rebaudioside from multiple gene donors expressed in Yarrowia lipolityca",
  es: "Rebaudioside from multiple gene donors expressed in Yarrowia lipolityca",
  aliases: ["Rebaudioside from multiple gene donors expressed in Yarrowia lipolityca"],
  roles: ["sweetener"],
  children: []
}, {
  id: "en:e1210",
  name: "Carbomer",
  es: "Carbómero",
  aliases: ["Karbomer", "Карбомер", "Carbómero", "קרבומר", "کربومر", "Carbomer", "Carbomeer", "Karbomeeri", "Karbomeras", "Karbomērs", "कार्बोमर", "Karbomero", "Carbòmer", "คาร์โบเมอร์", "Καρβομερές", "Karbomeer", "كاربومير", "Karbomér", "カルボマー", "Carbomère"],
  roles: [],
  children: []
}, {
  id: "en:e435",
  name: "Polyoxyethylene sorbitan monostearate",
  es: "Monoestearato de sorbitán polioxietilenado",
  aliases: ["Polioksietilēna sorbitāna monostearāts", "Polyoxyetylénsorbitanmonostearát", "Monostearynian polioksyetylenosorbitolu", "Monostearato di poliossietilene sorbitano", "Polyoxyethylen-Sorbitanmonostearat", "Polyoxyethylene sorbitan monostearate", "Monoestearato de polioxietileno sorbitano", "Monostéarate de polyoxyéthylène sorbitane", "polisorbat 60", "Monostereat tal-poliossietilen sorbitan", "Polyoxyethylen(20)sorbitanmonostearat", "Polyoksyetyleenisorbitaanimonostearaatti", "Μονοστεατικη πολυοξυ-αιθυλενο-σορβιτανη", "Polioksietileno sorbitano monostearatas", "Polüosküetüleen sorbitaanmonostearaat", "Polioksietilen sorbitan monostearat", "Monoestearat de sorbitan polioxietilenat", "Monostearat de polioxietilenă sorbitan", "Polyoxyethyleensorbitaanmonostearaat", "Polyoxietylensorbitanmonostearat", "Monoestearato de sorbitán polioxietilenado", "Полиоксиетилен сорбитан моностеарат", "Polyoxyethylensorbitanmonostearát", "Polioxietilén-szorbitan-monosztearát"],
  roles: ["emulsifier", "stabiliser"],
  children: []
}, {
  id: "en:e900a",
  name: "Dimethyl polysiloxane",
  es: "Dimetilpolisiloxano",
  aliases: ["Dimetylopolisiloksan", "Dimetilpolisilossano", "Dimethylpolysiloxan", "Dimethyl polysiloxane", "Polydiméthylsiloxane", "Dimetilpolissiloxano", "Dimetylpolysiloxán", "Dimetilpolisiloksāns", "Dimetyylipolysiloksaani", "Διμεθυλοπολυσιλοξανιο", "Dimetilpolisiloksanas", "Dimetüülpolüsiloksaanadditive", "Polisilossan dimetiliku", "Dimethylpolysiloxaan", "Dimetilpolisiloxan", "Dimetilpolisiloksan", "Dimetilpolisiloxà", "Dimetil-polisziloxán", "Dimetylpolysiloxan", "Dimetilpolisiloxano", "Диметилполисилоксан"],
  roles: ["emulsifier"],
  children: []
}, {
  id: "en:e638",
  name: "E638",
  es: "Aspartamo de sodio",
  aliases: ["Natrium aspartaam", "Aspartam de sodiu", "Aspartam sòdic", "Natrijev aspartam", "nátrium-aszpartám", "Sodná sůl aspartamu", "Натријум аспартам", "Aspartam natriumi", "Натриев аспартам", "Aspartamo de sodio", "아스파탐 나트륨", "Natrium aspartam", "Натриум аспартам", "Аспартам натрия", "Natria aspartamo", "Aspartamo de sódio", "天冬酰苯丙氨酸钠", "Aspartame de sodium", "アスパルテームナトリウム", "Aspartame di sodio", "Natriumaspartam", "Aspartam sodu", "Aspartám sodný", "Nātrija aspartāms", "Sodyum aspartam", "Natrio aspartamas", "Naatrium aspartaam", "أسبارتام الصوديوم", "Natriumaspartaami", "Ασπαρτάμη νατρίου", "แอสปาร์แตมโซเดียม", "Аспартам натрію", "Aspartam tas-sodju"],
  roles: [],
  children: []
}, {
  id: "en:e1402",
  name: "Alkaline modified starch",
  es: "Almidón modificado alcalino",
  aliases: ["Лужно-модифікований крохмаль", "Qələvi modifikasiya edilmiş nişasta", "Alkalisk modificeret stivelse", "สตาร์ชดัดแปรด้วยด่าง", "Alkalikäsitelty tärkkelys", "Αλκαλικά τροποποιημένο άμυλο", "Šarmu modifikuotas krakmolas", "Leelisega modifitseeritud tärklis", "Sārmaini modificēta ciete", "Alkali modifiye nişasta", "Alkalicky modifikovaný škrob", "skrobia modyfikowana zasadami", "Amido modificado alcalino", "碱改性淀粉", "アルカリ変性デンプン", "Amidon traité aux alcalis", "alkalisch modifizierte Stärke", "Amido modificato alcalino", "Alkaline modified starch", "Щелочной модифицированный крахмал", "Alkaliskt modifierad stärkelse", "알칼리 변성 전분", "Алкално модифицирано нишесте", "Almidón modificado alcalino", "Lúggal módosított keményítő", "Alkalno modificiran škrob", "Midó modificat alcalí", "Amidon modificat alcalin", "Alkali-behandeld zetmeel"],
  roles: ["emulsifier", "stabiliser", "thickener"],
  children: []
}, {
  id: "en:e367",
  name: "Calcium fumarate",
  es: "Fumarato de calcio",
  aliases: ["Kalcija fumarāts", "Fumarate de calcium", "Fumarato de cálcio", "Fumarato di calcio", "Calcium fumarate", "Calciumfumarat", "Fumaran wapnia", "Fumarát vápenatý", "Fumarat tal-kalċju", "Kalcio fumaratas", "Kaltsiumfumaraat", "Φουμαρικό ασβέστιο", "Kalsiumfumaraatti", "Kalcijev fumarat", "Calciumfumaraat", "Fumarat de calciu", "Kalcium-fumarát", "Kalcium fumarát", "Fumarato de calcio", "Калциев фумарат", "Kalciumfumarat"],
  roles: [],
  children: []
}, {
  id: "en:e353",
  name: "Metatartaric acid",
  es: "Ácido metatartárico",
  aliases: ["Metavinsyre", "Μετατρυγικο οξυ", "Metaviinihappo", "Metatartaric acid", "Metavyno rūgštis", "Aċidu metatartariku", "Kyselina metavínna", "Kwas metawinowy", "Acido metatartarico", "Metaweinsäure", "Acide métatartrique", "Ácido metatartárico", "Metavīnskābe", "Metavinsyra", "Метавинена киселина", "Metaborkősav", "Acid metatartric", "Metawijnsteenzuur", "Metavinska kislina", "Àcid metatartàric"],
  roles: [],
  children: []
}, {
  id: "en:e553ii",
  name: "E553ii",
  es: "E553ii",
  aliases: [],
  roles: [],
  children: []
}, {
  id: "en:e928",
  name: "Benzole peroxide",
  es: "Peróxido de benzoílo",
  aliases: ["Benzole peroxide", "Dibenzoylperoxid", "过氧化苯甲酰", "Peróxido de benzoíla", "peroxyde de benzoyle", "過酸化ベンゾイル", "Nadtlenek benzoilu", "Benzoylperoxid", "Benzoil peroksit", "Bensoüülperoksiid", "بيروكسيد البنزويل", "Υπεροξείδιο του βενζοϋλίου", "เบนโซอิลเปอร์ออกไซด์", "Бензоїл пероксид", "Benzoil peroksid", "Perossidu tal-benżojl", "Benzoyl peroxide", "Bensóýlperoxíð", "Bensoielperoksied", "Peròxid de benzoil", "Бензоил пероксид", "벤조일 퍼 옥사이드", "Пероксид бензоила", "Benzoila peroksido", "Benzoperossido", "बेंजोइल पेरोक्साइड", "Benzoylperoksid", "Benzoila peroksīds", "Benzoilperoksidas", "Bentsoyyliperoksidi", "Bentzoil peroxido", "Benzoylperoxide", "Peroxid de benzoil", "بنزوئیل پراکسید", "בנזואיל פראוקסיד", "Benzoilperoksid", "benzoil-peroxid", "Peróxido de benzoílo", "Peroksid benzoil", "Bensoylperoxid", "Benzoil peroksida"],
  roles: ["preservative"],
  children: []
}, {
  id: "en:e524",
  name: "Sodium hydroxide",
  es: "Hidróxido sódico",
  aliases: ["Natriumhydroxid", "Натриум хидроксид", "Hidróxido sódico", "Натрий гидроксиді", "Hidroksidi i natriumit", "натријум-хидроксид", "Nátrium-hidroxid", "Idroxid de sòdi", "సోడియమ్ హైడ్రాక్సైడ్", "Natrium hidroksida", "Hidróxido de sodio", "Hydrocseed sodjum", "ნატრიუმის ჰიდროქსიდი", "Hidroxid de sodiu", "سدیم هیدروکسید", "Natriumhydroxide", "sodio hidroxido", "کاسٹک سوڈا", "Natrij-hidroksid", "சோடியம் ஐதராக்சைடு", "נתרן הידרוקסידי", "Natrijev hidroksid", "Natrijum hidroksid", "Natriumhydroksidi", "Natrio hidroksidas", "Sodium Hydroxide", "Idrossido di sodio", "Nātrija hidroksīds", "क्षारातु उदजारेय", "수산화 나트륨", "Натриев хидроксид", "Hydroxid sodný", "natria hidroksido", "гидроксид натрия", "Natriy gidroksid", "Natriumhidroksied", "Natri hiđroxit", "Natrii hydroxidum", "Hidròxid de sodi", "Նատրիումի հիդրօքսիդ", "гідроксид натрію", "โซดาไฟ", "Υδροξειδιο του νατριου", "Naatriumhüdroksiid", "هيدروكسيد الصوديوم", "সোডিয়াম হাইড্রোক্সাইড", "Natriumhydroksid", "സോഡിയം ഹൈഡ്രോക്സൈഡ്", "natrijev hidroksid", "Idrossidu tas-sodju", "hiodrocsaíd sóidiam", "Wodorotlenek sodu", "Sodium hydroxide", "Hydroxyde de sodium", "Hidróxido de sódio", "水酸化ナトリウム", "Sodyum hidroksit", "ကော့စတစ်ဆိုဒါ", "Натрий гидроксиди", "Натрийн гидроксид"],
  roles: [],
  children: []
}, {
  id: "en:e580",
  name: "Magnesium Gluconate",
  es: "Gluconato de magnesio",
  aliases: ["Глюконат магния", "Magnezia glukonato", "Magnesium glukonat", "Magnézium-glükonát", "Glukonát hořečnatý", "Glukonat magnezi", "Глюконат на магнезий", "Gluconato de magnesio", "글루 콘산 마그네슘", "Magnesiumglukonat", "Gluconat de magnesi", "Magnezijev glukonat", "Magie gluconat", "Magnesiumgluconaat", "Magnesiumglukonaat", "گلوکونات منیزیم", "Gluconat de magneziu", "Glukonat tal-maġnezju", "Magneesiumglükonaat", "Magnio gliukonatas", "غلوكونات المغنيسيوم", "Γλυκονικό μαγνήσιο", "Magnesiumglukonaatti", "กลูโคเนตแมกนีเซียม", "Глюконат магнію", "Magnesiumgluconat", "Maqnezium Qlükonat", "Magnija glikonāts", "Magnezyum glukonat", "葡萄糖酸镁", "グルコン酸マグネシウム", "Gluconato de magnésio", "Gluconate de magnésium", "Gluconato di magnesio", "Magnesium Gluconate", "Glukonian magnezu", "Glukonát horečnatý"],
  roles: [],
  children: []
}, {
  id: "en:e488",
  name: "Ethoxylated Mono- and Di-Glycerides",
  es: "Monoglicéridos y diglicéridos etoxilados",
  aliases: ["Этоксилированные моно- и диглицериды", "Monoglicéridos y diglicéridos etoxilados", "Етоксилирани моно- и диглицериди", "Etoxilerade mono- och diglycerider", "에톡시화 모노- 및 디글리세리드", "Ethoxylované mono- a diglyceridy", "Etoxilezett mono- és digliceridek", "Monoglicèrids i diglicèrids etoxilats", "Etoksilirani mono- in digliceridi", "Mono și digliceride etoxilate", "Geëthoxyleerde mono- en diglyceriden", "Etoksilirani mono- i digliceridi", "Ethoxylerede mono- og diglycerider", "Etoksilinti mono- ir digliceridai", "Etoksüülitud mono- ja diglütseriidid", "مونو و دي جليسريدات إيثوكسيلية", "Etoksyloidut mono- ja diglyseridit", "Αιθοξυλιωμένοι μονο- και διγλυκερίδιοι", "Etoksilēti mono- un diglicerīdi", "Etoxylované mono- a diglyceridy", "Ethoxylierte Mono- und Diglyceride", "Monogliceridi e digliceridi etossilati", "Ethoxylated Mono- and Di-Glycerides", "乙氧基化单甘油酯和双甘油酯", "Monoglicerídeos e diglicerídeos etoxilados", "Mono- et diglycérides éthoxylés", "エトキシ化モノ - およびジグリセリド", "Etylowane mono- i diglicerydy"],
  roles: [],
  children: []
}, {
  id: "en:e430",
  name: "Polyoxyethylene (8) stearate",
  es: "Polioxietilen (8) estearato",
  aliases: ["Stéarate de polyoxyéthylène (8)", "Polioxietilén-8-sztearát", "Polyoxyethylene (8) stearate", "Polyoksietyleeni(8)monostearaatti", "Polyoxyleen-8-stearaat", "Polioxietilen (8) estearato"],
  roles: ["emulsifier"],
  children: []
}, {
  id: "en:e538",
  name: "Calcium ferrocyanide", 
  es: "Ferrocianuro cálcico",
  aliases: ["Ferroċjanur tal-kalċju", "Kalsiumferrosyanidi", "Σιδηροκυανιουχο ασβεστιο", "Kaltsiumheksatsüanoferraatii", "Kalcio ferocianidas", "Calciumferrocyanid", "Kalcija ferocianīds", "Żelazocyjanek wapnia", "Ferrocianuro di calcio", "Calcium ferrocyanide", "Ferrocyanure de calcium", "Ferrocianeto de cálcio", "Ferokyanid vápenatý", "Hexakyanoželeznatan vápenatý", "Kalcium-ferro-cianid", "Kalciumferrocyanid", "Калциев фероцианид", "Ferrocianuro cálcico", "Kalcijev ferocianid", "Ferrocianur de calci", "Calciumhexacyanoferraatii", "Ferocianură de calciu"],
  roles: [],
  children: []
}, {
  id: "en:e452vi",
  name: "Sodium tripolyphosphate",
  es: "Tripolifosfato de sodio",
  aliases: ["Natrio tripolifosfatas", "Naatriumtripolüfosfaat", "ثلاثي فوسفات الصوديوم", "Natriumtripolyfosfaatti", "Τριπολυφωσφορικό νάτριο", "Natrium tripolifosfat", "Natriumtripolyphosphat", "Триполіфосфат натрію", "Tripolifosfat tas-sodju", "Natrijev tripolifosfat", "Tripolifosfato di sodio", "Sodium tripolyphosphate", "Tripolyphosphate de sodium et de potassium", "三聚磷酸钠", "Tripolifosfato de sódio", "ポリリン酸ナトリウム", "Tripolifosforan sodu", "Tripolyfosforečnan sodný", "Sodyum tripolifosfat", "Nātrija tripolifosfāts", "Натријум триполифосфат", "nátrium-tripolifoszfát", "Натриев триполифосфат", "Tripolifosfato de sodio", "폴리인산 나트륨", "Natriumtripolyfosfat", "Натриум триполифосфат", "Триполифосфат натрия", "Natria tripolifosfato", "Natriumtripolyfosfaat", "Tripolifosfat de sodiu", "تری پلی فسفات سدیم", "Tripolifosfat de sodi", "טריפוליפוספט נתרן"],
  roles: ["emulsifier", "humectant", "sequestrant", "stabiliser", "thickener"],
  children: []
}, {
  id: "en:e352ii",
  name: "Calcium hydrogen malate",
  es: "Malato ácido de calcio",
  aliases: ["Kalcija hidrogēnmalāts", "Calcium hydrogen malate", "Malato acido di calcio", "Calciumhydrogenmalat", "Hidrogenomalato de cálcio", "Malate acide de calcium", "Wodorojabłczan wapnia", "Hydrogenjablčnan vápenatý", "Malat idroġenat tal-kalċju", "Kaltsiumvesinikmalaat", "Kalcio vandenilio malatas", "Kalsiumvetymalaatti", "Οξινο μηλικο ασβεστιο", "Kalcijev hidrogenmalat", "Calciumwaterstofmalaat", "Malat acid de calciu", "Hydrogenjablečnan vápenatý", "Kalcium-hidrogén-malát", "Калциев хидроген малат", "Malato ácido de calcio", "Kalciumvätemalat"],
  roles: [],
  children: []
}, {
  id: "en:e552",
  name: "Calcium silicate",
  es: "Silicato cálcico",
  aliases: ["Kalciumsilikat", "Silicato cálcico", "Калциев силикат", "Kalcium-szilikát", "Křemičitan vápenatý", "Kalcijev silikat", "Silicat de calci", "Silicat de calciu", "Calciumsilicaat", "Silikat tal-kalċju", "Calciumsilicat", "Kalsiumsilikaatti", "Πυριτικο ασβεστιο", "Kaltsiumsilikaat", "Kalcio silikatas", "Kalcija silikāts", "Kremičitan vápenatý", "Krzemian wapnia", "Silicate de calcium", "Silicato de cálcio", "Calcium silicate", "Silicato di calcio"],
  roles: [],
  children: []
}, {
  id: "en:e160bi",
  name: "Annatto bixin",
  es: "bixina",
  aliases: ["bixina", "биксин", "bixin", "bixină", "annatto bixine", "Bixina", "biksin", "Bixin", "biksinas", "biksiin", "μπιξινη", "biksiini", "bixín", "bissina", "Annatto bixin", "Bixine", "biksyna", "biksīns"],
  roles: ["colour"],
  children: []
}, {
  id: "en:e261i",
  name: "E261i",
  es: "E261i",
  aliases: [],
  roles: [],
  children: []
}, {
  id: "en:e624",
  name: "Monoammonium glutamate",
  es: "Glutamato de monoamonio",
  aliases: ["Glutamat monoammoniku", "Monoammoniumglutamat", "Monoamonio glutamatas", "Ammooniumvesinikglutamaat", "Οξινο γλουταμινικο αμμωνιο", "Monoammoniumglutamaatti", "Monoamonija glutamāts", "Glutaman amónny", "Glutamato monoamónico", "Glutamate d'ammonium", "Monoammonium glutamate", "Glutammato di monoammonio", "Glutaminian monoamonowy", "Glutamato de monoamonio", "Моноамониев глутамат", "Monoammónium-glutamát", "Glutaman amonný", "Glutamat de monoamoni", "Monoamonijev glutamat", "Glutamat monoamonic", "Monoammoniumglutamaat"],
  roles: [],
  children: []
}, {
  id: "en:e296",
  name: "Malic acid",
  es: "Ácido málico",
  aliases: ["மேலிக் அமிலம்", "Malinska kiselina", "חומצה מאלית", "Jabolčna kislina", "azido maliko", "Appelzuur", "Asam malat", "Acid malic", "Яблычная кіслата", "مالیک اسید", "asam malat", "Almasav", "eplesyre", "Алма қышқылы", "Ácido málico", "Јаболкова киселина", "Äppelsyra", "मैलिक अम्ल", "Ābolskābe", "Acido malico", "Obuolių rūgštis", "Omenahappo", "Alma turşusu", "Àcid màlic", "Axit malic", "яблочная кислота", "Pomacido", "Kyselina jablečná", "Ябълчна киселина", "Malik asit", "Äpfelsäure", "Malic acid", "Acide malique", "リンゴ酸", "Kwas jabłkowy", "Aigéad malach", "Kyselina jablčná", "jabučna", "Aċidu maliku", "Eplesyre", "Õunhape", "حمض التفاح", "Μηλικο οξυ", "กรดมาลิก", "Æblesyre", "Яблучна кислота", "Խնձորաթթու"],
  roles: [],
  children: []
}, {
  id: "en:e909",
  name: "Spermaceti",
  es: "Espermaceti",
  aliases: ["Valrav", "Спермацети", "Spermaceti", "Espermaceti", "Szpermacet", "Espermacete", "სპერმაცეტი", "اسپرم‌نهنگ", "Ceară de spermaceti", "Walschot", "سپرمیسیٹی", "Espermati", "סְפֶּרמָצֶטִי", "Valaanpäävaha", "Spermacetas", "Spermacets", "स्परमासेटी", "고래 기름", "Спермацет", "Vorvaňovina", "Spermaceto", "Spermasetie", "Sæðishvalalýsi", "Spermacetolie", "สเปิร์มมาเซติ", "Σπερματσέτι", "Spermacet", "إسبرماسيتي", "Cire de blanc de baleine", "Walrat"],
  roles: [],
  children: []
}, {
  id: "en:e585",
  name: "Ferrous lactate",
  es: "Lactato ferroso",
  aliases: ["Dzelzs laktāts", "乳酸鉄-II", "Lactato ferroso", "Lactate ferreux", "Lattato ferroso", "Ferrous lactate", "Eisen-ii-lactat", "Mleczan żelazawy", "Mliečnan železnatý", "Lattat ferruż", "Ferrolaktaat", "Geležies laktatas", "Ferrolaktaatti", "Γαλακτικος σιδηρος", "Ferrolactat", "Lactat ferrós", "Železov-ii-laktat", "Sắt-II lactat", "IJzer-ii-lactaat", "لاکتات آهن-II", "Lactat feros", "Vas-ii-laktát", "Mléčnan železnatý", "Gvožđe-II laktat", "Феро лактат", "Järnlaktat"],
  roles: [],
  children: []
}, {
  id: "en:e214",
  name: "Ethyl p-hydroxybenzoate",
  es: "P-hidroxibenzoato de etilo",
  aliases: ["Etil parahidroksi benzoat", "Ethyl-p-hydroxybenzoaat", "P-hidroxibenzoat de etil", "Ethyl p-hydroxybenzoát", "Etil-p-hidroxi-benzoát", "P-hydroxibensoesyraetylester", "Етилов р-хидроксибензоат", "P-hidroxibenzoato de etilo", "Etil-p-hidroksibenzoāts", "P-hydroksybenzoesan etylu", "P-idrossibenzoato d'etile", "Phb-ester (ethyl-p-hydroxybenzoat)", "Ethyl p-hydroxybenzoate", "4-hydroxybenzoate d'éthyle", "Etyl-p-hydroxybenzoát", "P-idrossibenżoat tal-etil", "P-υδροξυβενζοϊκος αιθυλεστερας", "Etyyli-p-hydroksibentsoaatti", "Etilo p-hidroksibenzoatas", "Etüül-p-hüdroksübensoaat", "Ethyl-p-hydroxybenzoat"],
  roles: ["preservative"],
  children: []
}, {
  id: "en:e440aii",
  name: "Sodium pectate",
  es: "Sodium pectate",
  aliases: ["Sodium pectate", "Nátrium-pektát", "Pectate de sodium", "Natriumpectaat", "Natriumpektaatti"],
  roles: ["emulsifier", "stabiliser", "thickener"],
  children: []
}, {
  id: "en:e140i",
  name: "Chlorophylls",
  es: "Clorofilas",
  aliases: ["Chlorofyly", "Clóraifill", "Chlorofile", "Chlorophylle", "Chlorophylls", "Klowofil", "Clorofilas", "हरितद्रव्य", "クロロフィル", "Chlorophylles", "Klorofil", "Хлорофилл", "ಕ್ಲೋರೊಫಿಲ್", "हरितकण", "હરિતદ્રવ્ય", "Chlorophyll", "Քլորոֆիլ", "Хлорофіл", "คลอโรฟิลล์", "Χλωροφυλλες", "Klorofüllid", "يخضور", "ক্লোরোফিল", "Raphi q'umir", "Klorofyll", "ഹരിതകം", "Kloropil", "Klorofilli", "Diệp lục", "Chlorophyllum", "clorofilla", "Clorofile", "Хлорофили", "klorofilo", "Cloroffyl", "Clorofille", "Hlorofili", "पर्ण हरिम", "Xlorofil", "Klorofyllit", "Chlorofilai", "Klorofili", "ქლოროფილი", "Хларафіл", "سبزینه", "Chlorofylen", "Klorofila", "Klorofilo", "Hlorofil", "பச்சையம்", "Klorofîl", "כלורופיל", "Klorofyller", "Хлорофил", "хлорофил", "Klorofillok", "పత్రహరితం", "Clorofilla", "Clorofila"],
  roles: ["colour"],
  children: ["en:ci-natural-green-3"]
}, {
  id: "en:e965i",
  name: "D-Maltitol",
  es: "D-Maltitol",
  aliases: ["D-maltīts", "D-Maltitol", "D-maltitol", "D-maltitolo", "D-Maltit", "D-Morbitol", "D-Μαλτιτόλη", "D-maltitoli", "D-maltitool", "D-maltitolis", "D-малтитол"],
  roles: ["emulsifier", "humectant", "stabiliser", "sweetener", "thickener"],
  children: []
}, {
  id: "en:e1452",
  name: "Starch aluminium octenyl succinate",
  es: "Octenilsuccinato alumínico de almidón",
  aliases: ["Škrobový oktenyljantaran hlinitý", "Starch aluminium octenyl succinate", "Ottenilsuccinato di alluminio e amido", "Stärkealuminiumoctenylsuccinat", "Succinate octenylique aluminique d'amidon", "Octenilsuccinato de amido alumínico", "Sól glinowa oktenylobursztynianu skrobiowego", "Cietes alumīnija oktenilsukcināts", "Stivelsealuminiumoctenylsuccinat", "Alumiiniumoktenüülsuktsinaattärklis", "Krakmolo aliuminio oktenilsukcinatas", "Αργιλιουχο οκτενυληλεκτρικο αμυλο", "Tärkkelysalumiinioktenyylisukkinaatti", "Ottenilsuċċinat tal-lamtu u l-aluminju", "Octenilsuccinat de amidon și aluminiu", "Zetmeelaluminiumoctenylsuccinaat", "Octenilsuccinat alumínic de midó", "Aluminijev oktenil sukcinat škroba", "Скорбелен алуминиев октенил сукцинат", "Octenilsuccinato alumínico de almidón", "Stärkelse-aluminium-oktenyl-succinat", "Škrobový oktenylsukcinát hlinitý", "Keményítő-alumínium-oktenil-szukcinát"],
  roles: ["emulsifier", "stabiliser", "thickener"],
  children: []
}, {
  id: "en:e452i",
  name: "Sodium polyphosphate",
  es: "Polifosfato de sodio",
  aliases: ["Sodium polyphosphate", "Polifosfato di sodio", "Natriumpolyphosphat", "Polyphosphate de sodium", "Polifosforan sodu", "Polyfosforečnan sodný", "Nātrija polifosfāts", "Natrio polifosfatas", "Naatriumpolüfosfaat", "Πολυφωσφορικο νατριο", "Natriumpolyfosfaatti", "Natriumpolyphosphater", "Polifosfat tas-sodju", "natrijev polifosfat", "Natriumpolyfosfaat", "Polifosfat de sodiu", "Natrijev polifosfat", "Nátrium-polifoszfát", "Polifosfato de sodio", "Натриев полифосфат", "Natriumpolyfosfat"],
  roles: ["emulsifier", "humectant", "sequestrant", "stabiliser", "thickener"],
  children: []
}, {
  id: "en:e282",
  name: "calcium propionate",
  es: "Propionato de calcio",
  aliases: ["kalcia propanato", "Пропионат кальция", "Propionato de calcio", "Калциев пропионат", "Kalciumpropionat", "kalcium-propionát", "Propionan vápenatý", "Propanoat de calci", "Kalcijev propionat", "Kalcijum propanoat", "کلسیم پروپانوات", "propionat de calciu", "calciumpropionaat", "Kalsiumpropionat", "kalcijev propionat", "Propjonat tal-kalċju", "Calciumpropionat", "Kalcio propionatas", "Kaltsiumpropionaat", "بروبيونات الكالسيوم", "Kalsiumpropionaatti", "Προπιονικο ασβεστιο", "Kalcija propionāts", "propionate de calcium", "Propionato de cálcio", "propionato di calcio", "calcium propionate", "propionian wapnia"],
  roles: ["preservative"],
  children: []
}, {
  id: "en:e951",
  name: "Aspartame",
  es: "Aspartamo",
  aliases: ["Aspartamo", "Aspartam", "аспартам", "Aszpartám", "aspartam", "Аспартам", "آسپارتام", "Aspartaam", "அஸ்பார்ட்டம்", "אספרטם", "Aspartamas", "Aspartaami", "Aspartame", "Aspartāms", "아스파탐", "แอสปาร์แตม", "أسبرتام", "Ασπαρταμη", "Aspartám", "阿斯巴甜", "アスパルテーム"],
  roles: ["sweetener"],
  children: []
}, {
  id: "en:e905a",
  name: "mineral oil",
  es: "Aceite mineral",
  aliases: ["Aceite mineral", "mineralolja", "Ásványi olaj", "Minerální olej", "Минерално уље", "Minyak galian", "Minyak mineral", "нефтяные масла", "روغن معدنی", "Ulei mineral calitate alimentară", "ඛනිජ තෙල්", "dầu khoáng", "Minerale olie", "oli mineral", "Mineralno olje", "שמן תעשייתי", "கனிம எண்ணெய்", "Мінеральні масла", "Հանքային յուղեր", "Mineraalõli", "زيت معدني", "Mineraaliöljy", "Óleo mineral", "Huile minérale de qualité alimentaire", "Mineralöl", "mineral oil", "Oleje mineralne", "खनिज तेल"],
  roles: [],
  children: []
}, {
  id: "en:e161d",
  name: "Rubixanthin",
  es: "Rubixantina",
  aliases: ["Rubixantină", "Rubixanthine", "Rubixantin", "Rubixantina", "Рубиксантин", "Rubixantín", "Rubiksantyna", "Rubixanthin", "Rubiksantīns", "Rubiksantiini", "Ρουμπιξανθίνη", "Rubiksantinas", "Rubikantin"],
  roles: [],
  children: []
}, {
  id: "en:e223",
  name: "Sodium metabisulphite",
  es: "Metabisulfito sódico",
  aliases: ["Natriumdisulfiet", "Natri metabisunfit", "سدیم متابی‌سولفیت", "Metabisulfit de sodiu", "Metabisulfit de sodi", "Natrijev metabisulfit", "Natrijum metabisulfit", "Nátrium-metabiszulfit", "Disiřičitan sodný", "Натриев метабисулфит", "Metabisulfito sódico", "Natriumdisulfit", "пиросульфит натрия", "Natria pirosulfito", "Natrium metabisulfit", "焦亚硫酸钠", "Disulfite de sodium", "Metabissulfito de sódio", "ピロ亜硫酸ナトリウム", "Sodium metabisulphite", "Metabisolfito di sodio", "Natriummetabisulfit", "Pirosiarczyn sodu", "Disiričitan sodný", "Nātrija metabisulfīts", "Sodyum metabisulfit", "Natrio metabisulfitas", "Naatriumdisulfit", "بيروكبريتيت الصوديوم", "Natriumdisulfiitti", "Μεταδιθειωδες νατριο", "Նատրիումի պիրոսուլֆիտ", "Metabisulfit tas-sodju", "natrijev metabisulfit"],
  roles: ["antioxidant", "preservative"],
  children: []
}, {
  id: "en:e927b",
  name: "Carbamide",
  es: "Carbamida",
  aliases: ["Καρβαμιδιο", "Karbamiid", "يوريا", "Միզանյութ", "Сечовина", "karbamid", "ยูเรีย", "യൂറിയ", "Urea", "urea", "ইউরিয়া", "Karbamid", "Carbamida", "युरिया खत", "Carbamide", "Carbamid", "Úiré", "युरिया", "ಯೂರಿಯಾ", "યુરિયા", "Шүвтэр", "Мочевина", "Карбамид", "мочевина", "ureo", "Þvagefni", "Karbamidi", "Karbamidas", "Carbammide", "Yuuriya", "यूरिया", "Karbamīds", "уреја", "ਯੂਰੀਆ", "యూరియా", "Urèa", "შარდოვანა", "اوره", "Мачавіна", "Carbamidă", "שתנן", "யூரியா", "Ureo"],
  roles: [],
  children: []
}, {
  id: "en:e1517",
  name: "Glyceryl diacetate",
  es: "Diacetato de glicerilo",
  aliases: ["Глицерил диацетат", "Diacetato de glicerilo", "Glyceryldiacetat", "Gliceril-diacetát", "Glyceryl-diacetát", "Diacetat de gliceril", "Glicerildiacetat", "Glyceryldiacetaat", "Diaċetat tal-gliċeril", "Glütserüüldiatsetaat", "Glicerildiacetatas", "Διακετινη (διγλυκεριδιο του οξικου οξεος)", "Glyseryylidiasetaatti", "Glicerildiacetāts", "Glyceryl diacetát", "Diacétine", "Diacetato di glicerile", "Glycerindiacetat", "Glyceryl diacetate", "Dioctan glicerolu"],
  roles: [],
  children: []
}, {
  id: "en:e303",
  name: "Potassium ascorbate",
  es: "Ascorbato de potasio",
  aliases: ["Ascorbat de potasiu", "Kaliumascorbaat", "Ascorbat de potassi", "Kalijev askorbat", "Калиев аскорбат", "Ascorbato de potasio", "Kaliumaskorbat", "아스코르브산 칼륨", "Kálium-aszkorbát", "Askorbát draselný", "Аскорбат калия", "Ascorbato de potássio", "抗坏血酸钾", "Diacétate d'ascorbyle", "アスコルビン酸カリウム", "Potassium ascorbate", "Ascorbato di potassio", "Kaliumascorbat", "Askorbinian potasu", "Kālija askorbāts", "Potasyum askorbat", "Аскорбат калію", "Kalium askorbat", "Kaaliumaskorbaat", "Kalio askorbatas", "أسكوربات البوتاسيوم", "Ασκορβικό κάλιο", "Kaliumaskorbaatti"],
  roles: [],
  children: []
}, {
  id: "en:e503ii",
  name: "Ammonium hydrogen carbonate",
  es: "Bicarbonato de amonio",
  aliases: ["Bicarbonat de amoniu", "Ammoníumbíkarbónat", "بی‌کربنات آمونیوم", "Ammoniumwaterstofcarbonaat", "Amonijum bikarbonat", "Amonijev hidrogenkarbonat", "carbonat àcid d'amoni", "Амониум бикарбонат", "ammoniumvätekarbonat", "탄산 수소 암모늄", "Bicarbonato de amonio", "Амониев хидроген карбонат", "Hydrogenuhličitan amonný", "Ammónium-hidrogén-karbonát", "Hjortetakksalt", "అమ్మోనియం బైకార్బొనేట్", "Amonia bikarbonato", "Bicarbonato amónico", "гидрокарбонат аммония", "Hydrogenuhličitan amónny", "Wodorowęglan amonu", "Ammoniumhydrogencarbonat", "Carbonato acido di ammonio", "Ammonium hydrogen carbonate", "碳酸氢铵", "Carbonate acide d'ammonium", "Hidrogenocarbonato de amónio", "炭酸水素アンモニウム", "Amonija hidrogēnkarbonāts", "अमोनियम बाईकार्बोनेट", "ammoniumhydrogenkarbonat", "แอมโมเนียมไบคาร์บอเนต", "Οξινο ανθρακικο αμμωνιο", "Ammoniumvetykarbonaatti", "Ammooniumvesinikkarbonaat", "Amonio hidrokarbonatas", "بيكربونات الأمونيوم", "Ammoniumhydrogenkarbonat", "Karbonat idroġenat tal-ammonju", "amonijev hidrogen karbonat"],
  roles: [],
  children: []
}, {
  id: "en:e1100i",
  name: "E1100i",
  es: "E1100i",
  aliases: [],
  roles: [],
  children: []
}, {
  id: "en:e320",
  name: "Butylated hydroxyanisole (bha)",
  es: "Butilhidroxianisol",
  aliases: ["Butylhydroxyanisol (bha)", "Butilezett hidroxi-anizol (bha)", "Butylhydroxianisol (bha)", "Butilhidroxianisol", "Бутил хидроксианизол (бха)", "Butylhydroxyanisool (bha)", "Butilhidroxianisol (bha)", "Butilhidroksianizol (bha)", "Butyylihydroksianisoli (bha)", "Βουτυλ-υδροξυανισολη (bha)", "Butüülhüdroksüanisool (bha)", "Butilintas hidroksianizolas (bha)", "Idrossilanisol butilat (bha)", "butil hidroksiansol", "Butylohydroksyanizol (bha)", "Butilidrossianisolo (bha)", "Butylated hydroxyanisole (bha)", "Butylhydroxyanisol", "Butil-hidroxianisole (bha)", "Butylovaný hydroxyanizol (bha)", "Butilhidroksianizols (bha)"],
  roles: ["antioxidant"],
  children: []
}, {
  id: "en:e160dii",
  name: "Lycopene‚ tomato",
  es: "Lycopene‚ tomato",
  aliases: ["Lycopene‚ tomato"],
  roles: [],
  children: []
}, {
  id: "en:e384",
  name: "Isopropyl citrates",
  es: "Citratos de isopropilo",
  aliases: ["Izopropil citrati", "Citrați de izopropil", "Isopropylcitraten", "Citratos de isopropilo", "Цитрати на изопропил", "Isopropylcitrat", "Izopropyl citráty", "Izopropil-citrátok", "Izopropilcitāti", "Citrati di isopropile", "Isopropylcitrate", "Isopropyl citrates", "Citrates d'isopropyle", "Cytrany izopropylowe", "Ċitrati ta' isopropil", "Isopropyl citrater", "Izopropilo citratai", "Isopropüültsitraadid", "Isopropyylisitraatit", "Ισοπροπυλικά κιτρικά άλατα"],
  roles: ["antioxidant", "preservative", "sequestrant"],
  children: []
}, {
  id: "en:e160aiii",
  name: "Beta-carotene from blakeslea trispora",
  es: "Beta-caroteno de blakeslea trispora",
  aliases: ["Beta-karoten z blakeslea trispora", "Béta-karotin blakeslea trisporából", "Бета-каротин от blakeslea trispora", "Beta-caroteno de blakeslea trispora", "Betakaroten från blakeslea trispora", "Beta karoten iz blakeslea trispora", "Bèta-caroteen uit blakeslea trispora", "Beta-caroten din blakeslea trispora", "Beta-karotên minn blakeslea trispora", "Beta karotenas iš blakeslea trispora", "Beetakaroteen saadud blakeslea trispora'st", "Blakeslea trispora -sienestä saatu beta-karoteeni", "Β-καροτενιο από blakeslea trispora", "Beta-caroten fra blakeslea trispora", "Beta-karotīns no blakeslea trispora", "Beta-carotin aus blakeslea trispora", "Beta-carotene derivato da blakeslea trispora", "Beta-carotene from blakeslea trispora", "Bêta-carotène issu de blakeslea trispora", "Beta-karoten otrzymywany z blakeslea trispora", "Beta-karotén z blakeslea trispora"],
  roles: ["colour"],
  children: []
}, {
  id: "en:e152",
  name: "Black 7984",
  es: "negro de carbón",
  aliases: ["carbon black", "Cărbune negru", "Fekete 7984", "Kimrök", "negro de carbón", "Czerń 7984", "Noir de carbone", "Black 7984", "nero di carbone", "Kienruß", "Musta 7984", "Tahm", "Carbon black"],
  roles: [],
  children: []
}, {
  id: "en:e263",
  name: "Calcium acetate",
  es: "Acetato de calcio",
  aliases: ["Kalciumacetat", "Acetato de calcio", "Калциев ацетат", "Kalcium-acetát", "Kalcijum acetat", "Octan vápenatý", "kalcia acetato", "Kalsium asetat", "Acetat de calciu", "Canxi axetat", "Calciumacetaat", "Kalcijev acetat", "கால்சியம் அசிட்டேட்டு", "Acetat de calci", "Calciumacetat", "Οξικα αλατα του ασβεστιου", "Kalsiumasetaatti", "Kalcio acetatas", "Kaltsiumatsetaat", "أسيتات الكالسيوم", "kalcijev acetat", "Aċetat tal-kalċju", "Octan wapnia", "calsiwm asetad", "Acétate de calcium", "Acetato de cálcio", "酢酸カルシウム", "Acetato di calcio", "Calcium acetate", "Kalcija acetāts", "Kalsiyum asetat"],
  roles: ["preservative", "stabiliser"],
  children: []
}, {
  id: "en:e956",
  name: "Alitame",
  es: "Alitamo",
  aliases: ["Alitam", "Алітам", "อะลิเทม", "Αλιτάμη", "Alitaam", "أليتام", "Alitame", "アリテーム", "Alitamo", "Алитам", "Alitaami", "Alitamas", "Alitāms", "अलीटेम", "Alitám", "אליטאם", "آلیتام"],
  roles: ["sweetener"],
  children: []
}, {
  id: "en:e710",
  name: "Spiramycin",
  es: "Espiramicina",
  aliases: ["스피라마이신", "Спирамицин", "Spiramycin", "Spiramicino", "Espiramicina", "Спіраміцин", "สไปราไมซิน", "Σπιραμυκίνη", "سبيراميسين", "Spiramicin", "Spiramiċina", "Spiramycín", "Spiramycyna", "スピラマイシン", "螺旋霉素", "Spiramycines Antibiotique", "spiramycin", "spiramicin", "اسپیرامایسین", "Spiramicină", "Spiramycines", "ספירמיצין", "Spiramisin", "Spiramysiini", "Spiramicinas", "Spiramicina", "Spiramicīns", "स्पाइरामाइसिन"],
  roles: [],
  children: []
}, {
  id: "en:e1443",
  name: "Hydroxy propyl distarch glycerol",
  es: "Glicerol de dialmidón hidroxipropilo",
  aliases: ["Hidroksi propil distarha glicerols", "Hidroksi propil distarş gliserol", "Glycérol de diamidon hydroxypropyle", "Glicerol de distarca hidroxipropil", "ヒドロキシプロピル二澱粉グリセロール", "Hydroxy propyl distarch glycerol", "Glicerolo di distarch idrossipropilico", "Hydroksypropylowy glicerol diskrobiowy", "Hidroksi propil distarch glicerolis", "Hüdroksüpropüül-ditselluloosglütserool", "Hydroksipropyyliditärkkelysglyseroli", "Υδροξυ προπυλ διστάρχη γλυκερόλη", "Hidroksi propil nişasta gliserol", "Glicerol de dialmidó hidroxipropil", "Hydroxy propyl distarch glicerol", "Glicerol de distarce hidroxipropil", "Гидрокси пропил дистарх глицерол", "Hidroxi-propil-dikeményítő-glicerol", "Glicerol de dialmidón hidroxipropilo", "Хидрокси пропил дистарх глицерол", "하이드록시 프로필 디스타치 글리세롤"],
  roles: ["emulsifier", "stabiliser", "thickener"],
  children: []
}, {
  id: "en:e1100vi",
  name: "E1100vi",
  es: "E1100vi",
  aliases: [],
  roles: [],
  children: []
}, {
  id: "en:e419",
  name: "Gum ghatti",
  es: "Goma ghatti",
  aliases: ["Goma ghatti", "מסטיק גהאטי", "Gumi ghatti", "Ghatti gom", "صمغ گتی", "Gumă ghatti", "Камедь гхатти", "Gati-gumo", "Gam ghatti", "Gum ghatti", "Ghatti gumi", "Гати гума", "Guma ghatti", "Гума гати", "Ghattigummi", "가티 검", "घट्टी गोंद", "Ghati sveķi", "Gati zamkı", "ガッティガム", "胶凝集素", "Gomme ghatti", "Ghatti-Gummi", "Gomma ghatti", "Ghatti guma", "Ghattikumi", "Ghati guma", "صمغ غاتي", "Κόμμι γκάτι", "Ghatti-kumi", "Камедь гатті", "Qatti saqqızı"],
  roles: ["stabiliser", "thickener"],
  children: []
}, {
  id: "en:e270", 
  name: "Lactic acid",
   es: "Ácido láctico",
  aliases: ["Kwas mlekowy", "Lactic acid", "Milchsäure", "Ácido láctico", "Acide lactique", "Kyselina mliečna", "Aigéad lachtach", "Laktik asit", "Γαλακτικο οξυ", "Piimhape", "حمض اللبنيك", "Mælkesyre", "Կաթնաթթու", "Молочна кислота", "กรดแล็กติก", "Asam laktat", "Aċidu lattiku", "mliječna kiselina", "Melkesyre", "axit lactic", "Sut kislota", "Mjólkursýra", "Àcid làctic", "Mëllechsaier", "Kyselina mléčná", "Млечна киселина", "Молочная кислота", "Lakta acido", "Asid lactig", "Acido lattico", "लैक्टिक अम्ल", "Pienskābe", "Maitohappo", "Pieno rūgštis", "Melkzuur", "რძემჟავა", "Acid lactic", "Малочная кіслата", "اسید لاکتیک", "லாக்டிக் அமிலம்", "Mliječna kiselina", "Mlečna kislina", "חומצה לקטית", "млијечна киселина", "Tejsav", "melkesyre", "Mjölksyra", "Сүт қышқылы", "Acidi Laktik", "acid lactic", "లాక్టికామ్లం", "Asid laktik"],
  roles: [],
  children: []
}, {
  id: "en:e944",
  name: "Propane",
  es: "Propano",
  aliases: ["Propán", "Propano", "Propane", "Propan", "Propāns", "Propanas", "Propaan", "Propaani", "Προπανιο", "Propà", "Пропан"],
  roles: [],
  children: []
}, {
  id: "en:e312",
  name: "Dodecyl gallate",
  es: "Galato de dodecilo",
  aliases: ["Gal·lat de dodecil", "Dodecilgalat", "Dodecylgallaat", "Galat de dodecil", "Dodecylgallát", "Dodecil-gallát", "Додецил галат", "Galato de dodecilo", "Dodecylgallat", "Dodecilgallāts", "Gallato di dodecile", "Dodecyl gallate", "Gallate dodécyle", "Galusan dodecylu", "Dodecylgalát", "Gallat tad-dodeċil", "Dodetsüülgallaat", "Dodecilo galatas", "Dodekyyligallaatti", "Γαλλικος δωδεκυλεστερας"],
  roles: [],
  children: []
}, {
  id: "en:e440",
  name: "Pectins",
  es: "Pectinas",
  aliases: ["Peictin", "Pektín", "Pectines", "Pectina", "ペクチン", "Pectins", "Pektine", "Pektyny", "Пектиндер", "Pektin", "เพกทิน", "Պեկտինյան նյութեր", "Pektiner", "Pektiin", "بكتين", "Πηκτίνη", "pektin", "Pektien", "Pectin", "Пектин", "Pektino", "pektīnvielas", "Pektin maddələri", "Pektinas", "Pektiini", "پکتین", "Pectină", "пекцінавыя рэчывы", "Pektina", "Pectine", "פקטין", "பெக்டின்", "Pectinas", "пектин"],
  roles: ["emulsifier", "stabiliser", "thickener"],
  children: ["en:e440i", "en:e440ii"]
}, {
  id: "en:e200",
  name: "Sorbic acid",
  es: "Ácido sórbico",
  aliases: ["Sorbik asit", "Aigéad sorbach", "Kyselina sorbová", "Ácido sórbico", "ソルビン酸", "Acide sorbique", "Sorbic acid", "Sorbinsäure", "Kwas sorbowy", "Sorbinsyre", "Aċidu sorbiku", "sorbinska kiselina", "กรดซอร์บิก", "Сорбінова кислота", "Sorbiinhape", "حمض السوربيك", "Σορβικο οξυ", "àcid sòrbic", "sorbic acid", "Axit sorbic", "Sorbata acido", "Acid sorbic", "Сорбинова киселина", "소르빈산", "Sorbīnskābe", "सोर्बिक अम्ल", "Acido sorbico", "Sorbo rūgštis", "Sorbiinihappo", "Sorbinska kislina", "חומצה סורבית", "Sorbinska kiselina", "اسید سربیک", "Sorbinezuur", "Asam sorbat", "Sorbinsyra", "sorbinsyre", "Szorbinsav"],
  roles: ["preservative"], 
  children: []
}, {
  id: "en:e1420",
  name: "Acetylated starch",
  es: "Almidón acetilado",
  aliases: ["Stärkelseacetat", "Almidón acetilado", "Ацетилирано нишесте", "Acetylovaný škrob", "Acetilezett keményítő", "Amidon acetilat", "Geacetyleerd zetmeel", "Acetilirani škrob", "Midó acetilat", "Acetyleret stivelse", "Asetyloitu tärkkelys", "Ακετυλιωμενο αμυλο", "Atsetüülitud tärklis", "Acetilintas krakmolas", "Lamtu aċetilat", "Skrobia acetylowana", "acetylierte Stärke", "Amido acetilato", "Acetylated starch", "Amidon acétylé", "Amido acetilado", "Acetilētā ciete"],
  roles: ["emulsifier", "stabiliser", "thickener"],
  children: []
}]
const fsaLink = "https://www.gov.uk/government/publications/food-additives/food-additives"

const fdaSweetLink = "https://www.fda.gov/food/food-additives-petitions/aspartame-and-other-sweeteners-food"
const additiveNicknames = {
  "en:e322": ["lecithin", "soy lecithin", "sunflower lecithin"],
  "en:e102": ["yellow 5", "amarillo 5"],
  "en:e110": ["yellow 6", "amarillo 6"],
  "en:e129": ["red 40", "rojo 40"],
  "en:e133": ["blue 1", "azul 1"],
  "en:e132": ["blue 2", "azul 2"],
  "en:e127": ["red 3", "rojo 3"],
  "en:e202": ["sorbato de potasio"],
  "en:e211": ["benzoato de sodio"],
  "en:e250": ["nitrito de sodio"]
};
const rootIds = {
  next: new Map(),
  ids: new Set()
};

function getWords(str) {
  return noAccents(str).match(/[\p{L}\p{N}]+/gu) || [];
}

for (const e of additiveList) for (const alias of new Set([...e.aliases, ...(additiveNicknames[e.id] || [])])) {
  if (alias.length < 4) continue;
  let node = rootIds;
  for (const word of getWords(alias)) {
    if (!node.next.has(word)) node.next.set(word, {
      next: new Map(),
      ids: new Set()
    });
    node = node.next.get(word);
  }
  node.ids.add(e.id);
}

function findAdditiveNames(txt) {
  const wordList = getWords(txt);
  const ids = new Set();
  for (let i = 0; i < wordList.length; i++) {
    let node = rootIds;
    for (let j = i; j < wordList.length && j < i + 24; j++) {
      node = node.next.get(wordList[j]);
      if (!node) break
      for (const id of node.ids) ids.add(id);
    }
  }
  return ids
}

const additiveRoles = {
  colour: ["Color", "Colorante", "Changes or restores the food’s color.", "Da o recupera el color del alimento."],
  sweetener: ["Sweetener", "Edulcorante", "Adds sweetness. The amount used is not given by the ingredient name.", "Aporta dulzor. El nombre no indica la cantidad utilizada."],
  preservative: ["Preservative", "Conservante", "Helps slow spoilage and keep food for longer.", "Ayuda a frenar el deterioro y conservar el alimento."],
  emulsifier: ["Keeps ingredients mixed", "Mantiene la mezcla", "Helps ingredients such as oil and water stay mixed.", "Ayuda a mantener mezclados ingredientes como agua y aceite."],
  thickener: ["Thickener", "Espesante", "Gives food a thicker texture.", "Da una textura más espesa."],
  stabiliser: ["Keeps the texture", "Mantiene la textura", "Helps maintain the food’s texture.", "Ayuda a mantener la textura del alimento."],
  antioxidant: ["Protects flavor and color", "Protege sabor y color", "Slows changes caused by contact with oxygen.", "Frena cambios causados por el contacto con oxígeno."],
  humectant: ["Keeps moisture", "Mantiene la humedad", "Helps keep food from drying out.", "Ayuda a evitar que el alimento se seque."],
  "flavour-enhancer": ["Boosts flavor", "Refuerza el sabor", "Makes existing flavors more noticeable.", "Hace más perceptibles los sabores."],
  carrier: ["Carries another ingredient", "Distribuye ingredientes", "Helps another ingredient spread through the food.", "Ayuda a distribuir otro ingrediente por el alimento."],
  sequestrant: ["Protects food quality", "Protege la calidad", "Binds small amounts of metals that can affect food quality.", "Se une a pequeñas cantidades de metales que pueden afectar al alimento."],
  coagulant: ["Sets the texture", "Da consistencia", "Helps ingredients form a firmer texture.", "Ayuda a dar una textura más firme."],
  "propellent-gas": ["Dispensing gas", "Gas de dispensación", "Helps dispense food from its container.", "Ayuda a sacar el alimento de su envase."]
};
const additiveCache = new Map()
export function findAdditives(p, es = false) {
  const key = JSON.stringify([p.ingredients, p.additiveTags, p.ingredientTags, es]);
  const old = additiveCache.get(key);
  if (old) return old.map(x => ({
    ...x
  }));
  const body = noAccents(p.ingredients.replace(/\b(?:manufactured|distributed|produced|packed)\s+(?:for|by)\b[\s\S]*?(?=\b(?:ingredients|ingredientes|contains|may contain|allergy advice)\b|$)/gi, " ")).replace(/\b(?:without|free from|no added|no|sin|sans|sem)\s+[^,;.\n]*/g, "");
  const tags = new Set((p.additiveTags || []).map(str => str.toLowerCase()));
  for (const m of body.matchAll(/\b(?:e|ins)\s*(\d{3,4})\s*(?:\(([ivx]+)\)|([a-z]{1,3}))?(?![a-z0-9])/gi)) tags.add("en:e" + m[1] + (m[2] || m[3] || "").toLowerCase())
  const nameList = findAdditiveNames(body + " " + (p.ingredientTags || []).map(str => str.replace(/^[a-z]{2}:/, "").replace(/-/g, " ")).join(", "));

  const matched = additiveList.filter(e => tags.has(e.id) || nameList.has(e.id));
  const selected = matched.filter(e => !e.children.some(id => matched.some(child => child.id === id)));
  const res = selected.map(e => {
    const role = e.roles.map(r => additiveRoles[r]).filter(Boolean);
    const code = e.id.slice(3).toUpperCase();

    let note;
    let src = fsaLink;
    let level = "info";
    if(["en:e102", "en:e104", "en:e110", "en:e122", "en:e124", "en:e129"].includes(e.id)) {
      note = es ? "Este colorante puede afectar la actividad y la atención de algunos niños." : "This color may affect activity and attention in some children."
      level = "attention";
    }
    if (e.id === "en:e951" || e.id === "en:e962") {
      note = es ? "Aporta fenilalanina. Las personas con fenilcetonuria deben evitarla o limitarla según su plan médico." : "Provides phenylalanine. People with PKU need to avoid or limit it according to their care plan."
      src = fdaSweetLink;
      level = "attention";
    }
    if (/^en:e22[0-8]/.test(e.id)) {
      note = es ? "Los sulfitos pueden causar reacciones en personas sensibles, incluidas algunas personas con asma." : "Sulfites can cause reactions in sensitive people, including some people with asthma."
      level = "attention";
      src = "https://www.fda.gov/food/food-additives-petitions/food-additive-status-list"
    }

    if (["en:e420", "en:e421", "en:e953", "en:e965", "en:e966", "en:e967"].some(id => e.id === id || e.id.startsWith(id + "i"))) {
      note = es ? "Cantidades grandes pueden causar gases, hinchazón o diarrea." : "Larger amounts can cause gas, bloating or diarrhea.";
      level = "attention";
    }
    return {
      id: e.id,
      code,
      name: es ? e.es : e.name,
      role: role.map(r => r[es ? 1 : 0]).slice(0, 2).join(" · ") || (es ? "Ingrediente añadido" : "Added ingredient"),
      explanation: role.slice(0, 2).map(r => r[es ? 3 : 2]).join(" ") || (es ? "El nombre por sí solo no indica la cantidad utilizada ni el riesgo para una persona." : "The name alone does not show the amount used or a person’s risk."),
      note,
      level,
      source: src
    };
  }).sort((a, b) => Number(b.level === "attention") - Number(a.level === "attention") || a.name.localeCompare(b.name));
  additiveCache.set(key, res);

  if (additiveCache.size > 75) additiveCache.delete(additiveCache.keys().next().value);
  return res.map(x => ({
    ...x
  }));
}
