# Microfrontend - Single-SPA

작성자 컴퓨터전자시스템공학부 황수민, 김준성</br></br>

### **왜 Micro-Frontend 인가?**
---
</br>

![micro-frontend](https://microfrontends.com/img/deployment.png)

</br>

웹 어플리케이션이 점점 복잡해지는 과정에서, 많은 조직들이 단일화된 프론트엔트 코드베이스를 유지 및 관리하고, 프론트엔드 개발 과정을 여러 팀에 걸쳐 확장할 수 있는 방법을 찾기 위해 노력하고 있다. 
마이크로 프론트엔드는 제품을 더 작고 단순한 어플리케이션의 단위로 분할을 통해 독립적이고 자율적인 팀 개발 환경을 제공하여 이러한 복잡성을 관리하는 하나의 접근 방식이다.</br></br>

#### **마이크로 프론트엔드 아키텍쳐에는 다음과 같은 장점이 존재한다.**</br>
* Micro-frontend 아키텍쳐는 사용하기 간단하고, 비교적 관리하기가 쉽다.</br>
* 독립적인 개발팀이 훨씬 쉽게 프론트 엔드 어플리케이션을 공동으로 작업하기 용이하다.
* 하나의 코드를 여러 곳에서 재사용이 가능하다.
* 각각의 컴포넌트에 서로 다른 기술(JavaScript, React, Vue, Angular 등)을 사용 가능하다.
* 기존의 단일화된 코드에서 분할된 어플리케이션의 간소화된 코드가 팀에 합류하는 개발자들의 접근성을 낮추는 것에 기여한다.</br>
>이번 micro frontend 아키텍쳐를 구현하기 위해 웹 서버의 새 데이터를 현재 웹 페이지에 동적으로 재작성하여 사용자와 상호 작용하는 웹 응용프로그램인 single-spa를 예제를 통해 알아볼 것이다.

</br>

### **Single - SPA란?**
---

#### **Single - SPA는 다음과 같은 기능을 제공한다.**
* 기존의 기능들을 다시 쓸 필요가 없이 계속 수정 및 추가할 수 있고 이로 인해 앱들이나 기능의 버전이 중첩되는 일이 없어져 배포가 쉬워진다.
* 페이지 새로고침이 필요없이 프레임워크를 돌릴 수 있다.
* 초기의 빠른 불러오기를 위해 지연로딩을 사용할 수 있다.
* 라이브러리가 쉽게 관리되고 설치될 수 있다
* 다양한 환경에서 돌아갈 수 있도록 다양한 프레임워크를 지원한다

#### **Single - SPA의 몇가지 단점**
* Single-Spa Ecosystem의 다양한 언어를 활용하는 과정에서 프로그램이 무거워질 수 있다.
* 큰 규모의 JS파일일 경우, 페이지를 다운로드 하는 느려질 가능성이 있다.
* SEO를 적용하는 것이 어렵다. 하지만 불가능한 것은 아니다.(nuxt.js 혹은 next.js를 이용하여 해결 가능하다)


</br>

### **Reverse proxy 기본 개념**
---

####  **Forward Proxy** ####

</br>

![Forward proxy](https://www.cloudflare.com/img/learning/cdn/glossary/reverse-proxy/forward-proxy-flow.svg)

</br>

Micro frontend 솔루션의 핵심 요소는 마이크로 앱 컴포넌트를 처리할 전용 서버를 설정하는 것에 있다. 이는 리버스 프록시이다. 이에 대하여 알기 전에, 먼저 forward proxy에 대하여 알아보도록 하자.</br>

포워드 프록시(forward proxy)는 크게 다음과 같은 목적으로 사용된다.
* 국영 시설, 혹은 기관에서 브라우저 이용 제한을 회피
> 일부 정부, 학교 및 기타 조직은 사용자에게 제한된 버전의 인터넷 엑세스를 제공하기 위해 방화벽을 사용한다. 이때, 사용자가 방문 중인 사이트와 직접 연결되는 대신, 사용자가 프록시에 연결할 수 있게 하여 이러한 제한 사항을 해결할 수 있다.
* 특정 컨텐츠로의 접속을 차단
> 위와 반대로, 특정 사이트의 유저가 엑세스 하는 것을 막아내는 기능을 수행할 수 있다. 예를 들어, 학교 네트워크는 콘텐츠 필터링 규칙을 활성화하는 프록시를 통해 웹에 연결되도록 구성하고, 외부 소셜 미디어 사이트의 응답을 거절하게 할 수 있다.
* 개인정보 보호

</br>

#### **Reverse Proxy** ####

![Reverse Proxy](https://www.cloudflare.com/img/learning/cdn/glossary/reverse-proxy/reverse-proxy-flow.svg)
***리버스 프록시는 이러한 포워드 프록시와 반대로 하나 이상의 웹 서버 앞에 존재하는 클라이언트의 요청을 가로채는 서버이다. 이는 프록시가 클라이언트 앞에 있는 포워드 프록시와 다른 점이다.***

</br>

리버스 프록시는 다음과 같은 목적으로 사용된다.
* 로드 밸런싱(Load balancing)
>사용자가 많은 웹사이트일 경우, 리버스 프록시의 로드 밸런싱 솔루션을 제공하여 들어오는 트래픽을 서로 다른 서버로 균등하게 분산시켜 단일 서버가 과부화 되는 것을 방지할 수 있다.
* 외부 공격으로부터의 방어
>리버스 프록시가 설치된 웹 사이트나 서비스는 원본 서버의 ip 주소를 표시할 필요가 없기 때문에 DDOS 공격과 같은 공격을 어렵게 한다.
* GSLB(Glocal server Load Balancing)
>웹사이트가 전 세계의 여러 서버에 배포될 수 있으며, 리버스 프록시는 클라이언트를 지리적으로 가장 가까운 서버로 보낸다. 이를 통해 요청과 응답이 이동해야 하는 거리가 줄어들어 로드 시간을 최소화 할 수 있다.
* 캐싱
>리버스 프록시는 콘텐츠를 캐시에 저장하여 더 빠른 성능을 제공할 수 있다. 예를 들어, 파리에 있는 사용자가 로스엔젤레스에 있는 웹 서버의 리버스 프록시 웹사이트를 방문할 경우, 사용자는 실제 파리의 로컬 리버스 프록시 서버에 연결할 수 있으며, 이 서버는 L.A의 오리진 서버와 통신한다. 이때 프록시 서버는 응답 데이터를 일시적으로 저장하여, 이후 사이트를 검색하는 파리 사용자는 파리의 리버스 프록시 서버에서 로컬로 캐시된 버전을 가져와 훨씬 빠른 성능을 얻을 수 있다.
* SSL 암호화
>각 클라이언트의 SSL(또는 TLS) 통신을 암호화하고 해독하는 것은 오리진 서버의 경우, 비용이 많이 들 수 있다. 이때, 리버스 프록시를 구성하여 들어오는 모든 요청을 해독하고 나가는 모든 응답을 암호화하여 원본 서버에서 중요한 리소스를 확보할 수 있다.

</br>

![Micro Frontend 동작](https://bs-uploads.toptal.io/blackfish-uploads/uploaded_file/file/57220/image-1570616261080-16d12b453e2f6670b9f7b36ba48e63de.png
)

</br>

---

</br>

### **Single - SPA 예제코드 분석 (Coexisting - vue - microfrontends)**
>원본 깃허브 주소: https://github.com/joeldenning/coexisting-vue-microfrontends

![vue_app](https://user-images.githubusercontent.com/50996139/116091582-f0a20580-a6df-11eb-8ee8-12ca12bebb72.png)


</br>

#### **수행순서**
1. root-html-file에 등록한 5000포트로 접속하게 되면, index.html 파일에 등록한 title테그가 주소창에 나타나며, 메인으로 navbar에 등록한 app1과 app2가 나타나게 된다.
2. App1을 클릭할 시, 기존의 navbar에서 구현된 app1과 app2를 포함하여, app1에 등록한 vue파일에서 ‘App1 is working’이라는 문구를 가져온다.
3. App1의 router.js에 등록된 component에 포함된 home이 views/Home.vue을 불러내어 화면에 출력한다.
App2를 클릭할 시, app1과 동일하게 navbar 밑에 app2의 화면을 출력하며 router.js에 컴포넌트로 등록된 Home이 views/Home.vue이 출력된다.
4. Home.vue에 등록되어 있는 HelloWorld.vue 컴포넌트가 home 컴포넌트 아래에 출력된다.
5. App2/About.vue에 접속하면 navbar과 app2의 App.vue, About.vue가 화면에 출력된다

</br>

#### **이미지 가이드** ####
![vue_app2](https://user-images.githubusercontent.com/50996139/116091544-e6800700-a6df-11eb-90c0-c1bfa8f374dc.jpg)


#### **프로젝트 구현에 있어 각 App에 필요한 구성-공통**
VUE_CLi 프로젝트 생성

```
npm install -g @vue/cli
vue create my-project
```

Vue Cli 환경에서 single-spa 사용
```
vue add single-spa
```

root-html-file 작성 시
```
npm install -g serve
```

navbar, app1, app2 사용 시
```
npm i systemjs-webpack-interop
npm i vue-router
```

</br>

---

</br>



#### **프로젝트 구현에 있어 각 App에 필요한 구성 - root-html-file**

1. index.html
```html
 <script type="systemjs-importmap">
      {
        "imports": {
          "navbar": "http://localhost:8080/js/app.js",
          "app1": "http://localhost:8081/js/app.js",
          "app2": "http://localhost:8082/js/app.js",
          "single-spa": "https://cdnjs.cloudflare.com/ajax/libs/single-spa/4.3.7/system/single-spa.min.js",
          "vue": "https://cdn.jsdelivr.net/npm/vue@2.6.10/dist/vue.js",
          "vue-router": "https://cdn.jsdelivr.net/npm/vue-router@3.0.7/dist/vue-router.min.js"
        }
      }
    </script>
````
>각각의 사용할 어플리케이션들에 해당하는 포트를 주소와 함께 import 한다.
```html
<script>
      (function() {
        Promise.all([
          System.import("single-spa"),
          System.import("vue"),
          System.import("vue-router"),
        ]).then(function(modules) {
          var singleSpa = modules[0];
          var Vue = modules[1];
          var VueRouter = modules[2];
 
          Vue.use(VueRouter);
 
          singleSpa.registerApplication(
            "navbar",
            () => System.import("navbar"),
            (location) => true
          );
 
          singleSpa.registerApplication(
            "app1",
            () => System.import("app1"),
            (location) => location.pathname.startsWith("/app1")
          );
 
          singleSpa.registerApplication(
            "app2",
            () => System.import("app2"),
            (location) => location.pathname.startsWith("/app2")
          );
 
          singleSpa.start();
        });
      })();
    </script>
```
>root HTML 파일은 모든 single-spa 어플리케이션이 공유한다. Index.html 파일에서 사용할 어플리케이션을 single-spa로 등록할 수 있다.

>navbar의 location을 true로 하여 메인 페이지로 등록될 수 있도록 한다.

</br>

2. package.json</br>
serve: “serve -s -l 5000”
>root-html-file이 5000포트에서 동작할 수 있도록 설정한다. 이때 위의 동작이 수행될 수 있도록 하기 위해서는 npm install -g serve을 설치해야 한다.

</br>

---

</br>

#### **프로젝트 구현에 있어 각 App에 필요한 구성 - navbar**

</br>

1. src>App.vue
```html
<template>
  <div id="navbar-app">
    <div id="nav">
      <router-link to="/app1">App1</router-link> |
      <router-link to="/app2">App2</router-link>
    </div>
    <router-view></router-view>
  </div>
</template>
 
<style>
#navbar-app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
 
  text-align: center;
}
 
#nav a {
  font-weight: bold;
  color: #2c3e50;
}
 
#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
```
>router-link 태그를 이용하여 각각의 어플리케이션을 불러낼 수 있도록 한다.

> router-view는 현재 라우터가 제공하는 컴포넌트를 렌더링한다

</br>

2. src>main.js
```js
import "./set-public-path";
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import singleSpaVue from "single-spa-vue";
 
Vue.config.productionTip = false;
 
const vueLifecycles = singleSpaVue({
  Vue,
  appOptions: {
    render: (h) => h(App),
    router,
  },
});
export const bootstrap = vueLifecycles.bootstrap;
export const mount = vueLifecycles.mount;
export const unmount = vueLifecycles.unmount;
````
>single-spa 공식 문서(https://single-spa.js.org/docs/ecosystem-vue)에 따르면, vue 2로 코드를 작성할 시, main.js에 single-spa를 동작 시키기 위해 위와 같은 코드를 포함시켜야 한다.

</br>

3. src>router.js
```js
import Router from "vue-router";
 
export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
  ],
});
````
>History 모드를 사용하여 페이지를 다시 로드하지 않고 url을 탐색할 수 있게 한다.

</br>

4. src>set-public-path.js
```js
import { setPublicPath } from "systemjs-webpack-interop";
setPublicPath("navbar", 2);
```
>single-spa의 공식 문서에 따르면, vue-cli에서 single-spa를 사용하기 위해 set-public-path.js를 추가하여야 한다.

>Systemjs-webpack-interop에 대한 자세한 정보는 
https://github.com/joeldenning/systemjs-webpack-interop 를 참고

</br>

5. package.json
* serve: “vue-cli-service serve –port 8080”
* npm i systemjs-webpack-interop을 설치하여 systemjs-webpack-interop 추가 확인
npm i vue-router을 설치하여 dependencies에 vue-router 추가 확인
> npm I systemjs-webpack-interop과 npm I vue-router 두 개의 npm을 설치한 뒤, dependencies에서 systemjs-webpack-interop와 vue-router가 생성되었는지 확인해야 한다.

> package에서 navbar의 포트를 8080으로 설정할 수 있다.

</br>

6. vue-config.js
```js
module.exports = {
  chainWebpack: (config) => {
    config.devServer.set("inline", false);
    config.devServer.set("hot", false);
    // Vue CLI 4 output filename is js/[chunkName].js, different from Vue CLI 3
    // More Detail: https://github.com/vuejs/vue-cli/blob/master/packages/%40vue/cli-service/lib/config/app.js#L29
    if (process.env.NODE_ENV !== "production") {
      config.output.filename(`js/[name].js`);
    }
    config.externals(["vue", "vue-router"]);
  },
  filenameHashing: false,
};

```

>Single-spa 공식 문서에 따르면 shared dependencies를 vue-cli에서 사용하는 것을 권장한다.

</br>

---

</br>

#### **프로젝트 구현에 있어 각 App에 필요한 구성 - app1**

</br>

1. src>App.vue
```html
<template>
  <span id="app1">
    App1 is working!
    <p>comment me on and off to see HMR</p>
    <router-view></router-view>
  </span>
</template>
 
<style>
#app1 {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
```
>navbar에서 router-link로 연결된 app1을 불러내면, 위의 코드가 app1 링크 밑에 나타나게 된다.

</br>

2. scr>Home.vue
```html
<template>
  <div class="home">
    <div>
      <img alt="Vue logo" src="../assets/logo.png">
    </div>
    <router-link to="/app2/about">App2's about page</router-link>
  </div>
</template>
 
<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
 
export default {
  name: 'home',
  components: {
    HelloWorld
  }
}
</script>

```

>navbar에서 app1을 불러낼 경우 router에 app1의 컴포넌트로 등록되어있는 위의 코드가 출력된다.

</br>

3. src>main.js
> navbar>src>main.js와 동일

</br>

4. src>router.js
```js
import Router from 'vue-router'
import Home from './views/Home.vue'
 
export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/app1',
      name: 'home',
      component: Home
    },
  ]
 })
