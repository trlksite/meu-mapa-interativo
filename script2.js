$(document).ready(function () {
    const locais = {
        "SP": [
            { nome: "Costelandia", cidade: "Osasco", cep: "06000-000" },
            { nome: "Drogaria Total", cidade: "Bofete", cep: "18590-000" },
            { nome: "Drogaria Total Alpes", cidade: "Bofete", cep: "18590-001" },
            { nome: "Padaria Vitória Praça", cidade: "Bofete", cep: "18590-002" },
            { nome: "Padaria Vitória I", cidade: "Bofete", cep: "18590-003" },
            { nome: "Mercado do Fio", cidade: "Bofete", cep: "18590-004" },
            { nome: "Mercado do Fio Alpes", cidade: "Bofete", cep: "18590-005" },
            { nome: "Restaurante BK", cidade: "Bofete", cep: "18590-006" },
            { nome: "Auto Posto Peão", cidade: "Bofete", cep: "18590-007" },
            { nome: "Auto Posto Abasteceaki", cidade: "Bofete", cep: "18590-008" },
            { nome: "Adega Golaço", cidade: "Bofete", cep: "18590-009" },
            { nome: "Drogaria Total", cidade: "Porangaba", cep: "18260-000" },
            { nome: "Academia B-FIT", cidade: "Porangaba", cep: "18260-001" },
            { nome: "Auto Posto Débora", cidade: "Porangaba", cep: "18260-002" },
            { nome: "Restaurante Orestes", cidade: "Porangaba", cep: "18260-003" }
        ]
    };

    $(".map").mapael({
        map: {
            name: "brazil",
            defaultArea: {
                attrs: {
                    fill: "#ccc",
                    stroke: "#fff"
                },
                attrsHover: {
                    fill: "#3498db"
                },
                eventHandlers: {
                    click: function (e, id, mapElem, textElem) {
                        let lista = locais[id] ? locais[id].map(l => `<li>${l.nome} - ${l.cidade}</li>`).join("") : "Nenhum local disponível";
                        $("#info").html(`<h3>Locais em ${id}</h3><ul>${lista}</ul>`);
                    }
                }
            }
        }
    });
});

function buscarPontoVenda() {
    let cepDigitado = document.getElementById("cep").value;
    let resultado = "Nenhum ponto de venda encontrado.";

    for (let estado in locais) {
        let ponto = locais[estado].find(pv => pv.cep === cepDigitado);
        if (ponto) {
            resultado = `<h3>Ponto de venda mais próximo:</h3><p>${ponto.nome} - ${ponto.cidade}</p>`;
            break;
        }
    }

    document.getElementById("resultado").innerHTML = resultado;
}
