# javascript_start
[끝말잇기 게임](https://hayeon123.github.io/javascript_start/끝말잇기게임/index.html)

### innerText, textContent 차이

- `textContent` 는 `script` 와 `style` 요소를 포함한 모든 요소의 콘텐츠를 가져옵니다. 반면, `innerText` 는 "사람이 읽을 수 있는" 요소만 처리합니다.
- `textContent` 는 노드의 모든 요소를 반환합니다. 그에 비해 `innerText` 는 스타일링을 고려하며, "숨겨진" 요소의 텍스트는 반환하지 않습니다. 
  - `innerText` 의 CSS 고려로 인해 innerText값을 읽으면 최신 계산값을 반영하기 위해 리플로우가 발생합니다. (리플로우 계산은 비싸므로 가능하면 피해야 합니다.)



### alert, prompt, confirm

- alert : 확인 
- prompt : input
- confirm : 취소, 확인

