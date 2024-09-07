<template>
	<div class="d-flex flex-column justify-content-center" style="width: 90%; margin: auto; padding-block: 2rem;">
		<form @submit.prevent="onSubmit" class="row g-3 needs-validation">
			<div>
				<label for="validationCustom01" class="form-label">Full Name</label>
				<input
					type="text"
					class="form-control"
					id="validationCustom01"
					v-model="form.fullName"
					@blur="validateField('fullName')"
					:class="{ 'is-invalid': form.errors.fullName }" />
				<div class="invalid-feedback">{{ form.errors.fullName }}</div>
			</div>
			<div>
				<label for="validationCustom02" class="form-label">Gender</label>
				<select
					class="form-select form-select-md"
					id="validationCustom02"
					v-model="form.gender"
					@blur="validateField('gender')"
					:class="{ 'is-invalid': form.errors.gender }">
					<option value="">Select your gender</option>
					<option value="male">Male</option>
					<option value="female">Female</option>
				</select>
				<div class="invalid-feedback">{{ form.errors.gender }}</div>
			</div>
			<div>
				<label for="validationCustom03" class="form-label">Religion</label>
				<select
					class="form-select form-select-md"
					id="validationCustom03"
					v-model="form.religion"
					@blur="validateField('religion')"
					:class="{ 'is-invalid': form.errors.religion }">
					<option value="">Select your religion</option>
					<option value="muslim">Islam</option>
					<option value="christian">Christianity</option>
				</select>
				<div class="invalid-feedback">{{ form.errors.religion }}</div>
			</div>
			<div>
				<label for="validationCustom04" class="form-label">Relationship Status</label>
				<select
					class="form-select form-select-md"
					id="validationCustom04"
					v-model="form.relationshipStatus"
					@blur="validateField('relationshipStatus')"
					:class="{ 'is-invalid': form.errors.relationshipStatus }">
					<option value="">Select your relationship status</option>
					<option value="married">Married</option>
					<option value="single">Single</option>
					<option value="singleparent">Single Parent</option>
				</select>
				<div class="invalid-feedback">{{ form.errors.relationshipStatus }}</div>
			</div>
			<div>
				<label for="validationCustom05" class="form-label">Present Residential Address</label>
				<input
					type="text"
					class="form-control"
					id="validationCustom05"
					v-model="form.address"
					@blur="validateField('address')"
					:class="{ 'is-invalid': form.errors.address }" />
				<div class="invalid-feedback">{{ form.errors.address }}</div>
			</div>
			<div>
				<label for="validationCustom06" class="form-label">Occupation</label>
				<input
					type="text"
					class="form-control"
					id="validationCustom06"
					v-model="form.occupation"
					@blur="validateField('occupation')"
					:class="{ 'is-invalid': form.errors.occupation }" />
				<div class="invalid-feedback">{{ form.errors.occupation }}</div>
			</div>
			<div>
				<label for="validationCustom07" class="form-label">Office Address</label>
				<input
					type="text"
					class="form-control"
					id="validationCustom07"
					v-model="form.officeAddress"
					@blur="validateField('officeAddress')"
					:class="{ 'is-invalid': form.errors.officeAddress }" />
				<div class="invalid-feedback">{{ form.errors.officeAddress }}</div>
			</div>
			<div>
				<label for="validationCustom08" class="form-label">Telephone</label>
				<input
					type="tel"
					class="form-control"
					id="validationCustom08"
					v-model="form.telephone"
					@blur="validateField('telephone')"
					:class="{ 'is-invalid': form.errors.telephone }" />
				<div class="invalid-feedback">{{ form.errors.telephone }}</div>
			</div>
			<div>
				<label for="validationCustom09" class="form-label">Date</label>
				<input
					type="date"
					class="form-control"
					id="validationCustom09"
					v-model="form.date"
					@blur="validateField('date')"
					:class="{ 'is-invalid': form.errors.date }" />
				<div class="invalid-feedback">{{ form.errors.date }}</div>
			</div>
			<h3>PROPERTY requirement INFORMATION</h3>
			<div>
				<label for="validationCustom10" class="form-label">Property Required</label>
				<input
					type="text"
					class="form-control"
					id="validationCustom10"
					v-model="form.propertyRequired"
					@blur="validateField('propertyRequired')"
					:class="{ 'is-invalid': form.errors.propertyRequired }" />
				<div class="invalid-feedback">{{ form.errors.propertyRequired }}</div>
			</div>
			<div>
				<label for="validationCustom11" class="form-label">Monthly Budget</label>
				<input
					type="number"
					class="form-control"
					id="validationCustom11"
					v-model="form.monthlyBudget"
					@blur="validateField('monthlyBudget')"
					:class="{ 'is-invalid': form.errors.monthlyBudget }" />
				<div class="invalid-feedback">{{ form.errors.monthlyBudget }}</div>
			</div>
			<div>
				<label for="validationCustom12" class="form-label">Annual Budget</label>
				<input
					type="number"
					class="form-control"
					id="validationCustom12"
					v-model="form.annualBudget"
					@blur="validateField('annualBudget')"
					:class="{ 'is-invalid': form.errors.annualBudget }" />
				<div class="invalid-feedback">{{ form.errors.annualBudget }}</div>
			</div>
			<div>
				<label for="validationCustom13" class="form-label">Area of Requirement</label>
				<input
					type="text"
					class="form-control"
					id="validationCustom13"
					v-model="form.areaRequirement"
					@blur="validateField('areaRequirement')"
					:class="{ 'is-invalid': form.errors.areaRequirement }" />
				<div class="invalid-feedback">{{ form.errors.areaRequirement }}</div>
			</div>
			<div>
				<label for="validationCustom14" class="form-label">Another Area Prefarable</label>
				<input
					type="text"
					class="form-control"
					id="validationCustom14"
					v-model="form.areaPrefarable"
					@blur="validateField('areaPrefarable')"
					:class="{ 'is-invalid': form.errors.areaPrefarable }" />
				<div class="invalid-feedback">{{ form.errors.areaPrefarable }}</div>
			</div>
			<div>
				<label for="validationCustom15" class="form-label">Sponsored</label>
				<input
					type="text"
					class="form-control"
					id="validationCustom15"
					v-model="form.sponsored"
					@blur="validateField('sponsored')"
					:class="{ 'is-invalid': form.errors.sponsored }" />
				<div class="invalid-feedback">{{ form.errors.sponsored }}</div>
			</div>
			<div>
				<label for="validationCustom16" class="form-label">Sponsored Telephone</label>
				<input
					type="tel"
					class="form-control"
					id="validationCustom16"
					v-model="form.sponsoredTel"
					@blur="validateField('sponsoredTel')"
					:class="{ 'is-invalid': form.errors.sponsoredTel }" />
				<div class="invalid-feedback">{{ form.errors.sponsoredTel }}</div>
			</div>
			<div>
				<label for="validationCustom17" class="form-label">Address</label>
				<input
					type="text"
					class="form-control"
					id="validationCustom17"
					v-model="form.sponsoredAddress"
					@blur="validateField('sponsoredAddress')"
					:class="{ 'is-invalid': form.errors.sponsoredAddress }" />
				<div class="invalid-feedback">{{ form.errors.sponsoredAddress }}</div>
			</div>
			<div>
				<label for="validationCustom18" class="form-label">Sponsored Occupation</label>
				<input
					type="text"
					class="form-control"
					id="validationCustom18"
					v-model="form.sponsoredOccupation"
					@blur="validateField('sponsoredOccupation')"
					:class="{ 'is-invalid': form.errors.sponsoredOccupation }" />
				<div class="invalid-feedback">{{ form.errors.sponsoredOccupation }}</div>
			</div>
			<div>
				<label for="validationCustom19" class="form-label">Upload Image</label>
				<input
					type="file"
					class="form-control"
					id="validationCustom19"
					@change="handleFileUpload"
					:class="{ 'is-invalid': form.errors.image }" />
				<div class="invalid-feedback">{{ form.errors.image }}</div>
			</div>
			<div>
				<h3>Notice to Client</h3>
				<div>
					<ol>
						<li>Form fee starting from 20,000.</li>
						<li>The amount paid on this requisition form and consolation is none refundable.</li>
						<li>The money paid not includes transport cost to the property location.</li>
					</ol>
				</div>
			</div>
			<div class="form-check">
				<input
					class="form-check-input"
					type="checkbox"
					id="agreeTerms"
					v-model="form.agreeTerms"
					@blur="validateField('agreeTerms')"
					:class="{ 'is-invalid': form.errors.agreeTerms }" />
				<label class="form-check-label" for="agreeTerms">
					If this notice is acceptable by you submit this form.</label
				>
				<div class="invalid-feedback">{{ form.errors.agreeTerms }}</div>
			</div>

			<button type="submit" class="btn btn-primary">Submit</button>
		</form>
	</div>
</template>

<script>
import { useFormStore } from "../../stores/formStore";
import { useToast } from "vue-toast-notification";

const $toast = useToast();

export default {
  setup() {
    const form = useFormStore();

    const validateField = (field) => {
      form.validateField(field);
    };

    const handleFileUpload = (event) => {
      const file = event.target.files[0];
      if (file) {
        form.updateField("image", file);
        form.errors.image = "";
      } else {
        form.errors.image = "Please upload an image";
      }
    };

    const onSubmit = async () => {
      if (form.validateForm()) {
        await form.submitForm();
        $toast.open({
          message: "Application submitted successfully",
          type: "success",
          position: "top-right",
        });
      } else {
        form.validateForm();
        $toast.open({
          message: "Application not submitted: Fill all the input fields",
          type: "error",
          position: "top-right",
        });
      }
    };

    return {
      form,
      validateField,
      handleFileUpload,
      onSubmit,
    };
  },
};
</script>