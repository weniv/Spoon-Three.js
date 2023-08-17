# Spoon-Three.js
떠먹는 Three.js 실습 예제 코드입니다.

## 설치
별도의 설치없이 실습 코드를 확인하실 수 있도록 cdn으로 Three.js 라이브러리를 사용하고 있습니다.
특정 버전 또는 npm으로 설치한 라이브러리를 사용하기 위해서, 강의를 참고하여 라이브러리 경로를 수정해주세요.

```html
<script type="importmap">
  {
    "imports": {
      "three": "https://unpkg.com/three@0.152.2/build/three.module.js",
      "three/examples/jsm/": "https://unpkg.com/three@0.152.2/examples/jsm/"
    }
  }
</script>
```

## 예제
수업에서 사용된 예제는 `/src/js` 폴더에서 위치하고 있습니다.
각각의 예제를 확인하기 위하여 `index.html`에서 연결된 스크립트를 변경하여 확인하실 수 있습니다.
index.js는 최종 예제인, 나만의 섬 만들기 코드를 포함하고 있습니다.

```html
    <script src="./src/js/index.js" type="module"></script>
```
<img width="404" alt="스크린샷 2023-08-17 오후 3 13 50" src="https://github.com/weniv/Spoon-Three.js/assets/96777064/85cc5cf4-725f-4b04-9192-94f6e2a3be6a">
