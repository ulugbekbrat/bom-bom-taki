let ism = prompt('Ismingizni kiriting')
let fam = prompt('Familiyangizni kiriting')
let yosh = +prompt('Yoshingizni kiriting')
let kattaKichik = +prompt('Ismingizni katta yoki kichikligini tanlang \n 1)katta \n 2)kichik')


let h1 =  document.querySelector('h1')



if(kattaKichik === 1){
    ism = ism.toUpperCase();
}else{
    ism = ism.toLowerCase();
}

h1.innerHTML = `Ism: ${ism}, </br> Familiya: ${fam}, </br> Yoshingiz: ${yosh} yoshda`;
