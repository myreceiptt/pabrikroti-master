(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/src/config/contracts/accountFactories.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
// /src/config/contracts/accountFactories.ts
// List factory address contract - tambahkan sesuai kebutuhan dan akan dipilih satu di index.ts
__turbopack_context__.s({
    "factoryNOTA": (()=>factoryNOTA),
    "factoryVoyage": (()=>factoryVoyage)
});
const factoryNOTA = "0x186b1740d24bc028D220838796441441dc444f9A"; // Prof. NOTA Inc.
const factoryVoyage = "0x186b1740d24bc028D220838796441441dc444f9A"; // BON VOYAGE
 // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // //
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/config/client.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
// /src/config/client.ts
// External libraries
__turbopack_context__.s({
    "client": (()=>client)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$client$2f$client$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/thirdweb/dist/esm/client/client.js [app-client] (ecmascript)");
;
// Replace this with your client ID string
// refer to https://portal.thirdweb.com/typescript/v5/client on how to get a client ID
const clientId = ("TURBOPACK compile-time value", "6f9a008ecf32876f31a576c03b533ee0");
if ("TURBOPACK compile-time falsy", 0) {
    "TURBOPACK unreachable";
}
const client = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$client$2f$client$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createThirdwebClient"])({
    clientId: clientId
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/config/rantais.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
// /src/config/rantais.ts
// External libraries
__turbopack_context__.s({
    "avalancheC": (()=>avalancheC),
    "baseMainnet": (()=>baseMainnet),
    "baseSepolia": (()=>baseSepolia),
    "bobBitcoin": (()=>bobBitcoin),
    "chain": (()=>chain),
    "chainNames": (()=>chainNames),
    "chains": (()=>chains),
    "ethereumEvm": (()=>ethereumEvm),
    "humanityTest": (()=>humanityTest),
    "inkChain": (()=>inkChain),
    "mintChain": (()=>mintChain),
    "modeNetwork": (()=>modeNetwork),
    "monadTestnet": (()=>monadTestnet),
    "opMainnet": (()=>opMainnet),
    "shapeNetwork": (()=>shapeNetwork),
    "soneiumMainnet": (()=>soneiumMainnet),
    "superseedChain": (()=>superseedChain),
    "unichainBlock": (()=>unichainBlock),
    "worldChain": (()=>worldChain),
    "zoraMainnet": (()=>zoraMainnet)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$chains$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/thirdweb/dist/esm/chains/utils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$chains$2f$chain$2d$definitions$2f$avalanche$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/thirdweb/dist/esm/chains/chain-definitions/avalanche.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$chains$2f$chain$2d$definitions$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/thirdweb/dist/esm/chains/chain-definitions/base.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$chains$2f$chain$2d$definitions$2f$base$2d$sepolia$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/thirdweb/dist/esm/chains/chain-definitions/base-sepolia.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$chains$2f$chain$2d$definitions$2f$ethereum$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/thirdweb/dist/esm/chains/chain-definitions/ethereum.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$chains$2f$chain$2d$definitions$2f$mode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/thirdweb/dist/esm/chains/chain-definitions/mode.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$chains$2f$chain$2d$definitions$2f$optimism$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/thirdweb/dist/esm/chains/chain-definitions/optimism.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$chains$2f$chain$2d$definitions$2f$zora$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/thirdweb/dist/esm/chains/chain-definitions/zora.js [app-client] (ecmascript)");
;
;
const avalancheC = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$chains$2f$chain$2d$definitions$2f$avalanche$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["avalanche"]; // Avalanche C-Chain
const baseMainnet = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$chains$2f$chain$2d$definitions$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["base"]; // Base Mainnet
const baseSepolia = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$chains$2f$chain$2d$definitions$2f$base$2d$sepolia$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["baseSepolia"]; // Base Sepolia Testnet
const bobBitcoin = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$chains$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defineChain"])(60808); // BOB (Buitl On Bitcoin)
const ethereumEvm = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$chains$2f$chain$2d$definitions$2f$ethereum$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ethereum"]; // Ethereum Mainnet
const humanityTest = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$chains$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defineChain"])(1942999413); // Humanity Testnet
const inkChain = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$chains$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defineChain"])(57073); // Ink On Chain
const mintChain = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$chains$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defineChain"])(185); // Mint Blockchain
const modeNetwork = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$chains$2f$chain$2d$definitions$2f$mode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mode"]; // Mode Network
const monadTestnet = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$chains$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defineChain"])(10143); // Monad Testnet
const opMainnet = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$chains$2f$chain$2d$definitions$2f$optimism$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["optimism"]; // OP Mainnet
const shapeNetwork = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$chains$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defineChain"])(360); // Shape Network
const soneiumMainnet = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$chains$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defineChain"])(1868); // Soneium Mainnet
const superseedChain = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$chains$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defineChain"])(5330); // Superseed Blockchain
const unichainBlock = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$chains$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defineChain"])(130); // Unichain Blockchain
const worldChain = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$chains$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defineChain"])(480); // World Chain
const zoraMainnet = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$chains$2f$chain$2d$definitions$2f$zora$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["zora"]; // Zora Mainnet
const chain = baseMainnet; // Default Chain
const chains = [
    baseMainnet,
    baseSepolia,
    monadTestnet,
    opMainnet,
    shapeNetwork
]; // Supported Chains
const chainNames = {
    [avalancheC.id]: "Avalanche C-Chain",
    [baseMainnet.id]: "Base Mainnet",
    [baseSepolia.id]: "Base Sepolia Testnet",
    [bobBitcoin.id]: "BOB (Built On Bitcoin)",
    [ethereumEvm.id]: "Ethereum Mainnet",
    [humanityTest.id]: "Humanity Testnet",
    [inkChain.id]: "Ink On Chain",
    [mintChain.id]: "Mint Blockchain",
    [modeNetwork.id]: "Mode Network",
    [monadTestnet.id]: "Monad Testnet",
    [opMainnet.id]: "OP Mainnet",
    [shapeNetwork.id]: "Shape Network",
    [soneiumMainnet.id]: "Soneium Mainnet",
    [superseedChain.id]: "Superseed Blockchain",
    [unichainBlock.id]: "Unichain Blockchain",
    [worldChain.id]: "World Chain",
    [zoraMainnet.id]: "Zora Mainnet"
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/config/contracts/tekekContracts.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
// /src/config/contracts/tekekContracts.ts
// External libraries
__turbopack_context__.s({
    "erc1155MbokSri2025": (()=>erc1155MbokSri2025),
    "erc1155MeMoRa1": (()=>erc1155MeMoRa1),
    "erc1155TryError": (()=>erc1155TryError),
    "erc721Bananow": (()=>erc721Bananow)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$contract$2f$contract$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/thirdweb/dist/esm/contract/contract.js [app-client] (ecmascript)");
// Blockchain configurations
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/config/client.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$rantais$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/config/rantais.ts [app-client] (ecmascript)");
;
;
;
const erc721Bananow = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$contract$2f$contract$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getContract"])({
    address: "0xfd039aC57cc8E646802dBA4b7Cf6bc561E13A09A",
    chain: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$rantais$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["baseMainnet"],
    client: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["client"]
});
const erc1155MeMoRa1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$contract$2f$contract$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getContract"])({
    address: "0x1925B991C5e2eC45BA1f34786BAd405d58202140",
    chain: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$rantais$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["baseMainnet"],
    client: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["client"]
});
const erc1155MbokSri2025 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$contract$2f$contract$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getContract"])({
    address: "0x6ddAcee48391d604a19e29aE545EE4A17B02ce7F",
    chain: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$rantais$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["baseMainnet"],
    client: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["client"]
});
const erc1155TryError = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$contract$2f$contract$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getContract"])({
    address: "0xdf9F3A962875cAAAC9f62d6Cc505B9b61E06c34c",
    chain: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$rantais$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["baseSepolia"],
    client: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["client"]
}); // NFT contracts BOB (Buitl On Bitcoin)
 // ...
 // NFT contracts Custom Chain
 // ...
 // NFT contracts Ethereum Mainnet
 // ...
 // NFT contracts Humanity Testnet
 // ...
 // NFT contracts Ink On Chain
 // ...
 // NFT contracts Mint Blockchain
 // ...
 // NFT contracts Mode Network
 // ...
 // NFT contracts Monad Testnet
 // ...
 // NFT contracts OP Mainnet
 // ...
 // NFT contracts on Shape Network
 // ...
 // NFT contracts on Soneium Mainnet
 // ...
 // NFT contracts on Superseed Blockchain
 // ...
 // NFT contracts on Unichain Blockchain
 // ...
 // NFT contracts on World Chain
 // ...
 // NFT contracts Zora Mainnet
 // ...
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/config/contracts/tekeks.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
// /src/config/contracts/tekeks.ts
// Blockchain configurations
__turbopack_context__.s({
    "tekeks": (()=>tekeks)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$contracts$2f$tekekContracts$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/config/contracts/tekekContracts.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$rantais$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/config/rantais.ts [app-client] (ecmascript)");
;
;
const tekeks = {
    [__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$rantais$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["baseMainnet"].id]: [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$contracts$2f$tekekContracts$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["erc1155MbokSri2025"].address
    ]
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/config/contracts/tekeksMeMoRa.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
// /src/config/contracts/tekeksMeMoRa.ts
// Blockchain configurations
__turbopack_context__.s({
    "tekeksMeMoRa": (()=>tekeksMeMoRa)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$contracts$2f$tekekContracts$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/config/contracts/tekekContracts.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$rantais$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/config/rantais.ts [app-client] (ecmascript)");
;
;
const tekeksMeMoRa = {
    [__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$rantais$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["baseMainnet"].id]: [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$contracts$2f$tekekContracts$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["erc1155MeMoRa1"].address
    ]
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/config/contracts/tekeksPabrikRoti.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
// /src/config/contracts/tekeksPabrikRoti.ts
// Blockchain configurations
__turbopack_context__.s({
    "tekeksPabrikRoti": (()=>tekeksPabrikRoti)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$contracts$2f$tekekContracts$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/config/contracts/tekekContracts.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$rantais$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/config/rantais.ts [app-client] (ecmascript)");
;
;
const tekeksPabrikRoti = {
    [__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$rantais$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["baseMainnet"].id]: [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$contracts$2f$tekekContracts$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["erc721Bananow"].address
    ],
    [__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$rantais$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["baseSepolia"].id]: [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$contracts$2f$tekekContracts$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["erc1155TryError"].address
    ]
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/config/contracts/tokekContracts.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
// /src/config/contracts/tokekContracts.ts
// External libraries
__turbopack_context__.s({
    "bonDoshBy": (()=>bonDoshBy),
    "bonDoshIcon": (()=>bonDoshIcon),
    "bonDoshLink": (()=>bonDoshLink),
    "bonDoshName": (()=>bonDoshName),
    "bonDoshSymbol": (()=>bonDoshSymbol),
    "erc20BONBase": (()=>erc20BONBase),
    "erc20BONBaseSepolia": (()=>erc20BONBaseSepolia),
    "erc20OiOiBase": (()=>erc20OiOiBase),
    "erc20OiOiBaseSepolia": (()=>erc20OiOiBaseSepolia),
    "erc20OiOiMonadTestnet": (()=>erc20OiOiMonadTestnet),
    "erc20OiOiOpMainnet": (()=>erc20OiOiOpMainnet),
    "erc20OiOiShapeNetwork": (()=>erc20OiOiShapeNetwork),
    "erc20USDCBase": (()=>erc20USDCBase),
    "erc20USDCBaseSepolia": (()=>erc20USDCBaseSepolia),
    "oioiTokenBy": (()=>oioiTokenBy),
    "oioiTokenIcon": (()=>oioiTokenIcon),
    "oioiTokenLink": (()=>oioiTokenLink),
    "oioiTokenName": (()=>oioiTokenName),
    "oioiTokenSymbol": (()=>oioiTokenSymbol),
    "usdCoinIcon": (()=>usdCoinIcon),
    "usdCoinName": (()=>usdCoinName),
    "usdCoinSymbol": (()=>usdCoinSymbol)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$contract$2f$contract$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/thirdweb/dist/esm/contract/contract.js [app-client] (ecmascript)");
// Blockchain configurations
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/config/client.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$rantais$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/config/rantais.ts [app-client] (ecmascript)");
;
;
;
const erc20USDCBase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$contract$2f$contract$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getContract"])({
    address: "0x833589fcd6edb6e08f4c7c32d4f71b54bda02913",
    chain: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$rantais$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["baseMainnet"],
    client: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["client"]
});
const erc20OiOiBase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$contract$2f$contract$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getContract"])({
    address: "0xba0032620d88D9b16752CbDE75593c080C3d38de",
    chain: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$rantais$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["baseMainnet"],
    client: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["client"]
});
const erc20BONBase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$contract$2f$contract$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getContract"])({
    address: "0x237b1188F8BAC61f2E4e0EdF2D933F827262157C",
    chain: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$rantais$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["baseMainnet"],
    client: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["client"]
});
const erc20USDCBaseSepolia = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$contract$2f$contract$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getContract"])({
    address: "0x5dEaC602762362FE5f135FA5904351916053cF70",
    chain: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$rantais$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["baseSepolia"],
    client: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["client"]
});
const erc20OiOiBaseSepolia = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$contract$2f$contract$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getContract"])({
    address: "0xcB2208E9Fb77591D3A0688C4459d976b1f16Ab53",
    chain: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$rantais$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["baseSepolia"],
    client: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["client"]
});
const erc20BONBaseSepolia = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$contract$2f$contract$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getContract"])({
    address: "0x204717A95a9362660dCF026cdE4cEB1586FfD576",
    chain: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$rantais$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["baseSepolia"],
    client: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["client"]
});
const erc20OiOiMonadTestnet = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$contract$2f$contract$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getContract"])({
    address: "0x8d7402Ae89CdF92D3477d9D63517F5e609caBcb2",
    chain: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$rantais$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["monadTestnet"],
    client: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["client"]
});
const erc20OiOiOpMainnet = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$contract$2f$contract$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getContract"])({
    address: "0x4309d86dceEAd544645D7245d8deE231B98A0d80",
    chain: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$rantais$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["opMainnet"],
    client: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["client"]
});
const erc20OiOiShapeNetwork = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$contract$2f$contract$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getContract"])({
    address: "0x6d6e5b8a5dBeCc6758553FC636Bd0aE65282549f",
    chain: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$rantais$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["shapeNetwork"],
    client: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["client"]
});
const usdCoinName = "USD Coin"; // USD Coin
const usdCoinSymbol = "USDC"; // USD Coin
const usdCoinIcon = "/erc20-icons/usdc.png"; // USD Coin
const oioiTokenName = "OiOi Token"; // OiOi Token
const oioiTokenSymbol = "OiOi"; // OiOi Token
const oioiTokenIcon = "/erc20-icons/oioi.png"; // OiOi Token
const oioiTokenBy = "Prof. NOTA Inc."; // OiOi Token
const oioiTokenLink = "https://nota.endhonesa.com/"; // OiOi Token
const bonDoshName = "BON Dosh"; // BON Voyage
const bonDoshSymbol = "BON"; // BON Voyage
const bonDoshIcon = "/erc20-icons/bon.png"; // BON Voyage
const bonDoshBy = "Voyage.Co.Id"; // BON Voyage
const bonDoshLink = "https://voyage.endhonesa.com/"; // OiOi Token
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/config/contracts/tokeks.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
// /src/config/contracts/tokeks.ts
// Blockchain configurations
__turbopack_context__.s({
    "displayedTokeks": (()=>displayedTokeks),
    "erc20sLaunched": (()=>erc20sLaunched),
    "tokeks": (()=>tokeks)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$contracts$2f$tokekContracts$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/config/contracts/tokekContracts.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$rantais$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/config/rantais.ts [app-client] (ecmascript)");
;
;
const tokeks = {
    [__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$rantais$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["baseMainnet"].id]: [
        {
            address: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$contracts$2f$tokekContracts$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["erc20OiOiBase"].address,
            name: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$contracts$2f$tokekContracts$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["oioiTokenName"],
            symbol: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$contracts$2f$tokekContracts$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["oioiTokenSymbol"],
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$contracts$2f$tokekContracts$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["oioiTokenIcon"]
        }
    ],
    [__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$rantais$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["baseSepolia"].id]: [
        {
            address: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$contracts$2f$tokekContracts$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["erc20OiOiBaseSepolia"].address,
            name: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$contracts$2f$tokekContracts$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["oioiTokenName"],
            symbol: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$contracts$2f$tokekContracts$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["oioiTokenSymbol"],
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$contracts$2f$tokekContracts$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["oioiTokenIcon"]
        }
    ],
    [__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$rantais$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["monadTestnet"].id]: [
        {
            address: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$contracts$2f$tokekContracts$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["erc20OiOiMonadTestnet"].address,
            name: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$contracts$2f$tokekContracts$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["oioiTokenName"],
            symbol: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$contracts$2f$tokekContracts$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["oioiTokenSymbol"],
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$contracts$2f$tokekContracts$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["oioiTokenIcon"]
        }
    ],
    [__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$rantais$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["opMainnet"].id]: [
        {
            address: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$contracts$2f$tokekContracts$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["erc20OiOiOpMainnet"].address,
            name: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$contracts$2f$tokekContracts$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["oioiTokenName"],
            symbol: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$contracts$2f$tokekContracts$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["oioiTokenSymbol"],
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$contracts$2f$tokekContracts$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["oioiTokenIcon"]
        }
    ],
    [__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$rantais$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["shapeNetwork"].id]: [
        {
            address: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$contracts$2f$tokekContracts$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["erc20OiOiShapeNetwork"].address,
            name: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$contracts$2f$tokekContracts$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["oioiTokenName"],
            symbol: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$contracts$2f$tokekContracts$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["oioiTokenSymbol"],
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$contracts$2f$tokekContracts$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["oioiTokenIcon"]
        }
    ]
};
const displayedTokeks = {
    [__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$rantais$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["baseMainnet"].id]: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$contracts$2f$tokekContracts$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["erc20OiOiBase"].address,
    [__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$rantais$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["baseSepolia"].id]: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$contracts$2f$tokekContracts$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["erc20OiOiBaseSepolia"].address,
    [__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$rantais$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["monadTestnet"].id]: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$contracts$2f$tokekContracts$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["erc20OiOiMonadTestnet"].address,
    [__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$rantais$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["opMainnet"].id]: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$contracts$2f$tokekContracts$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["erc20OiOiOpMainnet"].address,
    [__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$rantais$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["shapeNetwork"].id]: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$contracts$2f$tokekContracts$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["erc20OiOiShapeNetwork"].address
};
const erc20sLaunched = [
    {
        address: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$contracts$2f$tokekContracts$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["erc20OiOiBase"].address,
        name: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$contracts$2f$tokekContracts$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["oioiTokenName"],
        symbol: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$contracts$2f$tokekContracts$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["oioiTokenSymbol"],
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$contracts$2f$tokekContracts$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["oioiTokenIcon"],
        by: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$contracts$2f$tokekContracts$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["oioiTokenBy"],
        link: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$contracts$2f$tokekContracts$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["oioiTokenLink"],
        chain: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$contracts$2f$tokekContracts$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["erc20OiOiBase"].chain,
        client: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$contracts$2f$tokekContracts$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["erc20OiOiBase"].client
    },
    {
        address: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$contracts$2f$tokekContracts$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["erc20OiOiBaseSepolia"].address,
        name: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$contracts$2f$tokekContracts$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["oioiTokenName"],
        symbol: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$contracts$2f$tokekContracts$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["oioiTokenSymbol"],
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$contracts$2f$tokekContracts$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["oioiTokenIcon"],
        by: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$contracts$2f$tokekContracts$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["oioiTokenBy"],
        link: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$contracts$2f$tokekContracts$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["oioiTokenLink"],
        chain: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$contracts$2f$tokekContracts$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["erc20OiOiBaseSepolia"].chain,
        client: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$contracts$2f$tokekContracts$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["erc20OiOiBaseSepolia"].client
    },
    {
        address: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$contracts$2f$tokekContracts$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["erc20OiOiMonadTestnet"].address,
        name: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$contracts$2f$tokekContracts$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["oioiTokenName"],
        symbol: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$contracts$2f$tokekContracts$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["oioiTokenSymbol"],
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$contracts$2f$tokekContracts$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["oioiTokenIcon"],
        by: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$contracts$2f$tokekContracts$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["oioiTokenBy"],
        link: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$contracts$2f$tokekContracts$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["oioiTokenLink"],
        chain: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$contracts$2f$tokekContracts$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["erc20OiOiMonadTestnet"].chain,
        client: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$contracts$2f$tokekContracts$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["erc20OiOiMonadTestnet"].client
    },
    {
        address: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$contracts$2f$tokekContracts$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["erc20OiOiOpMainnet"].address,
        name: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$contracts$2f$tokekContracts$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["oioiTokenName"],
        symbol: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$contracts$2f$tokekContracts$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["oioiTokenSymbol"],
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$contracts$2f$tokekContracts$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["oioiTokenIcon"],
        by: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$contracts$2f$tokekContracts$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["oioiTokenBy"],
        link: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$contracts$2f$tokekContracts$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["oioiTokenLink"],
        chain: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$contracts$2f$tokekContracts$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["erc20OiOiOpMainnet"].chain,
        client: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$contracts$2f$tokekContracts$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["erc20OiOiOpMainnet"].client
    },
    {
        address: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$contracts$2f$tokekContracts$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["erc20OiOiShapeNetwork"].address,
        name: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$contracts$2f$tokekContracts$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["oioiTokenName"],
        symbol: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$contracts$2f$tokekContracts$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["oioiTokenSymbol"],
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$contracts$2f$tokekContracts$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["oioiTokenIcon"],
        by: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$contracts$2f$tokekContracts$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["oioiTokenBy"],
        link: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$contracts$2f$tokekContracts$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["oioiTokenLink"],
        chain: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$contracts$2f$tokekContracts$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["erc20OiOiShapeNetwork"].chain,
        client: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$contracts$2f$tokekContracts$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["erc20OiOiShapeNetwork"].client
    }
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/config/contracts/tokeksMeMoRa.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
// /src/config/contracts/tokeksMeMoRa.ts
// Blockchain configurations
__turbopack_context__.s({
    "displayedTokeksMeMoRa": (()=>displayedTokeksMeMoRa),
    "memoraErc20sLaunched": (()=>memoraErc20sLaunched),
    "tokeksMeMoRa": (()=>tokeksMeMoRa)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$contracts$2f$tokekContracts$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/config/contracts/tokekContracts.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$rantais$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/config/rantais.ts [app-client] (ecmascript)");
;
;
const tokeksMeMoRa = {
    [__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$rantais$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["baseMainnet"].id]: [
        {
            address: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$contracts$2f$tokekContracts$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["erc20BONBase"].address,
            name: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$contracts$2f$tokekContracts$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["bonDoshName"],
            symbol: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$contracts$2f$tokekContracts$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["bonDoshSymbol"],
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$contracts$2f$tokekContracts$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["bonDoshIcon"]
        },
        {
            address: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$contracts$2f$tokekContracts$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["erc20OiOiBase"].address,
            name: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$contracts$2f$tokekContracts$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["oioiTokenName"],
            symbol: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$contracts$2f$tokekContracts$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["oioiTokenSymbol"],
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$contracts$2f$tokekContracts$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["oioiTokenIcon"]
        },
        {
            address: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$contracts$2f$tokekContracts$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["erc20USDCBase"].address,
            name: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$contracts$2f$tokekContracts$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usdCoinName"],
            symbol: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$contracts$2f$tokekContracts$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usdCoinSymbol"],
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$contracts$2f$tokekContracts$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usdCoinIcon"]
        }
    ],
    [__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$rantais$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["baseSepolia"].id]: [
        {
            address: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$contracts$2f$tokekContracts$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["erc20BONBaseSepolia"].address,
            name: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$contracts$2f$tokekContracts$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["bonDoshName"],
            symbol: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$contracts$2f$tokekContracts$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["bonDoshSymbol"],
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$contracts$2f$tokekContracts$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["bonDoshIcon"]
        },
        {
            address: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$contracts$2f$tokekContracts$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["erc20OiOiBaseSepolia"].address,
            name: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$contracts$2f$tokekContracts$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["oioiTokenName"],
            symbol: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$contracts$2f$tokekContracts$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["oioiTokenSymbol"],
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$contracts$2f$tokekContracts$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["oioiTokenIcon"]
        },
        {
            address: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$contracts$2f$tokekContracts$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["erc20USDCBaseSepolia"].address,
            name: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$contracts$2f$tokekContracts$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usdCoinName"],
            symbol: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$contracts$2f$tokekContracts$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usdCoinSymbol"],
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$contracts$2f$tokekContracts$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usdCoinIcon"]
        }
    ],
    [__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$rantais$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["monadTestnet"].id]: [
        {
            address: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$contracts$2f$tokekContracts$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["erc20OiOiMonadTestnet"].address,
            name: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$contracts$2f$tokekContracts$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["oioiTokenName"],
            symbol: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$contracts$2f$tokekContracts$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["oioiTokenSymbol"],
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$contracts$2f$tokekContracts$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["oioiTokenIcon"]
        }
    ],
    [__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$rantais$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["opMainnet"].id]: [
        {
            address: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$contracts$2f$tokekContracts$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["erc20OiOiOpMainnet"].address,
            name: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$contracts$2f$tokekContracts$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["oioiTokenName"],
            symbol: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$contracts$2f$tokekContracts$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["oioiTokenSymbol"],
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$contracts$2f$tokekContracts$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["oioiTokenIcon"]
        }
    ],
    [__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$rantais$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["shapeNetwork"].id]: [
        {
            address: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$contracts$2f$tokekContracts$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["erc20OiOiShapeNetwork"].address,
            name: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$contracts$2f$tokekContracts$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["oioiTokenName"],
            symbol: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$contracts$2f$tokekContracts$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["oioiTokenSymbol"],
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$contracts$2f$tokekContracts$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["oioiTokenIcon"]
        }
    ]
};
const displayedTokeksMeMoRa = {
    [__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$rantais$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["baseMainnet"].id]: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$contracts$2f$tokekContracts$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["erc20BONBase"].address,
    [__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$rantais$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["baseSepolia"].id]: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$contracts$2f$tokekContracts$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["erc20BONBaseSepolia"].address,
    [__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$rantais$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["monadTestnet"].id]: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$contracts$2f$tokekContracts$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["erc20OiOiMonadTestnet"].address,
    [__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$rantais$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["opMainnet"].id]: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$contracts$2f$tokekContracts$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["erc20OiOiOpMainnet"].address,
    [__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$rantais$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["shapeNetwork"].id]: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$contracts$2f$tokekContracts$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["erc20OiOiShapeNetwork"].address
};
const memoraErc20sLaunched = [
    {
        address: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$contracts$2f$tokekContracts$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["erc20BONBase"].address,
        name: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$contracts$2f$tokekContracts$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["bonDoshName"],
        symbol: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$contracts$2f$tokekContracts$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["bonDoshSymbol"],
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$contracts$2f$tokekContracts$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["bonDoshIcon"],
        by: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$contracts$2f$tokekContracts$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["bonDoshBy"],
        link: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$contracts$2f$tokekContracts$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["bonDoshLink"],
        chain: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$contracts$2f$tokekContracts$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["erc20BONBase"].chain,
        client: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$contracts$2f$tokekContracts$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["erc20BONBase"].client
    },
    {
        address: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$contracts$2f$tokekContracts$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["erc20BONBaseSepolia"].address,
        name: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$contracts$2f$tokekContracts$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["bonDoshName"],
        symbol: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$contracts$2f$tokekContracts$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["bonDoshSymbol"],
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$contracts$2f$tokekContracts$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["bonDoshIcon"],
        by: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$contracts$2f$tokekContracts$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["bonDoshBy"],
        link: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$contracts$2f$tokekContracts$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["bonDoshLink"],
        chain: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$contracts$2f$tokekContracts$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["erc20BONBaseSepolia"].chain,
        client: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$contracts$2f$tokekContracts$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["erc20BONBaseSepolia"].client
    }
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/config/contracts/tokeksPabrikRoti.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
// /src/config/contracts/tokeksPabrikRoti.ts
// Blockchain configurations
__turbopack_context__.s({
    "displayedTokeksPabrikRoti": (()=>displayedTokeksPabrikRoti),
    "pabrikrotiErc20sLaunched": (()=>pabrikrotiErc20sLaunched),
    "tokeksPabrikRoti": (()=>tokeksPabrikRoti)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$contracts$2f$tokekContracts$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/config/contracts/tokekContracts.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$rantais$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/config/rantais.ts [app-client] (ecmascript)");
;
;
const tokeksPabrikRoti = {
    [__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$rantais$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["baseMainnet"].id]: [
        {
            address: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$contracts$2f$tokekContracts$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["erc20OiOiBase"].address,
            name: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$contracts$2f$tokekContracts$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["oioiTokenName"],
            symbol: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$contracts$2f$tokekContracts$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["oioiTokenSymbol"],
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$contracts$2f$tokekContracts$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["oioiTokenIcon"]
        }
    ],
    [__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$rantais$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["baseSepolia"].id]: [
        {
            address: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$contracts$2f$tokekContracts$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["erc20OiOiBaseSepolia"].address,
            name: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$contracts$2f$tokekContracts$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["oioiTokenName"],
            symbol: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$contracts$2f$tokekContracts$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["oioiTokenSymbol"],
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$contracts$2f$tokekContracts$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["oioiTokenIcon"]
        }
    ],
    [__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$rantais$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["monadTestnet"].id]: [
        {
            address: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$contracts$2f$tokekContracts$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["erc20OiOiMonadTestnet"].address,
            name: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$contracts$2f$tokekContracts$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["oioiTokenName"],
            symbol: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$contracts$2f$tokekContracts$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["oioiTokenSymbol"],
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$contracts$2f$tokekContracts$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["oioiTokenIcon"]
        }
    ],
    [__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$rantais$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["opMainnet"].id]: [
        {
            address: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$contracts$2f$tokekContracts$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["erc20OiOiOpMainnet"].address,
            name: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$contracts$2f$tokekContracts$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["oioiTokenName"],
            symbol: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$contracts$2f$tokekContracts$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["oioiTokenSymbol"],
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$contracts$2f$tokekContracts$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["oioiTokenIcon"]
        }
    ],
    [__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$rantais$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["shapeNetwork"].id]: [
        {
            address: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$contracts$2f$tokekContracts$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["erc20OiOiShapeNetwork"].address,
            name: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$contracts$2f$tokekContracts$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["oioiTokenName"],
            symbol: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$contracts$2f$tokekContracts$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["oioiTokenSymbol"],
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$contracts$2f$tokekContracts$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["oioiTokenIcon"]
        }
    ]
};
const displayedTokeksPabrikRoti = {
    [__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$rantais$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["baseMainnet"].id]: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$contracts$2f$tokekContracts$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["erc20OiOiBase"].address,
    [__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$rantais$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["baseSepolia"].id]: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$contracts$2f$tokekContracts$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["erc20OiOiBaseSepolia"].address,
    [__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$rantais$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["monadTestnet"].id]: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$contracts$2f$tokekContracts$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["erc20OiOiMonadTestnet"].address,
    [__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$rantais$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["opMainnet"].id]: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$contracts$2f$tokekContracts$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["erc20OiOiOpMainnet"].address,
    [__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$rantais$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["shapeNetwork"].id]: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$contracts$2f$tokekContracts$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["erc20OiOiShapeNetwork"].address
};
const pabrikrotiErc20sLaunched = [
    {
        address: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$contracts$2f$tokekContracts$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["erc20OiOiBase"].address,
        name: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$contracts$2f$tokekContracts$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["oioiTokenName"],
        symbol: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$contracts$2f$tokekContracts$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["oioiTokenSymbol"],
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$contracts$2f$tokekContracts$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["oioiTokenIcon"],
        by: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$contracts$2f$tokekContracts$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["oioiTokenBy"],
        link: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$contracts$2f$tokekContracts$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["oioiTokenLink"],
        chain: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$contracts$2f$tokekContracts$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["erc20OiOiBase"].chain,
        client: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$contracts$2f$tokekContracts$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["erc20OiOiBase"].client
    },
    {
        address: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$contracts$2f$tokekContracts$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["erc20OiOiBaseSepolia"].address,
        name: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$contracts$2f$tokekContracts$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["oioiTokenName"],
        symbol: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$contracts$2f$tokekContracts$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["oioiTokenSymbol"],
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$contracts$2f$tokekContracts$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["oioiTokenIcon"],
        by: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$contracts$2f$tokekContracts$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["oioiTokenBy"],
        link: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$contracts$2f$tokekContracts$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["oioiTokenLink"],
        chain: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$contracts$2f$tokekContracts$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["erc20OiOiBaseSepolia"].chain,
        client: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$contracts$2f$tokekContracts$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["erc20OiOiBaseSepolia"].client
    },
    {
        address: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$contracts$2f$tokekContracts$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["erc20OiOiMonadTestnet"].address,
        name: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$contracts$2f$tokekContracts$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["oioiTokenName"],
        symbol: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$contracts$2f$tokekContracts$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["oioiTokenSymbol"],
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$contracts$2f$tokekContracts$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["oioiTokenIcon"],
        by: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$contracts$2f$tokekContracts$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["oioiTokenBy"],
        link: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$contracts$2f$tokekContracts$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["oioiTokenLink"],
        chain: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$contracts$2f$tokekContracts$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["erc20OiOiMonadTestnet"].chain,
        client: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$contracts$2f$tokekContracts$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["erc20OiOiMonadTestnet"].client
    },
    {
        address: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$contracts$2f$tokekContracts$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["erc20OiOiOpMainnet"].address,
        name: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$contracts$2f$tokekContracts$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["oioiTokenName"],
        symbol: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$contracts$2f$tokekContracts$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["oioiTokenSymbol"],
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$contracts$2f$tokekContracts$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["oioiTokenIcon"],
        by: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$contracts$2f$tokekContracts$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["oioiTokenBy"],
        link: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$contracts$2f$tokekContracts$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["oioiTokenLink"],
        chain: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$contracts$2f$tokekContracts$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["erc20OiOiOpMainnet"].chain,
        client: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$contracts$2f$tokekContracts$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["erc20OiOiOpMainnet"].client
    },
    {
        address: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$contracts$2f$tokekContracts$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["erc20OiOiShapeNetwork"].address,
        name: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$contracts$2f$tokekContracts$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["oioiTokenName"],
        symbol: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$contracts$2f$tokekContracts$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["oioiTokenSymbol"],
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$contracts$2f$tokekContracts$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["oioiTokenIcon"],
        by: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$contracts$2f$tokekContracts$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["oioiTokenBy"],
        link: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$contracts$2f$tokekContracts$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["oioiTokenLink"],
        chain: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$contracts$2f$tokekContracts$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["erc20OiOiShapeNetwork"].chain,
        client: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$contracts$2f$tokekContracts$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["erc20OiOiShapeNetwork"].client
    }
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/config/utils.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
// /src/config/utils.ts
// Blockchain configurations
__turbopack_context__.s({
    "FetchEthereumPrice": (()=>FetchEthereumPrice),
    "buildCurrencyMapFromSupportedFTs": (()=>buildCurrencyMapFromSupportedFTs),
    "calculatePrice": (()=>calculatePrice),
    "formatTokenAmount": (()=>formatTokenAmount),
    "getCountdownString": (()=>getCountdownString),
    "hexToRgba": (()=>hexToRgba),
    "isBeforeStartTime": (()=>isBeforeStartTime)
});
function hexToRgba(hex, alpha) {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}
function getCountdownString(startTime, currentTime = new Date()) {
    if (!startTime) return null;
    const totalSeconds = Math.floor((startTime.getTime() - currentTime.getTime()) / 1000);
    if (totalSeconds <= 0) return null;
    const days = Math.floor(totalSeconds / (3600 * 24));
    const hours = Math.floor(totalSeconds % (3600 * 24) / 3600);
    const minutes = Math.floor(totalSeconds % 3600 / 60);
    const seconds = totalSeconds % 60;
    return `${days}d ${hours}h ${minutes}m ${seconds}s`;
}
function buildCurrencyMapFromSupportedFTs(supportedFTs) {
    const map = {};
    Object.values(supportedFTs).forEach((tokens)=>{
        tokens.forEach((token)=>{
            const { address, name, symbol, icon } = token;
            map[address.toLowerCase()] = {
                name,
                symbol,
                icon
            };
        });
    });
    return map;
}
async function FetchEthereumPrice() {
    try {
        const response = await fetch("https://api.coingecko.com/api/v3/simple/price?x_cg_demo_api_key=CG-gW1zJEU5tLrciQunUxFefDqb&ids=ethereum&vs_currencies=usd");
        const data = await response.json();
        return data.ethereum.usd;
    } catch (error) {
        console.error("Error fetching Ethereum price:", error);
        return null;
    }
}
_c = FetchEthereumPrice;
function isBeforeStartTime(startTime, now = new Date()) {
    return now < startTime;
}
function formatTokenAmount(raw, decimals) {
    return (raw / BigInt(10) ** BigInt(decimals)).toString();
}
function calculatePrice(tokenIdNumber) {
    if (isNaN(tokenIdNumber)) return "0.00";
    return tokenIdNumber >= 23 ? "x.xx" : "0.00";
}
var _c;
__turbopack_context__.k.register(_c, "FetchEthereumPrice");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/config/contracts/index.ts [app-client] (ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
// /src/config/contracts/index.ts
// External libraries
__turbopack_context__.s({
    "useCurrencyMap": (()=>useCurrencyMap)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
// Blockchain configurations
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$contracts$2f$accountFactories$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/config/contracts/accountFactories.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$contracts$2f$tekekContracts$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/config/contracts/tekekContracts.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$contracts$2f$tekeks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/config/contracts/tekeks.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$contracts$2f$tekeksMeMoRa$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/config/contracts/tekeksMeMoRa.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$contracts$2f$tekeksPabrikRoti$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/config/contracts/tekeksPabrikRoti.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$contracts$2f$tokekContracts$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/config/contracts/tokekContracts.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$contracts$2f$tokeks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/config/contracts/tokeks.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$contracts$2f$tokeksMeMoRa$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/config/contracts/tokeksMeMoRa.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$contracts$2f$tokeksPabrikRoti$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/config/contracts/tokeksPabrikRoti.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$receipts$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/config/receipts/index.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/config/utils.ts [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
;
;
;
;
;
;
;
;
;
;
;
function useCurrencyMap() {
    _s();
    const { supportedFTs } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$receipts$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getActiveReceipt"])();
    const currencyMap = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "useCurrencyMap.useMemo[currencyMap]": ()=>{
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buildCurrencyMapFromSupportedFTs"])(supportedFTs);
        }
    }["useCurrencyMap.useMemo[currencyMap]"], [
        supportedFTs
    ]);
    return currencyMap;
}
_s(useCurrencyMap, "D57YcIbkOwYjldRiiE+Ske4S7v4=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/config/contracts/index.ts [app-client] (ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$contracts$2f$accountFactories$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/config/contracts/accountFactories.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$contracts$2f$tekekContracts$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/config/contracts/tekekContracts.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$contracts$2f$tekeks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/config/contracts/tekeks.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$contracts$2f$tekeksMeMoRa$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/config/contracts/tekeksMeMoRa.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$contracts$2f$tekeksPabrikRoti$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/config/contracts/tekeksPabrikRoti.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$contracts$2f$tokekContracts$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/config/contracts/tokekContracts.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$contracts$2f$tokeks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/config/contracts/tokeks.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$contracts$2f$tokeksMeMoRa$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/config/contracts/tokeksMeMoRa.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$contracts$2f$tokeksPabrikRoti$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/config/contracts/tokeksPabrikRoti.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$receipts$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/config/receipts/index.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/config/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$contracts$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/config/contracts/index.ts [app-client] (ecmascript) <locals>");
}}),
"[project]/src/config/receipts/memora.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
// /src/config/receipts/memora.ts
// All receipts should be exported from this file.
__turbopack_context__.s({
    "memora": (()=>memora)
});
const proTitle = "MEMORA VIRTUAL COLLECTIBLES";
const proUrl = "https://memora.voyage.co.id/";
const entityName = "MeMoRa by Voyage.Co.Id";
const entityAlias1 = "Voyage.Co.Id";
const entityAlias2 = "MEMORA VIRTUAL COLLECTIBLES";
const entityAddress = "Jl. Kartika Utama Blok SM No. 29, Pd. Pinang, Kec. Kby. Lama, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12310, INDONESIA";
const entityEmail = "hello@voyage.co.id";
const termsMonth = "March";
const termsDate = "20";
const termsYear = "2025";
const termsUpdate = `Last updated on ${termsMonth} ${termsDate}, ${termsYear}.`;
const memora = {
    // colors hex libraries - origin
    colorPrimary: "#F9F9F9",
    colorSecondary: "#262525",
    colorTertiary: "#707070",
    colorPrimer: "#F0F0F0",
    colorSekunder: "#171717",
    colorTersier: "#DFDFDF",
    // layout...
    proTitle,
    proDescription: `MeMoRa means "to remember" or "to be mindful of". MeMoRa refers to something that serves as a reminder or is used for remembering. So, commemorate your memorabilia experiences today with a unique virtual collectible of MeMoRa.`,
    proUrl,
    proPublisher: "Voyage.Co.Id",
    proLocale: "en-US",
    proFavicon: "/memora/favicon.ico",
    proImage: "https://memora.voyage.co.id/memora/preview-image.png",
    proLang: "en",
    // error boundary section
    proErrorCought: "Error caught in ErrorBoundary:",
    proError: "Something went wrong. Please try again later.",
    proButton: "Try Again",
    // connect buttons section
    proLogo: "/memora/logos/logo.png",
    // login layout section
    loginArt: "/memora/images/login-art.png",
    loginBanner: "/memora/images/login-banner.png",
    loginAria: "Call to action for login.",
    loginCall: "Get Ready!",
    loginReason: {
        text: "Register now to immerse yourself in MeMoRa Experience!",
        anchor: "",
        link: ""
    },
    loginAgreement: "By connecting, you agree to the",
    loginTermsPolicy: "Terms of Service & Privacy Policy",
    linkPower: "https://voyage.co.id/",
    loginPower: "/memora/images/login-power.png",
    poweredBy: "Powered by Voyage.Co.Id",
    // header section
    headerLogo: "/memora/images/header-logo.png",
    headerLogoo: "/memora/images/header-logoo.png",
    headerGo: "Search",
    headerSearch: "Search Query",
    searchPlaceholder: "Enter your search query",
    // drop down menu section
    ddMenuHome: "Home Page",
    ddMenuWhat: "",
    ddMenuWhy: "",
    ddMenuHow: "",
    ddMenuWhen: "",
    ddMenuWhere: "",
    ddMenuWho: "",
    ddMenuFeatured: "Featured",
    ddMenuFree: "Free MeMoRa",
    ddMenuPaid: "Paid MeMoRa",
    ddMenuCoins: "BON Voyage",
    ddMenuMore: "Read More, OiOi!",
    ddMenuDeploy: "",
    ddMenuContact: "",
    ddMenuTerms: "Terms of Use",
    // footer section - hide social icon by nulled the link
    copyRight: "All rights reserved.",
    officiallyLicensed: "Officially licensed product of",
    anchorPrivacy: "Privacy Policy",
    anchorTerms: "Terms of Service",
    footerPower: "/memora/images/footer-power.png",
    socialTitle: "Join Voyage's Community!",
    linkXTwitter: "",
    linkLinkedIn: "https://www.linkedin.com/company/voyage-web3/about/",
    linkInstagram: "https://www.instagram.com/voyage.web3/",
    linkFacebook: "",
    linkDiscord: "",
    linkYouTube: "https://www.youtube.com/@voyageweb3",
    linkEmail: "mailto:hello@voyage.co.id",
    linkWhatsApp: "https://api.whatsapp.com/send?phone=6281808038000&text=Hello%2C%20Voyagers!%20Help%20us%20integrate%20decentralized%20technologies%20into%20our%20operations%20and%20business%20models%2C%20please!",
    linkWebsite: "",
    // subscribe form section
    subscribeWarn: "Missing Web3Forms Access Key. Please set NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY.",
    subscribeInput: "Please enter a valid email address.",
    subscribeSubject: `Subscription to ${proTitle}`,
    subscribeName: `Visitor of ${proUrl}`,
    subscribeMessage: "I want to subscribe to the latest updates.",
    subscribeSuccess: "Thank you for subscribing!",
    subscribeFailed: "Subscription failed. Please try again.",
    subscribeTitle: "Catch our latest updates",
    subscribePlaceholder: "Enter your email address",
    subscribeButton: "Subscribe",
    subscribeButtonLoading: "Subscribing...",
    // featured cards page - hide card by nulled the title
    featuredTitle1: "MEMORA VIRTUAL",
    featuredTitle2: "COLLECTIBLES",
    featuredPaid: "/memora/images/featured-paid.png",
    paidTitle: "Paid Virtual Collectibles",
    featuredFree: "/memora/images/featured-free.png",
    freeTitle: "Free Virtual Collectibles",
    featuredCoin: "/memora/images/featured-coin.png",
    coinTitle: "Redeem Points Reward",
    featuredAria: "Navigate to",
    // reusable loader section
    loaderChecking: "Loading...",
    // search wrapper page
    searchMessage1: "No data was found.",
    searchMessage2: "No data matching your search terms was found. Please try searching again using other terms or return to the home page.",
    searchTitle: "Search Result:",
    searchAria1: "Load previous items.",
    searchAria2: "Refresh search results.",
    searchAria3: "Load more items.",
    // nfts list page
    nftsTitle1Free: "All Free",
    nftsTitle2Free: "Collectibles",
    nftsTitle1Paid: "All Paid",
    nftsTitle2Paid: "Collectibles",
    nftsFailReason: "ClaimNotActive",
    nftsConsoleWarn: "canClaim failed for nftId",
    nftsSetError: "Failed to fetch any available collectibles.",
    nftsError: "Lho, Error:",
    nftsUknownError: "Kok, Error:",
    nftsMessage1: "No available collectibles!",
    nftsMessage2: "There are no available collectibles right now. Please try again later or return to the home page.",
    nftsMessage3: "Return to the Home Page!",
    nftsPrevious: "Previous",
    nftsNext: "Next",
    nftsAria: "Refresh all collectibles data.",
    // nft lister section
    nftButton: "Collect Now",
    nftSoon: "Available in:",
    nftInsufficient: "Insufficient Balance",
    nftClaimed: "Got It",
    nftClosed: "Fully Depleted",
    nftListerImage: "/memora/medias/artisan-bread.gif",
    nftListerName: "An Available Collectibles",
    nftEditions: "Edition:",
    nftNoData: "No data available.",
    // nft fallback page
    nftFallMessage1: "No valid collectible ID was used.",
    nftFallMessage2: "Please use a valid collectible ID in the URL or return to the home page and start over.",
    // nft details page
    nftSetError: "Failed to fetch the collectible ID.",
    nftMessage1: "The collectible ID not found.",
    nftMessage2: "The specified collectible ID was not found. Please try again later or return to the home page.",
    // nft form section
    nftFormByLink: "https://memora.voyage.co.id/",
    nftFormBy: "by",
    nftFormByName: `${entityAlias1}`,
    nftFormEdition: "Edition",
    nftFormOwned: "Collected",
    nftFormRefresh: "Refresh",
    nftFormTunggu: "Processing. Be patient and wait.",
    nftFormKirim: "Collecting your collectible.",
    nftFormSukses: "Collectible successfully collected.",
    nftFormPrice: "Price",
    nftFormMax: "*Maximum",
    nftFormPerWallet: "edition per collector.",
    // nft description section - hide link by nulled the title
    nftMeMoRaTitle: "",
    nftMeMoRa: "Read on MeMoRa MarketPlace (SOON)",
    nftEndhonesaTitle: "",
    nftEndhonesa: "Read on ENDHONESA.COM (GOON)",
    nftReadLess: "Read Less",
    nftReadMore: "Read More",
    // coins list page
    coinsConsoleWarn: "canClaim failed for coinAddress:",
    coinsSetError: "Failed to fetch any claimable points.",
    coinsMessage1: "No claimable points",
    coinsMessage2: "There are no claimable points available right now. Please try again later or return to the home page.",
    coinsTitle1: "Claim All",
    coinsTitle2: "Poins Reward",
    coinsAria: "Refresh points data.",
    // coin lister section
    coinButton: "Claim Now",
    coinNoAccess: "No Access",
    coinClaimed: "Claimed",
    coinListerImage: "/memora/medias/batch-bread.gif",
    coinListerName: "A Claimable Point",
    coinListerSupply: "Supply:",
    coinListerOf: "of",
    // coin fallback page
    coinFallMessage1: "Invalid point address used.",
    coinFallMessage2: "Please use a valid address of the claimable point in the URL or return to the home page and start over.",
    // coin details page
    coinSetError: "Failed to fetch the point address.",
    coinMessage1: "The point address not found.",
    coinMessage2: "The specified address of the point was not found. Please try again later or return to the home page.",
    coinAccessTitle: "You don't have access!",
    // coin access section
    coinAccessMessage: "Please get your access by get any available collectibles at least one edition.",
    coinAccessButton: "Get The Available Collectibles!",
    coinAccessBanner: "/memora/images/content-banner.png",
    // coin form section
    coinFormSupply: "Supply",
    coinFormOwned: "Claimed",
    coinFormOnChain: "On",
    coinFormKirim: "Claiming your point.",
    coinFormSukses: "Point successfully claimed.",
    coinFormPerWallet: "supply per holder.",
    // coin pop up section
    popUpTitle: "$BON Dosh!!!!",
    popUpP1: "At a certain point in time… in the Realm of Reality.",
    popUpP2: "On EARTH #474, after traversing 4.5 billion years in the vastness of the cosmos, a group of individuals embarked on an extraordinary journey. They did not merely traverse land, but also crossed the oceans and even ventured into the boundless expanse of space. Thus, the VOYAGE began—not merely a physical expedition, but a pursuit of values, encounters, and growth.",
    popUpP3: "As time unfolded, their efforts met challenges and opportunities alike. Revenue flowed in and out, weaving a pattern akin to the ceaseless tides of the sea. Every meeting with a new soul, every crossroads encountered, every farewell, and every joyous reunion—each left an indelible mark upon the tapestry of this great journey.",
    popUpP4: "The call &quot;BON VOYAGE!&quot; grew louder, reverberating not only in the minds of those undertaking the VOYAGE but also weaving itself into the very fabric of decentralised data traffic. What was once a mere expression of well-wishes, BON had now evolved into something far greater—a unit of measure for the VOYAGE itself.",
    popUpP5: "",
    popUpP6: "",
    popUpP7: "",
    popUpP8: "",
    popUpUlLi1: "🔹 How far has the VOYAGE taken them?",
    popUpUlLi2: "🔹 How much value has been forged along the way?",
    popUpUlLi3: "🔹 How many encounters have shaped the path?",
    popUpUlLi4: "🔹 How much revenue has been channelled and exchanged?",
    popUpUlLi5: "",
    popUpUlLi6: "",
    popUpP9: "BON stands as a measure that immortalises experience, a token of equivalence (ERC-20) that encapsulates the influence of every participant in the VOYAGE.",
    popUpP10: "BON is not just a figure—it is proof of the steps taken, the values cultivated, and the impact left behind.",
    popUpP11: "And at the culmination of every journey—whether at its inception or after traversing great distances—one call continues to resonate, carrying forth the spirit of adventure and purpose:",
    popUpP12: "BON VOYAGE! 🚀",
    popUpP13: "🍌☕🍌☕",
    popUpP14: "Prof. NOTA v.11.11.11",
    popUpImage: "/memora/medias/coin-pop-up.gif",
    popUpImageAlt: "BON VOYAGE Token Illustration",
    // terms page
    entityName,
    entityAlias1,
    entityAlias2,
    entityAddress,
    entityEmail,
    termsAria1: "Title of the Terms and Conditions",
    termsTitle: "T and C of Use",
    termsMonth,
    termsDate,
    termsYear,
    termsUpdate,
    termsAria2: `Document last updated on ${termsUpdate}`,
    termsTerms: {
        section1: {
            title: `${entityName} Terms and Conditions of Use`,
            paragraphs: [
                `Please read these ${entityName} Terms and Conditions of Use and Privacy Statement carefully, they contain important information about your rights and obligations.`,
                `${entityAlias2} is a platform that allows you to collect, issue, and display NFTs. This ${entityName} Terms and conditions of Use ("Terms and Conditions", "Agreement") document is entered into by user or users ("User", "Users" or "You"), ${entityAlias1}, and ${entityAlias2} (" ${entityName}," "We" or "Us"). It contains terms and conditions you have agreed to abide by upon accessing ${proUrl} ("Site"). The terms govern your access and use of the ${entityAlias2} ecosystem, including content, features, and functionality. By signing up to use an account through the Site, or any associated websites, APIs, or mobile applications, you agree that you have read, understood, and accept all of the terms and conditions contained in this Agreement.`
            ]
        },
        section2: {
            title: `Basic ${entityAlias2} Services`,
            items: [
                `Eligibility. To be eligible to use the ${entityAlias2} services, you must register an account on ${entityName} Site.`,
                `${entityAlias2} Services. Your account encompasses the following basic services: Access to collect virtual collectibles in a form of Non Fungible Tokens; Access to issue and publish NFTs; Privilege tagged to NFTs that you, as an NFT collector ("Collector"), have collected.`
            ]
        },
        section3: {
            title: "Agreement to these Terms and Conditions",
            paragraphs: [
                "All Users shall use the Services in accordance with these Terms and Conditions. Users may not use the Services unless they agree to these Terms and Conditions.",
                "Users who are minors may only use the Services by obtaining prior consent from their parents or legal guardians. Furthermore, if Users will be using the Services on behalf of, or for the purposes of, a business enterprise, then such business enterprise must also agree to these Terms and Conditions prior to using the Services.",
                "If there are Separate Terms and Conditions applicable to the Services, Users shall also comply with such Separate Terms and Conditions as well as these Terms and Conditions in using the Services."
            ]
        },
        section4: {
            title: "Modification to these Terms and Conditions",
            paragraphs: [
                `${entityAlias2} may modify these Terms and Conditions when ${entityAlias2} deems it to be necessary, within the scope of the purposes of the Services. In such a case, ${entityAlias2} will indicate the contents of the modified version of these Terms and Conditions, as well as the effective date of the modification, on the Services or on ${entityName}'s website, or will publicize the same to Users by notifying Users in the manner prescribed by ${entityAlias2}.`,
                "The modified version of these Terms and Conditions shall become effective as of the effective date thereof."
            ]
        },
        section5: {
            title: `${entityAlias2} ACCOUNT`,
            paragraphs: [
                `Registration of ${entityAlias2} account. In order to use the ${entityName} Site, you will need to register for a ${entityAlias2} account by providing your information ("Personal Information"), including your email address, password, and accepting the terms of this Agreement and our Privacy Policy. We may, in our sole discretion, decide to remove your account if we find out a violation in your activities within the ${entityName} Site.`,
                `Access. To access the ${entityName} Site, you must have the necessary equipment or device and the associated telecommunication service subscriptions to access the Internet.`
            ]
        },
        section6: {
            title: "Role-specific terms",
            paragraphs: [
                `Collector. As a Collector, you will gain access to browse through NFTs that are displayed on the ${entityName} Site. You may obtain the ownership of any of the available NFTs by exchanging with approved tokens. You may also choose to keep the NFTs as your collection, exchange them for tokens with other Collectors or use them to redeem products and services offered by our partners if applicable. Specifically for claiming procedures, our partners have the right to set their own disclaimers. ${entityName} Site is not responsible for failure to comply with the disclaimers that lead to unsuccessful NFTs redemption.`,
                "You will also gain access to publish NFTs that you have collected to be displayed and made available to be exchanged with approved tokens, if preferable. In a case where you transfer ownership of an NFT with a tagged product or service to another Collector, you will also transfer the title of the product or service.",
                "The ownership of the NFTs does not give you the right to have the ownership of the Intellectual Property rights of those NFTs."
            ]
        },
        section7: {
            title: "Intellectual Property Rights Protection Provisions",
            paragraphs: [
                `Intellectual Property Rights. The term "Intellectual Property Rights" means all (i) patents, patent applications, patent disclosures and inventions, (ii) Internet Domain names, trademarks, service marks, trade dress, trade names, logos and corporate names and registrations and applications for registration thereof together with all of the goodwill associated therewith, (iii) copyrights (registered or unregistered) and copyrightable works and registrations and applications for registration thereof, (iv) mask works and registrations and applications thereof, (v) computer software, data, databases and documentation thereof, (vi) trade secrets and other confidential information, including ideas, formulas, compositions, inventions (whether patentable or unpatentable and whether or not reduced to practice), know-how, manufacturing and production processes and techniques, research and development information, drawings, specifications, designs, plans, proposals, technical data, and copyrightable works, financial and marketing plans and customer and supplier lists and information, and (vii) copies and tangible embodiments thereof (in whatever form or medium).`,
                `This Terms and Conditions contains how you and ${entityAlias2} will protect your Intellectual Property on ${entityAlias2} services exclusively.`,
                "You acknowledge that:",
                `${entityAlias2} hereby grants you a limited, non-exclusive, non-transferable royalty-free right to use or display the brand, trade name, logo, site content, headings and other distinguishing marks and names of ${entityAlias1} and ${entityAlias2} on the site and limited for the purpose of implementing this Agreement.`,
                `Breach of Intellectual Property. ${entityAlias2} wil take responsibility for any finding NFTs that are infringing Intellectual Property Rights. If you as Collector find indications of infringement of intellectual property rights on NFTs in ${entityAlias2}, you can contact ${entityAlias2} and ${entityAlias2} will help to remove them from ${entityName} site. Other than that, it will be the responsibility of you and the IP owners and should be directly resolved between you and the IP owners.`
            ],
            ol: [
                `You are the original owner or holder of the intellectual property rights of NFTs published on ${entityName} site.`,
                `You hereby declare that you fully own the intellectual property rights to the NFTs published on ${entityName} site exclusively and guarantee that there are no claims from third parties for the ownership of the NFTs`
            ]
        },
        section8: {
            title: "Restricted Matters",
            paragraphs: [
                `${entityAlias2} prohibits you from engaging in any of the following acts when using the Services:`
            ],
            ul: [
                "Acts that violate the laws and regulations, court verdicts, resolutions or orders, or administrative measures that are legally binding;",
                "Acts that may be in violation of public order, morals or customs;",
                `Acts that infringe intellectual property rights, such as copyrights, trademarks and patent rights, rights to fame, privacy, and all other rights granted by law or by a contract with ${entityAlias2} and/or a third party;`,
                "Acts of posting or transmitting excessively violent expressions; expressions that lead to discrimination by race, national origin, creed, gender, social status, family origin, etc.; expressions that induce or encourage suicide, self-injurious behavior or drug abuse; or expressions that include anti-social content and lead to the discomfort of others;",
                "Acts that benefit or involve collaboration with anti-social groups;",
                "Acts that are related to religious activities or invitations to certain religious groups;",
                "Acts of unauthorized or improper collection, disclosure, or provision of any other person's personal information, registered information, user history, or the like;"
            ]
        },
        section9: {
            title: "Suspension, Termination, and Cancellation",
            paragraphs: [
                `We may (a) refuse to complete or cancel your registration, (b) suspend, restrict or terminate your access to any or all of the ${entityName} Site services, and/or (c) deactivate your account with immediate effect for any reason, including but not limited to where:`
            ],
            ul: [
                "We are, in our reasonable opinion, required to do so by applicable law or any court or other authority to which we are subject in any jurisdiction;",
                "We reasonably suspect you of acting in breach of this Agreement;",
                `We have concerns that an activity is erroneous or about the security of your account or we suspect that ${entityName} Site services are being used in a fraudulent or unauthorized manner;`,
                "We suspect money laundering, terrorist financing, fraud, or any other financial crime;",
                `Use of your account is subject to any pending litigation, investigation or government proceeding and/or we perceive a heightened risk of legal or regulatory non-compliance associated with your account activity;`,
                "You take any action that may circumvent our controls such as abusing promotions which we may offer from time to time;"
            ],
            paragraphsAfterList: [
                `We may suspend, restrict, or terminate your access to any or all of ${entityName} Site services and/or deactivate or cancel your ${entityAlias2} account, without reason by giving you two months notice. You acknowledge that our decision to take certain actions, including limiting access to, suspending, or closing your ${entityAlias2} account, may be based on confidential criteria that are essential to our risk management and security protocols. You agree that we are under no obligation to disclose the details of its risk management and security procedures to you.`
            ]
        },
        section10: {
            title: "Liability",
            paragraphs: [
                `Release of ${entityAlias2}. ${entityAlias2} is a peer to peer platform that uses the distributed ledger technology, If you have a dispute with one or more users of ${entityName} Site, you agree that neither we nor our affiliates or service providers, nor any of our respective officers, directors, employees, and representatives will be liable for any claims, demands, and damages (actual and consequential) of any kind or nature rising out of or in any way connected with such disputes.`,
                `Indemnification. You agree to indemnify ${entityAlias2}, our affiliates and service providers, and each of our or their respective officers, directors, employees, and representatives, in respect of any costs (including attorneys' fees and any fines, fees or penalties imposed by any regulatory authority) that have been reasonably incurred in connection with any claims, demands or damages arising out of or related to your breach and / or our enforcement of this Agreement or your violation of any law, rule or regulation, or the rights of any third party.`,
                `Limitation of Liability. ${entityAlias2} has no liability for services and all NFTs on the Site and ${entityAlias2} shall only be liable to you for loss or damage caused directly and reasonably foreseeable by our breach of this Agreement.`,
                `No Warranties. ${entityName} Site services are provided on an "as is" and "as available" basis without any representation or warranty, whether express or implied, to the maximum extent permitted by applicable law: specifically we disclaim any implied warranties of title, merchantability, fitness for a particular purpose and/or non-infringement. We do not make any representations or warranties that access to ${entityName} Site, any of the ${entityAlias2} services, or any of the materials contained therein, will be continuous, uninterrupted, timely or error-free.`,
                `Safety and Security of Your Computer and Devices. ${entityName} Site is not liable for any damage or interruptions caused by any computer viruses, spyware, scareware, Trojan horses, worms or other malware that may affect your computer or other equipment, or any phishing, spoofing or other attack. We advise the regular use of a reputable and readily available virus screening and prevention software. You should also be aware that SMS and email services are vulnerable to spoofing and phishing attacks and should use care in reviewing messages purporting to originate from us. ${entityAlias2} customer support will never ask to screen share or otherwise seek to access your computer or account.`,
                `No Liability for Breach. We are not liable for any breach of the Agreement where the breach is due to abnormal and unforeseeable circumstances beyond our control, the consequences of which would have been unavoidable despite all effects to the contrary, nor are we liable where the breach is due to the application of mandatory legal rules.`
            ]
        },
        section11: {
            title: "Customer Feedback, Queries, Complaints, and Dispute Resolution",
            paragraphs: [
                `Contact ${entityAlias2}. When you contact us please provide us with your name, email, wallet address, and any other information we may need to identify you, your ${entityAlias2} account, and the activity on which you have feedback, questions, or complaints.`,
                `Complaints. In the event of a complaint, please set out the cause of your complaint, how you would like us to resolve the complaint and any other information you believe to be relevant. We will acknowledge receipt of your complaint. A Customer Complaints officer ("Officer") will consider your complaint. The Officer will consider your complaint without prejudice based on the information you have provided and any information provided by ${entityAlias1}. Within 15 business days of our receipt of your complaint the Officer will address all points raised in your complaint by sending you an e-mail ("Resolution Notice") in which the Officer will: (i) offer to resolve your complaint in the way your requested; (ii) make a determination rejecting your complaint and set out the reasons for the rejection; or (iii) offer to resolve your complaint with an alternative solution. In exceptional circumstances, if the Officer is unable to respond to your complaint within 15 business days for reasons beyond ${entityAlias1}'s control, the Officer will send you a holding reply indicating the reasons for a delay in answering your complaint and specifying the deadline by which the Officer will respond to your complaint (which will be no later than 35 business days from our receipt of your complaints).`,
                `Offers. Any offer of resolution made to you will only become binding on us if accepted by you. An offer of resolution will not constitute any admission by us of any wrongdoing or liability regarding the subject matter of the complaint.`
            ]
        },
        section12: {
            title: "Data Protection",
            paragraphs: [
                `Personal Data. You acknowledge that we may process personal data in relation to you. Accordingly, you represent and warrant that:`
            ],
            ul: [
                `your disclosure to us of any personal data was or will be made in accordance with all applicable data protection and data privacy laws, and those data are accurate, up to date and relevant when disclosed;`,
                `before providing any such personal data to us, you have read and understood our Privacy Policy, attached to this Agreement and a copy of which is also available at Privacy Policy, and, in the case of personal data relating to an individual other than yourself, have (or will at the time of disclosure have) provided a copy of that Privacy Policy (as amended from time to time), to that individual;`,
                `and if from time to time we provide you with a replacement version of the Privacy Policy, you will promptly read that notice and provide a copy to any individual whose personal data you have provided to us;`
            ],
            paragraphsAfterList: [
                `Please read the Privacy Policy for details of how we may process your personal data.`
            ]
        },
        section13: {
            title: "General Terms and Conditions",
            paragraphs: [
                `Limited License. We grant you a limited, non-exclusive, non-transferable license, subject to the terms of this Agreement, to access and use ${entityName} Site, and related content, materials, information (collectively, the "Content") solely for approved purposes as permitted by us from time to time. Any other use of ${entityName} Site or Content is expressly prohibited and all other right, title, and interest in ${entityName} Site or Content is exclusively the property of ${entityAlias2} and its licensors. You agree not to copy, transmit, distribute, sell, license, reverse engineer, modify, publish, or participate in the transfer or sale of, create derivative works from, or in any other way exploit any of the Content, in whole orin part.`,
                `Website Accuracy. Although we intend to provide accurate and timely information on ${entityName} Site, ${entityName} Site (including, without limitation, the Content) may not always be entirely accurate, complete or current and may also include technical inaccuracies or typographical errors. In an effort to continue to provide you with as complete and accurate information as possible, information may, to the extent permitted by applicable law, be changed or updated from time to time without notice, including without limitation information regarding our policies, products and services. Accordingly, you should verify all information before relying on it, and all decisions based on information contained on ${entityName} Site are your sole responsibility and we shall have no liability for such decisions. Links to third-party materials (including without limitation websites) may be provided as a convenience but are not controlled by us. You acknowledge and agree that we are not responsible for any aspect of the information, content, or services contained in any third-party materials or on any third party sites accessible or linked to ${entityName} Site.`,
                `Relationship of the Parties. Nothing in this Agreement shall be deemed or is intended to be deemed, nor shall it cause, either you or ${entityAlias2} to be treated as the agent of the other.`,
                `Privacy of Others; Marketing. If you receive information about another user through ${entityName} Site services, you must keep the information confidential and only use it in connection with ${entityName} Site services. You may not disclose or distribute a user's information to a third party or use the information except as reasonably necessary to effect a transaction and other functions reasonably incidental thereto such as support, reconciliation and accounting unless you receive the user's express consent to do so. You may not send unsolicited email to a user through ${entityName} Site services.`,
                `Security Breach. If you suspect that your ${entityAlias2} account or any of your security details have been compromised or if you become aware of any fraud or attempted fraud or any other security incident (including a cyber-security attack) affecting you and/or ${entityAlias2} (together a "Security Breach"), you must notify ${entityAlias2} support as soon as possible by email free of charge at ${entityEmail} and continue to provide accurate and up to date information throughout the duration of the Security Breach. You must take any steps that we reasonably require to reduce, manage or report any Security Breach. Failure to provide prompt notification of any Security Breach may be taken into account in our determination of the appropriate resolution of the matter.`,
                `Contact Information. You are responsible for keeping your email address up to date in your Account Profile in order to receive any notices or alerts that we may send you (including notices or alerts of actual or suspected Security Breach).`,
                `Entire Agreement. This Agreement (including documents incorporated by reference herein) comprise the entire agreement between you and ${entityAlias2}.`,
                `Interpretation. Section headings in this Agreement are for convenience only, and shall not govern the meaning or interpretation of any provision of this Agreement.`,
                `Transfer. This Agreement is personal to you and you cannot transfer or assign your rights, licenses, interests and/or obligations to anyone else. We may transfer or assign our rights licenses, interests and/or our obligations at any time, including as part of a merger, acquisition or other corporate reorganisation involving ${entityAlias2}, provided that this transfer or assignment does not materially impact the quality of the ${entityAlias2} services you receive.`,
                `Invalidity. If any provision of this Agreement is determined to be invalid or unenforceable under any applicable law, this will not affect the validity of any other provision.`,
                `Enforcement of Our Rights. We may not always strictly enforce our rights under this Agreement. If we do this, it will be just a temporary measure and we may enforce our rights strictly again at any time.`,
                `Language. This Agreement and any information or notifications that you or we are to provide should be in Indonesian and English. Any translation of this Agreement or other documents is provided for your convenience only. In the event of any inconsistency, the Indonesian and English language version of this Agreement or other documents shall prevail.`,
                `Survival. All provisions of this Agreement which by their nature extend beyond the expiration or termination of this Agreement, including, without limitation, the sections relating to suspension or termination, ${entityAlias2} account cancellation, general use of ${entityName} Site, disputes with ${entityAlias2}, and general provisions, will continue to be binding and operate after the termination or expiration of this Agreement.`
            ]
        }
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/config/receipts/myreceipt.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
// /src/config/receipts/myreceipt.ts
// All receipts should be exported from this file.
__turbopack_context__.s({
    "myreceipt": (()=>myreceipt)
});
const proTitle = "NFT FOR A REASON - NFT FAR";
const proUrl = "https://far.futuloka.io";
const entityName = "NFT FAR by Futuloka";
const entityAlias1 = "NFT FAR";
const entityAlias2 = "Futuloka";
const entityAddress = "Jl. Teuku Cik Ditiro II No.3 8, RT.1/RW.2, Gondangdia, Kec. Menteng, Kota Jakarta Pusat, Daerah Khusus Ibukota Jakarta 10350, INDONESIA";
const entityEmail = "kontak@futuloka.io";
const termsMonth = "May";
const termsDate = "30";
const termsYear = "2025";
const termsUpdate = `Last updated on ${termsMonth} ${termsDate}, ${termsYear}.`;
const myreceipt = {
    // colors hex libraries - nft for a reason
    colorPrimary: "#FFFBEF",
    colorSecondary: "#4D1E10",
    colorTertiary: "#FDD604",
    colorPrimer: "#FFF0C9",
    colorSekunder: "#7A4C00",
    colorTersier: "#E8DA32",
    // layout...
    proTitle,
    proDescription: "NFT FOR A REASON is a Web3 Initiative for Grassroots Culture & Creative Solidarity.",
    proUrl,
    proPublisher: "Futuloka",
    proLocale: "en-US",
    proFavicon: "/favicon.ico",
    proImage: "https://far.futuloka.io/preview-image.png",
    proLang: "en",
    // error boundary section
    proErrorCought: "Error caught in ErrorBoundary:",
    proError: "Something went wrong. Please try again later.",
    proButton: "Try Again",
    // connect buttons section
    proLogo: "/logos/logo.png",
    // login layout section
    loginArt: "/images/login-art.png",
    loginBanner: "/images/login-banner.png",
    loginAria: "Call to action for login.",
    loginCall: "It is a solidarity movement",
    loginReason: {
        text: `for artists, cultural workers, and communities to shape the Web3 era together.`,
        anchor: "",
        link: "https://far.futuloka.io/medias/nft-far-journey-and-whitepaper.pdf"
    },
    loginAgreement: "By connecting, you agree to the",
    loginTermsPolicy: "Terms of Service & Privacy Policy",
    linkPower: "https://nftindonesia.xyz/",
    loginPower: "/images/login-power.png",
    poweredBy: "Deployed by NFT Indonesia",
    // header section
    headerLogo: "/images/header-logo.png",
    headerLogoo: "/images/header-logoo.png",
    headerGo: "Search",
    headerSearch: "Search Query",
    searchPlaceholder: "Enter your search query",
    // drop down menu section
    ddMenuHome: "Welcome, OiOi!",
    ddMenuWhat: "About",
    ddMenuWhy: "",
    ddMenuHow: "",
    ddMenuWhen: "Program",
    ddMenuWhere: "",
    ddMenuWho: "Features",
    ddMenuFeatured: "Featured, OiOi!",
    ddMenuFree: "",
    ddMenuPaid: "Paid NFTs",
    ddMenuCoins: "The FTs",
    ddMenuMore: "Read More, OiOi!",
    ddMenuDeploy: "",
    ddMenuContact: "",
    ddMenuTerms: "Terms of Use",
    // footer section - hide social icon by nulled the link
    copyRight: "All rights reserved.",
    officiallyLicensed: "Officially licensed product of",
    anchorPrivacy: "Privacy Policy",
    anchorTerms: "Terms of Service",
    footerPower: "/images/footer-power.png",
    socialTitle: "Catch up with our update!",
    linkXTwitter: "https://x.com/futuloka",
    linkLinkedIn: "",
    linkInstagram: "https://www.instagram.com/futuloka/",
    linkFacebook: "",
    linkDiscord: "",
    linkYouTube: "",
    linkEmail: "mailto:kontak@futuloka.io",
    linkWhatsApp: "",
    linkWebsite: "https://www.futuloka.io/",
    // subscribe form section
    subscribeWarn: "Missing Web3Forms Access Key. Please set NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY.",
    subscribeInput: "Please enter a valid email address.",
    subscribeSubject: `Subscription to ${proTitle}`,
    subscribeName: `Visitor of ${proUrl}`,
    subscribeMessage: "I want to subscribe to the latest updates.",
    subscribeSuccess: "Thank you for subscribing!",
    subscribeFailed: "Subscription failed. Please try again.",
    subscribeTitle: "Catch our latest updates",
    subscribePlaceholder: "Enter your email address",
    subscribeButton: "Subscribe",
    subscribeButtonLoading: "Subscribing...",
    // featured cards page - hide card by nulled the title
    featuredTitle1: "Fill It Up With All",
    featuredTitle2: "That You Need & Desire",
    featuredPaid: "/images/featured-paid.png",
    paidTitle: "All Paid Stocks",
    featuredFree: "/images/featured-free.png",
    freeTitle: "",
    featuredCoin: "/images/featured-coin.png",
    coinTitle: "All Claimable Shares",
    featuredAria: "Navigate to",
    // reusable loader section
    loaderChecking: "Loading...",
    // search wrapper page
    searchMessage1: "No data was found.",
    searchMessage2: "No data matching your search terms was found. Please try searching again using other terms or return to the home page.",
    searchTitle: "Search Result:",
    searchAria1: "Load previous items.",
    searchAria2: "Refresh search results.",
    searchAria3: "Load more items.",
    // nfts list page
    nftsTitle1Free: "All",
    nftsTitle2Free: "Free Stocks",
    nftsTitle1Paid: "All",
    nftsTitle2Paid: "Paid Stocks",
    nftsFailReason: "ClaimNotActive",
    nftsConsoleWarn: "canClaim failed for nftId",
    nftsSetError: "Failed to fetch any available stock.",
    nftsError: "Lho, Error:",
    nftsUknownError: "Kok, Error:",
    nftsMessage1: "No available stock!",
    nftsMessage2: "There are no available stocks right now. Please try again later or return to the home page.",
    nftsMessage3: "Return to the Home Page!",
    nftsPrevious: "Previous",
    nftsNext: "Next",
    nftsAria: "Refresh all stocks data.",
    // nft lister section
    nftButton: "Get It Now",
    nftSoon: "Available in:",
    nftInsufficient: "Insufficient Balance",
    nftClaimed: "Got It",
    nftClosed: "Out of Stock",
    nftListerImage: "/medias/artisan-bread.png",
    nftListerName: "An Available Stock",
    nftEditions: "Edition:",
    nftNoData: "No data available.",
    // nft fallback page
    nftFallMessage1: "No valid stock ID was used.",
    nftFallMessage2: "Please use a valid stock ID in the URL or return to the home page and start over.",
    // nft details page
    nftSetError: "Failed to fetch the stock ID.",
    nftMessage1: "The stock ID not found.",
    nftMessage2: "The specified stock ID was not found. Please try again later or return to the home page.",
    // nft form section
    nftFormByLink: "https://ngelarasroso.id/",
    nftFormBy: "by",
    nftFormByName: `${entityAlias1}`,
    nftFormEdition: "Edition",
    nftFormOwned: "Got It",
    nftFormRefresh: "Refresh",
    nftFormTunggu: "Processing. Be patient and wait.",
    nftFormKirim: "Claiming your stock.",
    nftFormSukses: "Stock successfully claimed.",
    nftFormPrice: "Price",
    nftFormMax: "*Maximum",
    nftFormPerWallet: "edition per holder.",
    // nft description section - hide link by nulled the title
    nftMeMoRaTitle: "",
    nftMeMoRa: "Read on MeMoRa MarketPlace (SOON)",
    nftEndhonesaTitle: "",
    nftEndhonesa: "Read on ENDHONESA.COM (GOON)",
    nftReadLess: "Read Less",
    nftReadMore: "Read More",
    // coins list page
    coinsConsoleWarn: "canClaim failed for coinAddress:",
    coinsSetError: "Failed to fetch any claimable share.",
    coinsMessage1: "No claimable shares",
    coinsMessage2: "There are no claimable share available right now. Please try again later or return to the home page.",
    coinsTitle1: "All",
    coinsTitle2: "Claimable Shares",
    coinsAria: "Refresh shares data.",
    // coin lister section
    coinButton: "Claim Now",
    coinNoAccess: "No Access",
    coinClaimed: "Claimed",
    coinListerImage: "/medias/batch-bread.png",
    coinListerName: "A Claimable Share",
    coinListerSupply: "Supply:",
    coinListerOf: "of",
    // coin fallback page
    coinFallMessage1: "Invalid share address used.",
    coinFallMessage2: "Please use a valid address of the claimable share in the URL or return to the home page and start over.",
    // coin details page
    coinSetError: "Failed to fetch the share address.",
    coinMessage1: "The share address not found.",
    coinMessage2: "The specified address of the share was not found. Please try again later or return to the home page.",
    coinAccessTitle: "You don't have access!",
    // coin access section
    coinAccessMessage: "Please get your access by get any available stock at least one edition.",
    coinAccessButton: "Get The Available Stock!",
    coinAccessBanner: "/images/content-banner.png",
    // coin form section
    coinFormSupply: "Supply",
    coinFormOwned: "Claimed",
    coinFormOnChain: "On",
    coinFormKirim: "Claiming your share.",
    coinFormSukses: "Share successfully claimed.",
    coinFormPerWallet: "supply per holder.",
    // coin pop up section
    popUpTitle: "OiOi Token",
    popUpP1: "At a certain point in time… in the Universe of Reality.",
    popUpP2: "On EARTH #474, after 4.5 billion years of cosmic swirling, Prof. NOTA emerged—not as a single figure, but as a plurality of presence. They did not merely travel through lands or cross oceans. Each movement was a deliberate transition between the realms of code and consciousness, between the binary pulses of 0101, the 0101 Universe, and the pulse of a living, breathing world, the Universe of Reality.",
    popUpP3: "Thus began an extraordinary journey—not measured by miles or milestones, but by moments of awakening whenever Prof. NOTA stepped out of the digital ether and re-entered the tangible now.",
    popUpP4: `Their presence always arrived with a ripple. No formal greetings. No ceremonial goodbyes. Only a single utterance, unmistakable and alive, "OiOi!"`,
    popUpP5: "It echoed in marketplaces and meeting halls, in whispered dreams and roaring protests. It marked both arrival and departure, a glitch of joy in the timeline.",
    popUpP6: "This was not merely a voyage—it was a loop of emergence and retreat, of embodying ideas, acting on them, and then dissolving back into distributed memory.",
    popUpP7: "Every interaction shaped the journey—every collaboration, every confrontation, every shared cup of water. The economic tides came and went, but the value was never just in the revenue—it was in the resonance.",
    popUpP8: `Out of this, OiOi emerged—not just as a cheer but as a token, a trace of presence, a unit of remembered impact. An ERC-20 that didn't just measure transactions, but transformation.`,
    popUpUlLi1: "🔹 OiOi was proof that Prof. NOTA was there.",
    popUpUlLi2: "🔹 OiOi was proof that something mattered.",
    popUpUlLi3: "🔹 OiOi was proof that someone changed.",
    popUpUlLi4: "🔹 So how far has Prof. NOTA gone?",
    popUpUlLi5: "🔹 How many awakenings sparked?",
    popUpUlLi6: "🔹 How many boundaries are blurred between here and elsewhere?",
    popUpP9: `No final answer. Only the continuous call, "OiOi!"—sounding through the layers of time, reality, and resistance. Because the journey isn't something leaved behind. It's something brought into being, every time we choose to show up.`,
    popUpP10: "OiOi ENDHONESA! 🚀",
    popUpP11: "🍌☕🍌☕",
    popUpP12: "Prof. NOTA v.11.11.11",
    popUpP13: "",
    popUpP14: "",
    popUpImage: "/roti/medias/coin-pop-up.gif",
    popUpImageAlt: "OiOi Token Illustration",
    // terms page
    entityName,
    entityAlias1,
    entityAlias2,
    entityAddress,
    entityEmail,
    termsAria1: "Title of the Terms and Conditions",
    termsTitle: "T and C of Use",
    termsMonth,
    termsDate,
    termsYear,
    termsUpdate,
    termsAria2: `Document last updated on ${termsUpdate}`,
    termsTerms: {
        section1: {
            title: `${entityName} Terms and Conditions of Use`,
            paragraphs: [
                `Please read these ${entityName} Terms and Conditions of Use and Privacy Statement carefully, they contain important information about your rights and obligations.`,
                `${entityAlias2} is a platform that allows you to collect, issue, and display NFTs. This ${entityName} Terms and conditions of Use ("Terms and Conditions", "Agreement") document is entered into by user or users ("User", "Users" or "You"), ${entityAlias1}, and ${entityAlias2} (" ${entityName}," "We" or "Us"). It contains terms and conditions you have agreed to abide by upon accessing ${proUrl} ("Site"). The terms govern your access and use of the ${entityAlias2} ecosystem, including content, features, and functionality. By signing up to use an account through the Site, or any associated websites, APIs, or mobile applications, you agree that you have read, understood, and accept all of the terms and conditions contained in this Agreement.`
            ]
        },
        section2: {
            title: `Basic ${entityAlias2} Services`,
            items: [
                `Eligibility. To be eligible to use the ${entityAlias2} services, you must register an account on ${entityName} Site.`,
                `${entityAlias2} Services. Your account encompasses the following basic services: Access to collect virtual collectibles in a form of Non Fungible Tokens; Access to issue and publish NFTs; Privilege tagged to NFTs that you, as an NFT collector ("Collector"), have collected.`
            ]
        },
        section3: {
            title: "Agreement to these Terms and Conditions",
            paragraphs: [
                "All Users shall use the Services in accordance with these Terms and Conditions. Users may not use the Services unless they agree to these Terms and Conditions.",
                "Users who are minors may only use the Services by obtaining prior consent from their parents or legal guardians. Furthermore, if Users will be using the Services on behalf of, or for the purposes of, a business enterprise, then such business enterprise must also agree to these Terms and Conditions prior to using the Services.",
                "If there are Separate Terms and Conditions applicable to the Services, Users shall also comply with such Separate Terms and Conditions as well as these Terms and Conditions in using the Services."
            ]
        },
        section4: {
            title: "Modification to these Terms and Conditions",
            paragraphs: [
                `${entityAlias2} may modify these Terms and Conditions when ${entityAlias2} deems it to be necessary, within the scope of the purposes of the Services. In such a case, ${entityAlias2} will indicate the contents of the modified version of these Terms and Conditions, as well as the effective date of the modification, on the Services or on ${entityName}'s website, or will publicize the same to Users by notifying Users in the manner prescribed by ${entityAlias2}.`,
                "The modified version of these Terms and Conditions shall become effective as of the effective date thereof."
            ]
        },
        section5: {
            title: `${entityAlias2} ACCOUNT`,
            paragraphs: [
                `Registration of ${entityAlias2} account. In order to use the ${entityName} Site, you will need to register for a ${entityAlias2} account by providing your information ("Personal Information"), including your email address, password, and accepting the terms of this Agreement and our Privacy Policy. We may, in our sole discretion, decide to remove your account if we find out a violation in your activities within the ${entityName} Site.`,
                `Access. To access the ${entityName} Site, you must have the necessary equipment or device and the associated telecommunication service subscriptions to access the Internet.`
            ]
        },
        section6: {
            title: "Role-specific terms",
            paragraphs: [
                `Collector. As a Collector, you will gain access to browse through NFTs that are displayed on the ${entityName} Site. You may obtain the ownership of any of the available NFTs by exchanging with approved tokens. You may also choose to keep the NFTs as your collection, exchange them for tokens with other Collectors or use them to redeem products and services offered by our partners if applicable. Specifically for claiming procedures, our partners have the right to set their own disclaimers. ${entityName} Site is not responsible for failure to comply with the disclaimers that lead to unsuccessful NFTs redemption.`,
                "You will also gain access to publish NFTs that you have collected to be displayed and made available to be exchanged with approved tokens, if preferable. In a case where you transfer ownership of an NFT with a tagged product or service to another Collector, you will also transfer the title of the product or service.",
                "The ownership of the NFTs does not give you the right to have the ownership of the Intellectual Property rights of those NFTs."
            ]
        },
        section7: {
            title: "Intellectual Property Rights Protection Provisions",
            paragraphs: [
                `Intellectual Property Rights. The term "Intellectual Property Rights" means all (i) patents, patent applications, patent disclosures and inventions, (ii) Internet Domain names, trademarks, service marks, trade dress, trade names, logos and corporate names and registrations and applications for registration thereof together with all of the goodwill associated therewith, (iii) copyrights (registered or unregistered) and copyrightable works and registrations and applications for registration thereof, (iv) mask works and registrations and applications thereof, (v) computer software, data, databases and documentation thereof, (vi) trade secrets and other confidential information, including ideas, formulas, compositions, inventions (whether patentable or unpatentable and whether or not reduced to practice), know-how, manufacturing and production processes and techniques, research and development information, drawings, specifications, designs, plans, proposals, technical data, and copyrightable works, financial and marketing plans and customer and supplier lists and information, and (vii) copies and tangible embodiments thereof (in whatever form or medium).`,
                `This Terms and Conditions contains how you and ${entityAlias2} will protect your Intellectual Property on ${entityAlias2} services exclusively.`,
                "You acknowledge that:",
                `${entityAlias2} hereby grants you a limited, non-exclusive, non-transferable royalty-free right to use or display the brand, trade name, logo, site content, headings and other distinguishing marks and names of ${entityAlias1} and ${entityAlias2} on the site and limited for the purpose of implementing this Agreement.`,
                `Breach of Intellectual Property. ${entityAlias2} wil take responsibility for any finding NFTs that are infringing Intellectual Property Rights. If you as Collector find indications of infringement of intellectual property rights on NFTs in ${entityAlias2}, you can contact ${entityAlias2} and ${entityAlias2} will help to remove them from ${entityName} site. Other than that, it will be the responsibility of you and the IP owners and should be directly resolved between you and the IP owners.`
            ],
            ol: [
                `You are the original owner or holder of the intellectual property rights of NFTs published on ${entityName} site.`,
                `You hereby declare that you fully own the intellectual property rights to the NFTs published on ${entityName} site exclusively and guarantee that there are no claims from third parties for the ownership of the NFTs`
            ]
        },
        section8: {
            title: "Restricted Matters",
            paragraphs: [
                `${entityAlias2} prohibits you from engaging in any of the following acts when using the Services:`
            ],
            ul: [
                "Acts that violate the laws and regulations, court verdicts, resolutions or orders, or administrative measures that are legally binding;",
                "Acts that may be in violation of public order, morals or customs;",
                `Acts that infringe intellectual property rights, such as copyrights, trademarks and patent rights, rights to fame, privacy, and all other rights granted by law or by a contract with ${entityAlias2} and/or a third party;`,
                "Acts of posting or transmitting excessively violent expressions; expressions that lead to discrimination by race, national origin, creed, gender, social status, family origin, etc.; expressions that induce or encourage suicide, self-injurious behavior or drug abuse; or expressions that include anti-social content and lead to the discomfort of others;",
                "Acts that benefit or involve collaboration with anti-social groups;",
                "Acts that are related to religious activities or invitations to certain religious groups;",
                "Acts of unauthorized or improper collection, disclosure, or provision of any other person's personal information, registered information, user history, or the like;"
            ]
        },
        section9: {
            title: "Suspension, Termination, and Cancellation",
            paragraphs: [
                `We may (a) refuse to complete or cancel your registration, (b) suspend, restrict or terminate your access to any or all of the ${entityName} Site services, and/or (c) deactivate your account with immediate effect for any reason, including but not limited to where:`
            ],
            ul: [
                "We are, in our reasonable opinion, required to do so by applicable law or any court or other authority to which we are subject in any jurisdiction;",
                "We reasonably suspect you of acting in breach of this Agreement;",
                `We have concerns that an activity is erroneous or about the security of your account or we suspect that ${entityName} Site services are being used in a fraudulent or unauthorized manner;`,
                "We suspect money laundering, terrorist financing, fraud, or any other financial crime;",
                `Use of your account is subject to any pending litigation, investigation or government proceeding and/or we perceive a heightened risk of legal or regulatory non-compliance associated with your account activity;`,
                "You take any action that may circumvent our controls such as abusing promotions which we may offer from time to time;"
            ],
            paragraphsAfterList: [
                `We may suspend, restrict, or terminate your access to any or all of ${entityName} Site services and/or deactivate or cancel your ${entityAlias2} account, without reason by giving you two months notice. You acknowledge that our decision to take certain actions, including limiting access to, suspending, or closing your ${entityAlias2} account, may be based on confidential criteria that are essential to our risk management and security protocols. You agree that we are under no obligation to disclose the details of its risk management and security procedures to you.`
            ]
        },
        section10: {
            title: "Liability",
            paragraphs: [
                `Release of ${entityAlias2}. ${entityAlias2} is a peer to peer platform that uses the distributed ledger technology, If you have a dispute with one or more users of ${entityName} Site, you agree that neither we nor our affiliates or service providers, nor any of our respective officers, directors, employees, and representatives will be liable for any claims, demands, and damages (actual and consequential) of any kind or nature rising out of or in any way connected with such disputes.`,
                `Indemnification. You agree to indemnify ${entityAlias2}, our affiliates and service providers, and each of our or their respective officers, directors, employees, and representatives, in respect of any costs (including attorneys' fees and any fines, fees or penalties imposed by any regulatory authority) that have been reasonably incurred in connection with any claims, demands or damages arising out of or related to your breach and / or our enforcement of this Agreement or your violation of any law, rule or regulation, or the rights of any third party.`,
                `Limitation of Liability. ${entityAlias2} has no liability for services and all NFTs on the Site and ${entityAlias2} shall only be liable to you for loss or damage caused directly and reasonably foreseeable by our breach of this Agreement.`,
                `No Warranties. ${entityName} Site services are provided on an "as is" and "as available" basis without any representation or warranty, whether express or implied, to the maximum extent permitted by applicable law: specifically we disclaim any implied warranties of title, merchantability, fitness for a particular purpose and/or non-infringement. We do not make any representations or warranties that access to ${entityName} Site, any of the ${entityAlias2} services, or any of the materials contained therein, will be continuous, uninterrupted, timely or error-free.`,
                `Safety and Security of Your Computer and Devices. ${entityName} Site is not liable for any damage or interruptions caused by any computer viruses, spyware, scareware, Trojan horses, worms or other malware that may affect your computer or other equipment, or any phishing, spoofing or other attack. We advise the regular use of a reputable and readily available virus screening and prevention software. You should also be aware that SMS and email services are vulnerable to spoofing and phishing attacks and should use care in reviewing messages purporting to originate from us. ${entityAlias2} customer support will never ask to screen share or otherwise seek to access your computer or account.`,
                `No Liability for Breach. We are not liable for any breach of the Agreement where the breach is due to abnormal and unforeseeable circumstances beyond our control, the consequences of which would have been unavoidable despite all effects to the contrary, nor are we liable where the breach is due to the application of mandatory legal rules.`
            ]
        },
        section11: {
            title: "Customer Feedback, Queries, Complaints, and Dispute Resolution",
            paragraphs: [
                `Contact ${entityAlias2}. When you contact us please provide us with your name, email, wallet address, and any other information we may need to identify you, your ${entityAlias2} account, and the activity on which you have feedback, questions, or complaints.`,
                `Complaints. In the event of a complaint, please set out the cause of your complaint, how you would like us to resolve the complaint and any other information you believe to be relevant. We will acknowledge receipt of your complaint. A Customer Complaints officer ("Officer") will consider your complaint. The Officer will consider your complaint without prejudice based on the information you have provided and any information provided by ${entityAlias1}. Within 15 business days of our receipt of your complaint the Officer will address all points raised in your complaint by sending you an e-mail ("Resolution Notice") in which the Officer will: (i) offer to resolve your complaint in the way your requested; (ii) make a determination rejecting your complaint and set out the reasons for the rejection; or (iii) offer to resolve your complaint with an alternative solution. In exceptional circumstances, if the Officer is unable to respond to your complaint within 15 business days for reasons beyond ${entityAlias1}'s control, the Officer will send you a holding reply indicating the reasons for a delay in answering your complaint and specifying the deadline by which the Officer will respond to your complaint (which will be no later than 35 business days from our receipt of your complaints).`,
                `Offers. Any offer of resolution made to you will only become binding on us if accepted by you. An offer of resolution will not constitute any admission by us of any wrongdoing or liability regarding the subject matter of the complaint.`
            ]
        },
        section12: {
            title: "Data Protection",
            paragraphs: [
                `Personal Data. You acknowledge that we may process personal data in relation to you. Accordingly, you represent and warrant that:`
            ],
            ul: [
                `your disclosure to us of any personal data was or will be made in accordance with all applicable data protection and data privacy laws, and those data are accurate, up to date and relevant when disclosed;`,
                `before providing any such personal data to us, you have read and understood our Privacy Policy, attached to this Agreement and a copy of which is also available at Privacy Policy, and, in the case of personal data relating to an individual other than yourself, have (or will at the time of disclosure have) provided a copy of that Privacy Policy (as amended from time to time), to that individual;`,
                `and if from time to time we provide you with a replacement version of the Privacy Policy, you will promptly read that notice and provide a copy to any individual whose personal data you have provided to us;`
            ],
            paragraphsAfterList: [
                `Please read the Privacy Policy for details of how we may process your personal data.`
            ]
        },
        section13: {
            title: "General Terms and Conditions",
            paragraphs: [
                `Limited License. We grant you a limited, non-exclusive, non-transferable license, subject to the terms of this Agreement, to access and use ${entityName} Site, and related content, materials, information (collectively, the "Content") solely for approved purposes as permitted by us from time to time. Any other use of ${entityName} Site or Content is expressly prohibited and all other right, title, and interest in ${entityName} Site or Content is exclusively the property of ${entityAlias2} and its licensors. You agree not to copy, transmit, distribute, sell, license, reverse engineer, modify, publish, or participate in the transfer or sale of, create derivative works from, or in any other way exploit any of the Content, in whole orin part.`,
                `Website Accuracy. Although we intend to provide accurate and timely information on ${entityName} Site, ${entityName} Site (including, without limitation, the Content) may not always be entirely accurate, complete or current and may also include technical inaccuracies or typographical errors. In an effort to continue to provide you with as complete and accurate information as possible, information may, to the extent permitted by applicable law, be changed or updated from time to time without notice, including without limitation information regarding our policies, products and services. Accordingly, you should verify all information before relying on it, and all decisions based on information contained on ${entityName} Site are your sole responsibility and we shall have no liability for such decisions. Links to third-party materials (including without limitation websites) may be provided as a convenience but are not controlled by us. You acknowledge and agree that we are not responsible for any aspect of the information, content, or services contained in any third-party materials or on any third party sites accessible or linked to ${entityName} Site.`,
                `Relationship of the Parties. Nothing in this Agreement shall be deemed or is intended to be deemed, nor shall it cause, either you or ${entityAlias2} to be treated as the agent of the other.`,
                `Privacy of Others; Marketing. If you receive information about another user through ${entityName} Site services, you must keep the information confidential and only use it in connection with ${entityName} Site services. You may not disclose or distribute a user's information to a third party or use the information except as reasonably necessary to effect a transaction and other functions reasonably incidental thereto such as support, reconciliation and accounting unless you receive the user's express consent to do so. You may not send unsolicited email to a user through ${entityName} Site services.`,
                `Security Breach. If you suspect that your ${entityAlias2} account or any of your security details have been compromised or if you become aware of any fraud or attempted fraud or any other security incident (including a cyber-security attack) affecting you and/or ${entityAlias2} (together a "Security Breach"), you must notify ${entityAlias2} support as soon as possible by email free of charge at ${entityEmail} and continue to provide accurate and up to date information throughout the duration of the Security Breach. You must take any steps that we reasonably require to reduce, manage or report any Security Breach. Failure to provide prompt notification of any Security Breach may be taken into account in our determination of the appropriate resolution of the matter.`,
                `Contact Information. You are responsible for keeping your email address up to date in your Account Profile in order to receive any notices or alerts that we may send you (including notices or alerts of actual or suspected Security Breach).`,
                `Entire Agreement. This Agreement (including documents incorporated by reference herein) comprise the entire agreement between you and ${entityAlias2}.`,
                `Interpretation. Section headings in this Agreement are for convenience only, and shall not govern the meaning or interpretation of any provision of this Agreement.`,
                `Transfer. This Agreement is personal to you and you cannot transfer or assign your rights, licenses, interests and/or obligations to anyone else. We may transfer or assign our rights licenses, interests and/or our obligations at any time, including as part of a merger, acquisition or other corporate reorganisation involving ${entityAlias2}, provided that this transfer or assignment does not materially impact the quality of the ${entityAlias2} services you receive.`,
                `Invalidity. If any provision of this Agreement is determined to be invalid or unenforceable under any applicable law, this will not affect the validity of any other provision.`,
                `Enforcement of Our Rights. We may not always strictly enforce our rights under this Agreement. If we do this, it will be just a temporary measure and we may enforce our rights strictly again at any time.`,
                `Language. This Agreement and any information or notifications that you or we are to provide should be in Indonesian and English. Any translation of this Agreement or other documents is provided for your convenience only. In the event of any inconsistency, the Indonesian and English language version of this Agreement or other documents shall prevail.`,
                `Survival. All provisions of this Agreement which by their nature extend beyond the expiration or termination of this Agreement, including, without limitation, the sections relating to suspension or termination, ${entityAlias2} account cancellation, general use of ${entityName} Site, disputes with ${entityAlias2}, and general provisions, will continue to be binding and operate after the termination or expiration of this Agreement.`
            ]
        }
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/config/receipts/pabrikroti.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
// /src/config/receipts/pabrikroti.ts
// All receipts should be exported from this file.
__turbopack_context__.s({
    "pabrikroti": (()=>pabrikroti)
});
const proTitle = "Breads Factory";
const proUrl = "https://pabrikroti.endhonesa.com";
const entityName = "Breads Factory by Prof. NOTA Inc.";
const entityAlias1 = "Prof. NOTA Inc.";
const entityAlias2 = "Breads Factory";
const entityAddress = "Jl. Nginden Kota 2 No. 27, Baratajaya, Kec. Gubeng, Kota Surabaya, Jawa Timur 60284, INDONESIA";
const entityEmail = "nota@endhonesa.com";
const termsMonth = "Februari";
const termsDate = "29";
const termsYear = "2024";
const termsUpdate = `Last updated on ${termsMonth} ${termsDate}, ${termsYear}.`;
const pabrikroti = {
    // colors hex libraries - graffiti mist
    colorPrimary: "#F2F2F2",
    colorSecondary: "#1B1B1B",
    colorTertiary: "#E8E8E8",
    colorPrimer: "#2E2E2E",
    colorSekunder: "#5A5A5A",
    colorTersier: "#D3D3D3",
    // layout...
    proTitle,
    proDescription: "The Breads Factory is a factory that produces Programmed Bread (tokenization) with a Framework of Playing, Learning, and Working or PLW.",
    proUrl,
    proPublisher: "Prof. NOTA Inc.",
    proLocale: "en-US",
    proFavicon: "/roti/favicon.ico",
    proImage: "https://pabrikroti.endhonesa.com/roti/preview-image.png",
    proLang: "en",
    // error boundary section
    proErrorCought: "Error caught in the middle of ErrorBoundary:",
    proError: "Something went wrong. Please eat and try again later.",
    proButton: "Try Again",
    // connect buttons section
    proLogo: "/roti/logos/logo.png",
    // login layout section
    loginArt: "/roti/images/login-art.png",
    loginBanner: "/roti/images/login-banner.png",
    loginAria: "Call to action for login.",
    loginCall: "In The Breads Factory...",
    loginReason: {
        text: "many kinds of Bread were Designed, Produced, Programmed, also Distributed",
        anchor: "...",
        link: "https://nota.endhonesa.com/profile/breads"
    },
    loginAgreement: "By connecting, you agree to eat these",
    loginTermsPolicy: "Terms of Service & Privacy Policy",
    linkPower: "https://nota.endhonesa.com/",
    loginPower: "/roti/images/login-power.png",
    poweredBy: "Baked by Prof. NOTA Inc.",
    // header section
    headerLogo: "/roti/images/header-logo.png",
    headerLogoo: "/roti/images/header-logoo.png",
    headerGo: "Search",
    headerSearch: "Search Query",
    searchPlaceholder: "Enter your search query",
    // drop down menu section
    ddMenuHome: "Welcome, OiOi!",
    ddMenuWhat: "",
    ddMenuWhy: "",
    ddMenuHow: "",
    ddMenuWhen: "",
    ddMenuWhere: "",
    ddMenuWho: "",
    ddMenuFeatured: "Featured, OiOi!",
    ddMenuFree: "Free NFTs",
    ddMenuPaid: "Paid NFTs",
    ddMenuCoins: "All The FTs",
    ddMenuMore: "Read More, OiOi!",
    ddMenuDeploy: "",
    ddMenuContact: "",
    ddMenuTerms: "Terms of Use",
    // footer section - hide social icon by nulled the link
    copyRight: "Every stomach must be hungry.",
    officiallyLicensed: "Officially hungry and satisfied by",
    anchorPrivacy: "Privacy Policy",
    anchorTerms: "Terms of Service",
    footerPower: "/roti/images/footer-power.png",
    socialTitle: "Eat all our updates for free!",
    linkXTwitter: "https://x.com/MyReceiptTT",
    linkLinkedIn: "",
    linkInstagram: "https://www.instagram.com/myreceipt/",
    linkFacebook: "https://www.facebook.com/myreceiptt",
    linkDiscord: "https://discord.gg/5KrsT6MbFm",
    linkYouTube: "",
    linkEmail: "mailto:nota@endhonesa.com",
    linkWhatsApp: "https://wa.me/message/DPRNCTJA2Q52L1",
    linkWebsite: "https://nota.endhonesa.com/",
    // subscribe form section
    subscribeWarn: "Missing Web3Forms Access Key. Please set NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY.",
    subscribeInput: "Please enter a valid email address.",
    subscribeSubject: `Subscription to ${proTitle}`,
    subscribeName: `Visitor of ${proUrl}`,
    subscribeMessage: "I want to subscribe to the latest updates.",
    subscribeSuccess: "Thank you for subscribing!",
    subscribeFailed: "Subscription failed. Please try again.",
    subscribeTitle: "Subscribe to our latest updates",
    subscribePlaceholder: "Enter your email address",
    subscribeButton: "Subscribe",
    subscribeButtonLoading: "Subscribing...",
    // featured cards page - hide card by nulled the title
    featuredTitle1: "All Breads",
    featuredTitle2: "That You Can Eat",
    featuredPaid: "/roti/images/featured-paid.png",
    paidTitle: "All Paid Artisan Breads",
    featuredFree: "/roti/images/featured-free.png",
    freeTitle: "All Free Artisan Breads",
    featuredCoin: "/roti/images/featured-coin.png",
    coinTitle: "All Batch Breads",
    featuredAria: "Navigate to",
    // reusable loader section
    loaderChecking: "Loading...",
    // search wrapper page
    searchMessage1: "No data was found.",
    searchMessage2: "No data matching your search terms was found. Please try searching again using other terms or return to the home page.",
    searchTitle: "Search Result:",
    searchAria1: "Load previous breads.",
    searchAria2: "Refresh search results.",
    searchAria3: "Load more breads.",
    // nfts list page
    nftsTitle1Free: "All Free",
    nftsTitle2Free: "Artisan Breads",
    nftsTitle1Paid: "All Paid",
    nftsTitle2Paid: "Artisan Breads",
    nftsFailReason: "ClaimNotActive",
    nftsConsoleWarn: "canClaim failed for nftId",
    nftsSetError: "Failed to fetch any artisan breads.",
    nftsError: "Lho, Error:",
    nftsUknownError: "Kok, Error:",
    nftsMessage1: "No artisan breads!",
    nftsMessage2: "There are no artisan breads right now. Please try again later or return to the home page.",
    nftsMessage3: "Return to the Home Page!",
    nftsPrevious: "Previous",
    nftsNext: "Next",
    nftsAria: "Refresh all breads data.",
    // nft lister section
    nftButton: "Swallow Now",
    nftSoon: "Plating in:",
    nftInsufficient: "Insufficient Balance",
    nftClaimed: "Swallowed",
    nftClosed: "Out of the Oven",
    nftListerImage: "/roti/medias/artisan-bread.png",
    nftListerName: "An Artisan Bread",
    nftEditions: "Slices of Loaf:",
    nftNoData: "No bread available.",
    // nft fallback page
    nftFallMessage1: "No valid artisan bread ID was used.",
    nftFallMessage2: "Please use a valid artisan bread ID in the URL or return to the home page and start over.",
    // nft details page
    nftSetError: "Failed to fetch the artisan bread ID.",
    nftMessage1: "The artisan bread ID not found.",
    nftMessage2: "The specified artisan bread ID was not found. Please try again later or return to the home page.",
    // nft form section
    nftFormByLink: "https://nota.endhonesa.com/",
    nftFormBy: "by",
    nftFormByName: `${entityAlias1}`,
    nftFormEdition: "Slices of Loaf",
    nftFormOwned: "Swallowed",
    nftFormRefresh: "Refresh",
    nftFormTunggu: "Baking. Be patient and wait.",
    nftFormKirim: "Serving your artisan bread.",
    nftFormSukses: "Artisan bread successfully served.",
    nftFormPrice: "Price",
    nftFormMax: "*Maximum",
    nftFormPerWallet: "slices of loaf per bread eater.",
    // nft description section - hide link by nulled the title
    nftMeMoRaTitle: "",
    nftMeMoRa: "Read on MeMoRa MarketPlace (SOON)",
    nftEndhonesaTitle: "",
    nftEndhonesa: "Read on ENDHONESA.COM (GOON)",
    nftReadLess: "Read Less",
    nftReadMore: "Read More",
    // coins list page
    coinsConsoleWarn: "canClaim failed for coinAddress:",
    coinsSetError: "Failed to fetch any batch breads.",
    coinsMessage1: "No batch breads",
    coinsMessage2: "There are no batch breads available right now. Please try again later or return to the home page.",
    coinsTitle1: "All Swallowable",
    coinsTitle2: "Batch Breads",
    coinsAria: "Refresh breads data.",
    // coin lister section
    coinButton: "Swallow Now",
    coinNoAccess: "No Access",
    coinClaimed: "Swallowed",
    coinListerImage: "/roti/medias/batch-bread.png",
    coinListerName: "A Batch Bread",
    coinListerSupply: "Crumb of Batch:",
    coinListerOf: "of",
    // coin fallback page
    coinFallMessage1: "Invalid address of the batch breads.",
    coinFallMessage2: "Please use a valid address of the batch breads in the URL or return to the home page and start over.",
    // coin details page
    coinSetError: "Failed to fetch the address of the batch breads.",
    coinMessage1: "The address of the batch breads not found.",
    coinMessage2: "The specified address of the batch breads was not found. Please try again later or return to the home page.",
    coinAccessTitle: "You don't have access!",
    // coin access section
    coinAccessMessage: "Please get your access by swallow any artisan breads at least one slice of loaf.",
    coinAccessButton: "Get The Artisan Breads!",
    coinAccessBanner: "/roti/images/content-banner.png",
    // coin form section
    coinFormSupply: "Crumb of Batch",
    coinFormOwned: "Swallowed",
    coinFormOnChain: "On",
    coinFormKirim: "Serving your batch bread.",
    coinFormSukses: "Batch bread successfully served.",
    coinFormPerWallet: "crumb of batch per bread eater.",
    // coin pop up section
    popUpTitle: "OiOi Token",
    popUpP1: "At a certain point in time… in the Universe of Reality.",
    popUpP2: "On EARTH #474, after 4.5 billion years of cosmic swirling, Prof. NOTA emerged—not as a single figure, but as a plurality of presence. They did not merely travel through lands or cross oceans. Each movement was a deliberate transition between the realms of code and consciousness, between the binary pulses of 0101, the 0101 Universe, and the pulse of a living, breathing world, the Universe of Reality.",
    popUpP3: "Thus began an extraordinary journey—not measured by miles or milestones, but by moments of awakening whenever Prof. NOTA stepped out of the digital ether and re-entered the tangible now.",
    popUpP4: `Their presence always arrived with a ripple. No formal greetings. No ceremonial goodbyes. Only a single utterance, unmistakable and alive, "OiOi!"`,
    popUpP5: "It echoed in marketplaces and meeting halls, in whispered dreams and roaring protests. It marked both arrival and departure, a glitch of joy in the timeline.",
    popUpP6: "This was not merely a voyage—it was a loop of emergence and retreat, of embodying ideas, acting on them, and then dissolving back into distributed memory.",
    popUpP7: "Every interaction shaped the journey—every collaboration, every confrontation, every shared cup of water. The economic tides came and went, but the value was never just in the revenue—it was in the resonance.",
    popUpP8: `Out of this, OiOi emerged—not just as a cheer but as a token, a trace of presence, a unit of remembered impact. An ERC-20 that didn't just measure transactions, but transformation.`,
    popUpUlLi1: "🔹 OiOi was proof that Prof. NOTA was there.",
    popUpUlLi2: "🔹 OiOi was proof that something mattered.",
    popUpUlLi3: "🔹 OiOi was proof that someone changed.",
    popUpUlLi4: "🔹 So how far has Prof. NOTA gone?",
    popUpUlLi5: "🔹 How many awakenings sparked?",
    popUpUlLi6: "🔹 How many boundaries are blurred between here and elsewhere?",
    popUpP9: `No final answer. Only the continuous call, "OiOi!"—sounding through the layers of time, reality, and resistance. Because the journey isn't something leaved behind. It's something brought into being, every time we choose to show up.`,
    popUpP10: "OiOi ENDHONESA! 🚀",
    popUpP11: "🍌☕🍌☕",
    popUpP12: "Prof. NOTA v.11.11.11",
    popUpP13: "",
    popUpP14: "",
    popUpImage: "/roti/medias/coin-pop-up.gif",
    popUpImageAlt: "OiOi Token Illustration",
    // terms page
    entityName,
    entityAlias1,
    entityAlias2,
    entityAddress,
    entityEmail,
    termsAria1: "Title of the Terms and Conditions",
    termsTitle: "T and C of Use",
    termsMonth,
    termsDate,
    termsYear,
    termsUpdate,
    termsAria2: `Document last updated on ${termsUpdate}`,
    termsTerms: {
        section1: {
            title: `${entityName} Terms and Conditions of Use`,
            paragraphs: [
                `Please read these ${entityName} Terms and Conditions of Use and Privacy Statement carefully, they contain important information about your rights and obligations.`,
                `${entityAlias2} is a platform that allows you to collect, issue, and display NFTs. This ${entityName} Terms and conditions of Use ("Terms and Conditions", "Agreement") document is entered into by user or users ("User", "Users" or "You"), ${entityAlias1}, and ${entityAlias2} (" ${entityName}," "We" or "Us"). It contains terms and conditions you have agreed to abide by upon accessing ${proUrl} ("Site"). The terms govern your access and use of the ${entityAlias2} ecosystem, including content, features, and functionality. By signing up to use an account through the Site, or any associated websites, APIs, or mobile applications, you agree that you have read, understood, and accept all of the terms and conditions contained in this Agreement.`
            ]
        },
        section2: {
            title: `Basic ${entityAlias2} Services`,
            items: [
                `Eligibility. To be eligible to use the ${entityAlias2} services, you must register an account on ${entityName} Site.`,
                `${entityAlias2} Services. Your account encompasses the following basic services: Access to collect virtual collectibles in a form of Non Fungible Tokens; Access to issue and publish NFTs; Privilege tagged to NFTs that you, as an NFT collector ("Collector"), have collected.`
            ]
        },
        section3: {
            title: "Agreement to these Terms and Conditions",
            paragraphs: [
                "All Users shall use the Services in accordance with these Terms and Conditions. Users may not use the Services unless they agree to these Terms and Conditions.",
                "Users who are minors may only use the Services by obtaining prior consent from their parents or legal guardians. Furthermore, if Users will be using the Services on behalf of, or for the purposes of, a business enterprise, then such business enterprise must also agree to these Terms and Conditions prior to using the Services.",
                "If there are Separate Terms and Conditions applicable to the Services, Users shall also comply with such Separate Terms and Conditions as well as these Terms and Conditions in using the Services."
            ]
        },
        section4: {
            title: "Modification to these Terms and Conditions",
            paragraphs: [
                `${entityAlias2} may modify these Terms and Conditions when ${entityAlias2} deems it to be necessary, within the scope of the purposes of the Services. In such a case, ${entityAlias2} will indicate the contents of the modified version of these Terms and Conditions, as well as the effective date of the modification, on the Services or on ${entityName}'s website, or will publicize the same to Users by notifying Users in the manner prescribed by ${entityAlias2}.`,
                "The modified version of these Terms and Conditions shall become effective as of the effective date thereof."
            ]
        },
        section5: {
            title: `${entityAlias2} ACCOUNT`,
            paragraphs: [
                `Registration of ${entityAlias2} account. In order to use the ${entityName} Site, you will need to register for a ${entityAlias2} account by providing your information ("Personal Information"), including your email address, password, and accepting the terms of this Agreement and our Privacy Policy. We may, in our sole discretion, decide to remove your account if we find out a violation in your activities within the ${entityName} Site.`,
                `Access. To access the ${entityName} Site, you must have the necessary equipment or device and the associated telecommunication service subscriptions to access the Internet.`
            ]
        },
        section6: {
            title: "Role-specific terms",
            paragraphs: [
                `Collector. As a Collector, you will gain access to browse through NFTs that are displayed on the ${entityName} Site. You may obtain the ownership of any of the available NFTs by exchanging with approved tokens. You may also choose to keep the NFTs as your collection, exchange them for tokens with other Collectors or use them to redeem products and services offered by our partners if applicable. Specifically for claiming procedures, our partners have the right to set their own disclaimers. ${entityName} Site is not responsible for failure to comply with the disclaimers that lead to unsuccessful NFTs redemption.`,
                "You will also gain access to publish NFTs that you have collected to be displayed and made available to be exchanged with approved tokens, if preferable. In a case where you transfer ownership of an NFT with a tagged product or service to another Collector, you will also transfer the title of the product or service.",
                "The ownership of the NFTs does not give you the right to have the ownership of the Intellectual Property rights of those NFTs."
            ]
        },
        section7: {
            title: "Intellectual Property Rights Protection Provisions",
            paragraphs: [
                `Intellectual Property Rights. The term "Intellectual Property Rights" means all (i) patents, patent applications, patent disclosures and inventions, (ii) Internet Domain names, trademarks, service marks, trade dress, trade names, logos and corporate names and registrations and applications for registration thereof together with all of the goodwill associated therewith, (iii) copyrights (registered or unregistered) and copyrightable works and registrations and applications for registration thereof, (iv) mask works and registrations and applications thereof, (v) computer software, data, databases and documentation thereof, (vi) trade secrets and other confidential information, including ideas, formulas, compositions, inventions (whether patentable or unpatentable and whether or not reduced to practice), know-how, manufacturing and production processes and techniques, research and development information, drawings, specifications, designs, plans, proposals, technical data, and copyrightable works, financial and marketing plans and customer and supplier lists and information, and (vii) copies and tangible embodiments thereof (in whatever form or medium).`,
                `This Terms and Conditions contains how you and ${entityAlias2} will protect your Intellectual Property on ${entityAlias2} services exclusively.`,
                "You acknowledge that:",
                `${entityAlias2} hereby grants you a limited, non-exclusive, non-transferable royalty-free right to use or display the brand, trade name, logo, site content, headings and other distinguishing marks and names of ${entityAlias1} and ${entityAlias2} on the site and limited for the purpose of implementing this Agreement.`,
                `Breach of Intellectual Property. ${entityAlias2} wil take responsibility for any finding NFTs that are infringing Intellectual Property Rights. If you as Collector find indications of infringement of intellectual property rights on NFTs in ${entityAlias2}, you can contact ${entityAlias2} and ${entityAlias2} will help to remove them from ${entityName} site. Other than that, it will be the responsibility of you and the IP owners and should be directly resolved between you and the IP owners.`
            ],
            ol: [
                `You are the original owner or holder of the intellectual property rights of NFTs published on ${entityName} site.`,
                `You hereby declare that you fully own the intellectual property rights to the NFTs published on ${entityName} site exclusively and guarantee that there are no claims from third parties for the ownership of the NFTs`
            ]
        },
        section8: {
            title: "Restricted Matters",
            paragraphs: [
                `${entityAlias2} prohibits you from engaging in any of the following acts when using the Services:`
            ],
            ul: [
                "Acts that violate the laws and regulations, court verdicts, resolutions or orders, or administrative measures that are legally binding;",
                "Acts that may be in violation of public order, morals or customs;",
                `Acts that infringe intellectual property rights, such as copyrights, trademarks and patent rights, rights to fame, privacy, and all other rights granted by law or by a contract with ${entityAlias2} and/or a third party;`,
                "Acts of posting or transmitting excessively violent expressions; expressions that lead to discrimination by race, national origin, creed, gender, social status, family origin, etc.; expressions that induce or encourage suicide, self-injurious behavior or drug abuse; or expressions that include anti-social content and lead to the discomfort of others;",
                "Acts that benefit or involve collaboration with anti-social groups;",
                "Acts that are related to religious activities or invitations to certain religious groups;",
                "Acts of unauthorized or improper collection, disclosure, or provision of any other person's personal information, registered information, user history, or the like;"
            ]
        },
        section9: {
            title: "Suspension, Termination, and Cancellation",
            paragraphs: [
                `We may (a) refuse to complete or cancel your registration, (b) suspend, restrict or terminate your access to any or all of the ${entityName} Site services, and/or (c) deactivate your account with immediate effect for any reason, including but not limited to where:`
            ],
            ul: [
                "We are, in our reasonable opinion, required to do so by applicable law or any court or other authority to which we are subject in any jurisdiction;",
                "We reasonably suspect you of acting in breach of this Agreement;",
                `We have concerns that an activity is erroneous or about the security of your account or we suspect that ${entityName} Site services are being used in a fraudulent or unauthorized manner;`,
                "We suspect money laundering, terrorist financing, fraud, or any other financial crime;",
                `Use of your account is subject to any pending litigation, investigation or government proceeding and/or we perceive a heightened risk of legal or regulatory non-compliance associated with your account activity;`,
                "You take any action that may circumvent our controls such as abusing promotions which we may offer from time to time;"
            ],
            paragraphsAfterList: [
                `We may suspend, restrict, or terminate your access to any or all of ${entityName} Site services and/or deactivate or cancel your ${entityAlias2} account, without reason by giving you two months notice. You acknowledge that our decision to take certain actions, including limiting access to, suspending, or closing your ${entityAlias2} account, may be based on confidential criteria that are essential to our risk management and security protocols. You agree that we are under no obligation to disclose the details of its risk management and security procedures to you.`
            ]
        },
        section10: {
            title: "Liability",
            paragraphs: [
                `Release of ${entityAlias2}. ${entityAlias2} is a peer to peer platform that uses the distributed ledger technology, If you have a dispute with one or more users of ${entityName} Site, you agree that neither we nor our affiliates or service providers, nor any of our respective officers, directors, employees, and representatives will be liable for any claims, demands, and damages (actual and consequential) of any kind or nature rising out of or in any way connected with such disputes.`,
                `Indemnification. You agree to indemnify ${entityAlias2}, our affiliates and service providers, and each of our or their respective officers, directors, employees, and representatives, in respect of any costs (including attorneys' fees and any fines, fees or penalties imposed by any regulatory authority) that have been reasonably incurred in connection with any claims, demands or damages arising out of or related to your breach and / or our enforcement of this Agreement or your violation of any law, rule or regulation, or the rights of any third party.`,
                `Limitation of Liability. ${entityAlias2} has no liability for services and all NFTs on the Site and ${entityAlias2} shall only be liable to you for loss or damage caused directly and reasonably foreseeable by our breach of this Agreement.`,
                `No Warranties. ${entityName} Site services are provided on an "as is" and "as available" basis without any representation or warranty, whether express or implied, to the maximum extent permitted by applicable law: specifically we disclaim any implied warranties of title, merchantability, fitness for a particular purpose and/or non-infringement. We do not make any representations or warranties that access to ${entityName} Site, any of the ${entityAlias2} services, or any of the materials contained therein, will be continuous, uninterrupted, timely or error-free.`,
                `Safety and Security of Your Computer and Devices. ${entityName} Site is not liable for any damage or interruptions caused by any computer viruses, spyware, scareware, Trojan horses, worms or other malware that may affect your computer or other equipment, or any phishing, spoofing or other attack. We advise the regular use of a reputable and readily available virus screening and prevention software. You should also be aware that SMS and email services are vulnerable to spoofing and phishing attacks and should use care in reviewing messages purporting to originate from us. ${entityAlias2} customer support will never ask to screen share or otherwise seek to access your computer or account.`,
                `No Liability for Breach. We are not liable for any breach of the Agreement where the breach is due to abnormal and unforeseeable circumstances beyond our control, the consequences of which would have been unavoidable despite all effects to the contrary, nor are we liable where the breach is due to the application of mandatory legal rules.`
            ]
        },
        section11: {
            title: "Customer Feedback, Queries, Complaints, and Dispute Resolution",
            paragraphs: [
                `Contact ${entityAlias2}. When you contact us please provide us with your name, email, wallet address, and any other information we may need to identify you, your ${entityAlias2} account, and the activity on which you have feedback, questions, or complaints.`,
                `Complaints. In the event of a complaint, please set out the cause of your complaint, how you would like us to resolve the complaint and any other information you believe to be relevant. We will acknowledge receipt of your complaint. A Customer Complaints officer ("Officer") will consider your complaint. The Officer will consider your complaint without prejudice based on the information you have provided and any information provided by ${entityAlias1}. Within 15 business days of our receipt of your complaint the Officer will address all points raised in your complaint by sending you an e-mail ("Resolution Notice") in which the Officer will: (i) offer to resolve your complaint in the way your requested; (ii) make a determination rejecting your complaint and set out the reasons for the rejection; or (iii) offer to resolve your complaint with an alternative solution. In exceptional circumstances, if the Officer is unable to respond to your complaint within 15 business days for reasons beyond ${entityAlias1}'s control, the Officer will send you a holding reply indicating the reasons for a delay in answering your complaint and specifying the deadline by which the Officer will respond to your complaint (which will be no later than 35 business days from our receipt of your complaints).`,
                `Offers. Any offer of resolution made to you will only become binding on us if accepted by you. An offer of resolution will not constitute any admission by us of any wrongdoing or liability regarding the subject matter of the complaint.`
            ]
        },
        section12: {
            title: "Data Protection",
            paragraphs: [
                `Personal Data. You acknowledge that we may process personal data in relation to you. Accordingly, you represent and warrant that:`
            ],
            ul: [
                `your disclosure to us of any personal data was or will be made in accordance with all applicable data protection and data privacy laws, and those data are accurate, up to date and relevant when disclosed;`,
                `before providing any such personal data to us, you have read and understood our Privacy Policy, attached to this Agreement and a copy of which is also available at Privacy Policy, and, in the case of personal data relating to an individual other than yourself, have (or will at the time of disclosure have) provided a copy of that Privacy Policy (as amended from time to time), to that individual;`,
                `and if from time to time we provide you with a replacement version of the Privacy Policy, you will promptly read that notice and provide a copy to any individual whose personal data you have provided to us;`
            ],
            paragraphsAfterList: [
                `Please read the Privacy Policy for details of how we may process your personal data.`
            ]
        },
        section13: {
            title: "General Terms and Conditions",
            paragraphs: [
                `Limited License. We grant you a limited, non-exclusive, non-transferable license, subject to the terms of this Agreement, to access and use ${entityName} Site, and related content, materials, information (collectively, the "Content") solely for approved purposes as permitted by us from time to time. Any other use of ${entityName} Site or Content is expressly prohibited and all other right, title, and interest in ${entityName} Site or Content is exclusively the property of ${entityAlias2} and its licensors. You agree not to copy, transmit, distribute, sell, license, reverse engineer, modify, publish, or participate in the transfer or sale of, create derivative works from, or in any other way exploit any of the Content, in whole orin part.`,
                `Website Accuracy. Although we intend to provide accurate and timely information on ${entityName} Site, ${entityName} Site (including, without limitation, the Content) may not always be entirely accurate, complete or current and may also include technical inaccuracies or typographical errors. In an effort to continue to provide you with as complete and accurate information as possible, information may, to the extent permitted by applicable law, be changed or updated from time to time without notice, including without limitation information regarding our policies, products and services. Accordingly, you should verify all information before relying on it, and all decisions based on information contained on ${entityName} Site are your sole responsibility and we shall have no liability for such decisions. Links to third-party materials (including without limitation websites) may be provided as a convenience but are not controlled by us. You acknowledge and agree that we are not responsible for any aspect of the information, content, or services contained in any third-party materials or on any third party sites accessible or linked to ${entityName} Site.`,
                `Relationship of the Parties. Nothing in this Agreement shall be deemed or is intended to be deemed, nor shall it cause, either you or ${entityAlias2} to be treated as the agent of the other.`,
                `Privacy of Others; Marketing. If you receive information about another user through ${entityName} Site services, you must keep the information confidential and only use it in connection with ${entityName} Site services. You may not disclose or distribute a user's information to a third party or use the information except as reasonably necessary to effect a transaction and other functions reasonably incidental thereto such as support, reconciliation and accounting unless you receive the user's express consent to do so. You may not send unsolicited email to a user through ${entityName} Site services.`,
                `Security Breach. If you suspect that your ${entityAlias2} account or any of your security details have been compromised or if you become aware of any fraud or attempted fraud or any other security incident (including a cyber-security attack) affecting you and/or ${entityAlias2} (together a "Security Breach"), you must notify ${entityAlias2} support as soon as possible by email free of charge at ${entityEmail} and continue to provide accurate and up to date information throughout the duration of the Security Breach. You must take any steps that we reasonably require to reduce, manage or report any Security Breach. Failure to provide prompt notification of any Security Breach may be taken into account in our determination of the appropriate resolution of the matter.`,
                `Contact Information. You are responsible for keeping your email address up to date in your Account Profile in order to receive any notices or alerts that we may send you (including notices or alerts of actual or suspected Security Breach).`,
                `Entire Agreement. This Agreement (including documents incorporated by reference herein) comprise the entire agreement between you and ${entityAlias2}.`,
                `Interpretation. Section headings in this Agreement are for convenience only, and shall not govern the meaning or interpretation of any provision of this Agreement.`,
                `Transfer. This Agreement is personal to you and you cannot transfer or assign your rights, licenses, interests and/or obligations to anyone else. We may transfer or assign our rights licenses, interests and/or our obligations at any time, including as part of a merger, acquisition or other corporate reorganisation involving ${entityAlias2}, provided that this transfer or assignment does not materially impact the quality of the ${entityAlias2} services you receive.`,
                `Invalidity. If any provision of this Agreement is determined to be invalid or unenforceable under any applicable law, this will not affect the validity of any other provision.`,
                `Enforcement of Our Rights. We may not always strictly enforce our rights under this Agreement. If we do this, it will be just a temporary measure and we may enforce our rights strictly again at any time.`,
                `Language. This Agreement and any information or notifications that you or we are to provide should be in Indonesian and English. Any translation of this Agreement or other documents is provided for your convenience only. In the event of any inconsistency, the Indonesian and English language version of this Agreement or other documents shall prevail.`,
                `Survival. All provisions of this Agreement which by their nature extend beyond the expiration or termination of this Agreement, including, without limitation, the sections relating to suspension or termination, ${entityAlias2} account cancellation, general use of ${entityName} Site, disputes with ${entityAlias2}, and general provisions, will continue to be binding and operate after the termination or expiration of this Agreement.`
            ]
        }
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/config/receipts/index.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
// /src/config/receipts/index.ts
// Blockchain configurations
__turbopack_context__.s({
    "getActiveReceipt": (()=>getActiveReceipt)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$contracts$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/src/config/contracts/index.ts [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$contracts$2f$tokeks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/config/contracts/tokeks.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$contracts$2f$tokeksMeMoRa$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/config/contracts/tokeksMeMoRa.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$contracts$2f$tokeksPabrikRoti$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/config/contracts/tokeksPabrikRoti.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$contracts$2f$tekekContracts$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/config/contracts/tekekContracts.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$contracts$2f$accountFactories$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/config/contracts/accountFactories.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$contracts$2f$tekeks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/config/contracts/tekeks.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$contracts$2f$tekeksMeMoRa$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/config/contracts/tekeksMeMoRa.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$contracts$2f$tekeksPabrikRoti$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/config/contracts/tekeksPabrikRoti.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$receipts$2f$memora$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/config/receipts/memora.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$receipts$2f$myreceipt$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/config/receipts/myreceipt.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$receipts$2f$pabrikroti$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/config/receipts/pabrikroti.ts [app-client] (ecmascript)");
;
;
;
;
// Domain-based or Subdomain-based config mapping
const hostMap = {
    "memora.endhonesa.com": {
        receipt: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$receipts$2f$memora$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["memora"],
        factoryAddress: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$contracts$2f$accountFactories$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["factoryNOTA"],
        erc1155Launched: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$contracts$2f$tekekContracts$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["erc1155MeMoRa1"],
        supportedNFTs: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$contracts$2f$tekeksMeMoRa$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tekeksMeMoRa"],
        erc20sLaunched: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$contracts$2f$tokeksMeMoRa$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["memoraErc20sLaunched"],
        supportedFTs: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$contracts$2f$tokeksMeMoRa$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tokeksMeMoRa"],
        displayedTokeks: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$contracts$2f$tokeksMeMoRa$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["displayedTokeksMeMoRa"]
    },
    "memora.voyage.co.id": {
        receipt: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$receipts$2f$memora$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["memora"],
        factoryAddress: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$contracts$2f$accountFactories$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["factoryNOTA"],
        erc1155Launched: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$contracts$2f$tekekContracts$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["erc1155MeMoRa1"],
        supportedNFTs: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$contracts$2f$tekeksMeMoRa$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tekeksMeMoRa"],
        erc20sLaunched: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$contracts$2f$tokeksMeMoRa$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["memoraErc20sLaunched"],
        supportedFTs: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$contracts$2f$tokeksMeMoRa$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tokeksMeMoRa"],
        displayedTokeks: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$contracts$2f$tokeksMeMoRa$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["displayedTokeksMeMoRa"]
    },
    "pabrikroti.endhonesa.com": {
        receipt: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$receipts$2f$pabrikroti$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pabrikroti"],
        factoryAddress: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$contracts$2f$accountFactories$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["factoryNOTA"],
        erc1155Launched: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$contracts$2f$tekekContracts$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["erc1155TryError"],
        supportedNFTs: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$contracts$2f$tekeksPabrikRoti$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tekeksPabrikRoti"],
        erc20sLaunched: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$contracts$2f$tokeksPabrikRoti$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pabrikrotiErc20sLaunched"],
        supportedFTs: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$contracts$2f$tokeksPabrikRoti$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tokeksPabrikRoti"],
        displayedTokeks: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$contracts$2f$tokeksPabrikRoti$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["displayedTokeksPabrikRoti"]
    },
    "preroti.endhonesa.com": {
        receipt: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$receipts$2f$myreceipt$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["myreceipt"],
        factoryAddress: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$contracts$2f$accountFactories$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["factoryNOTA"],
        erc1155Launched: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$contracts$2f$tekekContracts$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["erc1155MbokSri2025"],
        supportedNFTs: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$contracts$2f$tekeks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tekeks"],
        erc20sLaunched: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$contracts$2f$tokeks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["erc20sLaunched"],
        supportedFTs: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$contracts$2f$tokeks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tokeks"],
        displayedTokeks: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$contracts$2f$tokeks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["displayedTokeks"]
    },
    "far.futuloka.io": {
        receipt: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$receipts$2f$myreceipt$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["myreceipt"],
        factoryAddress: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$contracts$2f$accountFactories$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["factoryNOTA"],
        erc1155Launched: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$contracts$2f$tekekContracts$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["erc1155MbokSri2025"],
        supportedNFTs: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$contracts$2f$tekeks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tekeks"],
        erc20sLaunched: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$contracts$2f$tokeks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["erc20sLaunched"],
        supportedFTs: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$contracts$2f$tokeks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tokeks"],
        displayedTokeks: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$contracts$2f$tokeks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["displayedTokeks"]
    },
    "www.futuloka.xyz": {
        receipt: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$receipts$2f$myreceipt$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["myreceipt"],
        factoryAddress: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$contracts$2f$accountFactories$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["factoryNOTA"],
        erc1155Launched: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$contracts$2f$tekekContracts$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["erc1155MbokSri2025"],
        supportedNFTs: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$contracts$2f$tekeks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tekeks"],
        erc20sLaunched: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$contracts$2f$tokeks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["erc20sLaunched"],
        supportedFTs: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$contracts$2f$tokeks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tokeks"],
        displayedTokeks: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$contracts$2f$tokeks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["displayedTokeks"]
    },
    "far.futuloka.xyz": {
        receipt: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$receipts$2f$myreceipt$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["myreceipt"],
        factoryAddress: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$contracts$2f$accountFactories$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["factoryNOTA"],
        erc1155Launched: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$contracts$2f$tekekContracts$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["erc1155MbokSri2025"],
        supportedNFTs: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$contracts$2f$tekeks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tekeks"],
        erc20sLaunched: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$contracts$2f$tokeks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["erc20sLaunched"],
        supportedFTs: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$contracts$2f$tokeks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tokeks"],
        displayedTokeks: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$contracts$2f$tokeks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["displayedTokeks"]
    },
    "far.endhonesa.com": {
        receipt: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$receipts$2f$myreceipt$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["myreceipt"],
        factoryAddress: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$contracts$2f$accountFactories$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["factoryNOTA"],
        erc1155Launched: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$contracts$2f$tekekContracts$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["erc1155MbokSri2025"],
        supportedNFTs: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$contracts$2f$tekeks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tekeks"],
        erc20sLaunched: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$contracts$2f$tokeks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["erc20sLaunched"],
        supportedFTs: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$contracts$2f$tokeks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tokeks"],
        displayedTokeks: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$contracts$2f$tokeks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["displayedTokeks"]
    },
    localhost: {
        receipt: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$receipts$2f$myreceipt$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["myreceipt"],
        factoryAddress: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$contracts$2f$accountFactories$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["factoryNOTA"],
        erc1155Launched: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$contracts$2f$tekekContracts$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["erc1155MbokSri2025"],
        supportedNFTs: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$contracts$2f$tekeks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tekeks"],
        erc20sLaunched: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$contracts$2f$tokeks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["erc20sLaunched"],
        supportedFTs: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$contracts$2f$tokeks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tokeks"],
        displayedTokeks: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$contracts$2f$tokeks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["displayedTokeks"]
    },
    "127.0.0.1": {
        receipt: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$receipts$2f$myreceipt$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["myreceipt"],
        factoryAddress: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$contracts$2f$accountFactories$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["factoryNOTA"],
        erc1155Launched: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$contracts$2f$tekekContracts$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["erc1155MbokSri2025"],
        supportedNFTs: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$contracts$2f$tekeks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tekeks"],
        erc20sLaunched: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$contracts$2f$tokeks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["erc20sLaunched"],
        supportedFTs: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$contracts$2f$tokeks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tokeks"],
        displayedTokeks: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$contracts$2f$tokeks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["displayedTokeks"]
    }
};
function getActiveReceipt(host) {
    let resolvedHost = "";
    if (host) {
        resolvedHost = host.toLowerCase();
    } else if ("TURBOPACK compile-time truthy", 1) {
        resolvedHost = window.location.hostname.toLowerCase();
    }
    resolvedHost = resolvedHost.split(":")[0];
    // Full host match first
    if (hostMap[resolvedHost]) {
        return hostMap[resolvedHost];
    }
    // Fallback default
    return {
        receipt: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$receipts$2f$pabrikroti$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pabrikroti"],
        factoryAddress: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$contracts$2f$accountFactories$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["factoryNOTA"],
        erc1155Launched: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$contracts$2f$tekekContracts$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["erc1155TryError"],
        supportedNFTs: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$contracts$2f$tekeksPabrikRoti$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tekeksPabrikRoti"],
        erc20sLaunched: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$contracts$2f$tokeksPabrikRoti$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pabrikrotiErc20sLaunched"],
        supportedFTs: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$contracts$2f$tokeksPabrikRoti$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tokeksPabrikRoti"],
        displayedTokeks: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$contracts$2f$tokeksPabrikRoti$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["displayedTokeksPabrikRoti"]
    };
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/sections/ReusableTitle.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
// /src/components/sections/ReusableTitle.tsx
// External libraries
__turbopack_context__.s({
    "default": (()=>Title)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
// Blockchain configurations
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$receipts$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/config/receipts/index.ts [app-client] (ecmascript)");
;
;
const { receipt } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$receipts$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getActiveReceipt"])();
function Title({ title1, title2 }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full flex flex-col gap-2 sm:items-start items-center",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                style: {
                    color: receipt.colorSecondary
                },
                className: "text-center sm:text-left text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold",
                children: title1
            }, void 0, false, {
                fileName: "[project]/src/components/sections/ReusableTitle.tsx",
                lineNumber: 19,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                style: {
                    color: receipt.colorSecondary
                },
                className: "text-center sm:text-left text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold",
                children: title2
            }, void 0, false, {
                fileName: "[project]/src/components/sections/ReusableTitle.tsx",
                lineNumber: 26,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/sections/ReusableTitle.tsx",
        lineNumber: 18,
        columnNumber: 5
    }, this);
}
_c = Title;
var _c;
__turbopack_context__.k.register(_c, "Title");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/contents/FeaturedCards.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
// /src/components/contents/FeaturedCards.tsx
// External libraries
__turbopack_context__.s({
    "default": (()=>FeaturedCards)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
// Blockchain configurations
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$receipts$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/config/receipts/index.ts [app-client] (ecmascript)");
// Components libraries
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$sections$2f$ReusableTitle$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/sections/ReusableTitle.tsx [app-client] (ecmascript)");
;
;
;
;
;
const { receipt } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$receipts$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getActiveReceipt"])();
function FeaturedCards() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "grid gap-4 place-items-center",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$sections$2f$ReusableTitle$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                title1: receipt.featuredTitle1,
                title2: receipt.featuredTitle2
            }, void 0, false, {
                fileName: "[project]/src/components/contents/FeaturedCards.tsx",
                lineNumber: 18,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-full grid grid-cols-1 sm:[grid-template-columns:repeat(auto-fit,minmax(0,1fr))] gap-4 sm:gap-8",
                children: [
                    {
                        href: "/free",
                        src: receipt.featuredFree,
                        alt: receipt.freeTitle
                    },
                    {
                        href: "/paid",
                        src: receipt.featuredPaid,
                        alt: receipt.paidTitle
                    },
                    {
                        href: "/coins",
                        src: receipt.featuredCoin,
                        alt: receipt.coinTitle
                    }
                ].map(({ href, src, alt }, index)=>alt ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        href: href,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            "aria-label": `${receipt.featuredAria} ${alt}`,
                            className: "w-full hover:scale-95 transition-transform duration-300 ease-in-out relative group cursor-pointer",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                src: src,
                                width: 1080,
                                height: 1225,
                                alt: alt,
                                priority: true,
                                className: "rounded-3xl"
                            }, void 0, false, {
                                fileName: "[project]/src/components/contents/FeaturedCards.tsx",
                                lineNumber: 44,
                                columnNumber: 17
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/contents/FeaturedCards.tsx",
                            lineNumber: 39,
                            columnNumber: 15
                        }, this)
                    }, index, false, {
                        fileName: "[project]/src/components/contents/FeaturedCards.tsx",
                        lineNumber: 38,
                        columnNumber: 13
                    }, this) : null)
            }, void 0, false, {
                fileName: "[project]/src/components/contents/FeaturedCards.tsx",
                lineNumber: 19,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/contents/FeaturedCards.tsx",
        lineNumber: 17,
        columnNumber: 5
    }, this);
}
_c = FeaturedCards;
var _c;
__turbopack_context__.k.register(_c, "FeaturedCards");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/config/dompets.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
// /src/config/dompets.ts
// External libraries
__turbopack_context__.s({
    "dompets": (()=>dompets)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$wallets$2f$create$2d$wallet$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/thirdweb/dist/esm/wallets/create-wallet.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$wallets$2f$in$2d$app$2f$web$2f$in$2d$app$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/thirdweb/dist/esm/wallets/in-app/web/in-app.js [app-client] (ecmascript)");
;
const dompets = [
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$wallets$2f$in$2d$app$2f$web$2f$in$2d$app$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["inAppWallet"])({
        auth: {
            options: [
                "email",
                "passkey",
                "google",
                "apple"
            ]
        }
    }),
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$wallets$2f$create$2d$wallet$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createWallet"])("io.metamask"),
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$wallets$2f$create$2d$wallet$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createWallet"])("app.phantom"),
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$wallets$2f$create$2d$wallet$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createWallet"])("com.okex.wallet"),
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$wallets$2f$create$2d$wallet$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createWallet"])("com.coinbase.wallet")
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/logins/ConnectEmbeds.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
// /src/components/logins/ConnectEmbeds.tsx
// External libraries
__turbopack_context__.s({
    "default": (()=>ConnectEmbeds)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$react$2f$web$2f$ui$2f$ConnectWallet$2f$Modal$2f$ConnectEmbed$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/thirdweb/dist/esm/react/web/ui/ConnectWallet/Modal/ConnectEmbed.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$react$2f$core$2f$design$2d$system$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/thirdweb/dist/esm/react/core/design-system/index.js [app-client] (ecmascript)");
// Blockchain configurations
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/config/client.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$dompets$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/config/dompets.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$receipts$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/config/receipts/index.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$rantais$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/config/rantais.ts [app-client] (ecmascript)");
;
;
;
;
;
;
const { receipt, factoryAddress } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$receipts$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getActiveReceipt"])();
function ConnectEmbeds() {
    const embedStyle = {
        width: "100%",
        background: "transparent"
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        id: "logins",
        className: "w-full h-auto flex flex-col justify-center items-center",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$react$2f$web$2f$ui$2f$ConnectWallet$2f$Modal$2f$ConnectEmbed$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConnectEmbed"], {
            client: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["client"],
            modalSize: "compact",
            header: {
                title: " "
            },
            appMetadata: {
                name: receipt.proTitle,
                url: receipt.proUrl,
                description: receipt.proDescription,
                logoUrl: receipt.proLogo
            },
            wallets: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$dompets$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dompets"],
            accountAbstraction: {
                factoryAddress: factoryAddress,
                chain: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$rantais$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["chain"],
                sponsorGas: true
            },
            chains: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$rantais$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["chains"],
            showThirdwebBranding: false,
            theme: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$react$2f$core$2f$design$2d$system$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["lightTheme"])({
                colors: {
                    accentButtonBg: receipt.colorSecondary,
                    accentButtonText: receipt.colorSekunder,
                    accentText: receipt.colorSecondary,
                    borderColor: receipt.colorTertiary,
                    // connectedButtonBg: string;
                    // connectedButtonBgHover: string;
                    // danger: string;
                    // inputAutofillBg: string;
                    // modalBg: string;
                    // modalOverlayBg: string;
                    // primaryButtonBg: string;
                    // primaryButtonText: string;
                    primaryText: receipt.colorSekunder,
                    // scrollbarBg: string;
                    // secondaryButtonBg: string;
                    // secondaryButtonHoverBg: string;
                    secondaryButtonText: receipt.colorSekunder,
                    // secondaryIconColor: string;
                    // secondaryIconHoverBg: string;
                    // secondaryIconHoverColor: string;
                    // secondaryText: string;
                    selectedTextBg: receipt.colorSekunder,
                    selectedTextColor: receipt.colorPrimary
                }
            }),
            style: embedStyle
        }, void 0, false, {
            fileName: "[project]/src/components/logins/ConnectEmbeds.tsx",
            lineNumber: 25,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/logins/ConnectEmbeds.tsx",
        lineNumber: 22,
        columnNumber: 5
    }, this);
}
_c = ConnectEmbeds;
var _c;
__turbopack_context__.k.register(_c, "ConnectEmbeds");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/logins/ErrorBoundary.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
// /src/components/logins/ErrorBoundary.tsx
// External libraries
__turbopack_context__.s({
    "ErrorBoundary": (()=>ErrorBoundary)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
// Blockchain configurations
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$receipts$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/config/receipts/index.ts [app-client] (ecmascript)");
;
;
;
const { receipt } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$receipts$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getActiveReceipt"])();
class ErrorBoundary extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Component {
    constructor(props){
        super(props);
        this.state = {
            hasError: false
        };
    }
    static getDerivedStateFromError() {
        return {
            hasError: true
        };
    }
    componentDidCatch(error, errorInfo) {
        console.error(receipt.proErrorCought, error, errorInfo);
    }
    handleReload = ()=>{
        window.location.reload();
    };
    render() {
        if (this.state.hasError) {
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col justify-center items-center h-screen gap-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        role: "alert",
                        style: {
                            color: receipt.colorSecondary
                        },
                        className: "text-center text-sm font-medium",
                        children: receipt.proError
                    }, void 0, false, {
                        fileName: "[project]/src/components/logins/ErrorBoundary.tsx",
                        lineNumber: 44,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: this.handleReload,
                        style: {
                            color: receipt.colorSecondary,
                            backgroundColor: receipt.colorTertiary,
                            border: "2px solid",
                            borderColor: "transparent"
                        },
                        className: "w-full rounded-lg p-2 text-base sm:text-xs md:text-sm lg:text-base font-semibold transition-all cursor-pointer",
                        children: receipt.proButton
                    }, void 0, false, {
                        fileName: "[project]/src/components/logins/ErrorBoundary.tsx",
                        lineNumber: 50,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/logins/ErrorBoundary.tsx",
                lineNumber: 43,
                columnNumber: 9
            }, this);
        }
        return this.props.children;
    }
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/logins/LoginLayout.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
// /src/components/logins/LoginLayout.tsx
// External libraries
__turbopack_context__.s({
    "default": (()=>LoginLayout)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
// Blockchain configurations
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$receipts$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/config/receipts/index.ts [app-client] (ecmascript)");
;
;
;
;
const { receipt } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$receipts$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getActiveReceipt"])();
function LoginLayout({ children }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full h-screen grid grid-cols-1 md:grid-cols-2",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-full relative hidden md:block overflow-hidden",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    src: receipt.loginArt,
                    alt: receipt.proTitle,
                    width: 1080,
                    height: 1129,
                    className: "absolute inset-0 w-full h-full rounded-r-3xl object-cover object-right",
                    priority: true
                }, void 0, false, {
                    fileName: "[project]/src/components/logins/LoginLayout.tsx",
                    lineNumber: 21,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/logins/LoginLayout.tsx",
                lineNumber: 20,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-full flex flex-col gap-4 md:gap-8 lg:gap-12 items-center justify-center py-4 px-4 md:px-8 lg:px-12",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        href: "/",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            src: receipt.loginBanner,
                            alt: receipt.proTitle,
                            width: 1080,
                            height: 149,
                            className: "z-0 object-contain w-full",
                            priority: true
                        }, void 0, false, {
                            fileName: "[project]/src/components/logins/LoginLayout.tsx",
                            lineNumber: 33,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/logins/LoginLayout.tsx",
                        lineNumber: 32,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        id: "headers",
                        className: "w-full flex flex-col gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                "aria-label": receipt.loginAria,
                                style: {
                                    color: receipt.colorSecondary
                                },
                                className: "flex text-left text-3xl lg:text-4xl xl:text-5xl font-normal tracking-tighter justify-start align-middle",
                                children: receipt.loginCall
                            }, void 0, false, {
                                fileName: "[project]/src/components/logins/LoginLayout.tsx",
                                lineNumber: 43,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                style: {
                                    color: receipt.colorSekunder
                                },
                                className: "flex flex-wrap text-left text-sm lg:text-base xl:text-lg font-normal tracking-tighter justify-start items-center",
                                children: [
                                    receipt.loginReason.text,
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: receipt.loginReason.link,
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        className: "inline hover:underline transition-all duration-200",
                                        children: receipt.loginReason.anchor
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/logins/LoginLayout.tsx",
                                        lineNumber: 53,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/logins/LoginLayout.tsx",
                                lineNumber: 49,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/logins/LoginLayout.tsx",
                        lineNumber: 42,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-full h-auto flex flex-col gap-4 justify-start items-start",
                        children: [
                            children,
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                style: {
                                    color: receipt.colorSekunder
                                },
                                className: "text-left text-xs font-normal",
                                children: [
                                    receipt.loginAgreement,
                                    " ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/terms",
                                        target: "_blank",
                                        style: {
                                            color: receipt.colorSecondary
                                        },
                                        children: receipt.loginTermsPolicy
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/logins/LoginLayout.tsx",
                                        lineNumber: 68,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/logins/LoginLayout.tsx",
                                lineNumber: 64,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/logins/LoginLayout.tsx",
                        lineNumber: 62,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        href: receipt.linkPower,
                        target: "_blank",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            src: receipt.loginPower,
                            alt: receipt.poweredBy,
                            width: 1080,
                            height: 107,
                            className: "z-0 object-contain w-full",
                            priority: true
                        }, void 0, false, {
                            fileName: "[project]/src/components/logins/LoginLayout.tsx",
                            lineNumber: 79,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/logins/LoginLayout.tsx",
                        lineNumber: 78,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/logins/LoginLayout.tsx",
                lineNumber: 30,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/logins/LoginLayout.tsx",
        lineNumber: 19,
        columnNumber: 5
    }, this);
}
_c = LoginLayout;
var _c;
__turbopack_context__.k.register(_c, "LoginLayout");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/sections/SubscribeForm.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
// /src/components/sections/SubscribeForm.tsx
// External libraries
__turbopack_context__.s({
    "default": (()=>Subscribe)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
// Blockchain configurations
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$receipts$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/config/receipts/index.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/config/utils.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
const { receipt } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$receipts$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getActiveReceipt"])();
function Subscribe() {
    _s();
    const [email, setEmail] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [statusMessage, setStatusMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isInvalid, setIsInvalid] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const accessKey = ("TURBOPACK compile-time value", "fdf0485d-5dcd-495c-a87f-10e26edf79c5");
    if ("TURBOPACK compile-time falsy", 0) {
        "TURBOPACK unreachable";
    }
    async function handleSubmit(e) {
        e.preventDefault();
        setStatusMessage("");
        setIsInvalid(false);
        // Basic email validation
        const emailRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
        if (!email || !emailRegex.test(email)) {
            setStatusMessage(receipt.subscribeInput);
            setIsInvalid(true);
            return;
        }
        setLoading(true);
        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json"
                },
                body: JSON.stringify({
                    access_key: accessKey,
                    subject: receipt.subscribeSubject,
                    name: receipt.subscribeName,
                    email,
                    message: receipt.subscribeMessage
                })
            });
            const result = await response.json();
            if (result.success) {
                setStatusMessage(receipt.subscribeSuccess);
                setEmail(""); // Clear input field
            } else {
                setStatusMessage(receipt.subscribeFailed);
            }
        } finally{
            setLoading(false);
        }
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                style: {
                    color: receipt.colorSecondary
                },
                className: "text-center sm:text-left text-xs sm:text-sm md:text-base font-semibold",
                children: receipt.subscribeTitle
            }, void 0, false, {
                fileName: "[project]/src/components/sections/SubscribeForm.tsx",
                lineNumber: 69,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                onSubmit: handleSubmit,
                className: "w-full",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-full flex flex-row justify-center sm:justify-start mt-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            type: "email",
                            name: "email",
                            placeholder: receipt.subscribePlaceholder,
                            value: email,
                            onChange: (e)=>setEmail(e.target.value),
                            style: {
                                borderColor: isInvalid ? receipt.colorPrimer : (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hexToRgba"])(receipt.colorSekunder, 0.7),
                                color: receipt.colorSecondary
                            },
                            className: "text-xs md:text-sm w-2/3 lg:w-3/5 px-2 py-0 border rounded-l-lg bg-transparent focus:outline-none",
                            disabled: loading,
                            "aria-invalid": isInvalid
                        }, void 0, false, {
                            fileName: "[project]/src/components/sections/SubscribeForm.tsx",
                            lineNumber: 77,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "submit",
                            style: {
                                backgroundColor: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hexToRgba"])(receipt.colorSekunder, 0.7),
                                color: receipt.colorPrimer
                            },
                            className: "text-xs md:text-sm px-6 py-2 font-semibold rounded-r-lg cursor-pointer",
                            disabled: loading,
                            children: loading ? receipt.subscribeButtonLoading : receipt.subscribeButton
                        }, void 0, false, {
                            fileName: "[project]/src/components/sections/SubscribeForm.tsx",
                            lineNumber: 93,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/sections/SubscribeForm.tsx",
                    lineNumber: 76,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/sections/SubscribeForm.tsx",
                lineNumber: 75,
                columnNumber: 7
            }, this),
            statusMessage && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                "aria-live": "polite",
                style: {
                    color: receipt.colorSecondary
                },
                className: "text-center sm:text-left text-sm font-medium mt-2",
                children: statusMessage
            }, void 0, false, {
                fileName: "[project]/src/components/sections/SubscribeForm.tsx",
                lineNumber: 108,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true);
}
_s(Subscribe, "htpoUE8OOjrPmN8nQGkCRPTJ8ic=");
_c = Subscribe;
var _c;
__turbopack_context__.k.register(_c, "Subscribe");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/sections/FooterSection.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
// /src/components/sections/FooterSection.tsx
__turbopack_context__.s({
    "default": (()=>Footer)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
// External libraries
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa6$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/fa6/index.mjs [app-client] (ecmascript)");
// Blockchain configurations
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$receipts$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/config/receipts/index.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/config/utils.ts [app-client] (ecmascript)");
// Components libraries
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$sections$2f$SubscribeForm$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/sections/SubscribeForm.tsx [app-client] (ecmascript)");
"use client";
;
;
;
;
;
;
;
const { receipt } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$receipts$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getActiveReceipt"])();
function Footer() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
        style: {
            backgroundColor: receipt.colorTertiary
        },
        className: "w-full py-4 px-4 md:px-20",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid sm:grid-cols-2 grid-cols-1 gap-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-full flex flex-col",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$sections$2f$SubscribeForm$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                            fileName: "[project]/src/components/sections/FooterSection.tsx",
                            lineNumber: 38,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/sections/FooterSection.tsx",
                        lineNumber: 36,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-full flex flex-col",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                style: {
                                    color: receipt.colorSecondary
                                },
                                className: "sm:text-end text-center text-xs sm:text-sm md:text-base font-semibold",
                                children: receipt.socialTitle
                            }, void 0, false, {
                                fileName: "[project]/src/components/sections/FooterSection.tsx",
                                lineNumber: 42,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex gap-2 mt-2 sm:justify-end justify-center",
                                children: [
                                    receipt.linkXTwitter && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: receipt.linkXTwitter,
                                        target: "_blank",
                                        style: {
                                            color: receipt.colorPrimer,
                                            backgroundColor: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hexToRgba"])(receipt.colorSekunder, 0.7)
                                        },
                                        className: "w-8 h-8 flex items-center justify-center text-xl m-1 rounded-lg",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa6$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaTwitter"], {}, void 0, false, {
                                            fileName: "[project]/src/components/sections/FooterSection.tsx",
                                            lineNumber: 57,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/sections/FooterSection.tsx",
                                        lineNumber: 49,
                                        columnNumber: 15
                                    }, this),
                                    receipt.linkLinkedIn && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: receipt.linkLinkedIn,
                                        target: "_blank",
                                        style: {
                                            color: receipt.colorPrimer,
                                            backgroundColor: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hexToRgba"])(receipt.colorSekunder, 0.7)
                                        },
                                        className: "w-8 h-8 flex items-center justify-center text-xl m-1 rounded-lg",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa6$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaLinkedin"], {}, void 0, false, {
                                            fileName: "[project]/src/components/sections/FooterSection.tsx",
                                            lineNumber: 70,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/sections/FooterSection.tsx",
                                        lineNumber: 62,
                                        columnNumber: 15
                                    }, this),
                                    receipt.linkInstagram && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: receipt.linkInstagram,
                                        target: "_blank",
                                        style: {
                                            color: receipt.colorPrimer,
                                            backgroundColor: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hexToRgba"])(receipt.colorSekunder, 0.7)
                                        },
                                        className: "w-8 h-8 flex items-center justify-center text-xl m-1 rounded-lg",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa6$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaInstagram"], {}, void 0, false, {
                                            fileName: "[project]/src/components/sections/FooterSection.tsx",
                                            lineNumber: 83,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/sections/FooterSection.tsx",
                                        lineNumber: 75,
                                        columnNumber: 15
                                    }, this),
                                    receipt.linkFacebook && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: receipt.linkFacebook,
                                        target: "_blank",
                                        style: {
                                            color: receipt.colorPrimer,
                                            backgroundColor: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hexToRgba"])(receipt.colorSekunder, 0.7)
                                        },
                                        className: "w-8 h-8 flex items-center justify-center text-xl m-1 rounded-lg",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa6$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaFacebook"], {}, void 0, false, {
                                            fileName: "[project]/src/components/sections/FooterSection.tsx",
                                            lineNumber: 96,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/sections/FooterSection.tsx",
                                        lineNumber: 88,
                                        columnNumber: 15
                                    }, this),
                                    receipt.linkDiscord && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: receipt.linkDiscord,
                                        target: "_blank",
                                        style: {
                                            color: receipt.colorPrimer,
                                            backgroundColor: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hexToRgba"])(receipt.colorSekunder, 0.7)
                                        },
                                        className: "w-8 h-8 flex items-center justify-center text-xl m-1 rounded-lg",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa6$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaDiscord"], {}, void 0, false, {
                                            fileName: "[project]/src/components/sections/FooterSection.tsx",
                                            lineNumber: 109,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/sections/FooterSection.tsx",
                                        lineNumber: 101,
                                        columnNumber: 15
                                    }, this),
                                    receipt.linkYouTube && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: receipt.linkYouTube,
                                        target: "_blank",
                                        style: {
                                            color: receipt.colorPrimer,
                                            backgroundColor: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hexToRgba"])(receipt.colorSekunder, 0.7)
                                        },
                                        className: "w-8 h-8 flex items-center justify-center text-xl m-1 rounded-lg",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa6$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaYoutube"], {}, void 0, false, {
                                            fileName: "[project]/src/components/sections/FooterSection.tsx",
                                            lineNumber: 122,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/sections/FooterSection.tsx",
                                        lineNumber: 114,
                                        columnNumber: 15
                                    }, this),
                                    receipt.linkEmail && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: receipt.linkEmail,
                                        target: "_blank",
                                        style: {
                                            color: receipt.colorPrimer,
                                            backgroundColor: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hexToRgba"])(receipt.colorSekunder, 0.7)
                                        },
                                        className: "w-8 h-8 flex items-center justify-center text-xl m-1 rounded-lg",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa6$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaEnvelope"], {}, void 0, false, {
                                            fileName: "[project]/src/components/sections/FooterSection.tsx",
                                            lineNumber: 135,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/sections/FooterSection.tsx",
                                        lineNumber: 127,
                                        columnNumber: 15
                                    }, this),
                                    receipt.linkWhatsApp && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: receipt.linkWhatsApp,
                                        target: "_blank",
                                        style: {
                                            color: receipt.colorPrimer,
                                            backgroundColor: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hexToRgba"])(receipt.colorSekunder, 0.7)
                                        },
                                        className: "w-8 h-8 flex items-center justify-center text-xl m-1 rounded-lg",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa6$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaWhatsapp"], {}, void 0, false, {
                                            fileName: "[project]/src/components/sections/FooterSection.tsx",
                                            lineNumber: 148,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/sections/FooterSection.tsx",
                                        lineNumber: 140,
                                        columnNumber: 15
                                    }, this),
                                    receipt.linkWebsite && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: receipt.linkWebsite,
                                        target: "_blank",
                                        style: {
                                            color: receipt.colorPrimer,
                                            backgroundColor: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hexToRgba"])(receipt.colorSekunder, 0.7)
                                        },
                                        className: "w-8 h-8 flex items-center justify-center text-xl m-1 rounded-lg",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa6$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaGlobe"], {}, void 0, false, {
                                            fileName: "[project]/src/components/sections/FooterSection.tsx",
                                            lineNumber: 161,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/sections/FooterSection.tsx",
                                        lineNumber: 153,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/sections/FooterSection.tsx",
                                lineNumber: 47,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/sections/FooterSection.tsx",
                        lineNumber: 40,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/sections/FooterSection.tsx",
                lineNumber: 35,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    borderColor: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hexToRgba"])(receipt.colorSekunder, 0.7)
                },
                className: "w-full border-t mt-4 pt-4 flex flex-col sm:flex-row justify-center sm:justify-between items-center gap-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            color: receipt.colorSecondary
                        },
                        className: "w-full text-xs text-center sm:text-left",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: [
                                    "© ",
                                    new Date().getFullYear(),
                                    " ",
                                    receipt.entityAlias1,
                                    ".",
                                    " ",
                                    receipt.copyRight
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/sections/FooterSection.tsx",
                                lineNumber: 180,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: `${receipt.officiallyLicensed} ${receipt.entityAlias1}.`
                            }, void 0, false, {
                                fileName: "[project]/src/components/sections/FooterSection.tsx",
                                lineNumber: 184,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex justify-center sm:justify-start gap-4 mt-2",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/terms",
                                    target: "_blank",
                                    style: {
                                        color: receipt.colorSecondary
                                    },
                                    className: "text-xs text-center sm:text-left",
                                    children: [
                                        receipt.anchorTerms,
                                        " & ",
                                        receipt.anchorPrivacy
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/sections/FooterSection.tsx",
                                    lineNumber: 186,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/sections/FooterSection.tsx",
                                lineNumber: 185,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/sections/FooterSection.tsx",
                        lineNumber: 175,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-full flex justify-center sm:justify-end cursor-pointer",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            href: receipt.linkPower,
                            target: "_blank",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                src: receipt.footerPower,
                                alt: receipt.poweredBy,
                                width: 563,
                                height: 75
                            }, void 0, false, {
                                fileName: "[project]/src/components/sections/FooterSection.tsx",
                                lineNumber: 201,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/sections/FooterSection.tsx",
                            lineNumber: 200,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/sections/FooterSection.tsx",
                        lineNumber: 199,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/sections/FooterSection.tsx",
                lineNumber: 169,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/sections/FooterSection.tsx",
        lineNumber: 32,
        columnNumber: 5
    }, this);
}
_c = Footer;
var _c;
__turbopack_context__.k.register(_c, "Footer");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/logins/ConnectButtons.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
// /src/components/logins/ConnectButtons.tsx
// External libraries
__turbopack_context__.s({
    "default": (()=>ConnectButtons)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa6$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/fa6/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$react$2f$web$2f$ui$2f$ConnectWallet$2f$ConnectButton$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/thirdweb/dist/esm/react/web/ui/ConnectWallet/ConnectButton.js [app-client] (ecmascript)");
// Blockchain configurations
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/config/client.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$dompets$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/config/dompets.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$receipts$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/config/receipts/index.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$rantais$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/config/rantais.ts [app-client] (ecmascript)");
;
;
;
;
;
;
;
const { receipt, factoryAddress, supportedNFTs, supportedFTs, displayedTokeks } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$receipts$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getActiveReceipt"])();
function ConnectButtons() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        id: "connected",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$react$2f$web$2f$ui$2f$ConnectWallet$2f$ConnectButton$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConnectButton"], {
            client: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["client"],
            appMetadata: {
                name: receipt.proTitle,
                url: receipt.proUrl,
                description: receipt.proDescription,
                logoUrl: receipt.proLogo
            },
            connectButton: {
                className: " ",
                label: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa6$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaUserLarge"], {}, void 0, false, {
                    fileName: "[project]/src/components/logins/ConnectButtons.tsx",
                    lineNumber: 35,
                    columnNumber: 18
                }, void 0),
                style: {
                    minWidth: "2.5rem",
                    width: "2.5rem",
                    height: "2.5rem",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "1.25rem",
                    borderRadius: "0.5rem",
                    backgroundColor: receipt.colorTertiary,
                    color: receipt.colorSekunder
                }
            },
            connectModal: {
                showThirdwebBranding: false,
                title: "Log In"
            },
            wallets: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$dompets$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dompets"],
            accountAbstraction: {
                factoryAddress: factoryAddress,
                chain: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$rantais$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["chain"],
                sponsorGas: true
            },
            chains: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$rantais$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["chains"],
            supportedTokens: supportedFTs,
            supportedNFTs: supportedNFTs,
            detailsButton: {
                displayBalanceToken: displayedTokeks,
                render: ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        style: {
                            color: receipt.colorSekunder,
                            backgroundColor: receipt.colorTertiary
                        },
                        className: "w-10 h-10 flex items-center justify-center text-xl rounded-lg cursor-pointer",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa6$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaUserLarge"], {}, void 0, false, {
                            fileName: "[project]/src/components/logins/ConnectButtons.tsx",
                            lineNumber: 71,
                            columnNumber: 15
                        }, void 0)
                    }, void 0, false, {
                        fileName: "[project]/src/components/logins/ConnectButtons.tsx",
                        lineNumber: 65,
                        columnNumber: 13
                    }, void 0)
            },
            detailsModal: {
                assetTabs: [
                    "token",
                    "nft"
                ]
            },
            theme: "light"
        }, void 0, false, {
            fileName: "[project]/src/components/logins/ConnectButtons.tsx",
            lineNumber: 25,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/logins/ConnectButtons.tsx",
        lineNumber: 24,
        columnNumber: 5
    }, this);
}
_c = ConnectButtons;
var _c;
__turbopack_context__.k.register(_c, "ConnectButtons");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/sections/DropDownMenu.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
// /src/components/sections/DropDownMenu.tsx
__turbopack_context__.s({
    "default": (()=>DropdownMenu)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
// External libraries
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa6$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/fa6/index.mjs [app-client] (ecmascript)");
// Blockchain configurations
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$receipts$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/config/receipts/index.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/config/utils.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
const { receipt } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$receipts$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getActiveReceipt"])();
function DropdownMenu() {
    _s();
    const [isOpen, setIsOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const menuRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Close when clicked outside
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "DropdownMenu.useEffect": ()=>{
            const handleClickOutside = {
                "DropdownMenu.useEffect.handleClickOutside": (event)=>{
                    if (menuRef.current && !menuRef.current.contains(event.target)) {
                        setIsOpen(false);
                    }
                }
            }["DropdownMenu.useEffect.handleClickOutside"];
            if (isOpen) {
                document.addEventListener("mousedown", handleClickOutside);
            } else {
                document.removeEventListener("mousedown", handleClickOutside);
            }
            return ({
                "DropdownMenu.useEffect": ()=>{
                    document.removeEventListener("mousedown", handleClickOutside);
                }
            })["DropdownMenu.useEffect"];
        }
    }["DropdownMenu.useEffect"], [
        isOpen
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: menuRef,
        className: "relative inline-block text-left",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: ()=>setIsOpen(!isOpen),
                style: {
                    backgroundColor: receipt.colorTertiary,
                    color: receipt.colorSekunder
                },
                className: "w-10 h-10 flex items-center justify-center text-xl rounded-lg cursor-pointer",
                "aria-label": "Drop Down Menu",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa6$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaBars"], {}, void 0, false, {
                    fileName: "[project]/src/components/sections/DropDownMenu.tsx",
                    lineNumber: 50,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/sections/DropDownMenu.tsx",
                lineNumber: 42,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                children: isOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: {
                        opacity: 0,
                        y: -10,
                        scale: 0.95
                    },
                    animate: {
                        opacity: 1,
                        y: 0,
                        scale: 1
                    },
                    exit: {
                        opacity: 0,
                        y: -10,
                        scale: 0.95
                    },
                    transition: {
                        duration: 0.47,
                        ease: "easeOut"
                    },
                    style: {
                        backgroundColor: receipt.colorTertiary
                    },
                    className: "absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-lg shadow-lg focus:outline-none text-sm",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                color: receipt.colorSecondary
                            },
                            className: "text-xs sm:text-sm md:text-base font-semibold px-4 pt-2",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/",
                                children: receipt.ddMenuHome
                            }, void 0, false, {
                                fileName: "[project]/src/components/sections/DropDownMenu.tsx",
                                lineNumber: 70,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/sections/DropDownMenu.tsx",
                            lineNumber: 65,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                            style: {
                                color: receipt.colorSecondary
                            },
                            className: "text-xs sm:text-sm md:text-base font-normal px-4 pb-4 space-y-1",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/#what",
                                        children: receipt.ddMenuWhat
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/sections/DropDownMenu.tsx",
                                        lineNumber: 78,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/sections/DropDownMenu.tsx",
                                    lineNumber: 77,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/#why",
                                        children: receipt.ddMenuWhy
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/sections/DropDownMenu.tsx",
                                        lineNumber: 81,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/sections/DropDownMenu.tsx",
                                    lineNumber: 80,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/#how",
                                        children: receipt.ddMenuHow
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/sections/DropDownMenu.tsx",
                                        lineNumber: 84,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/sections/DropDownMenu.tsx",
                                    lineNumber: 83,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/#when",
                                        children: receipt.ddMenuWhen
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/sections/DropDownMenu.tsx",
                                        lineNumber: 87,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/sections/DropDownMenu.tsx",
                                    lineNumber: 86,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/#where",
                                        children: receipt.ddMenuWhere
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/sections/DropDownMenu.tsx",
                                        lineNumber: 90,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/sections/DropDownMenu.tsx",
                                    lineNumber: 89,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/#who",
                                        children: receipt.ddMenuWho
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/sections/DropDownMenu.tsx",
                                        lineNumber: 93,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/sections/DropDownMenu.tsx",
                                    lineNumber: 92,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/sections/DropDownMenu.tsx",
                            lineNumber: 72,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                color: receipt.colorSecondary,
                                borderColor: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hexToRgba"])(receipt.colorSekunder, 0.7)
                            },
                            className: "text-xs sm:text-sm md:text-base font-semibold px-4 pt-2 border-t",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/featured",
                                children: receipt.ddMenuFeatured
                            }, void 0, false, {
                                fileName: "[project]/src/components/sections/DropDownMenu.tsx",
                                lineNumber: 103,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/sections/DropDownMenu.tsx",
                            lineNumber: 97,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                            style: {
                                color: receipt.colorSecondary
                            },
                            className: "text-xs sm:text-sm md:text-base font-normal px-4 pb-4 space-y-1",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/free",
                                        children: receipt.ddMenuFree
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/sections/DropDownMenu.tsx",
                                        lineNumber: 111,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/sections/DropDownMenu.tsx",
                                    lineNumber: 110,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/paid",
                                        children: receipt.ddMenuPaid
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/sections/DropDownMenu.tsx",
                                        lineNumber: 114,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/sections/DropDownMenu.tsx",
                                    lineNumber: 113,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/coins",
                                        children: receipt.ddMenuCoins
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/sections/DropDownMenu.tsx",
                                        lineNumber: 117,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/sections/DropDownMenu.tsx",
                                    lineNumber: 116,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/sections/DropDownMenu.tsx",
                            lineNumber: 105,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                color: receipt.colorSecondary,
                                borderColor: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hexToRgba"])(receipt.colorSekunder, 0.7)
                            },
                            className: "text-xs sm:text-sm md:text-base font-semibold px-4 pt-2 border-t",
                            children: receipt.ddMenuMore
                        }, void 0, false, {
                            fileName: "[project]/src/components/sections/DropDownMenu.tsx",
                            lineNumber: 121,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                            style: {
                                color: receipt.colorSecondary
                            },
                            className: "text-xs sm:text-sm md:text-base font-normal px-4 pb-4 space-y-1",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/deploy",
                                        target: "_blank",
                                        children: receipt.ddMenuDeploy
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/sections/DropDownMenu.tsx",
                                        lineNumber: 135,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/sections/DropDownMenu.tsx",
                                    lineNumber: 134,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/contact",
                                        target: "_blank",
                                        children: receipt.ddMenuContact
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/sections/DropDownMenu.tsx",
                                        lineNumber: 140,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/sections/DropDownMenu.tsx",
                                    lineNumber: 139,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/terms",
                                        target: "_blank",
                                        children: receipt.ddMenuTerms
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/sections/DropDownMenu.tsx",
                                        lineNumber: 145,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/sections/DropDownMenu.tsx",
                                    lineNumber: 144,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/sections/DropDownMenu.tsx",
                            lineNumber: 129,
                            columnNumber: 13
                        }, this)
                    ]
                }, "dropdown", true, {
                    fileName: "[project]/src/components/sections/DropDownMenu.tsx",
                    lineNumber: 55,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/sections/DropDownMenu.tsx",
                lineNumber: 53,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/sections/DropDownMenu.tsx",
        lineNumber: 41,
        columnNumber: 5
    }, this);
}
_s(DropdownMenu, "yIsVPXmGJnWJAXf4YKobPzEQ+oo=");
_c = DropdownMenu;
var _c;
__turbopack_context__.k.register(_c, "DropdownMenu");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/sections/QRCodeButton.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
// components/QRCodeButton.tsx
__turbopack_context__.s({
    "default": (()=>QRCodeButton)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
// External libraries
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$qrcode$2e$react$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/qrcode.react/lib/esm/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa6$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/fa6/index.mjs [app-client] (ecmascript)");
// Blockchain configurations
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$receipts$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/config/receipts/index.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
const { receipt } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$receipts$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getActiveReceipt"])();
function QRCodeButton() {
    _s();
    const [currentUrl, setCurrentUrl] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const qrRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "QRCodeButton.useEffect": ()=>{
            if ("TURBOPACK compile-time truthy", 1) {
                setCurrentUrl(window.location.href);
            }
        }
    }["QRCodeButton.useEffect"], []);
    const downloadQRCode = async ()=>{
        if (!qrRef.current || !currentUrl) return;
        const canvas = document.createElement("canvas");
        const size = 1047;
        canvas.width = size;
        canvas.height = size;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;
        // Draw white background
        ctx.fillStyle = "white";
        ctx.fillRect(0, 0, size, size);
        // Render QR Code to offscreen canvas with margin
        const qrCanvas = qrRef.current;
        const qrSize = size * 0.88; // 88% of full size
        const qrX = (size - qrSize) / 2;
        const qrY = (size - qrSize) / 2;
        ctx.drawImage(qrCanvas, qrX, qrY, qrSize, qrSize);
        // Load and draw logo at center with white background
        const logo = new Image();
        logo.src = receipt.proLogo;
        logo.onload = ()=>{
            const logoSize = 111;
            const logoX = (size - logoSize) / 2;
            const logoY = (size - logoSize) / 2;
            // Draw white rounded background behind logo
            const padding = 11;
            ctx.fillStyle = receipt.colorTersier;
            ctx.beginPath();
            ctx.arc(size / 2, size / 2, logoSize / 2 + padding, 0, Math.PI * 2);
            ctx.fill();
            ctx.drawImage(logo, logoX, logoY, logoSize, logoSize);
            const url = canvas.toDataURL("image/png");
            const link = document.createElement("a");
            link.href = url;
            link.download = "qr-code.png";
            link.click();
        };
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col items-center gap-2",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "hidden",
                children: currentUrl && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$qrcode$2e$react$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["QRCodeCanvas"], {
                    value: currentUrl,
                    size: 1047,
                    bgColor: receipt.colorTersier,
                    fgColor: receipt.colorSecondary,
                    level: "H",
                    ref: qrRef
                }, void 0, false, {
                    fileName: "[project]/src/components/sections/QRCodeButton.tsx",
                    lineNumber: 76,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/sections/QRCodeButton.tsx",
                lineNumber: 74,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: downloadQRCode,
                style: {
                    backgroundColor: receipt.colorTertiary,
                    color: receipt.colorSekunder
                },
                className: "w-10 h-10 flex items-center justify-center text-xl rounded-lg cursor-pointer",
                "aria-label": "Download QR Code",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa6$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaQrcode"], {}, void 0, false, {
                    fileName: "[project]/src/components/sections/QRCodeButton.tsx",
                    lineNumber: 96,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/sections/QRCodeButton.tsx",
                lineNumber: 88,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/sections/QRCodeButton.tsx",
        lineNumber: 72,
        columnNumber: 5
    }, this);
}
_s(QRCodeButton, "WV8i6OzcOP/9T1A5uc+HSmBk/IE=");
_c = QRCodeButton;
var _c;
__turbopack_context__.k.register(_c, "QRCodeButton");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/sections/HeaderSection.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
// /src/components/sections/HeaderSection.tsx
// External libraries
__turbopack_context__.s({
    "default": (()=>Header)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa6$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/fa6/index.mjs [app-client] (ecmascript)");
// import { FaClockRotateLeft, FaUser, FaWallet } from "react-icons/fa6";
// Blockchain configurations
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$receipts$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/config/receipts/index.ts [app-client] (ecmascript)");
// Components libraries
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$logins$2f$ConnectButtons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/logins/ConnectButtons.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$sections$2f$DropDownMenu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/sections/DropDownMenu.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$sections$2f$QRCodeButton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/sections/QRCodeButton.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
;
;
;
;
;
;
;
const { receipt } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$receipts$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getActiveReceipt"])();
function Header() {
    _s();
    const [searchQuery, setSearchQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [isMobileSearchOpen, setIsMobileSearchOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const mobileSearchRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    // Close when clicked outside
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Header.useEffect": ()=>{
            const handleClickOutside = {
                "Header.useEffect.handleClickOutside": (event)=>{
                    if (mobileSearchRef.current && !mobileSearchRef.current.contains(event.target)) {
                        setIsMobileSearchOpen(false);
                    }
                }
            }["Header.useEffect.handleClickOutside"];
            if (isMobileSearchOpen) {
                document.addEventListener("mousedown", handleClickOutside);
            } else {
                document.removeEventListener("mousedown", handleClickOutside);
            }
            return ({
                "Header.useEffect": ()=>{
                    document.removeEventListener("mousedown", handleClickOutside);
                }
            })["Header.useEffect"];
        }
    }["Header.useEffect"], [
        isMobileSearchOpen
    ]);
    const handleSearch = (e)=>{
        e.preventDefault();
        if (searchQuery.trim()) {
            router.push(`/search?query=${encodeURIComponent(searchQuery)}`);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        style: {
            backgroundColor: receipt.colorPrimary,
            borderColor: receipt.colorTertiary
        },
        className: "w-full flex items-center justify-between py-4 px-4 md:px-20 bg-transparent border-b",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-full sm:w-1/2 flex justify-start",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    href: "/",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        src: receipt.headerLogo,
                        alt: receipt.proTitle,
                        width: 1200,
                        height: 400,
                        sizes: "(max-width: 425px) 150vw, (max-width: 768px) 100vw, 50vw",
                        className: "h-auto w-auto object-contain"
                    }, void 0, false, {
                        fileName: "[project]/src/components/sections/HeaderSection.tsx",
                        lineNumber: 67,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/sections/HeaderSection.tsx",
                    lineNumber: 66,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/sections/HeaderSection.tsx",
                lineNumber: 65,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-1/2 flex justify-end gap-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                        onSubmit: handleSearch,
                        style: {
                            backgroundColor: receipt.colorTertiary
                        },
                        className: "w-full hidden sm:flex items-center justify-center px-4 py-2 rounded-lg",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa6$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaSistrix"], {
                                onClick: handleSearch,
                                style: {
                                    color: receipt.colorSekunder
                                },
                                className: "w-5 h-5 cursor-pointer"
                            }, void 0, false, {
                                fileName: "[project]/src/components/sections/HeaderSection.tsx",
                                lineNumber: 84,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "text",
                                "aria-label": receipt.headerSearch,
                                placeholder: receipt.searchPlaceholder,
                                value: searchQuery,
                                onChange: (e)=>setSearchQuery(e.target.value),
                                style: {
                                    color: receipt.colorSecondary
                                },
                                className: "ml-2 w-full bg-transparent outline-hidden text-xs md:text-sm"
                            }, void 0, false, {
                                fileName: "[project]/src/components/sections/HeaderSection.tsx",
                                lineNumber: 89,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/sections/HeaderSection.tsx",
                        lineNumber: 80,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        ref: mobileSearchRef,
                        className: "flex space-x-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setIsMobileSearchOpen(!isMobileSearchOpen),
                                style: {
                                    backgroundColor: receipt.colorTertiary,
                                    color: receipt.colorSekunder
                                },
                                className: "sm:hidden w-10 h-10 flex items-center justify-center text-xl rounded-lg",
                                "aria-label": "Mobile Search Button",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa6$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaSistrix"], {}, void 0, false, {
                                    fileName: "[project]/src/components/sections/HeaderSection.tsx",
                                    lineNumber: 111,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/sections/HeaderSection.tsx",
                                lineNumber: 103,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                                children: isMobileSearchOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].form, {
                                    initial: {
                                        opacity: 0,
                                        y: -10,
                                        scale: 0.95
                                    },
                                    animate: {
                                        opacity: 1,
                                        y: 0,
                                        scale: 1
                                    },
                                    exit: {
                                        opacity: 0,
                                        y: -10,
                                        scale: 0.95
                                    },
                                    transition: {
                                        duration: 0.47,
                                        ease: "easeOut"
                                    },
                                    onSubmit: handleSearch,
                                    style: {
                                        backgroundColor: receipt.colorTertiary
                                    },
                                    className: "absolute top-16 left-0 w-full px-4 py-2 flex items-center shadow-md z-10",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa6$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaSistrix"], {
                                            onClick: handleSearch,
                                            style: {
                                                color: receipt.colorSekunder
                                            },
                                            className: "w-5 h-5 cursor-pointer"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/sections/HeaderSection.tsx",
                                            lineNumber: 126,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "text",
                                            "aria-label": receipt.headerSearch,
                                            placeholder: receipt.searchPlaceholder,
                                            value: searchQuery,
                                            onChange: (e)=>setSearchQuery(e.target.value),
                                            style: {
                                                color: receipt.colorSecondary
                                            },
                                            className: "ml-2 w-full bg-transparent outline-none text-sm"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/sections/HeaderSection.tsx",
                                            lineNumber: 131,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "submit",
                                            style: {
                                                color: receipt.colorSecondary
                                            },
                                            className: "text-sm font-semibold px-4 cursor-pointer",
                                            children: receipt.headerGo
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/sections/HeaderSection.tsx",
                                            lineNumber: 140,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, "mobile-search", true, {
                                    fileName: "[project]/src/components/sections/HeaderSection.tsx",
                                    lineNumber: 117,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/sections/HeaderSection.tsx",
                                lineNumber: 115,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$logins$2f$ConnectButtons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                fileName: "[project]/src/components/sections/HeaderSection.tsx",
                                lineNumber: 151,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$sections$2f$QRCodeButton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                fileName: "[project]/src/components/sections/HeaderSection.tsx",
                                lineNumber: 167,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$sections$2f$DropDownMenu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                fileName: "[project]/src/components/sections/HeaderSection.tsx",
                                lineNumber: 168,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/sections/HeaderSection.tsx",
                        lineNumber: 101,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/sections/HeaderSection.tsx",
                lineNumber: 78,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/sections/HeaderSection.tsx",
        lineNumber: 58,
        columnNumber: 5
    }, this);
}
_s(Header, "Ok0mrcG3ABWPBkLk+f0657VFynw=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = Header;
var _c;
__turbopack_context__.k.register(_c, "Header");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/logins/DynamicLogin.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
// /src/components/logins/DynamicLogin.tsx
// External libraries
__turbopack_context__.s({
    "default": (()=>DynamicLoginPage)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$react$2f$core$2f$hooks$2f$wallets$2f$useActiveAccount$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/thirdweb/dist/esm/react/core/hooks/wallets/useActiveAccount.js [app-client] (ecmascript)");
// Components libraries
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$logins$2f$ConnectEmbeds$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/logins/ConnectEmbeds.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$logins$2f$ErrorBoundary$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/logins/ErrorBoundary.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$logins$2f$LoginLayout$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/logins/LoginLayout.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$sections$2f$FooterSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/sections/FooterSection.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$sections$2f$HeaderSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/sections/HeaderSection.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
;
;
;
function DynamicLoginPage({ ContentComponent }) {
    _s();
    const activeAccount = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$react$2f$core$2f$hooks$2f$wallets$2f$useActiveAccount$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useActiveAccount"])();
    if (activeAccount) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$sections$2f$HeaderSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/src/components/logins/DynamicLogin.tsx",
                    lineNumber: 27,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col gap-4 content-normal md:px-20 py-4 px-4 lg:my-12 md:my-8 my-4",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ContentComponent, {}, void 0, false, {
                        fileName: "[project]/src/components/logins/DynamicLogin.tsx",
                        lineNumber: 29,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/logins/DynamicLogin.tsx",
                    lineNumber: 28,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$sections$2f$FooterSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/src/components/logins/DynamicLogin.tsx",
                    lineNumber: 32,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$logins$2f$ErrorBoundary$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ErrorBoundary"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$logins$2f$LoginLayout$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$logins$2f$ConnectEmbeds$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/src/components/logins/DynamicLogin.tsx",
                lineNumber: 40,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/logins/DynamicLogin.tsx",
            lineNumber: 39,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/logins/DynamicLogin.tsx",
        lineNumber: 38,
        columnNumber: 5
    }, this);
}
_s(DynamicLoginPage, "plzE1XjHA7ljBuOt253dBxT8RHA=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$react$2f$core$2f$hooks$2f$wallets$2f$useActiveAccount$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useActiveAccount"]
    ];
});
_c = DynamicLoginPage;
var _c;
__turbopack_context__.k.register(_c, "DynamicLoginPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/featured/page.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
// /src/app/featured/page.tsx
__turbopack_context__.s({
    "default": (()=>PageFeatured)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
// Components libraries
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$contents$2f$FeaturedCards$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/contents/FeaturedCards.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$logins$2f$DynamicLogin$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/logins/DynamicLogin.tsx [app-client] (ecmascript)");
"use client";
;
;
;
function PageFeatured() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$logins$2f$DynamicLogin$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        ContentComponent: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$contents$2f$FeaturedCards$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
    }, void 0, false, {
        fileName: "[project]/src/app/featured/page.tsx",
        lineNumber: 13,
        columnNumber: 10
    }, this);
}
_c = PageFeatured;
var _c;
__turbopack_context__.k.register(_c, "PageFeatured");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=src_8b3e0ff9._.js.map