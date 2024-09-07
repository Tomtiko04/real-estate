<template>
	<div class="d-flex flex-column justify-content-center align-content-center align-items-center">
		<form class="row g-3 needs-validation" @submit.prevent="handleAuth">
			<div>
				<label for="validationCustom01" class="form-label">Email</label>
				<input type="email" class="form-control" id="validationCustom01" v-model="formData.email"/>
				<div class="invalid-feedback">Email is not correct</div>
			</div>
			<div>
				<label for="validationCustom02" class="form-label">Password</label>
				<input type="password" class="form-control" id="validationCustom02" v-model="formData.password"/>
				<div class="invalid-feedback">Email is not correct</div>
			</div>
			<div class="pt-3 d-flex justify-content-center align-items-center">
				<button type="submit" class="btn btn-primary col-12 pt-2 pb-2" :disabled="user.loading">Login</button>
			</div>
		</form>
	</div>
</template>

<script setup>
import {useUserStore} from "@/stores/users";
import { reactive } from "vue";
const user = useUserStore();
const formData = reactive({
	email: "",
	password: "",
})

function handleAuth(){
	user.signIn(formData)
}

</script>
