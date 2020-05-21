var body = document.body; 


//입력받는 곳
var input = document.createElement('input');
document.body.append(input);

//버튼
var button = document.createElement('button');
button.textContent ="등록";
document.body.append(button);

//단어
var div_word = document.createElement('div');
div_word.textContent = "자바";
document.body.append(div_word); //body안에 추가 됨 


//결과 
var result = document.createElement('div');
document.body.append(result);

//버튼 클릭 했을 때 
button.addEventListener('click', game)

//enterkey
input.addEventListener('keydown',function(event){
    event.preventDefault();
    if(event.keyCode ==13){
        game()
    }
})


function game(){
    word = div_word.textContent; 
    newword = input.value;
    if(newword.length<=1){
        result.textContent="한 글자 이상 입력해주세요";
    }else{
        if(word[word.length-1]===newword[0]){
            result.textContent="딩동댕";
            word= newword;
            div_word.textContent = word;
        }else{
            result.textContent="땡!";
        }
    }
    input.value='';
}


// var word = "자바";
// while(true){
//     var newword = prompt(word);
//     if(word[word.length-1]===newword[0]){
//         word= newword;
//     }else{
//         alert("졌습니다!");
//     }
// }

