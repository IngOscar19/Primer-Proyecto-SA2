import './App.css'
import Header from './Components/Header'
import Footer from './Components/Footer'
import Card from './Components/Card'
function App() {


  return (
    <>

    <Header></Header>

     

    <main className="container-xl mt-5">
  <h2 className="text-center">Nuestra Colección</h2>

  <div className="row justify-content-center">
    <div className="col-md-6 col-lg-4 my-4">
      <Card />
    </div>
    <div className="col-md-6 col-lg-4 my-4">
      <Card />
    </div>
    <div className="col-md-6 col-lg-4 my-4">
      <Card />
    </div>
    <div className="col-md-6 col-lg-4 my-4">
      <Card />
    </div>
    <div className="col-md-6 col-lg-4 my-4">
      <Card />
    </div>
    <div className="col-md-6 col-lg-4 my-4">
      <Card />
    </div>
  </div>
</main>
    <Footer></Footer>
    
    </>
  )
}

export default App
