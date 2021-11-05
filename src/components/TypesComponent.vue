<template>
  <div>{{ keterangan }}</div>
  <div>{{ angka }}</div>
</template>

<script>
export default {
  props: {
    keterangan: {
      type: String,
      default: 'kosong'
    },
    angka: {
      type: Number,
      default: 0
    }
  }
}
</script>