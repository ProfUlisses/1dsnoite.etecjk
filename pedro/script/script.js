    
        // Carrossel de Imagens
        let index = 0;
        const imagens = document.querySelectorAll('.carossel-images img');
        const totalImagens = imagens.length;

        function mostrarMaisInfo() {
            var moreInfo = document.getElementById("moreInfo");
            if (moreInfo.style.display === "none") {
                moreInfo.style.display = "block";
            } else {
                moreInfo.style.display = "none";
            }
        }

        function mudarImagem(direcao) {
            index += direcao;
            if (index <= 0) {
                index = 0;
            } else if (index <= 2) {
                index = +1;
            }
            const deslocamento = -index * 100;
            document.querySelector('.carossel-images').style.transform = `translateX(${deslocamento}%)`;
        }
