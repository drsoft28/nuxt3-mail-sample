<template>
    <MailContent title="Inbox" :items="store.mails" />
  </template>
<script setup>
import { useMailsStore } from '@/stores/mails'

// access the `store` variable anywhere in the component ✨
const store = useMailsStore()
</script>