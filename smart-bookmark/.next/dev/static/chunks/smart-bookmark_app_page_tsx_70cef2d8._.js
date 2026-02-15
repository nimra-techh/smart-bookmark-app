(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/smart-bookmark/app/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Home
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$smart$2d$bookmark$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/smart-bookmark/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$smart$2d$bookmark$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/smart-bookmark/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$smart$2d$bookmark$2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/smart-bookmark/node_modules/@supabase/supabase-js/dist/index.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$smart$2d$bookmark$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/smart-bookmark/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
const supabase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$smart$2d$bookmark$2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createClient"])(("TURBOPACK compile-time value", "https://usspckknlicqvzgtgwis.supabase.co"), ("TURBOPACK compile-time value", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVzc3Bja2tubGljcXZ6Z3Rnd2lzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzA5ODYzOTIsImV4cCI6MjA4NjU2MjM5Mn0.zaeW8C2DRsiRDQldMmus8Deip4jdurRP5bApReZyBxE"));
function Home() {
    _s();
    const [user, setUser] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$smart$2d$bookmark$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [url, setUrl] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$smart$2d$bookmark$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [title, setTitle] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$smart$2d$bookmark$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [bookmarks, setBookmarks] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$smart$2d$bookmark$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    // Get session on load
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$smart$2d$bookmark$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Home.useEffect": ()=>{
            const getSession = {
                "Home.useEffect.getSession": async ()=>{
                    const { data } = await supabase.auth.getSession();
                    setUser(data.session?.user ?? null);
                }
            }["Home.useEffect.getSession"];
            getSession();
            const { data: listener } = supabase.auth.onAuthStateChange({
                "Home.useEffect": (_event, session)=>{
                    setUser(session?.user ?? null);
                }
            }["Home.useEffect"]);
            return ({
                "Home.useEffect": ()=>{
                    listener.subscription.unsubscribe();
                }
            })["Home.useEffect"];
        }
    }["Home.useEffect"], []);
    // Fetch bookmarks when user logs in
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$smart$2d$bookmark$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Home.useEffect": ()=>{
            if (user) {
                fetchBookmarks();
            }
        }
    }["Home.useEffect"], [
        user
    ]);
    const fetchBookmarks = async ()=>{
        const { data } = await supabase.from('bookmarks').select('*').eq('user_id', user.id).order('created_at', {
            ascending: false
        });
        setBookmarks(data || []);
    };
    const loginWithGoogle = async ()=>{
        await supabase.auth.signInWithOAuth({
            provider: 'google'
        });
    };
    const logout = async ()=>{
        await supabase.auth.signOut();
    };
    const saveBookmark = async ()=>{
        if (!url) {
            alert('Please enter a URL');
            return;
        }
        await supabase.from('bookmarks').insert([
            {
                user_id: user.id,
                url,
                title
            }
        ]);
        setUrl('');
        setTitle('');
        fetchBookmarks();
    };
    const deleteBookmark = async (id)=>{
        await supabase.from('bookmarks').delete().eq('id', id);
        fetchBookmarks();
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$smart$2d$bookmark$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "min-h-screen bg-gray-100 flex flex-col items-center py-10",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$smart$2d$bookmark$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-white shadow-xl rounded-2xl p-8 w-[420px]",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$smart$2d$bookmark$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                    className: "text-3xl font-bold mb-6 text-center",
                    children: "📚 Smart Bookmark"
                }, void 0, false, {
                    fileName: "[project]/smart-bookmark/app/page.tsx",
                    lineNumber: 92,
                    columnNumber: 9
                }, this),
                !user ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$smart$2d$bookmark$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: loginWithGoogle,
                    className: "w-full bg-red-500 hover:bg-red-600 transition text-white py-2 rounded-lg",
                    children: "🔐 Login with Google"
                }, void 0, false, {
                    fileName: "[project]/smart-bookmark/app/page.tsx",
                    lineNumber: 97,
                    columnNumber: 11
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$smart$2d$bookmark$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$smart$2d$bookmark$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$smart$2d$bookmark$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-between items-center mb-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$smart$2d$bookmark$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-sm text-gray-600",
                                    children: user.email
                                }, void 0, false, {
                                    fileName: "[project]/smart-bookmark/app/page.tsx",
                                    lineNumber: 106,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$smart$2d$bookmark$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: logout,
                                    className: "text-sm bg-gray-500 hover:bg-gray-600 transition text-white px-3 py-1 rounded-md",
                                    children: "Logout"
                                }, void 0, false, {
                                    fileName: "[project]/smart-bookmark/app/page.tsx",
                                    lineNumber: 110,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/smart-bookmark/app/page.tsx",
                            lineNumber: 105,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$smart$2d$bookmark$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$smart$2d$bookmark$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "text",
                                    placeholder: "Enter website URL...",
                                    value: url,
                                    onChange: (e)=>setUrl(e.target.value),
                                    className: "border p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                                }, void 0, false, {
                                    fileName: "[project]/smart-bookmark/app/page.tsx",
                                    lineNumber: 120,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$smart$2d$bookmark$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "text",
                                    placeholder: "Enter title (optional)...",
                                    value: title,
                                    onChange: (e)=>setTitle(e.target.value),
                                    className: "border p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                                }, void 0, false, {
                                    fileName: "[project]/smart-bookmark/app/page.tsx",
                                    lineNumber: 128,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$smart$2d$bookmark$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: saveBookmark,
                                    className: "bg-blue-600 hover:bg-blue-700 transition text-white py-2 rounded-lg",
                                    children: "Save Bookmark"
                                }, void 0, false, {
                                    fileName: "[project]/smart-bookmark/app/page.tsx",
                                    lineNumber: 136,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/smart-bookmark/app/page.tsx",
                            lineNumber: 119,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$smart$2d$bookmark$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$smart$2d$bookmark$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "font-semibold mb-3",
                                    children: "Your Bookmarks"
                                }, void 0, false, {
                                    fileName: "[project]/smart-bookmark/app/page.tsx",
                                    lineNumber: 146,
                                    columnNumber: 15
                                }, this),
                                bookmarks.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$smart$2d$bookmark$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-gray-500 text-sm",
                                    children: "No bookmarks added yet."
                                }, void 0, false, {
                                    fileName: "[project]/smart-bookmark/app/page.tsx",
                                    lineNumber: 151,
                                    columnNumber: 17
                                }, this),
                                bookmarks.map((b)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$smart$2d$bookmark$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "border rounded-lg p-3 mb-3 flex justify-between items-center hover:shadow-md transition",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$smart$2d$bookmark$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "max-w-[250px]",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$smart$2d$bookmark$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "font-medium truncate",
                                                        children: b.title || 'No Title'
                                                    }, void 0, false, {
                                                        fileName: "[project]/smart-bookmark/app/page.tsx",
                                                        lineNumber: 162,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$smart$2d$bookmark$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                        href: b.url,
                                                        target: "_blank",
                                                        rel: "noopener noreferrer",
                                                        className: "text-blue-600 text-sm underline break-words",
                                                        children: b.url
                                                    }, void 0, false, {
                                                        fileName: "[project]/smart-bookmark/app/page.tsx",
                                                        lineNumber: 166,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/smart-bookmark/app/page.tsx",
                                                lineNumber: 161,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$smart$2d$bookmark$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>deleteBookmark(b.id),
                                                className: "bg-red-500 hover:bg-red-600 transition text-white px-3 py-1 rounded-md text-sm",
                                                children: "Delete"
                                            }, void 0, false, {
                                                fileName: "[project]/smart-bookmark/app/page.tsx",
                                                lineNumber: 176,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, b.id, true, {
                                        fileName: "[project]/smart-bookmark/app/page.tsx",
                                        lineNumber: 157,
                                        columnNumber: 17
                                    }, this))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/smart-bookmark/app/page.tsx",
                            lineNumber: 145,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true)
            ]
        }, void 0, true, {
            fileName: "[project]/smart-bookmark/app/page.tsx",
            lineNumber: 90,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/smart-bookmark/app/page.tsx",
        lineNumber: 89,
        columnNumber: 5
    }, this);
}
_s(Home, "FG/MrF3mR9MQS1CSeVnuycvYnEo=");
_c = Home;
var _c;
__turbopack_context__.k.register(_c, "Home");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=smart-bookmark_app_page_tsx_70cef2d8._.js.map