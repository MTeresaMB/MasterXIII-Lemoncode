import { MemberEntity } from "~/types/MemberEntity"; 

export const memberService = {
  async getMember(organization:string) {
    const members = await fetch(`https://api.github.com/orgs/${organization}/members`)
    .then((response) => response.json())
    if (members.length === 0) {
      throw new Error(`No se encontraron resultados para la organización ${organization}.`)
    }
    return members as MemberEntity[];
  },

  async getMemberById(id:string){
    const member = await fetch(
      `https://api.github.com/users/${id}`
    ).then((response) => response.json());
    return member as MemberEntity;
  }
}

