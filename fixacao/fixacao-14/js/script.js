        //1ª Etapa - Criar os produtos = objetos
        const itens = [
            {
                id: 0,
                nome: "Mascara 1",
                img: "./img/m1.jpg",
                valor: 9.99,
                quantidade: 0                
            },
            {
                id: 1,
                nome: "Mascara 2",
                img: "./img/m2.jpg",
                valor: 14.99,
                quantidade: 0
            },
            {
                id: 2,
                nome: "Mascara 3",
                img: "./img/m3.jpg",
                valor: 19.99,
                quantidade: 0
            }
        ];

        // 2ª Etapa - Carregando a loja
        function carregarLoja() {
            let loja = document.querySelector("#produtos")
            
            itens.forEach((item) => {
                
                loja.innerHTML += `

                <div class="itemProduto">
                    <img src="${item.img}">
                    <p>${item.nome}</p>
                    <a class="adiciona" key="${item.id}" href="#">Adicionar ao carrinho</a>        
                </div>
                `;
            })
        }
        
        carregarLoja();

        // 3 ETAPA Atualizar quantidade
        let adicionados = document.querySelectorAll(".adiciona");

        for (i = 0 ; i < adicionados.length; i++) {
            adicionados[i].addEventListener('click', function(){
                let key =  this.getAttribute('key');
                itens[key].quantidade++;
                carregarCarrinho();
            });
        }


         // 4 ETAPA Carregar Carrinho 
         carregarCarrinho = () => {
            let itensDoCarrinho = document.querySelector("#carrinho");
            let valorTotal = 0;
            itensDoCarrinho.innerHTML = "";
 
            itens.forEach((item) => {
                
                 if(item.quantidade > 0) {
                     valorTotal += item.quantidade * item.valor;
                     let subtotal = item.valor * item.quantidade;
                     itensDoCarrinho.innerHTML += `
                     <div>
                         <p>${item.nome} |Valor unitário R$ ${item.valor} | Quantidade: ${item.quantidade} | Sub-total R$ ${subtotal.toFixed(2)}</P>
                         <hr>
                     </div>
                     `;
                 }
            })
            itensDoCarrinho.innerHTML += `
             <div>
                 <p>Total da compra R$ ${valorTotal.toFixed(2)}</p>
             </div>
             `;
         }
