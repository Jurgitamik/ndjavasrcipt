console.log('-------------------');
console.log('KINTAMŲJŲ INICIJAVIMAS');

console.log('-------------------');
console.log('1. Užduotis');

const du = ( 2 );
console.log(du);

const grozis = (6);
console.log(grozis);

const stuka = (1000);
console.log(stuka);

console.log('-------------------');
console.log('2. Užduotis');

const namas = ('namas');
console.log(namas);

const pirkia = ('namas');
console.log(pirkia);

const troba = ('namas');
console.log(troba);

console.log('-------------------');
console.log('3. Užduotis');

const list = [8, 7, 6, 5, 4];
console.log(list);

const listas = [3.5, 5.5, 7.5, 9.5, 1.5];
console.log(listas);

const listukas = [2, 3, 2, 3, 2];
console.log(listukas);

console.log('-------------------');
console.log('4. Užduotis');
 
const sarasas = ['as', 'tu', 'jis', 'ji', 'jie'];
console.log(sarasas);

const balses = ['a', 'e', 'o', 'i', 'u'];
console.log(balses);

const priebalses = ['r', 't', 'p', 's', 'd'];
console.log(priebalses);


console.log('-------------------');
console.log('VEIKSMAI SU KINTAMAISIAIS');
console.log('-------------------');
console.log('1. Užduotis');

const numbsuma = du + grozis + stuka;
console.log(numbsuma);

console.log('-------------------');
console.log('2. Užduotis');

const textsum = namas + ' ' + pirkia + ' ' + troba;
console.log(textsum);

console.log('-------------------');
console.log('3. Užduotis');

const sum1 = list[0] - list[1] + list[2] - list[3] + list[4];
console.log(sum1);

const sum2 = listas[0] - listas[1] + listas[2] - listas[3] + listas[4];
console.log(sum2);

const sum3 = listukas[0] - listukas[1] + listukas[2] - listukas[3] + listukas[4];
console.log(sum3);

console.log('-------------------');
console.log('4. Užduotis');

const verte1 = sarasas[0] + ',' + ' ' + sarasas[1] + ',' + ' ' + sarasas[2] + ','+ ' ' + sarasas[3] + ',' + ' ' + sarasas[4];
console.log(verte1);

const verte2 = balses[0] + ',' + ' ' + balses[1] + ',' + ' ' + balses[2] + ','+ ' ' + balses[3] + ',' + ' ' + balses[4];
console.log(verte2);

const verte3 = priebalses[0] + ',' + ' ' + priebalses[1] + ',' + ' ' + priebalses[2] + ','+ ' ' + priebalses[3] + ',' + ' ' + priebalses[4];
console.log(verte3);


console.log('-------------------');
console.log('KINTAMŲJŲ PALYGINIMAS');

// const taip = ('Pomidoras');
// const netaip = ('Bandykite kitą kartą.');

// if (taip === 'Pomidoras') {
//     console.log(taip);    
// } else {
//     console.log(netaip);
// }

const taip = ('Agurkas');
const netaip = ('Bandykite kitą kartą.');

if (taip === 'Pomidoras') {
    console.log(taip);    
} else {
    console.log(netaip);
}

console.log('-------------------');
console.log('1. Užduotis');

const firfir = 16;
const furfur = 65;

if (firfir !== furfur) {
    console.log('Teisingas atsakymas');  
} else {
    console.log('Nagi, paskaičiuokime!');
}

console.log('-------------------');
console.log('2. Užduotis');

const ilgai = 'Ką pasėsi, tą ir pjausi';
console.log(ilgai.length);

const trumpai = 'Tu - (ne) aš                        ';
console.log(trumpai.length);

console.log('-------------------');
console.log('3. Užduotis');

const pirmoilgis = ilgai.length;
const antroilgis = trumpai.length;

if (pirmoilgis > antroilgis) {
    console.log('Pirmas ilgesnis už antrą');    
} else {
    if (pirmoilgis !== antroilgis) {
        console.log('Abu nelygūs');
    } else {
        console.log('Antras ilgesnis už pirmą');
    }      
}

console.log('-------------------');
console.log('4. Užduotis');

