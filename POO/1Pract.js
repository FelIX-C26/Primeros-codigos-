let inventario = [];
        let totalVentasDia = 0;

        function registrarMedicamento() {
            let nombre = prompt("Nombre del medicamento:").toLowerCase();
            let cantidad = parseInt(prompt("Cantidad disponible:"));
            let precio = parseFloat(prompt("Precio unitario:"));

            if (!isNaN(cantidad) && !isNaN(precio)) {
                inventario.push({ nombre, cantidad, precio });
                console.log(`Registrado: ${nombre}`);
            } else {
                alert("Datos inválidos. Intenta de nuevo.");
            }
        }

        function consultarInventario() {
            console.log("\n--- INVENTARIO ACTUAL ---");
            if (inventario.length === 0) {
                console.log("Vacío.");
            } else {
                console.table(inventario);
            }
        }

        function venderMedicamento() {
            let buscar = prompt("¿Qué medicamento desea vender?").toLowerCase();
            let producto = inventario.find(p => p.nombre === buscar);

            if (producto) {
                let cantidadVenta = parseInt(prompt(`Stock: ${producto.cantidad}. ¿Cuánto vender?`));
                
                if (cantidadVenta <= producto.cantidad && cantidadVenta > 0) {
                    producto.cantidad -= cantidadVenta;
                    totalVentasDia += (cantidadVenta * producto.precio);
                    console.log(`Venta exitosa de ${buscar}.`);
                } else {
                    alert("Stock insuficiente.");
                }
            } else {
                alert("El medicamento no existe.");
            }
        }

        function mostrarTotal() {
            console.log(`\n TOTAL RECAUDADO: $${totalVentasDia.toFixed(2)}`);
        }

        // Bucle principal
        let continuar = true;
        while (continuar) {
            let menu = prompt(
                "SISTEMA FARMACIA\n" +
                "1. Registrar\n" +
                "2. Consultar\n" +
                "3. Vender\n" +
                "4. Ver Total Ventas\n" +
                "5. Salir\n\n" +
                "Escribe el número de la opción:"
            );

            switch (menu) {
                case '1': registrarMedicamento(); break;
                case '2': consultarInventario(); break;
                case '3': venderMedicamento(); break;
                case '4': mostrarTotal(); break;
                case '5': 
                    alert("Cerrando sistema...");
                    continuar = false; 
                    break;
                default: alert("Opción no válida");
            }
        }