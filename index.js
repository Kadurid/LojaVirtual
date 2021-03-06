/*Dependências para a etapa avaliativa 2 */
var express = require('express');
var bodyParser = require('body-parser');
var fs = require('fs');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

app.get('/api', (req, res) => {
	res.send('Etapa Avaliativa 2');
});

//https://lojavirtual.kadurid.repl.co/produtos/
app.get("/categorias",function(req,res){
    res.json([
        {
            "id": "1",
            "label": "informatica",
            "descricao":"Informática"
        },
        {
            "id": "2",
            "label": "livros",
            "descricao": "Livros"
        },
        {
            "id": "3",
            "label": "decoracao",
            "descricao": "Decoração"
        },
        {
            "id": "4",
            "label": "eletrodomesticos",
            "descricao": "Eletrodomésticos"
        },
        {
            "id": "5",
            "label": "tv-audio",
            "descricao": "TV e áudio"
        },
        {
            "id": "6",
            "label": "eletroportateis",
            "descricao": "Eletroportáteis"
        },
        {
            "id": "7",
            "label": "brinquedos",
            "descricao": "Brinquedos"
        }
    ]);
});

//https://lojavirtual.kadurid.repl.co/produtos/
app.get("/produtos",function(req,res){
    res.json([
        {
            "id": "1",
            "categoria":"1",
            "descricao":"Notebook Gamer Lenovo ideapad L340 9ª Intel Core i5 8GB (Geforce GTX1050 com 3GB) 1TB FHD IPS 15,6'' W10 Preto",
            "valor":"4.699,99",
            "qtdEstoque":"50",
            "img":"https://images-americanas.b2w.io/produtos/01/00/img/2430049/7/2430049779_1GG.jpg"
        },
        {
            "id": "2",
            "categoria":"1",
            "descricao":"Notebook Samsung Book E20 Intel Celeron 4GB 500GB W10 15,6'' Prata",
            "valor":" 2.549,99",
            "qtdEstoque":"20",
            "img":"https://images-americanas.b2w.io/produtos/01/00/img/1772549/2/1772549247_1GG.jpg"
        },
        {
            "id": "3",
            "categoria":"1",
            "descricao":"Notebook Samsung Flash F30 Intel Celeron 4GB 64GB SSD Full HD Tela LED 13.3'' Windows 10 - Coral",
            "valor":" 3.030,50",
            "qtdEstoque":"10",
            "img":"https://images-americanas.b2w.io/produtos/01/00/offers/01/00/item/134187/9/134187974_1GG.jpg"
        },
        {
            "id": "4",
            "categoria":"2",
            "descricao":"Livro - Box Percy Jackson e os olimpianos - capa nova: Série Percy Jackson e os olimpianos",
            "autor":"Rick Riordan",
            "valor":" 99,84",
            "qtdEstoque":"300",
            "img":"https://images-americanas.b2w.io/produtos/imagens/122294810/122294828_1GG.jpg"
        },
        {
            "id": "5",
            "categoria":"2",
            "descricao":"A seleção",
            "autor":"Kiera Cass",
            "valor":" 28,48",
            "qtdEstoque":"250",
            "img":"https://images-americanas.b2w.io/produtos/imagens/112522145/112522153G1.jpg"
        },
        {
            "id": "6",
            "categoria":"2",
            "descricao":"Salada de Limeriques",
            "autor":"Tatiana Belinky",
            "valor":" 34,99",
            "qtdEstoque":"500",
            "img":"https://images-americanas.b2w.io/produtos/imagens/2887786189/2887786200_1GG.jpg"
        },
        {
            "id": "7",
            "categoria":"2",
            "descricao":"A Promessa Das Terras Altas ",
            "autor":"Hannah Howell",
            "valor":" 26,62",
            "qtdEstoque":"170",
            "img":"https://images-americanas.b2w.io/produtos/01/00/img/2896990/6/2896990616_1GG.jpg"
        },
        {
            "id": "8",
            "categoria":"2",
            "descricao":"A Promessa Das Terras Altas ",
            "autor":"Hannah Howell",
            "valor":" 26,62",
            "qtdEstoque":"170",
            "img": "https://images-americanas.b2w.io/produtos/01/00/img/2896990/6/2896990616_1GG.jpg"
        },
        {
            "id": "9",
            "categoria":"2",
            "descricao":" A Guerra dos Mundos - Edição de Luxo",
            "autor":"H. G. Wells",
            "valor":" 69,90",
            "qtdEstoque":"233",
            "img":"https://images-americanas.b2w.io/produtos/imagens/2934069685/2934069693_1GG.jpg"
        },
        {
            "id": "10",
            "categoria":"2",
            "descricao":"As Herdeiras De Duna",
            "autor":"	Frank Herbert",
            "valor":" 69,90",
            "qtdEstoque":"179",
            "img":"https://images-americanas.b2w.io/produtos/01/00/img/2914653/4/2914653403_1GG.jpg"
        },
        {
            "id": "11",
            "categoria":"4",
            "descricao":"Geladeira/Refrigerador Electrolux DC35A Branca 260L Cycle Defrost",
            "valor":"1.513,49",
            "qtdEstoque":"300",
            "img":"https://images-americanas.b2w.io/produtos/01/00/img7/01/00/item/111957/4/111957454_1GG.jpg"
        },
        {
            "id": "12",
            "categoria":"4",
            "descricao":"Geladeira/Refrigerador Brastemp Frost Free BRM44 375 Litros - Evox",
            "valor":"2.549,99",
            "qtdEstoque":"80",
            "img":"https://images-americanas.b2w.io/produtos/01/00/img7/01/00/item/133605/7/133605724_1GG.png"
        },
        {
            "id": "13",
            "categoria":"4",
            "descricao":"Fogão Brastemp 5 Bocas BFS5N - Inox - Com Botões Removíveis e Exclusivo Aro Protetor",
            "valor":"1.499,99",
            "qtdEstoque":"175",
            "img":"https://images-americanas.b2w.io/produtos/01/00/img/133666/5/133666578_1GG.jpg"
        },
        {
            "id": "14",
            "categoria":"4",
            "descricao":"Forno de Embutir 59L Preto OE60M Electrolux",
            "valor":"1.499,99",
            "qtdEstoque":"75",
            "img":"https://images-americanas.b2w.io/produtos/01/00/img/134232/1/134232114_1GG.jpg"
        },
        {
            "id": "15",
            "categoria":"4",
            "descricao":"Adega Climatizada Brastemp Dual Zone BZB33BE 33 Garrafas - Inox",
            "valor":"2.510,07",
            "qtdEstoque":"293",
            "img":"https://images-americanas.b2w.io/produtos/01/00/item/132775/8/132775879_1GG.jpg"
        },
        {
            "id": "16",
            "categoria":"5",
            "descricao":"Smart TV LED 5'' Philco Ptv50rcg70bl 4K UHD Midiacast 4 HDMI 2 USB",
            "valor":"2.699,99",
            "qtdEstoque":"493",
            "img":"https://images-americanas.b2w.io/produtos/01/00/img/2638610/3/2638610385_1GG.jpg"
        },
        {
            "id": "17",
            "categoria":"5",
            "descricao":"Caixa de Som JBL Go 2 JBLGO2BLK 3W Bluetooth USB",
            "valor":"200,99",
            "qtdEstoque":"93",
            "img":"https://images-americanas.b2w.io/produtos/01/00/img/134348/9/134348969_1GG.jpg"
        },
        {
            "id": "18",
            "categoria":"6",
            "descricao":"Cafeteira Digital Oster Ocaf500 800W Day Light Aço Inox Preta",
            "valor":"169,99",
            "qtdEstoque":"393",
            "img":"https://images-americanas.b2w.io/produtos/01/00/img/134269/7/134269777_1GG.jpg"
        },
        {
            "id": "19",
            "categoria":"6",
            "descricao":"Nespresso Essenza Mini Vermelha, Cafeteira - 110V | D30",
            "valor":"359,19",
            "qtdEstoque":"93",
            "img":"https://images-americanas.b2w.io/produtos/01/00/img/1192246/4/1192246434_1GG.jpg"
        },
        {
            "id": "20",
            "categoria":"6",
            "descricao":"Cafeteira Dolce Gusto Genio 110V + 48 cápsulas",
            "valor":"701,19",
            "qtdEstoque":"572",
            "img":"https://images-americanas.b2w.io/produtos/01/00/img/2484031/5/2484031540_1GG.jpg"
        },
        {
            "id": "21",
            "categoria":"6",
            "descricao":"Pipoqueira Elétrica Britânia Pop Time Pip B-02",
            "valor":"148,99",
            "qtdEstoque":"72",
            "img":"https://images-americanas.b2w.io/produtos/01/00/item/120166/8/120166881_1GG.png"
        },
        {
            "id": "22",
            "categoria":"6",
            "descricao":"Pipoqueira Elétrica Fun Kitchen Easypop BPI05A - Amarela",
            "valor":"169,99",
            "qtdEstoque":"72",
            "img":"https://images-americanas.b2w.io/produtos/01/00/offers/01/00/item/133677/8/133677859_1GG.jpg"
        },
        {
            "id": "23",
            "categoria":"6",
            "descricao":"Robô Aspirador De Pó Fast Clean Plus, Bivolt, Mondial - Rb-03",
            "valor":"659,99",
            "qtdEstoque":"102",
            "img":"https://images-americanas.b2w.io/produtos/01/00/img/2486421/4/2486421470_1GG.jpg"
        },
        {
            "id": "24",
            "categoria":"6",
            "descricao":"Obaduster Aspirador de Pó Robô Obabox",
            "valor":"809,91",
            "qtdEstoque":"102",
            "img":"https://images-americanas.b2w.io/produtos/01/00/img/1660601/1/1660601101_1GG.jpg"
        },
        {
            "id": "25",
            "categoria":"7",
            "descricao":"Polvo de Pelúcia Reversível Humor - Feliz e Bravo 1 Peça",
            "valor":"46,91",
            "qtdEstoque":"402",
            "img":"https://images-americanas.b2w.io/produtos/2834431923/imagens/polvo-de-pelucia-reversivel-humor-feliz-e-bravo-1-peca/2834431923_1_large.jpg"
        }
    ]);
});

app.listen(3000, () => console.log('server started'));

