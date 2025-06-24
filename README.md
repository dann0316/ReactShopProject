## React 기반의 온라인 쇼핑몰 프로젝트

# 개요
- 배포 URL:
- 기술 스택:
1. Front-End: React, Javascript, Tailwindcss
2. 빌드 도구: CRA
3. 상태 관리: Redux, React-Query
4. API 도구: Axios
5. 외부 API: Fakestore API

# 폴더 구조
src/
|---components/      # 공통 UI 컴포넌트
|---hooks/           # 커스텀 훅 모음
|---pages/           # 페이지 컴포넌트
|---lib/             # shadcn용 lib 폴더
|---index.js         # 앱 진입점
|---store.js         # Redux용 store 파일

# 패턴/아키텍처 설명
1. 로직은 훅, UI는 컴포넌트: 로직과 UI 분리
2. Custom Hooks: 재사용 가능한 로직 혹은 코드가 길어진 로직은 Hook으로 뽑아냄
