<template>
  <div class="w-screen h-screen flex justify-center items-center bg-amber-600">
    <div v-if="userInfo">
      <p class="font-mono text-white text-2xl">{{ userInfo.content }}</p>
    </div>
  </div>
</template>

<script>
import { ref, onBeforeMount } from 'vue'
import { text } from '../api/user'

export default {
  setup() {
    const userInfo = ref(null)
    onBeforeMount(async () => {
      const res = await text({ export: 'json' })
      userInfo.value = res
    })
    return {
      userInfo
    }
  }
}
</script>

<style scoped></style>
