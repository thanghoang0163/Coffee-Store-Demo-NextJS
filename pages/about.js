import React from "react";
import { useRouter } from "next/router";

export async function getServerSideProps(context) {
  return {
    props: {}, // will be passed to the page component as props
  };
}

function About() {
  const route = useRouter();

  console.log("Query: ", route.query);

  return <div onClick={() => route.back()}>This is about page</div>;
}

export default About;
