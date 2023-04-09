<template>
  <ul>
    <SearchBox :organization-value="searchItem" @update:organization-value="searchItem = $event"/>
    <li v-for="member in listMembers" :key="member.id"> 
      <img :src="member.avatar_url" alt="member avatar" loading="lazy">
      <p>{{ member.id }}</p>
      <p>{{ member.login }}</p>
    </li>
  </ul>
</template>

<script setup lang="ts">
  import { storeToRefs } from 'pinia';
  import SearchBox  from './SearchBox.vue';

  const { handleSearch } = useGitHubList();

  onMounted(async () => {
    await handleSearch();
  });

  const { listMembers, searchItem } = storeToRefs(useGitHubList());

</script>
