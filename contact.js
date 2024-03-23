const contactform=document.getElementById("contactform")
const pername = document.getElementById("name")
const pernum = document.getElementById("phonenumber")
const perphoto = document.getElementById("contactimage")
const contactlist =document.getElementById("contactlist")


contactform.addEventListener("submit",function(save){
    save.preventDefault()
    
    
   
    
    const contact = document.createElement("li")
   contact.classList.add("contact")

   const contactpic = perphoto.value
    const contactimage = document.createElement("img")
    contactimage.src = contactpic
    contact.appendChild(contactimage)

    const div = document.createElement("div")
    contact.appendChild(div)

    const contactname = pername.value
    const nameh3 = document.createElement("h3")
    nameh3.innerHTML=contactname
    div.appendChild(nameh3)

    const contactnum = pernum.value
    const numspan = document.createElement("span")
    numspan.innerHTML=contactnum
    div.appendChild(numspan)

    

   console.log(contact)
   contactlist.appendChild(contact)
})







