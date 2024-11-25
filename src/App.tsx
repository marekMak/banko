import Cards from "./components/Cards"
import Handle from "./components/Handle"
import Header from "./components/Header"
import Hero from "./components/Hero"
import Paypal from "./components/Paypal"
import People from "./components/People"
import Banner from "./components/Banner"
import Footer from "./components/Footer"
import Prefooter from "./components/Prefooter"

function App() {


    return (
    <main className="bg-baseBG w-full overflow-x-hidden h-full min-h-screen">
        <Hero/>
        <Header/>
        <Handle/>
        <Paypal/>
        <Cards/>
        <People/>
        <Banner/>
        <Prefooter/>
        <Footer/>
    </main>
  )
}

export default App
