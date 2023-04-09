import { MemberEntity } from "~/types/MemberEntity"; 

export const memberService = {
  async getMember(organization:string) {
    const members = await fetch(`https://api.github.com/orgs/${organization}/members`)
    .then((response) => response.json())
    return members as MemberEntity[];
  }
}