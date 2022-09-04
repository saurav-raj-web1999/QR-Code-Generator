const btn = document.querySelector('.container button');
const text = document.querySelector('.container input');
const qrCode = document.querySelector('.container .qr-code')
const container = document.querySelector('.container')
const img = document.getElementById('image')

btn.addEventListener('click', ()=>{
    if(!text.value) return;
    
    btn.innerText ="Generating QR-Code";
    img.src = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${text.value}`;
    container.classList.add('active');
    btn.innerText ="Generate QR-Code";
})

text.addEventListener('keyup',()=>{
    if(!text.value) container.classList.remove('active');
})

