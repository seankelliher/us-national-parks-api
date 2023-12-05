const parkImages = [
    {
        parkId: "acad",
        image: "acad-little-hunters-beach",
        caption: "Little Hunters Beach. Photo: Sardius Stalker.",
        name: "Acadia National Park",
        shortName: "Acadia",
        city: "Bar Harbor",
        states: "Maine",
        statesList: ["maine"]
    },
    {
        parkId: "arch",
        image: "arch-delicate-arch",
        caption: "Delicate Arch. Photo: NPS, Neal Herbert",
        name: "Arches National Park",
        shortName: "Arches",
        city: "Moab",
        states: "Utah",
        statesList: ["utah"]
    },
    {
        parkId: "badl",
        image: "badl-hay-butte-overlook",
        caption: "Hay Butte Overlook. Photo: NPS, Ed Welsh.",
        name: "Badlands National Park",
        shortName: "Badlands",
        city: "Interior",
        states: "South Dakota",
        statesList: ["south-dakota"]
    },
    {
        parkId: "bibe",
        image: "bibe-grass-volcanic-peaks",
        caption: "Grassland and volcanic peaks. Photo: NPS, J. Jurado.",
        name: "Big Bend National Park",
        shortName: "Big Bend",
        city: "Big Bend National Park",
        states: "Texas",
        statesList: ["texas"]
    },
    {
        parkId: "bisc",
        image: "bisc-jones-lagoon",
        caption: "Middle of Jones Lagoon. Photo: Matt Johnson.",
        name: "Biscayne National Park",
        shortName: "Biscayne",
        city: "Homestead",
        states: "Florida",
        statesList: ["florida"]
    },
    {
        parkId: "blca",
        image: "blca-east-portal",
        caption: "Fishing in East Portal. Photo: NPS.",
        name: "Black Canyon of the Gunnison National Park",
        shortName: "Black Canyon",
        city: "Gunnison",
        states: "Colorado",
        statesList: ["colorado"]
    },
    {
        parkId: "brca",
        image: "brca-under-the-rim-trail",
        caption: "Under-the-Rim Trail. Photo: NPS, Peter Densmore.",
        name: "Bryce Canyon National Park",
        shortName: "Bryce Canyon",
        city: "Bryce",
        states: "Utah",
        statesList: ["utah"]
    },
    {
        parkId: "cany",
        image: "cany-white-rim-road",
        caption: "White Rim Road. Photo: NPS, Neal Herbert.",
        name: "Canyonlands National Park",
        shortName: "Canyonlands",
        city: "Moab",
        states: "Utah",
        statesList: ["utah"]
    },
    {
        parkId: "care",
        image: "care-cassidy-arch",
        caption: "Cassidy Arch. Photo: NPS, D. Popovic.",
        name: "Capitol Reef National Park",
        shortName: "Capitol Reef",
        city: "Torrey",
        states: "Utah",
        statesList: ["utah"]
    },
    {
        parkId: "cave",
        image: "cave-carlsbad-caverns",
        caption: "Entrance to Carlsbad Caverns. Photo: NPS, Peter Jones.",
        name: "Carlsbad Caverns National Park",
        shortName: "Carlsbad Caverns",
        city: "Carlsbad",
        states: "New Mexico",
        statesList: ["new-mexico"]
    },
    {
        parkId: "chis",
        image: "chis-anacapa-island",
        caption: "Anacapa Island from above. Photo: NPS.",
        name: "Channel Islands National Park",
        shortName: "Channel Islands",
        city: "Ventura",
        states: "California",
        statesList: ["california"]
    },
    {
        parkId: "cong",
        image: "cong-ranger-boardwalk",
        caption: "Ranger led walk on the boardwalk. Photo: NPS.",
        name: "Congaree National Park",
        shortName: "Congaree",
        city: "Hopkins",
        states: "South Carolina",
        statesList: ["south-carolina"]
    },
    {
        parkId: "crla",
        image: "crla-crater-lake-summer",
        caption: "Crater Lake in summer. Photo: NPS.",
        name: "Crater Lake National Park",
        shortName: "Crater Lake",
        city: "Crater Lake",
        states: "Oregon",
        statesList: ["oregon"]
    },
    {
        parkId: "cuva",
        image: "cuva-everett-covered-bridge",
        caption: "Everett Road Covered Bridge. Photo: unknown.",
        name: "Cuyahoga Valley National Park",
        shortName: "Cuyahoga Valley",
        city: "Valley View",
        states: "Ohio",
        statesList: ["ohio"]
    },
    {
        parkId: "deva",
        image: "deva-zabriskie-point",
        caption: "Zabriskie Point at sunrise. Photo: NPS, Kurt Moses.",
        name: "Death Valley National Park",
        shortName: "Death Valley",
        city: "Death Valley",
        states: "California, extends into Nevada",
        statesList: ["california", "nevada"]
    },
    {
        parkId: "dena",
        image: "dena-eielson-visitor-center",
        caption: "Near the Eielson Visitor Center. Photo: NPS, Emily Mesner.",
        name: "Denali National Park",
        shortName: "Denali",
        city: "Denali Park",
        states: "Alaska",
        statesList: ["alaska"]
    },
    {
        parkId: "drto",
        image: "drto-coral-monitoring",
        caption: "Coral monitoring. Photo: NPS, Submerged Resource Center.",
        name: "Dry Tortugas National Park",
        shortName: "Dry Tortugas",
        city: "Homestead",
        states: "Florida",
        statesList: ["florida"]
    },
    {
        parkId: "ever",
        image: "ever-everglades-at-sunset",
        caption: "Everglades sunset. Photo: Sandy Vergara, NPS photo contest.",
        name: "Everglades National Park",
        shortName: "Everglades",
        city: "Homestead, Miami, Everglades City",
        states: "Florida",
        statesList: ["florida"]
    },
    {
        parkId: "gaar",
        image: "gaar-caribou-movement",
        caption: "Caribou movement in spring. Photo: NPS, Alaska Region.",
        name: "Gates of the Arctic National Park & Preserve",
        shortName: "Gates of Arctic",
        city: "Fairbanks",
        states: "Alaska",
        statesList: ["alaska"]
    },
    {
        parkId: "jeff",
        image: "jeff-gateway-arch",
        caption: "Gateway Arch. Photo: NPS, Sue Ford.",
        name: "Gateway Arch National Park",
        shortName: "Gateway Arch",
        city: "St. Louis",
        states: "Missouri",
        statesList: ["missouri"]
    },
    {
        parkId: "glba",
        image: "glba-totem-poles",
        caption: "Totem poles at Bartlett Cove. Photo: NPS, S. Tevebaugh.",
        name: "Glacier Bay National Park & Preserve",
        shortName: "Glacier Bay",
        city: "Gustavus",
        states: "Alaska",
        statesList: ["alaska"]
    },
    {
        parkId: "glac",
        image: "glac-road-clearing",
        caption: "Road clearing on the Upper Slopes. Photo: NPS, Glacier.",
        name: "Glacier National Park",
        shortName: "Glacier",
        city: "West Glacier",
        states: "Montana",
        statesList: ["montana"]
    },
    {
        parkId: "grca",
        image: "grca-dine-woman-on-rim",
        caption: "A Dine woman in traditional dress. Photo: NPS, M. Quinn.",
        name: "Grand Canyon National Park",
        shortName: "Grand Canyon",
        city: "Grand Canyon",
        states: "Arizona",
        statesList: ["arizona"]
    },
    {
        parkId: "grte",
        image: "grte-garnet-canyon",
        caption: "The Middle Teton in Garnet Canyon. Photo: NPS.",
        name: "Grand Teton National Park",
        shortName: "Grand Teton",
        city: "Moose",
        states: "Wyoming",
        statesList: ["wyoming"]
    },
    {
        parkId: "grba",
        image: "grba-great-basin-desert",
        caption: "Great Basin Desert. Photo: unknown.",
        name: "Great Basin National Park",
        shortName: "Great Basin",
        city: "Baker",
        states: "Nevada",
        statesList: ["nevada"]
    },
    {
        parkId: "grsa",
        image: "grsa-dunes-cleveland-peak",
        caption: "Sand Dunes and Cleveland Peak. Photo: NPS.",
        name: "Great Sand Dunes National Park & Preserve",
        shortName: "Great Sand",
        city: "Mosca",
        states: "Colorado",
        statesList: ["colorado"]
    },
    {
        parkId: "grsm",
        image: "grms-headstone-cable-cemetery",
        caption: "Headstone in Cable Cemetery. Photo: NPS.",
        name: "Great Smoky Mountains National Park",
        shortName: "Great Smoky Mtns",
        city: "Gatlinburg",
        states: "Tennessee, extends into North Carolina",
        statesList: ["north-carolina", "tennessee"]
    },
    {
        parkId: "gumo",
        image: "gumo-wilderness-ridge",
        caption: "View from Wilderness Ridge. Photo: unknown.",
        name: "Guadalupe Mountains National Park",
        shortName: "Guadalupe Mtns",
        city: "Salt Flat",
        states: "Texas",
        statesList: ["texas"]
    },
    {
        parkId: "hale",
        image: "hale-keoneheehee-trail",
        caption: "Rangers on Keonehe'ehe'e Trail. Photo: NPS, Hannah Mousavi.",
        name: "Haleakalā National Park",
        shortName: "Haleakalā",
        city: "Makawao",
        states: "Hawaii",
        statesList: ["hawaii"]
    },
    {
        parkId: "havo",
        image: "havo-hikers-kahuku",
        caption: "Hikers Resting in Kahuku. Photo: NPS, J. Wei.",
        name: "Hawai'i Volcanoes National Park",
        shortName: "Hawai'i Volcanoes",
        city: "Hawaii National Park",
        states: "Hawaii",
        statesList: ["hawaii"]
    },
    {
        parkId: "hosp",
        image: "hosp-gulpha-gorge",
        caption: "Gulpha Gorge Creek. Photo: NPS. Mitch Smith.",
        name: "Hot Springs National Park",
        shortName: "Hot Springs",
        city: "Hot Springs",
        states: "Arkansas",
        statesList: ["arkansas"]
    },
    {
        parkId: "indu",
        image: "indu-cowles-bog",
        caption: "Wetlands of Cowles Bog. Photo: NPS, K. George.",
        name: "Indiana Dunes National Park",
        shortName: "Indiana Dunes",
        city: "Porter",
        states: "Indiana",
        statesList: ["indiana"]
    },
    {
        parkId: "isro",
        image: "isro-feldtmann-tower-view",
        caption: "View from Feldtmann Tower. Photo: Kaitlyn Knick.",
        name: "Isle Royale National Park",
        shortName: "Isle Royale",
        city: "Houghton",
        states: "Michigan",
        statesList: ["michigan"]
    },
    {
        parkId: "jotr",
        image: "jotr-lost-horse-valley",
        caption: "Lost Horse Valley. Photo: NPS, Brad Sutton.",
        name: "Joshua Tree National Park",
        shortName: "Joshua Tree",
        city: "Twentynine Palms",
        states: "California",
        statesList: ["california"]
    },
    {
        parkId: "katm",
        image: "katm-valley-ten-thousand-smokes",
        caption: "Valley of Ten Thousand Smokes. Photo: NPS, Mike Fitz.",
        name: "Katmai National Park & Preserve",
        shortName: "Katmai",
        city: "King Salmon",
        states: "Alaska",
        statesList: ["alaska"]
    },
    {
        parkId: "kefj",
        image: "kefj-exit-glacier",
        caption: "Exit Glacier. Photo: NPS, S. Wright.",
        name: "Kenai Fjords National Park",
        shortName: "Kenai Fjords",
        city: "Seward",
        states: "Alaska",
        statesList: ["alaska"]
    },
    {
        parkId: "kova",
        image: "kova-camp-site",
        caption: "Camp site in the Park. Photo: NPS, Arienne Lindholm.",
        name: "Kobuk Valley National Park",
        shortName: "Kobuk Valley",
        city: "Kotzebue",
        states: "Alaska",
        statesList: ["alaska"]
    },
    {
        parkId: "lacl",
        image: "lacl-fireweed-on-beach",
        caption: "Fireweed on the beach. Photo: NPS, Warren Hill.",
        name: "Lake Clark National Park & Preserve",
        shortName: "Lake Clark",
        city: "Anchorage",
        states: "Alaska",
        statesList: ["alaska"]
    },
    {
        parkId: "lavo",
        image: "lavo-bumpass-hell-boardwalk",
        caption: "Bumpass Hell boardwalk. Photo: Kirk Barrett.",
        name: "Lassen Volcanic National Park",
        shortName: "Lassen Volcanic",
        city: "Mineral",
        states: "California",
        statesList: ["california"]
    },
    {
        parkId: "maca",
        image: "maca-kayaks-green-river",
        caption: "Green River. Photo: NPS, Ashley Decker.",
        name: "Mammoth Cave National Park",
        shortName: "Mammoth Cave",
        city: "Mammoth Cave",
        states: "Kentucky",
        statesList: ["kentucky"]
    },
    {
        parkId: "meve",
        image: "meve-balcony-house-courtyard",
        caption: "Balcony House courtyard. Photo: NPS.",
        name: "Mesa Verde National Park",
        shortName: "Mesa Verde",
        city: "Mesa Verde National Park",
        states: "Colorado",
        statesList: ["colorado"]
    },
    {
        parkId: "mora",
        image: "mora-mt-rainer-nisqually-glacier",
        caption: "Mount Rainier and Nisqually Glacier. Photo: NPS.",
        name: "Mount Rainier National Park",
        shortName: "Mount Rainier",
        city: "Ashford",
        states: "Washington",
        statesList: ["washington"]
    },
    {
        parkId: "npsa",
        image: "npsa-lower-sauma-ridge-trail",
        caption: "View from the Lower Sauma Ridge Trail. Photo: NPS.",
        name: "National Park of American Samoa",
        shortName: "American Samoa",
        city: "Pago Pago",
        states: "American Samoa",
        statesList: ["american-samoa"]
    },
    {
        parkId: "npnh",
        image: "npnh-great-hall-ellis-island",
        caption: "The Great Hall at Ellis Island. Photo: NPS.",
        name: "National Parks of New York Harbor",
        shortName: "New York Harbor",
        city: "New York",
        states: "New York",
        statesList: ["new-york"]
    },
    {
        parkId: "neri",
        image: "neri-gorge-in-early-fall",
        caption: "The Gorge in early autumn. Photo: NPS, Dave Bieri.",
        name: "New River Gorge National Park and Preserve",
        shortName: "New River Gorge",
        city: "Glen Jean",
        states: "West Virginia",
        statesList: ["west-virginia"]
    },
    {
        parkId: "noca",
        image: "noca-climber-forbidden-ridge",
        caption: "The West Ridge of Forbidden Peak. Photo: A. Brun.",
        name: "North Cascades National Park",
        shortName: "North Cascades",
        city: "Sedro-Woolley",
        states: "Washington",
        statesList: ["washington"]
    },
    {
        parkId: "olym",
        image: "olym-james-island",
        caption: "James Island. Photo: NPS, Danielle Archuleta.",
        name: "Olympic National Park",
        shortName: "Olympic",
        city: "Port Angeles",
        states: "Washington",
        statesList: ["washington"]
    },
    {
        parkId: "pefo",
        image: "pefo-blue-mesa-member",
        caption: "Blue Mesa Member, Chinle Formation. Photo: NPS.",
        name: "Petrified Forest National Park",
        shortName: "Petrified Forest",
        city: "Petrified Forest",
        states: "Arizona",
        statesList: ["arizona"]
    },
    {
        parkId: "pinn",
        image: "pinn-hillside-in-park",
        caption: "Pinnacles Rocks. Photo: Emily Novack.",
        name: "Pinnacles National Park",
        shortName: "Pinnacles",
        city: "Paicines",
        states: "California",
        statesList: ["california"]
    },
    {
        parkId: "romo",
        image: "romo-flattop-mountain",
        caption: "Hiking Flattop Mountain. Photo: NPS, Bonnie Beach.",
        name: "Rocky Mountain National Park",
        shortName: "Rocky Mountain",
        city: "Estes Park",
        states: "Colorado",
        statesList: ["colorado"]
    },
    {
        parkId: "sagu",
        image: "sagu-tanque-verde-ridge",
        caption: "Tanque Verde Ridge Trail. Photo: NPS, Ryan Summers.",
        name: "Saguaro National Park",
        shortName: "Saguaro",
        city: "Tucson",
        states: "Arizona",
        statesList: ["arizona"]
    },
    {
        parkId: "seki",
        image: "seki-giant-sequoia-tree",
        caption: "The base of a Giant Sequoia tree. Photo: NPS, Kiel Maddox.",
        name: "Sequoia & Kings Canyon National Park",
        shortName: "Sequoia & Kings",
        city: "Three Rivers",
        states: "California",
        statesList: ["california"]
    },
    {
        parkId: "shen",
        image: "shen-misty-mountain-view",
        caption: "A misty winter day. Photo: NPS, E. Knepley.",
        name: "Shenandoah National Park",
        shortName: "Shenandoah",
        city: "Luray",
        states: "Virginia",
        statesList: ["virginia"]
    },
    {
        parkId: "thro",
        image: "thro-loop-road-in-winter",
        caption: "The Loop Road in winter. Photo: NPS, Laura Thomas.",
        name: "Theodore Roosevelt National Park",
        shortName: "Theodore Roosevelt",
        city: "Medora",
        states: "North Dakota",
        statesList: ["north-dakota"]
    },
    {
        parkId: "viis",
        image: "viis-peace-hill-sugar-mill",
        caption: "Peace Hill Sugar Mill. Photo: NPS, Susanna Pershern.",
        name: "Virgin Islands National Park",
        shortName: "Virgin Islands",
        city: "St. John",
        states: "Virgin Islands",
        statesList: ["virgin-islands"]
    },
    {
        parkId: "voya",
        image: "voya-oberholtzer-trail",
        caption: "Oberholtzer Trail. Photo: NPS, C. Meridith.",
        name: "Voyageurs National Park",
        shortName: "Voyageurs",
        city: "International Falls",
        states: "Minnesota",
        statesList: ["minnesota"]
    },
    {
        parkId: "whsa",
        image: "whsa-dunes-drive",
        caption: "The curvy Dunes Drive. Photo: NPS.",
        name: "White Sands National Park",
        shortName: "White Sands",
        city: "Holloman AFB",
        states: "New Mexico",
        statesList: ["new-mexico"]
    },
    {
        parkId: "wica",
        image: "wica-bison-highland-creek-trail",
        caption: "A bison on the trail. Photo: NPS, Bill Schreier.",
        name: "Wind Cave National Park",
        shortName: "Wind Cave",
        city: "Hot Springs",
        states: "South Dakota",
        statesList: ["south-dakota"]
    },
    {
        parkId: "wotr",
        image: "wotr-picnic-in-the-meadow",
        caption: "A picnic in the Meadow. Photo: NPS, Kendra Barat.",
        name: "Wolf Trap National Park for the Performing Arts",
        shortName: "Wolf Trap",
        city: "Vienna",
        states: "Virginia",
        statesList: ["virginia"]
    },
    {
        parkId: "wrst",
        image: "wrst-hikers-near-root-glacier",
        caption: "Hikers near Root Glacier. Photo: NPS.",
        name: "Wrangell - St. Elias National Park & Preserve",
        shortName: "Wrangell - St. Elias",
        city: "Copper Center",
        states: "Alaska",
        statesList: ["alaska"]
    },
    {
        parkId: "yell",
        image: "yell-wolf-in-gardiner-basin",
        caption: "A wolf in Gardiner Basin. Photo: NPS, Neal Herbert.",
        name: "Yellowstone National Park",
        shortName: "Yellowstone",
        city: "Yellowstone National Park",
        states: "Wyoming, extends into Idaho, Montana",
        statesList: ["idaho", "montana", "wyoming"]
    },
    {
        parkId: "yose",
        image: "yose-hetch-hetchy",
        caption: "Hetch Hetchy Reservoir. Photo: Clarisa Flores.",
        name: "Yosemite National Park",
        shortName: "Yosemite",
        city: "Yosemite",
        states: "California",
        statesList: ["california"]
    },
    {
        parkId: "zion",
        image: "zion-temples-towers-sunrise",
        caption: "Temples and Towers at sunrise. Photo: NPS, Rebecca Alfafara.",
        name: "Zion National Park",
        shortName: "Zion",
        city: "Springdale",
        states: "Utah",
        statesList: ["utah"]
    }
];

export { parkImages };
