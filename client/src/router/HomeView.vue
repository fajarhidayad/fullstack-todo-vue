<script setup lang='ts'>
import ProductCard from '@/components/ProductCard.vue';
import ProductForm from '@/components/ProductForm.vue';
import { useDeleteProduct, useProducts } from '@/composables/useProducts';
import type { Product } from '@/types/types';
import { Loader2Icon } from 'lucide-vue-next';
import { ref, watch } from 'vue';
import { toast } from 'vue-sonner';

const { data: products, isLoading } = useProducts()

const isModalOpen = ref(false)
const product = ref<Product | null>(null)

function setProduct(values: Product) {
  product.value = values
  isModalOpen.value = true;
}

const deleteMutation = useDeleteProduct({
  onSuccessCallback() {
    toast("Deleted successfully")
  },
  onFailCallback(message) {
    toast(message)
  }
})

watch(isModalOpen, (val) => {
  if (val === false) {
    product.value = null;
  }
})

</script>

<template>
  <div class="flex flex-1 flex-col gap-6 p-4 pt-0">
    <div class="flex items-center justify-end">
      <ProductForm v-model:is-modal-open="isModalOpen" :product="product" />
    </div>

    <div v-if="isLoading" class="flex-1 flex items-center justify-center">
      <Loader2Icon class="animate-spin" />
    </div>
    <div v-else class="grid auto-rows-min gap-4 md:grid-cols-3">
      <ProductCard v-for="product in products" :key="product.id" :product="product"
        @@set-current-product="() => setProduct(product)" @@delete-product="() => deleteMutation.mutate(product.id)" />
    </div>
  </div>
</template>

<style lang='scss' scoped></style>
