import { defineStore } from 'pinia'
export const useMailsStore = defineStore('mails', {
    state: () => ({selected:null, items:[
      {id:1,
        title:'Wave hello with video, reactions and more now in huddles',
      content:'In the early days of the pandemic, audio-only huddles helped recreate the informal discussions that traditionally took place in office cafés and hallways. Whether your team is remote, in the office, or a mix of both, working alongside your colleagues is as important as ever.',
      unread:true,
      archived:false
    },
    {id:2,
      title:'[JIRA] (LXQ-2604) Learning path- file - Existing File -two buttons for viewing the file',
    content:'In the early days of the pandemic, audio-only huddles helped recreate the informal discussions that traditionally took place in office cafés and hallways. Whether your team is remote, in the office, or a mix of both, working alongside your colleagues is as important as ever.',
    unread:true,
    archived:false
  }
    ] }),
    getters: {
      selectedMail: (state) => state.selected,
      mails: (state) => state.items.filter(x=>!x.archived),
      mailCount: (state) => state.items.filter(x=>!x.archived).length,
      archivedMails: (state) => state.items.filter(x=>x.archived),
      archivedCount: (state) => state.items.filter(x=>x.archived).length,
    },
    actions: {
      setSelectMail(item) {
       this.selected = item
       },
      markAsArchived(id) {
       let index= this.items.findIndex(x=>x.id==id);
       this.items[index]= {...this.items[index],archived:true}
      },
      markAsRead(id) {
        let index= this.items.findIndex(x=>x.id==id);
        this.items[index]= {...this.items[index],unread:false}
       },
    },
  })