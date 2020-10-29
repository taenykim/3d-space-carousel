# 3d space carousel

![](https://img.shields.io/badge/-Vue-4FC08D?&logo=Vue.js&logoColor=white)
![](https://img.shields.io/badge/-Nuxt-00C58E?&logo=Nuxt.js&logoColor=white)
![](https://img.shields.io/badge/-Vercel-000000?&logo=Vercel&logoColor=white)

🌌 3d space image carousel with nuxt

> Vue 공부를 위해 만들어본 토이 프로젝트

![](./images/preview-raw.gif)

## 📝 프로젝트 설명

- 기술스택 : Nuxt, Vue
- 의도 : Vue 체험 및 공부
- 배포 사이트 : https://3d-space-carousel.vercel.app/

## 📙 배운내용 정리(Vue)

### Vue vs React

- 쓰기 나름이겠지만, React는 `jsx` 문법으로 html을 함수인스턴스 내부에서 JavaScript로 모두 작성하였다면 Vue는 `template` 내부에서 html문법을 따로 적어주었다. 뷰와 로직을 컴포넌트 단위로 관리한다는 것은 비슷한 것 같았다.
- React는 `setState` 를 통해 데이터를 변경, 감지를 했다면, Vue는 데이터를 그냥 바꾸면 알아서 감지해주는 것 같았다.

### style

- Vue 파일 내부에서 style태그에 scoped 를 적어주면 모듈화가 바로 가능하고, lang="scss"를 적어주면 전처리기도 바로 쓸 수 있어서 상당히 편했다. 물론 sass를 설치해주어야 한다!

### Nuxt

- **pages** : 페이지 서버사이드렌더링과 라우팅을 지원한다. 동적라우팅도 `_` 쓰면 가능하다.
- **layouts** : 페이지 공통부분을 구성해준다. `<Nuxt/>` 컴포넌트 안으로 page가 들어가는 것 같다.
- **components** : 컴포넌트들
- **assets**, **static** : 에셋은 빌드시 들어가는 정적파일, 스태틱은 그렇지 않은 정적파일을 의미하는 것 같다. [공식문서](https://ko.nuxtjs.org/guide/assets/)에 차이점이 나와있다.

### 반복문

- Vue는 아래의 방식으로 반복문을 사용할 수 있었다.

```js
<Component v-for="imageSrc of imageSrcs"
```

```js
<Component v-for="(imageSrc,index) of imageSrcs"`
```

- React는 아래의 방식으로 반복문을 사용했던 것으로 기억한다.

```jsx
{{imageSrcs.map(imageSrc=> <Component>)}}
```

### 약어

- **props, key, style 등록**

```js
<Component v-vind:something="value" />
<Component :something="value"/>
```

- **이벤트핸들러 등록**

```js
<Component v-on:eventName="handler"/>
<Component @eventName="handler"/>
```

### CSR 라우팅

- `<nuxt-link/>`를 쓰면 클라이언트 사이드로 라우팅해준다.
- 동적라우팅 : 파일명 앞에 `_`를 붙여준다.
- params 상태등록 : `asyncData({ params }) {}`
- validation : `validate({ params }) {}`

### Vue 인스턴스

> `<script>` 안의 `export default {}` 내부에서 인스턴스 옵션을 적어줄 수 있다.

- **lifecycle hook** (`created`, `mounted`) : 인스턴스 생성부터 소멸 시점까지의 라이프사이클
- **data** : 컴포넌트 내부 상태
- **watch** : 상태의 변화를 감지
- **methods** : 인스턴스 내부 메소드
- **props** : 부모에게서 넘어온 props

### DOM 조작

- dom을 조작할 때, `this.$refs` 로 조작가능하다.

## 📚 배운내용 정리(그 외)

### 3d carousel

- **perspective** : z축을 따라 view와 관찰자의 거리(깊이감)을 나타냄 (픽셀 기반)
- **관찰자 시점 3d로 설정** : `transform-style: preserve-3d;`
- perspective 를 부모에 설정하느냐 개별 자식에 설정하느냐에 따라서 다른 3d 효과를 줄 수 있음.
- 3d carousel은 wrapper인 **.image-container**에 perspective를 설정하고, **.carousel**에 3d 속성을 주었다. 그리고 **.carousel > .image-button**에 Y회전값(각도에 따라 일정하게 회전)과 Z회전값(부모 carousel부터의 거리)를 주었다.

```scss
.image-container {
  perspective: 1000px;
}

.carousel {
  // 이미지들을 크게 보기위함!
  transform: translateZ(900px);
  // carousel 자체 회전
  transform: rotateY(${angle}deg)
  transform-style: preserve-3d;
}

.image-button {
  // rotateY : 이미지 마다의 회전값
  // rotateZ : 부모인 carousel에서의 거리
  transform: rotateY(${rotateDeg}deg) translateZ(288px);
}
```

### 스크롤바 커스터마이징

```css
::-webkit-scrollbar {
  width: 8px;
}

/* Track */
::-webkit-scrollbar-track {
  border-radius: 4px;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #ffffff88;
  border-radius: 4px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: white;
}
```

## ⛏️ 삽질한 것

### 라우팅 시, 특정 컴포넌트만 렌더링

- 클라이언트 사이드 라우팅을 하면서, 특정 컴포넌트만 리렌더링하고 싶은데, 라우팅이 되면 nuxt의 `page` 가 모두 렌더링 되었다.
- `<NuxtChild>` 를 써서 해결
- pages 디렉토리 내부에서 index 디렉토리를 만들고, 동적라우팅될 컴포넌트를 따로 적어주니까 라우팅되어도 child안에 있는 vue만 렌더링 되고 나머지는 그대로 있었다. 어떤 방식인지는 이해했는데 아직 익숙하진 않은 것 같다.
- 참고한 사이트 : https://ednsquare.com/story/nested-routes-in-nuxt-js-with-example------ayGs0r

### 이미지 깜빡거림

- 이미지를 일부러 고해상도를 썼는데, 이미지로딩시, 깜빡거림이 있다. 이미지 초기로딩 후에는 캐싱이 되서 덜하긴 하는데 완벽히 깜빡거림을 없앨 수 있는 방법이 있을까?

```ts
const bgImg = new Image();
bgImg.onload = () => {
  this.$refs.imageButton.style.backgroundImage = "url(" + bgImg.src + ")";
};
bgImg.src = this.src;
```

> 이 방법도 시도해봤는데 깜빡거림이 남아있다.

## 🔗 reference

- https://kr.vuejs.org/v2/guide/index.html
- https://ko.nuxtjs.org/
- https://ednsquare.com/story/nested-routes-in-nuxt-js-with-example------ayGs0r
- https://3dtransforms.desandro.com/carousel?fbclid=IwAR04gTvdmnZjMh_psYCenG7NemOpU66HsYSBBoNmIhVutZJic_Ilf4kYnkk
- https://wall.alphacoders.com/
- https://www.flaticon.com/
