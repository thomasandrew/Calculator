function apertou(numero){
    document.form.screen.value=document.form.screen.value+numero;
}

function equal(){
    var is_equal_to = document.form.screen.value;

    if(is_equal_to){
        document.form.screen.value = eval(is_equal_to);
    }
}

function delete_this(){
    document.form.screen.value=" ";
}