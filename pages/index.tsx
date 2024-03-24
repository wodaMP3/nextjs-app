import React from "react";
import { Htag, Button} from "../components";

function Home(): JSX.Element {
  return (
        <>
          <Htag tag='h1'>Text</Htag>
          <Button appearance='primary' arrow='right'>button primary</Button>
          <Button appearance='ghost' arrow='down'>button ghost</Button>
        </>
  );
}

export default Home;