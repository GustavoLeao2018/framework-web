// $(document).ready(
//     function(){
//         $.getJSON("json/servicos.json", function(data){
//             var cont  = 0;
//             $.each(data, function(){ cont++; });

//             for(i = 0; i <= cont; i++){
//                 $("<div class=\"hcw-car-1\" id=\"cartao"+i+"\">").appendTo("#corpo");
//                 $.each(data[i], function(chave, valor){
//                     if(chave == "titulo"){
//                         $("<div><h2>"+valor+"</h2></div>").appendTo("#corpo #cartao"+i);
//                     }
//                     if(chave == "imagem"){
//                         $("<div><img src=\""+valor+"\"/></div>").appendTo("#corpo #cartao"+i);
//                     }
//                     if(chave == "texto"){
//                         $("<div><p>"+valor+"</p></div>").appendTo("#corpo #cartao"+i);
//                     }
//                 });
//             }
//         });
//     }
// );