const propiedadesJSON = [
    {
      name: "Casa de campo",
      description: "Un lugar ideal para descansar de la ciudad",
      src:
        "https://www.construyehogar.com/wp-content/uploads/2020/02/Dise%C3%B1o-casa-en-ladera.jpg",
      rooms: 2,
      m: 170
    },
    {
      name: "Casa de playa",
      description: "Despierta tus días oyendo el oceano",
      src:
        "https://media.chvnoticias.cl/2018/12/casas-en-la-playa-en-yucatan-2712.jpg",
      rooms: 2,
      m: 130
    },
    {
      name: "Casa en el centro",
      description: "Ten cerca de ti todo lo que necesitas",
      src:
        "https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg",
      rooms: 1,
      m: 80
    },
    {
      name: "Casa rodante",
      description: "Conviertete en un nómada del mundo sin salir de tu casa",
      src:
        "https://cdn.bioguia.com/embed/3d0fb0142790e6b90664042cbafcb1581427139/furgoneta.jpg",
      rooms: 1,
      m: 6
    },
    {
      name: "Departamento",
      description: "Desde las alturas todo se ve mejor",
      src:
        "https://www.adondevivir.com/noticias/wp-content/uploads/2016/08/depto-1024x546.jpg",
      rooms: 3,
      m: 200
    },
    {
      name: "Mansión",
      description: "Vive una vida lujosa en la mansión de tus sueños ",
      src:
        "https://resizer.glanacion.com/resizer/fhK-tSVag_8UGJjPMgWrspslPoU=/768x0/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/CUXVMXQE4JD5XIXX4X3PDZAVMY.jpg",
      rooms: 5,
      m: 500
    }
  ];
  
  // Obtengo la referencia al Section 
  const contenedor = document.getElementById("Contenedor");
  let contenidoHTML = "";
// Recorro mi arreglo de propiedades Json
propiedadesJSON.forEach(propiedad => {

  contenidoHTML += `
        <div class="propiedad">
          <div class="img" style="background-image: url('${propiedad.src}')"></div>
          <section>
            <h5>${propiedad.name}</h5>
            <div class="d-flex justify-content-between">
              <p>Cuartos: ${propiedad.rooms}</p>
              <p>Metros: ${propiedad.m}</p>
            </div>
            <p class="my-3">${propiedad.description}</p>
            <button class="btn btn-info">Ver más</button>
          </section>
        </div>
        `;
});

// Asignar el contenido HTML generado al section
contenedor.innerHTML = contenidoHTML;


// BOTON DE BUSQUEDA POR FILTRO
  function filtrarPropiedades(){

     // guardo los valores de los filtros de búsqueda
    const cuartos = parseInt(document.getElementById("cantCuartos").value);
    const metrosDesde = parseInt(document.getElementById("metrosCuadradosDesde").value);
    const metrosHasta = parseInt(document.getElementById("metrosCuadradosHasta").value);
  
    console.log(cuartos);
    
 
    if(cuartos <= 0 || metrosDesde <= 0 || metrosHasta <= 0){
      swal("", "Los campos son obligtorios y para filtrar su busqueda deben ser mayora 0.", "error");
      return;
    }

    if(isNaN(cuartos) || isNaN(metrosDesde) || isNaN(metrosHasta)){
      swal("", "Los campos son obligtorios y par filtrar su busqueda no pueden ir vacíos.", "error");
      return;
    }


      // Filtrar las propiedades que cumplen con los requisitos
      const propiedadesFiltradas = propiedadesJSON.filter(propiedad => {
        return (
          propiedad.rooms === cuartos &&
          propiedad.m >= metrosDesde &&
          propiedad.m <= metrosHasta
        );
      });

      // console.log(propiedadesFiltradas);

      if(propiedadesFiltradas.length.toString() == 0){
        swal("", "No hay propiedades con las cualidades solicitadas", "error");
      }else{

        let contenidoHTMLFiltrado = "";
        propiedadesFiltradas.forEach(propiedad => {

          contenidoHTMLFiltrado += `
                <div class="propiedad">
                  <div class="img" style="background-image: url('${propiedad.src}')"></div>
                  <section>
                    <h5>${propiedad.name}</h5>
                    <div class="d-flex justify-content-between">
                      <p>Cuartos: ${propiedad.rooms}</p>
                      <p>Metros: ${propiedad.m}</p>
                    </div>
                    <p class="my-3">${propiedad.description}</p>
                    <button class="btn btn-info">Ver más</button>
                  </section>
                </div>
                `;
        });

        const contenedor = document.getElementById("Contenedor");
        contenedor.innerHTML = contenidoHTMLFiltrado;
          
        // Actualizar el contador de propiedades filtradas
        const contador = document.querySelector("#Propiedades span");
        contador.innerHTML = propiedadesFiltradas.length.toString();

      }

    // contenido de propiedades filtradas
      
  }

  function reset(){
    const cuartos = document.getElementById("cantCuartos");
    const metrosDesde = document.getElementById("metrosCuadradosDesde");
    const metrosHasta = document.getElementById("metrosCuadradosHasta");

    cuartos.value = '';
    metrosDesde.value = '';
    metrosHasta.value = '';

    location.reload();
  }