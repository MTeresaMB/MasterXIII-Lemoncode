import React from "react";
import { MemberEntity } from "@/model/MemberEntity";
import { MemberTableRow } from "./member-table-row";
import { OrganizationSearch } from "./organization-search";
import { Box, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import classes from './list-style.css';
import { OrganizationContext } from "@/app";
import ReactPaginate from "react-paginate";

export const MemberTable = () => {
  const {organizationName} = React.useContext(OrganizationContext);
  const [members, setMembers] = React.useState<MemberEntity[]>([]);
  const [pageNumber, setPageNumber] = React.useState(0);

  const membersPerPage = 6;
  const indexOfLastMember = pageNumber * membersPerPage;

  const displayMembers = members
  .slice(indexOfLastMember, indexOfLastMember + membersPerPage)
  .map((member) => {
    return (
      <TableRow key={member.id}>
        <MemberTableRow key={member.id} member={member}/>
      </TableRow>
    )
  });

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
            {displayMembers}  
          </TableBody>
          <Box>
            <ReactPaginate
              previousLabel={"Previous"}
              nextLabel={"Next"}
              breakLabel={"..."}
              breakClassName={"break-me"}
              pageCount={Math.ceil(members.length / membersPerPage)}
              marginPagesDisplayed={2}
              pageRangeDisplayed={6}
              onPageChange={({ selected }) => {
                setPageNumber(selected);
              }}
              containerClassName={classes.paginationBttns}
              previousLinkClassName={classes.previousBttn}
              nextLinkClassName={classes.nextBttn}
              disabledClassName={classes.paginationDisabled}
              activeClassName={classes.paginationActive}
            ></ReactPaginate>        
          </Box>
          </Table>
        </TableContainer>
    </>
  );
};
