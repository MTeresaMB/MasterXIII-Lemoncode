import React from "react";
import { MemberEntity } from "@/model/MemberEntity";
import { MemberTableRow } from "./member-table-row";
import { OrganizationSearch } from "./organization-search";
import { HeaderLayout } from "@/layouts";

export const MemberTable = () => {
  const [members, setMembers] = React.useState<MemberEntity[]>([]);

  const handleSearch = (organizationName: string) => {
    fetch(`https://api.github.com/orgs/${organizationName}/members`)
    .then((response) => {
      if(response.ok){
        return response.json();
      } else {
        throw new Error("Error fetching members")
      }
    })
    .then(setMembers)
    .catch(() => {})
  };

  return (
    <>
      <OrganizationSearch onSearch={handleSearch}/>
        <table>
          <thead>
            <tr>
              <th>Avatar</th>
              <th>ID</th>
              <th>Name</th>
            </tr>
          </thead>
          <tbody>
            {members.map((member) => (
              <tr key={member.id}>
                <MemberTableRow key={member.id} member={member}/>
              </tr>
            ))}
          </tbody>
        </table>
    </>
  );
};
