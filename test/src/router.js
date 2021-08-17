import Vue from "vue";
import VueRouter from "vue-router";
import Home from "./views/Home";
import About from "./views/About";

Vue.use(VueRouter);

// 라우터 정의
// 어떤 컴포넌트가 연결될지 여기에서 정의한다.
const router = new VueRouter({
    mode: "history",
    routes: [{
        path:"/", 
        component: Home
    }, // 기본 경로일 떄는 Home을 불러줘!
    {
        path:"/",
        component: Home} // 기본 경로일 떄는 Home을 불러줘!
    ]
})