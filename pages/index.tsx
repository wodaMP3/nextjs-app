import React from "react";
import { Htag, Button} from "../components";

function Home(): JSX.Element {
  return (
        <>
          <Htag tag='h1'>Text</Htag>
          <Button appearance='primary'>button primary</Button>
          <Button appearance='ghost'>button ghost</Button>
        </>
  );
}

export default Home;