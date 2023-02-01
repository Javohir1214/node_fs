const fs = require('fs')

const navoiy = `O'n sakkiz yosh - o'smirlikning tugab, umrning navqiron fasliga qadam qo'yish pallasi. Bu yoshdan boshlab olamga o'zgacha ko'z bilan nazar tashlab, o'zgacha fikrlash, borliqni tushunish - his etishdagi nozik zehn, hayot va yashash falsafasini anglash yangi bosqichga ko'tariladi. O'n sakkiz yoshli sarvinozning kamoloti va latofati, boshidagi g'avg'olarning boisi ham shu bilan izohlansa, ne ajab. Balki o'n sakkiz yosh insonning aqli ravshanlashib, dunyoni o'zgacha ko'z bilan idrok eta boshlagan, ham jisman, ham ma'nan ayni kamolotga yetgan davridir. Shuning uchun shoir bu g'azalda aynan shu yoshni qalamga olgandir…`

function foo(error) {
    console.log('Molodes Javohir, barakat top!')
    console.log(error)   // qoshadon function
}

function bar(error) {
    console.log('Molades Farruxbek, barakat top!')
    console.log(error)   // ochiradon function
}

//fs.rm("navoiy-gazallari.txt", bar)   // bu ochiradi
fs.writeFile("read.js", "const fs = require('fs');", foo) // bu qoshadi