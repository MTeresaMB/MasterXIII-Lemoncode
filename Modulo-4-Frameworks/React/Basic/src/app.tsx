import classes from "./index.scss";
import React from "react";
import { MemberEntity } from "./model";
import { MemberRow } from "./member-row";

export const App = () => {
  const [members, setMembers] = React.useState<MemberEntity[]>([]);
  React.useEffect(() => {
    fetch("https://api.github.com/orgs/lemoncode/members")
    .then((response) => response.json())
    .then(setMembers);
  }, []);
  
  return (
    <div className={classes.userListContainer}>
      <span className={classes.header}>Avatar</span>
      <span  className={classes.header}>Id</span>
      <span  className={classes.header}>Name</span>
      {members.map((member) => {
        return <MemberRow member = {member}></MemberRow>
      })}
    </div>
  )
}