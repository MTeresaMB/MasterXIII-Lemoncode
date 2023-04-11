import { defineStore } from 'pinia';
import { MemberEntity } from '~/types/MemberEntity';
import { memberService } from '~/services/memberService';

export type ListItem = { quantity: number; data: MemberEntity };
export type ListItemRecord = Record<MemberEntity['id'], ListItem>

export const useGitHubList = defineStore('memberList', () => {
  const searchItem = ref('lemoncode');
  const listMembers: Ref<MemberEntity[]> = ref([]);

  const errorMessage = ref('');

  const onSubmit = async (organization: string) => {
    try {
      listMembers.value = await memberService.getMember(organization)
      errorMessage.value = '';
    } catch (error) {
      errorMessage.value = 'Organization not found, Please try your search again';
    }
  }

  const handleSearch = async (textValue = searchItem.value) => {
    try {
      listMembers.value = await memberService.getMember(textValue);
      errorMessage.value = '';
    } catch (error) {
      errorMessage.value = 'Organization not found, Please try your search again';
    }
  };

  return { onSubmit, handleSearch, listMembers, searchItem, errorMessage };
})