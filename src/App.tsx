import './styles/main.scss'
import { Header } from './components/Header'
import { CallToAction } from './components/CallToAction'
import { Section } from './components/Section'
import { SkillCard } from './components/SkillCard'
import { ProjectCard } from './components/ProjectCard'
import { CultureCard } from './components/CultureCard'
import { ColleagueCard } from './components/ColleagueCard'
import { ComparisonBox } from './components/ComparisonBox'
import { VitasLogo } from './components/VitasLogo'
import { MessageIcon, ThumbsUpIcon, ZapIcon, CodeIcon, UsersIcon, MinimizeIcon } from './components/Icons'

function App() {
  return (
    <div className="cv-container">
      <div className="cv-page">
        {/* Decorative SVG lines */}
        <div className="svg-line svg-line-left">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="176.05999755859375 76.51000213623047 58.01054382324219 246.97998046875">
            <path fill="currentColor" d="M176.06,322.38c.33-.21.65-.42.98-.63,8.05-5.2,15.59-11.23,22.44-17.93,6-5.91,11.38-12.48,15.99-19.53,8.12-12.47,13.5-26.22,15.99-40.88,1.12-6.54,1.67-13.23,1.65-19.88-.02-6.19-.52-12.42-1.48-18.52-1.78-11.26-6.04-25.29-12.67-41.7-6.13-15.18-14.36-32.57-24.45-51.68-5.56-10.53-11.77-21.74-18.45-33.3v-1.82s.82,1.35.82,1.35c6.69,11.57,12.9,22.79,18.47,33.33,10.1,19.14,18.34,36.55,24.49,51.76,6.66,16.48,10.94,30.58,12.73,41.91.97,6.15,1.47,12.43,1.5,18.66.02,6.7-.54,13.45-1.66,20.05-2.52,14.79-7.94,28.67-16.13,41.24-4.65,7.11-10.07,13.73-16.12,19.69-6.89,6.75-14.49,12.82-22.59,18.05-.49.32-.98.63-1.48.94v-1.11Z"/>
          </svg>
        </div>
        
        <div className="svg-line svg-line-right">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="142.4555206298828 97.17998504638672 82.4844970703125 194.07998657226562">
            <path fill="currentColor" d="M224.93,98.25c-8.04,3.11-15.59,6.24-22.5,9.33-9.36,4.11-18.57,8.82-27.37,14.03-8.06,4.88-14.2,9.58-18.23,13.98-4.64,5.05-8.13,10.9-10.4,17.37-2.68,7.84-3.57,16.33-2.59,24.55.58,5.07,1.67,10.11,3.26,14.96,1.89,5.76,4.31,11.38,7.18,16.72,3.45,6.41,7.41,12.62,11.76,18.46,5.23,7.03,10.95,13.82,16.99,20.19,10.45,11.09,24.47,25.17,41.85,42.05l-.03,1.37c-17.71-17.18-31.96-31.49-42.55-42.73-6.06-6.39-11.81-13.21-17.06-20.28-4.38-5.88-8.36-12.13-11.83-18.59-2.9-5.39-5.34-11.07-7.25-16.88-1.61-4.92-2.72-10.01-3.31-15.15-1-8.37-.09-17.01,2.63-25,2.31-6.6,5.88-12.56,10.61-17.72,4.1-4.47,10.31-9.24,18.46-14.16,8.84-5.23,18.08-9.96,27.48-14.08,7.03-3.15,14.71-6.33,22.91-9.49v1.08Z"/>
          </svg>
        </div>
        
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
            We weten dat de markt niet meer werkt zoals vroeger. Als senior data engineer/data architect heb je het voor het kiezen. 
            Juist daarom sturen wij dit CV. Omdat wij bij jou willen solliciteren.
          </p>
          <p className="content-text">
            We zijn benieuwd naar jou. Naar hoe je naar je vak kijkt, waar je goed in bent en wat jij nodig hebt om met plezier te werken. 
            Wij geloven dat een goede samenwerking twee kanten op werkt en lichten graag toe hoe onze organisatie eruitziet en hoe wij werken. 
            En vooral in gesprek gaan in alle laagdrempeligheid om te kijken of dit bij jou past.
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
            <div className="company-logo">
              <VitasLogo />
            </div>
            <h3 className="job-title">Zelfstandig verder</h3>
            <div className="company-info">Vitas | 2016 – Heden</div>
            <div className="job-description">
              <ul>
                <li>Ontwerpen en realiseren van Azure- en cloudplatformen</li>
                <li>Softwareontwikkeling binnen het Microsoft-ecosysteem</li>
                <li>Samenwerken met senior engineers, architecten en product owners</li>
              </ul>
              <p className="content-text">
                Onze ervaring zit niet in één trucje, maar in variatie. Verschillende omgevingen, verschillende vraagstukken en 
                telkens weer nieuwe contexten. Dat houdt ons scherp.
              </p>
              <ul>
                <li>Opzetten en doorontwikkelen van data- en analyticsplatformen in Fabric, Databricks & Azure data factory</li>
                <li>Bewust geen branche focus, we werken voor veel verschillende klanten. Met als voorwaarde dat er een mooi inhoudelijk en uitdagend component in zit voor onze mensen.</li>
              </ul>
            </div>
          </div>

          <div className="experience-card">
            <div className="company-logo">
              <img src="/images/companies/deloitte.png" alt="Deloitte" />
            </div>
            <h3 className="job-title">Verder als onderdeel van Deloitte Digital</h3>
            <div className="company-info">Deloitte Digital | 2013 – 2016</div>
            <div className="job-description">
              <p className="content-text">
                In 2013 is Vivens verkocht aan Deloitte Digital.
              </p>
              <p className="content-text">
                Vivens trok in de voorgaande periode nadrukkelijk aandacht door hun snelle groei en partnerschap met Salesforce; 
                uiteindelijk is een overnameovereenkomst met Deloitte gesloten en werd Vivens onderdeel van Deloitte Digital.
              </p>
              <p className="content-text">
                De Salesforce-tak sloot cultureel goed aan; voor Microsoft development was de fit minder (meer nadruk op profilering dan bouwen).
              </p>
              <p className="content-text">
                In goede afstemming volgde een reverse takeover: Microsoft-collega's verder als Vitas.
              </p>
              <p className="content-text">
                Samenwerking met Deloitte tot op heden sterk, we trekken nog steeds veel op in projecten. Het Testen voor Toegang 
                platform tijdens corona is hier een mooi voorbeeld van.
              </p>
            </div>
          </div>

          <div className="experience-card">
            <div className="company-logo">
              <img src="/images/companies/vivens.png" alt="Vivens" />
            </div>
            <h3 className="job-title">Start als Vivens</h3>
            <div className="company-info">Vivens | 2004 – 2013</div>
            <div className="job-description">
              <p className="content-text">
                Vivens was de eerste officiële Salesforce partner in Noord-Europa en kreeg de status platinium partner vanuit het 
                hoofdkantoor uit San Francisco.
              </p>
              <p className="content-text">
                Vivens was destijds de eerste partij uit Noord-Europa die officieel Salesforce trainingen mochten verzorgen en ze vlogen 
                de hele wereld over.
              </p>
              <p className="content-text">
                Vivens hield zich tevens bezig met Microsoft development in .NET en Sharepoint.
              </p>
              <p className="content-text">
                Focus op inhoud, vakmanschap en langjarige klantrelaties, de basis voor de latere doorontwikkeling richting cloud en data.
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
              icon={<MessageIcon className="culture-icon" />}
              title="Inhoud boven alles"
              text="Het beste argument wint, niet de hoogste functie"
            />
            <CultureCard 
              icon={<ThumbsUpIcon className="culture-icon" />}
              title="Je mag het oneens zijn"
              text="Graag zelfs, zo worden we beter"
            />
            <CultureCard 
              icon={<ZapIcon className="culture-icon" />}
              title="Tafeltennis wordt erg serieus genomen"
              text="En dat is geen grapje"
            />
            <CultureCard 
              icon={<CodeIcon className="culture-icon" />}
              title="Van idee tot productie is één geheel"
              text="Je bouwt het, je begrijpt het, je verbetert het."
            />
            <CultureCard 
              icon={<UsersIcon className="culture-icon" />}
              title="Samenwerken is geen formaliteit"
              text="Sparren mag altijd, ook zonder agenda."
            />
            <CultureCard 
              icon={<MinimizeIcon className="culture-icon" />}
              title="Complexiteit is geen doel"
              text="Als het simpeler kan, moet het simpeler."
            />
          </div>
        </Section>

        {/* Not For Everyone Section */}
        <Section title="Niet voor iedereen">
          <p className="content-text" style={{ fontStyle: 'italic', marginBottom: '40px' }}>
            (en dat is helemaal okay)
          </p>
          <div className="comparison-container">
            <ComparisonBox 
              type="negative"
              title="Waarom Vitas Misschien niet bij je past"
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
              title="Waarom het wel kan klikken"
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
            <ProjectCard title="Salaris" description="€ 5.500 - € 7.600, meegroeiend met je ontwikkeling" />
            <ProjectCard title="Mobiliteit" description="Leasebudget van € 975 of alternatieve vervoersregeling van 85% van het lease budget" />
            <ProjectCard title="StiPP-pensioenregeling" description="Totale premie ca. 23,4%, waarvan tweederde van de premie wordt betaald door de werkgever. Pensioen is inclusief partner- en wezenpensioen en aanvullende sociale dekkingen" />
            <ProjectCard title="Thuiswerkvergoeding & telefoonvergoeding" description="€ 47,50 netto per maand" />
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
              avatarUrl="/images/colleagues/melis.jpeg"
            />
            <ColleagueCard 
              initial="N"
              name="Nick"
              description="Onze data-engineer met een sporthart: als hij niet met data bezig is, staat hij aan de start van een Hyrox maar je kunt hem ook tegenkomen op een festival. Na een studie in sport maakte hij in 2017 de overstap naar data en behaalde hij naast fulltime werk zijn MSc BPM & IT. Via Sogeti en Fellowmind ontwikkelde hij zich tot een ervaren data engineer. Inmiddels is hij trekker bij Tenaz voor het greenfeeld opzetten van de architectuur van een Microsoft Fabric-omgeving."
              avatarUrl="/images/colleagues/nick.png"
            />
            <ColleagueCard 
              initial="J"
              name="Jay"
              description="Heeft een sterke academische achtergrond en rolde vanuit onderzoek en statistiek het data-veld in. Hij startte zelfs aan een PhD en ontwikkelde zich door tot businessgerichte Data & AI-architect. Jay is sociaal, brengt energie en houdt van eenvoud in complexe vraagstukken. Buiten werktijd kookt hij graag en is hij vaak op pad met zijn twee honden."
              avatarUrl="/images/colleagues/jay.png"
            />
            <ColleagueCard 
              initial="R"
              name="Robin"
              description="Startte bij ons direct na zijn studie Artificial Intelligence en begon als software engineer, onder andere aan Testen voor Toegang. Hij maakte daarna de stap richting data engineering en werkte aan mooie Databricks-projecten. Nu werkt hij veel met GIS data aan een Fabric-implementatie voor Provincie Drenthe, mooi dichtbij zijn Drentse roots. Robin is altijd vrolijk, houdt van waterpolo en is vaak degene die op bedrijfsfeestjes als laatste het licht uitdoet."
              avatarUrl="/images/colleagues/robin.jpg"
            />
          </div>

          <h3 className="subsection-title">Indirecte collega's die je geregeld zult treffen</h3>
          <div className="colleagues-grid">
            <ColleagueCard 
              initial="E"
              name="Enrico"
              description="Onze salescollega die altijd positief is en overal kansen ziet. Betrokken, scherp op de juiste match en altijd in voor een praatje. Als hij niet aan de telefoon zit is hij vaak te vinden op de golfbaan of op het voetbalveld."
              avatarUrl="/images/colleagues/enrico.jpg"
            />
            <ColleagueCard 
              initial="J&A"
              name="Johannes & Arjen"
              description="Jeugdvrienden van Terschelling en ondernemen sinds begin jaren 2000 samen. Commercieel handig, met oog voor de mens en altijd met gevoel voor humor. Ze bepalen de koers, maar blijven benaderbaar en dichtbij."
              avatarUrl="/images/colleagues/johannes.jpg"
              secondAvatarUrl="/images/colleagues/arjen.jpg"
            />
            <ColleagueCard 
              initial="I"
              secondInitial="S"
              name="Irma & Selina"
              description="De drijvende krachten achter de schermen. Van onboarding, administratie tot contractafhandeling en alles daartussenin: zij zorgen dat alles klopt. Warm, hartelijk en altijd gezellig."
            />
            <ColleagueCard 
              initial="H"
              name="Hans"
              description="Zet mensen altijd op de eerste plaats. Een echte Groninger, loopt hard en geniet net zo fanatiek van de derde helft in de voetbalkantine."
              avatarUrl="/images/colleagues/hans.jpg"
            />
          </div>
        </Section>

        {/* Culture Highlight */}
        <section className="culture-highlight-section">
          <div className="content">
            <p className="culture-highlight">
              Korte lijnen, weinig hiërarchie en altijd ruimte om het gesprek aan te gaan.
            </p>
          </div>
        </section>

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

        <CallToAction />
      </div>
    </div>
  )
}

export default App
