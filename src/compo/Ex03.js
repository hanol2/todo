import React, { useState } from 'react';


function Ex03() {
    //const googoo = [1, 2, 3, 4, 5, 6, 7, 8, 9]
    const [googoo ,setGooGoo] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9])
    const [num, setNum] = useState(1)
    const [result, setResult]=useState([])
    // 빈 배열 값 주기

    function getNum(e) {
        setNum(e.target.value)
    }
    function makeGooGoo(){
         setResult(googoo.map(function (data,index){
            console.log('map Call')
             return (
             <div>
               <li> {num} x {data}={num * data}</li>
               {/* 
               선언문으로 함수 사용시 매개변수를 전달해주기 위해서는 화살표 함수 내부로 사용해 줘야한다.
               */}
               <button onClick={deleteGooGoo(index)}>삭제</button>
             </div>
             )
         }))
    }

    function deleteGooGoo(selectIndex){
        //fillter함수 : 배열에 있는 요소에 필터를 걸어주는 함수!
        //console.log(selectIndex)
        console.log('delete Call')
        setResult(
        googoo.filter(function(data,index){
            if(selectIndex !== index){
                return data
            }
        }))
    }

    return (
        <div>
            몇단? <input onChange={getNum} />
            <button onClick={makeGooGoo}>출력</button>
            <ul>
                {/* {googoo.map(function (data) {
                    return <li> {num} x {data}={num * data}</li>
                })} */}
                {/* {
                  googoo.map(function (data,index){
                     console.log('map call')
                     return (
                     <div>
                     <li> {num} x {data}={num * data}</li>
                    
                     <button onClick={()=>deleteGooGoo(index)}>삭제</button>
                     </div>
                     )
                 })
                } */}

                {result}
            </ul>
        </div>
    );
}

export default Ex03;