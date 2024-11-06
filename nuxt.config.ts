// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    extends: ['@nuxt/ui-pro'],

    modules: ['@nuxt/eslint', '@nuxt/fonts', '@nuxt/ui', '@vueuse/nuxt', '@sidebase/nuxt-auth', '@nuxtjs/device'],

    ui: {
        safelistColors: ['primary', 'red', 'orange', 'green']
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
    },
})