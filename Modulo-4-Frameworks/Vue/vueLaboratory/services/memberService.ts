import { MemberEntity } from "~/types/MemberEntity"; 

export const memberService = {
  async getMember(organization: string) {
    const members = await fetch(`https://api.github.com/orgs/${organization}/members`).then((response) => {
      if (!response.ok) {
        throw new Error('Organization not found. Please try your search again');
      }
      return response.json();
    });
    return members as MemberEntity[];
  },

  async getMemberById(id: string) {
    const member = await fetch(`https://api.github.com/users/${id}`).then((response) => response.json());
    return member as MemberEntity;
  },
};
