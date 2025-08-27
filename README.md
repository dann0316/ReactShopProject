# React + Vite  
# Online Shopping Mall  

: 기본적인 상품 조회, 상세 페이지, 장바구니 기능을 갖춘 온라인 쇼핑몰 서비스  

- 배포 URL: https://elnidashoppingmall.netlify.app/

- 기술 스택 : React, Vite, JavaScript, Tailwind CSS, Axios, Redux Toolkit (상태 관리)


# 아키텍쳐 및 폴더 구조:

> **프론트엔드 단일 아키텍처**  

- 상품 데이터 관리와 UI 렌더링을 분리  

- Redux Toolkit을 통한 전역 상태 관리  

> **폴더 구조**

project-root/

├── src/

│ ├── components/ # 공통 UI 컴포넌트 (Navbar, ProductCard, CartItem 등)

│ ├── hooks/ # 커스텀 훅 (데이터 fetch, 디바운스 등)

│ ├── pages/ # 페이지 컴포넌트 (Home, ProductDetail, Cart 등)

│ ├── store/ # Redux Toolkit Slice (cartSlice, productSlice 등)

│ ├── utils/ # 유틸 함수 (가격 포맷, 로컬스토리지 연동 등)

│ └── main.tsx # 앱 진입점


# 설계 전략 설명:

> **로직과 뷰 분리**  

- 상품 데이터 fetch, 상태 업데이트 로직은 store와 hooks에 위치  

- 컴포넌트는 props 기반으로 UI 렌더링만 담당  

> **상태 관리**  

- Redux Toolkit을 사용해 `cart`, `products`, `user` 등 Slice 단위로 관리  

- 로컬스토리지 연동으로 장바구니 상태 유지  

> **컴포넌트 재사용성**  

- `ProductCard`, `ProductList`, `CartItem`을 분리해 재사용 가능하게 설계  

- 페이지 구성 요소를 컴포넌트 단위로 쪼개 유지보수성 강화  


# 추가 구성 및 리팩토링

> 반응형 UI  

: Tailwind CSS로 모바일/데스크탑 대응  

> UX 보완  

: 로딩 상태 시 Skeleton UI 적용, 장바구니 수량 변경 시 실시간 업데이트  

> 데이터 관리  

: API 호출은 Axios 모듈화, 전역 store와 연동  


# 어려웠던 점과 해결 방법

> **상태 동기화 문제**  

- 장바구니 수량 변경 시 UI 반영이 지연되는 문제 발생  

- 해결: Redux store와 로컬스토리지 동기화 로직 개선  

> **라우팅 구조 설계**  

- 상품 상세 페이지 이동 시 props 전달 문제 발생  

- 해결: React Router v6 기반으로 URL 파라미터 사용해 데이터 fetch  

> **결제 기능 부재**  

- 실제 결제 연동은 구현하지 못해 아쉬움  

- 대신 결제 직전까지의 장바구니 및 주문 흐름을 구현해 구조적 경험 확보  


# 느낀 점 / 한계점

이번 프로젝트는 실제 이커머스 서비스의 기본 흐름인 **상품 조회 → 상세 확인 → 장바구니 → 주문 직전 단계**까지 구현하며 전반적인 쇼핑몰 구조를 경험할 수 있었습니다.  

Redux Toolkit을 통해 상태 관리의 필요성과 전역 데이터 흐름을 이해할 수 있었고, 컴포넌트 분리와 로컬스토리지 활용으로 유지보수성과 사용자 경험을 고려한 설계를 연습할 수 있었습니다.  

다만 결제 시스템이나 주문 관리, 백엔드 연동은 구현하지 못해 한계가 있었습니다. 향후에는 결제 API(PG 연동)까지 포함해 더 실제 서비스에 가까운 구조를 만들어보고자 합니다.  