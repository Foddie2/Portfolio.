// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    css: ['~/assets/css/main.css'],
    postcss: {
        plugins: {
          tailwindcss: {},
          autoprefixer: {},
        },
      },
      plugins : [
        {src:'~/node_modules/tw-elements', mode:'client'},
      ],
      modules: ['@nuxtjs/color-mode', 'nuxt-mailer'],
      runtimeConfig:{
        mailerUser:'',
        mailerPass:'',
        mailerLog:'',
        mailerDriver:'',
        mailerHost:'',
        mailerPort:'',
        mailerSmtpTls:'',
        mailerFromAddress:'',
        mailerToAddress:'',
        


      }


})
