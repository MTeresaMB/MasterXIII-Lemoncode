<template>
  <main>
    <div class="profile">
      <div class="profile-image">
        <img :src="member?.avatar_url" alt="member avatar" loading="lazy">
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import { memberService } from '~~/services/memberService'
import { MemberEntity } from '~~/types/MemberEntity'

const route = useRoute()
const id = route.params.id as string
const { data: member } = useAsyncData<MemberEntity>(() =>
  memberService.getMemberById(id)
)

</script>