let list1 = [6, 7, -4, 4, 837, [0, 6666]];
let list2 = ['a', 'fd', 'ssf4', 5];
console.log(list1);
console.log(list1.length);
console.log(list2);
console.log(list2.length);

// Kuo skiriasi sąrašo tipo ir teksto tipo ilgis???

console.log('-------------------');
console.log('CIKLO FOR PANAUDOJIMAS');
console.log('-------------------');
console.log('1. Užduotis');

// const start = 0;
// const finish = 0;
// let summa = 0;

// for (let i = start; i <= finish; i++) {
//     summa = summa + i;    
// }
// console.log('Suma nuo', start, 'iki', finish, 'yra', summa);

// let start = 0;
// let finish = 4;
// let summa = 0;

// for (let i = start; i <= finish; i++) {
//     summa = summa + i;    
// }
// console.log('Suma nuo', start, 'iki', finish, 'yra', summa);

// const start = 0;
// const finish = 100;
// let summa = 0;

// for (let i = start; i <= finish; i++) {
//     summa = summa + i;    
// }
// console.log('Suma nuo', start, 'iki', finish, 'yra', summa);

// const start = 574;
// const finish = 815;
// let summa = 0;

// for (let i = start; i <= finish; i++) {
//     summa = summa + i;    
// }
// console.log('Suma nuo', start, 'iki', finish, 'yra', summa);

// const start = -50;
// const finish = 50;
// let summa = 0;

// for (let i = start; i <= finish; i++) {
//     summa = summa + i;    
// }
// console.log('Suma nuo', start, 'iki', finish, 'yra', summa);

const start = -70;
const finish = 30;
let summa = 0;

for (let i = start; i <= finish; i++) {
    summa = summa + i;    
}
console.log('Suma nuo', start, 'iki', finish, 'yra', summa);


console.log('-------------------');
console.log('2. Užduotis');

let rastas = 'mikailionyte';
console.log(rastas);

for (let i = rastas.length - 1 ; i >= 0; i-- ) {
    console.log(rastas[i]);
}

console.log('-------------------');
console.log('3. Užduotis');

let nuo = 0;
let iki = 11;
let daliklis = 3;
let kiek = 0;

for (let i = 0; i <= iki; i++) {
    if ( i % daliklis === 0) {
        kiek++;
    }
    }
        
console.log('Skaičių intervale tarp', nuo, 'ir', iki, ', besidalinančių be liekanos iš', daliklis, 'yra', kiek, 'vnt.');
    
 nuo = 0;
 iki = 11;
 daliklis = 5;
 kiek = 0;

for (let i = 0; i <= iki; i++) {
    if ( i % daliklis === 0) {
        kiek++;
    }
    }
        
console.log('Skaičių intervale tarp', nuo, 'ir', iki, ', besidalinančių be liekanos iš', daliklis, 'yra', kiek, 'vnt.');
    
//  nuo = 0;
//  iki = 11;
//  daliklis = 7;
//  kiek = 0;

// for (let i = 0; i <= iki; i++) {
//     if ( i % daliklis === 0) {
//         kiek++;
//     }
//     }
        
// console.log('Skaičių intervale tarp', nuo, 'ir', iki, ', besidalinančių be liekanos iš', daliklis, 'yra', kiek, 'vnt.');
    
 nuo = 8;
 iki = 31;
 daliklis = 3;
 kiek = 0;

for (let i = 0; i <= iki; i++) {
    if ( i % daliklis === 0) {
        kiek++;
    }
    }
        
console.log('Skaičių intervale tarp', nuo, 'ir', iki, ', besidalinančių be liekanos iš', daliklis, 'yra', kiek, 'vnt.');
    
//  nuo = -18;
//  iki = 18;
//  daliklis = 3;
//  kiek = 0;

// for (let i = 0; i <= iki; i++) {
//     if ( i % daliklis === 0) {
//         kiek++;
//     }
//     }
        
// console.log('Skaičių intervale tarp', nuo, 'ir', iki, ', besidalinančių be liekanos iš', daliklis, 'yra', kiek, 'vnt.');
  
console.log('-------------------');
console.log('FUNKCIJOS');
console.log('-------------------');
console.log('1. Užduotis');

function tusciaFunkcija () {
    return false;
}
console.log(tusciaFunkcija ());

console.log('-------------------');
console.log('2. Užduotis');
