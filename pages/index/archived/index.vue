<template>
        <MailContent title="Archived" :items="store.archivedMails" />

  </template>
  <script setup>
  import { useMailsStore } from '@/stores/mails'
  
  // access the `store` variable anywhere in the component ✨
  const store = useMailsStore()
  </script>