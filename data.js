const chapters=['','Den globale økonomi','Danmarks økonomi','Produktion og indkomst','Prisdannelsen','Husholdninger og forbrug','Arbejdsmarkedet','Offentlig sektor og velfærd'];
const raw=`1|Højkonjunktur|En periode med høj økonomisk aktivitet, relativt stærk vækst og typisk faldende ledighed.|Virksomheder får flere ordrer og ansætter flere. Import og pres på priserne kan stige.
1|Lavkonjunktur|En periode med svag økonomisk aktivitet, lav eller negativ vækst og typisk stigende ledighed.|Færre køb giver færre ordrer og flere fyringer.
1|Recession|En økonomisk tilbagegang. En ofte brugt teknisk definition er fald i realt BNP i to kvartaler i træk.|Recession er en mere specifik betegnelse end en almindelig vækstafmatning.
1|Depression|En særlig dyb og langvarig økonomisk krise.|En kort nedtur er ikke automatisk en depression.
1|Trendvækst|Økonomiens langsigtede underliggende vækstrate.|Væksten svinger omkring trenden. Faste procentgrænser for højkonjunktur er kun tommelfingerregler.
1|Produktivitet|Hvor meget der produceres pr. enhed af en indsats, fx pr. arbejdstime.|Bedre uddannelse og maskiner kan give mere produktion uden flere arbejdstimer.
1|Globalisering|At landenes økonomier bliver tættere forbundet gennem bl.a. handel, kapital og arbejdskraft.|En krise hos en handelspartner kan mindske dansk eksport.
1|Finanskrisen|Krisen i 2007–2009, hvor problemer på bolig- og kreditmarkederne bredte sig til banker og realøkonomien.|Banktab og mindre udlån var med til at sænke investeringer, forbrug og beskæftigelse.
1|Subprimelån|Boliglån til låntagere med svag kreditværdighed, særligt kendt fra USA før finanskrisen.|Når mange ikke kunne betale, fik långiverne store tab.
1|Boligboble|Når boligpriser presses op til et skrøbeligt niveau af bl.a. forventninger om fortsatte prisstigninger.|Når boblen brister, kan faldende formuer og tab ramme forbrug og banker.
1|Eurokrisen|Gælds- og finansieringskrisen i flere eurolande i årene efter finanskrisen.|Fælles valuta betød, at landene ikke selv kunne devaluere deres valuta.
1|Udbudskrise|En krise, hvor produktionen og leverancerne hæmmes.|Nedlukninger under corona forhindrede virksomheder i at producere.
1|Efterspørgselskrise|En krise, hvor det samlede ønske om at købe varer og tjenester falder.|Usikre husholdninger sparer mere op, og virksomheder sælger mindre.
1|Inflation|En generel stigning i priserne på varer og tjenester over tid.|Dyrere energi kan løfte mange priser. En enkelt dyrere vare er ikke i sig selv generel inflation.
1|Rente|Prisen for at låne penge, normalt angivet i procent pr. år.|Højere renter kan dæmpe lånefinansieret forbrug og investeringer.
2|Samfundsøkonomiske mål|Ønskede resultater for økonomien: beskæftigelse, betalingsbalance, vækst, stabile priser, social udligning og miljøhensyn.|Målene skal afvejes, fordi en politik kan forbedre ét mål og forværre et andet.
2|Målkonflikt|Når forbedring af ét økonomisk mål gør det sværere at opfylde et andet.|Større efterspørgsel kan mindske ledighed, men samtidig øge inflation og import.
2|Målharmoni|Når en udvikling eller politik bidrager til flere mål på samme tid.|Bedre energieffektivitet kan mindske både omkostninger og miljøbelastning.
2|Betalingsbalance|Et regnskab over et lands økonomiske transaktioner med udlandet. I undervisningen fokuseres ofte på de løbende poster.|Eksport giver indtægter, import giver udgifter. Løbende poster omfatter også bl.a. indkomster og overførsler.
2|Eksport|Salg af varer og tjenester til udlandet.|Danske virksomheders salg til Tyskland er dansk eksport.
2|Import|Køb af varer og tjenester fra udlandet.|En bil fremstillet i Tyskland og købt i Danmark er import.
2|Doughnut-modellen|Raworths model for en økonomi, der opfylder menneskers sociale behov inden for planetens miljømæssige grænser.|Det gode område ligger mellem det sociale fundament og det økologiske loft.
2|Socialt fundament|Doughnut-modellens indre grænse for opfyldelsen af grundlæggende menneskelige behov.|For lidt adgang til mad, bolig eller uddannelse giver sociale mangler.
2|Økologisk loft|Doughnut-modellens ydre grænse for belastningen af planeten.|Overskridelse kan fx være for stor klimabelastning eller tab af biodiversitet.
2|Lille åben økonomi|En økonomi, som handler meget med udlandet og kun i begrænset grad kan påvirke verdensøkonomien.|Danmark påvirkes af efterspørgslen på sine eksportmarkeder.
2|Udlandsformue|Værdien af et lands aktiver i udlandet minus udlandets aktiver i landet, når man taler om nettoformuen.|Et overskud på løbende poster bidrager normalt til at forbedre nettoformuen, men kursændringer spiller også ind.
3|BNP|Værdien af den samlede endelige produktion af varer og tjenester inden for et lands grænser i en periode, normalt et år.|Offentlig undervisning tæller med. Ubetalt madlavning i hjemmet tæller normalt ikke med.
3|BNP pr. indbygger|BNP divideret med befolkningens størrelse.|Et gennemsnit, som ikke viser, hvordan indkomsterne er fordelt, eller hvor godt miljøet har det.
3|Økonomisk kredsløb|En model for strømme af varer, tjenester og penge mellem økonomiens sektorer.|Husholdninger leverer arbejdskraft og modtager løn; virksomheder sælger varer og modtager betaling.
3|Reale strømme|Strømme af varer, tjenester og arbejdsydelser i kredsløbet.|Et frisørklip eller en times arbejde er en real strøm.
3|Pengestrømme|Betalinger mellem økonomiens sektorer.|Løn, skat og betaling for indkøb er pengestrømme.
3|Årets priser|Værdier opgjort med de priser, der gælder i det enkelte år. Kaldes også løbende priser.|En stigning kan skyldes både større mængder og højere priser.
3|Faste priser|Værdier opgjort med korrektion for prisændringer, så mængdeudviklingen kan sammenlignes.|Brug BNP i faste priser, når du vil undersøge real økonomisk vækst.
3|Økonomisk vækst|Stigning i den reale produktion, typisk målt som procentvis ændring i BNP i faste priser.|Et større BNP i årets priser er ikke nok til at bevise real vækst.
3|Indekstal|Tal, der viser udviklingen i forhold til en basisværdi sat til 100.|Indeks = værdi / basisværdi × 100. Fra 100 til 125 er en stigning på 25 %.
3|Forsyningsbalance|En regnskabssammenhæng, hvor samlet tilgang af varer og tjenester er lig samlet anvendelse.|BNP + M = C + I + X. C og I indeholder her både private og offentlige dele.
3|Investeringer|Anskaffelse af kapital til produktion og ændringer i lagre i nationalregnskabet.|En ny maskine tæller. Køb af en eksisterende aktie er ikke en realinvestering i forsyningsbalancen.
3|Lagerinvestering|Ændringen i beholdningen af varer på lager.|Usolgte nyproducerede varer øger lagrene og registreres som investering.
3|Offentligt forbrug|Det offentliges løbende produktion og levering af serviceydelser og varer til borgerne.|Undervisning og hospitalsbehandling er eksempler; dagpenge er en overførsel.
3|Multiplikatorvirkning|At en første efterspørgselsændring skaber afledte ændringer i produktion, indkomst og forbrug.|Flere eksportordrer giver løn, som bruges i butikker, som igen skaber indkomst.
3|Multiplikator|Forholdet mellem den samlede indkomstændring og den oprindelige efterspørgselsændring.|Hvis 3 mia. kr. giver 6 mia. kr. samlet, er multiplikatoren 2. Skat, import og opsparing dæmper virkningen.
3|BNI|BNP plus netto primære indkomster fra udlandet, fx løn, renter og udbytter.|BNP handler om produktion inden for grænserne; BNI korrigerer for indkomster til og fra udlandet.
3|Disponibel BNI|BNI plus netto løbende overførsler fra udlandet.|Overførsler uden en direkte produktionsmæssig modydelse ændrer, hvad landet kan disponere over.
4|Efterspørgsel|Den mængde af en vare, køberne ønsker og kan købe ved forskellige priser.|Når varens egen pris falder, stiger den efterspurgte mængde normalt, alt andet lige.
4|Udbud|Den mængde af en vare, producenterne ønsker at sælge ved forskellige priser.|En højere pris gør det normalt rentabelt at udbyde mere.
4|Ceteris paribus|En antagelse om, at alt andet holdes uændret, mens én faktor undersøges.|Når vi undersøger prisens effekt, holder vi fx indkomst og smag konstante.
4|Efterspørgselsdeterminanter|Forhold, der påvirker efterspørgslen, fx pris, indkomst, smag, forventninger og priser på andre varer.|Stigende indkomst kan flytte efterspørgselskurven for en normal vare mod højre.
4|Bevægelse langs kurven|En ændring i den efterspurgte eller udbudte mængde som følge af varens egen prisændring.|Et prisfald på pizza giver en bevægelse langs efterspørgselskurven for pizza.
4|Kurveforskydning|At hele udbuds- eller efterspørgselskurven flytter, fordi en anden faktor end varens egen pris ændres.|Dyrere råvarer flytter normalt udbudskurven mod venstre.
4|Substitutionsvarer|Varer, der kan erstatte hinanden.|Bliver Pepsi dyrere, kan efterspørgslen efter Coca-Cola stige.
4|Komplementære varer|Varer, der bruges sammen og supplerer hinanden.|Dyrere printere kan mindske efterspørgslen efter printerpatroner.
4|Substitutionseffekt|At en prisændring får forbrugere til at skifte mellem varer, som nu er relativt dyrere eller billigere.|Dyrere oksekød kan få forbrugere til at vælge kylling.
4|Indkomsteffekt|At en prisændring ændrer købekraften og derfor påvirker den efterspurgte mængde.|Når en vare bliver dyrere, rækker et uændret budget kortere.
4|Priselasticitet|Den procentvise ændring i efterspurgt mængde divideret med den procentvise ændring i pris.|Ep = %ΔQ / %ΔP. Ep er normalt negativ. Brug talværdien til at vurdere prisfølsomheden.
4|Priselastisk efterspørgsel|Efterspørgsel, hvor mængden procentvis reagerer mere end prisen ændres: absolut Ep over 1.|Pris +10 % og mængde −20 % giver Ep = −2.
4|Prisuelastisk efterspørgsel|Efterspørgsel, hvor mængden procentvis reagerer mindre end prisen ændres: absolut Ep under 1.|Pris +10 % og mængde −3 % giver Ep = −0,3.
4|Neutralelastisk efterspørgsel|Efterspørgsel, hvor pris og mængde ændres lige meget i procent i modsat retning: Ep = −1.|Pris +10 % og mængde −10 % giver i denne procentberegning Ep = −1.
4|Ligevægtspris|Den pris, hvor den efterspurgte mængde er lig den udbudte mængde.|Findes ved skæringspunktet mellem udbud og efterspørgsel.
4|Efterspørgselsoverskud|En situation, hvor den efterspurgte mængde overstiger den udbudte ved den givne pris.|Typisk ved en pris under ligevægten; der er et opadgående pres på prisen.
4|Udbudsoverskud|En situation, hvor den udbudte mængde overstiger den efterspurgte ved den givne pris.|Typisk ved en pris over ligevægten; der er et nedadgående pres på prisen.
4|Fuldkommen konkurrence|En idealmodel med mange købere og sælgere, ensartede varer og fri konkurrence, hvor den enkelte ikke styrer prisen.|Modellen bygger også på bl.a. gennemsigtighed og fri adgang til markedet.
4|Monopol|En markedssituation med én udbyder på det relevante marked.|Udbyderen har større mulighed for at påvirke prisen, men er stadig begrænset af efterspørgslen.
4|Oligopol|En markedssituation med få store udbydere, som må tage hensyn til hinandens handlinger.|En prisændring hos én stor udbyder kan få konkurrenterne til at reagere.
4|Monopolistisk konkurrence|Mange udbydere sælger produkter, som ligner hinanden, men opleves som forskellige.|Mærke, kvalitet eller beliggenhed kan give en vis mulighed for at påvirke prisen.
4|Markedsøkonomi|En økonomi, hvor udbud, efterspørgsel og priser i høj grad styrer produktion og forbrug.|Virksomheder reagerer på forbrugernes køb og markedspriser.
4|Planøkonomi|En økonomi, hvor centrale myndigheder i høj grad bestemmer produktion og fordeling.|Staten fastlægger centrale dele af, hvad der produceres og i hvilke mængder.
4|Blandingsøkonomi|En økonomi med både markedsmekanismer og offentlig regulering og produktion.|Danmark kombinerer private markeder med en stor offentlig sektor.
5|Disponibel indkomst|Den indkomst, husholdningen har tilbage efter direkte skatter, inklusive relevante indkomstoverførsler.|Det beløb, der kan fordeles mellem forbrug og opsparing.
5|Nominel indkomst|Indkomsten målt i kroner uden korrektion for prisudviklingen.|Løn fra 20.000 til 21.000 kr. er en nominel stigning på 5 %.
5|Realindkomst|Indkomstens købekraft efter korrektion for prisniveauet.|Hvis indkomsten stiger mindre end priserne, falder realindkomsten.
5|Forbrugerprisindeks|Et indeks over prisudviklingen på en repræsentativ kurv af husholdningernes varer og tjenester.|Ændringen i indekset bruges til at måle forbrugerprisinflationen.
5|Realløn|Lønnens købekraft efter korrektion for prisstigninger.|Reallønsindeks = lønindeks / prisindeks × 100.
5|Opsparing|Den del af den disponible indkomst, der ikke bruges på forbrug.|Disponibel indkomst = forbrug + opsparing. Opsparing kan også bruges til at nedbringe gæld.
5|Forbrugskvote|Den andel af den disponible indkomst, der bruges på forbrug.|Forbrug / disponibel indkomst × 100 %. 90.000 ud af 100.000 kr. giver 90 %.
5|Opsparingskvote|Den andel af den disponible indkomst, der spares op.|Opsparing / disponibel indkomst × 100 %. Forbrugs- og opsparingskvote summer til 100 %.
5|Formue|Værdien af en persons aktiver minus gæld, når man taler om nettoformue.|Bolig og bankindestående minus boliglån. Formue er en beholdning; indkomst er en strøm over tid.
5|Indkomstfordeling|Hvordan samfundets indkomster er fordelt mellem personer eller grupper.|Skatter og overførsler kan ændre fordelingen fra markedsindkomst til disponibel indkomst.
5|Lorenzkurve|En kurve over den kumulerede andel af indkomsten, som de kumulerede befolkningsandele modtager, fra fattigst til rigest.|Jo længere kurven ligger under lighedslinjen, desto større er uligheden.
5|Gini-koefficient|Et mål for ulighed, baseret på afstanden mellem Lorenzkurven og den perfekte lighedslinje.|0 betyder fuld lighed. Målet angives enten fra 0 til 1 eller fra 0 til 100.
5|Decil|En tiendedel af en gruppe, typisk befolkningen sorteret efter indkomst.|Den nederste decil er de 10 % med lavest indkomst i opgørelsen.
5|Omfordeling|At skatter, overførsler og offentlige ydelser ændrer fordelingen af økonomiske ressourcer.|Progressiv skat og overførsler reducerer typisk forskelle i disponibel indkomst.
6|Arbejdsstyrke|Personer i beskæftigelse plus arbejdsløse, som står til rådighed for arbejdsmarkedet.|Beskæftigede 2,9 mio. + ledige 0,1 mio. = arbejdsstyrke 3,0 mio.
6|Uden for arbejdsstyrken|Personer, der hverken er beskæftigede eller ledige til rådighed for arbejdsmarkedet.|En pensionist uden arbejde og uden jobsøgning indgår normalt ikke i arbejdsstyrken.
6|Erhvervsfrekvens|Arbejdsstyrken som procentdel af befolkningen i den valgte aldersgruppe.|Arbejdsstyrke / befolkning i aldersgruppen × 100. Kontroller altid aldersafgrænsningen.
6|Beskæftigelsesfrekvens|Beskæftigede som procentdel af befolkningen i den valgte aldersgruppe.|Den adskiller sig fra erhvervsfrekvensen ved ikke at tælle de ledige med i tælleren.
6|Ledighedsprocent|De ledige som procentdel af arbejdsstyrken.|Ledige / arbejdsstyrke × 100. Nævneren er ikke hele befolkningen.
6|Bruttoledighed|Registrerede ledige inklusive relevante jobparate personer i aktivering.|Nettoledighed opgøres uden de aktiverede. Begge bygger på bestemte afgrænsninger.
6|Fuldtidsledige|Et omregnet mål, hvor perioder med delvis ledighed lægges sammen til fuld ledighed.|To personer, som hver er ledige et halvt år, svarer til én fuldtidsledig på årsbasis.
6|Ledighedsberørte|Antallet af forskellige personer, der oplever ledighed i en periode.|En person med én uges ledighed tæller som én berørt, men langt mindre end én fuldtidsledig på årsbasis.
6|Fuld beskæftigelse|En situation med så lav ledighed, at der hovedsageligt er midlertidig ledighed tilbage.|Det betyder ikke nødvendigvis nul ledige. En fast procentgrænse er kun vejledende.
6|Skiftearbejdsløshed|Kortvarig ledighed, mens personer skifter mellem job. Kaldes også friktionsledighed.|En person venter tre uger på at begynde i et nyt job.
6|Hjemsendelsesledighed|Midlertidig ledighed, som afsluttes med genansættelse hos den tidligere arbejdsgiver.|En fabrik mangler råvarer og hjemsender medarbejdere, indtil leverancerne vender tilbage.
6|Sæsonarbejdsløshed|Ledighed, der skyldes tilbagevendende sæsonudsving i aktivitet.|Et sommerhotel har færre ansatte om vinteren.
6|Konjunkturarbejdsløshed|Ledighed som følge af lav samlet efterspørgsel under en økonomisk nedtur.|En krise mindsker salget i mange brancher, og virksomheder fyrer medarbejdere.
6|Strukturarbejdsløshed|Vedvarende ledighed knyttet til mismatch mellem arbejdskraftens kvalifikationer eller placering og de ledige job.|Der mangler elektrikere, mens ledige har andre kvalifikationer.
6|Faglig mobilitet|Muligheden og villigheden til at skifte fag eller arbejdsfunktion.|Efteruddannelse kan gøre det lettere at søge andre typer job.
6|Geografisk mobilitet|Muligheden og villigheden til at flytte eller pendle efter arbejde.|Bedre transport kan gøre det lettere at tage et job i en anden by.
6|Den danske model|En model, hvor arbejdsmarkedets parter i høj grad aftaler løn og arbejdsvilkår gennem kollektive overenskomster.|Fagforeninger og arbejdsgiverorganisationer er centrale. Modellen udelukker ikke lovgivning.
6|Overenskomst|En kollektiv aftale om bl.a. løn og arbejdsvilkår mellem arbejdsmarkedets parter.|Aftalen kan indeholde pension, arbejdstid og lønvilkår.
6|Trepartsforhandlinger|Forhandlinger mellem regeringen, arbejdsgiverne og lønmodtagerne.|De tre parter kan fx aftale en indsats for uddannelse eller arbejdsudbud.
6|Arbejdskraftens frie bevægelighed|Et princip i EU om mulighed for at søge og tage arbejde på tværs af medlemslandene.|Det kan øge mobiliteten og hjælpe med at besætte ledige job.
7|Offentlig sektor|Staten, regionerne, kommunerne og relevante sociale kasser og fonde samt tilknyttede institutioner.|Sektoren leverer service, omfordeler og regulerer økonomien.
7|Overførselsindkomst|En indkomst udbetalt uden direkte levering af en arbejdsydelse som modydelse.|Dagpenge, pension og SU er eksempler. De er ikke i sig selv offentlig produktion.
7|Serviceydelser|Tjenester, som det offentlige leverer til borgere og virksomheder.|Undervisning og sundhedsbehandling er offentlige serviceydelser.
7|Finanslov|Statens budget over forventede indtægter og udgifter for et finansår.|Et budget vedtages på forhånd; et regnskab viser de faktiske indtægter og udgifter bagefter.
7|Direkte skatter|Skatter, der pålægges personer eller virksomheder direkte, fx på indkomst.|Indkomstskat og selskabsskat er eksempler.
7|Indirekte skatter|Skatter og afgifter knyttet til varer og tjenester.|Moms og punktafgifter er eksempler.
7|Progressiv skat|En skat, hvor skatten som andel af indkomsten stiger, når indkomsten stiger.|Højere indkomstgrupper betaler en større procentdel i den betragtede skat.
7|Proportional skat|En skat, som udgør samme andel af indkomsten uanset indkomstens størrelse.|20 % af 100.000 er 20.000; 20 % af 200.000 er 40.000.
7|Degressiv skat|En skat, hvor belastningen som andel af indkomsten falder, når indkomsten stiger.|En ens afgift i kroner fylder relativt mere i et lavt end i et højt budget.
7|Moms|En indirekte skat på omsætning af varer og tjenester, teknisk opkrævet på merværdien gennem produktionskæden.|Ved et regneeksempel med 25 % moms bliver 100 kr. uden moms til 125 kr. med moms.
7|Grønne afgifter|Afgifter, der bl.a. skal gøre miljøbelastende forbrug eller produktion dyrere.|En CO₂-afgift giver et økonomisk incitament til at udlede mindre.
7|Skattetryk|De samlede skatter og afgifter som procentdel af BNP.|Skatter / BNP × 100. Det er ikke det samme som den enkelte borgers skatteprocent.
7|Universelle ydelser|Velfærdsydelser, som brede grupper har adgang til efter generelle regler, uafhængigt af private forsikringsbidrag.|Den danske model bygger i høj grad på skattefinansieret adgang til bl.a. sundhed og uddannelse.
7|Dansk velfærdsmodel|En overvejende universel og skattefinansieret model med omfattende offentlig service og omfordeling.|Højere skattefinansiering muliggør fælles adgang til en række velfærdsydelser.
7|Forsørgerbyrde|Forholdet mellem dem, der skal forsørges, og dem, der bidrager til forsørgelsen, med en nærmere valgt afgrænsning.|Flere ældre i forhold til erhvervsaktive kan lægge pres på offentlige udgifter og finansiering.
7|Konkurrencestat|Et syn på staten, hvor institutioner og politik indrettes for at styrke landets konkurrenceevne i en global økonomi.|Uddannelse, effektivitet og arbejdsudbud bliver centrale politiske fokusområder.
7|Offentlig saldo|Den samlede offentlige sektors indtægter minus udgifter i en periode.|Positiv saldo er overskud. Negativ saldo er underskud. Saldo er en strøm, gæld er en beholdning.
7|Strukturel saldo|Et beregnet mål for den offentlige saldo korrigeret for konjunkturer og midlertidige forhold.|Den søger at vise den underliggende balance frem for årets midlertidige udsving.
7|Statsgæld|Statens udestående gældsforpligtelser på et tidspunkt.|Underskud kan øge gælden, men et års underskud er ikke det samme som den samlede gæld.
7|Statsobligation|Et gældsbevis, som staten udsteder for at låne penge.|Køberen låner staten penge mod vilkår om bl.a. rente og tilbagebetaling.
7|DAU-saldo|Statens driftsindtægter minus drifts-, anlægs- og udlånsudgifter.|Et af materialets begreber til opgørelse af statsfinanserne; det afgrænses anderledes end kassesaldoen.
7|Kassesaldo|Et mål for statens samlede finansieringsbehov efter inddragelse af kapitalposter.|Afdrag på statsgæld kan gøre kassebehovet forskelligt fra DAU-saldoen.
7|EU's finanspolitiske rammer|Fælles rammer for medlemslandenes offentlige finanser, som bl.a. omhandler underskud og gæld.|I materialet omtales bl.a. en referenceværdi for offentligt underskud på 3 % af BNP. Skeln mellem faktisk og strukturel saldo.`;
const concepts=raw.split('\n').map((r,id)=>{const [ch,term,def,example]=r.split('|');return {id,ch:+ch,term,def,example}});
const scenarioRaw=`1|Hvad sker der typisk med ledigheden under en lavkonjunktur?|Den stiger|Den falder altid til nul|Den er uafhængig af produktionen|Den bliver negativ|Lavere efterspørgsel får virksomheder til at reducere produktion og ansættelser.
1|Hvorfor kan højere renter dæmpe efterspørgslen?|Lån bliver dyrere|Alle varer bliver straks billigere|Lønnen falder automatisk|Eksporten forsvinder|Dyrere finansiering kan mindske forbrug og investeringer.
1|Hvorfor ramte corona både udbud og efterspørgsel?|Nedlukning hæmmede produktion, og usikkerhed dæmpede køb|Priserne var fastlåst i alle lande|Alle banker lukkede permanent|Alle husholdninger øgede deres køb|Produktionsstop var et udbudsstød; færre køb var et efterspørgselsstød.
1|Hvordan kan en krise i Tyskland ramme Danmark?|Tysk efterspørgsel efter dansk eksport falder|Dansk eksport stiger nødvendigvis|Danmarks BNP er altid uændret|Dansk import bliver til skat|Landene forbindes gennem handel og efterspørgsel.
2|Hvilket eksempel viser en målkonflikt?|Mere efterspørgsel sænker ledighed, men øger importen|Mindre forurening og bedre sundhed|Større produktion med samme ressourcer|En forbedring af to mål samtidig|Beskæftigelsen forbedres, mens betalingsbalancen kan blive belastet, alt andet lige.
2|Hvad er målet i doughnut-modellen?|Sociale behov opfyldes inden for planetens grænser|BNP skal maksimeres uanset miljø|Alle lande skal have samme indkomst|Alt privat forbrug skal ophøre|Det sikre område ligger mellem socialt fundament og økologisk loft.
2|Hvilken transaktion er dansk eksport?|En dansk virksomhed sælger rådgivning til Sverige|En dansker køber en tysk bil|En dansk butik køber sko fra Italien|En dansker køber en lokal frisørklipning|Tjenester solgt til udlandet er også eksport.
3|BNP stiger fra 200 til 210 i faste priser. Hvad er væksten?|5 %|10 %|2 %|105 %|(210 − 200) / 200 × 100 = 5 %.
3|En værdi stiger fra 400 til 500. Hvad bliver indekset med 400 som basis?|125|120|80|150|500 / 400 × 100 = 125.
3|BNP er 1.000 og import 300. Forbrug er 800 og investering 200. Hvad er eksporten?|300|100|500|1.300|BNP + M = C + I + X. 1.300 = 1.000 + X, så X = 300.
3|En første efterspørgselsstigning på 4 giver samlet indkomststigning på 10. Hvad er multiplikatoren?|2,5|0,4|6|14|Multiplikator = samlet ændring / første ændring = 10 / 4.
3|Hvad dæmper den indenlandske multiplikatorvirkning?|Mere opsparing, skat og import|At alle bruger mere på danske varer|At flere får indenlandsk indkomst|At eksportordrer skaber løn|Disse lækager mindsker den efterspørgsel, der sendes videre til dansk produktion.
3|Hvorfor er BNP pr. indbygger et ufuldstændigt velfærdsmål?|Det skjuler fordeling og måler ikke alle sider af livskvalitet|Det tæller aldrig offentlig produktion|Det måler kun virksomhedernes gæld|Det er altid lig alle borgeres løn|Gennemsnittet viser ikke ulighed, miljøbelastning eller trivsel.
3|Hvilken post er offentligt forbrug?|Løn til lærere for undervisning|SU til en elev|Udbetaling af dagpenge|Køb af en eksisterende aktie|Undervisning er produktion; SU og dagpenge er overførsler.
4|Højere indkomst øger efterspørgslen efter en normal vare. Hvad sker der med kurven?|Den flytter mod højre|Man bevæger sig kun langs kurven|Den flytter mod venstre|Udbudskurven bliver lodret|Der efterspørges mere ved enhver given pris, alt andet lige.
4|Prisen på varen selv falder. Hvad viser efterspørgselsmodellen?|Bevægelse langs efterspørgselskurven|Hele efterspørgselskurven flytter altid|Udbuddet er nødvendigvis nul|Alle andre priser falder|Varens egen pris ændrer placeringen på kurven, når øvrige forhold holdes konstante.
4|Råvarer bliver dyrere. Hvad sker der typisk med udbuddet?|Kurven flytter mod venstre|Kurven flytter mod højre|Efterspørgslen bliver nul|Prisen kan aldrig ændres|Ved samme salgspris er det mindre rentabelt at udbyde varen.
4|Prisen stiger 10 %, og efterspurgt mængde falder 20 %. Hvad er Ep?|−2|−0,5|2,5|−10|Ep = −20 % / 10 % = −2. Efterspørgslen er elastisk.
4|Prisen er under ligevægtsprisen. Hvad opstår typisk?|Efterspørgselsoverskud|Udbudsoverskud|Perfekt balance|Ingen efterspørgsel|Køberne ønsker mere, end sælgerne vil udbyde ved denne pris.
4|Efterspørgslen stiger, mens udbudskurven er uændret og stigende. Hvad sker der?|Ligevægtspris og mængde stiger|Begge falder|Prisen falder og mængden stiger|Mængden er altid uændret|En højreforskydning af efterspørgslen giver et nyt skæringspunkt længere oppe ad udbudskurven.
5|Lønindeks er 110 og prisindeks 105. Hvad er reallønsindekset afrundet?|104,8|115|95,5|5|110 / 105 × 100 ≈ 104,8. Købekraften er ca. 4,8 % over basisåret.
5|Disponibel indkomst er 200.000, og forbrug er 180.000. Hvad er opsparingskvoten?|10 %|90 %|20 %|110 %|Opsparingen er 20.000. 20.000 / 200.000 × 100 = 10 %.
5|Hvad betyder en stigning i Gini fra 0,25 til 0,30?|Større indkomstulighed|Mindre indkomstulighed|Lavere BNP med 5 %|Fuld lighed|Et højere Gini-tal betyder større ulighed i den valgte indkomstfordeling.
5|Hvilket udsagn skelner korrekt mellem indkomst og formue?|Indkomst måles over en periode, formue på et tidspunkt|Indkomst og formue er altid identiske|Formue er kun månedsløn|Indkomst er altid værdien af en bolig|Løn er fx en indkomststrøm, mens nettoformue er aktiver minus gæld på et tidspunkt.
6|Der er 2,8 mio. beskæftigede og 0,2 mio. ledige. Hvor stor er arbejdsstyrken?|3,0 mio.|2,6 mio.|2,8 mio.|0,2 mio.|Arbejdsstyrke = beskæftigede + ledige til rådighed.
6|100.000 er ledige i en arbejdsstyrke på 2.500.000. Hvad er ledighedsprocenten?|4 %|2,5 %|25 %|0,4 %|100.000 / 2.500.000 × 100 = 4 %.
6|Fire personer er hver ledige i tre måneder. Hvor mange fuldtidsledige svarer det til på et år?|1|4|12|0,25|4 × 3 måneder = 12 ledighedsmåneder = ét helt år.
6|Et sommerhotel afskediger ansatte om vinteren. Hvilken type ledighed er det?|Sæsonarbejdsløshed|Skiftearbejdsløshed|Konjunkturarbejdsløshed som eneste mulighed|Ingen ledighed|Faldet skyldes en tilbagevendende sæson i efterspørgslen.
6|Virksomheder mangler faglærte, mens ledige mangler uddannelsen. Hvad er problemet?|Strukturelt mismatch|Kun en for høj samlet efterspørgsel|Fuld faglig mobilitet|Et eksportoverskud|Kvalifikationerne hos de ledige matcher ikke de ubesatte job.
6|Hvem indgår i trepartsforhandlinger?|Regering, arbejdsgivere og lønmodtagere|Staten, regionerne og kommunerne|Banker, kunder og aktionærer|EU, USA og Kina|Trepartsforhandlinger samler staten og arbejdsmarkedets to parter.
7|Skatter er 450 og BNP er 1.000. Hvad er skattetrykket?|45 %|55 %|4,5 %|450 %|450 / 1.000 × 100 = 45 %. Det er et samlet samfundsmål.
7|Indtægter er 1.000 og udgifter 1.050. Hvad er den offentlige saldo?|−50|50|2.050|1.050|Indtægter minus udgifter: 1.000 − 1.050 = −50, altså underskud.
7|En vare koster 800 kr. uden moms. Med en momssats på 25 % bliver prisen?|1.000 kr.|825 kr.|960 kr.|600 kr.|800 × 1,25 = 1.000. Momsen i eksemplet er 200 kr.
7|Hvilken skat har stigende skatteandel ved stigende indkomst?|Progressiv skat|Proportional skat|Degressiv skat|Alle skatter uanset udformning|Progression handler om en stigende andel, ikke kun flere kroner.
7|Hvordan påvirker en lavkonjunktur typisk de offentlige finanser?|Færre skatteindtægter og flere udgifter til ledighed|Flere skatteindtægter og færre dagpenge|Saldoen er pr. definition uændret|Statsgælden forsvinder|Lavere aktivitet reducerer skattebaserne, og ledighed øger visse overførsler.
7|Hvorfor kan flere ældre presse velfærdsfinansieringen?|Udgifter til pension og pleje kan vokse i forhold til skattebasen|Alle skatter bliver automatisk nul|Offentlig service bliver gratis at producere|Der bliver nødvendigvis flere erhvervsaktive|Befolkningssammensætningen påvirker forholdet mellem indtægter og udgifter.
7|Hvad skelner strukturel saldo fra faktisk saldo?|Der korrigeres for konjunkturer og midlertidige forhold|Alle offentlige udgifter fjernes|Den viser kun statens kontantbeholdning|Den er altid lig statsgælden|Strukturel saldo er et beregnet udtryk for den underliggende balance.`;
const scenarios=scenarioRaw.split('\n').map((s,i)=>{const [ch,q,a,b,c,d,explain]=s.split('|');return {id:'s'+i,ch:+ch,q,options:[a,b,c,d],correct:a,explain}});

