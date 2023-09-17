
function Ex01(){
    //map 함수 : 배열에 있는 요소를 특정 규칙으로 바꾸어 주는 함수
  const fruitList =['사과','파인애플','딸기','두리안','두리안']
  //fillter 함수 : 배열에 있는 교소를 필터링, 해주는 함수
  return (
    <div>
        <ul>
          {fruitList.map(function(data,index){
            //첫번째 매개변수 : 배열 요소 , 두번째 매개변수 : 배열 인덱스
            // data -> 배열이 가지고 있는 요소들이 하나씩 들어간다!
            // 함수 선언문으로 map 함수 사용시 반듯이 return 키워드가 필요하다!
            //key : 각 태그들을 구분지을수 있는 고유값(index) 
            return <li key={index}>{data}</li>
          })}
          {/* {fruitList.map((data,index)=><li>{data}</li>)} */}
        </ul>
    </div>
  );
}
export default Ex01