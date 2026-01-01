
const WHATSAPP='201014977860';
const accounts = [
  {id:'account01',name:'Account 1',description:'أكونت ممتاز بمستويات عالية وسكنات نادرة.',images:['account01-1.jpg']},
  {id:'account02',name:'Account 2',description:'أكونت قوي مع شخصيات مميزة وسكنات نادرة.',images:['account02-1.jpg']},
  {id:'account03',name:'Account 3',description:'أكونت متوسط المستوى مع سكنات جميلة.',images:['account03-1.jpg']}
];

const accountsGrid=document.getElementById('accounts-grid');

accounts.forEach((acc)=>{
  const card=document.createElement('div');
  card.className='account-card';

  const img=document.createElement('img');
  img.src=acc.images[0];
  img.alt=acc.name;

  const shine=document.createElement('div');
  shine.className='shine';

  const content=document.createElement('div');
  content.className='content';
  const h3=document.createElement('h3'); h3.textContent=acc.name;
  const p=document.createElement('p'); p.textContent=acc.description;

  const btnGroup=document.createElement('div');
  btnGroup.className='btn-group';

  const btnRequest=document.createElement('button');
  btnRequest.className='btn-whatsapp';
  btnRequest.innerHTML='<i class="fas fa-image"></i> طلب صور';
  btnRequest.onclick=()=>window.open(
    `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(`مرحبا، أريد صور إضافية لـ ${acc.name}`)}`,
    '_blank'
  );

  const btnBuy=document.createElement('button');
  btnBuy.className='btn-whatsapp';
  btnBuy.innerHTML='<i class="fas fa-cart-plus"></i> شراء الآن';
  btnBuy.onclick=()=>window.open(
    `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(`مرحبا، أريد شراء ${acc.name}`)}`,
    '_blank'
  );

  btnGroup.appendChild(btnRequest);
  btnGroup.appendChild(btnBuy);

  content.appendChild(h3);
  content.appendChild(p);
  content.appendChild(btnGroup);

  card.appendChild(img);
  card.appendChild(shine);
  card.appendChild(content);
  accountsGrid.appendChild(card);
});

function sendMessage(e){
  e.preventDefault();
  const form=e.target;
  const name=form.name.value;
  const email=form.email.value;
  const message=form.message.value;
  window.open(
    `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(`مرحبا، عندي استفسار من ${name} (${email}): ${message}`)}`,
    '_blank'
  );
}
