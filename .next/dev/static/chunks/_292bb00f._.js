(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/components/ui/page-hero.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PageHero",
    ()=>PageHero
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
function PageHero({ breadcrumb, title, description, image }) {
    const heroImage = image ?? "/business.png"; // default image if none passed
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "relative overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 bg-cover bg-right opacity-70",
                        style: {
                            backgroundImage: `url(${heroImage})`
                        }
                    }, void 0, false, {
                        fileName: "[project]/components/ui/page-hero.tsx",
                        lineNumber: 16,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 bg-gradient-to-r from-[#022B69] via-[#0a4a99cc] to-transparent"
                    }, void 0, false, {
                        fileName: "[project]/components/ui/page-hero.tsx",
                        lineNumber: 22,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/ui/page-hero.tsx",
                lineNumber: 14,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2 text-white mb-4 text-sm",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "insura.ae"
                            }, void 0, false, {
                                fileName: "[project]/components/ui/page-hero.tsx",
                                lineNumber: 28,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "w-1.5 h-1.5 rounded-full bg-primary"
                            }, void 0, false, {
                                fileName: "[project]/components/ui/page-hero.tsx",
                                lineNumber: 29,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: breadcrumb
                            }, void 0, false, {
                                fileName: "[project]/components/ui/page-hero.tsx",
                                lineNumber: 30,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/ui/page-hero.tsx",
                        lineNumber: 27,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3",
                        children: title
                    }, void 0, false, {
                        fileName: "[project]/components/ui/page-hero.tsx",
                        lineNumber: 33,
                        columnNumber: 9
                    }, this),
                    description && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-base md:text-lg text-white/80 max-w-2xl",
                        children: description
                    }, void 0, false, {
                        fileName: "[project]/components/ui/page-hero.tsx",
                        lineNumber: 38,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/ui/page-hero.tsx",
                lineNumber: 26,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/ui/page-hero.tsx",
        lineNumber: 12,
        columnNumber: 1
    }, this);
}
_c = PageHero;
var _c;
__turbopack_context__.k.register(_c, "PageHero");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/content/sidebar.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Sidebar",
    ()=>Sidebar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/search.js [app-client] (ecmascript) <export default as Search>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$banknote$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Banknote$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/banknote.js [app-client] (ecmascript) <export default as Banknote>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$ambulance$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Ambulance$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/ambulance.js [app-client] (ecmascript) <export default as Ambulance>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/user.js [app-client] (ecmascript) <export default as User>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/clock.js [app-client] (ecmascript) <export default as Clock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-check-big.js [app-client] (ecmascript) <export default as CheckCircle>");
