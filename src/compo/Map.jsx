import React,{useState} from 'react'

//교재 p.158~p.163
const Map = () => {
   //map함수 : 배열을 특정 규칙을 갖춰서 다른 배열로 만들어 주는 함수
   const array = ['봄','여름','가을','겨울']
   const array2 = [
                     <li>눈</li>,
                     <li>바람</li>,
                     <li>바다</li>,
                     <li>산</li>
                  ]

  return (
    <div>
      <ul>
         {/* <li>{array[0]}</li>
         <li>{array[1]}</li>
         <li>{array[2]}</li>
         <li>{array[3]}</li> */}
         {/* {array2} */}
         {
            array.map(function(data,index){
               //data 에는 array의 요소가 차례차례 전부 들어온다!
               //index 에는 각각의 요소의 인덱스 값이 들어온다!!
               return <li key={index}>{data}</li>
            })
         }
         <hr></hr>
         {/* filter : 거르다
                    --> 특정 조건을 가지고 배열의 요소를 걸러서
                    새로운 배열을 만들겠습니다!
         */}
         {
            array.filter(function(data,index){
                  return data != "겨울"
            }).map(function(data,index){
               return <li>{data}</li>
            })
         }
      </ul>
    </div>
  )
}

export default Map