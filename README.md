### Invie integrado con firebase


**Instalar firebase tools:** `npm install -g firebase-tools` <br>
**Autenticarse a través de la terminal:** `firebase login` <br>
**Iniciar firebase:** `firebase init`, este comando debe ejecutarse dentro de la carpeta de nuestro proyecto y seleccionar nuestras opciones.<br>
**Agregar el proyecto y realizar la conexión:** `firebase use --add`, seleccionar el proyecto que queremos agregar y luego le damos un alias.
**Inicializar servidor con firebase:** `firebase serve` <br>


### Login con Google:

```javascript
const btnLogin = document.getElementById("btnLogin");
const btnLogout = document.getElementById("btnLogout");

firebase.auth().onAuthStateChanged((user) => {
	if(user){
        btnLogin.style.display = "none"
        btnLogout.style.display = "block"
    }else{        
        btnLogin.style.display = "block"
        btnLogout.style.display = "none"
    }
})

btnLogin.addEventListener('click', (e) => {
	e.preventDefault();
	let provider = new firebase.auth.GoogleAuthProvider();
	provider.addScope('https://www.googleapis.com/auth/contacts.readonly')
	firebase.auth().signInWithPopup(provider)
		.then((datosUsuario) => {
			console.log(datosUsuario);
		})
		.catch((error) => {
			console.log(`Error: ${error.message}`);
		})
})

btnLogout.addEventListener('click', (e) => {
    e.preventDefault()  
    firebase.auth().signOut()
})
```


### Enlaces de interes:

[Web server form chrome](https://chrome.google.com/webstore/detail/web-server-for-chrome/ofhbbkphhbklhfoeikjpcbhemlocgigb) <br>