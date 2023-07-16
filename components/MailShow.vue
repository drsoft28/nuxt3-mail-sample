<template>
    <div @keyup="onPress" class="mail-show">
        <div class="mail-show_header">
                <div class="mail-show_actions">
                    <btn-action  @click="closeDialog">
                        <template v-slot:icon>
                          <IconTimes />
                        </template>
                        Close (Esc)
                    </btn-action>
                </div>
                <div class="mail-show_actions mail-show_actions--right">
                    <btn-action  @click="markAsRead">
                        <template v-slot:icon>
                          <IconMailOpen />
                        </template>
                            Mark as read (r)
                    </btn-action>
                    <btn-action  @click="markAsArchived">
                        <template v-slot:icon>
                            <IconTrash />
                        </template>
                        Archive (a)
                    </btn-action>
                </div>
                </div> 
                <!-- content-->
                <div class="mail-show_content">
                <div class="mail-show_title">{{ item.title }}</div>
                <p class="mail-show_message">{{ item.content }}</p>

                </div> 
    </div>
</template>
<script setup>
import { useMailsStore } from '@/stores/mails'
const store = useMailsStore()
const props = defineProps({
    item:[Object,Array]
})
const closeDialog = ()=>{
    store.setSelectMail(null)
}
const markAsRead =()=>{
        store.markAsRead(props.item.id)
}
const markAsArchived =()=>{
   
        store.markAsArchived(props.item.id)
}
const onPress = (e) => {
    console.log('eee',e)
  if (e.key == "a") {
    markAsArchived()
    return;
  }
  if (e.key == "r") {
    markAsRead()
    return;
  } 
};
</script>
<style>
.mail-show{
    width: 752px;

    height: 100%;
    display: flex;
    padding: 32px;
    flex-direction: column;
    align-items: flex-start;
    gap: 32px;
    flex-shrink: 0;
}


.mail-show_header{
    display: flex;
width: 100%;
padding: 0px 24px;
align-items: center;
gap: 20px;
}
.mail-show_actions{
    display: flex;
    flex-grow: 1;
}
.mail-show_actions--right{
flex-grow: 0;
flex-shrink: 0;
}
.mail-show_content{
    display: flex;
flex-direction: column;
align-items: flex-start;
gap: 20px;
}
.mail-show_title{
    color: #121829;
font-family: Preevio;
font-size: 20px;
font-style: normal;
font-weight: 500;
line-height: normal;
}
.mail-show_message{
    color: #4B5563;
font-family: Preevio_Regular;
font-size: 14px;
font-style: normal;
font-weight: 500;
line-height: normal;
}
</style>