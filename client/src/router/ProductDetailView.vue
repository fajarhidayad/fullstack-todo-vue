<script setup lang='ts'>
import ProductDetail from '@/components/ProductDetail.vue';
import { ArrowLeft } from 'lucide-vue-next';
import { useRouter } from 'vue-router';

const router = useRouter()

</script>

<template>
  <div class="flex flex-1 flex-col gap-6 p-4 pt-0">
    <div class="flex">
      <Button variant="link" @click="router.back" class="flex items-center space-x-2 hover:underline">
        <ArrowLeft :size="15" /> <span>Back to List</span>
      </Button>
    </div>

    <ProductDetail />
  </div>
</template>

<style lang='scss' scoped></style>
