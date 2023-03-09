import React from "react";
import FooterButtons from "../../components/FooterButtons";
import ListContainer from "../../components/ListContainer";
import people from "../../helpers/people";

const HomeScreen = () => {
  return (
    <div>
      <ListContainer title="Jamie" groupId={people.jamie} />
      <ListContainer title="Student" groupId={people.student} />
      <ListContainer title="All other meals" groupId={people.allOther} />
      <FooterButtons />
    </div>
  );
};

export default HomeScreen;
