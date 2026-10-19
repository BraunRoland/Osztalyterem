export type OsztalyAdatkokProps = {
    jelenlevok: number;
    hangulat: "Átlagos"|"Jó"|"Kiváló";
}

export type OsztalyVezerloProps = {
    jelenletNovelese: () => void;
    jelenletCsokkentese: () => void;
    hangulatValtoztatas: () => void;
}