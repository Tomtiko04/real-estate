import { defineStore } from "pinia";
import { DB, STORAGE } from "../utlis/firebase";
import { collection, addDoc } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { useToast } from "vue-toast-notification";

export const useFormStore = defineStore("form", {
	state: () => ({
		fullName: "",
		gender: "",
		religion: "",
		relationshipStatus: "",
		address: "",
		occupation: "",
		officeAddress: "",
		telephone: "",
		date: "",
		propertyRequired: "",
		monthlyBudget: 0,
		annualBudget: 0,
		areaRequirement: "",
		areaPrefarable: "",
		sponsored: "",
		sponsoredTel: "",
		sponsoredAddress: "",
		sponsoredOccupation: "",
		image: null,
		agreeTerms: false,
		isSubmitting: false,
		errors: {},
	}),
	actions: {
		updateField(field, value) {
			this[field] = value;
		},
		validateField(field) {
			switch (field) {
				case "fullName":
					this.errors.fullName = this.fullName ? "" : "Please enter your full name";
					break;
				case "gender":
					this.errors.gender = this.gender ? "" : "Please choose your gender";
					break;
				// case "religion":
				// 	this.errors.religion = this.religion ? "" : "Please choose a religion";
				// 	break;
				// case "relationshipStatus":
				// 	this.errors.relationshipStatus = this.relationshipStatus
				// 		? ""
				// 		: "Please select your relationship status";
				// 	break;
				case "address":
					this.errors.address = this.address ? "" : "Please enter your present residential address";
					break;
				case "occupation":
					this.errors.occupation = this.occupation ? "" : "Please enter your occupation";
					break;
				// case "officeAddress":
				// 	this.errors.officeAddress = this.officeAddress ? "" : "Office address must be provided";
				// 	break;
				case "telephone":
					this.errors.telephone = this.telephone ? "" : "Phone number must be provided";
					break;
				case "date":
					this.errors.date = this.date ? "" : "Agreement date must be provided";
					break;
				// case "propertyRequired":
				// 	this.errors.propertyRequired = this.propertyRequired ? "" : "This field must be filled";
				// 	break;
				// case "monthlyBudget":
				// 	this.errors.monthlyBudget = this.monthlyBudget > 0 ? "" : "This field must be filled";
				// 	break;
				// case "annualBudget":
				// 	this.errors.annualBudget = this.annualBudget > 0 ? "" : "This field must be filled";
				// 	break;
				// case "areaRequirement":
				// 	this.errors.areaRequirement = this.areaRequirement ? "" : "This field must be filled";
				// 	break;
				case "areaPrefarable":
					this.errors.areaPrefarable = this.areaPrefarable ? "" : "This field must be filled";
					break;
				// case "sponsored":
				// 	this.errors.sponsored = this.sponsored ? "" : "This field must be filled";
				// 	break;
				// case "sponsoredTel":
				// 	this.errors.sponsoredTel = this.sponsoredTel ? "" : "This field must be filled";
				// 	break;
				// case "sponsoredAddress":
				// 	this.errors.sponsoredAddress = this.sponsoredAddress ? "" : "This field must be filled";
				// 	break;
				// case "sponsoredOccupation":
				// 	this.errors.sponsoredOccupation = this.sponsoredOccupation
				// 		? ""
				// 		: "This field must be filled";
				// 	break;
				case "image":
					this.errors.image = this.image ? "" : "Please upload an image";
					break;
				case "agreeTerms":
					this.errors.agreeTerms = !this.agreeTerms && "You have to agree with this term";
					break;
			}
		},
		validateForm() {
			Object.keys(this.$state).forEach((field) => {
				if (field !== "errors") {
					this.validateField(field);
				}
			});
			return Object.values(this.errors).every((error) => !error);
		},
		async uploadImage() {
			try {
				if (this.image) {
					const storageRef = ref(STORAGE, `images/${this.image.name}`);
					const snapshot = await uploadBytes(storageRef, this.image);
					return await getDownloadURL(snapshot.ref);
				}
			} catch (error) {
				console.error("Image upload failed:", error);
				return null;
			}
		},

		async submitForm() {
			const $toast = useToast();
			if (this.validateForm()) {
				try {
					this.isSubmitting = true;
					const imageUrl = await this.uploadImage();
					const formData = {
						fullName: this.fullName || "null",
						gender: this.gender || "null",
						religion: this.religion || "null",
						relationshipStatus: this.relationshipStatus || "null",
						address: this.address || "null",
						occupation: this.occupation || "null",
						officeAddress: this.officeAddress || "null",
						telephone: this.telephone || "null",
						date: this.date || "null",
						propertyRequired: this.propertyRequired || "null",
						monthlyBudget: this.monthlyBudget || "null",
						annualBudget: this.annualBudget || "null",
						areaRequirement: this.areaRequirement || "null",
						areaPrefarable: this.areaPrefarable || "null",
						sponsored: this.sponsored || "null",
						sponsoredTel: this.sponsoredTel || "null",
						sponsoredAddress: this.sponsoredAddress || "null",
						sponsoredOccupation: this.sponsoredOccupation || "null",
						imageUrl: imageUrl || "null",
						agreeTerms: this.agreeTerms || "null",
					};
					await addDoc(collection(DB, "applications"), formData);
					$toast.open({
						message: "Application submitted successfully!",
						type: "success",
						position: "top-right",
						pauseOnHover: true,
					});
				} catch (error) {
					$toast.open({
						message: error,
						type: "error",
						position: "top-right",
						pauseOnHover: true,
						duration: 5000,
					});
				} finally {
					this.isSubmitting = false;
					this.fullName = "";
					this.gender = "";
					this.religion = "";
					this.relationshipStatus = "";
					this.address = "";
					this.occupation = "";
					this.officeAddress = "";
					this.telephone = "";
					this.date = "";
					this.propertyRequired = "";
					this.monthlyBudget = 0;
					this.annualBudget = 0;
					this.areaRequirement = "";
					this.areaPrefarable = "";
					this.sponsored = "";
					this.sponsoredTel = "";
					this.sponsoredAddress = "";
					this.sponsoredOccupation = "";
					this.image = null;
					this.agreeTerms = false;
					this.errors = {};
				}
			}
		},
	},
});
