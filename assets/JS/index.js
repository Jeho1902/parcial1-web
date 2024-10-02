fetch('data/datos.json')
    .then(response => response.json())
    .then(data => {
        console.log(data);
        const tituloPagina = document.getElementById('titulo_pagina');
        tituloPagina.innerHTML = data.titulo_pagina;

        const datos = document.getElementById('datos');
        datos.innerHTML = `
            <div class="container">
           <h3 class="text-center text-uppercase">Contactanos</h3>
           <p class="text-center w-75 m-auto">¿Tienes alguna duda o necesitas ayuda? Estamos aquí para asistirte. Ya sea que estés buscando el equipo perfecto o necesites soporte técnico, no dudes en ponerte en contacto con nosotros.</p>
           <div class="row">
             <div class="p-5 mb-4 bg-body-tertiary rounded-3 shadow text-center">
               <div class="card border-0">
                  <div class="card-body text-center">
                    <h1 class="text-uppercase mb-5">${data.datos_tienda.nombre}</h4>
                    <h4 class="text-uppercase mb-5">${data.datos_tienda.direccion}</h4>
                    <p>${data.datos_tienda.telefono}</p>
                    <p>${data.datos_tienda.correo}</p>
                    <p>${data.datos_tienda.horario_atencion.lunes_a_viernes}</p>
                    <p>${data.datos_tienda.horario_atencion.sabados}</p>
                    <p>${data.datos_tienda.horario_atencion.domingos}</p>
                  </div>
                </div>
             </div>`;


        const productos = data.productos;
        console.log(productos);

        let productosHTML = '';
        for (i = 0; i < productos.length; i++) {
            console.log(productos[i].nombre);
            let reseñasHTML = '';
            productos[i].reseñas.forEach(reseña => {
                reseñasHTML += `
                    <td>${reseña.usuario}</td>
                    <td>${reseña.comentario}</td>
                    <td>${reseña.calificacion}</td>
                `;
            });
            productosHTML += `
                <td>${productos[i].nombre}</td>
                <td>${productos[i].categoria}</td>
                <td>${productos[i].descripcion}</td>
                <td>${productos[i].precio}</td>
                <td>${reseñasHTML}}</td>
              
            </tr>`;

        }

        const tabla_productos = document.getElementById('tabla_productos');
        tabla_productos.innerHTML = productosHTML;





    });

/*
//Contacto//
fetch("data/datos.json")
    .then(response => response.json())
    .then(data => {
        console.log(data)
        const tituloPagina = document.getElementById("titulo_pagina")
        tituloPagina.innerHTML = data.titulo_pagina;
        const datos = document.getElementById("datos_tienda")
        datos.innerHTML = `
            <div class="container">
           <h3 class="text-center text-uppercase">Contactanos</h3>
           <p class="text-center w-75 m-auto">¿Tienes alguna duda o necesitas ayuda? Estamos aquí para asistirte. Ya sea que estés buscando el equipo perfecto o necesites soporte técnico, no dudes en ponerte en contacto con nosotros.</p>
           <div class="row">
             <div class="p-5 mb-4 bg-body-tertiary rounded-3 shadow text-center">
               <div class="card border-0">
                  <div class="card-body text-center">
                    <h1 class="text-uppercase mb-5">${data.datos_tienda.nombre}</h4>
                    <h4 class="text-uppercase mb-5">${data.datos_tienda.direccion}</h4>
                    <p>${data.datos_tienda.telefono}</p>
                    <p>${data.datos_tienda.correo}</p>
                    <p>${data.datos_tienda.horario_atencion.lunes_a_viernes}</p>
                    <p>${data.datos_tienda.horario_atencion.sabados}</p>
                    <p>${data.datos_tienda.horario_atencion.domingos}</p>
                  </div>
                </div>
             </div>
            `;

        const productos = data.productos;
        console.log(productos)
        const contenedorProductos = document.getElementById("contenedor_Productos");
        let html = "";
        for (i = 0; i < productos.length; i++) {
            console.log(productos[i].nombre);
            html += `<div class="col">
            <div class="card">
            <img src="" class="card-img-top" height="230" width="185" alt="laptop">
            <div class="card-body">
                <h5 class="card-title">${productos[i].id}</h5>
                <p class="card-text">${productos[i].nombre}</p>
                <p class="card-text">${productos[i].categoria}</p>
                <p class="card-text">${productos[i].descripcion}</p>
            </div>
            <div class="card-footer">
                <small class="text-body-secondary">${productos[i].precio}</small>
            </div>
        </div>
    </div>`;
        };
        contenedorProductos.innerHTML = html;

    });




//FIN Contacto//
*/