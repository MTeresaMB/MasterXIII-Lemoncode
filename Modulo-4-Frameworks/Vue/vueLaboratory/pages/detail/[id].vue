<template>
  <div class="main-detail">
    <div class="header">
      <p>Detail Page</p>
    </div>
    <div class="profile-detail">
      <div class="profile-image-detail">
        <img :src="member?.avatar_url" alt="member avatar" loading="lazy">
      </div>
      <div class="profile-content">
        <h2 class="profile-username-detail">{{ member?.login }}</h2>
        <p class="profile-user-handle-detail">{{ member?.name }}</p>
        <p class="profile-user-handle-detail">{{ member?.company }}</p>
        <p class="profile-user-handle-detail">{{ member?.bio }}</p>
        <NuxtLink :to="`/`">
          <div class="profile-actions">
            <button class="btn btn--primary">Back to home</button>
          </div>
        </NuxtLink>
      </div>
    </div>
  </div>
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

<style lang="scss">
.main-detail {
  line-height: 1.5;
  min-height: 100vh;
  font-family: "Be Vietnam Pro", sans-serif;

  .header {
    height: 60px;
    background-color: #003566;
    color: #fff;

    p {
      padding: 15px;
      font-size: 1.2em;
    }
  }

  .profile-detail {
    margin: 10px auto;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    flex-direction: column;
    padding: 3rem;
    width: 90%;
    max-width: 450px;
    background-color: #1b2028;
    border-radius: 16px;
    position: relative;
    border: 3px solid transparent;
    background-clip: padding-box;
    text-align: center;
    color: #f1f3f3;
    background-image: linear-gradient(135deg,
        rgba(#752e7c, 0.35),
        rgba(#734a58, 0.1) 15%,
        #1b2028 20%,
        #1b2028 100%);

    &:after {
      content: "";
      display: block;
      top: -3px;
      left: -3px;
      bottom: -3px;
      right: -3px;
      z-index: -1;
      position: absolute;
      border-radius: 16px;
      background-image: linear-gradient(135deg,
          #752e7c,
          #734a58 20%,
          #1b2028 30%,
          #2c333e 100%);
    }

    .profile-image-detail {
      border-radius: 50%;
      overflow: hidden;
      width: 175px;
      height: 175px;
      position: relative;

      img {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 100%;
      }
    }

    .profile-content {
      margin-left: 20px;
    }

    .profile-username-detail {
      font-size: 1.5rem;
      font-weight: 600;
      margin-top: 1.5rem;
    }

    .profile-user-handle-detail {
      color: #7d8396;
    }

    .profile-actions-detail {
      margin-top: 1.5rem;
      display: flex;
      align-items: center;
      justify-content: center;

    }
  }
}
</style>
