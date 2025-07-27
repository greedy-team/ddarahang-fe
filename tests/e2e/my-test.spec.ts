import { test, expect } from '@playwright/test';

test('사용자 전체 여행 시나리오 테스트', async ({ page }) => {
  await page.goto('http://localhost:5173/');
  await page.getByRole('button', { name: '여행 지역 서울' }).click();
  await page.getByRole('option', { name: '지역 대표 사진 대구 도시, 대한민국' }).click();
  await page
    .getByRole('heading', {
      name: '나혼자 대구여행vlog🔥걸리버막창에 혼술 때리고→혼자 대관람차 타고, 미도다방 쌍화탕 탁☕️납짝만두,서연콩국,롤러커피,군위식당 고기밥존맛인데 최고는 ㄷㅇㅁㄸ',
      exact: true,
    })
    .click();
  await page.getByRole('listitem').filter({ hasText: '동성로#관광' }).locator('div').click();
  await page.getByText('중앙떡볶이#음식').click();
  await page.getByRole('button', { name: '뒤로가기 아이콘' }).click();
  await page.getByRole('button', { name: '여행 지역 대구' }).click();
  await page.getByRole('option', { name: '지역 대표 사진 광주 도시, 대한민국' }).locator('span').click();
  await page.getByRole('button', { name: '최신순 아래 화살표', exact: true }).click();
  await page.getByRole('button', { name: '조회순', exact: true }).click();
  await page.getByRole('heading', { name: '오늘은 절대 안 싸우기로 약속했다.. (HAPPY(' }).click();
  await page.getByText('1광주송정역#기타2상무팥죽 상무본점#음식3충장로#관광').click();
  await page.getByRole('listitem').filter({ hasText: '광주송정역#기타' }).locator('div').click();
  await page.getByRole('listitem').filter({ hasText: '광주송정역#기타' }).getByLabel('찜하기 버튼').click();
  await page.getByText('개의 여행장소').click();
  await page.getByRole('button', { name: '해당 목록에 저장하기' }).click({ force: true });
  await page.getByRole('listitem').filter({ hasText: '상무팥죽 상무본점#음식' }).getByLabel('찜하기 버튼').click();
  await page.getByText('기본 여행 저장 목록입니다.1개의 여행장소').click();
  await page.getByText('기본 여행 저장 목록입니다.1개의 여행장소').click();
  await page.getByRole('button', { name: '해당 목록에 저장하기' }).click({ force: true });
  await page.getByText('충장로#관광').click();
  await page.getByRole('listitem').filter({ hasText: '충장로#관광' }).getByLabel('찜하기 버튼').click();
  await page.getByRole('button', { name: '해당 목록에 저장하기' }).click({ force: true });
  await page.getByText('찜한장소').click();
  await page.getByText('광주송정역#기타').click();
  await page.getByRole('listitem').filter({ hasText: '상무팥죽 상무본점#음식' }).locator('div').click();
  await page.getByRole('listitem').filter({ hasText: '충장로#관광' }).locator('div').click();
  await page.getByRole('button', { name: '음식 탭 선택 안됨' }).click();
  await page.getByRole('button', { name: '관광 탭 선택 안됨' }).click();
  await page.getByRole('button', { name: '숙박 탭 선택 안됨' }).click();
  await page.getByRole('button', { name: '기타 탭 선택 안됨' }).click();
  await page.getByRole('button', { name: '카페 탭 선택 안됨' }).click();
  await page.getByRole('button', { name: '쇼핑 탭 선택 안됨' }).click();
  await page.getByRole('heading', { name: '오늘은 절대 안 싸우기로 약속했다.. (HAPPY(' }).click();
  await page.getByRole('listitem').filter({ hasText: '영광오리탕#음식' }).getByLabel('찜하기 버튼').click();
  await page.getByText('기본 여행 저장 목록입니다').click();
  await page.getByText('기본 여행 저장 목록입니다').click();
  await page.waitForSelector('.loading-spinner', { state: 'hidden' });
  await page.getByRole('button', { name: '해당 목록에 저장하기' }).click({ force: true });
  await page.getByText('기본 여행 저장 목록입니다').click();
  await page.getByRole('button', { name: '해당 목록에 저장하기' }).click({ force: true });
  await page.getByRole('listitem').filter({ hasText: '광주송정역#기타' }).getByLabel('찜 해제 버튼').click();
  await page.getByRole('listitem').filter({ hasText: '상무팥죽 상무본점#음식' }).getByLabel('찜 해제 버튼').click();
  await page.getByText('찜한장소').click();
  await page.getByRole('button', { name: '로고 따라행' }).click();
  await page.getByRole('button', { name: '여행 국가 대한민국' }).click();
  await page.getByRole('option', { name: '지역 대표 사진 일본 국가' }).click();
  await page.getByRole('button', { name: '여행 지역 여행 지역 검색' }).click();
  await page.getByRole('option', { name: '지역 대표 사진 요코하마 도시, 일본' }).click();
  await page.getByRole('button', { name: '조회순 아래 화살표', exact: true }).click();
  await page.getByRole('button', { name: '최신순', exact: true }).click();
  await page.getByRole('button', { name: '여행 국가 일본' }).click();
  await page.getByRole('option', { name: '지역 대표 사진 일본 국가' }).click();
  await page.getByRole('button', { name: '2' }).click();
  await page.getByRole('button', { name: '3' }).click();
  await page.getByRole('button', { name: '다음 페이지 그룹' }).click();
  await page.getByRole('button', { name: '7' }).click();
  await page.getByText('찜한장소').click();
  await page.getByRole('button', { name: '로고 따라행' }).click();
});
