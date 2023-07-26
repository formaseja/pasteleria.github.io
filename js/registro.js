<script src="ruta/del/archivo/registro.js"></script>

<script>
  // Obtenemos el formulario y el botón
  const forma = document.getElementById("registroForm");
  const registrarBtn = document.getElementById("registrarBtn");

  // Asignamos el evento de envío del formulario
  forma.addEventListener("submit", guarda);

  // Definimos la función guarda() que se encargará de guardar los datos en Firestore
  async function guarda(evt) {
    try {
      evt.preventDefault();
      const formData = new FormData(forma);
      const correoElectronico = formData.get("correoElectronico").trim();
      const contrasena = formData.get("contrasena").trim();
      // Agrega aquí los demás campos del formulario

      /**
       * @type {
       *    import("./tipos.js").
       *            Alumno}
       */
      const modelo = {
        correoElectronico,
        contrasena,
        // Agrega aquí los demás campos del modelo
      };

      await daoAlumno.add(modelo);
      muestraAlumnos();
    } catch (e) {
      muestraError(e);
    }
  }
</script>
