let nomorplat = [`B 3933 VNB`, `AA 3040 SI`, `A 2938 KWQ`, `G 2463 KAD`];

function cekganjilgenap(nomor) {
    let angka = parseInt(nomor.split(" ")[1]);
    let hasil;

    switch (angka % 2) {
        case 0:
            hasil = `genap`;
            break;
        case 1:
            hasil = `ganjil`;
            break;
        default:
            hasil = `tidak valid`;
    }
    console.log(`${nomor} itu plat ${hasil}`);
}

nomorplat.forEach(nomor => cekganjilgenap(nomor));