// Faste forklaringer til alle begrebsspørgsmål. Hvert spørgsmål kopierer sin forklaring herfra.
const conceptExplanations={
  "0": {
    "explain": "En periode med høj økonomisk aktivitet, relativt stærk vækst og typisk faldende ledighed. Virksomheder får flere ordrer og ansætter flere. Import og pres på priserne kan stige.",
    "term": "Højkonjunktur"
  },
  "1": {
    "explain": "En periode med svag økonomisk aktivitet, lav eller negativ vækst og typisk stigende ledighed. Færre køb giver færre ordrer og flere fyringer.",
    "term": "Lavkonjunktur"
  },
  "2": {
    "explain": "En økonomisk tilbagegang. En ofte brugt teknisk definition er fald i realt BNP i to kvartaler i træk. Recession er en mere specifik betegnelse end en almindelig vækstafmatning.",
    "term": "Recession"
  },
  "3": {
    "explain": "En særlig dyb og langvarig økonomisk krise. En kort nedtur er ikke automatisk en depression.",
    "term": "Depression"
  },
  "4": {
    "explain": "Økonomiens langsigtede underliggende vækstrate. Væksten svinger omkring trenden. Faste procentgrænser for højkonjunktur er kun tommelfingerregler.",
    "term": "Trendvækst"
  },
  "5": {
    "explain": "Hvor meget der produceres pr. enhed af en indsats, fx pr. arbejdstime. Bedre uddannelse og maskiner kan give mere produktion uden flere arbejdstimer.",
    "term": "Produktivitet"
  },
  "6": {
    "explain": "At landenes økonomier bliver tættere forbundet gennem bl.a. handel, kapital og arbejdskraft. En krise hos en handelspartner kan mindske dansk eksport.",
    "term": "Globalisering"
  },
  "7": {
    "explain": "Krisen i 2007–2009, hvor problemer på bolig- og kreditmarkederne bredte sig til banker og realøkonomien. Banktab og mindre udlån var med til at sænke investeringer, forbrug og beskæftigelse.",
    "term": "Finanskrisen"
  },
  "8": {
    "explain": "Boliglån til låntagere med svag kreditværdighed, særligt kendt fra USA før finanskrisen. Når mange ikke kunne betale, fik långiverne store tab.",
    "term": "Subprimelån"
  },
  "9": {
    "explain": "Når boligpriser presses op til et skrøbeligt niveau af bl.a. forventninger om fortsatte prisstigninger. Når boblen brister, kan faldende formuer og tab ramme forbrug og banker.",
    "term": "Boligboble"
  },
  "10": {
    "explain": "Gælds- og finansieringskrisen i flere eurolande i årene efter finanskrisen. Fælles valuta betød, at landene ikke selv kunne devaluere deres valuta.",
    "term": "Eurokrisen"
  },
  "11": {
    "explain": "En krise, hvor produktionen og leverancerne hæmmes. Nedlukninger under corona forhindrede virksomheder i at producere.",
    "term": "Udbudskrise"
  },
  "12": {
    "explain": "En krise, hvor det samlede ønske om at købe varer og tjenester falder. Usikre husholdninger sparer mere op, og virksomheder sælger mindre.",
    "term": "Efterspørgselskrise"
  },
  "13": {
    "explain": "En generel stigning i priserne på varer og tjenester over tid. Dyrere energi kan løfte mange priser. En enkelt dyrere vare er ikke i sig selv generel inflation.",
    "term": "Inflation"
  },
  "14": {
    "explain": "Prisen for at låne penge, normalt angivet i procent pr. år. Højere renter kan dæmpe lånefinansieret forbrug og investeringer.",
    "term": "Rente"
  },
  "15": {
    "explain": "Ønskede resultater for økonomien: beskæftigelse, betalingsbalance, vækst, stabile priser, social udligning og miljøhensyn. Målene skal afvejes, fordi en politik kan forbedre ét mål og forværre et andet.",
    "term": "Samfundsøkonomiske mål"
  },
  "16": {
    "explain": "Når forbedring af ét økonomisk mål gør det sværere at opfylde et andet. Større efterspørgsel kan mindske ledighed, men samtidig øge inflation og import.",
    "term": "Målkonflikt"
  },
  "17": {
    "explain": "Når en udvikling eller politik bidrager til flere mål på samme tid. Bedre energieffektivitet kan mindske både omkostninger og miljøbelastning.",
    "term": "Målharmoni"
  },
  "18": {
    "explain": "Et regnskab over et lands økonomiske transaktioner med udlandet. I undervisningen fokuseres ofte på de løbende poster. Eksport giver indtægter, import giver udgifter. Løbende poster omfatter også bl.a. indkomster og overførsler.",
    "term": "Betalingsbalance"
  },
  "19": {
    "explain": "Salg af varer og tjenester til udlandet. Danske virksomheders salg til Tyskland er dansk eksport.",
    "term": "Eksport"
  },
  "20": {
    "explain": "Køb af varer og tjenester fra udlandet. En bil fremstillet i Tyskland og købt i Danmark er import.",
    "term": "Import"
  },
  "21": {
    "explain": "Raworths model for en økonomi, der opfylder menneskers sociale behov inden for planetens miljømæssige grænser. Det gode område ligger mellem det sociale fundament og det økologiske loft.",
    "term": "Doughnut-modellen"
  },
  "22": {
    "explain": "Doughnut-modellens indre grænse for opfyldelsen af grundlæggende menneskelige behov. For lidt adgang til mad, bolig eller uddannelse giver sociale mangler.",
    "term": "Socialt fundament"
  },
  "23": {
    "explain": "Doughnut-modellens ydre grænse for belastningen af planeten. Overskridelse kan fx være for stor klimabelastning eller tab af biodiversitet.",
    "term": "Økologisk loft"
  },
  "24": {
    "explain": "En økonomi, som handler meget med udlandet og kun i begrænset grad kan påvirke verdensøkonomien. Danmark påvirkes af efterspørgslen på sine eksportmarkeder.",
    "term": "Lille åben økonomi"
  },
  "25": {
    "explain": "Værdien af et lands aktiver i udlandet minus udlandets aktiver i landet, når man taler om nettoformuen. Et overskud på løbende poster bidrager normalt til at forbedre nettoformuen, men kursændringer spiller også ind.",
    "term": "Udlandsformue"
  },
  "26": {
    "explain": "Værdien af den samlede endelige produktion af varer og tjenester inden for et lands grænser i en periode, normalt et år. Offentlig undervisning tæller med. Ubetalt madlavning i hjemmet tæller normalt ikke med.",
    "term": "BNP"
  },
  "27": {
    "explain": "BNP divideret med befolkningens størrelse. Et gennemsnit, som ikke viser, hvordan indkomsterne er fordelt, eller hvor godt miljøet har det.",
    "term": "BNP pr. indbygger"
  },
  "28": {
    "explain": "En model for strømme af varer, tjenester og penge mellem økonomiens sektorer. Husholdninger leverer arbejdskraft og modtager løn; virksomheder sælger varer og modtager betaling.",
    "term": "Økonomisk kredsløb"
  },
  "29": {
    "explain": "Strømme af varer, tjenester og arbejdsydelser i kredsløbet. Et frisørklip eller en times arbejde er en real strøm.",
    "term": "Reale strømme"
  },
  "30": {
    "explain": "Betalinger mellem økonomiens sektorer. Løn, skat og betaling for indkøb er pengestrømme.",
    "term": "Pengestrømme"
  },
  "31": {
    "explain": "Værdier opgjort med de priser, der gælder i det enkelte år. Kaldes også løbende priser. En stigning kan skyldes både større mængder og højere priser.",
    "term": "Årets priser"
  },
  "32": {
    "explain": "Værdier opgjort med korrektion for prisændringer, så mængdeudviklingen kan sammenlignes. Brug BNP i faste priser, når du vil undersøge real økonomisk vækst.",
    "term": "Faste priser"
  },
  "33": {
    "explain": "Stigning i den reale produktion, typisk målt som procentvis ændring i BNP i faste priser. Et større BNP i årets priser er ikke nok til at bevise real vækst.",
    "term": "Økonomisk vækst"
  },
  "34": {
    "explain": "Tal, der viser udviklingen i forhold til en basisværdi sat til 100. Indeks = værdi / basisværdi × 100. Fra 100 til 125 er en stigning på 25 %.",
    "term": "Indekstal"
  },
  "35": {
    "explain": "En regnskabssammenhæng, hvor samlet tilgang af varer og tjenester er lig samlet anvendelse. BNP + M = C + I + X. C og I indeholder her både private og offentlige dele.",
    "term": "Forsyningsbalance"
  },
  "36": {
    "explain": "Anskaffelse af kapital til produktion og ændringer i lagre i nationalregnskabet. En ny maskine tæller. Køb af en eksisterende aktie er ikke en realinvestering i forsyningsbalancen.",
    "term": "Investeringer"
  },
  "37": {
    "explain": "Ændringen i beholdningen af varer på lager. Usolgte nyproducerede varer øger lagrene og registreres som investering.",
    "term": "Lagerinvestering"
  },
  "38": {
    "explain": "Det offentliges løbende produktion og levering af serviceydelser og varer til borgerne. Undervisning og hospitalsbehandling er eksempler; dagpenge er en overførsel.",
    "term": "Offentligt forbrug"
  },
  "39": {
    "explain": "At en første efterspørgselsændring skaber afledte ændringer i produktion, indkomst og forbrug. Flere eksportordrer giver løn, som bruges i butikker, som igen skaber indkomst.",
    "term": "Multiplikatorvirkning"
  },
  "40": {
    "explain": "Forholdet mellem den samlede indkomstændring og den oprindelige efterspørgselsændring. Hvis 3 mia. kr. giver 6 mia. kr. samlet, er multiplikatoren 2. Skat, import og opsparing dæmper virkningen.",
    "term": "Multiplikator"
  },
  "41": {
    "explain": "BNP plus netto primære indkomster fra udlandet, fx løn, renter og udbytter. BNP handler om produktion inden for grænserne; BNI korrigerer for indkomster til og fra udlandet.",
    "term": "BNI"
  },
  "42": {
    "explain": "BNI plus netto løbende overførsler fra udlandet. Overførsler uden en direkte produktionsmæssig modydelse ændrer, hvad landet kan disponere over.",
    "term": "Disponibel BNI"
  },
  "43": {
    "explain": "Den mængde af en vare, køberne ønsker og kan købe ved forskellige priser. Når varens egen pris falder, stiger den efterspurgte mængde normalt, alt andet lige.",
    "term": "Efterspørgsel"
  },
  "44": {
    "explain": "Den mængde af en vare, producenterne ønsker at sælge ved forskellige priser. En højere pris gør det normalt rentabelt at udbyde mere.",
    "term": "Udbud"
  },
  "45": {
    "explain": "En antagelse om, at alt andet holdes uændret, mens én faktor undersøges. Når vi undersøger prisens effekt, holder vi fx indkomst og smag konstante.",
    "term": "Ceteris paribus"
  },
  "46": {
    "explain": "Forhold, der påvirker efterspørgslen, fx pris, indkomst, smag, forventninger og priser på andre varer. Stigende indkomst kan flytte efterspørgselskurven for en normal vare mod højre.",
    "term": "Efterspørgselsdeterminanter"
  },
  "47": {
    "explain": "En ændring i den efterspurgte eller udbudte mængde som følge af varens egen prisændring. Et prisfald på pizza giver en bevægelse langs efterspørgselskurven for pizza.",
    "term": "Bevægelse langs kurven"
  },
  "48": {
    "explain": "At hele udbuds- eller efterspørgselskurven flytter, fordi en anden faktor end varens egen pris ændres. Dyrere råvarer flytter normalt udbudskurven mod venstre.",
    "term": "Kurveforskydning"
  },
  "49": {
    "explain": "Varer, der kan erstatte hinanden. Bliver Pepsi dyrere, kan efterspørgslen efter Coca-Cola stige.",
    "term": "Substitutionsvarer"
  },
  "50": {
    "explain": "Varer, der bruges sammen og supplerer hinanden. Dyrere printere kan mindske efterspørgslen efter printerpatroner.",
    "term": "Komplementære varer"
  },
  "51": {
    "explain": "At en prisændring får forbrugere til at skifte mellem varer, som nu er relativt dyrere eller billigere. Dyrere oksekød kan få forbrugere til at vælge kylling.",
    "term": "Substitutionseffekt"
  },
  "52": {
    "explain": "At en prisændring ændrer købekraften og derfor påvirker den efterspurgte mængde. Når en vare bliver dyrere, rækker et uændret budget kortere.",
    "term": "Indkomsteffekt"
  },
  "53": {
    "explain": "Den procentvise ændring i efterspurgt mængde divideret med den procentvise ændring i pris. Ep = %ΔQ / %ΔP. Ep er normalt negativ. Brug talværdien til at vurdere prisfølsomheden.",
    "term": "Priselasticitet"
  },
  "54": {
    "explain": "Efterspørgsel, hvor mængden procentvis reagerer mere end prisen ændres: absolut Ep over 1. Pris +10 % og mængde −20 % giver Ep = −2.",
    "term": "Priselastisk efterspørgsel"
  },
  "55": {
    "explain": "Efterspørgsel, hvor mængden procentvis reagerer mindre end prisen ændres: absolut Ep under 1. Pris +10 % og mængde −3 % giver Ep = −0,3.",
    "term": "Prisuelastisk efterspørgsel"
  },
  "56": {
    "explain": "Efterspørgsel, hvor pris og mængde ændres lige meget i procent i modsat retning: Ep = −1. Pris +10 % og mængde −10 % giver i denne procentberegning Ep = −1.",
    "term": "Neutralelastisk efterspørgsel"
  },
  "57": {
    "explain": "Den pris, hvor den efterspurgte mængde er lig den udbudte mængde. Findes ved skæringspunktet mellem udbud og efterspørgsel.",
    "term": "Ligevægtspris"
  },
  "58": {
    "explain": "En situation, hvor den efterspurgte mængde overstiger den udbudte ved den givne pris. Typisk ved en pris under ligevægten; der er et opadgående pres på prisen.",
    "term": "Efterspørgselsoverskud"
  },
  "59": {
    "explain": "En situation, hvor den udbudte mængde overstiger den efterspurgte ved den givne pris. Typisk ved en pris over ligevægten; der er et nedadgående pres på prisen.",
    "term": "Udbudsoverskud"
  },
  "60": {
    "explain": "En idealmodel med mange købere og sælgere, ensartede varer og fri konkurrence, hvor den enkelte ikke styrer prisen. Modellen bygger også på bl.a. gennemsigtighed og fri adgang til markedet.",
    "term": "Fuldkommen konkurrence"
  },
  "61": {
    "explain": "En markedssituation med én udbyder på det relevante marked. Udbyderen har større mulighed for at påvirke prisen, men er stadig begrænset af efterspørgslen.",
    "term": "Monopol"
  },
  "62": {
    "explain": "En markedssituation med få store udbydere, som må tage hensyn til hinandens handlinger. En prisændring hos én stor udbyder kan få konkurrenterne til at reagere.",
    "term": "Oligopol"
  },
  "63": {
    "explain": "Mange udbydere sælger produkter, som ligner hinanden, men opleves som forskellige. Mærke, kvalitet eller beliggenhed kan give en vis mulighed for at påvirke prisen.",
    "term": "Monopolistisk konkurrence"
  },
  "64": {
    "explain": "En økonomi, hvor udbud, efterspørgsel og priser i høj grad styrer produktion og forbrug. Virksomheder reagerer på forbrugernes køb og markedspriser.",
    "term": "Markedsøkonomi"
  },
  "65": {
    "explain": "En økonomi, hvor centrale myndigheder i høj grad bestemmer produktion og fordeling. Staten fastlægger centrale dele af, hvad der produceres og i hvilke mængder.",
    "term": "Planøkonomi"
  },
  "66": {
    "explain": "En økonomi med både markedsmekanismer og offentlig regulering og produktion. Danmark kombinerer private markeder med en stor offentlig sektor.",
    "term": "Blandingsøkonomi"
  },
  "67": {
    "explain": "Den indkomst, husholdningen har tilbage efter direkte skatter, inklusive relevante indkomstoverførsler. Det beløb, der kan fordeles mellem forbrug og opsparing.",
    "term": "Disponibel indkomst"
  },
  "68": {
    "explain": "Indkomsten målt i kroner uden korrektion for prisudviklingen. Løn fra 20.000 til 21.000 kr. er en nominel stigning på 5 %.",
    "term": "Nominel indkomst"
  },
  "69": {
    "explain": "Indkomstens købekraft efter korrektion for prisniveauet. Hvis indkomsten stiger mindre end priserne, falder realindkomsten.",
    "term": "Realindkomst"
  },
  "70": {
    "explain": "Et indeks over prisudviklingen på en repræsentativ kurv af husholdningernes varer og tjenester. Ændringen i indekset bruges til at måle forbrugerprisinflationen.",
    "term": "Forbrugerprisindeks"
  },
  "71": {
    "explain": "Lønnens købekraft efter korrektion for prisstigninger. Reallønsindeks = lønindeks / prisindeks × 100.",
    "term": "Realløn"
  },
  "72": {
    "explain": "Den del af den disponible indkomst, der ikke bruges på forbrug. Disponibel indkomst = forbrug + opsparing. Opsparing kan også bruges til at nedbringe gæld.",
    "term": "Opsparing"
  },
  "73": {
    "explain": "Den andel af den disponible indkomst, der bruges på forbrug. Forbrug / disponibel indkomst × 100 %. 90.000 ud af 100.000 kr. giver 90 %.",
    "term": "Forbrugskvote"
  },
  "74": {
    "explain": "Den andel af den disponible indkomst, der spares op. Opsparing / disponibel indkomst × 100 %. Forbrugs- og opsparingskvote summer til 100 %.",
    "term": "Opsparingskvote"
  },
  "75": {
    "explain": "Værdien af en persons aktiver minus gæld, når man taler om nettoformue. Bolig og bankindestående minus boliglån. Formue er en beholdning; indkomst er en strøm over tid.",
    "term": "Formue"
  },
  "76": {
    "explain": "Hvordan samfundets indkomster er fordelt mellem personer eller grupper. Skatter og overførsler kan ændre fordelingen fra markedsindkomst til disponibel indkomst.",
    "term": "Indkomstfordeling"
  },
  "77": {
    "explain": "En kurve over den kumulerede andel af indkomsten, som de kumulerede befolkningsandele modtager, fra fattigst til rigest. Jo længere kurven ligger under lighedslinjen, desto større er uligheden.",
    "term": "Lorenzkurve"
  },
  "78": {
    "explain": "Et mål for ulighed, baseret på afstanden mellem Lorenzkurven og den perfekte lighedslinje. 0 betyder fuld lighed. Målet angives enten fra 0 til 1 eller fra 0 til 100.",
    "term": "Gini-koefficient"
  },
  "79": {
    "explain": "En tiendedel af en gruppe, typisk befolkningen sorteret efter indkomst. Den nederste decil er de 10 % med lavest indkomst i opgørelsen.",
    "term": "Decil"
  },
  "80": {
    "explain": "At skatter, overførsler og offentlige ydelser ændrer fordelingen af økonomiske ressourcer. Progressiv skat og overførsler reducerer typisk forskelle i disponibel indkomst.",
    "term": "Omfordeling"
  },
  "81": {
    "explain": "Personer i beskæftigelse plus arbejdsløse, som står til rådighed for arbejdsmarkedet. Beskæftigede 2,9 mio. + ledige 0,1 mio. = arbejdsstyrke 3,0 mio.",
    "term": "Arbejdsstyrke"
  },
  "82": {
    "explain": "Personer, der hverken er beskæftigede eller ledige til rådighed for arbejdsmarkedet. En pensionist uden arbejde og uden jobsøgning indgår normalt ikke i arbejdsstyrken.",
    "term": "Uden for arbejdsstyrken"
  },
  "83": {
    "explain": "Arbejdsstyrken som procentdel af befolkningen i den valgte aldersgruppe. Arbejdsstyrke / befolkning i aldersgruppen × 100. Kontroller altid aldersafgrænsningen.",
    "term": "Erhvervsfrekvens"
  },
  "84": {
    "explain": "Beskæftigede som procentdel af befolkningen i den valgte aldersgruppe. Den adskiller sig fra erhvervsfrekvensen ved ikke at tælle de ledige med i tælleren.",
    "term": "Beskæftigelsesfrekvens"
  },
  "85": {
    "explain": "De ledige som procentdel af arbejdsstyrken. Ledige / arbejdsstyrke × 100. Nævneren er ikke hele befolkningen.",
    "term": "Ledighedsprocent"
  },
  "86": {
    "explain": "Registrerede ledige inklusive relevante jobparate personer i aktivering. Nettoledighed opgøres uden de aktiverede. Begge bygger på bestemte afgrænsninger.",
    "term": "Bruttoledighed"
  },
  "87": {
    "explain": "Et omregnet mål, hvor perioder med delvis ledighed lægges sammen til fuld ledighed. To personer, som hver er ledige et halvt år, svarer til én fuldtidsledig på årsbasis.",
    "term": "Fuldtidsledige"
  },
  "88": {
    "explain": "Antallet af forskellige personer, der oplever ledighed i en periode. En person med én uges ledighed tæller som én berørt, men langt mindre end én fuldtidsledig på årsbasis.",
    "term": "Ledighedsberørte"
  },
  "89": {
    "explain": "En situation med så lav ledighed, at der hovedsageligt er midlertidig ledighed tilbage. Det betyder ikke nødvendigvis nul ledige. En fast procentgrænse er kun vejledende.",
    "term": "Fuld beskæftigelse"
  },
  "90": {
    "explain": "Kortvarig ledighed, mens personer skifter mellem job. Kaldes også friktionsledighed. En person venter tre uger på at begynde i et nyt job.",
    "term": "Skiftearbejdsløshed"
  },
  "91": {
    "explain": "Midlertidig ledighed, som afsluttes med genansættelse hos den tidligere arbejdsgiver. En fabrik mangler råvarer og hjemsender medarbejdere, indtil leverancerne vender tilbage.",
    "term": "Hjemsendelsesledighed"
  },
  "92": {
    "explain": "Ledighed, der skyldes tilbagevendende sæsonudsving i aktivitet. Et sommerhotel har færre ansatte om vinteren.",
    "term": "Sæsonarbejdsløshed"
  },
  "93": {
    "explain": "Ledighed som følge af lav samlet efterspørgsel under en økonomisk nedtur. En krise mindsker salget i mange brancher, og virksomheder fyrer medarbejdere.",
    "term": "Konjunkturarbejdsløshed"
  },
  "94": {
    "explain": "Vedvarende ledighed knyttet til mismatch mellem arbejdskraftens kvalifikationer eller placering og de ledige job. Der mangler elektrikere, mens ledige har andre kvalifikationer.",
    "term": "Strukturarbejdsløshed"
  },
  "95": {
    "explain": "Muligheden og villigheden til at skifte fag eller arbejdsfunktion. Efteruddannelse kan gøre det lettere at søge andre typer job.",
    "term": "Faglig mobilitet"
  },
  "96": {
    "explain": "Muligheden og villigheden til at flytte eller pendle efter arbejde. Bedre transport kan gøre det lettere at tage et job i en anden by.",
    "term": "Geografisk mobilitet"
  },
  "97": {
    "explain": "En model, hvor arbejdsmarkedets parter i høj grad aftaler løn og arbejdsvilkår gennem kollektive overenskomster. Fagforeninger og arbejdsgiverorganisationer er centrale. Modellen udelukker ikke lovgivning.",
    "term": "Den danske model"
  },
  "98": {
    "explain": "En kollektiv aftale om bl.a. løn og arbejdsvilkår mellem arbejdsmarkedets parter. Aftalen kan indeholde pension, arbejdstid og lønvilkår.",
    "term": "Overenskomst"
  },
  "99": {
    "explain": "Forhandlinger mellem regeringen, arbejdsgiverne og lønmodtagerne. De tre parter kan fx aftale en indsats for uddannelse eller arbejdsudbud.",
    "term": "Trepartsforhandlinger"
  },
  "100": {
    "explain": "Et princip i EU om mulighed for at søge og tage arbejde på tværs af medlemslandene. Det kan øge mobiliteten og hjælpe med at besætte ledige job.",
    "term": "Arbejdskraftens frie bevægelighed"
  },
  "101": {
    "explain": "Staten, regionerne, kommunerne og relevante sociale kasser og fonde samt tilknyttede institutioner. Sektoren leverer service, omfordeler og regulerer økonomien.",
    "term": "Offentlig sektor"
  },
  "102": {
    "explain": "En indkomst udbetalt uden direkte levering af en arbejdsydelse som modydelse. Dagpenge, pension og SU er eksempler. De er ikke i sig selv offentlig produktion.",
    "term": "Overførselsindkomst"
  },
  "103": {
    "explain": "Tjenester, som det offentlige leverer til borgere og virksomheder. Undervisning og sundhedsbehandling er offentlige serviceydelser.",
    "term": "Serviceydelser"
  },
  "104": {
    "explain": "Statens budget over forventede indtægter og udgifter for et finansår. Et budget vedtages på forhånd; et regnskab viser de faktiske indtægter og udgifter bagefter.",
    "term": "Finanslov"
  },
  "105": {
    "explain": "Skatter, der pålægges personer eller virksomheder direkte, fx på indkomst. Indkomstskat og selskabsskat er eksempler.",
    "term": "Direkte skatter"
  },
  "106": {
    "explain": "Skatter og afgifter knyttet til varer og tjenester. Moms og punktafgifter er eksempler.",
    "term": "Indirekte skatter"
  },
  "107": {
    "explain": "En skat, hvor skatten som andel af indkomsten stiger, når indkomsten stiger. Højere indkomstgrupper betaler en større procentdel i den betragtede skat.",
    "term": "Progressiv skat"
  },
  "108": {
    "explain": "En skat, som udgør samme andel af indkomsten uanset indkomstens størrelse. 20 % af 100.000 er 20.000; 20 % af 200.000 er 40.000.",
    "term": "Proportional skat"
  },
  "109": {
    "explain": "En skat, hvor belastningen som andel af indkomsten falder, når indkomsten stiger. En ens afgift i kroner fylder relativt mere i et lavt end i et højt budget.",
    "term": "Degressiv skat"
  },
  "110": {
    "explain": "En indirekte skat på omsætning af varer og tjenester, teknisk opkrævet på merværdien gennem produktionskæden. Ved et regneeksempel med 25 % moms bliver 100 kr. uden moms til 125 kr. med moms.",
    "term": "Moms"
  },
  "111": {
    "explain": "Afgifter, der bl.a. skal gøre miljøbelastende forbrug eller produktion dyrere. En CO₂-afgift giver et økonomisk incitament til at udlede mindre.",
    "term": "Grønne afgifter"
  },
  "112": {
    "explain": "De samlede skatter og afgifter som procentdel af BNP. Skatter / BNP × 100. Det er ikke det samme som den enkelte borgers skatteprocent.",
    "term": "Skattetryk"
  },
  "113": {
    "explain": "Velfærdsydelser, som brede grupper har adgang til efter generelle regler, uafhængigt af private forsikringsbidrag. Den danske model bygger i høj grad på skattefinansieret adgang til bl.a. sundhed og uddannelse.",
    "term": "Universelle ydelser"
  },
  "114": {
    "explain": "En overvejende universel og skattefinansieret model med omfattende offentlig service og omfordeling. Højere skattefinansiering muliggør fælles adgang til en række velfærdsydelser.",
    "term": "Dansk velfærdsmodel"
  },
  "115": {
    "explain": "Forholdet mellem dem, der skal forsørges, og dem, der bidrager til forsørgelsen, med en nærmere valgt afgrænsning. Flere ældre i forhold til erhvervsaktive kan lægge pres på offentlige udgifter og finansiering.",
    "term": "Forsørgerbyrde"
  },
  "116": {
    "explain": "Et syn på staten, hvor institutioner og politik indrettes for at styrke landets konkurrenceevne i en global økonomi. Uddannelse, effektivitet og arbejdsudbud bliver centrale politiske fokusområder.",
    "term": "Konkurrencestat"
  },
  "117": {
    "explain": "Den samlede offentlige sektors indtægter minus udgifter i en periode. Positiv saldo er overskud. Negativ saldo er underskud. Saldo er en strøm, gæld er en beholdning.",
    "term": "Offentlig saldo"
  },
  "118": {
    "explain": "Et beregnet mål for den offentlige saldo korrigeret for konjunkturer og midlertidige forhold. Den søger at vise den underliggende balance frem for årets midlertidige udsving.",
    "term": "Strukturel saldo"
  },
  "119": {
    "explain": "Statens udestående gældsforpligtelser på et tidspunkt. Underskud kan øge gælden, men et års underskud er ikke det samme som den samlede gæld.",
    "term": "Statsgæld"
  },
  "120": {
    "explain": "Et gældsbevis, som staten udsteder for at låne penge. Køberen låner staten penge mod vilkår om bl.a. rente og tilbagebetaling.",
    "term": "Statsobligation"
  },
  "121": {
    "explain": "Statens driftsindtægter minus drifts-, anlægs- og udlånsudgifter. Et af materialets begreber til opgørelse af statsfinanserne; det afgrænses anderledes end kassesaldoen.",
    "term": "DAU-saldo"
  },
  "122": {
    "explain": "Et mål for statens samlede finansieringsbehov efter inddragelse af kapitalposter. Afdrag på statsgæld kan gøre kassebehovet forskelligt fra DAU-saldoen.",
    "term": "Kassesaldo"
  },
  "123": {
    "explain": "Fælles rammer for medlemslandenes offentlige finanser, som bl.a. omhandler underskud og gæld. I materialet omtales bl.a. en referenceværdi for offentligt underskud på 3 % af BNP. Skeln mellem faktisk og strukturel saldo.",
    "term": "EU's finanspolitiske rammer"
  }
};

