function insert(num){
    document.form.textView.value=document.form.textView.value+num;
    }
    function equal(){
    var exp = document.form.textView.value;
    if(exp){
    document.form.textView.value=eval(document.form.textView.value);
    }
    }
    function c(){
    document.form.textView.value=" ";
    }