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
	let provider = new firebase.auth.FacebookAuthProvider();
	provider.addScope('public_profile');
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