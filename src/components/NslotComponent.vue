<template>
  <div>Title</div>
  <slot />
  <div>Content</div>
  <slot name="content" />
  <div>Footer</div>
  <slot name="footer" />
</template>

<script>
export default {
    
}
</script>