````
> App1의 컴포넌트로 Home을 설정하여, app1의 코드가 출력된 이후 Home.vue의 코드가 아래에 출력되게 된다.

</br>

5. src>set-public-path.js
> navbar>src->set-public.js 참고

</br>

6. package.json
* serve: “vue-cli-service serve --port 8081”
* npm i systemjs-webpack-interop을 설치하여 systemjs-webpack-interop 추가 확인
* npm i vue-router을 설치하여 dependencies에 vue-router 추가 확인

7. vue.config.js
> navbar>vue.config.js와 동일

</br>

---

</br>

#### **프로젝트 구현에 있어 각 App에 필요한 구성 - app2**

</br>

1. src>App.vue
```html
<template>
  <div id="app2">
    App 2 is working
    <p>comment me on and off to see HMR</p>
    <router-view></router-view>
  </div>
</template>
 
<style>
#app2 {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
````

</br>

2. src>main.js
> navbar>src>main.js와 동일

</br>

3. src>router.js
```js
import Router from "vue-router";
import Home from "./views/Home.vue";
 
export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/app2",
      name: "home",a
      component: Home,
    },
    {
      path: "/app2/about",
      name: "about",
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/About.vue"),
    },
  ],
});
````
>router.js에서 동작을 원하는 두 개의 App.vue와 About.vue를 등록시킨다.

