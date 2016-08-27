 $(document).ready(function(){
    var friends_chat,Friends_chat=
        {
             selectors: 
             {
                sendRequestBtn: $('.sendRequestBtn'),
                username:$('.username'),
                mail:$('.mail'),
                password:$('.password'),
                afterRequestMsg:$('.afterRequestMsg')
             },
             init: function() 
             {
                friends_chat = this.selectors;
                this.bindUIActions();
             },
             bindUIActions: function() 
             {
                Friends_chat.inputFilledMethod();
                friends_chat.sendRequestBtn.on("click",function()
                {
                  Friends_chat.sendRequestMethod(this,event); 
                });
             },
             sendRequestMethod:function(currentElement,even){
              event.preventDefault();
              var success = true;
              dataToSend = 
              {
                usernameEntered:$(username).val(),
                mailEntered:$(username).val(),
                passwordEntered:$(password).val()
              }

              if (success) 
                {
                  $(currentElement).css('left','170%')
                  $(friends_chat.afterRequestMsg).css('left','0');
                };
              // var callback = function(data, textStatus, xhr)
              //   {
              //       alert(data + "\t" + textStatus);
              //   }
              //   test('Hello, world', callback);
              //   var test = function(str, cb) 
              //   {
              //       $.ajax({
              //           type: 'post',
              //           url: 'url',
              //           data: dataToSend,
              //           success: cb
              //       });
              //   }
             },
             inputFilledMethod:function()
             {
                  if (!String.prototype.trim) {
                        (function() {
                          // Make sure we trim BOM and NBSP
                          var rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
                          String.prototype.trim = function() {
                            return this.replace(rtrim, '');
                          };
                        })();
                      }
                      [].slice.call( document.querySelectorAll( 'input.input__field' ) ).forEach( function( inputEl ) {
                        // in case the input is already filled..
                        if( inputEl.value.trim() !== '' ) {
                          classie.add( inputEl.parentNode, 'input--filled' );
                        }
                        // events:
                        inputEl.addEventListener( 'focus', onInputFocus );
                        inputEl.addEventListener( 'blur', onInputBlur );
                      } );
                      function onInputFocus( ev ) {
                        classie.add( ev.target.parentNode, 'input--filled' );
                      }
                      function onInputBlur( ev ) {
                        if( ev.target.value.trim() === '' ) {
                          classie.remove( ev.target.parentNode, 'input--filled' );
                        }
                      }
             }
        }
    Friends_chat.init();
  });