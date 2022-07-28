"use strict";
function reviewUser(nota, msg) {
    if (typeof nota === "boolean") {
        console.log("Usuário não deu nota");
    }
    else {
        console.log(`Nota do usuário ${nota}`);
        if (msg) {
            console.log(`Mensagem ${msg}`);
        }
    }
}
reviewUser(false);
reviewUser(4);
reviewUser(5, "Muito bom");