</br>

4. src>set-public-path.js
>navbar>src>set-public-path.js 참고

</br>

5. package.json
* serve: “vue-cli-service serve  --port 8082”
>npm i systemjs-webpack-interop을 설치하여 systemjs-webpack-interop 추가 확인

>npm i vue-router을 설치하여 dependencies에 vue-router 추가 확인

</br>

6. vue.config.json
> navbar> vue.config.json와 동일

</br>

7. src>views>Home.vue 
>app1>src>views>Home.vue 참고

>이때 home의 컴포넌트로 Helloworld를 등록

</br>

8. src>components>HelloWorld.vue
```html
<template>
  <div class="hello">
    <router-link to="/app2/about">Go to app2 about page</router-link>
  </div>
</template>
````
>Home.vue에 등록되어 있는 Helloworld 컴포넌트로 인해 App.vue와 Home.vue, HelloWorld.vue가 차례로 하나의 화면에 출력되게 된다. 

>HelloWorld.vue에서 About.vue로 가는 링크를 타게 되면, App.vue, Home.vue, About.vue로 배치되어 화면에 해당 내용이 출력된다.

</br>

---

</br>

### **Single-spa 예제코드 분석 응용 (Dashboard 제작)**
>깃허브 주소: https://github.com/Lajancia/single-spa-dash

![dash1](https://user-images.githubusercontent.com/50996139/116090999-6659a180-a6df-11eb-9039-3d266cdcdf44.png)


</br>

#### **수행순서**

</br>

1. localhost:5000 포트에 메인 어플리케이션으로 등록된 navbar 접속
2. router-link를 통해 app1을 navbar 아래에 나타나게 함. app1 is working이라는 문구가 나타나면 정상 작동하고 있음
3. app1의 children 컴포넌트로 등록된 각각의 router-link를 통해 화면에 나타낼 컴포넌트를 변경 가능

</br>

#### **이미지 가이드**
![dashboard](https://user-images.githubusercontent.com/50996139/116090970-5e016680-a6df-11eb-9bd1-31069f360c15.jpg)


</br>

#### **프로젝트 구현에 있어 각 app에 필요한 구성 - coexisting vue single - spa 참고**

</br>

1. root-html-file>index.html -> 변경 없음
>기존의 코드에서 app2의 포트를 사용하지 않는다.

</br>

2. navbar>App.vue
```html
<template>
  <div id="navbar-app">
    <router-link to="/navbar"><h1>MicroFrontend-single-spa</h1></router-link>
    <div id="nav">
      <router-link to="/app1">게시판</router-link>
    </div>
    <router-view></router-view>
  </div>
