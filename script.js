const WHATSAPP='01227675955';
const accounts=[
  {id:'account01',name:'Account 1',description:'أكونت ممتاز بمستويات عالية وسكنات نادرة.',images:['account01-1.jpg']},
  {id:'account02',name:'Account 2',description:'أكونت قوي مع شخصيات مميزة وسكنات نادرة.',images:['account02-1.jpg']},
  {id:'account03',name:'Account 3',description:'أكونت متوسط المستوى مع سكنات جميلة.',images:['account03-1.jpg']}
];
const socialLinks=[
  {icon:'fab fa-facebook-f',url:'https://www.facebook.com/share/1DPWi1MZAq/'},
  {icon:'fab fa-instagram',url:'https://www.instagram.com/adeleloraby26?igsh=cHlmZnlrc3F5MTU1‎'},
];

const accountsGrid=document.getElementById('accounts-grid');
accounts.forEach((acc,i)=>{
  const card=document.createElement('div'); card.className='account-card';
  const img=document.createElement('img'); img.src=acc.images[0]; img.alt=acc.name;
  const shine=document.createElement('div'); shine.className='shine';
  const content=document.createElement('div'); content.className='content';
  const h3=document.createElement('h3'); h3.textContent=acc.name;
  const p=document.createElement('p'); p.textContent=acc.description;

  const btnGroup=document.createElement('div'); btnGroup.className='btn-group';
  const btnRequest=document.createElement('button'); btnRequest.className='btn-whatsapp';
  btnRequest.innerHTML='<i class="fas fa-image"></i> طلب صور';
  btnRequest.onclick=()=>window.open(`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(`🖼 طلب صور إضافية للأكونت: ${acc.name}`)}`,'_blank');
  const btnBuy=document.createElement('button'); btnBuy.className='btn-whatsapp';
  btnBuy.innerHTML='<i class="fas fa-cart-plus"></i> شراء الآن';
  btnBuy.onclick=()=>window.open(`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(`🛒 شراء الأكونت: ${acc.name}`)}`,'_blank');

  btnGroup.appendChild(btnRequest); btnGroup.appendChild(btnBuy);
  content.appendChild(h3); content.appendChild(p); content.appendChild(btnGroup);
  card.appendChild(img); card.appendChild(shine); card.appendChild(content);
  accountsGrid.appendChild(card);

  // إظهار الكارد مباشرة
  card.classList.add('show');
});

// Helper text
document.querySelectorAll('.input-box input, .input-box textarea').forEach(el=>{
  el.addEventListener('focus',()=>{el.placeholder=el.dataset.helper;});
  el.addEventListener('blur',()=>{el.placeholder='';});
});

const socialContainer=document.getElementById('social-icons');
socialLinks.forEach((soc,i)=>{
  const a=document.createElement('a');
  a.href=soc.url; a.target='_blank';
  a.innerHTML=`<i class="${soc.icon}"></i>`;
  socialContainer.appendChild(a);
  setTimeout(()=>{a.classList.add('show')}, i*300);
});

// Send message with EmailJS (منسق بالإيموجي)
function sendMessage(e){
  e.preventDefault();
  const form = e.target;
  const btn = document.getElementById('submit-btn');
  const successSpan = btn.querySelector('.btn-success');
  const btnText = btn.querySelector('.btn-text');

  const templateParams = {
    from_name: form.name.value,
    from_email: form.email.value,
    message: `📞 رقم الهاتف:
     ${form.name.value}\n📧 البريد الإلكتروني:
     ${form.email.value}\n✏️ الموضوع:
     ${form.message.value}`
  };

  emailjs.send('service_sjnd8ja','template_83pcczb',templateParams)
  .then(()=>{
    btn.style.background = '#00ff77';
    btnText.style.opacity = '0';
    successSpan.classList.add('show');

    setTimeout(()=>{
      successSpan.classList.remove('show');
      btnText.style.opacity = '1';
      btn.style.background = 'linear-gradient(135deg,var(--purple),var(--cyan))';
      form.reset();
    },3000);
  }, ()=>{
    alert('حدث خطأ حاول مرة تانية.');
  });
} 
