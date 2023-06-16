const BASEDIR = process.cwd();
const { FOLDERS } = require(`${BASEDIR}/constants/folders.js`);
const { MODE } = require(`${FOLDERS.constantsDir}/blend_mode.js`);
const { NETWORK } = require(`${FOLDERS.constantsDir}/network.js`);

const network = NETWORK.eth;

const solanaMetadata = {
  symbol: "NFT",
  seller_fee_basis_points: 1000, // Define how much % you want from secondary market sales 1000 = 10%
  external_url: "YOUR_WEBSITE_URL_HERE", // Add your website URL here. Ex. https://thepeanutgalleryandco.co.za/
  creators: [
    {
      address: "YOUR_WALLET_ADDRESS_HERE", // Add your owner wallet address here. Ex. 0x5cE5D823f4bD8Ec610868fBa65832B479152C7E1
      share: 100,
    },
  ],
};

// If you have selected Solana then the collection starts from 0 automatically

// albino body structure
const albinoBody = [
	{ name: "background" },
  	{ name: "special back" },
  	{ name: "body albino",
        options: {
          displayName: "body"
        } },
  	{ name: "eyes albino",
        options: {
          displayName: "eyes"
        } },
  	{ name: "face accessory" },
  	{ name: "clothing" },
  	{ name: "mouth" },
  	{ name: "head accessory" },
  	{ name: "special front" },
  	{ name: "hand accessory albino",
        options: {
          displayName: "hand accessory"
        } },
]

// alien body structure
const alienBody = [
  { name: "background" },
    { name: "special back" },
    { name: "body alien",
        options: {
          displayName: "body"
        } },
    { name: "eyes alien",
        options: {
          displayName: "eyes"
        } },
    { name: "face accessory" },
    { name: "clothing" },
    { name: "mouth" },
    { name: "head accessory" },
    { name: "special front" },
    { name: "hand accessory alien",
        options: {
          displayName: "hand accessory"
        } },
]

// frozen body structure
const frozenBody = [
  { name: "background" },
    { name: "special back" },
    { name: "body frozen",
        options: {
          displayName: "body"
        } },
    { name: "eyes frozen",
        options: {
          displayName: "eyes"
        } },
    { name: "face accessory" },
    { name: "clothing" },
    { name: "mouth" },
    { name: "head accessory" },
    { name: "special front" },
    { name: "hand accessory frozen",
        options: {
          displayName: "hand accessory"
        } },
]

// ghost body structure
const ghostBody = [
  { name: "background" },
    { name: "special back" },
    { name: "body ghost",
        options: {
          displayName: "body"
        } },
    { name: "eyes ghost",
        options: {
          displayName: "eyes"
        } },
    { name: "face accessory" },
    { name: "clothing" },
    { name: "mouth" },
    { name: "head accessory" },
    { name: "special front" },
    { name: "hand accessory ghost",
        options: {
          displayName: "hand accessory"
        } },
]

// gorilla body structure (gorilla use normal traits)
const gorillaBody = [
  { name: "background" },
    { name: "special back" },
    { name: "body gorilla",
        options: {
          displayName: "body"
        } },
    { name: "eyes normal",
        options: {
          displayName: "eyes"
        } },
    { name: "face accessory" },
    { name: "clothing" },
    { name: "mouth" },
    { name: "head accessory" },
    { name: "special front" },
    { name: "hand accessory normal",
        options: {
          displayName: "hand accessory"
        } },
]

// lava body structure
const lavaBody = [
  { name: "background" },
    { name: "special back" },
    { name: "body lava",
        options: {
          displayName: "body"
        } },
    { name: "eyes lava",
        options: {
          displayName: "eyes"
        } },
    { name: "face accessory" },
    { name: "clothing" },
    { name: "mouth" },
    { name: "head accessory" },
    { name: "special front" },
    { name: "hand accessory lava",
        options: {
          displayName: "hand accessory"
        } },
]

// monkey body structure
const monkeyBody = [
  { name: "background" },
    { name: "special back" },
    { name: "body monkey",
        options: {
          displayName: "body"
        } },
    { name: "eyes monkey",
        options: {
          displayName: "eyes"
        } },
    { name: "face accessory" },
    { name: "clothing" },
    { name: "mouth" },
    { name: "head accessory" },
    { name: "special front" },
    { name: "hand accessory monkey",
        options: {
          displayName: "hand accessory"
        } },
]

// normal body structure
const normalBody = [
  { name: "background" },
    { name: "special back" },
    { name: "body normal",
        options: {
          displayName: "body"
        } },
    { name: "eyes normal",
        options: {
          displayName: "eyes"
        } },
    { name: "face accessory" },
    { name: "clothing" },
    { name: "mouth" },
    { name: "head accessory" },
    { name: "special front" },
    { name: "hand accessory normal",
        options: {
          displayName: "hand accessory"
        } },
]

// slime body structure
const slimeBody = [
  { name: "background" },
    { name: "special back" },
    { name: "body slime",
        options: {
          displayName: "body"
        } },
    { name: "eyes slime",
        options: {
          displayName: "eyes"
        } },
    { name: "face accessory" },
    { name: "clothing" },
    { name: "mouth" },
    { name: "head accessory" },
    { name: "special front" },
    { name: "hand accessory slime",
        options: {
          displayName: "hand accessory"
        } },
]

// thermal body structure
const thermalBody = [
  { name: "background" },
    { name: "special back" },
    { name: "body thermal",
        options: {
          displayName: "body"
        } },
    { name: "eyes thermal",
        options: {
          displayName: "eyes"
        } },
    { name: "face accessory" },
    { name: "clothing" },
    { name: "mouth" },
    { name: "head accessory" },
    { name: "special front" },
    { name: "hand accessory thermal",
        options: {
          displayName: "hand accessory"
        } },
]

// tiger body structure
const tigerBody = [
  { name: "background" },
    { name: "special back" },
    { name: "body tiger",
        options: {
          displayName: "body"
        } },
    { name: "eyes tiger",
        options: {
          displayName: "eyes"
        } },
    { name: "face accessory" },
    { name: "clothing" },
    { name: "mouth" },
    { name: "head accessory" },
    { name: "special front" },
    { name: "hand accessory tiger",
        options: {
          displayName: "hand accessory"
        } },
]

// zombie body structure
const zombieBody = [
  { name: "background" },
    { name: "special back" },
    { name: "body zombie",
        options: {
          displayName: "body"
        } },
    { name: "eyes zombie",
        options: {
          displayName: "eyes"
        } },
    { name: "face accessory" },
    { name: "clothing" },
    { name: "mouth" },
    { name: "head accessory" },
    { name: "special front" },
    { name: "hand accessory zombie",
        options: {
          displayName: "hand accessory"
        } },
]

// just for an idea, doesn't use below structure for now.
// const albinoBodyBack = [
// 	{ name: "background" },
//   	{ name: "special back" },
//   	{ name: "body albino" },
//   	{ name: "eyes albino" },
//   	{ name: "face accessory" },
//   	{ name: "clothing" },
//   	{ name: "mouth" },
//   	{ name: "head accessory" },
//   	// { name: "special front" },
//   	// { name: "hand accessory albino" },
// ]
// const albinoBodyFront = [
// 	{ name: "background" },
//   	// { name: "special back" },
//   	{ name: "body albino" },
//   	{ name: "eyes albino" },
//   	{ name: "face accessory" },
//   	{ name: "clothing" },
//   	{ name: "mouth" },
//   	{ name: "head accessory" },
//   	{ name: "special front" },
//   	// { name: "hand accessory albino" },
// ]
// const albinoBodyHand = [
// 	{ name: "background" },
//   	// { name: "special back" },
//   	{ name: "body albino" },
//   	{ name: "eyes albino" },
//   	{ name: "face accessory" },
//   	{ name: "clothing" },
//   	{ name: "mouth" },
//   	{ name: "head accessory" },
//   	// { name: "special front" },
//   	{ name: "hand accessory albino" },
// ]