</template>
````
>기존의 navbar에서 router-link를 통해 게시판을 불러올 수 있는 링크 하나만을 남겨두도록 한다.

</br>

3. app1>App.vue
```html
<template>
  <div id="app">
    <Header />
 
    <div class="container">
      <!-- class 추가 -->
      <router-view />
    </div>
 
    <Footer />
  </div>
</template>
 
<script>
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
 
export default {
  name: "App",
  components: {
    Header,
    Footer,
  },
};
````
>app1의 프론트엔드를 구성하는 Header와 Footer는 app의 컴포넌트로 등록하여 이용하도록 한다. 

>router-view의 위치에 app1의 컴포넌트가 불러오는 router-link가 위치하게 된다.

</br>

4. app1>components>common>Header.vue
```html
<template>
  <header>
    <h1>
      <router-link to="/"
        ><img alt="Vue logo" src="../../assets/logo.png" width="80"
      /></router-link>
    </h1>
    <div class="menuWrap">
      <ul class="menu">
        <li><router-link to="/app1/write">게시판</router-link></li>
        <li><router-link to="/app1/about">Introduce</router-link></li>
        <li><router-link to="/app1/dashboard1">Dashboard1</router-link></li>
        <li><router-link to="/app1/dashboard2">Dashboard2</router-link></li>
      </ul>
    </div>
  </header>
