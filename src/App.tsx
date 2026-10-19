import { useState } from 'react'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import './App.css'
import OsztalyAdatok from './components/OsztalyAdatok';
import OsztalyVezerlo from './components/OsztalyVezerlo';

function App() {
  const [jelenlevok, setJelenlevok] = useState<number>(24)
  const [hangulat, setHangulat] = useState<"Átlagos"|"Jó"|"Kiváló">("Átlagos");
  
  function jelenletNovelese() {
    setJelenlevok((jelenlevok) => (
      jelenlevok==30?
      30
      :
      jelenlevok+1
    ));
  }
  function jelenletCsokkentese() {
    setJelenlevok((jelenlevok) => (
      jelenlevok==0?
      0
      :
      jelenlevok-1
    ));
  }
  function hangulatValtoztatas() {
    switch (hangulat) {
      case "Átlagos":
        setHangulat("Jó");
        break;
      case "Jó":
        setHangulat("Kiváló");
        break;
      case "Kiváló":
        setHangulat("Átlagos");
        break;
    }
  }
  return (
    <>
      <div className="container">
        <OsztalyAdatok
          jelenlevok= {jelenlevok}
          hangulat= {hangulat}
        />
        <OsztalyVezerlo
          jelenletCsokkentese={jelenletCsokkentese}
          jelenletNovelese={jelenletNovelese}
          hangulatValtoztatas={hangulatValtoztatas}
        />
      </div>
    </>
  )
}

export default App
