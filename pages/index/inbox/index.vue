<template>
    <MailContent title="Inbox" :items="store.mails" />
  </template>
<script setup>
import { useMailsStore } from '@/stores/mails'
const store = useMailsStore()
</script>