const defaultStructure = [
      { name: "background" },
      { name: "special back" },
      { name: "body" },
      { name: "eyes" },
      { name: "face accessory" },
      { name: "clothing" },
      { name: "mouth" },
      { name: "head accessory" },
      { name: "special front" },
      { name: "hand accessory" },
    ]

const incompatibleTest = {
  "mouth/red bandana" : [
      "eyes/albino electric eyes",
      "eyes/alien electric eyes",
      "eyes/frozen electric eyes",
      "eyes/ghost electric eyes",
      "eyes/lava electric eyes",
      "eyes/monkey electric eyes",
      "eyes/normal electric eyes",
      "eyes/slime electric eyes",
      "eyes/thermal electric eyes",
      "eyes/tiger electric eyes",
      "eyes/zombie electric eyes",
    ],
    "mouth/blue bandana" : [
      "eyes/albino electric eyes",
      "eyes/alien electric eyes",
      "eyes/frozen electric eyes",
      "eyes/ghost electric eyes",
      "eyes/lava electric eyes",
      "eyes/monkey electric eyes",
      "eyes/normal electric eyes",
      "eyes/slime electric eyes",
      "eyes/thermal electric eyes",
      "eyes/tiger electric eyes",
      "eyes/zombie electric eyes",
    ],
    "clothing/banana hoody" : [
      "eyes/normal laser eyes",
      "eyes/ghost laser eyes",
      "eyes/monkey laser eyes",
      "eyes/tiger laser eyes",
      "eyes/thermal laser eyes",
      "eyes/frozen laser eyes", 
      "eyes/albino laser eyes",
      "eyes/zombie laser eyes",
      "eyes/lava laser eyes",
      "eyes/alien laser",
      "eyes/slime laser eyes",
      "eyes/albino electric eyes",
      "eyes/alien electric eyes",
      "eyes/frozen electric eyes",
      "eyes/ghost electric eyes",
      "eyes/lava electric eyes",
      "eyes/monkey electric eyes",
      "eyes/normal electric eyes",
      "eyes/slime electric eyes",
      "eyes/thermal electric eyes",
      "eyes/tiger electric eyes",
      "eyes/zombie electric eyes",
      "face accessory/cyberpunk scanner",
      "mouth/red bandana",
      "mouth/blue bandana",
    ],
    "clothing/banana suit" : [
      "eyes/normal laser eyes",
      "eyes/ghost laser eyes",
      "eyes/monkey laser eyes",
      "eyes/tiger laser eyes",
      "eyes/thermal laser eyes",
      "eyes/frozen laser eyes", 
      "eyes/albino laser eyes",
      "eyes/zombie laser eyes",
      "eyes/lava laser eyes",
      "eyes/alien laser",
      "eyes/slime laser eyes",
      "eyes/albino electric eyes",
      "eyes/alien electric eyes",
      "eyes/frozen electric eyes",
      "eyes/ghost electric eyes",
      "eyes/lava electric eyes",
      "eyes/monkey electric eyes",
      "eyes/normal electric eyes",
      "eyes/slime electric eyes",
      "eyes/thermal electric eyes",
      "eyes/tiger electric eyes",
      "eyes/zombie electric eyes",
      "face accessory/cyberpunk scanner",
      "mouth/red bandana",
      "mouth/blue bandana",
    ],
  "clothing/cyberpunk jacket": [
    "eyes/normal laser eyes",
      "eyes/ghost laser eyes",
      "eyes/monkey laser eyes",
      "eyes/tiger laser eyes",
      "eyes/thermal laser eyes",
      "eyes/frozen laser eyes", 
      "eyes/albino laser eyes",
      "eyes/zombie laser eyes",
      "eyes/lava laser eyes",
      "eyes/alien laser",
      "eyes/slime laser eyes",
      "eyes/albino electric eyes",
      "eyes/alien electric eyes",
      "eyes/frozen electric eyes",
      "eyes/ghost electric eyes",
      "eyes/lava electric eyes",
      "eyes/monkey electric eyes",
      "eyes/normal electric eyes",
      "eyes/slime electric eyes",
      "eyes/thermal electric eyes",
      "eyes/tiger electric eyes",
      "eyes/zombie electric eyes",
      "face accessory/cyberpunk scanner",
      "mouth/red bandana",
      "mouth/blue bandana",
  ],
  "clothing/black closed neck hoody": [
    "eyes/normal laser eyes",
      "eyes/ghost laser eyes",
      "eyes/monkey laser eyes",
      "eyes/tiger laser eyes",
      "eyes/thermal laser eyes",
      "eyes/frozen laser eyes", 
      "eyes/albino laser eyes",
      "eyes/zombie laser eyes",
      "eyes/lava laser eyes",
      "eyes/alien laser",
      "eyes/slime laser eyes",
      "eyes/albino electric eyes",
      "eyes/alien electric eyes",
      "eyes/frozen electric eyes",
      "eyes/ghost electric eyes",
      "eyes/lava electric eyes",
      "eyes/monkey electric eyes",
      "eyes/normal electric eyes",
      "eyes/slime electric eyes",
      "eyes/thermal electric eyes",
      "eyes/tiger electric eyes",
      "eyes/zombie electric eyes",
      "face accessory/cyberpunk scanner",
      "mouth/red bandana",
      "mouth/blue bandana",
  ],
  "clothing/black hoody": [
    "eyes/normal laser eyes",
      "eyes/ghost laser eyes",
      "eyes/monkey laser eyes",
      "eyes/tiger laser eyes",
      "eyes/thermal laser eyes",
      "eyes/frozen laser eyes", 
      "eyes/albino laser eyes",
      "eyes/zombie laser eyes",
      "eyes/lava laser eyes",
      "eyes/alien laser",
      "eyes/slime laser eyes",
      "eyes/albino electric eyes",
      "eyes/alien electric eyes",
      "eyes/frozen electric eyes",
      "eyes/ghost electric eyes",
      "eyes/lava electric eyes",
      "eyes/monkey electric eyes",
      "eyes/normal electric eyes",
      "eyes/slime electric eyes",
      "eyes/thermal electric eyes",
      "eyes/tiger electric eyes",
      "eyes/zombie electric eyes",
      "face accessory/cyberpunk scanner",
      "mouth/red bandana",
      "mouth/blue bandana",
  ],
  "clothing/doge suit": [
    "eyes/normal laser eyes",
      "eyes/ghost laser eyes",
      "eyes/monkey laser eyes",
      "eyes/tiger laser eyes",
      "eyes/thermal laser eyes",
      "eyes/frozen laser eyes", 
      "eyes/albino laser eyes",
      "eyes/zombie laser eyes",
      "eyes/lava laser eyes",
      "eyes/alien laser",
      "eyes/slime laser eyes",
      "eyes/albino electric eyes",
      "eyes/alien electric eyes",
      "eyes/frozen electric eyes",
      "eyes/ghost electric eyes",
      "eyes/lava electric eyes",
      "eyes/monkey electric eyes",
      "eyes/normal electric eyes",
      "eyes/slime electric eyes",
      "eyes/thermal electric eyes",
      "eyes/tiger electric eyes",
      "eyes/zombie electric eyes",
      "face accessory/cyberpunk scanner",
      "mouth/red bandana",
      "mouth/blue bandana",
  ],
  "clothing/dragonfruit suit": [
    "eyes/normal laser eyes",
      "eyes/ghost laser eyes",
      "eyes/monkey laser eyes",
      "eyes/tiger laser eyes",
      "eyes/thermal laser eyes",
      "eyes/frozen laser eyes", 
      "eyes/albino laser eyes",
      "eyes/zombie laser eyes",
      "eyes/lava laser eyes",
      "eyes/alien laser",
      "eyes/slime laser eyes",
      "eyes/albino electric eyes",
      "eyes/alien electric eyes",
      "eyes/frozen electric eyes",
      "eyes/ghost electric eyes",
      "eyes/lava electric eyes",
      "eyes/monkey electric eyes",
      "eyes/normal electric eyes",
      "eyes/slime electric eyes",
      "eyes/thermal electric eyes",
      "eyes/tiger electric eyes",
      "eyes/zombie electric eyes",
      "face accessory/cyberpunk scanner",
      "mouth/red bandana",
      "mouth/blue bandana",
  ],
  "clothing/green closed neck hoody": [
    "eyes/normal laser eyes",
      "eyes/ghost laser eyes",
      "eyes/monkey laser eyes",
      "eyes/tiger laser eyes",
      "eyes/thermal laser eyes",
      "eyes/frozen laser eyes", 
      "eyes/albino laser eyes",
      "eyes/zombie laser eyes",
      "eyes/lava laser eyes",
      "eyes/alien laser",
      "eyes/slime laser eyes",
      "eyes/albino electric eyes",
      "eyes/alien electric eyes",
      "eyes/frozen electric eyes",
      "eyes/ghost electric eyes",
      "eyes/lava electric eyes",
      "eyes/monkey electric eyes",
      "eyes/normal electric eyes",
      "eyes/slime electric eyes",
      "eyes/thermal electric eyes",
      "eyes/tiger electric eyes",
      "eyes/zombie electric eyes",
      "face accessory/cyberpunk scanner",
      "mouth/red bandana",
      "mouth/blue bandana",
  ],
  "clothing/grey hoody": [
    "eyes/normal laser eyes",
      "eyes/ghost laser eyes",
      "eyes/monkey laser eyes",
      "eyes/tiger laser eyes",
      "eyes/thermal laser eyes",
      "eyes/frozen laser eyes", 
      "eyes/albino laser eyes",
      "eyes/zombie laser eyes",
      "eyes/lava laser eyes",
      "eyes/alien laser",
      "eyes/slime laser eyes",
      "eyes/albino electric eyes",
      "eyes/alien electric eyes",
      "eyes/frozen electric eyes",
      "eyes/ghost electric eyes",
      "eyes/lava electric eyes",
      "eyes/monkey electric eyes",
      "eyes/normal electric eyes",
      "eyes/slime electric eyes",
      "eyes/thermal electric eyes",
      "eyes/tiger electric eyes",
      "eyes/zombie electric eyes",
      "face accessory/cyberpunk scanner",
      "mouth/red bandana",
      "mouth/blue bandana",
  ],
  "clothing/hood 1": [
    "eyes/normal laser eyes",
      "eyes/ghost laser eyes",
      "eyes/monkey laser eyes",
      "eyes/tiger laser eyes",
      "eyes/thermal laser eyes",
      "eyes/frozen laser eyes", 
      "eyes/albino laser eyes",
      "eyes/zombie laser eyes",
      "eyes/lava laser eyes",
      "eyes/alien laser",
      "eyes/slime laser eyes",
      "eyes/albino electric eyes",
      "eyes/alien electric eyes",
      "eyes/frozen electric eyes",
      "eyes/ghost electric eyes",
      "eyes/lava electric eyes",
      "eyes/monkey electric eyes",
      "eyes/normal electric eyes",
      "eyes/slime electric eyes",
      "eyes/thermal electric eyes",
      "eyes/tiger electric eyes",
      "eyes/zombie electric eyes",
      "face accessory/cyberpunk scanner",
      "mouth/red bandana",
      "mouth/blue bandana",
  ],
  "clothing/hood black": [
    "eyes/normal laser eyes",
      "eyes/ghost laser eyes",
      "eyes/monkey laser eyes",
      "eyes/tiger laser eyes",
      "eyes/thermal laser eyes",
      "eyes/frozen laser eyes", 
      "eyes/albino laser eyes",
      "eyes/zombie laser eyes",
      "eyes/lava laser eyes",
      "eyes/alien laser",
      "eyes/slime laser eyes",
      "eyes/albino electric eyes",
      "eyes/alien electric eyes",
      "eyes/frozen electric eyes",
      "eyes/ghost electric eyes",
      "eyes/lava electric eyes",
      "eyes/monkey electric eyes",
      "eyes/normal electric eyes",
      "eyes/slime electric eyes",
      "eyes/thermal electric eyes",
      "eyes/tiger electric eyes",
      "eyes/zombie electric eyes",
      "face accessory/cyberpunk scanner",
      "mouth/red bandana",
      "mouth/blue bandana",
  ],
  "clothing/hood up straps green": [
    "eyes/normal laser eyes",
      "eyes/ghost laser eyes",
      "eyes/monkey laser eyes",
      "eyes/tiger laser eyes",
      "eyes/thermal laser eyes",
      "eyes/frozen laser eyes", 
      "eyes/albino laser eyes",
      "eyes/zombie laser eyes",
      "eyes/lava laser eyes",
      "eyes/alien laser",
      "eyes/slime laser eyes",
      "eyes/albino electric eyes",
      "eyes/alien electric eyes",
      "eyes/frozen electric eyes",
      "eyes/ghost electric eyes",
      "eyes/lava electric eyes",
      "eyes/monkey electric eyes",
      "eyes/normal electric eyes",
      "eyes/slime electric eyes",
      "eyes/thermal electric eyes",
      "eyes/tiger electric eyes",
      "eyes/zombie electric eyes",
      "face accessory/cyberpunk scanner",
      "mouth/red bandana",
      "mouth/blue bandana",
  ],
  "clothing/hood up straps": [
    "eyes/normal laser eyes",
      "eyes/ghost laser eyes",
      "eyes/monkey laser eyes",
      "eyes/tiger laser eyes",
      "eyes/thermal laser eyes",
      "eyes/frozen laser eyes", 
      "eyes/albino laser eyes",
      "eyes/zombie laser eyes",
      "eyes/lava laser eyes",
      "eyes/alien laser",
      "eyes/slime laser eyes",
      "eyes/albino electric eyes",
      "eyes/alien electric eyes",
      "eyes/frozen electric eyes",
      "eyes/ghost electric eyes",
      "eyes/lava electric eyes",
      "eyes/monkey electric eyes",
      "eyes/normal electric eyes",
      "eyes/slime electric eyes",
      "eyes/thermal electric eyes",
      "eyes/tiger electric eyes",
      "eyes/zombie electric eyes",
      "face accessory/cyberpunk scanner",
      "mouth/red bandana",
      "mouth/blue bandana",
  ],
  "clothing/hood up white banana": [
    "eyes/normal laser eyes",
      "eyes/ghost laser eyes",
      "eyes/monkey laser eyes",
      "eyes/tiger laser eyes",
      "eyes/thermal laser eyes",
      "eyes/frozen laser eyes", 
      "eyes/albino laser eyes",
      "eyes/zombie laser eyes",
      "eyes/lava laser eyes",
      "eyes/alien laser",
      "eyes/slime laser eyes",
      "eyes/albino electric eyes",
      "eyes/alien electric eyes",
      "eyes/frozen electric eyes",
      "eyes/ghost electric eyes",
      "eyes/lava electric eyes",
      "eyes/monkey electric eyes",
      "eyes/normal electric eyes",
      "eyes/slime electric eyes",
      "eyes/thermal electric eyes",
      "eyes/tiger electric eyes",
      "eyes/zombie electric eyes",
      "face accessory/cyberpunk scanner",
      "mouth/red bandana",
      "mouth/blue bandana",
  ],
  "clothing/hood up with jacket": [
    "eyes/normal laser eyes",
      "eyes/ghost laser eyes",
      "eyes/monkey laser eyes",
      "eyes/tiger laser eyes",
      "eyes/thermal laser eyes",
      "eyes/frozen laser eyes", 
      "eyes/albino laser eyes",
      "eyes/zombie laser eyes",
      "eyes/lava laser eyes",
      "eyes/alien laser",
      "eyes/slime laser eyes",
      "eyes/albino electric eyes",
      "eyes/alien electric eyes",
      "eyes/frozen electric eyes",
      "eyes/ghost electric eyes",
      "eyes/lava electric eyes",
      "eyes/monkey electric eyes",
      "eyes/normal electric eyes",
      "eyes/slime electric eyes",
      "eyes/thermal electric eyes",
      "eyes/tiger electric eyes",
      "eyes/zombie electric eyes",
      "face accessory/cyberpunk scanner",
      "mouth/red bandana",
      "mouth/blue bandana",
  ],
  "clothing/mech": [
    "eyes/normal laser eyes",
      "eyes/ghost laser eyes",
      "eyes/monkey laser eyes",
      "eyes/tiger laser eyes",
      "eyes/thermal laser eyes",
      "eyes/frozen laser eyes", 
      "eyes/albino laser eyes",
      "eyes/zombie laser eyes",
      "eyes/lava laser eyes",
      "eyes/alien laser",
      "eyes/slime laser eyes",
      "eyes/albino electric eyes",
      "eyes/alien electric eyes",
      "eyes/frozen electric eyes",
      "eyes/ghost electric eyes",
      "eyes/lava electric eyes",
      "eyes/monkey electric eyes",
      "eyes/normal electric eyes",
      "eyes/slime electric eyes",
      "eyes/thermal electric eyes",
      "eyes/tiger electric eyes",
      "eyes/zombie electric eyes",
      "face accessory/cyberpunk scanner",
      "mouth/red bandana",
      "mouth/blue bandana",
  ],
  "clothing/penguin suit": [
    "eyes/normal laser eyes",
      "eyes/ghost laser eyes",
      "eyes/monkey laser eyes",
      "eyes/tiger laser eyes",
      "eyes/thermal laser eyes",
      "eyes/frozen laser eyes", 
      "eyes/albino laser eyes",
      "eyes/zombie laser eyes",
      "eyes/lava laser eyes",
      "eyes/alien laser",
      "eyes/slime laser eyes",
      "eyes/albino electric eyes",
      "eyes/alien electric eyes",
      "eyes/frozen electric eyes",
      "eyes/ghost electric eyes",
      "eyes/lava electric eyes",
      "eyes/monkey electric eyes",
      "eyes/normal electric eyes",
      "eyes/slime electric eyes",
      "eyes/thermal electric eyes",
      "eyes/tiger electric eyes",
      "eyes/zombie electric eyes",
      "face accessory/cyberpunk scanner",
      "mouth/red bandana",
      "mouth/blue bandana",
  ],
  "clothing/pepe suit": [
    "eyes/normal laser eyes",
      "eyes/ghost laser eyes",
      "eyes/monkey laser eyes",
      "eyes/tiger laser eyes",
      "eyes/thermal laser eyes",
      "eyes/frozen laser eyes", 
      "eyes/albino laser eyes",
      "eyes/zombie laser eyes",
      "eyes/lava laser eyes",
      "eyes/alien laser",
      "eyes/slime laser eyes",
      "eyes/albino electric eyes",
      "eyes/alien electric eyes",
      "eyes/frozen electric eyes",
      "eyes/ghost electric eyes",
      "eyes/lava electric eyes",
      "eyes/monkey electric eyes",
      "eyes/normal electric eyes",
      "eyes/slime electric eyes",
      "eyes/thermal electric eyes",
      "eyes/tiger electric eyes",
      "eyes/zombie electric eyes",
      "face accessory/cyberpunk scanner",
      "mouth/red bandana",
      "mouth/blue bandana",
  ],
  "clothing/shark suit": [
    "eyes/normal laser eyes",
      "eyes/ghost laser eyes",
      "eyes/monkey laser eyes",
      "eyes/tiger laser eyes",
      "eyes/thermal laser eyes",
      "eyes/frozen laser eyes", 
      "eyes/albino laser eyes",
      "eyes/zombie laser eyes",
      "eyes/lava laser eyes",
      "eyes/alien laser",
      "eyes/slime laser eyes",
      "eyes/albino electric eyes",
      "eyes/alien electric eyes",
      "eyes/frozen electric eyes",
      "eyes/ghost electric eyes",
      "eyes/lava electric eyes",
      "eyes/monkey electric eyes",
      "eyes/normal electric eyes",
      "eyes/slime electric eyes",
      "eyes/thermal electric eyes",
      "eyes/tiger electric eyes",
      "eyes/zombie electric eyes",
      "face accessory/cyberpunk scanner",
      "mouth/red bandana",
      "mouth/blue bandana",
  ],
  "clothing/koala suit": [
    "eyes/normal laser eyes",
      "eyes/ghost laser eyes",
      "eyes/monkey laser eyes",
      "eyes/tiger laser eyes",
      "eyes/thermal laser eyes",
      "eyes/frozen laser eyes", 
      "eyes/albino laser eyes",
      "eyes/zombie laser eyes",
      "eyes/lava laser eyes",
      "eyes/alien laser",
      "eyes/slime laser eyes",
      "eyes/albino electric eyes",
      "eyes/alien electric eyes",
      "eyes/frozen electric eyes",
      "eyes/ghost electric eyes",
      "eyes/lava electric eyes",
      "eyes/monkey electric eyes",
      "eyes/normal electric eyes",
      "eyes/slime electric eyes",
      "eyes/thermal electric eyes",
      "eyes/tiger electric eyes",
      "eyes/zombie electric eyes",
      "face accessory/cyberpunk scanner",
      "mouth/red bandana",
      "mouth/blue bandana",
  ],
    "head accessory/acorn": [
      "clothing/banana suit",
      "eyes/normal laser eyes",
      "eyes/ghost laser eyes",
      "eyes/monkey laser eyes",
      "eyes/tiger laser eyes",
      "eyes/thermal laser eyes",
      "eyes/frozen laser eyes", 
      "eyes/albino laser eyes",
      "eyes/zombie laser eyes",
      "eyes/lava laser eyes",
      "eyes/alien laser",
      "eyes/slime laser eyes",
    ],
    "head accessory/adventurer hat": [
      "clothing/banana suit",
      "eyes/normal laser eyes",
      "eyes/ghost laser eyes",
      "eyes/monkey laser eyes",
      "eyes/tiger laser eyes",
      "eyes/thermal laser eyes",
      "eyes/frozen laser eyes", 
      "eyes/albino laser eyes",
      "eyes/zombie laser eyes",
      "eyes/lava laser eyes",
      "eyes/alien laser",
      "eyes/slime laser eyes",
    ],
    "head accessory/alien antenna": [
      "clothing/banana suit",
      "eyes/normal laser eyes",
      "eyes/ghost laser eyes",
      "eyes/monkey laser eyes",
      "eyes/tiger laser eyes",
      "eyes/thermal laser eyes",
      "eyes/frozen laser eyes", 
      "eyes/albino laser eyes",
      "eyes/zombie laser eyes",
      "eyes/lava laser eyes",
      "eyes/alien laser",
      "eyes/slime laser eyes",
    ],
    "head accessory/antenna": [
      "clothing/banana suit",
      "eyes/normal laser eyes",
      "eyes/ghost laser eyes",
      "eyes/monkey laser eyes",
      "eyes/tiger laser eyes",
      "eyes/thermal laser eyes",
      "eyes/frozen laser eyes", 
      "eyes/albino laser eyes",
      "eyes/zombie laser eyes",
      "eyes/lava laser eyes",
      "eyes/alien laser",
      "eyes/slime laser eyes",
    ],
    "head accessory/astronaut helmet": [
      "clothing/banana suit",
      "eyes/normal laser eyes",
      "eyes/ghost laser eyes",
      "eyes/monkey laser eyes",
      "eyes/tiger laser eyes",
      "eyes/thermal laser eyes",
      "eyes/frozen laser eyes", 
      "eyes/albino laser eyes",
      "eyes/zombie laser eyes",
      "eyes/lava laser eyes",
      "eyes/alien laser",
      "eyes/slime laser eyes",
    ], 
    "head accessory/babydilla": [
      "clothing/banana suit",
      "eyes/normal laser eyes",
      "eyes/ghost laser eyes",
      "eyes/monkey laser eyes",
      "eyes/tiger laser eyes",
      "eyes/thermal laser eyes",
      "eyes/frozen laser eyes", 
      "eyes/albino laser eyes",
      "eyes/zombie laser eyes",
      "eyes/lava laser eyes",
      "eyes/alien laser",
      "eyes/slime laser eyes",
    ],
    "head accessory/banana peel": [
      "clothing/banana suit",
      "eyes/normal laser eyes",
      "eyes/ghost laser eyes",
      "eyes/monkey laser eyes",
      "eyes/tiger laser eyes",
      "eyes/thermal laser eyes",
      "eyes/frozen laser eyes", 
      "eyes/albino laser eyes",
      "eyes/zombie laser eyes",
      "eyes/lava laser eyes",
      "eyes/alien laser",
      "eyes/slime laser eyes",
    ],
    "head accessory/baseball cap red, gray": [
      "clothing/banana suit",
      "eyes/normal laser eyes",
      "eyes/ghost laser eyes",
      "eyes/monkey laser eyes",
      "eyes/tiger laser eyes",
      "eyes/thermal laser eyes",
      "eyes/frozen laser eyes", 
      "eyes/albino laser eyes",
      "eyes/zombie laser eyes",
      "eyes/lava laser eyes",
      "eyes/alien laser",
      "eyes/slime laser eyes",
    ],
    "head accessory/baseball cap yellow": [
      "clothing/banana suit",
      "eyes/normal laser eyes",
      "eyes/ghost laser eyes",
      "eyes/monkey laser eyes",
      "eyes/tiger laser eyes",
      "eyes/thermal laser eyes",
      "eyes/frozen laser eyes", 
      "eyes/albino laser eyes",
      "eyes/zombie laser eyes",
      "eyes/lava laser eyes",
      "eyes/alien laser",
      "eyes/slime laser eyes",
    ],
    "head accessory/beanie and dreads": [
      "clothing/banana suit",
      "eyes/normal laser eyes",
      "eyes/ghost laser eyes",
      "eyes/monkey laser eyes",
      "eyes/tiger laser eyes",
      "eyes/thermal laser eyes",
      "eyes/frozen laser eyes", 
      "eyes/albino laser eyes",
      "eyes/zombie laser eyes",
      "eyes/lava laser eyes",
      "eyes/alien laser",
      "eyes/slime laser eyes",
    ],
    "head accessory/beanie": [
      "clothing/banana suit",
      "eyes/normal laser eyes",
      "eyes/ghost laser eyes",
      "eyes/monkey laser eyes",
      "eyes/tiger laser eyes",
      "eyes/thermal laser eyes",
      "eyes/frozen laser eyes", 
      "eyes/albino laser eyes",
      "eyes/zombie laser eyes",
      "eyes/lava laser eyes",
      "eyes/alien laser",
      "eyes/slime laser eyes",
    ],
    "head accessory/blonde hair": [
      "clothing/banana suit",
      "eyes/normal laser eyes",
      "eyes/ghost laser eyes",
      "eyes/monkey laser eyes",
      "eyes/tiger laser eyes",
      "eyes/thermal laser eyes",
      "eyes/frozen laser eyes", 
      "eyes/albino laser eyes",
      "eyes/zombie laser eyes",
      "eyes/lava laser eyes",
      "eyes/alien laser",
      "eyes/slime laser eyes",
    ],
    "head accessory/blue crown": [
      "clothing/banana suit",
      "eyes/normal laser eyes",
      "eyes/ghost laser eyes",
      "eyes/monkey laser eyes",
      "eyes/tiger laser eyes",
      "eyes/thermal laser eyes",
      "eyes/frozen laser eyes", 
      "eyes/albino laser eyes",
      "eyes/zombie laser eyes",
      "eyes/lava laser eyes",
      "eyes/alien laser",
      "eyes/slime laser eyes",
    ],
    "head accessory/brunette hair": [
      "clothing/banana suit",
      "eyes/normal laser eyes",
      "eyes/ghost laser eyes",
      "eyes/monkey laser eyes",
      "eyes/tiger laser eyes",
      "eyes/thermal laser eyes",
      "eyes/frozen laser eyes", 
      "eyes/albino laser eyes",
      "eyes/zombie laser eyes",
      "eyes/lava laser eyes",
      "eyes/alien laser",
      "eyes/slime laser eyes",
    ],
    "head accessory/cat earphones": [
      "clothing/banana suit",
      "eyes/normal laser eyes",
      "eyes/ghost laser eyes",
      "eyes/monkey laser eyes",
      "eyes/tiger laser eyes",
      "eyes/thermal laser eyes",
      "eyes/frozen laser eyes", 
      "eyes/albino laser eyes",
      "eyes/zombie laser eyes",
      "eyes/lava laser eyes",
      "eyes/alien laser",
      "eyes/slime laser eyes",
    ],
    "head accessory/chef hat": [
      "clothing/banana suit",
      "eyes/normal laser eyes",
      "eyes/ghost laser eyes",
      "eyes/monkey laser eyes",
      "eyes/tiger laser eyes",
      "eyes/thermal laser eyes",
      "eyes/frozen laser eyes", 
      "eyes/albino laser eyes",
      "eyes/zombie laser eyes",
      "eyes/lava laser eyes",
      "eyes/alien laser",
      "eyes/slime laser eyes",
    ],
    "head accessory/duck hat": [
      "clothing/banana suit",
      "eyes/normal laser eyes",
      "eyes/ghost laser eyes",
      "eyes/monkey laser eyes",
      "eyes/tiger laser eyes",
      "eyes/thermal laser eyes",
      "eyes/frozen laser eyes", 
      "eyes/albino laser eyes",
      "eyes/zombie laser eyes",
      "eyes/lava laser eyes",
      "eyes/alien laser",
      "eyes/slime laser eyes",
    ],
    "head accessory/fish bowl": [
      "clothing/banana suit",
      "eyes/normal laser eyes",
      "eyes/ghost laser eyes",
      "eyes/monkey laser eyes",
      "eyes/tiger laser eyes",
      "eyes/thermal laser eyes",
      "eyes/frozen laser eyes", 
      "eyes/albino laser eyes",
      "eyes/zombie laser eyes",
      "eyes/lava laser eyes",
      "eyes/alien laser",
      "eyes/slime laser eyes",
    ],
    "head accessory/frog": [
      "clothing/banana suit",
      "eyes/normal laser eyes",
      "eyes/ghost laser eyes",
      "eyes/monkey laser eyes",
      "eyes/tiger laser eyes",
      "eyes/thermal laser eyes",
      "eyes/frozen laser eyes", 
      "eyes/albino laser eyes",
      "eyes/zombie laser eyes",
      "eyes/lava laser eyes",
      "eyes/alien laser",
      "eyes/slime laser eyes",
    ],
    "head accessory/gold halo": [
      "clothing/banana suit",
      "eyes/normal laser eyes",
      "eyes/ghost laser eyes",
      "eyes/monkey laser eyes",
      "eyes/tiger laser eyes",
      "eyes/thermal laser eyes",
      "eyes/frozen laser eyes", 
      "eyes/albino laser eyes",
      "eyes/zombie laser eyes",
      "eyes/lava laser eyes",
      "eyes/alien laser",
      "eyes/slime laser eyes",
    ],
    "head accessory/jamaican beanie": [
      "clothing/banana suit",
      "eyes/normal laser eyes",
      "eyes/ghost laser eyes",
      "eyes/monkey laser eyes",
      "eyes/tiger laser eyes",
      "eyes/thermal laser eyes",
      "eyes/frozen laser eyes", 
      "eyes/albino laser eyes",
      "eyes/zombie laser eyes",
      "eyes/lava laser eyes",
      "eyes/alien laser",
      "eyes/slime laser eyes",
    ],
    "head accessory/knights helmet": [
      "clothing/banana suit",
      "eyes/normal laser eyes",
      "eyes/ghost laser eyes",
      "eyes/monkey laser eyes",
      "eyes/tiger laser eyes",
      "eyes/thermal laser eyes",
      "eyes/frozen laser eyes", 
      "eyes/albino laser eyes",
      "eyes/zombie laser eyes",
      "eyes/lava laser eyes",
      "eyes/alien laser",
      "eyes/slime laser eyes",
    ],
    "head accessory/miner helmet": [
      "clothing/banana suit",
      "eyes/normal laser eyes",
      "eyes/ghost laser eyes",
      "eyes/monkey laser eyes",
      "eyes/tiger laser eyes",
      "eyes/thermal laser eyes",
      "eyes/frozen laser eyes", 
      "eyes/albino laser eyes",
      "eyes/zombie laser eyes",
      "eyes/lava laser eyes",
      "eyes/alien laser",
      "eyes/slime laser eyes",
    ],
    "head accessory/mushroom hat": [
      "clothing/banana suit",
      "eyes/normal laser eyes",
      "eyes/ghost laser eyes",
      "eyes/monkey laser eyes",
      "eyes/tiger laser eyes",
      "eyes/thermal laser eyes",
      "eyes/frozen laser eyes", 
      "eyes/albino laser eyes",
      "eyes/zombie laser eyes",
      "eyes/lava laser eyes",
      "eyes/alien laser",
      "eyes/slime laser eyes",
    ],
    "head accessory/narwhal": [
      "clothing/banana suit",
      "eyes/normal laser eyes",
      "eyes/ghost laser eyes",
      "eyes/monkey laser eyes",
      "eyes/tiger laser eyes",
      "eyes/thermal laser eyes",
      "eyes/frozen laser eyes", 
      "eyes/albino laser eyes",
      "eyes/zombie laser eyes",
      "eyes/lava laser eyes",
      "eyes/alien laser",
      "eyes/slime laser eyes",
    ],
    "head accessory/neon halo": [
      "clothing/banana suit",
      "eyes/normal laser eyes",
      "eyes/ghost laser eyes",
      "eyes/monkey laser eyes",
      "eyes/tiger laser eyes",
      "eyes/thermal laser eyes",
      "eyes/frozen laser eyes", 
      "eyes/albino laser eyes",
      "eyes/zombie laser eyes",
      "eyes/lava laser eyes",
      "eyes/alien laser",
      "eyes/slime laser eyes",
    ],
    "head accessory/pineapple": [
      "clothing/banana suit",
      "eyes/normal laser eyes",
      "eyes/ghost laser eyes",
      "eyes/monkey laser eyes",
      "eyes/tiger laser eyes",
      "eyes/thermal laser eyes",
      "eyes/frozen laser eyes", 
      "eyes/albino laser eyes",
      "eyes/zombie laser eyes",
      "eyes/lava laser eyes",
      "eyes/alien laser",
      "eyes/slime laser eyes",
    ],
    "head accessory/police hat": [
      "clothing/banana suit",
      "eyes/normal laser eyes",
      "eyes/ghost laser eyes",
      "eyes/monkey laser eyes",
      "eyes/tiger laser eyes",
      "eyes/thermal laser eyes",
      "eyes/frozen laser eyes", 
      "eyes/albino laser eyes",
      "eyes/zombie laser eyes",
      "eyes/lava laser eyes",
      "eyes/alien laser",
      "eyes/slime laser eyes",
    ],
    "head accessory/rabbit ears": [
      "clothing/banana suit",
      "eyes/normal laser eyes",
      "eyes/ghost laser eyes",
      "eyes/monkey laser eyes",
      "eyes/tiger laser eyes",
      "eyes/thermal laser eyes",
      "eyes/frozen laser eyes", 
      "eyes/albino laser eyes",
      "eyes/zombie laser eyes",
      "eyes/lava laser eyes",
      "eyes/alien laser",
      "eyes/slime laser eyes",
    ],
    "head accessory/red cap": [
      "clothing/banana suit",
      "eyes/normal laser eyes",
      "eyes/ghost laser eyes",
      "eyes/monkey laser eyes",
      "eyes/tiger laser eyes",
      "eyes/thermal laser eyes",
      "eyes/frozen laser eyes", 
      "eyes/albino laser eyes",
      "eyes/zombie laser eyes",
      "eyes/lava laser eyes",
      "eyes/alien laser",
      "eyes/slime laser eyes",
    ],
    "head accessory/red crown": [
      "clothing/banana suit",
      "eyes/normal laser eyes",
      "eyes/ghost laser eyes",
      "eyes/monkey laser eyes",
      "eyes/tiger laser eyes",
      "eyes/thermal laser eyes",
      "eyes/frozen laser eyes", 
      "eyes/albino laser eyes",
      "eyes/zombie laser eyes",
      "eyes/lava laser eyes",
      "eyes/alien laser",
      "eyes/slime laser eyes",
    ],
    "head accessory/skater hair": [
      "clothing/banana suit",
      "eyes/normal laser eyes",
      "eyes/ghost laser eyes",
      "eyes/monkey laser eyes",
      "eyes/tiger laser eyes",
      "eyes/thermal laser eyes",
      "eyes/frozen laser eyes", 
      "eyes/albino laser eyes",
      "eyes/zombie laser eyes",
      "eyes/lava laser eyes",
      "eyes/alien laser",
      "eyes/slime laser eyes",
    ],
    "head accessory/skull": [
      "clothing/banana suit",
      "eyes/normal laser eyes",
      "eyes/ghost laser eyes",
      "eyes/monkey laser eyes",
      "eyes/tiger laser eyes",
      "eyes/thermal laser eyes",
      "eyes/frozen laser eyes", 
      "eyes/albino laser eyes",
      "eyes/zombie laser eyes",
      "eyes/lava laser eyes",
      "eyes/alien laser",
      "eyes/slime laser eyes",
    ],
    "head accessory/sombrero": [
      "clothing/banana suit",
      "eyes/normal laser eyes",
      "eyes/ghost laser eyes",
      "eyes/monkey laser eyes",
      "eyes/tiger laser eyes",
      "eyes/thermal laser eyes",
      "eyes/frozen laser eyes", 
      "eyes/albino laser eyes",
      "eyes/zombie laser eyes",
      "eyes/lava laser eyes",
      "eyes/alien laser",
      "eyes/slime laser eyes",
    ],
    "head accessory/watermelon": [
      "clothing/banana suit",
      "eyes/normal laser eyes",
      "eyes/ghost laser eyes",
      "eyes/monkey laser eyes",
      "eyes/tiger laser eyes",
      "eyes/thermal laser eyes",
      "eyes/frozen laser eyes", 
      "eyes/albino laser eyes",
      "eyes/zombie laser eyes",
      "eyes/lava laser eyes",
      "eyes/alien laser",
      "eyes/slime laser eyes",
    ],
    "head accessory/wizard hat": [
      "clothing/banana suit",
      "eyes/normal laser eyes",
      "eyes/ghost laser eyes",
      "eyes/monkey laser eyes",
      "eyes/tiger laser eyes",
      "eyes/thermal laser eyes",
      "eyes/frozen laser eyes", 
      "eyes/albino laser eyes",
      "eyes/zombie laser eyes",
      "eyes/lava laser eyes",
      "eyes/alien laser",
      "eyes/slime laser eyes",
    ],
    // gas mask 
    "face accessory/gas mask": [
      "clothing/banana suit",
      "eyes/normal laser eyes",
      "eyes/ghost laser eyes",
      "eyes/monkey laser eyes",
      "eyes/tiger laser eyes",
      "eyes/thermal laser eyes",
      "eyes/frozen laser eyes", 
      "eyes/albino laser eyes",
      "eyes/zombie laser eyes",
      "eyes/lava laser eyes",
      "eyes/alien laser",
      "eyes/slime laser eyes",
      "eyes/albino electric eyes",
      "eyes/alien electric eyes",
      "eyes/frozen electric eyes",
      "eyes/ghost electric eyes",
      "eyes/lava electric eyes",
      "eyes/monkey electric eyes",
      "eyes/normal electric eyes",
      "eyes/slime electric eyes",
      "eyes/thermal electric eyes",
      "eyes/tiger electric eyes",
      "eyes/zombie electric eyes",
      "mouth/red bandana",
    ],
    }

