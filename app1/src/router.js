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
