const slider =document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot')
let position=0;

dots.forEach((dot,index)=>{
    dot.addEventListener('click',()=>{

        slider[position].classList.remove('active');
        dots[position].classList.remove('active');
        position=index;

        slider[position].classList.add('active');
        dots[position].classList.add('active');


    })
})

function showNextslide(){
    slider[position].classList.remove('active');
    position=(position+1)%slider.length;
    slider[position].classList.add('active');

}
setInterval(showNextslide,5000);



const hamburger=document.querySelector('.hamburger');
const menu = document.querySelector('.menu'
)
const menuItems=document.querySelectorAll('.menu > li');


hamburger.addEventListener('click',()=>{
    menu.classList.toggle('show');
})

menuItems.forEach(item=>{
    item.addEventListener('click',()=>{
        item.classList.toggle('show');
    })
});


const  botones=document.querySelectorAll('.button');
const listado=document.querySelector('.listado');
const carritoBtn=document.getElementById('ver-carrito');
const contadorCarrito=document.querySelector('contador-carrito');

//Save content carrito

let productos=new Array();

botones.forEach(boton =>{

    boton.addEventListener('click',()=>{

        let name= boton.dataset.name;
        let price=parseFloat(boton.dataset.price);

        let productoExistente= productos.find(p=> p.name===name);

        if(productoExistente){
            productoExistente.cantidad++;
        }else{
            productos.push({name,price, cantidad: 1})
        }

        let totalCantidad= productos.reduce((acc,p)=>acc+p.cantidad);
        contadorCarrito.textContent=totalCantidad;

    })


})

//Save Buttom

carritoBtn.addEventListener('click',(e)=>{
    e.preventDefault();

    listado.innerHTML="";
    let total=0;

    productos.forEach(producto =>{

        let item=document.createElement('div');
        item.textContent=`${producto.name}  .${producto.cantidad}`
        listado.appendChild(item);
        total+=producto.price*producto.cantidad;


    })

    let totalPrice= document.createElement('div');
    totalPrice.textContent=`Total $${total}`;
    listado.appendChild(totalPrice);




})

