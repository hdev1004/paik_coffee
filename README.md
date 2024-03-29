# 뺵다방 클론 코딩

React와 NodeJS Express 서버를 사용한 빽다방 클론 코딩입니다. <br/>
.env 파일을 활용하여 각 개발환경에 맞게 설정을 할 수 있습니다.

전부 구현하기에는 기능이 너무 방대하여 부분 기능(픽업 오더)만 개발했습니다.

사용기술 <br/>
`React`, `NodeJS Express`, `Mysql`, `Redux`

<br/>


## 개발 기간
`2024-01-30 ~ 2024-02-08` (총 개발 시간 5일)

<br/>

## Backend 파일 구조

MVC 패턴을 사용하였으며, 파일구조는 다음과 같습니다.

`Backend`

```shell
📁 /paik_coffee/
└─ 📁 config (설정 파일 - mysql)
└─ 📁 lib (라이브러리)
└─ 📁 models (db 쿼리 처리 - MVC)
└─ 📁 routes (라우팅 - MVC)
└─ 📁 views (Not Use)
└─ 📜 server.js (서버 파일)
└─ 📜 .env (환경 설정 파일)
```

<br/>

## 데이터 베이스 테이블 구조

![image](https://github.com/hdev1004/paik_coffee/assets/59737252/069dfb45-acb1-4aaf-bc41-1f9764b8d37b)

```shell
//coffee_list
id : 음료 주문 리스트의 ID
coffee_group : 커피 그룹 구분
title : 음료 이름
price : 음료 가격 
```

<br/>

```shell
//bill_list
num : 순번
user_id : 사용자 id
order_id : 주문 id
order_title : 주문한 음료 이름
order_cnt : 주문한 음료 갯수
total_price : 총 가격
coffee_price : 음료 개당 가격
shot_cnt : 샷 추가 갯수 
```

<br/>

`dump파일`

```
CREATE TABLE `bill_list` (
  `num` int NOT NULL AUTO_INCREMENT,
  `user_id` varchar(200) NOT NULL,
  `order_id` varchar(50) DEFAULT NULL,
  `order_title` varchar(200) DEFAULT NULL,
  `order_cnt` int DEFAULT NULL,
  `total_price` int DEFAULT NULL,
  `coffee_price` int DEFAULT NULL,
  `shot_cnt` int DEFAULT NULL,
  PRIMARY KEY (`num`,`user_id`)
)

CREATE TABLE `coffee_list` (
  `id` int NOT NULL AUTO_INCREMENT,
  `coffee_group` int NOT NULL,
  `title` varchar(50) DEFAULT NULL,
  `price` int DEFAULT NULL,
  PRIMARY KEY (`id`)
)
```

<br/>

## FrontEnd 파일 구조

```shell
📁 /paik_coffee/paik_coffee/src
└─ 📁 components (공용 검포넌트 관리)
└─ 📁 assets (에셋 폴더)
└─ 📁 pages (각각의 페이지)
└─ 📁 reducers (리덕스 폴더)
└─ 📜 App.js (App 파일)
└─ 📜 .env (환경 설정 파일)
```

<br/>
<br/>

## Usage

```shell
git clone https://github.com/hdev1004/paik_coffee.git
```

1. 깃 클론 받은 후 `cd /paik_coffee` 폴더(백엔드) 이동
2. `npm i` 명령어 실행
3. `cd /paik_coffee/paik_coffee` 폴더(프론트) 이동 후 `npm i` 명령어 실행
4. 백엔드는 `npm run dev` 명령어 실행
5. 프론트는 `npm start` 명령어 실행
6. DB의 경우는 .env를 참고하며, dump 파일 그대로 DB에 넣으면 됩니다!

<br/>

## Preview

![React App - Chrome 2024-02-08 15-22-51](https://github.com/hdev1004/paik_coffee/assets/59737252/56ba307a-b297-4f90-a641-128cb224e078)

