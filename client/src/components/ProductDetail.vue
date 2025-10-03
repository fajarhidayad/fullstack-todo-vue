<script setup lang='ts'>
import { useProductById } from '@/composables/useProducts';
import { useRoute } from 'vue-router';
import Button from './ui/button/Button.vue';
import { Loader2Icon, ShoppingCartIcon } from 'lucide-vue-next';

const route = useRoute()
const id = Number(route.params.id as string)
const { data, isLoading } = useProductById(id)

</script>

<template>
  <div class="grid grid-cols-5 gap-4">
    <div class="col-span-2 border border-gray-300 rounded-lg shadow-2xs p-5">
      <div class="bg-gray-200 rounded-xl w-full h-[300px]"></div>
    </div>
    <div class="col-span-3 border border-gray-300 rounded-lg shadow-2xs p-5 flex">
      <div v-if="isLoading" class="flex-1 flex items-center justify-center">
        <Loader2Icon class="animate-spin" />
      </div>
      <div v-else class="flex-1 flex flex-col">
        <h1 class="text-3xl font-medium mb-3">{{ data?.name }}</h1>
        <h3 class="text-xl mb-5 font-bold">$ {{ data?.price }}</h3>

        <div class="mb-10">
          <p class="text-sm">Description:</p>
          <p class="text-sm text-gray-500" v-if="data?.description">{{ data?.description }}</p>
          <p class="text-sm text-gray-500" v-else>No description</p>
        </div>

        <p>Stocks: {{ data?.stock }} left</p>

        <div class="flex mt-auto gap-x-5">
          <Button variant="outline">
            <ShoppingCartIcon /> Add to cart
          </Button>
          <Button>
            Buy now
          </Button>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang='scss' scoped></style>
