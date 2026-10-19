import type { OsztalyAdatkokProps } from "../types/types";

function OsztalyAdatok({ jelenlevok, hangulat }: OsztalyAdatkokProps) {
    function hatter(): string {
        switch (hangulat) {
            case "Átlagos":
                return "lightgrey";
            case "Jó":
                return "lightgreen";
            case "Kiváló":
                return "lightblue";
        }
    }
    return (
        <>
        <div className="row">
            <div className="col-sm-12">
                <p>Jelenlévők száma: {jelenlevok}</p>
                <p>Osztály hangulata: <span style={{backgroundColor: hatter()}}>{hangulat}</span></p>
            </div>
        </div>
        </>
    )
}

export default OsztalyAdatok