import { motion } from 'framer-motion';

export default function LoreCollapse() {
  return (
    <motion.div
      className="gameBlock"
      initial={{ transform: 'translate(-100%)' }} // Initial position off-screen to the left
      animate={{ transform: 'translate(0%)' }} // Animate to opacity 1 and position 0 (sliding in from left)
      exit={{ transform: 'translate(100%)' }} // Animate to opacity 0 and position off-screen to the right (sliding out to right)
      transition={{ duration: 0.5 }}
    >
      <div
        className="flex flex-col min-h-screen"
        style={{ fontFamily: 'Playfair' }}
      >
        <div className="flex flex-col items-center mx-5 my-10">
          <h1 className="text-4xl my-10" style={{ fontFamily: 'LaPointes' }}>
            The Lore
          </h1>
          <div className="collapse collapse-arrow bg-base-200 my-3 mx-5">
            <input type="radio" name="my-accordion-2" defaultChecked />
            <div className="collapse-title text-xl font-medium">Multiverse</div>
            <div className="collapse-content">
              <p>
                The world consists of dimensions. They are called Planes of
                Existence. Among them, the world of mortals is the Material
                Plane.
              </p>
              <p>
                There are other dimensions: most of them are ruled by Gods,
                where their will is supreme. Such dimensions are called the
                Outer Planes.
              </p>
              <p>
                In the past, the Outer Planes were walled off from the Material
                Plane by a great barrier called the Divine Gate. The power of
                the Gods could not penetrate the Divine Gate and it kept the
                world of the Gods and the world of the mortals separate.
              </p>
              <p>
                171 years ago, the first era ended with an event now known as
                Whetu&apos;s Collision. The Material Plane was dragged to the
                other side of the Divine Gate, so it could no longer separate
                the Material Plane and the Outer Planes.
              </p>
              <p>
                For these 171 years, the Material Plane has existed as a layer,
                a part, of an Outer Plane known as the Deep Wilds, home to
                Ngati, the Deity of Wild Nature. Without separation by the
                Divine Gate, the Gods can now directly influence the Material
                Plane, and the only reason they hesitate to do so - is because
                of protection by Ngati.
              </p>
              <p>
                There exist, however, Deities so ancient and foreign, so
                powerful and alien, that even Ngati may not be able to fend them
                off if they decide to invade the Material Plane. These deities
                are poorly understood, and are known as the Great Old Ones.
              </p>
            </div>
          </div>

          <div className="collapse collapse-arrow bg-base-200 my-3 mx-5">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title text-xl font-medium">
              Greater and Lesser Deities
            </div>
            <div className="collapse-content">
              <p>
                Deities are divided into Greater Gods and Lesser Gods. Greater
                Gods, for one reason or another, are Gods that currently hold
                more power than the other Gods. Among people who have dedicated
                themselves to a Deity, most choose a Greater God. Worship of
                Lesser Gods has declined in popularity, and is now mostly
                practiced for specific purposes - like if you need something
                from a specific deity.
              </p>
            </div>
          </div>

          <div className="collapse collapse-arrow bg-base-200 my-3 mx-5">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title text-xl font-medium">
              The Greater Gods are:
            </div>
            <div className="collapse-content">
              <p>Ngati, the Old Oak, and the holder of the Material Plane;</p>
              <p>
                Harmony, the Free Spirit and the Deity of Freedom and
                Cooperation and Lathander, the Morninglord, the God of Birth,
                Renewal, Vitality and the Sun. Harmony and Lathander are known
                together as the Lovers. A lot of churches of the world are
                dedicated to the Lovers.
              </p>
            </div>
          </div>

          <div className="collapse collapse-arrow bg-base-200 my-3 mx-5">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title text-xl font-medium">
              Evil Greater Gods are:
            </div>
            <div className="collapse-content">
              <p>
                Tel&apos;Tuchi the Archeart (utilitarian ethics, control and
                obedience),
              </p>
              <p>
                Luthic the Cave Mother (slavery, conservative family values),
              </p>
              <p>
                Baalzebul, the Lord of the Nine Hells (tyranny and bureaucracy),
                and
              </p>
              <p>Lukilla the Eclipse (secrecy, revenge and ambition).</p>
            </div>
          </div>

          <div className="collapse collapse-arrow bg-base-200 my-3 mx-5">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title text-xl font-medium">
              Laws of the Material Plane
            </div>
            <div className="collapse-content">
              <p>
                Because the Material Plane is now part of Ngati&apos;s Domain -
                the Deep Wilds - and because of significant efforts by the
                Lovers, the laws of nature of the old era no longer apply. Here
                is how Ngati, Harmony and Lathander changed the Material Plane:
              </p>
              <p>No more physical diseases.</p>
              <p>No more natural disasters.</p>
              <p>
                Nothing can live eternally, no magic or racial abilities can
                accomplish that. Lifespan normalizes to 150 years maximum.
              </p>
              <p>
                Reviving someone after death is impossible — this doesn&apos;t
                work because of the Divine Gate&apos;s current location.
              </p>
              <p>
                No more Nullification, so organized armies can now move again.
              </p>
              <p>Another population boom. Cities are overcrowded.</p>
              <p>
                Wildlife prospers. Wild lands become super dangerous to go into.
              </p>
              <p>
                After these changes, the Multiverse is now known to mortals as
                the Shining Realms.
              </p>
            </div>
          </div>

          <div className="collapse collapse-arrow bg-base-200 my-3 mx-5">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title text-xl font-medium">
              The Twin Planets
            </div>
            <div className="collapse-content">
              <p>
                The Material Plane consists of the twin planets of Abeir and
                Toril. Abeir and Toril are sister planets. They rotate around a
                single star, always on opposite sides. There are places called
                Crossings. There, one can transition from one planet onto
                another.
              </p>
              <h4>Abeir: Leordis</h4>
              <p>
                On the planet of Abeir, the most important continent is the
                sunny, tropical archipelago of Leordis.
              </p>
              <h4>Toril: Sword Coast</h4>
              <p>
                On the planet of Toril, the most important part of the world is
                the mountainous cliffside known as the Sword Coast.
              </p>
              <p>
                The Sword Coast is a Europe-inspired collection of independent
                city states like the Gate (formerly Baldur&apos;s Gate) and the
                Deep (formerly Waterdeep).
              </p>
              <p>
                The Sword Coast has not fared well in the last century:
                disbanding of the Bright Alliance (a former confederation of
                Sword Coast cities) and the lack of competent rulership has
                thrown the region into dirt, slums, corruption and a rise of
                organized crime.
              </p>
            </div>
          </div>

          <div className="collapse collapse-arrow bg-base-200 my-3 mx-5">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title text-xl font-medium">Technology</div>
            <div className="collapse-content">
              <p>
                After Whetu&apos;s Collision, the world pivoted towards
                high-magic and high-clergy, instead of inventions. Magic and
                divinity prevent much non-magical tech from being invented, but
                gunpowder, clockwork, sewers and the printing press all exist.
                About 1750s level of technology in cities, about 1500s in rural
                areas.
              </p>
            </div>
          </div>

          <div className="collapse collapse-arrow bg-base-200 my-3 mx-5">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title text-xl font-medium">
              Main factions of the Material Plane
            </div>
            <div className="collapse-content">
              <p>
                In the previous era, there have not really been any factions
                that spanned the entirety of the Material Plane. In the past,
                factions have been more localized. Factions of the Second Era
                have become planet-spanning: they have cells and members across
                nations and continents, in towns and cities.
              </p>
              <p>
                The Free Spirits (previously known as the Yellow Banner of
                Peace) is a series of nomadic groups that teach each other
                artisanship (and earn through that), travel the entire Shining
                Realms, and help the defenseless communities of each settlement
                they enter under the banner of the Deity Harmony.
              </p>
              <p>
                The churches of Lathander have combined into a knightly order of
                Lathander called the Morningwatch. They travel the Shining
                Realms, protecting the weak.
              </p>
              <p>
                The Movers and Shakers fight for the rights of laborers across
                the world — like a trade union, defending workers against
                tyrants, rulers and the rich. Their leaders secretly believe
                that the ultimate tyrants are The Lovers, and since Whetu&apos;s
                Collision, humanoids have been dragged into the Gods&apos;
                instability.
              </p>
              <p>
                Influence of the drow in the Sword Coast is at an all-time high.
                They rule the Sword Coast from the shadows. The drow empire has
                transformed into a multi-race organization called Umbra that is
                powerful enough to give orders to all Sword Coast cities.
              </p>
            </div>
          </div>

          <div className="collapse collapse-arrow bg-base-200 my-3 mx-5">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title text-xl font-medium">
              The Wilds of Agrestia
            </div>
            <div className="collapse-content">
              <p>
                Agrestia is a Portuguese-Occitan inspired oligarchic republic.
                Its fun-loving, vibrant and charismatic culture is centered
                around the motto: “style over substance”.
              </p>
              <p>
                Culture: In Agrestia every day is a performance, every deal a
                dance, and every citizen a star in the grand theatre of life.
              </p>
              <p>Virtues: success, shrewdness, style, wit, polymathism.</p>
              <p>
                Vices: failure, bad style (i.e. doing something not in the
                Agrestian way), bluntness, dullness, mercilessness.
              </p>
              <p>
                The rich and merchants are a lot less fun-loving: they care
                about little more than their own bottom line and are in no way
                above strongarm tactics, leonine contracts, and shutting out
                their competitors for their own profit.
              </p>
              <p>
                Names: Portuguese-Occitan names, but with a flair of style and
                memorability. If someone at 18 decides to be called by some
                other name or title, nobody bats an eye in Agrestia, as long as
                it is stylish and they pull it off.
              </p>
              <p>
                Geography: Lush region, full of jungles, rivers, and lush hills.
              </p>
              <h4>Social Classes</h4>
              <p>
                Self-made people who rose from nothing and became the rich
                merchants in Agrestia have historically been called{' '}
                <span className="highlight">Agrestian Eagles</span>. Now,
                however, this is no longer true because these “self-made people”
                have started dynasties, who are now rich families. However, the
                name Agrestian Eagle for the head of such a rich merchant family
                stayed.
              </p>
              <p>
                <span className="highlight">Lansquenete</span>, or Honor Guard,
                is a loosely-organized mercenary guild who is hired for a lot of
                things - protection, bodyguards, paid assassins, combat
                instructors, and often act as private police.
              </p>
              <p>
                Agrestia has surprisingly few laws and regulations. Each
                Agrestian town&apos;s mayor is called{' '}
                <span className="highlight">Constable</span>, who is given a
                budget, and is expected to use it to hire soldiers or guards if
                something needs to be accomplished.
              </p>
              <p>
                Pirates are abundant in Leordis. For as long as anybody can
                remember, they have been united in a loose-confederation known
                as the <span className="highlight">Reyes Sin Lugar</span>. The
                Reyes have always had ties to Agrestia, and are often
                encountered in Agrestia.
              </p>
              <p>
                The <span className="highlight">working class</span> often works
                in maritime trade or agriculture and wineries. They are
                underpaid, but are still expected to behave and present with
                style.
              </p>
              <h4>Government</h4>
              <p>
                The ten Agrestian Eagles sit in a supreme council of Agrestia,
                the Segretta mea Compresa, or, colloquially,{' '}
                <span className="highlight">the Ring of Eagles</span>. This is
                the highest government body of Agrestia.
              </p>
              <p>
                Historically, the Ring of Eagles has appointed a{' '}
                <span className="highlight">Director</span>, an executive who
                controls finances and makes executive decisions (still goes
                through a lot of approvals for every action).
              </p>
              <p>
                However, espionage manipulations by foreign powers about 100
                years ago have changed that - now the Director is no longer
                appointed by the Ring of Eagles, but elected for five years by{' '}
                <span className="highlight">a nationwide election</span>.
              </p>

              <p></p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
