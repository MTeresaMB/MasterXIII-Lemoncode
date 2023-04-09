import { defineStore } from 'pinia';
import { MemberEntity } from '~/types/MemberEntity';
import { memberService } from '~/services/memberService';

export type ListItem = { quantity: number; data: MemberEntity };
export type ListItemRecord = Record<MemberEntity['id'], ListItem>

export const useGitHubList = defineStore('memberList', () => {
  const searchItem = ref('Lemoncode');
  const listMembers: Ref<MemberEntity[]> = ref([]);

  const onSubmit = async (organization: string) => {
    listMembers.value = await memberService.getMember(organization)
  }

  const handleSearch = async (textValue = searchItem.value) => {
    listMembers.value = await memberService.getMember(textValue);
  };
  return { onSubmit, handleSearch, listMembers, searchItem };
})