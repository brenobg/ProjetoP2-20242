function getFormValues() {
	var nome = document.getElementById("nome").value;
	var email = document.getElementById("email").value;
	var msg = document.getElementById("msg").value;
	return {
		nome: nome,
		email: email,
		mensagem: msg
	}
}

function sendMessage() {
	var formInput = getFormValues();
	inserirMensagem(formInput);
}

function getCredentials(){
	var email = document.getElementById("email").value;
	var pass = document.getElementById("password").value;
	return {
	  email: email,
	  senha: pass
	}
}

function verifyAuth() {
	var creds = getCredentials();
	var auth = validarUsuario(creds);
	auth ? window.location.href = "mensagens.html" : alert("E-mail e Senha inválidos");
}

function getMensagens() {
	const mensagens = obterMensagens();
	const divMsgs = document.getElementById("mensagens");
	const tabela = document.createElement("table");
	const thead = document.createElement("thead");
	const tbody = document.createElement("tbody");
	const cabecalho = ["Nome", "Email", "Mensagem"];
	const trHead = document.createElement("tr");
	cabecalho.forEach(titulo => {
	const th = document.createElement("th");
	th.textContent = titulo;
	trHead.appendChild(th);
	})
	thead.appendChild(trHead);
	mensagens.forEach(mensagem => {
		const tr = document.createElement("tr");

		const tdNome = document.createElement("td");
		tdNome.textContent = mensagem.nome;

		const tdEmail = document.createElement("td");
		tdEmail.textContent = mensagem.email;

		const tdMensagem = document.createElement("td");
		tdMensagem.textContent = mensagem.mensagem;

		tr.appendChild(tdNome);
		tr.appendChild(tdEmail);
		tr.appendChild(tdMensagem);

		tbody.appendChild(tr);
	});
	tabela.appendChild(thead);
	tabela.appendChild(tbody);
	divMsgs.appendChild(tabela);
}