const dependentTest = {
      "clothing/banana suit" : [
      "head accessory/none",
      ],
      "clothing/koala suit" : [
        "head accessory/none",
      ],
      "clothing/banana hoody" : [
        "head accessory/none",
      ],
  	  "clothing/black closed neck hoody" : [
          "head accessory/none",
        ],
  	  "clothing/black hoody" : [
          "head accessory/none",
        ],
  	  "clothing/green closed neck hoody" : [
          "head accessory/none",
        ],
  	  "clothing/grey hoody" : [
          "head accessory/none",
        ],
  	  "clothing/hood up straps green" : [
          "head accessory/none",
        ],
  	  "clothing/hood up straps" : [
          "head accessory/none",
        ],
  	  "clothing/hood up white banana" : [
          "head accessory/none",
        ],
  	  "clothing/doge suit" : [
          "head accessory/none",
        ],
  	  "clothing/hood 1" : [
          "head accessory/none",
        ],
  	  "clothing/hood up with jacket" : [
          "head accessory/none",
        ],
  	  "clothing/pepe suit" : [
          "head accessory/none",
        ],
  	  "clothing/shark suit" : [
          "head accessory/none",
        ],
  	  "clothing/dragonfruit suit" : [
          "head accessory/none",
        ],
  	  "clothing/hood black" : [
          "head accessory/none",
        ],
  	  "clothing/mech" : [
          "head accessory/none",
        ],
  	  "clothing/penguin suit" : [
          "head accessory/none",
        ],
  	  "clothing/cyberpunk jacket" : [
          "head accessory/none",
        ],
        //laser eyes fix
        "eyes/normal laser eyes" : [
  			"head accessory/none",
  			"face accessory/none",
  		  ],

  		  "eyes/slime laser eyes" : [
  			"head accessory/none",
  			"face accessory/none",
  		  ],

  		"eyes/alien laser" : [
  			"head accessory/none",
  			"face accessory/none",
  		  ],


  		"eyes/ghost laser eyes" : [
  			"head accessory/none",
  			"face accessory/none",
  	  	],
  	  
  		"eyes/monkey laser eyes" : [
  			"head accessory/none",
  			"face accessory/none",
  	  	],
  	  
  		"eyes/tiger laser eyes" : [
  			"head accessory/none",
  			"face accessory/none",
  	  	],
  	  
  		"eyes/thermal laser eyes" : [
  			"head accessory/none",
  			"face accessory/none",
  	  	],
  	  
  		"eyes/frozen laser eyes" : [
  			"head accessory/none",
  			"face accessory/none",
  	  	],
  	  
  		"eyes/albino laser eyes" : [
  			"head accessory/none",
  			"face accessory/none",
  	  	],
  	  
  		"eyes/zombie laser eyes" : [
  			"head accessory/none",
  			"face accessory/none",
  	  	],
  	  
  		"eyes/lava laser eyes" : [
  			"head accessory/none",
  			"face accessory/none",
  	  	],

      // Cyborg eyes ( monkey + normal )
      "eyes/monkey cyborg eyes" : [
        "head accessory/none",
        "face accessory/none",
        ],
      "eyes/normal cyborg eyes" : [
        "head accessory/none",
        "face accessory/none",
        ],
  	  	//special traits front and back clash fix
  	  	// forgot 
  	  	// crow
  	  	"special front/cat" : [
  		  	"special back/none",
  		  	"hand accessory/none",
  	  	],
  		"special front/black cat" : [
  			"special back/none",
  			"hand accessory/none",
  		],
  		"special front/white cat" : [
  			"special back/none",
  			"hand accessory/none",
  		],
  		"special front/angel" : [
  			"special back/none",
  			"hand accessory/none",
  		],
  		"special front/bananilla" : [
  		"special back/none",
  		"hand accessory/none",
  		],
  		"special front/bear" : [
  		"special back/none",
  		"hand accessory/none",
  		],
  		"special front/devil" : [
  		"special back/none",
  		"hand accessory/none",
  		],
  		"special front/duck" : [
  		"special back/none",
  		"hand accessory/none",
  		],
  		"special front/hamster" : [
  		"special back/none",
  		"hand accessory/none",
  		],
  		"special front/penguin" : [
  		"special back/none",
  		"hand accessory/none",
  		],
  		"special front/seal" : [
  		"special back/none",
  		"hand accessory/none",
  		],
  		"special front/turtle" : [
  		"special back/none",
  		"hand accessory/none",
  		],
  		"special front/wizard" : [
  		"special back/none",
  		"hand accessory/none",
  		],
  		"special front/crow" : [
  		"special back/none",
  		"hand accessory/none",
  		],
  		//special traits special back and back clash fix
  		// forgot gold cane
  		// misspelling scythe and scythe 2
  		"special back/shield" : [
  		"special front/none",
  		"hand accessory/none",
  		],
  		"special back/gold cane" : [
  		"special front/none",
  		"hand accessory/none",
  		],
  		"special back/btc staff" : [
  		"special front/none",
  		"hand accessory/none",
  		],
  		"special back/bazooka" : [
  		"special front/none",
  		"hand accessory/none",
  		],
  		"special back/bat wings" : [
  		"special front/none",
  		"hand accessory/none",
  		],
  		"special back/feather wings" : [
  		"special front/none",
  		"hand accessory/none",
  		],
  		"special back/druid staff" : [
  		"special front/none",
  		"hand accessory/none",
  		],
  		"special back/lightsaber" : [
  		"special front/none",
  		"hand accessory/none",
  		],
  		"special back/scythe" : [
  		"special front/none",
  		"hand accessory/none",
  		],
  		"special back/sword" : [
  		"special front/none",
  		"hand accessory/none",
  		],
  		"special back/axe" : [
  		"special front/none",
  		"hand accessory/none",
  		],
  		"special back/rifle" : [
  		"special front/none",
  		"hand accessory/none",
  		],
  		"special back/scythe 2" : [
  		"special front/none",
  		"hand accessory/none",
  		],
      // Mouth issues
      "mouth/blowing tongue mouth": [
        "clothing/none", 
      ],
      "mouth/bubble gum mouth": [
        "clothing/none", 
      ],
      "mouth/cigarette mouth": [
        "clothing/none", 
      ],
      "mouth/golden beard mouth": [
        "clothing/none", 
      ],
      "mouth/joint mouth": [
        "clothing/none", 
      ],
      "mouth/pizza mouth": [
        "clothing/none", 
      ],
      "mouth/rainbow mouth": [
        "clothing/none", 
      ],
      "mouth/white beard mouth": [
        "clothing/none", 
      ],
      // gas mask 
    "face accessory/gas mask": [
      "clothing/none",
      "mouth/none",
      "head accessory/none",
    ],
    "face accessory/happy led mask": [
      // "clothing/none",
      "mouth/none",
      "head accessory/none",
    ],
    "face accessory/led mask": [
      // "clothing/none",
      "mouth/none",
      "head accessory/none",
    ],
    "face accessory/skull mask": [
      // "clothing/none",
      "mouth/none",
      // "head accessory/none",
    ],
    // red bandana and blue bandana clash with face accessory
    "mouth/red bandana" : [
      "face accessory/none",
    ],
    "mouth/blue bandana" : [
      "face accessory/none",
    ],

    // long hair (blonde hair + brunette hair)
    "head accessory/blonde hair" : [
      "face accessory/none",
    ],
    "head accessory/brunette hair" : [
      "face accessory/none",
    ],

    }

