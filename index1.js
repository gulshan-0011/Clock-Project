

setInterval(() =>{
d = new Date();
htime = d.getHours();
mtime = d.getMinutes();
stime = d.getSeconds();
hrotation = 30*htime + mtime/2 ;
mrotation = 6*mtime;
srotation = 6*stime;
hour.style.transform = `rotate(${hrotation}deg)`;
minute.style.transform = `rotate(${mrotation}deg)`;
second.style.transform = `rotate(${srotation}deg)`;
});

 
  
      for(let i = 1; i < 13; i++){
        let time = document.getElementById('time')
       let div = document.createElement('div');
          div.setAttribute('class', 'number');
       let a = document.createElement('a');
           a.textContent = i;
           let y = i*30 ;
        
         div.style.transform = `rotate(${y}deg)`;
         a.setAttribute('style',`position: absolute; transform : rotate(-${y}deg)`);
             
            div.appendChild(a);
             time.append(div);
             
            
      };
      




document.addEventListener('scroll', () => {
    let navbar = document.getElementById('nav');
    let a = document.getElementsByClassName('a') 
    const stickyOffset = 10;
  
    if (scrollY >= stickyOffset) {
      navbar.classList.add('sticky');
      a[0].classList.add('font-color');
      a[1].classList.add('font-color');
      a[2].classList.add('font-color');
      a[3].classList.add('font-color');
    } else {
      navbar.classList.remove('sticky');
      a[0].classList.remove('font-color');
      a[1].classList.remove('font-color');
      a[2].classList.remove('font-color');
      a[3].classList.remove('font-color');
    }
  });
   
  
  
  
  