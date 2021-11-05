<template>
  <div>Title</div>
  <slot :data="title"/>
  <div>Content</div>
  <slot name="content" :data="content" />
  <div>Footer</div>
  <slot name="footer" :data="footer" />
</template>

<script>
export default {
    data() {
      return {
        title: 'harry potter',
        content: 'lorem aloyo mimi kayu',
        footer: 'ini adalah footer'
      }
    }
}
</script>