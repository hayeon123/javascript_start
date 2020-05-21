var num1 ;
var num2 ;
var result ;
var body = document.body;
var sub = document.createElement('div');
document.body.append(sub);
 
//form, input
var form = document.createElement('form');
var input = document.createElement('input');
document.body.append(form);
form.append(input);

//버튼
var button = document.createElement('button');
button.textContent ="입력"
document.body.append(button);

//결과 
var tmp = document.createElement('div');
body.append(tmp);

//form 이벤트
form.addEventListener('submit', function(e){
    e.preventDefault()
    check_result(input.value);
});

//버튼 이벤트
button.addEventListener('click',function(e){
    e.preventDefault();
    check_result(input.value);
})

make_question();
//문제 생성 
function make_question(){
    num1 = Math.ceil(Math.random() *9);
    num2 = Math.ceil(Math.random() *9);
    result = num1* num2;
    sub.textContent = String(num1)+'곱하기 '+String(num2)+'는?';
}
//정답 확인 
function check_result(answer){
    if(Number(answer)===result){
        tmp.textContent = "정답입니다!"
        make_question();
    }else{
        tmp.textContent="땡"
    }
    input.value='';
    input.focus();
}

