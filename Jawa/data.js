const nama = "bagas hardianto";
let usia = 50;

function generateBiodata() {
    let generasi;

    if(usia > 10 && usia < 18) {
        return generasi = "generasi remaja"
    }
    else if(usia > 18 && usia < 30 ){
        console.log(`anda dewasa`)
    }
    else if(usia > 30 ) {
        console.log (`IDIH TUWIR`)
    }
    else if (usia > 2 && usia < 10) {
        console.log(`anda anak anak`)
    }
    else {
        console.log(`wah gawat`)   
    }

    console.log (`generasi saya adalah ${generasi}`);

}

console.log(nama);
console.log(usia);

generateBiodata();

