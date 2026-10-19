import type { OsztalyVezerloProps } from "../types/types";

function OsztalyVezerlo({jelenletCsokkentese,jelenletNovelese,hangulatValtoztatas}: OsztalyVezerloProps) {
    return (
        <>
            <div className="row">
                <div className="col-sm-12">
                    <button className="btn btn-primary" onClick={jelenletCsokkentese}>Csökkentés</button>
                    <button className="btn btn-primary" onClick={jelenletNovelese}>Növelés</button>
                    <button className="btn btn-primary" onClick={hangulatValtoztatas}>Hangulat változtatása</button>
                </div>
            </div>
        </>
    )
}
export default OsztalyVezerlo;