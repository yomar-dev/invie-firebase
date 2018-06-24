const btnLogin = document.getElementById("btnLogin");

firebase.auth().onAuthStateChanged((user) => {
	console.log(user);
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
	console.log("Boton Ok");
})