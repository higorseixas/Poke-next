import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <Navbar>
      <div>
        <Image src={/images/pokeball.png} 
        width="30"
        height="30"
        alt="PokeNext" />
        <h1>PekeoNext</h1>
      </div>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">Home</Link>
        </li>
      </ul>
    </Navbar>
  )
}