import React, { useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const NotFound = () => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 3000);
  }, []);

  return (
    <div className="not-found">
      <h1>Ooops...</h1>
      <h2>That Page cant be found</h2>
      <p>
        Go back to the <Link href="/">Homepage</Link>{" "}
      </p>
    </div>
  );
};

export default NotFound;
