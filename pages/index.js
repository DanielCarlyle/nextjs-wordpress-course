import { gql } from "@apollo/client";
import client from "client";
import { cleanAndTransformBlocks } from "utils/cleanAndTransformBlocks";
import { BlockRenderer } from "components/BlockRenderer";

export default function Home(props) {
  console.log("PROPS:", props);
  return (<div>
    <BlockRenderer block={props.blocks} />
    <h1>TEST</h1>
  </div>
  );
}

//Built in Next Function called getStaticProps to get data from the page
//Destructure the props

export const getStaticProps = async () => {
  const { data } = await client.query({
    query: gql`
query NewQuery {
  nodeByUri(uri: "/") {
    ... on Page {
      id
      blocks(postTemplate: false)
    }
  }
}
    `,
  });

  return {
     props: {
      blocks: cleanAndTransformBlocks(data.nodeByUri.blocks),
        //myexampleprop: "test", 
     },
  };
};