// Kort forklaring på fejlsvaret i hvert anvendelses- og regnespørgsmål.
const scenarioWrongReasons={
  "s0": "Når salget falder i en lavkonjunktur, behøver virksomhederne typisk færre ansatte. Ledigheden stiger derfor; den er hverken uafhængig af produktionen eller negativ.",
  "s1": "Højere rente gør det dyrere at finansiere køb. Den ændrer ikke automatisk løn eller alle varepriser og får ikke eksporten til at forsvinde.",
  "s2": "Nedlukning begrænsede det, virksomheder kunne producere. Samtidig købte kunderne mindre. Der var derfor problemer på både udbuds- og efterspørgselssiden.",
  "s3": "Når tyske kunder køber mindre, mister danske eksportvirksomheder ordrer. Derfor kan dansk BNP falde; import bliver ikke til skat.",
  "s4": "En målkonflikt kræver, at ét mål forbedres, mens et andet forværres. To forbedringer samtidig er derimod målharmoni.",
  "s5": "Modellen kræver både sociale hensyn og miljøhensyn. Hverken størst muligt BNP, ens indkomst eller stop for alt privat forbrug beskriver den balance.",
  "s6": "Eksport går fra Danmark til en udenlandsk kunde. Køb fra Tyskland og Italien er import, og et lokalt frisørbesøg er indenlandsk forbrug.",
  "s7": "Stigningen er 10, men procenten skal beregnes i forhold til udgangspunktet 200. Derfor er 10 / 200 × 100 lig 5 %, ikke 10 %.",
  "s8": "Basisværdien er 400, så den nye værdi 500 skal divideres med 400. Et indeks på 125 betyder 25 % over basis, ikke en stigning på 125 %.",
  "s9": "Samlet tilgang er 1.300. Forbrug og investering er tilsammen 1.000. Eksporten skal være forskellen på 300, så regnskabet balancerer.",
  "s10": "Multiplikatoren er et forholdstal. Du skal dividere den samlede ændring 10 med den første ændring 4, ikke trække tallene fra eller lægge dem sammen.",
  "s11": "Opsparing, skat og import sender færre penge videre til køb af dansk produktion. Mere køb af danske varer og mere indenlandsk indkomst gør normalt det modsatte.",
  "s12": "Et gennemsnit kan skjule store forskelle. BNP omfatter også offentlig produktion og er ikke et mål for hverken gæld eller den enkelte løn.",
  "s13": "Offentligt forbrug er løbende produktion af fx undervisning. SU og dagpenge er overførsler; en eksisterende aktie er et værdipapir.",
  "s14": "Her er indkomsten ændret, ikke varens egen pris. Køberne vil købe mere ved samme pris, så hele efterspørgselskurven flytter mod højre.",
  "s15": "Efterspørgselskurven viser allerede sammenhængen mellem varens pris og efterspurgt mængde. En ændring i den pris giver derfor en bevægelse langs kurven.",
  "s16": "Dyrere råvarer øger produktionsomkostningerne. Ved den samme salgspris vil virksomhederne udbyde mindre, så udbuddet forskydes mod venstre.",
  "s17": "Mængdeændringen er −20 %, og prisændringen er +10 %. Rækkefølgen og fortegnet er vigtige: −20 / 10 giver −2.",
  "s18": "Under ligevægtsprisen ønsker køberne mere, end producenterne tilbyder. Der er derfor mangel, ikke et overskud af udbudte varer.",
  "s19": "Når efterspørgslen flytter mod højre, bliver det nye skæringspunkt højere og længere mod højre på den uændrede stigende udbudskurve.",
  "s20": "Realløn beregnes som lønindeks divideret med prisindeks gange 100. Tallene skal ikke lægges sammen, og forskellen på fem indekspoint er ikke det præcise reallønsindeks.",
  "s21": "Opsparingen er indkomst minus forbrug, altså 20.000. Kvoten er denne opsparing divideret med indkomsten 200.000. De 90 % er forbrugskvoten.",
  "s22": "Gini måler fordelingen af indkomst. Et højere tal betyder mere ulighed; det viser ikke en bestemt ændring i BNP.",
  "s23": "Indkomst er penge tjent over en periode. Formue er en beholdning på et tidspunkt, hvor gæld trækkes fra aktiverne. De to størrelser er derfor forskellige.",
  "s24": "Både beskæftigede og ledige til rådighed indgår i arbejdsstyrken. Derfor skal de to grupper lægges sammen, ikke trækkes fra hinanden.",
  "s25": "Ledighedsprocentens nævner er arbejdsstyrken. 100.000 / 2.500.000 er 0,04, som er 4 %, når vi ganger med 100.",
  "s26": "Antallet af personer er fire, men hver er kun ledig en fjerdedel af året. Tilsammen giver det fire fjerdedele, altså én fuldtidsledig på årsbasis.",
  "s27": "Her gentager nedgangen sig med årstiden. Det er sæsonledighed; personen venter ikke blot på et nyt job, og der er ikke nødvendigvis en generel økonomisk krise.",
  "s28": "De ledige har ikke de kvalifikationer, virksomhederne søger. Problemet er derfor mismatch, og mere samlet efterspørgsel løser ikke alene den forskel.",
  "s29": "Treparter er regeringen og arbejdsmarkedets to parter. Regioner og kommuner er ikke de to arbejdsmarkedsparter, og tre lande er heller ikke trepartsforhandlinger.",
  "s30": "Skattetrykket er et forhold mellem samlede skatter og BNP. 450 / 1.000 er 0,45, som svarer til 45 %, ikke den enkelte borgers skatteprocent.",
  "s31": "Saldoen beregnes som indtægter minus udgifter. Udgifterne er størst, så svaret skal være negativt. Summen af tallene er ikke saldoen.",
  "s32": "25 % beregnes af de 800 kr., så momsen er 200 kr. Den lægges til prisen uden moms og giver i alt 1.000 kr.",
  "s33": "Det afgørende er den procentdel af indkomsten, skatten udgør. Ved progressiv skat stiger den andel; ved proportional skat er den uændret, og ved degressiv falder den.",
  "s34": "Lavere aktivitet giver normalt færre skatteindtægter, mens flere ledige øger visse overførsler. Derfor forværres saldoen typisk i en lavkonjunktur.",
  "s35": "Flere ældre kan øge behovet for pension og pleje i forhold til de erhvervsaktive. Service koster stadig ressourcer, og flere ældre skaber ikke automatisk flere skattebetalere.",
  "s36": "Den faktiske saldo er årets indtægter minus udgifter. Den strukturelle saldo søger at rense for konjunkturer og midlertidige påvirkninger; den fjerner ikke alle udgifter og måler ikke gæld."
};

