(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/node_modules/thirdweb/dist/esm/react/web/wallets/in-app/InAppWalletSelectionUI.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$react$2f$web$2f$providers$2f$wallet$2d$ui$2d$states$2d$provider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/thirdweb/dist/esm/react/web/providers/wallet-ui-states-provider.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$react$2f$web$2f$ui$2f$ConnectWallet$2f$Modal$2f$screen$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/thirdweb/dist/esm/react/web/ui/ConnectWallet/Modal/screen.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$react$2f$web$2f$ui$2f$ConnectWallet$2f$WalletEntryButton$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/thirdweb/dist/esm/react/web/ui/ConnectWallet/WalletEntryButton.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$react$2f$web$2f$ui$2f$ConnectWallet$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/thirdweb/dist/esm/react/web/ui/ConnectWallet/constants.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$react$2f$web$2f$wallets$2f$shared$2f$ConnectWalletSocialOptions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/thirdweb/dist/esm/react/web/wallets/shared/ConnectWalletSocialOptions.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$react$2f$web$2f$wallets$2f$shared$2f$LoadingScreen$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/thirdweb/dist/esm/react/web/wallets/shared/LoadingScreen.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$react$2f$web$2f$wallets$2f$in$2d$app$2f$useInAppWalletLocale$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/thirdweb/dist/esm/react/web/wallets/in-app/useInAppWalletLocale.js [app-client] (ecmascript)");
"use client";
;
;
;
;
;
;
;
;
/**
 *
 * @internal
 */ function InAppWalletSelectionUI(props) {
    const { screen } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$react$2f$web$2f$ui$2f$ConnectWallet$2f$Modal$2f$screen$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useScreenContext"])();
    const setData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$react$2f$web$2f$providers$2f$wallet$2d$ui$2d$states$2d$provider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSetSelectionData"])();
    const locale = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$react$2f$web$2f$wallets$2f$in$2d$app$2f$useInAppWalletLocale$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInAppWalletLocale"])(props.connectLocale.id);
    // do not show the "selectUI" if
    // modal is compact or
    // it is being rendered in Safe wallet
    if (props.size === "wide" || screen !== __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$react$2f$web$2f$ui$2f$ConnectWallet$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["reservedScreens"].main && props.size === "compact") {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$react$2f$web$2f$ui$2f$ConnectWallet$2f$WalletEntryButton$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WalletEntryButton"], {
            wallet: props.wallet,
            selectWallet: ()=>{
                setData({});
                props.select();
            },
            client: props.client,
            connectLocale: props.connectLocale,
            recommendedWallets: props.recommendedWallets,
            isActive: screen === props.wallet,
            badge: undefined
        });
    }
    if (!locale) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$react$2f$web$2f$wallets$2f$shared$2f$LoadingScreen$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LoadingScreen"], {
            height: "195px"
        });
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$react$2f$web$2f$wallets$2f$shared$2f$ConnectWalletSocialOptions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConnectWalletSocialOptions"], {
        disabled: props.disabled,
        locale: locale,
        wallet: props.wallet,
        done: props.done,
        select: props.select,
        goBack: props.goBack,
        chain: props.chain,
        client: props.client,
        size: props.size
    });
}
const __TURBOPACK__default__export__ = InAppWalletSelectionUI;
 //# sourceMappingURL=InAppWalletSelectionUI.js.map
}}),
}]);

//# sourceMappingURL=8069e_thirdweb_dist_esm_react_web_wallets_in-app_InAppWalletSelectionUI_c059daec.js.map