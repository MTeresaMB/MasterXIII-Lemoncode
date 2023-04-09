<template>
  <form @submit.prevent>
    <input :value="organizationValue" @input="updateOrganizationValue" placeholder="'Lemoncode'">
    <button @click="memberList.onSubmit(organizationValue)">Search</button>
  </form>
</template>

<script lang="ts">
  export default {
    props: {
      organizationValue: {
        type: String,
        required: true
      },
      placeholder: {
        type: String,
        default: ''
      }
    },
    emits: ['update:organizationValue'],
    methods: {
      updateOrganizationValue(event: Event) {
        const target = event.target as HTMLInputElement;
        this.$emit('update:organizationValue', target.value);
      },
    },
  }

</script>

<script setup lang="ts">
  import { useGitHubList } from '~/composables/useGitHubList'
  console.log()
  
  const memberList = useGitHubList();
</script>
