fetch('https://icanhazdadjoke.com/slack')
.then(datas => datas.json())
.then(fundata => {
    const funtext =  fundata.attachments[0].text;
    const Funelement = document.getElementById('Funelement');

    Funelement.innerHTML = funtext;
})