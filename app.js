const observer=new IntersectionObserver((enteries)=>{
    enteries.forEach((entry)=>{
         if(entry.isIntersecting){
            entry.target.classList.add('show')
         }
         else
         {
            entry.target.classList.remove('show')
         }
    })
})
const hiddenelements=document.querySelectorAll(".headline_text")
hiddenelements.forEach((el)=>{
    observer.observe(el)
})
const observers=new IntersectionObserver((enteries)=>{
    enteries.forEach((entry)=>{
         if(entry.isIntersecting){
            entry.target.classList.add('shows')
         }
         else
         {
            entry.target.classList.remove('shows')
         }
    })
})
const castelements=document.querySelectorAll(".newsroom")
castelements.forEach((el)=>{
    observers.observe(el)
})
const observers2=new IntersectionObserver((enteries)=>{
    enteries.forEach((entry)=>{
         if(entry.isIntersecting){
            entry.target.classList.add('shows2')
         }
         else
         {
            entry.target.classList.remove('shows2')
         }
    })
})
const castelements2=document.querySelectorAll(".mission")
castelements2.forEach((el)=>{
    observers2.observe(el)
})
const observers3=new IntersectionObserver((enteries)=>{
    enteries.forEach((entry)=>{
         if(entry.isIntersecting){
            entry.target.classList.add('shows3')
         }
         else
         {
            entry.target.classList.remove('shows3')
         }
    })
})
const castelements3=document.querySelectorAll(".zoomin")
castelements3.forEach((el)=>{
    observers3.observe(el)
})
const observers4=new IntersectionObserver((enteries)=>{
    enteries.forEach((entry)=>{
         if(entry.isIntersecting){
            entry.target.classList.add('shows4')
         }
         else
         {
            entry.target.classList.remove('shows4')
         }
    })
})
const castelements4=document.querySelectorAll(".zoomin2")
castelements4.forEach((el)=>{
    observers4.observe(el)
})
const observers5=new IntersectionObserver((enteries)=>{
    enteries.forEach((entry)=>{
         if(entry.isIntersecting){
            entry.target.classList.add('shows5')
         }
         else
         {
            entry.target.classList.remove('shows5')
         }
    })
})
const castelements5=document.querySelectorAll(".zoomin4")
castelements5.forEach((el)=>{
    observers5.observe(el)
})
const observers6=new IntersectionObserver((enteries)=>{
    enteries.forEach((entry)=>{
         if(entry.isIntersecting){
            entry.target.classList.add('shows6')
         }
         else
         {
            entry.target.classList.remove('shows6')
         }
    })
})
const castelements6=document.querySelectorAll(".last")
castelements6.forEach((el)=>{
    observers6.observe(el)
})
const observers7=new IntersectionObserver((enteries)=>{
    enteries.forEach((entry)=>{
         if(entry.isIntersecting){
            entry.target.classList.add('shows7')
         }
         else
         {
            entry.target.classList.remove('shows7')
         }
    })
})
const castelements7=document.querySelectorAll(".last2")
castelements7.forEach((el)=>{
    observers7.observe(el)
})
const observers8=new IntersectionObserver((enteries)=>{
    enteries.forEach((entry)=>{
         if(entry.isIntersecting){
            entry.target.classList.add('shows8')
         }
         else
         {
            entry.target.classList.remove('shows8')
         }
    })
})
const castelements8=document.querySelectorAll(".last3")
castelements8.forEach((el)=>{
    observers8.observe(el)
})