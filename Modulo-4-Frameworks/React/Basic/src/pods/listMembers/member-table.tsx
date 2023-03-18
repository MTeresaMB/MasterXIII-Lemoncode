import React from "react";
import { MemberEntity } from "@/model/MemberEntity";
import { MemberTableRow } from "./member-table-row";
import { OrganizationSearch } from "./organization-search";
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import classes from './list-style.css';
import { OrganizationContext } from "@/app";

export const MemberTable = () => {
  const {organizationName} = React.useContext(OrganizationContext);
  const [members, setMembers] = React.useState<MemberEntity[]>([]);

  React.useEffect(() => {
    const handleSearch = () => {
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
    handleSearch();
  },[organizationName]);

  return (
    <>
      <OrganizationSearch/>
        <TableContainer className={classes.tableContainer} component={Paper}>
          <Table aria-label="simple table">
          <TableHead className={classes.tableHead}>
            <TableRow>
              <TableCell>Avatar</TableCell>
              <TableCell>ID</TableCell>
              <TableCell>Name</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {members.map((member) => (
              <TableRow key={member.id}>
                <MemberTableRow key={member.id} member={member}/>
              </TableRow>
            ))}
          </TableBody>
          </Table>
        </TableContainer>
    </>
  );
};
