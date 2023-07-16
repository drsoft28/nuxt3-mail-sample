<template>
        <MailContent title="Archived" :items="store.archivedMails" />

  </template>
  <script setup>
  import { useMailsStore } from '@/stores/mails'
  const store = useMailsStore()
  </script>