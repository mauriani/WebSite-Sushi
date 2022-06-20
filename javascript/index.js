const cadastroConfirmar = document.querySelector("#submit");
let purecookieTitle = "Cookies.",
  purecookieDesc = "Esse site usa cookie, você aceita usar os cookies?",
  purecookieLink =
    '<a href="https://www.cssscript.com/privacy-policy/" target="_blank">Para que serve?</a>',
  purecookieButton = "Concordo",
  purecookieButtonCancel = "Discordo";

let accCookies = false;
const { app } = require("./firebaseConfig");

cadastroConfirmar?.addEventListener("click", function (e) {
  e.preventDefault();

  let accCookies = Cookies.get("aceitaCookie");

  let nome = document.getElementById("nome");
  let email = document.getElementById("email");
  let cpf = document.getElementById("cpf");
  let endereco = document.getElementById("endereco");
  let phone = document.getElementById("phone");
  let cep = document.getElementById("cep");
  let password = document.getElementById("password");

  if (nome.value == "") {
    alert("Para continuar informe o seu nome");
    nome.focus();
    return;
  }
  if (email.value == "") {
    alert("Para continuar informe o seu E-mail");
    email.focus();
    return;
  } else {
    var re = /\S+@\S+\.\S+/;
    var isValidEmail = re.test(email.value);
    if (isValidEmail == false) {
      alert("E-mail inválido");
      return;
    }
  }

  if (cpf.value == "") {
    alert("Para continuar informe o seu CPF");
    cpf.focus();
    return;
  } else {
    var isValidCpf = validarCpf(cpf.value);

    if (isValidCpf == false) {
      alert("O cpf é inválido, informe um cpf válido");
      return;
    }
  }

  if (endereco.value == "") {
    alert("Para continuar informe o seu endereço");
    endereco.focus();
    return;
  }

  if (phone.value == "") {
    alert("Para continuar informe o seu telefone");
    phone.focus();
    return;
  }

  if (cep.value == "") {
    alert("Para continuar informe o seu cep");
    cep.focus();
    return;
  }

  if (password.value == "") {
    alert("Para continuar informe o campo de senha");
    password.focus();
    return;
  }

  let pessoa = {
    nome: nome.value,
    email: email.value,
    cpf: cpf.value,
    phone: phone.value,
    endereco: endereco.value,
    bairro: bairro.value,
    cidade: cidade.value,
    uf: uf.value,
    cep: cep.value,
    password: password.value,
  };

  if (accCookies) {
    if (
      nome.value != "" &&
      email.value != "" &&
      cpf.value != "" &&
      phone.value != "" &&
      endereco.value != "" &&
      cep.value != "" &&
      password.value != ""
    ) {
      let pessoa = {
        nome: nome.value,
        email: email.value,
        cpf: cpf.value,
        phone: phone.value,
        endereco: endereco.value,
        bairro: bairro.value,
        cidade: cidade.value,
        uf: uf.value,
        cep: cep.value,
        password: password.value,
      };

      Cookies.set(`${cpf.value}`, pessoa, { expires: 7 });
    }
  }
});

/* VALIDAR CPF */
function validarCpf(cpf) {
  cpf = cpf.replace(/\D/g, "");
  if (cpf.toString().length != 11 || /^(\d)\1{10}$/.test(cpf)) return false;
  var result = true;
  [9, 10].forEach(function (j) {
    var soma = 0,
      r;
    cpf
      .split(/(?=)/)
      .splice(0, j)
      .forEach(function (e, i) {
        soma += parseInt(e) * (j + 2 - (i + 1));
      });
    r = soma % 11;
    r = r < 2 ? 0 : 11 - r;
    if (r != cpf.substring(j, j + 1)) result = false;
  });
  return result;
}

/*MASCARA DO CPF*/

function mascara(i) {
  var v = i.value;

  if (isNaN(v[v.length - 1])) {
    // impede entrar outro caractere que não seja número
    i.value = v.substring(0, v.length - 1);
    return;
  }

  i.setAttribute("maxlength", "14");
  if (v.length == 3 || v.length == 7) i.value += ".";
  if (v.length == 11) i.value += "-";
}

