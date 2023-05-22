<template>
  <div class="container">
    <form @submit.prevent class="form">
      <input class="input" :value="organizationValue" @input="updateOrganizationValue" placeholder="Lemoncode">
      <button class="button" @click="memberList.onSubmit(organizationValue)">Search</button>
    </form>
  </div>
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
  const memberList = useGitHubList();
</script>


<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.container {
  height: 60px;
  background-color: #003566;

  .form {
    padding: 8px;

    .input {
      height: 30px;
      padding: 10px;
      border: 2px solid #ccc;
      border-radius: 5px;
      font-size: 16px;
      color: #555;
      outline: none;
    }
    .input:focus{
      box-shadow: 0 0 0 0.2rem rgba(233, 197, 106, 0.925);
    }
  }
  .button {
    background-color: #FFC300;
    border: none;
    margin-left: 10px;
    padding: 10px;
    border-radius: 15px;
    color: #020202;
    font-family: monospace;
    font-size: 1.2em;
    cursor: pointer;
  }
}
</style>