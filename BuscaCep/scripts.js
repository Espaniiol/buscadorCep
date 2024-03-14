  $(document).ready(function(){
    
    $('body').on('click','#consultar',function(){
        consultaCep();
    });

    function consultaCep(){
      const cep = $('#cep').val();

      loading();
      setTimeout(function(){
        $.ajax({
          url:'https://viacep.com.br/ws/'+cep+'/json/',
          type: 'GET',
          dataType:'json',
          success: function(data){
            $('body').find('#resultados').html('<h2>Resultado da consulta</h2>' 
                                              + '<p> CEP:' + data.cep + '</p>'
                                              + '<p> Logradouro: ' + data.logradouro+'</p>'
                                              + '<p> Bairro: ' + data.bairro+'</p>'
                                              + '<p> Localidade: '+ data.localidade+'</p>'
                                              + '<P>  UF: ' +data.uf + '</P>'                                            
                                              + '<p> DDD: ' + data.ddd+'</p>'
                                              );
          }
      })
      },2000);
      

    }

    function loading(){
      $('#resultados').html('<img src="loadin.gif"/>')
    }
    
    $('body').on('click','#modo-noturno',function(){
        $('body').toggleClass('dark-mode');
        $('body').find('.container').toggleClass('dark-mode');
        $(this).toggleClass('apagada');
    });

    $('body').on('input','#cep', function(){
      alert($(this).val())
    })

  });