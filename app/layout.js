import "./globals.css";
import "./fanta.css";
import Head from "./head";
import Link from "next/link";
import Cart from "@/components/Cart";
import EmailInput from "@/components/EmailInput";
import ProductsProvider from "@/context/ProductContext";

export const metadata = {
  title: "Rig Master",
  description: "Super cool store for buying custom and prebuilt pc",
};

export default function RootLayout({ children }) {
  return (
    <ProductsProvider>
    <html lang="en">
      <Head/>
      <body>
        <div id="portal"/>
        <div id="app">
          <header>
            <div className="header-content">
              <Link href={'/'}><h1>RigMaster</h1></Link>
              <h5 className="mid-text">- Cool stuff for cool people -</h5>
              <Cart />
            </div>
          </header>

          <main>
            {children}
          </main>
          <div className="hr"/>
          <footer>
            <div className="email-container">
              <h5>Your premier destination for custom pc builds, 
                prebuilt systems, laptops and accessories </h5>
                <EmailInput /> 
            </div>

            <div className="links-container">
              <div>
                <h3>RigMaster</h3>
                <Link href={'/'}>Cart</Link>
                <Link href={'/'}>Roadmap</Link>
              </div>
              <div>
                <h3>Store</h3>
                <Link href={'/'}>Home</Link>
                <Link href={'/cart'}>Cart</Link>
              </div>
              <div>
                <h3>Support</h3>
                <Link href={'/contact'}>Contact</Link>
                <Link href={'/faqs'}>FAQs</Link>
              </div>
            </div>

            <div className="socials">
              <p> <a href="xavy.my">setuz</a></p>
              <div className="social-links">
                <Link href={'/'} target="_blank"><i className="fa-brands fa-github"></i></Link>
                <Link href={'/'} target="_blank"><i className="fa-brands fa-linkedin"></i></Link>
                <Link href={'/'} target="_blank"><i className="fa-brands fa-youtube"></i></Link>
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
    </ProductsProvider>
  );
}
