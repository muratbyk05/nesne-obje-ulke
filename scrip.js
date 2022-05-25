async function gitGetir(){
    const kaynak=await fetch('data.json');
    let veriler=await kaynak.json();
    console.log(veriler);
    console.log("veriler");
    veriler.ulke.forEach(element => {
        let yeniOgrenci=document.createElement("li");

        document.getElementById("DostUlkeler").appendChild(yeniOgrenci);
        yeniOgrenci.innerHTML=element.ad+" "
    });

}