/* CAMPOS DE ENDEREÇO */

function limpa_formulário_cep() {
  //Limpa valores do formulário de cep.
  document.getElementById("endereco").value = "";
  document.getElementById("bairro").value = "";
  document.getElementById("cidade").value = "";
  document.getElementById("uf").value = "";
}

/*ADICIONA VALUE AOS MEUS CAMPOS*/
function meu_callback(conteudo) {
  if (!("erro" in conteudo)) {
    //Atualiza os campos com os valores.
    document.getElementById("endereco").value = conteudo.logradouro;
    document.getElementById("bairro").value = conteudo.bairro;
    document.getElementById("cidade").value = conteudo.localidade;
    document.getElementById("uf").value = conteudo.uf;
  } //end if.
  else {
    //CEP não Encontrado.
    limpa_formulário_cep();
    alert("CEP não encontrado.");
  }
}

/* PESQUISA CEP  UTILIZANDO A API DO VIACEP */
function pesquisacep(valor) {
  //Nova variável "cep" somente com dígitos.

  var cep = valor.replace(/\D/g, "");

  //Verifica se campo cep possui valor informado.
  if (cep != "") {
    //Expressão regular para validar o CEP.
    var validacep = /^[0-9]{8}$/;

    //Valida o formato do CEP.
    if (validacep.test(cep)) {
      //Preenche os campos com "..." enquanto consulta webservice.
      document.getElementById("endereco").value = "...";
      document.getElementById("bairro").value = "...";
      document.getElementById("cidade").value = "...";
      document.getElementById("uf").value = "...";

      //Cria um elemento javascript.
      var script = document.createElement("script");

      //Sincroniza com o callback.
      script.src =
        "https://viacep.com.br/ws/" + cep + "/json/?callback=meu_callback";

      //Insere script no documento e carrega o conteúdo.
      document.body.appendChild(script);
    } //end if.
    else {
      //cep é inválido.
      limpa_formulário_cep();
      alert("Formato de CEP inválido.");
    }
  } else {
    //cep sem valor, limpa formulário.
    limpa_formulário_cep();
  }
}

function pureFadeIn(e, o) {
  var i = document.getElementById(e);
  (i.style.opacity = 0),
    (i.style.display = o || "block"),
    (function e() {
      var o = parseFloat(i.style.opacity);
      (o += 0.02) > 1 || ((i.style.opacity = o), requestAnimationFrame(e));
    })();
}

function pureFadeIn(e, o) {
  var i = document.getElementById(e);
  (i.style.opacity = 0),
    (i.style.display = o || "block"),
    (function e() {
      var o = parseFloat(i.style.opacity);
      (o += 0.02) > 1 || ((i.style.opacity = o), requestAnimationFrame(e));
    })();
}

function pureFadeOut(e) {
  var o = document.getElementById(e);
  (o.style.opacity = 1),
    (function e() {
      (o.style.opacity -= 0.02) < 0
        ? (o.style.display = "none")
        : requestAnimationFrame(e);
    })();
}

function cookieConsent() {
  (document.body.innerHTML +=
    '<div class="cookieConsentContainer" id="cookieConsentContainer"><div class="cookieTitle"><a>' +
    purecookieTitle +
    '</a></div><div class="cookieDesc"><p>' +
    purecookieDesc +
    " " +
    purecookieLink +
    '</p></div><div class="cookieButton"><a onClick="purecookieDismiss();">' +
    purecookieButton +
    '</p></div><div class="cookieButtonCancel"><a onClick="purecookieCancel();">' +
    purecookieButtonCancel +
    "</a></div></div>"),
    pureFadeIn("cookieConsentContainer");
}

function purecookieDismiss() {
  Cookies.set("aceitaCookie", "true", { sameSite: "strict" });

  pureFadeOut("cookieConsentContainer");
}

function purecookieCancel() {
  pureFadeOut("cookieConsentContainer");
}
