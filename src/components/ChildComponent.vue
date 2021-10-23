<template>
    <div>{{ text }}</div>
</template>

<script>
export default {
    props: {
        text: {
          type: String,
          default: 'default bro'
        }
    }
}
</script>