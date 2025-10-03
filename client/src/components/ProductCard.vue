<script setup lang='ts'>
import type { Product } from '@/types/types';
import { TrashIcon } from 'lucide-vue-next';
import Button from './ui/button/Button.vue';
import AlertDialog from './ui/alert-dialog/AlertDialog.vue';
import AlertDialogTrigger from './ui/alert-dialog/AlertDialogTrigger.vue';
import AlertDialogContent from './ui/alert-dialog/AlertDialogContent.vue';
import AlertDialogTitle from './ui/alert-dialog/AlertDialogTitle.vue';
import AlertDialogDescription from './ui/alert-dialog/AlertDialogDescription.vue';
import AlertDialogHeader from './ui/alert-dialog/AlertDialogHeader.vue';
import AlertDialogFooter from './ui/alert-dialog/AlertDialogFooter.vue';
import AlertDialogCancel from './ui/alert-dialog/AlertDialogCancel.vue';
import AlertDialogAction from './ui/alert-dialog/AlertDialogAction.vue';

interface Props {
  product: Product;
}

const props = defineProps<Props>()
const emit = defineEmits(["@setCurrentProduct", '@deleteProduct'])

</script>

<template>
  <div class="rounded-xl border border-gray-300 shadow-2xs overflow-hidden">
    <div class="bg-gray-100 h-40"></div>
    <div class="p-4">
      <!-- <div class="flex items-center justify-end mb-3">
        <StarIcon :size="15" />
        <p class="text-xs ml-2 font-medium">4.5</p>
        <p class="text-xs ml-1 text-gray-500">(1,045)</p>
      </div> -->

      <h3 class="font-medium text-lg">{{ props.product.name }}</h3>

      <div class="grid grid-cols-2 gap-3 my-3">
        <div class="space-y-1">
          <p class="text-gray-500 text-sm">Price</p>
          <p class="font-medium">${{ props.product.price }}</p>
        </div>
        <div class="space-y-1">
          <p class="text-gray-500 text-sm">Stocks</p>
          <p class="font-medium">{{ props.product.stock }} Unit</p>
        </div>
      </div>

      <div class="flex space-x-4 ">
        <Button class="flex-1" @click="emit('@setCurrentProduct')">Edit product</Button>
        <AlertDialog>
          <AlertDialogTrigger>
            <Button variant="destructive">
              <TrashIcon />
            </Button>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Are you sure?</AlertDialogTitle>
              <AlertDialogDescription>
                This action cannot be undone. This will permanently delete product.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogAction @click="emit('@deleteProduct')">Continue</AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </div>
    </div>
  </div>
</template>

<style lang='scss' scoped></style>