const layerConfigurations = [
// body need to match with eyes , hand accessory
// There are 12 body types
// albino , alien , frozen , ghost , gorilla , lava 
// monkey , normal , slime , thermal , tiger , zombie

  // albino  
  {
    growEditionSizeTo: 50,
    layersOrder: albinoBody,
    layerItemsMaxRepeatedTraits: [
      // { name: "Background/BG 7", layerItemMaxRepeatedTrait: 20 },
    ],
    incompatibleTraits: incompatibleTest,
    dependentTraits: dependentTest,
  },
  // End of albino
  // alien
  {
    growEditionSizeTo: 100,
    layersOrder: alienBody,
    layerItemsMaxRepeatedTraits: [
      // { name: "Background/BG 7", layerItemMaxRepeatedTrait: 20 },
    ],
    incompatibleTraits: incompatibleTest,
    dependentTraits: dependentTest,
  },
  // End of alien
  // frozen 
  {
    growEditionSizeTo: 150,
    layersOrder: frozenBody,
    layerItemsMaxRepeatedTraits: [
      // { name: "Background/BG 7", layerItemMaxRepeatedTrait: 20 },
    ],
    incompatibleTraits: incompatibleTest,
    dependentTraits: dependentTest,
  },
  // End of frozen
  // ghost 
  {
    growEditionSizeTo: 200,
    layersOrder: ghostBody,
    layerItemsMaxRepeatedTraits: [
      // { name: "Background/BG 7", layerItemMaxRepeatedTrait: 20 },
    ],
    incompatibleTraits: incompatibleTest,
    dependentTraits: dependentTest,
  },
  // End of ghost 
  // gorilla 
  {
    growEditionSizeTo: 250,
    layersOrder: gorillaBody,
    layerItemsMaxRepeatedTraits: [
      // { name: "Background/BG 7", layerItemMaxRepeatedTrait: 20 },
    ],
    incompatibleTraits: incompatibleTest,
    dependentTraits: dependentTest,
  },
  // End of gorilla 
  // lava 
  {
    growEditionSizeTo: 300,
    layersOrder: lavaBody,
    layerItemsMaxRepeatedTraits: [
      // { name: "Background/BG 7", layerItemMaxRepeatedTrait: 20 },
    ],
    incompatibleTraits: incompatibleTest,
    dependentTraits: dependentTest,
  },
  // End of lava 
  // monkey 
  {
    growEditionSizeTo: 350,
    layersOrder: monkeyBody,
    layerItemsMaxRepeatedTraits: [
      // { name: "Background/BG 7", layerItemMaxRepeatedTrait: 20 },
    ],
    incompatibleTraits: incompatibleTest,
    dependentTraits: dependentTest,
  },
  // End of monkey 
  // normal 
  {
    growEditionSizeTo: 400,
    layersOrder: normalBody,
    layerItemsMaxRepeatedTraits: [
      // { name: "Background/BG 7", layerItemMaxRepeatedTrait: 20 },
    ],
    incompatibleTraits: incompatibleTest,
    dependentTraits: dependentTest,
  },
  // End of normal
  // slime 
  {
    growEditionSizeTo: 450,
    layersOrder: slimeBody,
    layerItemsMaxRepeatedTraits: [
      // { name: "Background/BG 7", layerItemMaxRepeatedTrait: 20 },
    ],
    incompatibleTraits: incompatibleTest,
    dependentTraits: dependentTest,
  },
  // End of slime 
  // thermal 
  {
    growEditionSizeTo: 500,
    layersOrder: thermalBody,
    layerItemsMaxRepeatedTraits: [
      // { name: "Background/BG 7", layerItemMaxRepeatedTrait: 20 },
    ],
    incompatibleTraits: incompatibleTest,
    dependentTraits: dependentTest,
  },
  // End of thermal
  // tiger 
  {
    growEditionSizeTo: 550,
    layersOrder: tigerBody,
    layerItemsMaxRepeatedTraits: [
      // { name: "Background/BG 7", layerItemMaxRepeatedTrait: 20 },
    ],
    incompatibleTraits: incompatibleTest,
    dependentTraits: dependentTest,
  },
  // End of tiger 
  // zombie
  {
    growEditionSizeTo: 600,
    layersOrder: zombieBody,
    layerItemsMaxRepeatedTraits: [
      // { name: "Background/BG 7", layerItemMaxRepeatedTrait: 20 },
    ],
    incompatibleTraits: incompatibleTest,
    dependentTraits: dependentTest,
  },
  // End of zombie 

 // End of layerConfigurations 
];

