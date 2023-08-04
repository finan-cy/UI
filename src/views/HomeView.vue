<template>
  <main class="container">
    <h1>Home</h1>
    <Bar id="my-chart-id" :options="chartOptions" :data="chartData" />
    <p>Latest entries</p>
  </main>
</template>

<script setup>
import { Bar } from 'vue-chartjs'
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale
} from 'chart.js'
import { ref } from 'vue'

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

const chartData = ref({
  labels: ['Need', 'Fun', 'Saving'],
  datasets: [{ data: [50, 30, 20] }]
})
const chartOptions = ref({ responsive: true })
</script>

<style scoped></style>
