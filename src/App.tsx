import './styles/main.scss'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { Section } from './components/Section'
import { SkillCard } from './components/SkillCard'
import { ProjectCard } from './components/ProjectCard'
import { CultureCard } from './components/CultureCard'
import { ColleagueCard } from './components/ColleagueCard'
import { ComparisonBox } from './components/ComparisonBox'
import { MicrosoftIcon } from './components/Icons'

function App() {
  return (
    <div className="cv-container">
      <div className="cv-page">
        <Header />

        {/* Intro Section */}
        <Section title="Waarom we dit CV sturen">
          <div className="intro-image">
            <img 
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiO7zYw1hf91czw5WCbHtgC5npn2ci_u_65A&s" 
              alt="Vitas team"
              loading="lazy"
            />
          </div>
          <p className="content-text">
            We weten dat de markt niet meer werkt zoals vroeger. Als senior data engineer heb je het voor het kiezen. 
            Juist daarom sturen wij dit CV. Omdat wij bij jou willen solliciteren.
          </p>
          <p className="content-text">
            We zijn benieuwd naar jou. Naar hoe je naar je vak kijkt, waar je goed in bent en wat jij nodig hebt om met plezier te werken. 
            Wij geloven dat een goede samenwerking twee kanten op werkt en lichten graag toe hoe onze organisatie eruit ziet en hoe wij werken. 
            En vooral of dit bij jou past.
          </p>
          <p className="content-text">
            We hebben al een volwassen en stabiele software & cloud organisatie staan. Met ervaren Azure- en cloud engineers werken we aan 
            complexe omgevingen bij uiteenlopende klanten. Dit is een hechte club van ervaren software, cloud & data professionals.
          </p>
          <p className="content-text">
            Sinds kort zijn we gestart met Vitas Data. Een team waarin data engineering, analytics en innovatie binnen het Microsoft-ecosysteem 
            samenkomen. We bouwen niet alleen oplossingen, maar denken ook mee over richting, architectuur en keuzes. Dat doen we graag samen 
            met mensen die inhoudelijk willen meedenken en invloed willen hebben.
          </p>
        </Section>

        {/* Experience Section */}
        <Section title="Werkervaring">
          <div className="experience-card">
            <h3 className="job-title">Senior IT-dienstverlener (Software, Cloud & Data)</h3>
            <div className="company-info">Vitas | 2004 - Heden</div>
            <div className="job-description">
              <ul>
                <li>Ontwerpen en realiseren van Azure- en cloudplatformen</li>
                <li>Softwareontwikkeling binnen het Microsoft-ecosysteem</li>
                <li>Opzetten en doorontwikkelen van data- en analyticsplatformen in Fabric, Databricks & Azure data factory</li>
                <li>Wij hebben bewust geen branche focus en werken voor veel verschillende klanten. Met als voorwaarde dat er een mooi inhoudelijk en uitdagend component aan zit</li>
                <li>Samenwerken met senior engineers, architecten en product owners</li>
              </ul>
              <p style={{ fontStyle: 'italic', color: '#64748b', marginTop: '24px' }}>
                Onze ervaring zit niet in één trucje, maar in variatie. Verschillende omgevingen, verschillende vraagstukken en 
                telkens weer nieuwe contexten. Dat houdt ons scherp.
              </p>
            </div>
          </div>
        </Section>

        {/* Skills Section */}
        <Section title="Vaardigheden">
          <div className="skills-grid">
            <SkillCard skill="Data engineering & architectuur" />
            <SkillCard skill="Microsoft Azure, Fabric & Databricks" />
            <SkillCard skill="Cloud-native denken en bouwen" />
            <SkillCard skill="Dataplatformen schaalbaar en betrouwbaar maken" />
            <SkillCard skill="Eigenaarschap nemen van idee tot productie" />
            <SkillCard skill="Complexiteit terugbrengen tot iets werkbaars" />
            <SkillCard skill="Nieuwsgierig blijven en blijven leren" />
            <SkillCard skill="Oprechte aandacht voor mensen en werkgeluk" />
            <SkillCard skill="Architectuurkeuzes onderbouwen" />
          </div>
        </Section>

        {/* Projects Section */}
        <Section title="Projecten">
          <div className="projects-grid">
            <ProjectCard 
              title="Dataplatformen" 
              description="Platforms die organisaties helpen grip te krijgen op complexiteit, groei en verandering, ook op de lange termijn"
            />
            <ProjectCard 
              title="Architectuurvraagstukken" 
              description="Vraagstukken waar je echt invloed hebt op keuzes, richting en kwaliteit"
            />
            <ProjectCard 
              title="Innovatieprojecten" 
              description="Ruimte om te experimenteren, met altijd een duidelijke praktische toepassing"
            />
            <ProjectCard 
              title="Datakwaliteit & betrouwbaarheid" 
              description="Zorgen dat data klopt, te vertrouwen is en gebruikt wordt"
            />
            <ProjectCard 
              title="Integraties & dataketens" 
              description="Bronnen, systemen en teams met elkaar verbinden"
            />
            <ProjectCard 
              title="Van idee naar productie" 
              description="Experimenten doorontwikkelen tot stabiele oplossingen"
            />
            <ProjectCard 
              title="Samenwerkingen" 
              description="Langdurige trajecten én kortere, intensieve projecten. We kiezen bewust en samen."
            />
          </div>
        </Section>

        {/* Culture Section */}
        <Section title="Onze ongeschreven regels" className="culture-section">
          <div className="culture-grid">
            <CultureCard 
              icon={<MicrosoftIcon className="culture-icon" />}
              title="Inhoud boven alles"
              text="Het beste argument wint, niet de hoogste functie"
            />
            <CultureCard 
              icon={<MicrosoftIcon className="culture-icon" />}
              title="Je mag het oneens zijn"
              text="Graag zelfs, zo worden we beter"
            />
            <CultureCard 
              icon={<MicrosoftIcon className="culture-icon" />}
              title="Tafeltennis wordt erg serieus genomen"
              text="En dat is geen grapje"
            />
            <CultureCard 
              icon={<MicrosoftIcon className="culture-icon" />}
              title="Van idee tot productie is één geheel"
              text="Je bouwt het, je begrijpt het, je verbetert het."
            />
            <CultureCard 
              icon={<MicrosoftIcon className="culture-icon" />}
              title="Samenwerken is geen formaliteit"
              text="Sparren mag altijd, ook zonder agenda."
            />
            <CultureCard 
              icon={<MicrosoftIcon className="culture-icon" />}
              title="Complexiteit is geen doel"
              text="Als het simpeler kan, moet het simpeler."
            />
          </div>
        </Section>

        {/* Not For Everyone Section */}
        <Section title="Niet voor iedereen">
          <p className="content-text" style={{ fontStyle: 'italic', marginBottom: '40px' }}>
            (en dat is helemaal oké)
          </p>
          <div className="comparison-container">
            <ComparisonBox 
              type="negative"
              title="Misschien niet bij je past"
              items={[
                {
                  title: "Instructies boven initiatief",
                  text: "Je werkt het liefst precies volgens een uitgedacht plan en wacht liever op richting dan zelf keuzes te maken."
                },
                {
                  title: "Tickets boven context",
                  text: "Je vindt het prettig om vooral taken af te werken, zonder je te verdiepen in het grotere geheel of de impact van je werk."
                },
                {
                  title: "Zekerheid voor alles",
                  text: "Als iets nog niet vastligt, wacht je liever tot alle kaders duidelijk zijn voordat je verdergaat."
                }
              ]}
            />
            <ComparisonBox 
              type="positive"
              title="Waarom het wél kan klikken"
              items={[
                {
                  title: "Inhoudelijke invloed",
                  text: "Je wilt meedenken over keuzes, richting en kwaliteit, niet alleen bouwen, maar ook begrijpen waarom."
                },
                {
                  title: "Samen boven solo",
                  text: "Je spart graag met andere engineers, architecten en stakeholders om tot betere oplossingen te komen."
                },
                {
                  title: "Comfortabel met beweging",
                  text: "Je kunt omgaan met verandering, onzekerheid en iteratie, en ziet dat als onderdeel van het vak."
                }
              ]}
            />
          </div>
        </Section>

        {/* Expectations Section */}
        <Section title="Wat jij van ons mag verwachten">
          <div className="projects-grid">
            <ProjectCard title="Salaris" description="€5.500 - €7.600, meegroeiend met je ontwikkeling" />
            <ProjectCard title="Mobiliteit" description="Leaseauto of mobiliteitsvergoeding alternatieve vervoersregeling van circa €900" />
            <ProjectCard title="StiPP-pensioenregeling" description="Totale premie ca. 23,4%, waarvan ⅔ van de premie wordt betaald door de werkgever. Pensioen is inclusief partner- en wezenpensioen en aanvullende sociale dekkingen" />
            <ProjectCard title="Inkomensbescherming" description="Collectieve WIA/WGA-verzekeringen, volledig bekostigd door de werkgever" />
            <ProjectCard title="Thuiswerkvergoeding" description="€22,50 netto per maand" />
            <ProjectCard title="Telefoonvergoeding" description="€25 netto per maand" />
            <ProjectCard title="Laptop naar keuze" description="Kies de laptop die bij jou past" />
            <ProjectCard title="26 vakantiedagen" description="Plus 8% vakantiegeld, jaarlijks uitbetaald in mei" />
          </div>
        </Section>

        {/* Colleagues Section */}
        <Section title="Collega's">
          <p className="colleagues-intro">
            Je werkt samen met een hecht team van inhoudelijke professionals. Mensen die scherp zijn op kwaliteit, 
            graag meedenken en elkaar verder helpen. Ik stel je directe collega's graag alvast aan je voor.
          </p>
          <div className="colleagues-grid">
            <ColleagueCard 
              initial="M"
              name="Melis"
              description="Komt uit de techniek en weet hoe het is om dingen vanaf de basis op te bouwen. In 2024 sloot hij zich aan bij Vitas als mede-aandeelhouder en kartrekker van Vitas Data. Eerder richtte hij samen met zijn broer een succesvol IT-integratiebedrijf op. Met meer dan 25 jaar ervaring beweegt hij zich net zo makkelijk tussen techniek, projecten, commercie en mensen."
            />
            <ColleagueCard 
              initial="N"
              name="Nick"
              description="Onze data-engineer met een sporthart: als hij niet met data bezig is, staat hij aan de start van een Hyrox maar je kunt hem ook tegenkomen op een festival. Na een studie in sport maakte hij in 2017 de overstap naar data en behaalde hij naast fulltime werk zijn MSc BPM & IT. Via Sogeti en Fellowmind ontwikkelde hij zich tot een ervaren data engineer. Inmiddels is hij trekker bij Tenaz voor het greenfeeld opzetten van de architectuur van een Microsoft Fabric-omgeving."
            />
            <ColleagueCard 
              initial="J"
              name="Jay"
              description="Heeft een sterke academische achtergrond en rolde vanuit onderzoek en statistiek het data-veld in. Hij startte zelfs aan een PhD en ontwikkelde zich door tot businessgerichte Data & AI-architect. Jay is sociaal, brengt energie en houdt van eenvoud in complexe vraagstukken. Buiten werktijd kookt hij graag en is hij vaak op pad met zijn twee honden."
            />
            <ColleagueCard 
              initial="R"
              name="Robin"
              description="Startte bij ons direct na zijn studie Artificial Intelligence en begon als software engineer, onder andere aan Testen voor Toegang. Hij maakte daarna de stap richting data engineering en werkte aan mooie Databricks-projecten. Nu werkt hij veel met GIS data aan een Fabric-implementatie voor Provincie Drenthe, mooi dichtbij zijn Drentse roots. Robin is altijd vrolijk, houdt van waterpolo en is vaak degene die op bedrijfsfeestjes als laatste het licht uitdoet."
            />
          </div>

          <h3 className="subsection-title">Indirecte collega's die je geregeld zult treffen</h3>
          <div className="colleagues-grid">
            <ColleagueCard 
              initial="E"
              name="Enrico"
              description="Onze salescollega die altijd positief is en overal kansen ziet. Betrokken, scherp op de juiste match en altijd in voor een praatje. Als hij niet aan de telefoon zit is hij vaak te vinden op de golfbaan of op het voetbalveld."
            />
            <ColleagueCard 
              initial="J&A"
              name="Johannes & Arjen"
              description="Jeugdvrienden van Terschelling en ondernemen sinds begin jaren 2000 samen. Commercieel handig, met oog voor de mens en altijd met gevoel voor humor. Ze bepalen de koers, maar blijven benaderbaar en dichtbij."
            />
            <ColleagueCard 
              initial="I&S"
              name="Irma & Selina"
              description="De drijvende krachten achter de schermen. Van onboarding, administratie tot contractafhandeling en alles daartussenin: zij zorgen dat alles klopt. Warm, hartelijk en altijd gezellig."
            />
            <ColleagueCard 
              initial="H"
              name="Hans"
              description="Zet mensen altijd op de eerste plaats. Een echte Groninger, loopt hard en geniet net zo fanatiek van de derde helft in de voetbalkantine."
            />
          </div>
          <p className="content-text" style={{ fontStyle: 'italic', textAlign: 'center', marginTop: '40px', color: '#64748b' }}>
            Korte lijnen, weinig hiërarchie en altijd ruimte om het gesprek aan te gaan.
          </p>
        </Section>

        {/* Why People Stay */}
        <Section title="Waarom mensen bij Vitas blijven">
          <div className="projects-grid">
            <ProjectCard title="Omdat iedereen zichzelf kan zijn" description="Wel zo makkelijk" />
            <ProjectCard title="Salaris groeit actief mee met je ontwikkeling" description="Hiervoor hoef je geen stap buiten de deur te maken" />
            <ProjectCard title="Flexibiliteit in werkplek en uren" description="Wel in overleg met de klant" />
            <ProjectCard title="Respect voor privé-leven en ritme" description="Werk is belangrijk, maar niet alles." />
            <ProjectCard title="Leuke collega's en een nuchtere bedrijfscultuur" description="Gewoon doen wat werkt." />
            <ProjectCard title="Inspraak en afstemming in klussen" description="We luisteren naar wat je zoekt en stemmen daar samen op af." />
          </div>
        </Section>

        <Footer />
      </div>
    </div>
  )
}

export default App
