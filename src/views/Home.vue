<!-- eslint-disable no-unused-vars -->
<!-- eslint-disable vue/multi-word-component-names -->

<template>
	<div>THIS IS THE HOME PAGE</div>
	<div>
		<div v-for="customer in customers" :key="customer.customerId">
			{{ `${customer.firstName}  ${customer.lastName}` }}
		</div>
	</div>
</template>

<script setup>
import CustomerService from "../services/CustomerService.js";
import { onMounted, computed } from "vue";

import { useCustomerStore } from "../stores/CustomerStore.js";

const custStore = useCustomerStore();

onMounted(async () => {
	await CustomerService.getCustomers().then((result) => {
		custStore.setCustomers(result.data);
	});
});
const customers = computed(() => {
	return custStore.customers;
});
</script>

<style lang="scss" scoped></style>
