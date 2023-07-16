<template>
    <button @click="navigate" class="btn-sidebar" :class="{'is-active':isActive}">
       <div class="btn-sidebar_content">
        <div class="btn-sidebar_icon">
        <slot name="icon"></slot>
        </div>
        <div class="btn-sidebar_label">
        <slot name="default" />
        </div>

       </div>
       <div class="btn-sidebar_badget">
        <slot name="badget"></slot>
       </div>
            

    </button>
</template>

<script setup>
const emit = defineEmits(['click'])
const props = defineProps({
    to:String,
    clickable:{
        type:Boolean,
        default:false
    }
});
import {  computed } from 'vue'
const router = useRouter();
const isActive = computed(() => {
  return router.currentRoute.value.fullPath==props.to
})

const navigate = (evt)=>{
    
if(props.clickable){
    emit('click',evt);
    return;
}
    router.push(props.to);
}
</script>