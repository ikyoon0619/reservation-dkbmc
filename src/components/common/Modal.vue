<script setup>
import { defineProps } from "vue";

const props = defineProps({
    show: Boolean,
});
</script>

<template>
    <Teleport to=".outer">
        <div v-if="props.show" class="modal modal-mask d-block py-5" tabindex="-1" role="dialog" id="modalSignin">
            <div class="modal-dialog" role="document">
                <div class="modal-content rounded-4 shadow">
                    <div class="modal-header p-5 pb-4 border-bottom-0">
                        <!-- <h1 class="modal-title fs-5" >Modal title</h1> -->
                        <h1 class="fw-bold mb-0 fs-2">Sign up for free</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" @click="$emit('close')"></button>
                    </div>

                    <div class="modal-body p-5 pt-0">
                        <form class="">
                            <div class="form-floating mb-3">
                                <input type="email" class="form-control rounded-3" id="floatingInput" placeholder="name@example.com" />
                                <label for="floatingInput">Email address</label>
                            </div>
                            <div class="form-floating mb-3">
                                <input type="password" class="form-control rounded-3" id="floatingPassword" placeholder="Password" />
                                <label for="floatingPassword">Password</label>
                            </div>
                            <button class="w-100 mb-2 btn btn-lg rounded-3 btn-primary" type="submit">Sign up</button>
                            <small class="text-muted">By clicking Sign up, you agree to the terms of use.</small>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </Teleport>
</template>

<style>
.modal-mask {
    position: fixed;
    z-index: 9998;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    transition: opacity 0.3s ease;
}
</style>
