

<template>
  <div>
    <!-- <label for="locale">locale</label> -->
    <select v-model="locale">
      <option>en</option>
      <option>zh</option>
    </select>
    <p>message: {{ $t('navigator.demo') }}</p>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () { return { locale: 'en' } },
  watch: {
    locale (val) {
      console.log(val)
      this.$i18n.locale = val
    }
  }
}
</script>
