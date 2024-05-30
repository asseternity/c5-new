import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import swordUrl from './assets/space.svg';
import backgroundImage from './assets/seamless-1315301_1920-opacity.png';
import { motion } from 'framer-motion';

function LorePage() {
    useEffect(() => {
        document.body.style.backgroundImage = `url(${backgroundImage})`;
      }, []);

    return (
        <motion.div 
            className="gameBlock"
            initial={{ y: -1000 }} // Initial position off-screen to the left
            animate={{ y: 0 }} // Animate to opacity 1 and position 0 (sliding in from left)
            exit={{ y: 1000 }} // Animate to opacity 0 and position off-screen to the right (sliding out to right)
            transition={{ duration: 0.9 }}
        >
            <div className="sectionHead">
                <h1>The Lore</h1>
            </div>
            <div className="sectionContent">
                <div className="sectionImage">
                    <img src={swordUrl} alt="Sword" />
                </div>
                <div className="sectionText">
                    <ul>
                        <h3>Multiverse</h3>
                        <li>The world consists of dimensions. They are called <span className="highlight">Planes of Existence</span>. Among them, the world of mortals is <span className="highlight">the Material Plane</span>.</li>
                        <li>There are other dimensions: most of them are ruled by <span className="highlight">Gods</span>, where their will is supreme. Such dimensions are called <span className="highlight">the Outer Planes</span>.</li>
                        <li>In the past, the Outer Planes were walled off from the Material Plane by a great barrier called <span className="highlight">the Divine Gate</span>. The power of the Gods could not penetrate the Divine Gate and it kept the world of the Gods and the world of the mortals separate.</li>
                        <li>171 years ago, the first era ended with an event now known as <span className="highlight">Whetu&quot;s Collision</span>. The Material Plane was dragged to the other side of the Divine Gate, so it could no longer separate the Material Plane and the Outer Planes.</li>
                        <li>For these 171 years, the Material Plane has existed as a layer, a part, of an Outer Plane known as <span className="highlight">the Deep Wilds</span>, home to <span className="highlight">Ngati</span>, the Deity of Wild Nature. Without separation by the Divine Gate, the Gods can now directly influence the Material Plane, and the only reason they hesitate to do so - is because of protection by Ngati.</li>
                        <li>There exist, however, Deities so ancient and foreign, so powerful and alien, that even Ngati may not be able to fend them off if they decide to invade the Material Plane. These deities are poorly understood, and are known as <span className="highlight">the Great Old Ones</span>.</li>
                        <h3>Greater and Lesser Deities</h3>
                        <li>Deities are divided into Greater Gods and Lesser Gods. Greater Gods, for one reason or another, are Gods that currently hold more power than the other Gods. Among people who have dedicated themselves to a Deity, most choose a Greater God. Worship of Lesser Gods has declined in popularity, and is now mostly practiced for specific purposes - like if you need something from a specific deity.</li>
                        <h3>The Greater Gods are:</h3>
                        <li>Ngati, the Old Oak, and the holder of the Material Plane;</li>
                        <li>Harmony, the Free Spirit and the Deity of Freedom and Cooperation and Lathander, the Morninglord, the God of Birth, Renewal, Vitality and the Sun. Harmony and Lathander are known together as the Lovers. A lot of churches of the world are dedicated to the Lovers.</li>
                        <h3>Evil Greater Gods are:</h3>
                        <li>Tel&quot;Tuchi the Archeart (utilitarian ethics, control and obedience),</li>
                        <li>Luthic the Cave Mother (slavery, conservative family values),</li>
                        <li>Baalzebul, the Lord of the Nine Hells (tyranny and bureaucracy), and</li>
                        <li>Lukilla the Eclipse (secrecy, revenge and ambition).</li>
                        <h3>Laws of the Material Plane</h3>
                        <li>Because the Material Plane is now part of Ngati&quot;s Domain - the Deep Wilds - and because of significant efforts by the Lovers, the laws of nature of the old era no longer apply. Here is how Ngati, Harmony and Lathander changed the Material Plane:</li>
                        <li>No more physical diseases.</li>
                        <li>No more natural disasters.</li>
                        <li>Nothing can live eternally, no magic or racial abilities can accomplish that. Lifespan normalizes to 150 years maximum.</li>
                        <li>Reviving someone after death is impossible — this doesn&quot;t work because of the Divine Gate&quot;s current location.</li>
                        <li>No more Nullification, so organized armies can now move again.</li>
                        <li>Another population boom. Cities are overcrowded.</li>
                        <li>Wildlife prospers. Wild lands become super dangerous to go into.</li>
                        <li>After these changes, the Multiverse is now known to mortals as the Shining Realms.</li>
                        <h3>The Twin Planets</h3>
                        <li>The Material Plane consists of the twin planets of <span className="highlight">Abeir</span> and <span className="highlight">Toril</span>. Abeir and Toril are sister planets. They rotate around a single star, always on opposite sides. There are places called <span className="highlight">Crossings</span>. There, one can transition from one planet onto another.</li>
                        <h4>Abeir: Leordis</h4>
                        <li>On the planet of Abeir, the most important continent is the sunny, tropical archipelago of <span className="highlight">Leordis</span>.</li>
                        <h4>Toril: Sword Coast</h4>
                        <li>On the planet of Toril, the most important part of the world is the mountainous cliffside known as <span className="highlight">the Sword Coast</span>.</li>
                        <li>The Sword Coast is a Europe-inspired collection of independent city states like <span className="highlight">the Gate</span> (formerly Baldur&quot;s Gate) and <span className="highlight">the Deep</span> (formerly Waterdeep).</li>
                        <li>The Sword Coast has not fared well in the last century: disbanding of <span className="highlight">the Bright Alliance</span> (a former confederation of Sword Coast cities) and the lack of competent rulership has thrown the region into dirt, slums, corruption and a rise of organized crime.</li>
                        <h3>Technology</h3>
                        <li>After Whetu&quot;s Collision, the world pivoted towards high-magic and high-clergy, instead of inventions. Magic and divinity prevent much non-magical tech from being invented, but gunpowder, clockwork, sewers and the printing press all exist. About 1750s level of technology in cities, about 1500s in rural areas.</li>
                        <h3>Main factions of the Material Plane</h3>
                        <li>In the previous era, there have not really been any factions that spanned the entirety of the Material Plane. In the past, factions have been more localized. Factions of the Second Era have become planet-spanning: they have cells and members across nations and continents, in towns and cities.</li>
                        <li><span className="highlight">The Free Spirits</span> (previously known as the Yellow Banner of Peace) is a series of nomadic groups that teach each other artisanship (and earn through that), travel the entire Shining Realms, and help the defenseless communities of each settlement they enter under the banner of the Deity Harmony.</li>
                        <li>The churches of Lathander have combined into a knightly order of Lathander called <span className="highlight">the Morningwatch</span>. They travel the Shining Realms, protecting the weak.</li>
                        <li><span className="highlight">The Movers and Shakers</span> fight for the rights of laborers across the world — like a trade union, defending workers against tyrants, rulers and the rich. Their leaders secretly believe that the ultimate tyrants are The Lovers, and since Whetu&quot;s Collision, humanoids have been dragged into the Gods&quot; instability.</li>
                        <li>Influence of the drow in the Sword Coast is at an all-time high. They rule the Sword Coast from the shadows. The drow empire has transformed into a multi-race organization called <span className="highlight">Umbra</span> that is powerful enough to give orders to all Sword Coast cities.</li>
                        <h3>The Wilds of Agrestia</h3>
                        <h4>Intro</h4>
                        <li>Agrestia is a Portuguese-Occitan inspired oligarchic republic. Its fun-loving, vibrant and charismatic culture is centered around the motto: “style over substance”.</li>
                        <h4>Culture</h4>
                        <li>In Agrestia every day is a performance, every deal a dance, and every citizen a star in the grand theatre of life.</li>
                        <li>Virtues: success, shrewdness, style, wit, polymathism.</li>
                        <li>Vices: failure, bad style (i.e. doing something not in the Agrestian way), bluntness, dullness, mercilessness.</li>
                        <li>The rich and merchants are a lot less fun-loving: they care about little more than their own bottom line and are in no way above strongarm tactics, leonine contracts, and shutting out their competitors for their own profit.</li>
                        <h4>Names</h4>
                        <li>Portuguese-Occitan names, but with a flair of style and memorability. If someone at 18 decides to be called by some other name or title, nobody bats an eye in Agrestia, as long as it is stylish and they pull it off.</li>
                        <h4>Geography</h4>
                        <li>Lush region, full of jungles, rivers, and lush hills.</li>
                        <h4>Social Classes</h4>
                        <li>Self-made people who rose from nothing and became the rich merchants in Agrestia have historically been called <span className="highlight">Agrestian Eagles</span>. Now, however, this is no longer true because these “self-made people” have started dynasties, who are now rich families. However, the name Agrestian Eagle for the head of such a rich merchant family stayed.</li>
                        <li><span className="highlight">Lansquenete</span>, or Honor Guard, is a loosely-organized mercenary guild who is hired for a lot of things - protection, bodyguards, paid assassins, combat instructors, and often act as private police.</li>
                        <li>Agrestia has surprisingly few laws and regulations. Each Agrestian town&quot;s mayor is called <span className="highlight">Constable</span>, who is given a budget, and is expected to use it to hire soldiers or guards if something needs to be accomplished.</li>
                        <li>Pirates are abundant in Leordis. For as long as anybody can remember, they have been united in a loose-confederation known as the <span className="highlight">Reyes Sin Lugar</span>. The Reyes have always had ties to Agrestia, and are often encountered in Agrestia.</li>
                        <li>The <span className="highlight">working class</span> often works in maritime trade or agriculture and wineries. They are underpaid, but are still expected to behave and present with style.</li>
                        <h4>Government</h4>
                        <li>The ten Agrestian Eagles sit in a supreme council of Agrestia, the Segretta mea Compresa, or, colloquially, <span className="highlight">the Ring of Eagles</span>. This is the highest government body of Agrestia.</li>
                        <li>Historically, the Ring of Eagles has appointed a <span className="highlight">Director</span>, an executive who controls finances and makes executive decisions (still goes through a lot of approvals for every action).</li>
                        <li>However, espionage manipulations by foreign powers about 100 years ago have changed that - now the Director is no longer appointed by the Ring of Eagles, but elected for five years by <span className="highlight">a nationwide election</span>.</li>
                    </ul>
                    <div className="returnButton">
                        <Link to="/c5-new/">
                            <button>Return</button>
                        </Link>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}

export default LorePage;