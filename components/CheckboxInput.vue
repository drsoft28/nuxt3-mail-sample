<template>
    <div class="checkbox">
        <label>
        <input type="checkbox" :checked="modelValue"
            @change="updateInput"
     />
     
        <slot />
        </label>
    </div>
</template>
<script setup>
import {watch} from 'vue'
const props = defineProps(['modelValue'])
const emit = defineEmits(['update:modelValue','change'])
const updateInput = (evt)=>{
    //console.log(evt)
    emit('update:modelValue', evt.target.checked)
    emit('change', evt.target.checked)
}
watch(()=>props.modelValue,()=>{})
</script>
<style scoped>
.checkbox{

    color: #000;
text-align: right;

font-size: 14px;
font-style: normal;
font-weight: 500;
line-height: normal;
}
.checkbox>label{
    display: flex;
    align-items: center;
    gap: 12px;
}
.checkbox input{
    padding: 0;
    margin: 0;
    background: rgba(9, 104, 254, 1);
    height: 16px;
    width: 16px;
}
</style>