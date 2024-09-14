import { defineStore } from "pinia";
import { DB } from "@/utlis/firebase";
import { collection, getDocs } from "firebase/firestore";

export const useApplicationsStore = defineStore("applicationData", {
	state: () => ({
		data: [],
		loading: false,
	}),

	actions: {
		async getAllApplication() {
			try {
				this.loading = true;
				const applicationsCollection = collection(DB, "applications");
				const snapshot = await getDocs(applicationsCollection); 

				let documents = [];
				snapshot.docs.forEach((doc) => {
					documents.push({ ...doc.data(), id: doc.id });
				});
				this.data = documents;
			} catch (error) {
				throw new Error("Something went wrong");
			} finally {
				this.loading = false;
			}
		},
	},
});
