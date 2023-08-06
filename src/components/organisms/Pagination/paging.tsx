import { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { ApiModule } from 'modules/api.module';
// 데이터에 따라 최대 페이지 계산하기
// 페이지를 선택하거나 버튼을 눌러서 해당 페이지의 api 요청하기
// 최대 페이지가 10개가 넘어갈 경우 >> 화살표로 11~20으로 넘어가기

interface Props {
    item: {};
}

//응답받은 게시물 데이터를 저장하기
const Paging = ({ item }: Props) => {
    const [lists, setLists] = useState([]);

    useEffect(() => {}, []);
};

export default Paging;
/*

totalPage: 현재 데이터에서 10개씩 데이터를 쪼갰을 때 나올 수 있는 총 페이지의 수
currentPage: 현재 선택된 페이지의 숫자
showingNum: 사용자가 선택할 수 있게 한번에 화면에 보여지는 페이지들. 이 경우 한번에 5개 페이지에 대한 페이지 숫자들이 보여진다.
위 예제에서 숫자들(6, 7, 8, 9, 10)에 해당.
isFirstPage: 현재 보여지는 5개의 페이지 옵션 중 가장 첫 페이지.
위 예제에서는 6.
isLastPage: 현재 보여지는 5개의 페이지 옵션 중 가장 마지막 페이지.
위 예제에서는 10.

현재 페이지에 마지막 페이지가 있는지 없는지를 판단하는 로직
useState()로 만들어지는 set함수가 이전상태를 parameter로 받아올 수 있다
const [showingNum, setShowingNum] = useState({
    start: 1,
    end: PAGES_PER_LIST,
  });

  useEffect(() => {
    const lessThanFive = totalPage <= PAGES_PER_LIST;
    lessThanFive
      ? setShowingNum(prev => ({ ...prev, start: 1, end: totalPage }))
      : setShowingNum(prev => ({ ...prev, start: 1, end: PAGES_PER_LIST }));
  }, [totalPage]);


한 페이지 당 보여져야 하는 데이터의 개수 지정 => 현재 페이지번호를 곱해서 필요한 인덱스를 판단
const currentPageData = tableData.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE,
  );

  //왼쪽 화살표가 눌렸을 때
  const changePageNumbersBackward = () => {
    currentPage > PAGES_PER_LIST &&
      setShowingNum(prev => arrowHandler(prev, -1, totalPage));
  };

//오른쪽 화살표가 눌렸을 때
  const changePageNumberForward = () => {
    showingNum.end <= totalPage &&
      setShowingNum(prev => arrowHandler(prev, 1, totalPage));
  };

//util의 arrowHandler 함수
const arrowHandler = (prev, sign, totalPage) => {
  const PAGES_PER_LIST = 5;
  const nextIndex = prev.end + PAGES_PER_LIST;
  let res;
  if (sign === 1) {
    res = nextIndex > totalPage ? totalPage : nextIndex;
  } else if (sign === -1) {
    res =
      prev.end - prev.start < 4
        ? prev.start + 4 - PAGES_PER_LIST
        : prev.end - PAGES_PER_LIST;
  }
  return { ...prev, start: prev.start + PAGES_PER_LIST * sign, end: res };
};

export default arrowHandler;

  */
