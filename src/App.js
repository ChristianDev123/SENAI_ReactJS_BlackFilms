import { useState } from "react";
import Footer from "./Components/Footer/Footer";
import ListingMovies from "./Components/Listing Movies/listing";
import NavbarPage from "./Components/Navbar/navbar";
function App() {
  return (
    <>
      <header>
        <NavbarPage />
      </header>
      <main id='listingMovies'>
        <ListingMovies />
      </main>
      <footer>
        <Footer />
      </footer>
      <style jsx>{`
        main{
          background: #000;
          margin-top:55px;
          padding:20px;
        }
        :root{
          --colorComponentsHome:#212529;
        }
      `}</style>
    </>
  );
}

export default App;