/* Example of configuration settings
const layerConfigurations = [
  {
    growEditionSizeTo: 2,
    maxRepeatedTraits: 1,
    layersOrder: [
      { name: "Background" },
      { name: "Eyeball" },
      { name: "Eye color", maxRepeatedTrait: 2 },
      { name: "Iris" },
      { name: "Shine", layerItemsMaxRepeatedTrait: 4 },
      { name: "Bottom lid", maxRepeatedTrait: 3 },
      { name: "Top lid" },
    ],
    layerItemsMaxRepeatedTraits: [
      { name: "Background/Black", layerItemMaxRepeatedTrait: 4 },
      { name: "Eyeball/Red", layerItemMaxRepeatedTrait: 5 }
    ],
    incompatibleTraits: {
      "Eye color/Cyan": [
        "Eyeball/Red",
      ],
      "Iris/Large": [
        "Bottom lid/High",
        "Top lid/High"
      ],
    },
    dependentTraits: {
      "Eye color/Cyan": [
        "Eyeball/White",
      ],
      "Background/Blue": [
        "Eyeball/Red",
        "Top lid/low"
      ],
    }
  },
];
*/

const shuffleLayerConfigurations = false;

const debugLogs = false;

const format = {
  width: 64,
  height: 64,
  smoothing: false,
};

