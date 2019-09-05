/*
Melhora a interface do sistema web giz
*/

var titulo = document.getElementsByClassName('trtitulo2')[0].innerHTML;
var verifica = titulo.search("Notas");

// VERIFICA SE ESTA NA PAGINA DE NOTAS E FREQUENCIAS
if(verifica>=0) {
    var style = document.createElement('style');
    style.type = 'text/css';
    style.innerHTML = '.table:nth-child(1) td {padding: 5px}';
    style.innerHTML += '.table:nth-child(1) tr:nth-child(0) td,';
    style.innerHTML += ' .trtitulo2 td, .trzebra1 td, .trzebra0 td, .trtitulo3';
    style.innerHTML += '{border: 1px solid #FFF6D8;}';
    style.innerHTML += '.linhaAnima {height: 20px;transition: all 0.3s ease !important;}';
    style.innerHTML += '.linhaAnima:hover td {font-size: 14px !important;';
    style.innerHTML += 'border-top: 1px solid #999;';
    style.innerHTML += 'border-bottom: 1px solid #999;}';
    style.innerHTML += '.linhaAnima:hover {';
    style.innerHTML += 'height: 70px; ';
    style.innerHTML += 'background-color: #FFFFFF !important;}';
    style.innerHTML += '.reprovado { color: #FF0000;';
    style.innerHTML += 'font-weight: bold; }';
    style.innerHTML += '.aprovado { color: #008000; font-weight: bold; }';
    style.innerHTML += '#mainSite {background-color: #FFE89C !important;}';
    style.innerHTML += '.tabela1 {border: 1px solid #63AEBA !important;padding: 1px !important;}';
    style.innerHTML += '.tabela1 td {padding: 5px !important;}';
    style.innerHTML += '.distEsquerda, .distDireita {/*width: 20% !important;*/';
        style.innerHTML += '    background-color: #FFE89C !important;}';
        style.innerHTML += '.trtitulo {background: none !important;';
            style.innerHTML += '    padding: 25px 15px !important;';
            style.innerHTML += '    border: 1px solid #638ACD !important;';
            style.innerHTML += '    background-color: #638ACD !important;';
            style.innerHTML += '    color: #FFFFFF !important;}';
            style.innerHTML += '#formLogin label {margin: 5px !important;';
                style.innerHTML += '    color: #456397 !important;';
                style.innerHTML += '   font-weight: 600 !important;';
                style.innerHTML += '    font-size: 12px !important;}';
        style.innerHTML += '#btnlogin {padding: 8px 29px !important;';
                style.innerHTML += '    margin-top: 10px !important;';
                style.innerHTML += '    margin-bottom: 10px !important;';
                style.innerHTML += '    font-size: 14px !important;}';
                style.innerHTML += '.cornerTopLeft {float: none !important;';
                style.innerHTML += '    text-align: center !important;';
                style.innerHTML += '    background: none !important;}';
                style.innerHTML += '.inputbox:focus {background-color: #64bba3 !important;';
                style.innerHTML += '   color: #FFF !important;}';
                style.innerHTML += 'inputbox {border-radius: 5px !important;';
                    style.innerHTML += 'font-size: 16px !important;';
                    style.innerHTML += 'color: #3f8471 !important;}';
        style.innerHTML += 'SELECT {font-size: 16px !important;';
            style.innerHTML += 'color: #3f8471 !important;';
            style.innerHTML += 'border-radius: 5px !important;}';
        style.innerHTML += '#cornerTopRight img {display: none !important;}';
        style.innerHTML += '#cornerBottomLeft, #cornerBottomRight {background: none !important;}';
    
    /*PAGINA INTERNA*/
    
    
    style.innerHTML += '.tabela1 {background: #FFF6D8 !important;';
        style.innerHTML += 'background-color: #FFF6D8 !important;}';
    
    style.innerHTML += '#cornerTopLeft {text-align: center !important;';
        style.innerHTML += 'background: none !important;}';
    
    style.innerHTML += '#cornerTopRight img {display: none !important;}';
    
    style.innerHTML += '#cornerBottomLeft, #cornerBottomRight {background: none !important;}';
    
    style.innerHTML += '.trtitulo {background-color: #63AEBA;color: #FFF;}';
    
    style.innerHTML += '.trtitulo2, .trtitulo2 td {BACKGROUND-COLOR: #AB8A7B;color: #FFF;}';
    
    style.innerHTML += '.trtitulo2:nth-child(1) {BACKGROUND-COLOR: #6E594F;}';
    
    style.innerHTML += '.trtitulo3 {background-color: #FFE89C;}';
    
    style.innerHTML += '.trtitulo3 a {color: #604C43 !important;}';
    
    style.innerHTML += '.trzebra1 {BACKGROUND-COLOR: #F2D0A0 !important;}';


    document.getElementsByTagName('head')[0].appendChild(style);

    var map = Array.prototype.map;

    //linhas A
    var elems = document.querySelectorAll('.trzebra1, .trzebra0');

        var values = [].map.call(elems, function(obj) {
            
            obj.classList.add("linhaAnima");
        
            // TROCA A COR DA ULTIMA COLUNA
            var boxSituacao = obj.children[13]; // pega ultima coluna da tabela
            var conteudoSituacao = boxSituacao.innerHTML; // pega conteudo da coluna 
            var situacao = conteudoSituacao.search("Reprovado"); // procura string "Reprovado"
            if(situacao>=0) {
            boxSituacao.innerHTML = '<span class="reprovado">'+conteudoSituacao+'</span>';
            } else { 
            boxSituacao.innerHTML = '<span class="aprovado">'+conteudoSituacao+'</span>';
            }

            // COLOCA EM NEGRITO AS NOTAS PRINCIPAIS E AS FALTAS

            var boxSituacao = obj.children[0]; // nota final
            boxSituacao.innerHTML = "<strong>"+boxSituacao.innerHTML+"</strong>"; 

            var boxSituacao = obj.children[6]; // nota final
            boxSituacao.innerHTML = "<strong>"+boxSituacao.innerHTML+"</strong>"; 

            var boxSituacao = obj.children[11]; // faltas
            boxSituacao.innerHTML = "<strong>"+boxSituacao.innerHTML+"</strong>"; 
        });

    var tabela = document.getElementsByClassName('table')[1];
    tabela.cellSpacing = 0; 

}







