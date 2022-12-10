<template>
  <div>
    Hello nuxt 3
    <pre>{{ mountains }}</pre>

  </div>
</template>

<script>
import { useAsyncData } from 'nuxt/app/composables' 
  export default {
    async setup() {
      const asyncData = useAsyncData()
      const {data: mountains} = await asyncFetch(() => {
        return $fetch('https://api.nuxtjs.dev/mountains')
      })
      return{ mountains }
    }
  }
</script>

<style lang="scss" scoped>

</style>