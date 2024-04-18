import Link from "next/link";


const Notfound = () => {
  return (
    <div>
        <h1> 404:  Ooopss Page Not Found </h1>
        <p>The Page you're looking for doesn't exist</p>
        <Link href="/">Return Home</Link>
    </div>
  )
}

export default Notfound; 