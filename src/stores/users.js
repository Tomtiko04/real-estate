import { defineStore } from "pinia";
import router from "@/router";

import { AUTH, DB } from "@/utlis/firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { getDoc, doc, setDoc, updateDoc } from "firebase/firestore";
import { useToast } from "vue-toast-notification";

const DEFAULT_USER = {
	uid: null,
	email: null,
	isAdmin: null,
};

const $toast = useToast();

export const useUserStore = defineStore("user", {
	state: () => ({
		loading: false,
		user: DEFAULT_USER,
		auth: false,
	}),
	getters: {},
	actions: {
		setUser(user) {
			this.user = { ...this.user, ...user };
			this.auth = true;
		},
		async getUserProfile(uid) {
			try {
				const useRef = await getDoc(doc(DB, "users", uid));
				if (!useRef.exists()) {
					$toast.open({
						message: "Account does not exist",
						type: "error",
						position: "top-right",
					});
					throw new Error("Account not found")
				}
				return useRef.data;
			} catch (error) {
				$toast.open({
					message: "Account does not exist",
					type: "error",
					position: "top-right",
				});
				throw new Error(error)
			}
		},
		async signIn(formData) {
			try {
				this.loading = true;
				const response = await signInWithEmailAndPassword(AUTH, formData.email, formData.password);
				const userData = await this.getUserProfile(response.user.uid);
				this.setUser(userData);
				$toast.open({
					message: "User Loggin",
					type: "success",
					position: "top-right",
				});
				router.push({ name: "applications" });
			} catch (error) {
				$toast.open({
					message: error.message,
					type: "error",
					position: "top-right",
				});
			} finally {
				this.loading = false;
				this.formData.email = "";
				this.formData.password = "";
			}
		},
		async register(formData) {
			try {
				this.loading = true;
				const response = await createUserWithEmailAndPassword(
					AUTH,
					formData.email,
					formData.password
				);

				const newUser = {
					uid: response.user.uid,
					email: response.user.email,
					isAdmin: true,
				};

				this.setUser(newUser);

				await setDoc(doc(DB, "users", response.user.uid), newUser);
				$toast.open({
					message: "Account created successfully",
					type: "success",
					position: "top-right"
				})

				router.push({ name: "applications" });
			} catch (error) {
				$toast.open({
					message: error.message,
					type: "error",
					position: "top-right",
				});
			} finally {
				this.loading = false;
			}
		},
	},
});
