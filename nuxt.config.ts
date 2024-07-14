// https://nuxt.com/docs/api/configuration/nuxt-config

require('dotenv').config();
export default defineNuxtConfig({
    modules: [['nuxt-mail', {
        message: {
            to: process.env.NUXT_MAIL_ADDRESS
        },
        smtp: {
            host: 'smtp.gmail.com',
            post: 587,
            secure: true,
            auth: {
                user: process.env.NUXT_MAIL_USERNAME,
                pass: "kpzg tigr myjj uavr"
            }
        }

    }]],

    vite: {
        css: {
            preprocessorOptions: {
                scss: {
                    additionalData: '@use "assets/scss/global-variables.scss" as *;'
                }
            }
        },
    },

    css: ["assets/scss/index.scss",],

    plugins: [
        {src: '~/plugins/portal-vue.js', mode: 'client'},
        {src: '~/plugins/router.js', mode: 'client'},
        // {src: '~/plugins/api.js', mode: 'client'}
    ],

    app: {
        head: {
            title: 'FoodTeamPlum',
            link: [
                {rel: 'stylesheet', href: 'https://api.mapbox.com/mapbox-gl-js/v1.10.1/mapbox-gl.css'}
            ]
            // meta: [
            //   {name: 'description', content: 'Everything about Nuxt 3'}
            // ],
            // link: [
            //   {rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap'}
            // ]
        },


    },

    runtimeConfig: {
        // Private keys are only available on the server
        // apiSecret: '123',

        // Public keys that are exposed to the client
        pass:  process.env.NUXT_MAILER_TO_ADDRESS || '',
        mailerUser: process.env.NUXT_MAILER_TO_ADDRESS || '',
        public: {
            mapBoxToken: process.env.MAPBOX_ACCESS_TOKEN || ''
        }
    },


    devtools: {enabled: true},
})