function ventasEntradas ()
  {
   let loginExitoso = false;

    let usuario = ("sergio") ;
    let password = ("123");
    while(loginExitoso!==true)
    {
      let username = prompt("Ingese su usuario");
      let pwd = prompt("ingese su clave de acceso");
      let resultado = username === usuario && pwd === password
      if(resultado)
      {
        alert("Acceso Exitoso");
        loginExitoso=true;
        
      }
      else 
      { 
        alert("ERROR - Ingrese nuevamente los datos")
       }
    }


    function compras ()
    {
       
   let opcion = menuDeCompra();
    let unidadesDeCompra = 0;
    if(opcion!=6)
    {
      venderProducto(opcion);
    }
    else
    {
       alert("Venta Finalizada");
       ventasEntradas()

    }
   
    function menuDeCompra()
    {
       return prompt(`Seleccione Ubicacion: 
                     1. Platea Preferencial ($ 5000)
                     2. Platea Baja ($ 1500)
                     3. Platea Alta ($ 2500)
                     4. Campo ($ 3500)
                     5. Campo Preferencial ($ 4500)
                     6. FIN`);
    }

    function venderProducto(opcion)
    {
       switch (opcion) 
       {
          
         case "1":
         {
               unidades(5000)
               break;
         }
         case "2":
         {
               unidades(1500)
               break;
         }

         case "3":
         {
               unidades(2500)
               break;
         }

         case "4":
         {
               unidades(3500)
               break;
         }

         case "5":
         {
               unidades(4500)
               break;
         }

         default:
         {
            alert("opcion invalida")
            compras();
         }
             
       }   
    }
       
    function unidades(precio)
    {
            while(unidadesDeCompra==0)
            {
               let cantidad = Number(prompt("Cantidad de unidades de compra"));
               
               if(cantidad ==0)
               {
                  alert("La cantidad debe ser mayor a cero")
               }
               else{
                  unidadesDeCompra+=cantidad;
               }
            }
            
               let cambio = unidadesDeCompra*precio;
               alert("el importe de su compra es AR$ " + cambio);
               return compras();      
    }
    }

    compras()
     }
     ventasEntradas()