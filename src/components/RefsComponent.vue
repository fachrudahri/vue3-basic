<template>
    <div>
      <span>ini child components refs</span>
      <button @click="onPress">button child</button>
    </div>
</template>

<script>
export default {
  emits: ["child-click"],
  methods: {
    onKlik() {
      console.log('menggunakan refs')
    },
    onPress() {
      this.$emit("child-click", "value ini akan di kirim ke parent")
    }
  }
}
</script>