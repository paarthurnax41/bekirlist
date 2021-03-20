import React from "react";
import styles from "../../styles/Bekirs.module.css";
import Link from "next/link";
export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  return {
    props: { bekos: data },
  };
};

const index = ({ bekos }) => {
  return (
    <div>
      <h1>All Bekiros</h1>
      {bekos.map((bekir) => (
        <Link href={"/bekirs/" + bekir.id} key={bekir.id}>
          <a className={styles.single}>
            <h3>{bekir.name}</h3>
          </a>
        </Link>
      ))}
    </div>
  );
};

export default index;
