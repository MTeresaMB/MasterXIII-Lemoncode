import React from "react";
import { MemberEntity } from "@/model/MemberEntity";
import { MemberTableRow } from "./member-table-row";
import { OrganizationSearch } from "./organization-search";
import { OrganizationContext } from "@/app";
import ReactPaginate from "react-paginate";

import { Box } from "@mui/material";
import c from "./list-style.css";

export const MemberTable = () => {
  const { organizationName } = React.useContext(OrganizationContext);
  const [members, setMembers] = React.useState<MemberEntity[]>([]);
  const [pageNumber, setPageNumber] = React.useState(0);

  const membersPerPage = 6;
  const indexOfLastMember = pageNumber * membersPerPage;

  const displayMembers = members
    .slice(indexOfLastMember, indexOfLastMember + membersPerPage)
    .map((member) => {
      return <MemberTableRow key={member.id} member={member} />;
    });

  React.useEffect(() => {
    const handleSearch = () => {
      fetch(`https://api.github.com/orgs/${organizationName}/members`)
        .then((response) => {
          if (response.ok) {
            return response.json();
          } else {
            throw new Error("Error fetching members");
          }
        })
        .then(setMembers)
        .catch(() => {});
    };
    handleSearch();
  }, [organizationName]);

  return (
    <>
      <OrganizationSearch />
      <Box>
        <Box className={c.containerCard}>{displayMembers}</Box>
        <Box className={c.containerPagination}>
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
            containerClassName={c.paginationBttns}
            previousLinkClassName={c.previousBttn}
            nextLinkClassName={c.nextBttn}
            disabledClassName={c.paginationDisabled}
            activeClassName={c.paginationActive}
          ></ReactPaginate>
        </Box>
      </Box>
    </>
  );
};
