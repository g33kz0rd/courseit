class User {
   constructor(nombre, apellido, edad) {
      this.nombre = nombre;
      this.apellido = apellido;
      this.edad = edad;
   }
}

function showUsers(users) {
   console.log(users);
}

function showSuccess(user) {
   console.log(user);
   getAllUsers();
}

function showError(error) {
   console.log(error);
}

function createUserFront() {
   var user = new User();

   user.nombre = $("#nombre").val();
   user.apellido = $("#apellido").val();
   user.edad = $("#edad").val();

   console.log(user);

   createUser(user);
}

function getAllUsers() {
   $.ajax({
      type: "GET",
      url: `http://courseit.com.ar:3005/user/`,
      success: function (response) {
         showUsers(response)
      },
      error: function () {
         showError("No se encontraron usuarios, o no han podido ser cargados");
      }
   });
}


function getUser(id) {
   $.ajax({
      type: "GET",
      url: `http://courseit.com.ar:3005/user/${id}`,
      success: function (response) {
         showUser(response)
      },
      error: function () {
         showError("El usuario no existe, o no pudo ser cargado");
      }
   });
}

function createUser(user) {
   $.ajax({
      type: "POST",
      url: `http://courseit.com.ar:3005/user/`,
      data: user,
      success: function (response) {
         console.log(response);
         showSuccess("Usuario creado correctamente ");
      },
      error: function () {
         showError("No se pudo crear usuario");
      }
   });
}

function modifyUser(user) {
   $.ajax({
      type: "POST",
      url: `http://courseit.com.ar:3005/user/${user.id}`,
      data: user,
      success: function () {
         showSuccess("Usuario modificado correctamente");
      },
      error: function () {
         showError("No se pudo modificar usuario");
      }
   });
}