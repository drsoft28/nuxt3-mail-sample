<template>
    
        <div  class="mail_content">
            

        <div @keyup="onPress" class="mail_page">
            <h1 class="mail_page-title">{{title}}</h1>

                <div class="mail_page-table">
                <div class="mail_page-table-header">
                <div class="mail_page-table-actions">
                    <checkbox-input  v-model="checkboxAll" @change="changeCheckAll">
                        Email Selected ({{checkCount}})
                    </checkbox-input>
                </div>
                <div class="mail_page-table-actions mail_page-table-actions--right">
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
                <div class="mail_page-table-body">
                    <mail-item @selected="selectItem" @click="setSelectedItem" v-for="item in list" :key="item.id" :item="item" ></mail-item>
                </div>
                </div>
        </div>
     </div>   
</template>
<script setup>
import { ref,computed,watch} from 'vue'
import { useMailsStore } from '@/stores/mails'
const store = useMailsStore()
const props = defineProps({
    title:String,
    items:{
        type:[Array,Object],
        default:()=>{return []}
    }
})
let listSelected = ref([])
let list = computed(()=>props.items.map(x=>{return {...x,selected:listSelected.value.includes(x.id)}}))

let checkboxAll = ref(false);
let checkCount = computed(()=>list.value.filter(x=>x.selected).length);
const selectItem = (id,selected)=>{
    const index = listSelected.value.findIndex((x)=>x==id);
    if(index>-1 && !selected){
       
        listSelected.value.splice(index, 1);
        //list.value[index].selected = selected;
    }
    if(index==-1 && selected){
       listSelected.value.push(id) 
    }
    checkboxAll.value = listSelected.value.length==list.value.length
   
}
const setSelectedItem = (item)=> store.setSelectMail(item);
const changeCheckAll =(newValue)=>{
    if(!newValue){
  listSelected.value = []
    }else{
        console.log('sqsd',list.value.map(x=>x.id))
        listSelected.value = list.value.map(x=>x.id)
    }
   /*list.value.forEach(element => {
        if(listSelected.value.includes(element.id))
    }); */
    
}
const markAsRead =()=>{
    listSelected.value.forEach(element => {
       
        store.markAsRead(element)
    }); 
    listSelected.value = [];
    checkboxAll.value = false;
}
const markAsArchived =()=>{
    listSelected.value.forEach(element => {
        store.markAsArchived(element)
    }); 
    listSelected.value = [];
    checkboxAll.value = false;
}
const onPress = (e) => {
  if (e.key == "a") {
    markAsArchived()
    return;
  }
  if (e.key == "r") {
    markAsRead()
    return;
  } 
};
watch(()=>store.selectedMail,(newValue)=>{
    if(newValue===null){

    }
})
</script>