// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    extends: ['@nuxt/ui-pro'],

    modules: [
        '@nuxt/eslint',
        '@nuxt/fonts',
        '@nuxt/ui',
        '@vueuse/nuxt',
        '@sidebase/nuxt-auth',
        '@nuxtjs/device',
        // '@vite-pwa/nuxt',
    ],

    ui: {
        safelistColors: ['primary', 'red', 'orange', 'green']
    },

    app: {
        head: {
            meta: [
                { name: 'viewport', content: 'width=device-width, initial-scale=1, maximum-scale=1' },
            ],
        },
    },

    colorMode: {
        disableTransition: true
    },

    routeRules: {
        // Temporary workaround for prerender regression. see https://github.com/nuxt/nuxt/issues/27490
        '/': { prerender: true },
        // "/api/**": { cors: true },
    },

    devtools: {
        enabled: true
    },

    typescript: {
        strict: true
    },

    future: {
        compatibilityVersion: 4
    },

    eslint: {
        config: {
            stylistic: {
                commaDangle: 'never',
                braceStyle: '1tbs'
            }
        }
    },

    compatibilityDate: '2024-07-11',

    auth: {
        baseURL: '/api/auth',
        globalAppMiddleware: true,
        provider: {
            type: 'local',
            token: {
                signInResponseTokenPointer: '/id',
            },
            session: {
                dataType: {
                    id: 'string',
                    name: 'string',
                    email: 'string',
                },
            },
        },
    },
    runtimeConfig: {
        auth: {
            name: "nuxt-session",
            password: process.env.NUXT_AUTH_PASSWORD || "",
            provider: {
                type: 'local',
            },
        },
        public: {
            endpointDomain: process.env.NUXT_PUBLIC_FQD,
        },
    },

    // appConfig: {
    //     buildDate: new Date().toISOString(), //only for dev
    // },
    // pwa: {
    //     strategies: 'injectManifest',
    //     srcDir: 'service-worker',
    //     filename: 'sw.ts',
    //     registerType: 'autoUpdate',
    //     manifest: {
    //         name: 'Records | Ordinance',
    //         short_name: 'Ord',
    //         theme_color: '#ffffff',
    //         icons: [
    //             {
    //                 src: 'pwa-192x192.png',
    //                 sizes: '192x192',
    //                 type: 'image/png',
    //             },
    //             {
    //                 src: 'pwa-512x512.png',
    //                 sizes: '512x512',
    //                 type: 'image/png',
    //             },
    //             {
    //                 src: 'pwa-512x512.png',
    //                 sizes: '512x512',
    //                 type: 'image/png',
    //                 purpose: 'any maskable',
    //             },
    //         ],
    //     },
    //     workbox: {
    //         globPatterns: ['**/*.{js,css,html,png,svg,ico}'],
    //     },
    //     injectManifest: {
    //         globPatterns: ['**/*.{js,css,html,png,svg,ico}'],
    //     },
    //     client: {
    //         installPrompt: true,
    //         // you don't need to include this: only for testing purposes
    //         // if enabling periodic sync for update use 1 hour or so (periodicSyncForUpdates: 3600)
    //         periodicSyncForUpdates: 20,
    //     },
    //     devOptions: {
    //         enabled: true,
    //         suppressWarnings: true,
    //         navigateFallback: '/',
    //         navigateFallbackAllowlist: [/^\/$/],
    //         type: 'module',
    //     },
    // },
})