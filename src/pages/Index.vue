<template>
  <q-page class="flex flex-center">
    <img
      alt="Quasar logo"
      src="~assets/quasar-logo-vertical.svg"
      style="width: 200px; height: 200px"
    />
  </q-page>
</template>

<script>
export default {
  name: "PageIndex",
  mounted() {
    console.log("process.env", process.env.NODE_ENV, process.env.API_URL);
  },
};
</script>
