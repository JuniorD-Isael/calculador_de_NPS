

// UUID => globally unique identifier
interface DadosDeEnvioEmail {
    para: string;
    id: string;
    assunto: string;
    texto: string;
}

function enviarEmail({para, id, assunto, texto}: DadosDeEnvioEmail) {
    console.log(para, id, assunto, texto);
}

class EnviarEmailParaUsuario {
    send() {
        enviarEmail({
            para: "junior@gmail.com",
            id: `9899`,
            assunto: "Olá!",
            texto: "Tudo bem?",})
    }
}