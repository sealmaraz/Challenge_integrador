// Primero nos aseguramos que todos los elementos HTML esten disponibles para ser manipulados con "DOMContentLoaded"
document.addEventListener('DOMContentLoaded', function() {

    // Array de muestra para generar el contenido
    const dataBD = [
        { id: 1, name: 'BABY YODA BLUEBALL', category: 'STAR WARS', price: 1799.99, image: 'star-wars/baby-yoda-1.webp', quantity: 2 },
        { id: 2, name: 'PIDGEOTTO', category: 'POKEMON', price: 1799.99, image: 'pokemon/pidgeotto-1.webp', quantity: 1 },
        { id: 3, name: 'HARRY', category: 'HARRY POTTER', price: 1799.99, image: 'harry-potter/harry-1.webp', quantity: 3 }
    ];
    

    // Datos dinamicos utiles para el codigo
    let precioEnvio = 2500;
    let minimoEnvioGratis = 10000;


    // Creamos una constante para seleccionar el elemento del DOM que queremos manipular
    const cartList = document.querySelector('#cart_list');


    // Funcion para recorrer el ARRAY que contiene los productos en carrito y listarlos
    function listarCarrito() {

        // Inicializamos el Template Vacio
        let templateListar = '';

        // Recorremos el Array por todos sus elementos
        dataBD.forEach(elementoDelArray => {

            // En cada elemento asignamos los datos y lo "sumamos" al template
            templateListar += `
                <li class="cart__item">
                    <article class="cart__item-product">
                        <picture class="cart__item-productimg">
                            <img src="../images/${elementoDelArray.image}" alt="Producto Baby Yoda Blueball">
                        </picture>
                        <div class="cart__item-productdet">
                            <h2 class="cart__item-productdet-name">${elementoDelArray.name}</h2>
                            <h3 class="cart__item-productdet-categ">${elementoDelArray.category}</h3>
                            <p class="cart__item-productdet-price">Precio: $ ${elementoDelArray.price}</p>
                        </div>
                    </article>
                    <div class="cart__item-q">
                        <input data-id="${elementoDelArray.id}" class="cart__item-qnum" type="text" id="quant${elementoDelArray.id}" value="${elementoDelArray.quantity}">
                        <div class="cart__item-qplusminus">
                            <button data-id="${elementoDelArray.id}" id="plus" class="qplusminusbtn plus">+</button>
                            <button data-id="${elementoDelArray.id}" id="minus" class="qplusminusbtn minus">-</button>
                        </div>
                    </div>
                    <p class="cart__item-price" id="total${elementoDelArray.id}">$ ${(elementoDelArray.price * elementoDelArray.quantity).toFixed(2)}</p>
                    <div>
                        <button data-id="${elementoDelArray.id}" class="deletebtn OutItem"><iconify-icon class="cart__item-delete" icon="zondicons:close-outline"></iconify-icon></button>
                        <button data-id="${elementoDelArray.id}" class="deletebtn InItem"><iconify-icon class="cart__item-delete" icon="zondicons:close-outline"></iconify-icon></button>
                    </div>
                </li>
                `
        });

        // Finalmente asignamos nuestro template al contenedor "cart_list"  
        cartList.innerHTML = templateListar;
    }


    // Funcion para actualizar el valor total del producto dependiendo de las cantidades que figuran
    function actualizaTotalProducto(idProducto, cantidadInput) {
    const producto = dataBD.find(elementoDelArray => elementoDelArray.id === parseInt(idProducto));
    const totalElement = document.querySelector(`#total${idProducto}`);
        if (producto) {
            const totalPrice = producto.price * cantidadInput;
            totalElement.textContent = `$ ${totalPrice.toFixed(2)}`;
        }
    }


    function actualizaTotalCarrito() {
        
        // Capturamos los 4 elementos contenedores donde se muestra la informacion
        const headerCantidad = document.querySelector(`#header-cantidad`);  // Icono en el header del carrito
        const resumenCantidad = document.querySelector(`#cantidad`);
        const resumenSubtotal = document.querySelector(`#subtotal`);
        const resumenEnvio = document.querySelector(`#envio`);
        const resumenTotal = document.querySelector(`#total`);

        // Cantidad de Elementos
        const listadoInputsCantidad = document.querySelectorAll('.cart__item-qnum');        // todos los inputs de cantidad
        let sumadorCantidad = 0;
        listadoInputsCantidad.forEach(inputCantidad => {
            sumadorCantidad += parseInt(inputCantidad.value);
        });

        // Subtotal
        const listadoTotalesItems = document.querySelectorAll('.cart__item-price');     // todos los elementos que muestran el precio total del producto
        let sumadorSubtotal = 0;
        listadoTotalesItems.forEach(elementoSumado => {
            sumadorSubtotal += parseFloat(elementoSumado.textContent.replace(/[^0-9.]/g, ''));
                                // parseFloat convierte la cadena en un numero de coma flotante
                                // replace reemplaza todos los caracteres que no sean numeros ni el separador decimal por "nada", osea que borra cualquier otro caracter
        });

        // Total
        sumadorTotal = sumadorSubtotal + precioEnvio;                                                    // Calculamos el total sumando el subtotal + el envio
        if (sumadorTotal > minimoEnvioGratis + precioEnvio){                                             // si el total supera el envio gratis entonces
            resumenEnvio.innerHTML = `<span class="EnvioGratis">$ ${precioEnvio.toFixed(2)}</span>`;     // en envio mostramos esto
            mostrarTotal = `$ ${sumadorSubtotal.toFixed(2)}`;                                            // en total mostramos esto
        } else {                                                                                         // sino
            resumenEnvio.textContent = `$ ${precioEnvio.toFixed(2)}`;                                    // en envio mostramos esto
            mostrarTotal = `$ ${sumadorTotal.toFixed(2)}`;                                               // en total mostramos esto
        }

        // Asignamos los valores a cada contenedor correspondiente
        headerCantidad.textContent = sumadorCantidad;   // Icono en el header del carrito
        resumenCantidad.textContent = sumadorCantidad; 
        resumenSubtotal.textContent = `$ ${sumadorSubtotal.toFixed(2)}`;
        resumenTotal.textContent = mostrarTotal;
    }


    // Funcion que altera el Array de muestra y elimina valores (simulamos funcionamiento boton delete)
    function funcionamientoDeleteBTN() {

        const botonesDelete = document.querySelectorAll('.deletebtn');              // elementos clase sea "deletebtn"  (todos los botones tienen la misma clase)
        botonesDelete.forEach(elementoBoton => {
            elementoBoton.addEventListener('click', function() {
                const idProducto = this.dataset.id;                                 // valor proveniente del atributo "data-id" en el boton clickeado
                const indiceDelArray = dataBD.findIndex(elementoDelArray => elementoDelArray.id === idProducto);
                    dataBD.splice(indiceDelArray, 1);
                    listarCarrito();
                    actualizaTotalCarrito();
                    funcionamientoDeleteBTN();
            });
        });
    
    };



    // Esta es la funcion principal, la que inicia y hace que todo aparezca y se ejecute llamando a otras funciones en caso de ser necesario
    function inicializarModuloCarrito() {

        // Invocamos la funcion para listar los items del carrito
        listarCarrito();

        // Invocamos a la funcion para que calcule los valores del Total del Carrito
        actualizaTotalCarrito();

        // Invocamos la funcion para que trabajen los botones de "delete"
        funcionamientoDeleteBTN();
        
        
        // Capturamos todos los inputs de cantidad existentes para "escuchar" el evento "change" de cualquiera de ellos
        const inputsDeCantidad = document.querySelectorAll('.cart__item-qnum');   // inputs de cantidad con su clase en comun que es "cart__item-qnum"
        inputsDeCantidad.forEach(elementoInput => {
            elementoInput.addEventListener('change', function() {
                if (isNaN(this.value) || this.value < 0) {
                    this.value = 0;
                } 
                actualizaTotalProducto(this.dataset.id, this.value);
                actualizaTotalCarrito()
            });
        });


        // Aqui estaremos "escuchando" cualquier click que se haga dentro del contenedor cuyo DOM sea el de "cartList" que como mas arriba definimos es el contenedor "cart_list"
        cartList.addEventListener('click', function(event) {
            
            // Aqui almacenaremos cual fue el "target" de dicho click, que elemento fue "clickeado"
            const elementoClickeado = event.target;
            
            if (elementoClickeado.classList.contains('plus')) {                          // SI el TARGET clickado tiene la clase "plus" entonces...
                const idProducto = elementoClickeado.dataset.id;                         // almacenamos el ID del producto proveniente del atributo "data-id"
                const cantidadInput = document.querySelector(`#quant${idProducto}`);     // seleccionamos el input cuya nombre de clase corresponda al ID del boton clickeado
                cantidadInput.value = Number(cantidadInput.value) + 1;                   // sumamos 1 al valor de dicho input
                actualizaTotalProducto(idProducto, parseInt(cantidadInput.value));       // llamamos a la funcion para actualizar el total pasando como parametro al atributo "data-id" para identificar en cual de los inputs fue clickeado el boton, por ende cambio su valor y ademas pasamos el valor de dicho input
                actualizaTotalCarrito()
                        
            } else if (elementoClickeado.classList.contains('minus')) {                  // SI el TARGET clickado tiene la clase "minus" entonces...
                const idProducto = elementoClickeado.dataset.id;                         // almacenamos el ID del producto proveniente del atributo "data-id"
                const cantidadInput = document.querySelector(`#quant${idProducto}`);     // seleccionamos el input cuya nombre de clase corresponda al ID del boton clickeado
                if (cantidadInput.value > 0) {                                           // si el valor del input es mayor a CERO
                    cantidadInput.value = Number(cantidadInput.value) - 1;               // restamos 1 al valor de dicho input
                    actualizaTotalProducto(idProducto, parseInt(cantidadInput.value));   // llamamos a la funcion para actualizar el total pasando como parametro al atributo "data-id" para identificar en cual de los inputs fue clickeado el boton, por ende cambio su valor y ademas pasamos el valor de dicho input
                    actualizaTotalCarrito()
                }
            }
        });

    }





    // Invocamos la funcion para que todo se ejecute, es decir, "el modulo del carrito"
    inicializarModuloCarrito();



});








