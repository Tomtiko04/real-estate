<template>
	<div>
		<table class="table table-responsive table-hover table-bordered vertical-align: middle">
			<thead class="table-light">
				<tr>
					<th scope="col"></th>
					<th scope="col">Image</th>
					<th scope="col">Full Name</th>
					<th scope="col">Gender</th>
					<th scope="col">Date</th>
					<th scope="col">Area preferable</th>
					<th scope="col">Occupation</th>
					<th scope="col">Phone Number</th>
					<th scope="col"></th>
				</tr>
			</thead>
			<tbody v-for="(data, index) in applicationsData" :key="data.id">
				<tr>
					<th scope="row" class="text-center">{{ index + 1 }}</th>
					<td>
						<div style="width: 70px; height: 50px">
							<img :src="data.imageUrl" class="img-fluid img-thumbnail rounded float-start" />
						</div>
					</td>
					<td>{{ data.fullName }}</td>
					<td>{{ data.gender }}</td>
					<td>{{ data.date }}</td>
					<td>{{ data.areaPrefarable }}</td>
					<td>{{ data.occupation }}</td>
					<td>{{ data.telephone }}</td>
					<td>:</td>
				</tr>
			</tbody>
		</table>
	</div>
</template>

<script setup>
import { useApplicationsStore } from "@/stores/applicationsStore";
import { onMounted, ref } from "vue";

const applicationsData = ref([]);

const applications = useApplicationsStore();

onMounted(async () => {
	await applications.getAllApplication();
	applicationsData.value = applications.data;
	console.log("applicationsData:", applicationsData.value);
});
</script>
