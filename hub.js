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



//keduaa

let daftarSiswa = [
    { nama: "dani", nilai: 100 },
    { nama: "lika", nilai: 88 },
    { nama: "subur", nilai: 70 },
    { nama: "syarijem", nilai: 61 },
    { nama: "agus", nilai: 48 },
    
];

daftarSiswa.forEach(siswa => {
    switch (true) {
        case (siswa.nilai >= 90):
            siswa.grade = 'A';
            break;
        case (siswa.nilai >= 80):
            siswa.grade = 'B';
            break;
        case (siswa.nilai >= 70):
            siswa.grade = 'C';
            break;
        case (siswa.nilai >= 60):
            siswa.grade = 'D';
            break;
        default:
            siswa.grade = 'E';
            break;
    }

    console.log(`${siswa.nama}, Nilai Anda adalah ${siswa.grade}`);
});
