document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("form");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // impede envio até a validação ser concluída

        const nome = document.getElementById("nome").value.trim();
        const email = document.getElementById("email").value.trim();
        const telefone = document.getElementById("telefone").value.trim();
        const genero = document.querySelector('input[name="genero"]:checked');
        const estado = document.getElementById("estado").value;
        const cep = document.getElementById("cep").value.trim();
        const rua = document.getElementById("rua").value.trim();
        const bairro = document.getElementById("bairro").value.trim();
        const cidade = document.getElementById("cidade").value.trim();
        const senha = document.getElementById("senha").value;
        const confSenha = document.getElementById("conf_senha").value;
        const escola = document.querySelector('input[name="escola"]:checked');

        // Verificações básicas
        if (!nome || !email || !telefone || !cep || !rua || !bairro || !cidade || !senha || !confSenha) {
            alert("Por favor, preencha todos os campos obrigatórios.");
            return;
        }

        if (!genero) {
            alert("Por favor, selecione seu gênero.");
            return;
        }

        if (!escola) {
            alert("Por favor, selecione o tipo de escola.");
            return;
        }

        // Telefone: 11 dígitos
        const telefoneRegex = /^\d{11}$/;
        if (!telefoneRegex.test(telefone)) {
            alert("O telefone deve conter exatamente 11 números.");
            return;
        }

        // Senhas iguais
        if (senha !== confSenha) {
            alert("As senhas não coincidem.");
            return;
        }

        // Se passou todas as validações
        alert("Formulário enviado com sucesso!");
        form.submit(); // agora envia o formulário
    });
});
