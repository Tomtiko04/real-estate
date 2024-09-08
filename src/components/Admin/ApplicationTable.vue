<template>
	<div>
		<table class="table table-responsive table-hover table-bordered vertical-align: middle">
			<thead class="table-light">
				<tr>
					<th scope="col"></th>
					<th scope="col">Image</th>
					<th scope="col">Full Name</th>
					<th scope="col">Date</th>
          <th scope="col">Area preferable</th>
					<th scope="col">Occupation</th>
					<th scope="col">Phone Number</th>
          <th scope="col">open</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<th scope="row">1</th>
					<td>Mark</td>
					<td>Otto</td>
					<td>@mdo</td>
				</tr>
				<tr>
					<th scope="row">2</th>
					<td>Jacob</td>
					<td>Thornton</td>
					<td>@fat</td>
				</tr>
				<tr>
					<th scope="row">3</th>
					<td colspan="2">Larry the Bird</td>
					<td>@twitter</td>
				</tr>
			</tbody>
		</table>
	</div>
</template>

<script setup>
import { watch, watchEffect } from "vue";

const data = ref([]);
watch(data, ()=>{
  
})
</script>

<!-- watch(
  source,
  (newValue, oldValue) => {
    // executed immediately, then again when `source` changes
  },
  { immediate: true }
) -->
