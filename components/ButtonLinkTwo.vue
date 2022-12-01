<template>
  <div> 
    <ButtonLinkButtonTwo v-if="type === 'button'" type="button" :text="text"/> 
    <ButtonLinkTagLinkTwo v-else type="link" :text="text"/>  
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
  name: 'ButtonLinkTwo'
}
</script>

<style>

</style>