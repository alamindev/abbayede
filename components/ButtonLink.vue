<template>
  <div> 
    <ButtonLinkButtonOne v-if="type === 'button'" type="button" :text="text"/> 
    <ButtonLinkTagLinkOne v-else type="link" :text="text"/>  
  </div>
</template>

<script>
export default { 
  props: {
        link: {
            type: String, 
            default: '#'
        },
        target: {
            type: String, 
            default: '_salf'
        },
        text: {
            type: String, 
            required: true, 
        },
        type: {
            type: String, 
            required: true, 
        },
    },
  name: 'ButtonLink'
}
</script>

<style>

</style>