</template>
````
>Header에 위치한 네 개의 게시판 목록들을 router-link로 배치한다. 이때 선택한 각각의 컴포넌트들은 모두 app1의 children으로 router에 등록되어 있다.

>선택한 컴포넌트는 App.vue의 router-view가 위치한 곳에 나타나게 된다.

</br>

5. app1>components>common>Footer.vue
```html
<template>
  <footer>
    <p>copyRight fyzh99.tistory.com</p>
  </footer>
</template>
 
<script>
export default {};
</script>
 
<style scoped>
footer {
  border-top: 1px solid #35495e;
  text-align: center;
  font-size: 16px;
  color: #41b883;
  margin: 100px 0 0 0;
}
</style>
````
>App.vue의 화면을 구성할 때 가장 아래에 배치되는 페이지다

</br>

6. app1>components>board>Write.vue
```html
<template>
  <div>
    <h1>게시판 등록</h1>
 
    <div class="AddWrap">
      <form>
        <table class="tbAdd">
          <colgroup>
            <col width="15%" />
            <col width="*" />
          </colgroup>
          <tr>
            <th>제목</th>
            <td><input type="text" v-model="subject" ref="subject" /></td>
          </tr>
          <tr>
            <th>내용</th>
            <td><textarea v-model="cont" ref="cont"></textarea></td>
          </tr>
        </table>
      </form>
    </div>
 
    <div class="btnWrap">
      <a href="javascript:;" @click="fnList" class="btn">목록</a>
      <a href="javascript:;" @click="fnAddProc" class="btnAdd btn">등록</a>
    </div>
  </div>
