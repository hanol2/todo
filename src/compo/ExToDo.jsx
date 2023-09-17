import {useState,useRef} from 'react'

let array = []
function ExTodo(){
   //text : input 태그에 적은 내용
   const [text ,setText] = useState();
   const [textList , setTextList] = useState([]);
   const [arrayState ,setArray] = useState([])
   //let arrayState=[];
   //Ref 변수 : 컴포넌트 내부에서 태그를 지칭(가르킬 수 있는) 할 수 있는역할
   const inputRef = useRef();

   function inputText(e){
      //setText(inputRef.current.value)
      setText(e.target.value)
   }

   function addList(){
      //리액트 에서 state 배열에서 값을 추가해줄때는
      //push 가 아니라 concat 이라는 기능을 사용한다!
      setArray(arrayState.concat({ch:false ,textCo : 'black'}))
      setTextList(textList.concat(text))
    
      //document.getElementById('text').value=""
      console.log(inputRef)
      inputRef.current.value=""
   }

   function deleteList(e){
      // console.log("delete")
      // console.log(e.target.value)
      //index != e.target.value -> 삭제버튼을 누른 항목이 아닐때만  
      //filter : 조건에 부합하는 항목만 배열을 반환 하겠습니다!
      //setTextList(textList.filter((data,index)=> index != e.target.value))

      setTextList(textList.filter(function(data,index){
               // if(index == e.target.value){
               //    e.target.previousSibling.style.color='black'
               //    e.target.previousSibling.previousSibling.checked = false
               // }
         return index != e.target.value
      }))

      setArray(textList.filter(function(data,index){
         return index != e.target.value
      }))
      
   }

   function checkList(e){
       //이벤트 객체 형제 태그 가져오기! 
      console.log(e.target.checked)
      //setArray({...arrayState[e.target.value].textCo='red'})

       inputRef.current.value
   }
   return(
      <div>
         <h1>ToDoSample</h1>
         <input onChange={inputText} id='text' ref={inputRef}></input>
         <button onClick={addList}>추가</button>
         {textList.map(function(data,index){
            //map 배열의 요소 개수만큼 실행 되어진다!
            //새로운 배열을 반환!
            console.log("map 실행")
            return (
            <div>
               <input type="checkbox" value={index} onChange={checkList} checked={arrayState[index].ch}></input>
               <h1 style={{color:arrayState[index].textCo}}>{data}</h1>
               <button value={index} onClick={deleteList}>삭제</button>
            </div>
            )
         })}
      </div>
   )
}

export default ExTodo