const dataOggi = new Date('2022 07 20');
const meseOggi = dataOggi.getMonth() + 1;
const annoOggi = dataOggi.getFullYear();

let dataIeri = new Date(post.created);
let meseIeri = dataIeri.getMonth() + 1;
let annoIeri = dataIeri.getFullYear();

let differenzaMesi = meseOggi - meseIeri;

let differenzaAnni = annoOggi - annoIeri;

let meseDinamico = "mese";

if (differenzaMesi < 0) {
    differenzaMesi = differenzaMesi * -1;
    meseDinamico = "mesi";
} else if (differenzaMesi > 1) {
    meseDinamico = "mesi";
}


