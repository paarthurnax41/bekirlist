import React from "react";

export const getStaticPaths = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  const paths = data.map((bekir) => {
    return {
      params: { id: bekir.id.toString() },
    };
  });
  return {
    paths: paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const res = await fetch("https://jsonplaceholder.typicode.com/users/" + id);
  const data = await res.json();

  return {
    props: { bekirs: data },
  };
};

const Details = ({ bekirs }) => {
  return (
    <div>
      <h1> {bekirs.name} </h1>
      <p>{bekirs.email}</p>
      <p>{bekirs.website}</p>
      <p>{bekirs.address.city}</p>
    </div>
  );
};

export default Details;
