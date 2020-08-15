const puppeteer = require('puppeteer');
const fs = require('fs');

// (async () => {
//   const browser = await puppeteer.launch();
//   const page = await browser.newPage();
//   await page.goto('https://www.aracaju.se.gov.br/noticias/87600', {waitUntil: 'networkidle2'});
//   //tira uma foto da página aberta
//   await page.screenshot({path: 'concurso_auditor_fiscal_TI.jpg'});
//   //gera um pdf
//   await page.pdf({path: 'hn.pdf', format: 'A4'});

//   await browser.close();
// })();
//Garimpando dados no instagram
(async () => {
    const browser = await puppeteer.launch({headless:true});
    const page = await browser.newPage();
    await page.goto('https://instagram.com/rocketseat_oficial', {waitUntil: 'networkidle2'});

    const resultadoImgList = await page.evaluate(()=>{
        //Essa função será executada direto no browser

        //Obter as imagens ques estão na parte de posts
        const nodelist = document.querySelectorAll('article img');
        //Transformar o nodelist em um array
        const imgArray = [...nodelist];
        //Transformas os nodes(elementos html em objetos JS)
        const imglist = imgArray.map(img => ({
            src: img.src
        }));
        //Colocar para fora da função
        return imglist;
    })

    //escrever os dados em um arquivo local(json)
    fs.writeFile('instagram.json',JSON.stringify(resultadoImgList,null,2),error =>{
        if(error)
            throw new Error('Ocorreu um erro ao salva o arquivo')
        console.log('sucessfully');
    })
     await browser.close();
  })();