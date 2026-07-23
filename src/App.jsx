import Header from "./components/layouts/Header"
import Footer from './components/layouts/Footer';

function App() {
  return (
    <>
      <Header /> 
      <div className="min-h-80 flex flex-col items-center justify-center">
        <h2 className="text-2xl font-bold">Welcom to MERN stack ecommerce series</h2>
        <p className="text-sm">This is a real world ecommerce project that will develop on MERN. We will build step by step</p>
      </div>
      <Footer />
    </>
  )
}

export default App