;
;
;
function Sidebar() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex w-full max-w-md",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        type: "text",
                        placeholder: "Searching Here...",
                        className: "flex-1 px-4 py-3 border rounded-l-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    }, void 0, false, {
                        fileName: "[project]/components/content/sidebar.tsx",
                        lineNumber: 9,
                        columnNumber: 19
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "px-4 py-3 bg-primary text-white rounded-r-lg hover:bg-primary/90 transition-colors",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                            className: "w-5 h-5"
                        }, void 0, false, {
                            fileName: "[project]/components/content/sidebar.tsx",
                            lineNumber: 15,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/content/sidebar.tsx",
                        lineNumber: 14,
                        columnNumber: 19
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/content/sidebar.tsx",
                lineNumber: 8,
                columnNumber: 17
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-[oklch(0.32_0.08_248)] rounded-lg p-4 lg:p-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-2xl font-bold text-white mb-3",
                        children: "Our Insurance"
                    }, void 0, false, {
                        fileName: "[project]/components/content/sidebar.tsx",
                        lineNumber: 21,
                        columnNumber: 3
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                        className: "space-y-3",
                        children: [
                            {
                                name: "Travel Insurance",
                                href: "/insurance/travel"
                            },
                            {
                                name: "Life Insurance",
                                href: "/insurance/health/life"
                            },
                            {
                                name: "House Insurance",
                                href: "/insurance/house"
                            },
                            {
                                name: "Car Insurance",
                                href: "/insurance/motor"
                            },
                            {
                                name: "Health Insurance",
                                href: "/insurance/health"
                            }
                        ].map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: item.href,
                                    className: "   flex items-center justify-between   bg-white   px-6 py-3   rounded-lg   text-secondary font-semibold   hover:bg-gray-100   transition   ",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: item.name
                                        }, void 0, false, {
                                            fileName: "[project]/components/content/sidebar.tsx",
                                            lineNumber: 46,
                                            columnNumber: 11
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-xl",
                                            children: "→"
                                        }, void 0, false, {
                                            fileName: "[project]/components/content/sidebar.tsx",
                                            lineNumber: 47,
                                            columnNumber: 11
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/content/sidebar.tsx",
                                    lineNumber: 34,
                                    columnNumber: 9
                                }, this)
                            }, item.name, false, {
                                fileName: "[project]/components/content/sidebar.tsx",
                                lineNumber: 33,
                                columnNumber: 7
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/components/content/sidebar.tsx",
                        lineNumber: 25,
                        columnNumber: 3
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/content/sidebar.tsx",
                lineNumber: 20,
                columnNumber: 1
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-[oklch(0.32_0.08_248)] rounded-lg p-4 lg:p-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-2xl font-bold text-white mb-4",
                        children: "Download"
                    }, void 0, false, {
                        fileName: "[project]/components/content/sidebar.tsx",
                        lineNumber: 56,
                        columnNumber: 3
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: "/Insura-Company-profile-1.pdf",
                        download: true,
                        target: "_blank",
                        rel: "noopener noreferrer",
                        className: "   flex items-center justify-between   bg-white   px-5 py-4   rounded-lg   font-semibold   text-primary   hover:bg-gray-100   transition   ",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "Download Brochure"
                            }, void 0, false, {
                                fileName: "[project]/components/content/sidebar.tsx",
                                lineNumber: 76,
                                columnNumber: 5
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                xmlns: "http://www.w3.org/2000/svg",
                                className: "h-6 w-6 text-gray-600",
                                fill: "none",
                                viewBox: "0 0 24 24",
                                stroke: "currentColor",
                                strokeWidth: "2",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    d: "M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M12 4v12m0 0l-4-4m4 4l4-4"
                                }, void 0, false, {
                                    fileName: "[project]/components/content/sidebar.tsx",
                                    lineNumber: 87,
                                    columnNumber: 7
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/content/sidebar.tsx",
                                lineNumber: 79,
                                columnNumber: 5
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/content/sidebar.tsx",
                        lineNumber: 60,
                        columnNumber: 3
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/content/sidebar.tsx",
                lineNumber: 55,
                columnNumber: 1
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative rounded-lg overflow-hidden shadow-md",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                        src: "/grand1.avif",
                        alt: "Contact Support",
                        className: "w-full h-[520px] object-cover"
                    }, void 0, false, {
                        fileName: "[project]/components/content/sidebar.tsx",
                        lineNumber: 99,
                        columnNumber: 3
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 bg-black/60"
                    }, void 0, false, {
                        fileName: "[project]/components/content/sidebar.tsx",
                        lineNumber: 106,
                        columnNumber: 3
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute top-6 right-0 bg-secondary px-3 py-4",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-white font-semibold tracking-wide rotate-90 block origin-bottom-right",
                            children: "Jessica Brown"
                        }, void 0, false, {
                            fileName: "[project]/components/content/sidebar.tsx",
                            lineNumber: 110,
                            columnNumber: 5
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/content/sidebar.tsx",
                        lineNumber: 109,
                        columnNumber: 3
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 p-6 flex flex-col justify-end text-white",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-2xl font-bold leading-tight mb-4",
                                children: [
                                    "Make your dream ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                        fileName: "[project]/components/content/sidebar.tsx",
                                        lineNumber: 118,
                                        columnNumber: 23
                                    }, this),
                                    "life get professional ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                        fileName: "[project]/components/content/sidebar.tsx",
                                        lineNumber: 119,
                                        columnNumber: 29
                                    }, this),
                                    "help"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/content/sidebar.tsx",
                                lineNumber: 117,
                                columnNumber: 5
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-4 mt-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-12 h-12 rounded-full border border-white flex items-center justify-center",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            xmlns: "http://www.w3.org/2000/svg",
                                            className: "h-6 w-6",
                                            fill: "none",
                                            viewBox: "0 0 24 24",
                                            stroke: "currentColor",
                                            strokeWidth: "2",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round",
                                                d: "M3 5a2 2 0 012-2h2.28a1 1 0 01.948.684l1.5 4.493a1 1 0 01-.502 1.21l-1.272.636a11.042 11.042 0 005.516 5.516l.636-1.272a1 1 0 011.21-.502l4.493 1.5a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                                            }, void 0, false, {
                                                fileName: "[project]/components/content/sidebar.tsx",
                                                lineNumber: 134,
                                                columnNumber: 11
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/content/sidebar.tsx",
                                            lineNumber: 126,
                                            columnNumber: 9
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/content/sidebar.tsx",
                                        lineNumber: 125,
                                        columnNumber: 7
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: "tel:+97143574547",
                                        className: "text-xl font-bold tracking-wide hover:underline",
                                        children: "+971 4 357 4547"
                                    }, void 0, false, {
                                        fileName: "[project]/components/content/sidebar.tsx",
                                        lineNumber: 143,
                                        columnNumber: 7
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/content/sidebar.tsx",
                                lineNumber: 123,
                                columnNumber: 5
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/content/sidebar.tsx",
                        lineNumber: 116,
                        columnNumber: 3
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/content/sidebar.tsx",
                lineNumber: 97,
                columnNumber: 1
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-[oklch(0.32_0.08_248)] rounded-xl p-6 text-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-xl font-bold text-white mb-6 leading-snug",
                        children: [
                            "Why Pick Insura Your ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                fileName: "[project]/components/content/sidebar.tsx",
                                lineNumber: 156,
                                columnNumber: 26
                            }, this),
                            " Insurance Provider?"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/content/sidebar.tsx",
                        lineNumber: 155,
                        columnNumber: 3
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-2 gap-y-6 gap-x-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col items-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-14 h-14 bg-white rounded-lg flex items-center justify-center mb-3",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$banknote$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Banknote$3e$__["Banknote"], {
                                            className: "w-8 h-8 text-primary"
                                        }, void 0, false, {
                                            fileName: "[project]/components/content/sidebar.tsx",
                                            lineNumber: 163,
                                            columnNumber: 9
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/content/sidebar.tsx",
                                        lineNumber: 162,
                                        columnNumber: 7
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm text-white/90 font-medium",
                                        children: [
                                            "Affordable ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                fileName: "[project]/components/content/sidebar.tsx",
                                                lineNumber: 166,
                                                columnNumber: 20
                                            }, this),
                                            " Coverage"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/content/sidebar.tsx",
                                        lineNumber: 165,
                                        columnNumber: 7
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/content/sidebar.tsx",
                                lineNumber: 161,
                                columnNumber: 5
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col items-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-14 h-14 bg-white rounded-lg flex items-center justify-center mb-3",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$ambulance$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Ambulance$3e$__["Ambulance"], {
                                            className: "w-8 h-8 text-primary"
                                        }, void 0, false, {
                                            fileName: "[project]/components/content/sidebar.tsx",
                                            lineNumber: 173,
                                            columnNumber: 9
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/content/sidebar.tsx",
                                        lineNumber: 172,
                                        columnNumber: 7
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-base text-primary/90 font-medium",
                                        children: [
                                            "Premium Medical ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                fileName: "[project]/components/content/sidebar.tsx",
                                                lineNumber: 176,
                                                columnNumber: 25
                                            }, this),
                                            " Treatment Access"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/content/sidebar.tsx",
                                        lineNumber: 175,
                                        columnNumber: 7
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/content/sidebar.tsx",
                                lineNumber: 171,
                                columnNumber: 5
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col items-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-14 h-14 bg-white rounded-full flex items-center justify-center mb-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "relative w-8 h-8 text-primary",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__["User"], {
                                                        className: "w-8 h-8"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/content/sidebar.tsx",
                                                        lineNumber: 184,
                                                        columnNumber: 3
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"], {
                                                        className: "w-3 h-3 absolute -bottom-1 -right-1 bg-white rounded-full p-[1px]"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/content/sidebar.tsx",
                                                        lineNumber: 185,
                                                        columnNumber: 3
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/content/sidebar.tsx",
                                                lineNumber: 183,
                                                columnNumber: 1
                                            }, this),
                                            "      "
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/content/sidebar.tsx",
                                        lineNumber: 182,
                                        columnNumber: 7
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-base text-primary/90 font-medium",
                                        children: [
                                            "24/7 ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                fileName: "[project]/components/content/sidebar.tsx",
                                                lineNumber: 188,
                                                columnNumber: 14
                                            }, this),
                                            " Support"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/content/sidebar.tsx",
                                        lineNumber: 187,
                                        columnNumber: 7
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/content/sidebar.tsx",
                                lineNumber: 181,
                                columnNumber: 5
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col items-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-14 h-14 bg-white rounded-full flex items-center justify-center mb-3",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__["CheckCircle"], {
                                            className: "w-8 h-8 text-primary"
                                        }, void 0, false, {
                                            fileName: "[project]/components/content/sidebar.tsx",
                                            lineNumber: 195,
                                            columnNumber: 9
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/content/sidebar.tsx",
                                        lineNumber: 194,
                                        columnNumber: 7
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-base text-primary/90 font-medium",
                                        children: [
                                            "Instant Claim ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                fileName: "[project]/components/content/sidebar.tsx",
                                                lineNumber: 198,
                                                columnNumber: 23
                                            }, this),
                                            " Processing"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/content/sidebar.tsx",
                                        lineNumber: 197,
                                        columnNumber: 7
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/content/sidebar.tsx",
                                lineNumber: 193,
                                columnNumber: 5
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/content/sidebar.tsx",
                        lineNumber: 159,
                        columnNumber: 3
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        href: "/insurance",
                        className: "   mt-6 inline-block   bg-white   text-primary   px-6 py-3   rounded-lg   font-semibold   hover:bg-gray-100   transition   ",
                        children: "Buy Your Insurance Now!"
                    }, void 0, false, {
                        fileName: "[project]/components/content/sidebar.tsx",
                        lineNumber: 204,
                        columnNumber: 3
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/content/sidebar.tsx",
                lineNumber: 154,
                columnNumber: 1
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/content/sidebar.tsx",
        lineNumber: 6,
        columnNumber: 13
    }, this);
}
_c = Sidebar;
var _c;
__turbopack_context__.k.register(_c, "Sidebar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/insurance/business/business/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>BusinessInsurancePage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$page$2d$hero$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/page-hero.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$content$2f$sidebar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/content/sidebar.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$house$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Home$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/house.js [app-client] (ecmascript) <export default as Home>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bookmark$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bookmark$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/bookmark.js [app-client] (ecmascript) <export default as Bookmark>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
const faqs = [
    {
        question: "What is Business Insurance?",
        answer: "Business insurance is a type of coverage designed to protect businesses from potential losses due to unforeseen events such as property damage, legal liability, employee-related risks, and other operational hazards."
    },
    {
        question: "Why is Business Insurance important in the UAE?",
        answer: "Business insurance is crucial in the UAE as it helps protect companies from financial losses due to accidents, lawsuits, natural disasters, and other risks. It ensures business continuity and can help businesses comply with legal requirements."
    },
    {
        question: "Is Business Insurance mandatory in the UAE?",
        answer: "Some types of business insurance are mandatory in the UAE, such as workers’ compensation and health insurance for employees, and motor insurance for company vehicles. Other covers, like liability or property insurance, may not be legally required but are highly recommended based on your business activities."
    },
    {
        question: "How are Business Insurance premiums calculated in the UAE?",
        answer: "Premiums are typically calculated based on factors such as the nature of your business, size of operations, annual revenue, number of employees, claims history, coverage limits, and the types of risks involved in your industry."
    },
    {
        question: "How can a business in the UAE choose the right insurance provider?",
        answer: "Businesses should compare quotes from multiple insurers or work with a trusted broker, review coverage details carefully, check the insurer’s reputation and claims support, and ensure the policy is tailored to their specific risks and regulatory requirements."
    }
];
const coverageCards = [
    {
        title: "Liability Insurance",
        description: "Liability Insurance is for businesses in the UAE. It protects your business against claims of injury or damage caused to third parties. This can include claims resulting from accidents, product defects, or professional errors or omissions."
    },
    {
        title: "Workers Compensation Insurance",
        description: "This insurance is mandatory in the UAE and covers medical expenses, disability payments, and lost wages for employees who are injured or fall ill while on the job. This type of insurance provides peace of mind for both employers and employees."
    },
    {
        title: "Property Insurance",
        description: "Property insurance protects businesses from financial losses arising from damage or loss of equipment, inventory, or property due to events such as fire, theft or natural disasters."
    },
    {
        title: "Marine Insurance",
        description: "Marine insurance covers the physical loss or damage of ships, cargo, terminals, and any transport by which the property is transferred, acquired, or held between the points of origin and the final destination."
    },
    {
        title: "Professional Indemnity",
        description: "Professional indemnity insurance will protect businesses from claims made against them by third parties for mistakes, omissions, errors, or financial loss"
    },
    {
        title: "Public Liability",
        description: "This insurance will indemnify against all sums which the insured shall become legally liable as an occupier of the premises due to accidents causing damage and/or bodily injury (Fatal or Non-Fatal) to Third Parties arising out of their Business."
    }
];
const whyItems = [
    {
        title: "Comprehensive Coverage Options",
        content: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
            className: "list-disc pl-5 space-y-2 text-[#4A4A4A] text-sm md:text-base",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                    children: "iNSURA.ae powered by PIONEER offers a wide range of insurance products tailored for different industries."
                }, void 0, false, {
                    fileName: "[project]/app/insurance/business/business/page.tsx",
                    lineNumber: 73,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                    children: "Policies cover everything from liability and property insurance to employee protection."
                }, void 0, false, {
                    fileName: "[project]/app/insurance/business/business/page.tsx",
                    lineNumber: 77,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/app/insurance/business/business/page.tsx",
            lineNumber: 72,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    },
    {
        title: "Competitive Premiums",
        content: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
            className: "list-disc pl-5 space-y-2 text-[#4A4A4A] text-sm md:text-base",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                    children: "Affordable premium rates without compromising coverage quality."
                }, void 0, false, {
                    fileName: "[project]/app/insurance/business/business/page.tsx",
                    lineNumber: 88,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                    children: "Flexible payment plans available."
                }, void 0, false, {
                    fileName: "[project]/app/insurance/business/business/page.tsx",
                    lineNumber: 89,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/app/insurance/business/business/page.tsx",
            lineNumber: 87,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    },
    {
        title: "Customized Insurance Solutions",
        content: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
            className: "list-disc pl-5 space-y-2 text-[#4A4A4A] text-sm md:text-base",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                    children: "Policies tailored to match your business’s specific risks and requirements."
                }, void 0, false, {
                    fileName: "[project]/app/insurance/business/business/page.tsx",
                    lineNumber: 97,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                    children: "Avoid paying for coverage you don’t need."
                }, void 0, false, {
                    fileName: "[project]/app/insurance/business/business/page.tsx",
                    lineNumber: 101,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/app/insurance/business/business/page.tsx",
            lineNumber: 96,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    },
    {
        title: "Fast and Efficient Claims Processing",
        content: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
            className: "list-disc pl-5 space-y-2 text-[#4A4A4A] text-sm md:text-base",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                    children: "Quick and transparent claims process."
                }, void 0, false, {
                    fileName: "[project]/app/insurance/business/business/page.tsx",
                    lineNumber: 109,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                    children: "Dedicated claims support teams."
                }, void 0, false, {
                    fileName: "[project]/app/insurance/business/business/page.tsx",
                    lineNumber: 110,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/app/insurance/business/business/page.tsx",
            lineNumber: 108,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }
];
function BusinessInsurancePage() {
    _s();
    const [openIndex, setOpenIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    // multi-open for "Why choose" accordion
    const [whyOpen, setWhyOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([
        true,
        false,
        false,
        false
    ]);
    const toggleWhy = (index)=>{
        setWhyOpen((prev)=>prev.map((isOpen, i)=>i === index ? !isOpen : isOpen));
    };
    // ---------- FORM STATE + VALIDATION ----------
    const [form, setForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        company: "",
        person: "",
        mobile: "",
        email: "",
        category: ""
    });
    const [errors, setErrors] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const handleSubmit = (e)=>{
        e.preventDefault(); // ❗ prevent page reload / jumping up
        const newErrors = {};
        if (!form.company.trim()) {
            newErrors.company = "This field is required. Please input company name.";
        }
        if (!form.person.trim()) {
            newErrors.person = "This field is required. Please input your name.";
        }
        if (!form.mobile.trim()) {
            newErrors.mobile = "This field is required. Please input a phone number.";
        }
        if (!form.email.trim()) {
            newErrors.email = "This field is required. Please input a valid email.";
        } else if (!/\S+@\S+\.\S+/.test(form.email)) {
            newErrors.email = "Please enter a valid email address.";
        }
        if (!form.category) {
            newErrors.category = "Please select a business category.";
        }
        setErrors(newErrors);
        // if there are errors, just stop here (form stays in place, red messages show)
        if (Object.keys(newErrors).length > 0) return;
        // TODO: send data to API here if you want
        console.log("Form submitted:", form);
    };
    const scrollToHero = ()=>{
        const el = document.getElementById("business-hero");
        if (el) el.scrollIntoView({
            behavior: "smooth"
        });
    };
    const scrollToTop = ()=>{
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                id: "business-hero",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$page$2d$hero$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PageHero"], {
                    breadcrumb: "Business Insurance",
                    title: "Business Insurance",
                    description: "Protect your business from unexpected twist and turn, your success deserves reliable support."
                }, void 0, false, {
                    fileName: "[project]/app/insurance/business/business/page.tsx",
                    lineNumber: 208,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/insurance/business/business/page.tsx",
                lineNumber: 207,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "py-16 bg-background",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "text-3xl md:text-4xl font-extrabold text-[#003566] mb-10",
                            children: "Business Insurance to Secure Your Business Legacy in UAE!"
                        }, void 0, false, {
                            fileName: "[project]/app/insurance/business/business/page.tsx",
                            lineNumber: 217,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-1 lg:grid-cols-3 gap-12",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "lg:col-span-2 space-y-12 text-justify",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                            className: "bg-white p-8  shadow-md ",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                                className: "space-y-8",
                                                onSubmit: handleSubmit,
                                                noValidate: true,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "grid grid-cols-1 md:grid-cols-2 gap-6",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                        className: "block text-[#797575] font-semibold mb-2",
                                                                        children: "Company name"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/insurance/business/business/page.tsx",
                                                                        lineNumber: 230,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                        type: "text",
                                                                        placeholder: "Enter company name...",
                                                                        className: `w-full p-3 rounded-lg bg-blue-50 outline-none ${errors.company ? "border" : ""}`,
                                                                        value: form.company,
                                                                        onChange: (e)=>setForm((prev)=>({
                                                                                    ...prev,
                                                                                    company: e.target.value
                                                                                }))
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/insurance/business/business/page.tsx",
                                                                        lineNumber: 233,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/insurance/business/business/page.tsx",
                                                                lineNumber: 229,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                        className: "block text-[#797575] font-semibold mb-2",
                                                                        children: [
                                                                            "Concern Person name ",
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "text-[#f15f5f]",
                                                                                children: "*"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/insurance/business/business/page.tsx",
                                                                                lineNumber: 252,
                                                                                columnNumber: 45
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/app/insurance/business/business/page.tsx",
                                                                        lineNumber: 251,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                        type: "text",
                                                                        placeholder: "Concern person name...",
                                                                        className: `w-full p-3 rounded-lg bg-blue-50 outline-none ${errors.person ? "border " : ""}`,
                                                                        value: form.person,
                                                                        onChange: (e)=>setForm((prev)=>({
                                                                                    ...prev,
                                                                                    person: e.target.value
                                                                                }))
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/insurance/business/business/page.tsx",
                                                                        lineNumber: 254,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    errors.person && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "mt-1 text-xs text-red-500",
                                                                        children: errors.person
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/insurance/business/business/page.tsx",
                                                                        lineNumber: 269,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/insurance/business/business/page.tsx",
                                                                lineNumber: 250,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/insurance/business/business/page.tsx",
                                                        lineNumber: 228,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "grid grid-cols-1 md:grid-cols-2 gap-6",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                        className: "block text-[#797575] font-semibold mb-2",
                                                                        children: [
                                                                            "Mobile Number ",
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "text-[#f15f5f]",
                                                                                children: "*"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/insurance/business/business/page.tsx",
                                                                                lineNumber: 279,
                                                                                columnNumber: 39
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/app/insurance/business/business/page.tsx",
                                                                        lineNumber: 278,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                        type: "text",
                                                                        placeholder: "enter mobile number...",
                                                                        className: `w-full p-3 rounded-lg bg-blue-50 outline-none ${errors.mobile ? "border" : ""}`,
                                                                        value: form.mobile,
                                                                        onChange: (e)=>setForm((prev)=>({
                                                                                    ...prev,
                                                                                    mobile: e.target.value
                                                                                }))
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/insurance/business/business/page.tsx",
                                                                        lineNumber: 281,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    errors.mobile && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "mt-1 text-xs text-red-500",
                                                                        children: errors.mobile
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/insurance/business/business/page.tsx",
                                                                        lineNumber: 296,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/insurance/business/business/page.tsx",
                                                                lineNumber: 277,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                        className: "block text-[#797575] font-semibold mb-2",
                                                                        children: [
                                                                            "Email Address ",
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "text-[#f15f5f]",
                                                                                children: "*"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/insurance/business/business/page.tsx",
                                                                                lineNumber: 304,
                                                                                columnNumber: 39
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/app/insurance/business/business/page.tsx",
                                                                        lineNumber: 303,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                        type: "email",
                                                                        placeholder: "enter email id...",
                                                                        className: `w-full p-3 rounded-lg bg-blue-50 outline-none ${errors.email ? "border " : ""}`,
                                                                        value: form.email,
                                                                        onChange: (e)=>setForm((prev)=>({
                                                                                    ...prev,
                                                                                    email: e.target.value
                                                                                }))
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/insurance/business/business/page.tsx",
                                                                        lineNumber: 306,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    errors.email && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "mt-1 text-xs text-red-500",
                                                                        children: errors.email
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/insurance/business/business/page.tsx",
                                                                        lineNumber: 321,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/insurance/business/business/page.tsx",
                                                                lineNumber: 302,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/insurance/business/business/page.tsx",
                                                        lineNumber: 276,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                className: "block text-[#797575] font-semibold mb-2",
                                                                children: "Business Category"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/insurance/business/business/page.tsx",
                                                                lineNumber: 329,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                                className: `w-full p-3 rounded-lg bg-blue-50 outline-none hover:bg-sky-100 ${errors.category ? "border " : ""}`,
                                                                value: form.category,
                                                                onChange: (e)=>setForm((prev)=>({
                                                                            ...prev,
                                                                            category: e.target.value
                                                                        })),
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                        value: "",
                                                                        children: "Select business"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/insurance/business/business/page.tsx",
                                                                        lineNumber: 344,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                        value: "event",
                                                                        children: "Event Insurance"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/insurance/business/business/page.tsx",
                                                                        lineNumber: 345,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                        value: "property",
                                                                        children: "Property All Risks"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/insurance/business/business/page.tsx",
                                                                        lineNumber: 346,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                        value: "marine",
                                                                        children: "Marine Cargo"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/insurance/business/business/page.tsx",
                                                                        lineNumber: 347,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/insurance/business/business/page.tsx",
                                                                lineNumber: 332,
                                                                columnNumber: 21
                                                            }, this),
                                                            errors.category && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "mt-1 text-xs text-red-500",
                                                                children: errors.category
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/insurance/business/business/page.tsx",
                                                                lineNumber: 350,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/insurance/business/business/page.tsx",
                                                        lineNumber: 328,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        type: "submit",
                                                        className: "px-6 py-3 bg-blue-600 text-white rounded-md font-semibold",
                                                        children: "Send Application"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/insurance/business/business/page.tsx",
                                                        lineNumber: 356,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/insurance/business/business/page.tsx",
                                                lineNumber: 227,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/insurance/business/business/page.tsx",
                                            lineNumber: 226,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mt-12 max-w-3xl",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-[35px] font-normal text-gray-700 leading-snug",
                                                children: [
                                                    "Your Business needs to be run Smoothly that’s Why You Need",
                                                    " ",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "font-bold text-[#555353]",
                                                        children: "Business Insurance Policy"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/insurance/business/business/page.tsx",
                                                        lineNumber: 369,
                                                        columnNumber: 19
                                                    }, this),
                                                    " ",
                                                    "in UAE."
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/insurance/business/business/page.tsx",
                                                lineNumber: 367,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/insurance/business/business/page.tsx",
                                            lineNumber: 366,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "grid grid-cols-1 md:grid-cols-2 gap-6",
                                                children: coverageCards.map((card, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "group [perspective:1200px]",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "relative h-72 w-full transition-transform duration-700   [transform-style:preserve-3d]   group-hover:[transform:rotateY(180deg)]",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "absolute inset-0 flex flex-col items-center justify-center   rounded-xl bg-[#003566] text-white   [backface-visibility:hidden]",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$house$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Home$3e$__["Home"], {
                                                                            className: "w-10 h-10 mb-4 text-yellow-300"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/insurance/business/business/page.tsx",
                                                                            lineNumber: 392,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                            className: "text-lg md:text-xl font-semibold text-center",
                                                                            children: card.title
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/insurance/business/business/page.tsx",
                                                                            lineNumber: 393,
                                                                            columnNumber: 27
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/insurance/business/business/page.tsx",
                                                                    lineNumber: 387,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "absolute inset-0 flex flex-col items-center justify-center gap-4   rounded-xl bg-white text-[#484848] border   [backface-visibility:hidden]   [transform:rotateY(180deg)]",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                            className: "text-center text-base md:text-lg font-medium px-4",
                                                                            children: card.description
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/insurance/business/business/page.tsx",
                                                                            lineNumber: 405,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                            type: "button",
                                                                            onClick: scrollToTop,
                                                                            className: "flex items-center gap-2 px-4 py-2 rounded-md   bg-white text-[#191c61] font-semibold text-sm   border border-[#191c61] hover:bg-[#191c61] hover:text-white",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    children: "Buy Now"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/app/insurance/business/business/page.tsx",
                                                                                    lineNumber: 414,
                                                                                    columnNumber: 29
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    className: "h-4 w-4 flex items-center justify-center rounded-[3px]   bg-[#191c61] text-white hover:bg-white hover:text-[#191c61]",
                                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bookmark$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bookmark$3e$__["Bookmark"], {
                                                                                        className: "h-3 w-3",
                                                                                        strokeWidth: 3
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/app/insurance/business/business/page.tsx",
                                                                                        lineNumber: 420,
                                                                                        columnNumber: 31
                                                                                    }, this)
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/app/insurance/business/business/page.tsx",
                                                                                    lineNumber: 416,
                                                                                    columnNumber: 29
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/app/insurance/business/business/page.tsx",
                                                                            lineNumber: 409,
                                                                            columnNumber: 27
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/insurance/business/business/page.tsx",
                                                                    lineNumber: 399,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/insurance/business/business/page.tsx",
                                                            lineNumber: 381,
                                                            columnNumber: 23
                                                        }, this)
                                                    }, index, false, {
                                                        fileName: "[project]/app/insurance/business/business/page.tsx",
                                                        lineNumber: 380,
                                                        columnNumber: 21
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/app/insurance/business/business/page.tsx",
                                                lineNumber: 378,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/insurance/business/business/page.tsx",
                                            lineNumber: 377,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                            className: "space-y-10",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "space-y-4",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                            className: "text-3xl md:text-3xl font-semibold text-[#003566]",
                                                            children: "Protecting Your Enterprise with Business Insurance by iNSURA.ae"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/insurance/business/business/page.tsx",
                                                            lineNumber: 436,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-muted-foreground  leading-relaxed",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "font-bold text-[#3b3939]",
                                                                    children: [
                                                                        " ",
                                                                        "iNSURA Powered by Pioneer Insurance",
                                                                        " "
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/insurance/business/business/page.tsx",
                                                                    lineNumber: 441,
                                                                    columnNumber: 21
                                                                }, this),
                                                                "is here to safeguard what you’ve built with top-notch, affordable business insurance tailored for UAE businesses. Your business is the result of relentless dedication, strategic planning, and countless sacrifices. At Insura.ae, we understand the value of your hard work. Let us protect what you’ve built, so you can focus on growing it."
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/insurance/business/business/page.tsx",
                                                            lineNumber: 440,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/insurance/business/business/page.tsx",
                                                    lineNumber: 435,
                                                    columnNumber: 17
                                                }, this),
                                                " ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "space-y-4",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                            className: "text-4xl md:text-3xl font-semibold text-[#003566]",
                                                            children: " Why Your Business Needs Insurance "
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/insurance/business/business/page.tsx",
                                                            lineNumber: 454,
                                                            columnNumber: 4
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-muted-foreground leading-relaxed",
                                                            children: " Business insurance is not just a safety net, it’s a crucial investment in your company’s future. Here’s why every business should have insurance: "
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/insurance/business/business/page.tsx",
                                                            lineNumber: 455,
                                                            columnNumber: 4
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                            className: "space-y-3 text-muted-foreground",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                    children: [
                                                                        " ",
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "font-bold text-[#5b5757]",
                                                                            children: " Risk Mitigation – "
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/insurance/business/business/page.tsx",
                                                                            lineNumber: 458,
                                                                            columnNumber: 14
                                                                        }, this),
                                                                        " ",
                                                                        " Protects against financial losses due to property damage, lawsuits, or other unforeseen circumstances. "
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/insurance/business/business/page.tsx",
                                                                    lineNumber: 458,
                                                                    columnNumber: 9
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                    children: [
                                                                        " ",
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "font-bold text-[#5b5757]",
                                                                            children: " Legal Requirements – "
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/insurance/business/business/page.tsx",
                                                                            lineNumber: 459,
                                                                            columnNumber: 14
                                                                        }, this),
                                                                        " ",
                                                                        " Many types of insurance, such as workers’ compensation, are mandatory by law, ensuring compliance and avoiding penalties. "
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/insurance/business/business/page.tsx",
                                                                    lineNumber: 459,
                                                                    columnNumber: 9
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                    children: [
                                                                        " ",
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "font-bold text-[#5b5757]",
                                                                            children: " Continuity Planning – "
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/insurance/business/business/page.tsx",
                                                                            lineNumber: 460,
                                                                            columnNumber: 14
                                                                        }, this),
                                                                        " ",
                                                                        " Helps your business recover quickly from unexpected events, minimizing downtime and maintaining operations. "
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/insurance/business/business/page.tsx",
                                                                    lineNumber: 460,
                                                                    columnNumber: 9
                                                                }, this),
                                                                " "
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/insurance/business/business/page.tsx",
                                                            lineNumber: 457,
                                                            columnNumber: 7
                                                        }, this),
                                                        " "
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/insurance/business/business/page.tsx",
                                                    lineNumber: 453,
                                                    columnNumber: 32
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "space-y-4",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                            className: "text-3xl md:text-3xl font-bold text-[#003566]",
                                                            children: " How iNSURA.ae Powered by Pioneer Will Help You. "
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/insurance/business/business/page.tsx",
                                                            lineNumber: 463,
                                                            columnNumber: 12
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-muted-foreground  leading-relaxed",
                                                            children: [
                                                                " In a dynamic business environment where risks and uncertainties are ever-present, ",
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "font-bold text-[#4a4848]",
                                                                    children: "iNSURA.ae Powered by Pioneer Insurance"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/insurance/business/business/page.tsx",
                                                                    lineNumber: 464,
                                                                    columnNumber: 149
                                                                }, this),
                                                                " stands as your trusted partner. We meticulously gather and evaluate insurance options to secure the best coverage for your business in Dubai and the UAE. "
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/insurance/business/business/page.tsx",
                                                            lineNumber: 464,
                                                            columnNumber: 12
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-muted-foreground  leading-relaxed",
                                                            children: "Our goal is to protect you from potential threats, ensuring you have the confidence and resources to navigate changes seamlessly. With our 24/7 support, we handle the complexities of insurance, allowing you to focus on achieving your organisational goals without worrying about the unforeseen. Let us be the shield that keeps your business safeguarded and your objectives on track."
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/insurance/business/business/page.tsx",
                                                            lineNumber: 465,
                                                            columnNumber: 12
                                                        }, this),
                                                        " "
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/insurance/business/business/page.tsx",
                                                    lineNumber: 462,
                                                    columnNumber: 10
                                                }, this),
                                                " ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "space-y-10 text-[#4A4A4A]",
                                                    children: [
                                                        " ",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                            className: "text-3xl md:text-4xl font-semibold text-[#0A2B51]",
                                                            children: " iNSURA.ae Business Insurance Plans "
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/insurance/business/business/page.tsx",
                                                            lineNumber: 466,
                                                            columnNumber: 90
                                                        }, this),
                                                        " ",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                " ",
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-xl font-semibold text-[#000000]",
                                                                    children: " 1. General Liability Insurance "
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/insurance/business/business/page.tsx",
                                                                    lineNumber: 467,
                                                                    columnNumber: 34
                                                                }, this),
                                                                " ",
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                                    className: "list-disc ml-6 space-y-2",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    className: "text-[#686666] font-bold",
                                                                                    children: "Comprehensive Protection –"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/app/insurance/business/business/page.tsx",
                                                                                    lineNumber: 468,
                                                                                    columnNumber: 20
                                                                                }, this),
                                                                                "Safeguard your business from third-party claims of bodily injury, property damage, and more."
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/app/insurance/business/business/page.tsx",
                                                                            lineNumber: 468,
                                                                            columnNumber: 16
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    className: "text-[#686666] font-bold",
                                                                                    children: "Peace of Mind –"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/app/insurance/business/business/page.tsx",
                                                                                    lineNumber: 470,
                                                                                    columnNumber: 20
                                                                                }, this),
                                                                                "Ensure your business is protected against legal liabilities and potential financial losses."
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/app/insurance/business/business/page.tsx",
                                                                            lineNumber: 470,
                                                                            columnNumber: 16
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    className: "text-[#686666] font-bold",
                                                                                    children: "Flexible Coverage – "
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/app/insurance/business/business/page.tsx",
                                                                                    lineNumber: 473,
                                                                                    columnNumber: 20
                                                                                }, this),
                                                                                "Tailor your policy to match your business’s specific risks and requirements."
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/app/insurance/business/business/page.tsx",
                                                                            lineNumber: 473,
                                                                            columnNumber: 16
                                                                        }, this),
                                                                        " "
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/insurance/business/business/page.tsx",
                                                                    lineNumber: 467,
                                                                    columnNumber: 123
                                                                }, this),
                                                                " "
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/insurance/business/business/page.tsx",
                                                            lineNumber: 467,
                                                            columnNumber: 28
                                                        }, this),
                                                        " ",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                " ",
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-xl font-semibold text-[#000000]",
                                                                    children: " 2. Property Insurance "
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/insurance/business/business/page.tsx",
                                                                    lineNumber: 474,
                                                                    columnNumber: 38
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                                    className: "list-disc ml-6 space-y-2",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    className: "text-[#686666] font-bold",
                                                                                    children: "Asset Protection –"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/app/insurance/business/business/page.tsx",
                                                                                    lineNumber: 476,
                                                                                    columnNumber: 23
                                                                                }, this),
                                                                                " Cover your business property, including buildings, equipment, and inventory, against damage or loss."
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/app/insurance/business/business/page.tsx",
                                                                            lineNumber: 476,
                                                                            columnNumber: 19
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    className: "text-[#686666] font-bold",
                                                                                    children: "Natural Disasters Coverage – "
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/app/insurance/business/business/page.tsx",
                                                                                    lineNumber: 478,
                                                                                    columnNumber: 22
                                                                                }, this),
                                                                                "Protect your assets from events like fires, floods, and earthquakes."
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/app/insurance/business/business/page.tsx",
                                                                            lineNumber: 478,
                                                                            columnNumber: 18
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    className: "text-[#686666] font-bold",
                                                                                    children: "Business Interruption – "
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/app/insurance/business/business/page.tsx",
                                                                                    lineNumber: 479,
                                                                                    columnNumber: 22
                                                                                }, this),
                                                                                "Ensure your business can recover quickly with coverage for lost income during disruptions."
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/app/insurance/business/business/page.tsx",
                                                                            lineNumber: 479,
                                                                            columnNumber: 18
                                                                        }, this),
                                                                        " "
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/insurance/business/business/page.tsx",
                                                                    lineNumber: 475,
                                                                    columnNumber: 17
                                                                }, this),
                                                                " "
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/insurance/business/business/page.tsx",
                                                            lineNumber: 474,
                                                            columnNumber: 32
                                                        }, this),
                                                        " ",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                " ",
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-xl font-semibold text-[#000000]",
                                                                    children: " 3. Workers' Compensation Insurance "
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/insurance/business/business/page.tsx",
                                                                    lineNumber: 481,
                                                                    columnNumber: 39
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                                    className: "list-disc ml-6 space-y-2",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    className: "text-[#686666] font-bold",
                                                                                    children: "Employee Coverage – "
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/app/insurance/business/business/page.tsx",
                                                                                    lineNumber: 483,
                                                                                    columnNumber: 23
                                                                                }, this),
                                                                                "Provide medical benefits and wage replacement for employees injured on the job."
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/app/insurance/business/business/page.tsx",
                                                                            lineNumber: 483,
                                                                            columnNumber: 19
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    className: "text-[#686666] font-bold",
                                                                                    children: "Legal Compliance –"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/app/insurance/business/business/page.tsx",
                                                                                    lineNumber: 484,
                                                                                    columnNumber: 22
                                                                                }, this),
                                                                                " Meet your legal obligations and protect your business from potential lawsuits."
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/app/insurance/business/business/page.tsx",
                                                                            lineNumber: 484,
                                                                            columnNumber: 18
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    className: "text-[#686666] font-bold",
                                                                                    children: "Employee Well-being –"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/app/insurance/business/business/page.tsx",
                                                                                    lineNumber: 486,
                                                                                    columnNumber: 23
                                                                                }, this),
                                                                                " Demonstrate your commitment to your employees’ health and safety."
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/app/insurance/business/business/page.tsx",
                                                                            lineNumber: 486,
                                                                            columnNumber: 19
                                                                        }, this),
                                                                        " "
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/insurance/business/business/page.tsx",
                                                                    lineNumber: 482,
                                                                    columnNumber: 18
                                                                }, this),
                                                                " "
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/insurance/business/business/page.tsx",
                                                            lineNumber: 481,
                                                            columnNumber: 33
                                                        }, this),
                                                        " ",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                " ",
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-xl font-semibold text-[#000000]",
                                                                    children: " 4. Professional Liability Insurance "
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/insurance/business/business/page.tsx",
                                                                    lineNumber: 487,
                                                                    columnNumber: 40
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                                    className: "list-disc ml-6 space-y-2",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    className: "text-[#686666] font-bold",
                                                                                    children: "Error and Omissions Protection – "
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/app/insurance/business/business/page.tsx",
                                                                                    lineNumber: 490,
                                                                                    columnNumber: 25
                                                                                }, this),
                                                                                "Cover your business against claims of negligence or mistakes in professional services."
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/app/insurance/business/business/page.tsx",
                                                                            lineNumber: 490,
                                                                            columnNumber: 21
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    className: "text-[#686666] font-bold",
                                                                                    children: "Reputation Management – "
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/app/insurance/business/business/page.tsx",
                                                                                    lineNumber: 491,
                                                                                    columnNumber: 25
                                                                                }, this),
                                                                                "Protect your business reputation and financial stability."
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/app/insurance/business/business/page.tsx",
                                                                            lineNumber: 491,
                                                                            columnNumber: 21
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    className: "text-[#686666] font-bold",
                                                                                    children: "Customized Policies –"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/app/insurance/business/business/page.tsx",
                                                                                    lineNumber: 492,
                                                                                    columnNumber: 26
                                                                                }, this),
                                                                                " Tailor your coverage to fit the specific risks associated with your industry."
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/app/insurance/business/business/page.tsx",
                                                                            lineNumber: 492,
                                                                            columnNumber: 22
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/insurance/business/business/page.tsx",
                                                                    lineNumber: 489,
                                                                    columnNumber: 20
                                                                }, this),
                                                                " "
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/insurance/business/business/page.tsx",
                                                            lineNumber: 487,
                                                            columnNumber: 34
                                                        }, this),
                                                        " "
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/insurance/business/business/page.tsx",
                                                    lineNumber: 466,
                                                    columnNumber: 46
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                                    className: "grid grid-cols-1 md:grid-cols-2 gap-10 items-start mt-10",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex justify-center md:justify-start",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                                src: "/services-details-img1.webp",
                                                                alt: "Business Meeting",
                                                                className: "rounded-lg w-full h-[400px] object-cover"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/insurance/business/business/page.tsx",
                                                                lineNumber: 499,
                                                                columnNumber: 21
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/insurance/business/business/page.tsx",
                                                            lineNumber: 498,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "space-y-6 max-w-md",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                                    className: "text-3xl md:text-3xl font-semibold text-[#003566]",
                                                                    children: "Why Choose iNSURA powered by PIONEER?"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/insurance/business/business/page.tsx",
                                                                    lineNumber: 507,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "space-y-4",
                                                                    children: whyItems.map((item, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "border-b border-gray-200 pb-3",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                    type: "button",
                                                                                    onClick: ()=>toggleWhy(idx),
                                                                                    className: "w-full flex items-center justify-between text-left font-semibold text-[#4A4A4A]",
                                                                                    children: [
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                            children: item.title
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/app/insurance/business/business/page.tsx",
                                                                                            lineNumber: 522,
                                                                                            columnNumber: 29
                                                                                        }, this),
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                            className: "text-lg",
                                                                                            children: whyOpen[idx] ? "▲" : "▼"
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/app/insurance/business/business/page.tsx",
                                                                                            lineNumber: 523,
                                                                                            columnNumber: 29
                                                                                        }, this)
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/app/insurance/business/business/page.tsx",
                                                                                    lineNumber: 517,
                                                                                    columnNumber: 27
                                                                                }, this),
                                                                                whyOpen[idx] && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    className: "mt-2",
                                                                                    children: item.content
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/app/insurance/business/business/page.tsx",
                                                                                    lineNumber: 529,
                                                                                    columnNumber: 29
                                                                                }, this)
                                                                            ]
                                                                        }, item.title, true, {
                                                                            fileName: "[project]/app/insurance/business/business/page.tsx",
                                                                            lineNumber: 513,
                                                                            columnNumber: 25
                                                                        }, this))
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/insurance/business/business/page.tsx",
                                                                    lineNumber: 511,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-[#4A4A4A] leading-relaxed",
                                                                    children: "We want you to focus on your business — we will take care of its insurance."
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/insurance/business/business/page.tsx",
                                                                    lineNumber: 535,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    className: "px-6 py-2 bg-[#003566] text-[#ffd34d] font-semibold rounded-md shadow",
                                                                    type: "button",
                                                                    onClick: scrollToTop,
                                                                    children: "Buy Now"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/insurance/business/business/page.tsx",
                                                                    lineNumber: 539,
                                                                    columnNumber: 1
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/insurance/business/business/page.tsx",
                                                            lineNumber: 506,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/insurance/business/business/page.tsx",
                                                    lineNumber: 497,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                                    className: "space-y-6 mt-12",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                            className: "text-3xl md:text-3xl font-bold text-[#003566]",
                                                            children: " Insura.ae Values Your Time — Get Business Insurance in 3 Easy Steps "
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/insurance/business/business/page.tsx",
                                                            lineNumber: 554,
                                                            columnNumber: 4
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-muted-foreground leading-relaxed",
                                                            children: [
                                                                " ",
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "font-extrabold text-[#514f4f]",
                                                                    children: " Share Requirements – "
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/insurance/business/business/page.tsx",
                                                                    lineNumber: 555,
                                                                    columnNumber: 59
                                                                }, this),
                                                                " ",
                                                                "Simply tell us about your business needs and preferences. We’ll use this information to find the best insurance options tailored specifically for you."
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/insurance/business/business/page.tsx",
                                                            lineNumber: 555,
                                                            columnNumber: 5
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-muted-foreground leading-relaxed",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "font-extrabold text-[#514f4f]",
                                                                    children: " Compare Options – "
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/insurance/business/business/page.tsx",
                                                                    lineNumber: 560,
                                                                    columnNumber: 8
                                                                }, this),
                                                                " ",
                                                                "We’ll gather and compare comprehensive policies from leading UAE insurers, ensuring you get the most suitable coverage at the best price. "
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/insurance/business/business/page.tsx",
                                                            lineNumber: 559,
                                                            columnNumber: 5
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-muted-foreground leading-relaxed",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "font-extrabold text-[#514f4f]",
                                                                    children: " Get Covered – "
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/insurance/business/business/page.tsx",
                                                                    lineNumber: 564,
                                                                    columnNumber: 11
                                                                }, this),
                                                                " ",
                                                                "Choose the plan that fits your needs, and we’ll handle the paperwork and implementation, providing you with full protection efficiently and effortlessly. "
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/insurance/business/business/page.tsx",
                                                            lineNumber: 563,
                                                            columnNumber: 10
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/insurance/business/business/page.tsx",
                                                    lineNumber: 553,
                                                    columnNumber: 1
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                                    className: "space-y-6 mt-12",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                            className: "text-3xl md:text-3xl font-semibold text-[#003566]",
                                                            children: "Customized Solutions for Your Business "
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/insurance/business/business/page.tsx",
                                                            lineNumber: 570,
                                                            columnNumber: 14
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-[#494848] leading-relaxed",
                                                            children: "At iNSURA.ae powered by PIONEER, we understand that every business is unique. Our expert team works closely with you to assess your specific risks and tailor insurance solutions that meet your needs. Whether you’re a small startup or a large corporation, our goal is to provide comprehensive coverage that protects your business’s assets, employees, and reputation.​"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/insurance/business/business/page.tsx",
                                                            lineNumber: 572,
                                                            columnNumber: 16
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex justify-center",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                                src: "/Untitled.webp",
                                                                alt: "Business Insurance Benefits",
                                                                className: "rounded-lg w-full max-w-4xl object-cover"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/insurance/business/business/page.tsx",
                                                                lineNumber: 578,
                                                                columnNumber: 23
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/insurance/business/business/page.tsx",
                                                            lineNumber: 577,
                                                            columnNumber: 22
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/insurance/business/business/page.tsx",
                                                    lineNumber: 569,
                                                    columnNumber: 12
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                                    className: "space-y-4 mt-10",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                            className: "text-3xl md:text-3xl font-extrabold text-[#003566]",
                                                            children: "How Business Insurance Helps Businesses in the UAE "
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/insurance/business/business/page.tsx",
                                                            lineNumber: 585,
                                                            columnNumber: 28
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-[#494848] leading-relaxed",
                                                            children: "Business insurance is essential for protecting businesses in the UAE, offering a wide range of benefits that ensure stability, compliance, and growth. Here’s how business insurance helps businesses thrive in this dynamic market."
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/insurance/business/business/page.tsx",
                                                            lineNumber: 587,
                                                            columnNumber: 31
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                            className: "list-disc ml-6 space-y-6 text-muted-foreground",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                    children: [
                                                                        " ",
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "font-extrabold text-[#555353]",
                                                                            children: "Protection Against Liabilities – "
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/insurance/business/business/page.tsx",
                                                                            lineNumber: 593,
                                                                            columnNumber: 45
                                                                        }, this),
                                                                        " ",
                                                                        "Businesses face numerous risks daily, from accidents to lawsuits. Public liability insurance covers legal costs and compensation claims if a business is held responsible for injury or property damage to third parties. Similarly, product liability insurance is crucial for businesses that manufacture or supply products, protecting against claims of injury or damage caused by those products. This layer of protection helps businesses manage unforeseen incidents without financial strain. "
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/insurance/business/business/page.tsx",
                                                                    lineNumber: 593,
                                                                    columnNumber: 40
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                    children: [
                                                                        " ",
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "font-bold text-[#555353]",
                                                                            children: " Safeguarding Assets – "
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/insurance/business/business/page.tsx",
                                                                            lineNumber: 603,
                                                                            columnNumber: 51
                                                                        }, this),
                                                                        " ",
                                                                        "Property insurance is vital for protecting business premises and contents against risks such as fire, theft, and natural disasters. Additionally, equipment insurance covers the cost of repairing or replacing essential business equipment that gets damaged or stolen. These insurances ensure that businesses can recover quickly from incidents that could otherwise cause significant financial losses. "
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/insurance/business/business/page.tsx",
                                                                    lineNumber: 603,
                                                                    columnNumber: 46
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                    children: [
                                                                        " ",
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "font-bold text-[#555353]",
                                                                            children: "Ensuring Financial Stability – "
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/insurance/business/business/page.tsx",
                                                                            lineNumber: 611,
                                                                            columnNumber: 53
                                                                        }, this),
                                                                        " ",
                                                                        "Business interruption insurance compensates for lost income and operating expenses if a business is temporarily unable to operate due to a covered event. This support helps maintain financial stability during downtime, allowing businesses to focus on recovery rather than financial distress. Credit insurance also protects against the risk of non-payment by customers, ensuring steady cash flow and financial health.. "
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/insurance/business/business/page.tsx",
                                                                    lineNumber: 611,
                                                                    columnNumber: 48
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                    children: [
                                                                        " ",
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "font-bold text-[#555353]",
                                                                            children: "Employee Protection and Legal Compliance – "
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/insurance/business/business/page.tsx",
                                                                            lineNumber: 620,
                                                                            columnNumber: 60
                                                                        }, this),
                                                                        " ",
                                                                        "Workers’ compensation insurance covers medical expenses and lost wages for employees who get injured or fall ill due to their job, while health insurance, required by law, provides medical coverage for employees. These insurances not only protect employees but also ensure businesses comply with UAE laws and regulations, avoiding legal penalties and fines. "
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/insurance/business/business/page.tsx",
                                                                    lineNumber: 620,
                                                                    columnNumber: 55
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                    children: [
                                                                        " ",
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "font-bold text-[#555353]",
                                                                            children: "Enhancing Reputation and Managing Risk – "
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/insurance/business/business/page.tsx",
                                                                            lineNumber: 629,
                                                                            columnNumber: 68
                                                                        }, this),
                                                                        " ",
                                                                        "Having comprehensive insurance demonstrates responsibility and reliability to customers, partners, and stakeholders, enhancing the business’s reputation. It also helps manage and mitigate various risks associated with operations, enabling businesses to focus on growth and expansion without constant worry about potential financial setbacks."
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/insurance/business/business/page.tsx",
                                                                    lineNumber: 629,
                                                                    columnNumber: 63
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                    children: [
                                                                        " ",
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "font-bold text-[#555353]",
                                                                            children: "Attracting and Retaining Talent – "
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/insurance/business/business/page.tsx",
                                                                            lineNumber: 637,
                                                                            columnNumber: 74
                                                                        }, this),
                                                                        " ",
                                                                        "Offering health and life insurance benefits can attract and retain talented employees, contributing to overall job satisfaction and loyalty. This ensures a stable and motivated workforce, essential for business success. "
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/insurance/business/business/page.tsx",
                                                                    lineNumber: 637,
                                                                    columnNumber: 69
                                                                }, this),
                                                                " "
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/insurance/business/business/page.tsx",
                                                            lineNumber: 592,
                                                            columnNumber: 37
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "mt-8 flex justify-center",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("video", {
                                                                    className: "rounded-lg w-full max-w-4xl",
                                                                    controls: true,
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("source", {
                                                                            src: "/invideo.mp4",
                                                                            type: "video/mp4"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/insurance/business/business/page.tsx",
                                                                            lineNumber: 643,
                                                                            columnNumber: 75
                                                                        }, this),
                                                                        " "
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/insurance/business/business/page.tsx",
                                                                    lineNumber: 642,
                                                                    columnNumber: 73
                                                                }, this),
                                                                " "
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/insurance/business/business/page.tsx",
                                                            lineNumber: 641,
                                                            columnNumber: 72
                                                        }, this),
                                                        " "
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/insurance/business/business/page.tsx",
                                                    lineNumber: 584,
                                                    columnNumber: 26
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                                    className: "py-16 bg-background",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "max-w-3xl mx-auto px-4",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                                className: "text-3xl md:text-3xl font-semibold text-[#031f39] text-center mb-8",
                                                                children: " Business Insurance FAQ "
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/insurance/business/business/page.tsx",
                                                                lineNumber: 647,
                                                                columnNumber: 82
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "space-y-1",
                                                                children: [
                                                                    " ",
                                                                    faqs.map((faq, index)=>{
                                                                        const isOpen = openIndex === index;
                                                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                    type: "button",
                                                                                    onClick: ()=>setOpenIndex(isOpen ? null : index),
                                                                                    className: "w-full flex items-center gap-3 px-4 py-3 bg-[#02192e] text-white font-semibold text-xl md:text-xl",
                                                                                    children: [
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                            className: "text-2xl",
                                                                                            children: [
                                                                                                " ",
                                                                                                isOpen ? "−" : "+",
                                                                                                " "
                                                                                            ]
                                                                                        }, void 0, true, {
                                                                                            fileName: "[project]/app/insurance/business/business/page.tsx",
                                                                                            lineNumber: 653,
                                                                                            columnNumber: 90
                                                                                        }, this),
                                                                                        " ",
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                            className: "text-left",
                                                                                            children: faq.question
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/app/insurance/business/business/page.tsx",
                                                                                            lineNumber: 653,
                                                                                            columnNumber: 147
                                                                                        }, this),
                                                                                        " "
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/app/insurance/business/business/page.tsx",
                                                                                    lineNumber: 651,
                                                                                    columnNumber: 86
                                                                                }, this),
                                                                                isOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    className: "bg-white text-muted-foreground px-6 py-4 border border-t-0 border-[#003566]",
                                                                                    children: [
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                            className: "text-xl md:text-xl leading-relaxed",
                                                                                            children: [
                                                                                                " ",
                                                                                                faq.answer,
                                                                                                " "
                                                                                            ]
                                                                                        }, void 0, true, {
                                                                                            fileName: "[project]/app/insurance/business/business/page.tsx",
                                                                                            lineNumber: 655,
                                                                                            columnNumber: 90
                                                                                        }, this),
                                                                                        " "
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/app/insurance/business/business/page.tsx",
                                                                                    lineNumber: 654,
                                                                                    columnNumber: 101
                                                                                }, this)
                                                                            ]
                                                                        }, faq.question, true, {
                                                                            fileName: "[project]/app/insurance/business/business/page.tsx",
                                                                            lineNumber: 650,
                                                                            columnNumber: 184
                                                                        }, this);
                                                                    })
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/insurance/business/business/page.tsx",
                                                                lineNumber: 650,
                                                                columnNumber: 83
                                                            }, this),
                                                            " "
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/insurance/business/business/page.tsx",
                                                        lineNumber: 646,
                                                        columnNumber: 80
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/app/insurance/business/business/page.tsx",
                                                    lineNumber: 645,
                                                    columnNumber: 77
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/insurance/business/business/page.tsx",
                                            lineNumber: 433,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/insurance/business/business/page.tsx",
                                    lineNumber: 223,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$content$2f$sidebar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Sidebar"], {}, void 0, false, {
                                        fileName: "[project]/app/insurance/business/business/page.tsx",
                                        lineNumber: 677,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/insurance/business/business/page.tsx",
                                    lineNumber: 676,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/insurance/business/business/page.tsx",
                            lineNumber: 221,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/insurance/business/business/page.tsx",
                    lineNumber: 216,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/insurance/business/business/page.tsx",
                lineNumber: 215,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/insurance/business/business/page.tsx",
        lineNumber: 205,
        columnNumber: 5
    }, this);
}
_s(BusinessInsurancePage, "GrPv4dbvQI6YtVVe5GerZmzoD8E=");
_c = BusinessInsurancePage;
var _c;
__turbopack_context__.k.register(_c, "BusinessInsurancePage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_292bb00f._.js.map