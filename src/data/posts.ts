import { BlogPost } from '../types/blog';

// Generated authentic motorcycle expedition photographs
import heroLadakhImg from '../assets/images/himalaya_moto_hero_1792025542461.jpg';
import spitiImg from '../assets/images/spiti_valley_ride_1792025542312.jpg';
import munnarImg from '../assets/images/munnar_western_ghats_1792025543280.jpg';
import desertImg from '../assets/images/rajasthan_desert_ride_1792025543548.jpg';
import konkanImg from '../assets/images/konkan_coastal_ride_1792025543462.jpg';

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'post-1',
    slug: 'manali-leh-khardungla',
    title: 'Conquering Khardung La & the Manali-Leh Highway: An 18,380ft Rite of Passage',
    subtitle: 'Navigating 474 kilometers of permafrost, the Gata Loops, and thin alpine air on two wheels.',
    excerpt: 'The ultimate proving ground for adventure motorcyclists. From the pine valleys of Kullu across five high Himalayan passes to the windswept summit of Khardung La.',
    coverImage: heroLadakhImg,
    imageAlt: 'Adventure motorcycle with aluminium panniers parked on a high mountain pass in Ladakh with snow-capped Himalayan peaks in the background',
    region: 'Himalayas',
    distanceKm: 474,
    durationDays: '4 to 6 Days',
    maxElevationMeters: 5359,
    maxElevationFeet: 17582,
    difficulty: 'Extreme Expedition',
    bestSeason: 'June to mid-September',
    recommendedBike: 'Royal Enfield Himalayan 450, KTM 390 Adventure, BMW G310GS',
    fuelAvailability: 'Zero fuel between Darcha and Karu (approx. 365 km). 10L jerry cans mandatory.',
    permitsRequired: 'Green Rohtang Permit, Ladakh Inner Line Permit (ILP) for Nubra & Pangong',
    publishedDate: 'October 12, 2026',
    readingTimeMinutes: 9,
    featured: true,
    author: {
      name: 'Kabir Varma',
      handle: '@kabir_on_two_wheels',
      role: 'Lead Expedition Scout',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
      bio: 'Over 85,000 km across the Himalayas and Trans-Himalayan corridors over the past 11 seasons.'
    },
    checkpoints: [
      { name: 'Manali (Start)', altitudeM: 2050, distanceKm: 0, note: 'Final mechanic check, tank fill-up, cold gear prep' },
      { name: 'Atal Tunnel North Portal / Rohtang', altitudeM: 3100, distanceKm: 35, note: 'Gateway entering the barren Lahaul valley' },
      { name: 'Keylong / Jispa', altitudeM: 3200, distanceKm: 138, note: 'Recommended night halt for AMS acclimatization' },
      { name: 'Baralacha La', altitudeM: 4890, distanceKm: 220, note: ' treacherous ice flows, Suraj Tal lake vista' },
      { name: 'Sarchu Camp', altitudeM: 4290, distanceKm: 252, note: 'Border between Himachal and Ladakh; sub-zero night temps' },
      { name: 'Gata Loops (21 Hairpin Bends)', altitudeM: 4660, distanceKm: 275, note: 'Rapid elevation gain of 450m in 15 km' },
      { name: 'Nakee La & Lachulung La', altitudeM: 5059, distanceKm: 300, note: 'Dual 5,000m summits with loose gravel switchbacks' },
      { name: 'More Plains', altitudeM: 4800, distanceKm: 345, note: '40km high-altitude plateau with strong crosswinds' },
      { name: 'Tanglang La', altitudeM: 5328, distanceKm: 395, note: 'Second highest pass on the highway; oxygen levels ~50%' },
      { name: 'Leh City', altitudeM: 3524, distanceKm: 474, note: 'Permit verification, bike wash, rest and Nubra prep' },
      { name: 'Khardung La Summit', altitudeM: 5359, distanceKm: 514, note: 'The prayer flag summit entering the Nubra Valley' }
    ],
    elevationPoints: [
      { point: 'Manali', elevation: 2050 },
      { point: 'Jispa', elevation: 3200 },
      { point: 'Baralacha La', elevation: 4890 },
      { point: 'Sarchu', elevation: 4290 },
      { point: 'Gata Loops', elevation: 4660 },
      { point: 'Lachulung La', elevation: 5059 },
      { point: 'More Plains', elevation: 4800 },
      { point: 'Tanglang La', elevation: 5328 },
      { point: 'Leh', elevation: 3524 },
      { point: 'Khardung La', elevation: 5359 }
    ],
    tags: ['Ladakh', 'High Altitude', 'Khardung La', 'Manali-Leh', 'Mountain Passes'],
    content: {
      overview: 'There is a moment on the descent from Baralacha La when the sound of your single-cylinder thumper echoes against miles of raw basalt, and you realize that civilization has completely receded. The Manali-Leh Highway (NH 3) is not merely a mountain road; it is an expedition that tests engine compression, tire integrity, and mental fortitude against the highest motorable corridors on Earth.',
      routeBreakdown: [
        {
          heading: 'Leg 1: Leaving Manali and the Ascent to Jispa',
          body: 'Whether you choose the vintage climb over Rohtang Pass (3,978m) or the engineering marvel of the 9.02km Atal Tunnel, entering the Chandra Valley feels like stepping through a dimensional portal. The lush cedar greens of Kullu vanish instantly, replaced by the towering slate cliffs of Lahaul. Settle into Jispa for the first night. At 3,200 meters, this is where your body begins producing the extra red blood cells needed for the harrowing days ahead.',
          highlight: 'Never rush past Jispa. Sleeping directly at Sarchu (4,290m) without acclimatizing is the number one cause of acute mountain sickness (AMS) evacuation.'
        },
        {
          heading: 'Leg 2: The High Passes — Baralacha La, Gata Loops, and Lachulung La',
          body: 'Departing early before noon is critical: glacial snow melts under the midday sun and transforms minor trickles into roaring water crossings (nallahs) like Zingzingbar and Bharatpur. Baralacha La at 4,890m greets you with ice walls and the turquoise mirror of Suraj Tal. Soon after Sarchu, you hit the 21 consecutive hairpin turns of the Gata Loops, ascending relentlessly into the twin 5,000m summits of Nakee La and Lachulung La.',
          highlight: 'Keep constant throttle momentum through loose shale turns. Stalling on a 15% uphill grade at 5,000m altitude puts immense strain on both rider and starter motor.'
        },
        {
          heading: 'Leg 3: Screaming Across More Plains to Tanglang La',
          body: 'Dropping down from Pang opens into the surreal More Plains — an otherworldly 40-kilometer straight flat valley perched nearly 5,000 meters above sea level. You feel as though you are riding across the roof of the world. Then begins the final ascent to Tanglang La (5,328m). Even fuel-injected motorcycles lose roughly 25-30% of their peak power in this oxygen-deprived atmosphere.',
          highlight: 'Watch for sudden deceptive dust patches and crosswinds on More Plains. Stay centered on the paved track.'
        },
        {
          heading: 'The Final Climb: Khardung La (17,582ft)',
          body: 'After resting 24 hours in Leh, the final push ascends 39 kilometers north through endless switchbacks to Khardung La. As you reach the stupas covered in hundreds of fluttering Buddhist prayer flags, the view stretches across the Karakoram Range to the north and the Zanskar Range to the south. You have reached one of the pinnacles of global motorcycle adventure.'
        }
      ],
      fuelAndLogistics: 'Fuel is the primary logistical hurdle. The last reliable fuel pump in Himachal is at Tandi (near Keylong). From Tandi to Karu (just outside Leh) is approximately 365 kilometers with zero filling stations. Motorcycles with under 400km real-world range must carry at least 8 to 10 liters of auxiliary fuel in certified military jerry cans or fuel bladders.',
      permits: 'A Green Permit is required if taking the old Rohtang route from Manali. For travel beyond Leh (Nubra Valley, Pangong Tso, Hanle), you must obtain an Inner Line Permit (ILP) from the Leh DC office or online at lahdclehpermit.in.',
      bikePreparation: 'Fit 50/50 dual-sport tires (e.g. Ralco, Reise Moto, or Metzeler Sahara), install an aluminium bash plate, engine crash bars, and heavy-duty handguards. Carry spare spark plugs, throttle/clutch cables, chain links, a portable 12V air inflator, and tubeless repair cords or heavy-duty 4mm tubes.',
      packingTips: [
        'Layering is key: Base moisture-wicking layer, fleece mid-layer, windproof riding jacket, and rain shell',
        'Medical kit: Diamox (acetazolamide) for AMS (consult a physician), ORS packets, ibuprofen, lip balm with SPF 50',
        'Dry bags with ratchet straps; bungee cords frequently snap under heavy vibrations',
        'Offline maps downloaded on dual devices (Maps.me / OsmAnd / Google Maps offline)'
      ],
      riderVerdict: 'An arduous, life-altering journey that demands respect for altitude and weather. Prepare meticulously, pace yourself with the mountain, and it will reward you with vistas that will burn into your memory forever.'
    }
  },
  {
    id: 'post-2',
    slug: 'spiti-valley-circuit',
    title: 'The Middle Land Expedition: Riding the Rugged Shimla-Kaza-Manali Circuit',
    subtitle: 'River crossings, 1,000-year-old cliffside monasteries, and the feared Kunzum Pass.',
    excerpt: 'Deep into the cold mountain desert bordering Tibet. A complete guide to tackling Spiti Valley via the Hindustan-Tibet Highway and surviving the brutal bed of Batal.',
    coverImage: spitiImg,
    imageAlt: 'Expedition motorcycle on a cliffside unpaved gravel track in Spiti Valley with Tibetan monastery and prayer flags',
    region: 'Himalayas',
    distanceKm: 850,
    durationDays: '7 to 9 Days',
    maxElevationMeters: 4590,
    maxElevationFeet: 15060,
    difficulty: 'Extreme Expedition',
    bestSeason: 'June to October (roads open June 15)',
    recommendedBike: 'Dual-sport or lightweight ADV: Himalayan, Xpulse 200 4V, Scrambler 400X',
    fuelAvailability: 'Pumps available at Reckong Peo, Powari, and the highest retail outlet in Kaza',
    permitsRequired: 'Inner Line Permit required for foreign nationals between Khab and Sumdo',
    publishedDate: 'October 8, 2026',
    readingTimeMinutes: 10,
    featured: true,
    author: {
      name: 'Aditi Nair',
      handle: '@aditi_throttle',
      role: 'Terrain Specialist',
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&auto=format&fit=crop&q=80',
      bio: 'Solo adventure rider with 60,000+ km across India, Bhutan, and Nepal.'
    },
    checkpoints: [
      { name: 'Shimla (Start)', altitudeM: 2206, distanceKm: 0, note: 'Gradual elevation gain via Hindustan-Tibet Highway NH5' },
      { name: 'Narkanda & Rampur', altitudeM: 2708, distanceKm: 65, note: 'Apple orchard descents into the deep Sutlej river gorge' },
      { name: 'Kalpa / Reckong Peo', altitudeM: 2960, distanceKm: 240, note: 'View of the sacred Kinner Kailash peak' },
      { name: 'Nako Village & Lake', altitudeM: 3662, distanceKm: 345, note: 'Entering the rain-shadow Trans-Himalayan desert' },
      { name: 'Tabo Monastery', altitudeM: 3280, distanceKm: 410, note: 'UNESCO heritage mud monastery founded in 996 CE' },
      { name: 'Dhankar Gompa', altitudeM: 3894, distanceKm: 445, note: 'Cliff-edge monastery overlooking Spiti & Pin river confluence' },
      { name: 'Kaza Town', altitudeM: 3800, distanceKm: 480, note: 'Capital of Spiti, highest petrol pump in the world' },
      { name: 'Key Gompa & Kibber', altitudeM: 4166, distanceKm: 505, note: 'Iconic monastery fortress and snow leopard sanctuary' },
      { name: 'Kunzum La', altitudeM: 4590, distanceKm: 560, note: 'Fierce winds and shrine to Goddess Kunzum' },
      { name: 'Batal / Chhatru', altitudeM: 3960, distanceKm: 595, note: 'Infamous 60km boulder field with bone-chilling river crossings' },
      { name: 'Manali (Finish)', altitudeM: 2050, distanceKm: 670, note: 'Rejoining civilization via Rohtang or Atal Tunnel' }
    ],
    elevationPoints: [
      { point: 'Shimla', elevation: 2206 },
      { point: 'Narkanda', elevation: 2708 },
      { point: 'Reckong Peo', elevation: 2960 },
      { point: 'Nako', elevation: 3662 },
      { point: 'Tabo', elevation: 3280 },
      { point: 'Dhankar', elevation: 3894 },
      { point: 'Kaza', elevation: 3800 },
      { point: 'Kibber', elevation: 4270 },
      { point: 'Kunzum La', elevation: 4590 },
      { point: 'Batal', elevation: 3960 },
      { point: 'Manali', elevation: 2050 }
    ],
    tags: ['Spiti Valley', 'Kunzum La', 'Himachal', 'Off-Road', 'Monasteries'],
    content: {
      overview: 'Spiti means "The Middle Land" — the rugged desert plateau that sits between India and Tibet. Unlike Ladakh, which now features long stretches of smooth two-lane military asphalt, the Spiti circuit remains gloriously raw, unfiltered, and mechanically demanding. The boulder fields between Gramphu and Batal will rattle every loose bolt on your chassis.',
      routeBreakdown: [
        {
          heading: 'Why You Must Always Ride Clockwise',
          body: 'Starting from Shimla gives your body 4 full days of gradual altitude acclimation before you ever touch 3,500 meters. Climbing up via Manali puts you at 4,590 meters on Kunzum La within 24 hours, often resulting in severe altitude illness. Furthermore, the sheer rock-cut cliffs of Kinnaur NH 5 are best experienced climbing upward.',
          highlight: 'Kinnaur’s "Taranda Dhank" — a highway literally blasted out of vertical rock overhangs with 1,000-foot drops directly into the Sutlej river.'
        },
        {
          heading: 'The Sacred Monasteries: Tabo, Dhankar, and Key',
          body: 'Riding past Sumdo brings you into the heart of Tibetan Buddhist culture. Stop at Tabo, where millennium-old fresco murals have survived untouched in dry desert air. Ride the tight switchbacks up to Dhankar, where whitewashed monastery buildings balance precariously on crumbling spire pinnacles high above the turquoise river confluence.',
          highlight: 'Fuel up at the Indian Oil pump in Kaza, located at 3,740 meters — the highest retail outlet in the world.'
        },
        {
          heading: 'The Crucible: Kunzum La and the Batal-Gramphu Boulder Trench',
          body: 'After leaving Kaza, the track disintegrates into pure river silt and loose scree up to Kunzum Pass (4,590m). At the summit, circumnavigate the temple clockwise as local custom demands. The descent toward Batal is legendary: 60 kilometers of relentless riverbeds where melted glacier streams like Chhota Dara rush across jagged submerged boulders.',
          highlight: 'Cross Batal before 11:00 AM. In the afternoon, glacier meltwater increases stream depth by over 18 inches, easily flooding air filters.'
        }
      ],
      fuelAndLogistics: 'Reckong Peo/Powari has reliable fuel. The next pump is Kaza (200km later). Always top up to full in Kaza because electrical blackouts or tanker delays can occasionally cause local outages.',
      permits: 'Indian nationals require no permits. Foreign nationals must obtain an Inner Line Permit in Shimla, Reckong Peo, or Kaza for the stretch between Jangi and Sumdo.',
      bikePreparation: 'High ground clearance is non-negotiable (>190mm). Check spoke tension and steering head bearings. Secure your side-stand with a wide footpad so the bike does not tip into soft sandy soil.',
      packingTips: [
        'Waterproof riding boots or waterproof Gore-Tex socks for river crossings',
        'Extra air filter (sand and silt clog elements rapidly)',
        'Cash in INR; digital UPI and ATMs are virtually non-existent beyond Reckong Peo',
        'Headlamp with spare batteries for unlit mountain homestays'
      ],
      riderVerdict: 'Spiti is the real Himalayan adventure. If you survive the rock crawl of Batal with your bike and spirit intact, you can ride virtually anywhere on the planet.'
    }
  },
  {
    id: 'post-3',
    slug: 'munnar-valparai-ghats',
    title: 'Chasing Monsoon Clouds Through Munnar & the 40 Hairpins of Valparai',
    subtitle: 'Deep emerald tea estates, mist-wrapped valleys, and the Anamalai Tiger Reserve.',
    excerpt: 'A sensory motorcycle voyage through South India’s premier mountain roads. Carving smooth tarmac curves through Kerala and Tamil Nadu’s highest biodiversity hotspots.',
    coverImage: munnarImg,
    imageAlt: 'Motorcycle carving through scenic winding mountain road lined with vivid green tea plantations in Munnar Kerala',
    region: 'Western Ghats',
    distanceKm: 320,
    durationDays: '3 Days',
    maxElevationMeters: 2150,
    maxElevationFeet: 7050,
    difficulty: 'Moderate',
    bestSeason: 'August to February (Post-monsoon is spectacular)',
    recommendedBike: 'KTM Duke / Adv 250/390, Royal Enfield Hunter 350, Interceptor 650',
    fuelAvailability: 'Plentiful throughout Munnar, Valparai, and Pollachi',
    permitsRequired: 'Forest checkpost entry registration at Anamalai Tiger Reserve / Vazhachal',
    publishedDate: 'September 28, 2026',
    readingTimeMinutes: 7,
    author: {
      name: 'Rohan Deshmukh',
      handle: '@rohan_apex',
      role: 'Touring & Tech Editor',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80',
      bio: 'Ex-superbike racer turned cross-country endurance rider with 12 Iron Butt certificates.'
    },
    checkpoints: [
      { name: 'Kochi (Start)', altitudeM: 5, distanceKm: 0, note: 'Coastal humidity departing toward the foothills' },
      { name: 'Cheeyappara Waterfalls', altitudeM: 650, distanceKm: 85, note: 'Cascading roadside waterfalls on the Kochi-Dhanushkodi highway' },
      { name: 'Munnar Hill Station', altitudeM: 1532, distanceKm: 130, note: 'Lush tea plantations, cool mountain climate' },
      { name: 'Top Station / Lockhart Gap', altitudeM: 1880, distanceKm: 165, note: 'Dramatic panoramic ridge over Tamil Nadu plains' },
      { name: 'Marayoor Sandalwood Forests', altitudeM: 1000, distanceKm: 210, note: 'Natural sandalwood reserve and ancient dolmens' },
      { name: 'Chinnar Wildlife Sanctuary', altitudeM: 500, distanceKm: 235, note: 'Watch for wild elephant crossings on tarmac' },
      { name: 'Aliyar Dam & 40 Hairpins', altitudeM: 300, distanceKm: 275, note: 'Beginning of the numbered 40 hairpin ascent to Valparai' },
      { name: 'Valparai Plateau', altitudeM: 1060, distanceKm: 320, note: 'Secluded tea estate town inside Anamalai Tiger Reserve' }
    ],
    elevationPoints: [
      { point: 'Kochi', elevation: 5 },
      { point: 'Adimali', elevation: 650 },
      { point: 'Munnar', elevation: 1532 },
      { point: 'Lockhart Gap', elevation: 1880 },
      { point: 'Marayoor', elevation: 1000 },
      { point: 'Chinnar', elevation: 500 },
      { point: 'Valparai Hairpins', elevation: 850 },
      { point: 'Valparai', elevation: 1060 }
    ],
    tags: ['Western Ghats', 'Munnar', 'Kerala', 'Tamil Nadu', 'Corner Carving'],
    content: {
      overview: 'If the Himalayas are a test of survival, the Western Ghats are pure motorcycling euphoria. Smooth tarmac ribbons unfurl across endless tea garden hills, bordered by ancient tropical rain trees and cloaked in cool swirling monsoon mist. This route linking Munnar and the secluded tea sanctuary of Valparai is widely recognized as the finest corner-carving corridor in the subcontinent.',
      routeBreakdown: [
        {
          heading: 'The Climb Up the Kochi-Dhanushkodi Highway (NH 85)',
          body: 'Leaving the Arabian Sea behind, NH 85 begins its climb past Kothamangalam. The air drops 10 degrees within an hour as the asphalt tightens into sweeping third-gear curves. The recently rebuilt Gap Road section carved into granite cliffs delivers vistas that resemble a Scottish highland coated in tropical greenery.',
          highlight: 'Ride during early morning hours (6:00 AM - 9:00 AM) to catch sunbeams piercing the heavy morning cloud inversion.'
        },
        {
          heading: 'Through Chinnar and the Anamalai Foothills',
          body: 'Dropping down the eastern slope toward Marayoor brings you into dry deciduous forest inhabited by wild elephants and spotted deer. Respect the speed limits: forest guards strictly monitor wildlife safety. At the Aliyar checkpost in Tamil Nadu, you begin the legendary 40 hairpin climb.',
          highlight: 'Each of the 40 hairpin turns is officially numbered on granite milestones. The banking is progressive and rewarding.'
        },
        {
          heading: 'The 40 Hairpins of Valparai: Cornering Heaven',
          body: 'From hairpin 1 to 40, the road climbs over 800 vertical meters. With light traffic and pristine grip, you lean rhythmically from left to right as the Aliyar reservoir sparkles in the valley below. At hairpin 28, look for Lion-tailed macaques resting in the canopy.',
          highlight: 'Watch for wet patches under dense tree cover even on sunny afternoons.'
        }
      ],
      fuelAndLogistics: 'Fuel is widely available. Munnar and Valparai have 24/7 pumps with reliable 91-octane and XP95 fuel suitable for modern multi-cylinder bikes.',
      permits: 'Valparai forest gates close strictly at 6:00 PM to protect nocturnal wildlife. Plan your ride so you arrive at your estate or hotel well before dusk.',
      bikePreparation: 'Ensure fresh brake pads and sticky road tires (Michelin Road 5/6, Apollo Alpha H1, or Pirelli Angel GT). You will use more lateral tire edge than anywhere else.',
      packingTips: [
        'Quality waterproof rain gear (Gore-Tex or high-denier nylon rain suit)',
        'Clear visor for your helmet — mist and rain render tinted visors dangerous',
        'Anti-fog Pinlock insert installed on your visor',
        'Camera lens cloth for constant moisture cleaning'
      ],
      riderVerdict: 'An intoxicating celebration of pure road riding. Perfect asphalt, cool mountain air, and breathtaking vistas make Munnar to Valparai an unmissable weekend tour.'
    }
  },
  {
    id: 'post-4',
    slug: 'thar-desert-jaisalmer-longewala',
    title: 'Golden Horizons: A 1,000km Motorcycle Pilgrimage Across the Thar Desert',
    subtitle: 'Riding the ribbon highways of Rajasthan to the historic Longewala border post.',
    excerpt: 'Endless arrows of tar slicing through amber sand dunes, medieval sandstone fortresses, and starry border skies. How to prepare your motorcycle for the extreme heat and grit of the Great Indian Desert.',
    coverImage: desertImg,
    imageAlt: 'Classic cruiser motorcycle parked on golden sand dunes near Jaisalmer Rajasthan at sunset with rider silhouetted',
    region: 'Desert & Salt',
    distanceKm: 980,
    durationDays: '5 Days',
    maxElevationMeters: 310,
    maxElevationFeet: 1017,
    difficulty: 'Moderate',
    bestSeason: 'November to February (Cool desert days and crisp nights)',
    recommendedBike: 'Cruiser or Sport-Tourer: RE Super Meteor 650, Classic 350, Honda CB500X',
    fuelAvailability: 'Fuel available in major towns; carry 5L reserve beyond Ramgarh toward Tanot',
    permitsRequired: 'No permits for Longewala; photo ID required at BSF border checkpoints',
    publishedDate: 'September 15, 2026',
    readingTimeMinutes: 8,
    author: {
      name: 'Kabir Varma',
      handle: '@kabir_on_two_wheels',
      role: 'Lead Expedition Scout',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
      bio: 'Over 85,000 km across the Himalayas and Trans-Himalayan corridors over the past 11 seasons.'
    },
    checkpoints: [
      { name: 'Jaipur (Start)', altitudeM: 431, distanceKm: 0, note: 'Departure through the Aravalli hills westward' },
      { name: 'Pushkar & Ajmer', altitudeM: 510, distanceKm: 145, note: 'Sacred lake town surrounded by semi-arid desert hills' },
      { name: 'Jodhpur (Blue City)', altitudeM: 231, distanceKm: 335, note: 'Mehrangarh Fort towering on red sandstone cliffs' },
      { name: 'Pokhran', altitudeM: 228, distanceKm: 505, note: 'Fast military-grade asphalt stretches across scrubland' },
      { name: 'Jaisalmer (Golden City)', altitudeM: 225, distanceKm: 620, note: 'The living sandstone fort glowing in the sunset' },
      { name: 'Sam Sand Dunes', altitudeM: 210, distanceKm: 665, note: 'Rolling golden sand dunes and desert camps' },
      { name: 'Tanot Mata Temple', altitudeM: 140, distanceKm: 780, note: 'Historic temple near the border; unexploded 1971 bomb museum' },
      { name: 'Longewala War Memorial', altitudeM: 120, distanceKm: 820, note: 'Site of the historic 1971 tank battle in the dunes' },
      { name: 'Bikaner (Finish)', altitudeM: 242, distanceKm: 980, note: 'Junagarh Fort and famous Rajasthan camel tracks' }
    ],
    elevationPoints: [
      { point: 'Jaipur', elevation: 431 },
      { point: 'Pushkar', elevation: 510 },
      { point: 'Jodhpur', elevation: 231 },
      { point: 'Pokhran', elevation: 228 },
      { point: 'Jaisalmer', elevation: 225 },
      { point: 'Sam Dunes', elevation: 210 },
      { point: 'Tanot', elevation: 140 },
      { point: 'Longewala', elevation: 120 }
    ],
    tags: ['Rajasthan', 'Thar Desert', 'Jaisalmer', 'Longewala', 'Cruiser Touring'],
    content: {
      overview: 'There is an incomparable tranquility in riding through the Thar Desert. The horizon stretches endlessly flat in every direction, punctuated only by thorny khejri trees, camels grazing peacefully, and the occasional fortress wall rising like a mirage from the dust.',
      routeBreakdown: [
        {
          heading: 'High Speed Across the BharatMala Expressway',
          body: 'Rajasthan features some of the best high-speed highways in Asia. Smooth, four-lane and two-lane ribbons slice through sand plains with visibility extending for miles. Riding between Jodhpur and Jaisalmer allows your motorcycle to settle into a relaxed 100km/h cruise as the sun dips into shades of saffron and deep violet.',
          highlight: 'Watch for stray desert cattle (Nilgai and desert camels) that frequently cross open highways without warning.'
        },
        {
          heading: 'Into the Dunes: Sam and Khuri',
          body: 'Beyond the golden battlements of Jaisalmer Fort, the scrub gives way to pure rolling sand dunes. Avoid taking heavy touring bikes with highway tires directly into loose sand. Stick to the paved access tracks and camp under one of the darkest, clearest starry skies in Asia.',
          highlight: 'Temperatures plummet quickly after sunset. Pack a thermal liner even if daytime temperatures exceed 30°C.'
        },
        {
          heading: 'The Sacred Border Road: Tanot to Longewala',
          body: 'The 120-kilometer stretch from Jaisalmer to Tanot and Longewala is maintained by the Border Roads Organisation (BRO). Pristine black tarmac cuts directly through active sand dunes that occasionally drift over the lane. At Longewala, you stand amidst rusted Pakistani Patton tanks preserved exactly where they were halted during the 1971 war.',
          highlight: 'Carry your original government photo ID (Aadhaar or Passport) for border security checkposts.'
        }
      ],
      fuelAndLogistics: 'Fuel is easily found on national highways. The last petrol station on the border run is at Ramgarh. Always fill your tank completely at Ramgarh before proceeding to Tanot and Longewala.',
      permits: 'No special permits are needed for Tanot or Longewala for Indian citizens. Foreign tourists may need prior clearance from the Jaisalmer district magistrate to visit the border.',
      bikePreparation: 'Desert sand is the enemy of drive chains. Clean your chain daily with kerosene or chain cleaner, and use dry PTFE chain wax rather than wet lube to prevent sand paste formation.',
      packingTips: [
        'Hydration backpack (CamelBak) with at least 2.5L water capacity',
        'Sunscreen SPF 50+ and UV-blocking riding balaclava',
        'Dark smoke visor for extreme daytime desert glare',
        'Puncture kit with CO2 inflator canisters (flat tires on deserted highways are dangerous in heat)'
      ],
      riderVerdict: 'An awe-inspiring, meditative journey through living history. The straight roads and golden horizons will recharge your soul.'
    }
  },
  {
    id: 'post-5',
    slug: 'konkan-coastal-ride-mumbai-goa',
    title: 'Salt Air and Sea Forts: Riding the Coastal MSH4 from Alibaug to South Goa',
    subtitle: 'Ditching the highway for coastal jetties, red laterite cliffs, and pristine coconut beaches.',
    excerpt: 'Forget the four-lane NH 66. The Maharashtra State Highway 4 (Sagari Mahamarg) hugs the Arabian Sea across river ferries, coconut groves, and 17th-century island citadels.',
    coverImage: konkanImg,
    imageAlt: 'Dual-sport motorcycle parked beside a scenic coastal cliff road overlooking the azure Arabian Sea along the Konkan Coast',
    region: 'Coastal',
    distanceKm: 580,
    durationDays: '4 to 5 Days',
    maxElevationMeters: 280,
    maxElevationFeet: 918,
    difficulty: 'Moderate',
    bestSeason: 'October to March (Gentle sea breeze and dry weather)',
    recommendedBike: 'Scrambler, Modern Classic, or Light ADV: RE Interceptor, Scram 411, Triumph Speed 400',
    fuelAvailability: 'Abundant fuel throughout every coastal taluka',
    permitsRequired: 'No permits; ferry tickets (approx ₹70-₹150 per motorcycle) purchased at jetties',
    publishedDate: 'September 5, 2026',
    readingTimeMinutes: 7,
    author: {
      name: 'Aditi Nair',
      handle: '@aditi_throttle',
      role: 'Terrain Specialist',
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&auto=format&fit=crop&q=80',
      bio: 'Solo adventure rider with 60,000+ km across India, Bhutan, and Nepal.'
    },
    checkpoints: [
      { name: 'Gateway of India / Mandwa (Start)', altitudeM: 3, distanceKm: 0, note: 'RORO ferry from Mumbai to Mandwa jetty' },
      { name: 'Alibaug & Kashid Beach', altitudeM: 5, distanceKm: 35, note: 'White sand beaches lined with suru trees' },
      { name: 'Murud-Janjira Sea Fort', altitudeM: 10, distanceKm: 85, note: 'Unconquered island marine fortress built by the Siddis' },
      { name: 'Dighi to Agardanda Ferry', altitudeM: 2, distanceKm: 110, note: 'Hop aboard the local river ferry with your motorcycle' },
      { name: 'Harihareshwar Temple & Cliffs', altitudeM: 25, distanceKm: 165, note: 'Dramatic black volcanic seaside rock formations' },
      { name: 'Guhagar & Ganpatipule', altitudeM: 15, distanceKm: 310, note: 'Pristine quiet beaches and temple by the sea' },
      { name: 'Ratnagiri & Jaigad Lighthouse', altitudeM: 45, distanceKm: 360, note: 'Alphonso mango capital with high clifftop ocean views' },
      { name: 'Devgad & Sindhudurg Fort', altitudeM: 30, distanceKm: 480, note: 'Shivaji Maharaj’s island naval citadel at Malvan' },
      { name: 'Vengurla to North Goa (Finish)', altitudeM: 8, distanceKm: 580, note: 'Crossing the Terekhol river bridge into Arambol, Goa' }
    ],
    elevationPoints: [
      { point: 'Mandwa', elevation: 3 },
      { point: 'Kashid', elevation: 5 },
      { point: 'Murud', elevation: 10 },
      { point: 'Harihareshwar', elevation: 25 },
      { point: 'Ganpatipule', elevation: 15 },
      { point: 'Ratnagiri', elevation: 45 },
      { point: 'Devgad', elevation: 30 },
      { point: 'Goa Border', elevation: 8 }
    ],
    tags: ['Konkan Coast', 'Coastal Highway', 'Sea Forts', 'Goa', 'Ferry Crossing'],
    content: {
      overview: 'Most motorcyclists rushing between Mumbai and Goa take the high-speed NH 66 bypass. They miss one of the most romantic coastal rides in the world. The Sagari Mahamarg (MSH 4) weaves along cliffs, crosses tidal estuaries via wooden car-ferries, and serves fresh Malvani seafood under coconut thrashed canopies.',
      routeBreakdown: [
        {
          heading: 'The Ferry Hop: Mandwa to Murud-Janjira',
          body: 'Board the Mandwa RORO ferry out of Mumbai and roll onto the quiet tarmac of Raigad district. Past the surfing breaks of Kashid, the road clings to sea walls until you reach Rajapuri, where the formidable marine fortress of Murud-Janjira rises directly out of the ocean waves.',
          highlight: 'Loading your motorcycle onto local tidal barges is easy and safe; crew members are experienced in securing two-wheelers.'
        },
        {
          heading: 'Red Cliffs and Mango Groves of Ratnagiri',
          body: 'As you enter Ratnagiri district, the road shifts into iron-rich red laterite soil. Coastal bluffs overlook hidden turquoise coves where local fishing catamarans pull in their evening nets. Ride through quiet villages where Alphonso mango orchards extend right to the cliff edge.',
          highlight: 'Taste fresh ukadiche modak and fresh coastal pomfret fry at family-run homestays along Guhagar beach.'
        },
        {
          heading: 'Malvan to the Terekhol River Bridge into Goa',
          body: 'The southern leg winds through Devgad, famous for wind energy windmills spinning high on seaside plateaus. Explore Malvan and take a small boat to Sindhudurg Fort, built in 1664 by Chhatrapati Shivaji Maharaj with lead-lined foundations. Conclude by crossing the Terekhol bridge into Goa as the sunset paints the ocean gold.',
          highlight: 'MSH 4 has little commercial truck traffic compared to the national highway, making it safe and leisurely.'
        }
      ],
      fuelAndLogistics: 'Fuel is easy to find in every taluka town (Alibaug, Murud, Shrivardhan, Dapoli, Guhagar, Ratnagiri, Malvan). Carry cash for ferry fares.',
      permits: 'No special permits are needed. Helmets are strictly mandatory across both Maharashtra and Goa.',
      bikePreparation: 'Salt spray accelerates corrosion. Wash your motorcycle thoroughly with fresh water and apply anti-rust silicone or ACF-50 spray to chrome and exposed fasteners after the trip.',
      packingTips: [
        'Vented mesh riding jacket for warm coastal weather',
        'Quick-dry clothing and swim shorts for spontaneous beach stops',
        'Secure dry bag for electronics during open ferry crossings',
        'Chain lube specifically designed for salt-corrosive environments'
      ],
      riderVerdict: 'Slow down and savor every salty breeze. MSH 4 is not about speed; it is about the poetry of the sea alongside your handlebars.'
    }
  },
  {
    id: 'post-6',
    slug: 'tawang-arunachal-pradesh',
    title: 'Into the Mist of the Dragon: Riding the Sela Pass to Tawang, Arunachal Pradesh',
    subtitle: 'Navigating 13,700ft cloud layers, Buddhist gompas, and the raw frontier of Northeast India.',
    excerpt: 'A motorcycle expedition into the easternmost ramparts of the Himalayas. Crossing the snow-capped Sela Pass, frozen alpine lakes, and ascending to India’s largest monastery.',
    coverImage: spitiImg,
    imageAlt: 'Motorcycle navigating treacherous mountain pass road near Sela Pass with prayer flags in Arunachal Pradesh',
    region: 'Northeast',
    distanceKm: 520,
    durationDays: '5 to 6 Days',
    maxElevationMeters: 4170,
    maxElevationFeet: 13700,
    difficulty: 'Extreme Expedition',
    bestSeason: 'April to May or October to November',
    recommendedBike: 'ADV bike with good torque: Himalayan 450, KTM 390 Adventure, Honda Transalp',
    fuelAvailability: 'Pumps at Bhalukpong, Bomdila, Dirang, and Tawang; fuel up at every opportunity',
    permitsRequired: 'Inner Line Permit (ILP) for Indian citizens; Protected Area Permit (PAP) for foreign nationals',
    publishedDate: 'August 24, 2026',
    readingTimeMinutes: 9,
    author: {
      name: 'Rohan Deshmukh',
      handle: '@rohan_apex',
      role: 'Touring & Tech Editor',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80',
      bio: 'Ex-superbike racer turned cross-country endurance rider with 12 Iron Butt certificates.'
    },
    checkpoints: [
      { name: 'Guwahati (Start)', altitudeM: 55, distanceKm: 0, note: 'Brahmaputra plains departure across Assam' },
      { name: 'Bhalukpong Gate', altitudeM: 213, distanceKm: 215, note: 'ILP verification at the Arunachal border checkpoint' },
      { name: 'Bomdila Pass', altitudeM: 2530, distanceKm: 315, note: 'Steep climb through subtropical rainforest into pine ridges' },
      { name: 'Dirang Valley', altitudeM: 1560, distanceKm: 355, note: 'Apple orchards and hot water sulfur springs' },
      { name: 'Baisakhi Military Camp', altitudeM: 3000, distanceKm: 405, note: 'Warm army tea and initial snowline' },
      { name: 'Sela Pass & Sela Lake', altitudeM: 4170, distanceKm: 435, note: 'Sub-zero temperatures and frozen twin lakes' },
      { name: 'Jaswant Garh War Memorial', altitudeM: 3050, distanceKm: 455, note: 'Honoring Rifleman Jaswant Singh Rawat (1962 War)' },
      { name: 'Jung / Nuranang Falls', altitudeM: 2100, distanceKm: 485, note: 'Spectacular 100-meter roaring waterfall' },
      { name: 'Tawang Town & Monastery', altitudeM: 3048, distanceKm: 520, note: 'Second largest Buddhist monastery in the world' }
    ],
    elevationPoints: [
      { point: 'Guwahati', elevation: 55 },
      { point: 'Bhalukpong', elevation: 213 },
      { point: 'Bomdila', elevation: 2530 },
      { point: 'Dirang', elevation: 1560 },
      { point: 'Sela Pass', elevation: 4170 },
      { point: 'Jaswant Garh', elevation: 3050 },
      { point: 'Tawang', elevation: 3048 }
    ],
    tags: ['Arunachal Pradesh', 'Tawang', 'Sela Pass', 'Northeast India', 'Himalayan Frontier'],
    content: {
      overview: 'Riding into Arunachal Pradesh feels like stepping off the map. As the humid plains of Assam dissolve into the primordial rainforests of the Kameng district, waterfalls crash straight onto the tarmac and fog rolls across dense bamboo groves with cinematic intensity.',
      routeBreakdown: [
        {
          heading: 'Ascending from the Plains to Bomdila',
          body: 'After clearing the Bhalukpong checkpost, the climb begins immediately. The road snakes beside the roaring Kameng River before scaling the spine of the mountain to Bomdila at 2,530 meters. You will frequently encounter dense afternoon clouds where visibility drops to under five meters.',
          highlight: 'Ride with hazard lights and horn on blind turns. Military convoy trucks move swiftly on these mountain roads.'
        },
        {
          heading: 'The Great Gate of Sela Pass (4,170m)',
          body: 'Sela Pass is both a geographic gate and an emotional trial. Adorned with a massive Tibetan-style welcome gate and prayer flags, the pass sits above the crystal waters of frozen Sela Lake. Even in early summer, ice sheets can coat the road surface, demanding gentle throttle discipline.',
          highlight: 'The newly constructed Sela Tunnel provides an all-weather bypass, but true adventure riders take the historic open pass whenever weather permits.'
        },
        {
          heading: 'Arrival in Tawang: Citadel of Peace',
          body: 'Descending past the thunderous Nuranang Falls brings you to Tawang. Founded in 1680, the majestic Tawang Monastery (Galden Namgey Lhatse) crowns a hilltop like a fortress of faith, housing ancient scriptures and over 450 lamas. The crisp Himalayan air and butter lamp fragrance will soothe every aching muscle.',
          highlight: 'Spend an entire morning inside the main prayer hall listening to the resonant chanting of Buddhist monks.'
        }
      ],
      fuelAndLogistics: 'Fuel stations are spaced roughly 70-90km apart in Dirang, Bomdila, and Tawang. High-octane fuel is rarely found; modern bikes run adequately on standard 91-octane.',
      permits: 'Inner Line Permit is mandatory. Apply online via arunachalilp.gov.in at least 5 business days in advance. Carry 4 hard copies of your ILP and government ID.',
      bikePreparation: 'Heated handlebar grips or muffs are invaluable. Cold rain transitioning to sleet near Sela can freeze rider fingers in minutes.',
      packingTips: [
        'Heavy-duty thermal base layers and wind-blocking balaclava',
        'Waterproof dry bags for all electronics and camera lenses',
        'Basic altitude medication and throat lozenges for dry high-altitude air',
        'High-energy trail mix and thermos flask for hot water'
      ],
      riderVerdict: 'Northeast India is the wild frontier of motorcycling. Tawang rewards the adventurous with untouched alpine magic and heartfelt hospitality.'
    }
  },
  {
    id: 'post-7',
    slug: 'sach-pass-pangi-valley',
    title: 'The Cliffhanger Trail: Surviving Sach Pass (14,500ft) and the Isolated Pangi Valley',
    subtitle: 'Narrow single-lane dirt tracks blasted out of vertical rock walls above the roaring Chenab.',
    excerpt: 'Widely considered India’s most dangerous and technical mountain road. Unpaved shale, cascading waterfalls falling directly onto handlebars, and zero room for rider error.',
    coverImage: heroLadakhImg,
    imageAlt: 'Motorcycle on narrow cliffhanger mountain shelf road over deep river valley near Sach Pass Himachal Pradesh',
    region: 'Himalayas',
    distanceKm: 410,
    durationDays: '4 Days',
    maxElevationMeters: 4420,
    maxElevationFeet: 14500,
    difficulty: 'Extreme Expedition',
    bestSeason: 'July to September only (snow closes pass 9 months a year)',
    recommendedBike: 'Lightweight dual sport: Royal Enfield Himalayan, Hero Xpulse 200, KTM 390 Adv',
    fuelAvailability: 'Last pump at Bairagarh; next reliable fuel at Killar or Udaipur (approx 170 km of harsh terrain)',
    permitsRequired: 'No special permits; police checkpost registration at Bairagarh and Killar',
    publishedDate: 'August 10, 2026',
    readingTimeMinutes: 11,
    author: {
      name: 'Kabir Varma',
      handle: '@kabir_on_two_wheels',
      role: 'Lead Expedition Scout',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
      bio: 'Over 85,000 km across the Himalayas and Trans-Himalayan corridors over the past 11 seasons.'
    },
    checkpoints: [
      { name: 'Chamba (Start)', altitudeM: 996, distanceKm: 0, note: 'Ancient historic town on the banks of the Ravi River' },
      { name: 'Tissa', altitudeM: 1570, distanceKm: 70, note: 'Final small market town before entering the alpine valley' },
      { name: 'Bairagarh', altitudeM: 2090, distanceKm: 115, note: 'Last fuel point and homestay before the brutal climb' },
      { name: 'Satrundi Checkpost', altitudeM: 3400, distanceKm: 145, note: 'Mandatory police registration; oxygen drops rapidly' },
      { name: 'Sach Pass Summit', altitudeM: 4420, distanceKm: 170, note: 'Temple to Kali Mata, towering walls of snow, loose boulders' },
      { name: 'Killar (Pangi Valley HQ)', altitudeM: 2600, distanceKm: 210, note: 'The remote tribal heartland of Himachal Pradesh' },
      { name: 'Cliffhanger Road to Kishtwar', altitudeM: 2100, distanceKm: 280, note: 'Single-lane unpaved track blasted into a vertical gorge wall' },
      { name: 'Udaipur & Keylong (Finish)', altitudeM: 3080, distanceKm: 410, note: 'Mrikula Devi temple and reconnection with Manali-Leh road' }
    ],
    elevationPoints: [
      { point: 'Chamba', elevation: 996 },
      { point: 'Bairagarh', elevation: 2090 },
      { point: 'Satrundi', elevation: 3400 },
      { point: 'Sach Pass', elevation: 4420 },
      { point: 'Killar', elevation: 2600 },
      { point: 'Udaipur', elevation: 2743 },
      { point: 'Keylong', elevation: 3080 }
    ],
    tags: ['Sach Pass', 'Pangi Valley', 'Extreme Riding', 'Himachal', 'Off-Road'],
    content: {
      overview: 'If you ask veteran Himalayan riders which route terrifies and exhilarates them the most, they do not say Khardung La. They say Sach Pass. Connecting the Chamba district to the tribal sanctuary of Pangi Valley, Sach Pass is a narrow cut of raw stone, ice runoff, and scree with sheer 2,000-foot vertical drop-offs.',
      routeBreakdown: [
        {
          heading: 'Bairagarh to Satrundi: The Tarmac Ends',
          body: 'Beyond Bairagarh, pavement becomes a distant memory. The track narrows to a single vehicle width composed of loose river rock and wet mud. At Satrundi, police officers record your vehicle registration and look over your riding gear to ensure you are adequately prepared.',
          highlight: 'Never tackle Sach Pass solo. A mechanical breakdown or low-speed tip-over here requires teamwork to recover the machine.'
        },
        {
          heading: 'The Summit at 14,500 Feet',
          body: 'The final 15 kilometers to the top are a kaleidoscope of adrenaline: waterfalls stream over the rocky trail, glaciers overhang the route, and sharp shale chunks threaten tire sidewalls. At the summit, the small shrine of Kali Mata stands wrapped in tridents and red flags amidst howling arctic winds.',
          highlight: 'Do not ride the clutch on steep descents. Rely on engine braking in first gear to preserve your brake rotors from overheating.'
        },
        {
          heading: 'The Infamous Cliffhanger to Killar',
          body: 'Dropping into Pangi Valley brings you onto the infamous rock ledge road. Blasted directly out of granite cliffs with zero guardrails, you look directly down into the raging waters of the Chenab River. Precision handlebar control is non-negotiable.',
          highlight: 'Always yield to uphill vehicles and give wide berth to local Himachal Roadways (HRTC) buses.'
        }
      ],
      fuelAndLogistics: 'Fuel up completely at Bairagarh. Black-market bottled petrol is sometimes sold in Killar at a premium, but rely on your own 5L canister.',
      permits: 'No permits required for Indian or foreign nationals, but valid identity cards and vehicle insurance are checked at Satrundi and Killar.',
      bikePreparation: 'Heavy-duty aluminium skid plate is mandatory. Rocks kicked up by the front tire will puncture unprotected engine casings.',
      packingTips: [
        'Complete puncture repair kit with extra valve stems and tire irons',
        'Tow strap (minimum 5-meter rated for 2 tons)',
        'Epoxy putty (J-B Weld or M-Seal) for emergency casing repair',
        'Waterproof trail gloves with reinforced knuckle protection'
      ],
      riderVerdict: 'The holy grail of extreme off-road motorcycle touring in India. Unforgiving, raw, and immensely gratifying.'
    }
  },
  {
    id: 'post-8',
    slug: 'zanskar-shinku-la-padum',
    title: 'The Last Frontier: Crossing Shinku La into the Untamed Heart of Zanskar',
    subtitle: 'Riding beneath the monolithic sacred peak of Gonbo Rangjon to the fortress of Padum.',
    excerpt: 'Until recently accessible only on foot, the newly opened Shinku La pass road unlocks the remote Trans-Himalayan kingdom of Zanskar. Glacier crossings, unbridged rivers, and ancient Tibetan culture.',
    coverImage: heroLadakhImg,
    imageAlt: 'Motorcycle expedition parked beside the sacred Gonbo Rangjon rock mountain in remote Zanskar valley',
    region: 'Himalayas',
    distanceKm: 340,
    durationDays: '4 Days',
    maxElevationMeters: 5091,
    maxElevationFeet: 16703,
    difficulty: 'Extreme Expedition',
    bestSeason: 'July to September',
    recommendedBike: 'ADV with long travel suspension: Himalayan 450, KTM 390 Adv R, Tenere 700',
    fuelAvailability: 'No pumps between Darcha and Padum (140 km of high-altitude gravel)',
    permitsRequired: 'Ladakh Inner Line Permit for Padum and onward to Kargil/Leh',
    publishedDate: 'July 18, 2026',
    readingTimeMinutes: 8,
    author: {
      name: 'Aditi Nair',
      handle: '@aditi_throttle',
      role: 'Terrain Specialist',
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&auto=format&fit=crop&q=80',
      bio: 'Solo adventure rider with 60,000+ km across India, Bhutan, and Nepal.'
    },
    checkpoints: [
      { name: 'Darcha (Start)', altitudeM: 3360, distanceKm: 0, note: 'Forking off the Manali-Leh highway into the Zanskar valley' },
      { name: 'Zanskar Sumdo', altitudeM: 3850, distanceKm: 18, note: 'End of mobile network; entering raw mountain wilderness' },
      { name: 'Shinku La Summit', altitudeM: 5091, distanceKm: 42, note: 'High altitude pass crossing between Himachal and Ladakh' },
      { name: 'Lakhang Camp', altitudeM: 4480, distanceKm: 58, note: 'Base camp nestled beside glacial moraines' },
      { name: 'Gonbo Rangjon Monolith', altitudeM: 4350, distanceKm: 75, note: 'Sacred standalone 1,500-meter vertical black rock pyramid' },
      { name: 'Kargyak Village', altitudeM: 4120, distanceKm: 92, note: 'First human settlement in Zanskar; stone houses and yaks' },
      { name: 'Purne', altitudeM: 3770, distanceKm: 110, note: 'Trailhead to the legendary Phuktal cave monastery' },
      { name: 'Padum (Finish)', altitudeM: 3669, distanceKm: 140, note: 'Ancient capital of Zanskar; fuel and homestays' }
    ],
    elevationPoints: [
      { point: 'Darcha', elevation: 3360 },
      { point: 'Shinku La', elevation: 5091 },
      { point: 'Gonbo Rangjon', elevation: 4350 },
      { point: 'Kargyak', elevation: 4120 },
      { point: 'Purne', elevation: 3770 },
      { point: 'Padum', elevation: 3669 }
    ],
    tags: ['Zanskar', 'Shinku La', 'Gonbo Rangjon', 'Remote Himalayas', 'Off-Road'],
    content: {
      overview: 'For centuries, the inhabitants of Zanskar were cut off from the modern world for eight months each winter, walking out across the frozen Zanskar River on the famous Chadar trek. Today, the Border Roads Organisation has carved the Shinku La pass road, opening this surreal moonscape to expedition motorcyclists.',
      routeBreakdown: [
        {
          heading: 'Crossing Shinku La at 16,700 Feet',
          body: 'Turn off the Manali-Leh highway just past Darcha. The climb to Shinku La is steep and rugged, winding past hanging glaciers. At the 5,091-meter crest, you look north into the vast expanse of the Lungnak valley. The thin air demands steady, calculated riding.',
          highlight: 'Temperatures on Shinku La frequently plunge below freezing even on bright July afternoons.'
        },
        {
          heading: 'In the Shadow of Gonbo Rangjon',
          body: 'As you descend into Zanskar, the scenery transforms into something divine. Rising abruptly from the flat river valley is Gonbo Rangjon — a solitary, sheer monolith of black rock revered as the guardian deity of the valley. Pitching a tent here beneath the Milky Way is an experience every motorcyclist must have.',
          highlight: 'Camp respectfully; do not leave any trash or disturb the grazing livestock of local Changpa nomads.'
        },
        {
          heading: 'Padum and the Cliff Monastery of Phuktal',
          body: 'Past Kargyak and Purne, the route follows the turquoise Tsarap River into Padum. From Purne, take a rest day to hike to Phuktal Gompa — a 12th-century monastery built miraculously into the mouth of a massive natural cliffside cave.',
          highlight: 'Padum now has a modern fuel station, but verify operating hours locally.'
        }
      ],
      fuelAndLogistics: 'Top up at Jispa or Keylong. Carry at least 5 liters of auxiliary fuel in case of detours or roadwork delays.',
      permits: 'Ladakh Inner Line Permit required. Display copies at military checkposts along the route.',
      bikePreparation: 'High-clearance suspension with adjusted preload for heavy camping gear. Check coolant levels and thermostat operation.',
      packingTips: [
        'Four-season sleeping bag (rated to -10°C) if camping at Gonbo Rangjon',
        'Portable water filter pump (e.g. Sawyer Squeeze or Katadyn)',
        'Compact satellite communicator or offline GPS emergency tracker',
        'Heavy-duty thermal socks and glove liners'
      ],
      riderVerdict: 'Zanskar is where the old Himalayas still breathe free. Ride it before modernization transforms its wild character.'
    }
  },
  {
    id: 'post-9',
    slug: 'rann-of-kutch-dholavira',
    title: 'The White Endless Salt: Riding the Road to Heaven to Dholavira & Kutch',
    subtitle: 'Slicing across 30 kilometers of blinding white salt desert into an ancient Harappan civilization.',
    excerpt: 'The newly constructed "Road to Heaven" cuts directly through the Great Rann of Kutch. Pure sensory isolation where white salt flats merge seamlessly into clear blue skies.',
    coverImage: desertImg,
    imageAlt: 'Motorcycle touring across the straight Road to Heaven through the vast white salt flats of the Great Rann of Kutch Gujarat',
    region: 'Desert & Salt',
    distanceKm: 620,
    durationDays: '3 to 4 Days',
    maxElevationMeters: 45,
    maxElevationFeet: 147,
    difficulty: 'Moderate',
    bestSeason: 'November to February (Salt is dry and hardened)',
    recommendedBike: 'Cruiser, Sport Touring, or ADV: RE Meteor 350, Himalayan, Kawasaki Versys 650',
    fuelAvailability: 'Pumps in Bhuj, Rapar, and small village pumps near Khavda',
    permitsRequired: 'Rann of Kutch Entry Permit (obtainable online or at Bhirandiyara checkpost)',
    publishedDate: 'June 29, 2026',
    readingTimeMinutes: 7,
    author: {
      name: 'Rohan Deshmukh',
      handle: '@rohan_apex',
      role: 'Touring & Tech Editor',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80',
      bio: 'Ex-superbike racer turned cross-country endurance rider with 12 Iron Butt certificates.'
    },
    checkpoints: [
      { name: 'Ahmedabad (Start)', altitudeM: 53, distanceKm: 0, note: 'Fast departure on the Saurashtra highway' },
      { name: 'Bhuj City', altitudeM: 110, distanceKm: 330, note: 'Historic capital of Kutch, handicrafts and palaces' },
      { name: 'Khavda', altitudeM: 25, distanceKm: 400, note: 'Last town before the northern border salt flats' },
      { name: 'Kalo Dungar (Black Hill)', altitudeM: 462, distanceKm: 430, note: 'Highest point in Kutch with panoramic views of the salt desert' },
      { name: 'Dhordo (White Desert)', altitudeM: 15, distanceKm: 490, note: 'Vast field of crystal white salt; full moon night view' },
      { name: 'The Road to Heaven', altitudeM: 10, distanceKm: 560, note: '30km straight road cutting through water and salt to Khadir Bet' },
      { name: 'Dholavira Archaeological Site', altitudeM: 20, distanceKm: 620, note: 'UNESCO World Heritage 4,500-year-old Indus Valley metropolis' }
    ],
    elevationPoints: [
      { point: 'Ahmedabad', elevation: 53 },
      { point: 'Bhuj', elevation: 110 },
      { point: 'Khavda', elevation: 25 },
      { point: 'Kalo Dungar', elevation: 462 },
      { point: 'Road to Heaven', elevation: 10 },
      { point: 'Dholavira', elevation: 20 }
    ],
    tags: ['Gujarat', 'Rann of Kutch', 'Dholavira', 'Road to Heaven', 'Salt Flats'],
    content: {
      overview: 'Few highways on Earth produce such an optical trance as the "Road to Heaven" in Kutch. For 30 kilometers, a pristine ribbon of black asphalt slices through the Great Rann. On either side, crystalline salt flats stretch to infinity under a pale blue sky, blurring the line between earth and cloud.',
      routeBreakdown: [
        {
          heading: 'Bhuj to Kalo Dungar: The High Vantage',
          body: 'Start from Bhuj and head north toward Kalo Dungar (462m), the highest point in Kutch. Standing at the cliff edge, you look north toward the international border with Pakistan over an ocean of white salt. You will also experience the famous magnetic hill effect on the road descending.',
          highlight: 'Sample sweet Kutchi mawa (milk confection) at village stalls in Khavda.'
        },
        {
          heading: 'Riding the Road to Heaven',
          body: 'Constructed to connect Gadhsisa directly to the island of Khadir Bet, this road was engineered through seasonal salt marshes. In early winter, shallow water reflects the sky like a gigantic mirror. As you ride at 80km/h, the motorcycle feels like it is hovering above water and crystal salt.',
          highlight: 'Do not ride your motorcycle off the paved embankment into the salt mud. Beneath the thin white crust lies deep, sticky brine mud that will trap bikes instantly.'
        },
        {
          heading: 'Touching History at Dholavira',
          body: 'At the end of the salt corridor lies Dholavira, one of the five largest Harappan metropolises. Walk among 4,500-year-old stone water reservoirs, polished stone pillars, and standardized city planning built millennia before modern architecture.',
          highlight: 'The Dholavira archaeological museum offers fascinating insight into Bronze Age trade networks.'
        }
      ],
      fuelAndLogistics: 'Fuel up in Bhuj or Rapar. Small village outlets exist near Khavda, but carry enough range for 250 kilometers.',
      permits: 'Permits for the White Desert at Dhordo can be booked online at dorann.gujarat.gov.in. Dholavira itself requires standard monument entry tickets.',
      bikePreparation: 'Salt brine causes aggressive electrical and cosmetic corrosion. Apply protective silicone spray to engine casings and chain. Wash the bike thoroughly with high-pressure clean water immediately upon return.',
      packingTips: [
        'High-grade polarized sunglasses or mirror-coated visor to combat blinding white salt reflection',
        'Sun-protective riding gear with ample ventilation',
        'Plenty of water and electrolyte tablets',
        'Camera with circular polarizer filter for vivid contrast'
      ],
      riderVerdict: 'A surreal, dreamlike escape. The sensation of gliding through endless white salt is unlike anything else in India.'
    }
  },
  {
    id: 'post-10',
    slug: 'kolli-hills-70-hairpin-bends',
    title: 'The 70 Hairpin Gauntlet: Taming the Mountain of Death in Eastern Ghats',
    subtitle: 'Conquering 70 consecutive numbered hairpin curves in just 28 kilometers of vertical climbing.',
    excerpt: 'Deep in Tamil Nadu lies the legendary Kolli Malai — the Mountain of Death. Seventy tightly banked switchbacks stacked upon each other like a serpentine staircase.',
    coverImage: munnarImg,
    imageAlt: 'Motorcycle leaning through one of the 70 tight hairpin bends on Kolli Hills mountain road in Tamil Nadu',
    region: 'Western Ghats',
    distanceKm: 260,
    durationDays: '2 Days',
    maxElevationMeters: 1370,
    maxElevationFeet: 4495,
    difficulty: 'Demanding',
    bestSeason: 'September to March',
    recommendedBike: 'Agile naked or lightweight motorcycle: KTM Duke 390, Yamaha MT-15, RE Hunter 350',
    fuelAvailability: 'Pumps at foothills in Namakkal and Karavalli; limited fuel at Semmedu hill top',
    permitsRequired: 'No permits; toll fee collected at foothills checkpost',
    publishedDate: 'June 12, 2026',
    readingTimeMinutes: 7,
    author: {
      name: 'Rohan Deshmukh',
      handle: '@rohan_apex',
      role: 'Touring & Tech Editor',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80',
      bio: 'Ex-superbike racer turned cross-country endurance rider with 12 Iron Butt certificates.'
    },
    checkpoints: [
      { name: 'Salem / Namakkal (Start)', altitudeM: 218, distanceKm: 0, note: 'Departure through the flat rural plains of Tamil Nadu' },
      { name: 'Karavalli (Foothills)', altitudeM: 240, distanceKm: 45, note: 'Checkpost gate and Milestone marking Hairpin 1/70' },
      { name: 'Hairpin 25 (Viewpoint)', altitudeM: 620, distanceKm: 55, note: 'Spectacular bird’s eye view of the serpentine curves below' },
      { name: 'Hairpin 50 (Mid-Climb)', altitudeM: 980, distanceKm: 65, note: 'Dense tropical forest and cool mountain air setting in' },
      { name: 'Hairpin 70 (The Gauntlet Summit)', altitudeM: 1250, distanceKm: 73, note: 'Final bend conquered; entry onto the highland plateau' },
      { name: 'Semmedu Town', altitudeM: 1300, distanceKm: 80, note: 'Central town with homestays and fresh mountain pineapple stalls' },
      { name: 'Arapaleeswarar Temple', altitudeM: 1280, distanceKm: 92, note: 'Ancient 1st-century Shiva temple by the river' },
      { name: 'Agaya Gangai Waterfalls', altitudeM: 1100, distanceKm: 95, note: 'Dramatic 300-foot waterfall reachable via 1,000 stone steps' }
    ],
    elevationPoints: [
      { point: 'Namakkal', elevation: 218 },
      { point: 'Karavalli', elevation: 240 },
      { point: 'Hairpin 25', elevation: 620 },
      { point: 'Hairpin 50', elevation: 980 },
      { point: 'Hairpin 70', elevation: 1250 },
      { point: 'Semmedu', elevation: 1300 }
    ],
    tags: ['Kolli Hills', '70 Hairpins', 'Tamil Nadu', 'Ghat Roads', 'Cornering'],
    content: {
      overview: 'Known in ancient Tamil literature as Kolli Malai ("Mountain of Death") due to mythical ghost legends and treacherous slopes, this isolated mountain in central Tamil Nadu has become a shrine for cornering enthusiasts. In just 28 kilometers, the road climbs through 70 consecutive numbered hairpin curves with virtually no straightaways in between.',
      routeBreakdown: [
        {
          heading: 'The Launch from Karavalli Checkpost',
          body: 'At the Karavalli checkpost, a stone board reads: "Hairpin Bend 1/70." From this point on, your motorcycle rarely sits upright for more than 40 meters. The asphalt is billiard-table smooth with yellow guide arrows painted on every rock face.',
          highlight: 'Look through the turn. Focus your gaze on the exit of the hairpin rather than the apex wall.'
        },
        {
          heading: 'Surviving the Mid-Mountain Sequence (Bends 20 to 50)',
          body: 'As you climb into bends 30 through 50, the gradient steepens to nearly 14%. You develop a rhythm: brake trail into the turn, apex close to the inner curb, roll on the throttle as the bike stands up, shift up to second gear, brake hard for the next hairpin in reverse direction.',
          highlight: 'Keep an ear out for descending state transport buses. Their hydraulic horns echo off the stone walls to announce their approach.'
        },
        {
          heading: 'Conquering Bend 70 and Agaya Gangai',
          body: 'Passing Hairpin 70 is pure exhilaration. The mountain flattens out into an agrarian plateau lush with pepper vines, silver oaks, and pineapple orchards. Conclude your ride with a hike down the 1,000 steps to the roaring spray of Agaya Gangai ("Ganges of the Sky") waterfalls.',
          highlight: 'Enjoy fresh, sweet Kolli Hills pineapples sold along the road in Semmedu.'
        }
      ],
      fuelAndLogistics: 'Top up in Namakkal or Karavalli before starting the climb. Only one small fuel retail shop exists in Semmedu and it can run dry.',
      permits: 'No special permits are required. A nominal toll of ₹20-50 is charged at the Karavalli checkpost.',
      bikePreparation: 'Brakes and tires must be in top condition. Bleed your brake fluid if it is over a year old; continuous heavy braking on 70 hairpins creates immense heat.',
      packingTips: [
        'Grippy riding gloves with palms suited for constant clutch manipulation',
        'Hydration pack for endurance in warm lower slopes',
        'Sturdy hiking boots if planning the steep walk down to Agaya Gangai falls',
        'Action camera mounted to capture the dizzying sequence of switchbacks'
      ],
      riderVerdict: 'The ultimate gymkhana for throttle, clutch, and lean angle precision. Kolli Hills is an addictive technical playground.'
    }
  }
];
