<template>
	<div class="d-flex justify-content-center align-content-center align-items-center">
		<div class="spinner-grow text-primary" style="margin-block: 10em;" role="status" v-show="user.loading">
			<span class="visually-hidden">Loading...</span>
		</div>
		<div v-show="!user.loading">
			<div class="text-center" style="padding-block: 4em">
				<h1>OLA MO'S REAL ESTATE MANAGEMENT LTD</h1>
				<h4>(LAND AND PROPERTY REQUISITION FORM)</h4>
			</div>
			<LoginForm />
		</div>
	</div>
</template>

<script setup>
import LoginForm from "@/components/Admin/LoginForm.vue";
import { useUserStore } from "@/stores/users";
const user = useUserStore();
</script>
