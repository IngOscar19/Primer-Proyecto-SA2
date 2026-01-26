import './App.css'
import Header from './Components/Header'
import Footer from './Components/Footer'
import Card from './Components/Card'
import { useState } from "react";
import { db } from './db/db';

function App() {
  const [customer, setCustomer] = useState({});
  const [total, setTotal] = useState(0);
  const [products, setProducts] = useState([]);
  const [modal, setModal] = useState(false);
  const [data, setData] = useState(db);

  return (
    <>
      <Header />

      <main className="container-xl mt-5">
        <h2 className="text-center">Nuestra Colección</h2>

        <div className="row justify-content-center">
          {data.map((guitar) => (
            <div key={guitar.id} className="col-md-6 col-lg-4 my-4">
              <Card guitar={guitar} />
            </div>
          ))}
        </div>
      </main>

      <Footer />
    </>
  );
}

export default App;
