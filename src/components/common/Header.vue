<script setup>
import store from "@/scripts/store";
import router from "@/scripts/router";
import axios from "axios";
function logout() {
    axios.post("/api/account/logout").then(() => {
        store.commit("setAccount", 0);
        router.push({ path: "/mobileoffice" });
    });
}
</script>
<template>
    <header class="blog-header lh-1 py-3">
        <div class="row flex-nowrap justify-content-center align-items-center">
            <div class="col-4 pt-1"><h5 class="link-secondary" href="#">모바일 오피스 좌석 예약</h5></div>
            <div class="col-4 d-flex justify-content-center align-items-center">
                <div class="dropdown fs-2 mb-3">
                    <button class="btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
                            <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"></path>
                            <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"></path>
                        </svg>
                        admin
                    </button>
                    <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="#">비밀번호 변경</a></li>
                        <li><hr class="dropdown-divider" /></li>
                        <li><a class="dropdown-item" href="#" @click="logout">로그아웃</a></li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="row flex-nowrap justify-content-start align-items-center">
            <nav class="col-4 pt-1">
                <div class="dropdown">
                    <a class="btn btn-secondary dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false"> Offfice </a>
                    <ul class="dropdown-menu list-unstyled mb-0">
                        <li>
                            <a class="dropdown-item d-flex align-items-center gap-2 py-2" href="#"><span class="d-inline-block bg-success rounded-circle p-1"></span> 성심빌딩 3층 </a>
                        </li>
                        <li>
                            <a class="dropdown-item d-flex align-items-center gap-2 py-2" href="#"><span class="d-inline-block bg-primary rounded-circle p-1"></span> 성심빌딩 1층 </a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    </header>
</template>

<style scoped>
.blog-header {
    border-bottom: 1px solid #e5e5e5;
}
</style>
