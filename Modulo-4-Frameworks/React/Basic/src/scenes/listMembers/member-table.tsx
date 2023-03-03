import React from "react";
import { MemberEntity } from "@/model/MemberEntity";
import { MemberTableRow } from "./member-table-row";
import { OrganizationSearch } from "./organization-search";
import classes from '@/styles/list-style.scss';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


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
      <TableContainer className={classes.tableContainer} component={Paper}>
        <Table className={classes.table} aria-label="simple table" >
          <TableHead className={classes.tableHead}>
            <TableRow>
              <TableCell className={classes.tableCell} align="center">AVATAR</TableCell>
              <TableCell className={classes.tableCell} align="center">ID</TableCell>
              <TableCell className={classes.tableCell} align="center">NAME</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {members.map((member) => (
              <TableRow key={member.id} className={classes.tableRow}>
                <MemberTableRow key={member.id} member={member}  />
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};
