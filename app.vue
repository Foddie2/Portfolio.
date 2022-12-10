<template>
  <div>
    Hello nuxt 3
    <pre>{{ mountains }}</pre>

  </div>
</template>

<script>
import { AsyncData } from 'nuxt/app/composables';

  export default {
    async setup(props) {
      const AsyncData = useAsyncData()
      const {data} = await AsyncData(() => {
        return $fetch('https://api.nuxtjs.dev/mountains')
      })
      return{ mountains }
    }
    
  }
</script>

<style lang="scss" scoped>

</style>