</template>
````
>게시판 children component에서 나타날 게시글을 쓰는 입력을 나타낸다.

</br>

7. app1>router.js
```js
import Router from "vue-router";
import Home from "./views/Home.vue";
import intro from "./views/Homepage.vue";
import dash1 from "./views/dash1.vue";
import dash2 from "./views/dash2.vue";
import List from "@/components/board/List"; //게시판 리스트 컴포넌트 호출
import Write from "@/components/board/Write";
export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/app1",
      name: "home",
      component: {
        template:
          "<div style='text-align:center'> app1 is working <br/><router-view></router-view></div>",
      },
      // component: Home,
 
      children: [
        {
          path: "homepage",
          name: "a",
          component: Home,
        },
        {
          path: "about",
          name: "b",
          component: intro,
        },
        {
          path: "dashboard1",
          name: "c",
          component: dash1,
        },
        {
          path: "dashboard2",
          name: "d",
          component: dash2,
        },
        {
          path: "list",
          name: List,
          component: List,
        },
        {
          path: "write",
          name: Write,
          component: Write,
        },
      ],
    },
  ],
});
````
>App.vue의 path를 등록한 뒤, router-view에서 보일 컴포넌트를 children으로 등록하여 선택에 따라 원하는 children component가 나타날 수 있도록 router에 등록한다.

</br>

---

</br>

### **이슈**

* npm install을 할 경우, package.json 에서 정상적으로 모듈이 설치되지 않는 문제가 발생한다. 
 > npm install -g serve : scripts의 "serve": "serve -s -l 5000" 추가 확인
 
 > vue add single-spa : devDependencies의 "vue-cli-plugin-single-spa": "~1.3.2", dependencies의 "single-spa-vue": "^1.9.0" 추가 확인
 
 > npm i systemjs-webpack-interop : dependencies의 "systemjs-webpack-interop": "^2.3.6" 추가 확인
 
 > npm i vue-router : dependencies의 "vue-router": "^3.5.1" 추가 확인

위의 모듈을 참고하여 직접 추가하고 다시 npm을 설치하게 되면 정상적으로 동작하는 것을 확인할 수 있다.

</br>

* 라우터 설정 이슈 
>router 모듈을 설치하고 routes 폴더 생성 후 index.js에 라우터 사용 설정하여 사용한다.

</br>

* 각각의 컴포넌트에 따라 여러 개의 router-view를 설정할 시, 개별적으로 동작하는 것이 아닌, 모두 동일하게 변경되어 구별되지 않는 문제가 발생
>vue에서의 router-view의 동작 방식과 각각의 이름을 지정하는 방법과 중첩된 라우터를 사용하는 방법에 대한 이해가 필요함.

</br>

### **참고**

>  Single - SPA 
https://single-spa.js.org/

>  VUE-CLI 
https://cli.vuejs.org/

> Vue-router 사용법 참고
https://jeonghwan-kim.github.io/2018/04/07/vue-router.html

>vue- Micro - Frontend Single - SPA root-config 참고
https://github.com/vue-microfrontends/root-config





