<template>
  <div class="w-screen h-screen bg-amber-600">Home</div>
</template>

<script>
import { ref, onBeforeMount } from 'vue'
import { info } from '../api/user'

export default {
  setup() {
    const userInfo = ref(null)
    onBeforeMount(async () => {
      const res = await info({ id: 1 })
      userInfo.value = res
    })
    return {
      userInfo
    }
  }
}
</script>

<style scoped></style>