const scenarioConcepts={
  "s0": "Konjunkturarbejdsløshed",
  "s1": "Rente",
  "s2": "Udbudskrise og efterspørgselskrise",
  "s3": "Eksport",
  "s4": "Målkonflikt",
  "s5": "Doughnut-modellen",
  "s6": "Eksport",
  "s7": "Økonomisk vækst",
  "s8": "Indekstal",
  "s9": "Forsyningsbalance",
  "s10": "Multiplikator",
  "s11": "Multiplikatorvirkning",
  "s12": "BNP pr. indbygger",
  "s13": "Offentligt forbrug",
  "s14": "Kurveforskydning",
  "s15": "Bevægelse langs kurven",
  "s16": "Udbud",
  "s17": "Priselasticitet",
  "s18": "Efterspørgselsoverskud",
  "s19": "Ligevægtspris",
  "s20": "Realløn",
  "s21": "Opsparingskvote",
  "s22": "Gini-koefficient",
  "s23": "Indkomst og formue",
  "s24": "Arbejdsstyrke",
  "s25": "Ledighedsprocent",
  "s26": "Fuldtidsledige",
  "s27": "Sæsonarbejdsløshed",
  "s28": "Strukturarbejdsløshed",
  "s29": "Trepartsforhandlinger",
  "s30": "Skattetryk",
  "s31": "Offentlig saldo",
  "s32": "Moms",
  "s33": "Progressiv skat",
  "s34": "Offentlig saldo",
  "s35": "Forsørgerbyrde",
  "s36": "Strukturel saldo"
};
