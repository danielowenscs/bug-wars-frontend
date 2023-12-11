import { defineStore } from "pinia";

export const useCustomerStore = defineStore("customer", {
	state: () => {
		return {
			customers: [],
		};
	},
	actions: {
		setCustomers(customerList) {
			this.customers = customerList;
		},
	},
});
