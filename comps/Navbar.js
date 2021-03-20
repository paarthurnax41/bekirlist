import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <Image src="/boredbearpng.png" width={128} height={100}></Image>
      </div>
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/about">
        <a>About</a>
      </Link>
      <Link href="/bekirs">
        <a>Bekir Listing</a>
      </Link>
    </nav>
  );
};

export default Navbar;