const gif = {
  export: false,
  repeat: 0,
  quality: 100,
  delay: 500,
};

const text = {
  only: false,
  color: "#ffffff",
  size: 20,
  xGap: 40,
  yGap: 40,
  align: "left",
  baseline: "top",
  weight: "regular",
  family: "Courier",
  spacer: " => ",
};

const pixelFormat = {
  ratio: 2 / 128,
};

const background = {
  generate: true,
  brightness: "80%",
  static: false,
  default: "#000000",
};

// These are additional items that will be added to each NFT. You can remove them or add new ones as well if needed.
// Uncomment the lines if you would like to use these and update the details.
const extraMetadata = {
  //creator: "NFT_CREATOR_HERE", // Add the creator of the NFT collection here. Ex. The Peanut Gallery And Co
  //external_url: "YOUR_WEBSITE_URL_HERE"  // Add your website URL here. This will be added to each of your NFTs. Ex. https://thepeanutgalleryandco.co.za/
};

const rarityDelimiter = "#";

const uniqueDnaTorrance = 100000;

const preview = {
  thumbPerRow: 5,
  thumbWidth: 50,
  imageRatio: format.height / format.width,
  imageName: "preview.png",
};

const preview_gif = {
  numberOfImages: 5,
  order: "ASC", // ASC, DESC, MIXED
  repeat: 0,
  quality: 100,
  delay: 500,
  imageName: "preview.gif",
};

module.exports = {
  format,
  background,
  uniqueDnaTorrance,
  layerConfigurations,
  rarityDelimiter,
  preview,
  shuffleLayerConfigurations,
  debugLogs,
  extraMetadata,
  pixelFormat,
  text,
  network,
  solanaMetadata,
  gif,
  preview_gif,
};
