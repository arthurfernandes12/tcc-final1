document.addEventListener('DOMContentLoaded', function () {
    var typed = new Typed('#typed-precisa', {
        strings: ["Você quer <br>"],
        typeSpeed: 50,
        backSpeed: 0,
        backDelay: 0,
        startDelay: 500,
        showCursor: false,
        onComplete: function () {
            new Typed('#typed-text', {
                strings: [
                    "compensar suas emissões?",
                    "calcular sua pegada de carbono?",
                    "ajudar o planeta com responsabilidade?",
                    "Apoiar projetos ambientais certificados?",
                    "Reduzir o impacto da sua empresa?",
                    "Fazer parte da transição ecológica?",
                    "Está no lugar certo!",
                    "Faça o calculo da sua pegada de carbono e compense suas emissões com a gente!",
                    "Entre em contato conosco!",
                ],
                typeSpeed: 50,
                backSpeed: 25,
                backDelay: 2000,
                startDelay: 0,
                loop: true,
                preStringTyped: function (arrayPos) {
                    if (arrayPos === 0) {
                        document.getElementById('typed-precisa').style.display = 'inline';
                    } else if (arrayPos === 4) {
                        document.getElementById('typed-precisa').style.display = 'none';
                    }
                },
                onComplete: function () {
                    document.getElementById('typed-precisa').style.display = 'none';
                }
            });
        }
    });
});