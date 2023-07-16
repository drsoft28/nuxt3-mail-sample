<template>
    <div class="drawer" :class="{'show':store.selectedMail}" @click.self="closeDialog">
        <div v-if="store.selectedMail"   class="drawer_wrapper">
            <mail-show :item="store.selectedMail" />
        </div>
    </div>
</template>
<script setup>
import { useMailsStore } from '@/stores/mails'
const store = useMailsStore()

const closeDialog = ()=>{
    store.setSelectMail(null)
}

</script>
<style>
.drawer{
    display: none;
    flex-direction: row-reverse;
    position: absolute;
    top:0;
    right:0;
    height: 100vh;
    overflow: auto;
    width: 100vw;
    z-index: 5;
    background: rgba(76, 87, 100, 0.80);

}
.drawer.show{
    display: flex;
    right: 0;
}
.drawer_wrapper{
    display: block;
    position: relative;
border: 1px solid #E5E7EB;
background: #FFF;
right: -100%;
}
.drawer.show .drawer_wrapper{
    right: 0;
    animation-name: drawer-show;
    animation-duration: 2s;
}
@keyframes  drawer-show{
  from {right: -100%;}
  to {right: 0;}
}
</style>