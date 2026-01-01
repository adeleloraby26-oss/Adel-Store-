const WHATSAPP='201014977860';

const accounts = [
  {id:'account01',name:'Account 1',description:'أكونت ممتاز بمستويات عالية وسكنات نادرة.',images:['account01-1.jpg']},
  {id:'account02',name:'Account 2',description:'أكونت قوي مع شخصيات مميزة وسكنات نادرة.',images:['account02-1.jpg']},
  {id:'account03',name:'Account 3',description:'أكونت متوسط المستوى مع سكنات جميلة.',images:['account03-1.jpg']}
];

const accountsGrid=document.getElementById('accounts-grid');

accounts.forEach(acc=>{
  const card=document.createElement('div');
  card.className='account-card';

  const img=document.createElement('img');
  img.src=acc.images[0];

  const shine=document.createElement('div');
  shine.className='shine';

  const content=document.createElement('div');
  content.className='content';

  const h3=document.createElement('h3');
  h3.textContent=acc.name;

  const p=document.createElement('p');
  p.textContent=acc.description;

  const btnGroup=document.createElement('div');
  btnGroup.className='btn-group';

  const btn1=document.createElement('button');
  btn1.className='btn-whatsapp';
  btn1.innerHTML='<i class="fas fa-image"></i> طلب صور';
  btn1.onclick=()=>window.open(`https://wa.me/${WHATSAPP}?text=صور ${acc.name}`,'_blank');

  const btn2=document.createElement('button');
  btn2.className='btn-whatsapp';
  btn2.innerHTML='<i class="fas fa-cart-plus"></i> شراء الآن';
  btn2.onclick=()=>window.open(`https://wa.me/${WHATSAPP}?text=شراء ${acc.name}`,'_blank');

  btnGroup.append(btn1,btn2);
  content.append(h3,p,btnGroup);
  card.append(img,shine,content);
  accountsGrid.appendChild(card);
});

function sendMessage(e){
  e.preventDefault();
  const f=e.target;
  window.open(`https://wa.me/${WHATSAPP}?text=${f.message.value}`,'_blank');
}