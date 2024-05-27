import Header from "./components/header";
import SectionInicial from "./components/sectionInicial";
import SectionD from "./components/sectionD";
import SectionPhone from "./components/sectionPhone";
import SectionFree from "./components/sectionFree";
import Footer from "./components/footer";



function App() {

  return (
    <div className="w-full" >
      <Header />
        <SectionInicial />
        <SectionD />
        <SectionPhone />
        <SectionFree />
      <Footer />
    </div>
  )
}

export default App;
