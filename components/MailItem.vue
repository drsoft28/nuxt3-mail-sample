<template>
    <div class="mail-item" :class="{'is-read':!item.unread}">
        <div class="mail-item_select">
            <checkbox-input v-model="checkValue"   ></checkbox-input>
        </div>
        <div @click="$emit('click',item)" class="mail-item_content">{{ item.title }}</div>
    </div>
</template>
<script setup>
import {ref,watch} from 'vue'
const emit = defineEmits(['selected','click'])
let props = defineProps({
    item:{
        type:[Object,Array],
       require:true
    }
});
let checkValue = ref(props.item.selected);
watch(checkValue,  (newValue) => {
  emit('selected',props.item.id,newValue)
})
watch(() =>props.item,  (newValue) => {
   // console.log('item',newValue,newValue.selected)
    checkValue.value = newValue.selected
},
  { deep: true })
</script>
<style scoped>
.mail-item{
    display: flex;
height: 60px;
padding: 0px 24px;
align-items: center;
gap: 50px;
align-self: stretch;
}

.mail-item_content{
    color: #121829;

font-size: 14px;
font-style: normal;
font-weight: 500;
line-height: normal;
cursor: pointer;
}
.mail-item.is-read>.mail-item_content{
    opacity: .5;
}
</style>