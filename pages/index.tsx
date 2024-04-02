import React from "react";
import { Htag, Button, P, Tag } from "../components";

function Home(): JSX.Element {
  return (
        <>
          <Htag tag='h1'>Text</Htag>
          <Button appearance='primary' arrow='right'>button primary</Button>
          <Button appearance='ghost' arrow='down'>button ghost</Button>
          <P size='l' >big</P>
          <P size='m' >medium</P>
          <P size='s' >small</P>
          <Tag size='s'>Ghost</Tag>
          <Tag size='m' color='red'>Red</Tag>
          <Tag size='s' color='green'>Green</Tag>
          <Tag color='primary'>primary</Tag>     
        </>
  );
}

export default Home;