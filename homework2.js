// task1
// function fasl_aniqla(oy) {
//     let fasl = "";
//     if (oy >= 3 && oy <= 5) {
//         fasl = "Bahor";
//     } else if (oy >= 6 && oy <= 8) {
//         fasl = "Yoz";
//     } else if (oy >= 9 && oy <= 11) {
//         fasl = "Kuz";
//     } else {
//         fasl = "Qish";
//     }
//     return fasl;
// }
// let oy = prompt("Oy raqamini kiriting (1-12 oralig'ida): ")*1;
// console.log(fasl_taniqla(oy));

// task2
// function yosh_aniqla(tugilgan_yil) {
//     let bugungi_yil = new Date().getFullYear();
//     let yosh = bugungi_yil - tugilgan_yil;
//     return yosh;
// }
// let tugilgan_yil = prompt("Tug'ilgan yilingizni kiriting: ")*1;
// console.log("Sizning yoshingiz:", yosh_aniqla(tugilgan_yil));

// task3
// let n =prompt("N ni kiriting: ");
// let juft_yigindi = 0;
// let toq_yigindi = 0;
// for (let i = 1; i <= n; i++) {
//     if (i % 2 === 0) {
//         juft_yigindi += i;
//     } else {
//         toq_yigindi += i;
//     }
// }
// let nisbat = juft_yigindi / toq_yigindi;
 

// console.log("Juft sonlar yig'indisi toq sonlar yig'indisiga nisbat:", nisbat);
// console.log("juft yigindi: "+juft_yigindi);
// console.log("toq yigindi: "+toq_yigindi);


// task4
// function operator_aniqla(raqam_kod) {
//     let operator = "";
//     switch (raqam_kod) {
//         case "90":
//         case "91":        
//             operator = "Beeline";
//             break;
//         case "94":
//         case "95":
//         case "93":
//             operator = "Ucell";
//             break;   
//         case "96":
//         case "99":
//             operator = "Uzmobile";
//             break;
//         case "88":
//         case "97":
//             operator ="Mobiuz";
//             break;            
//         default:
//             operator = "Noma'lum";
//             break;
//     }
//     return operator;
// }
// let raqam_kod = prompt("Telefon raqam kodini kiriting (masalan, 90, 91, 99): ");
// console.log("Telefon operatori:", operator_aniqla(raqam_kod));

