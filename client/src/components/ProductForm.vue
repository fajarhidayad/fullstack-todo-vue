<script setup lang='ts'>
import { productSchema } from '@/api/products';
import Button from '@/components/ui/button/Button.vue';
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle
} from "@/components/ui/dialog";
import { FormField } from '@/components/ui/form';
import FormControl from '@/components/ui/form/FormControl.vue';
import FormItem from '@/components/ui/form/FormItem.vue';
import FormLabel from '@/components/ui/form/FormLabel.vue';
import FormMessage from '@/components/ui/form/FormMessage.vue';
import Input from '@/components/ui/input/Input.vue';
import { useCreateProduct, useUpdateProduct } from '@/composables/useProducts';
import type { Product } from '@/types/types';
import { toTypedSchema } from "@vee-validate/zod";
import { PlusIcon } from 'lucide-vue-next';
import { useForm } from 'vee-validate';
import { computed, watch } from 'vue';
import { toast } from 'vue-sonner';
import Textarea from './ui/textarea/Textarea.vue';

interface Props {
  product: Product | null
  isModalOpen: boolean
}

const props = defineProps<Props>()
const emit = defineEmits(['update:isModalOpen'])

const isModalOpen = computed({
  get: () => props.isModalOpen,
  set: (val) => emit('update:isModalOpen', val),
})

const createProductSchema = toTypedSchema(productSchema)
const form = useForm({
  validationSchema: createProductSchema,
})

const createMutation = useCreateProduct({
  onSuccessCallback: () => onSuccessSubmit('Product successfully created'),
  onFailCallback: onFailSubmit
})

const updateMutation = useUpdateProduct({
  onSuccessCallback: () => onSuccessSubmit('Product successfully updated'),
  onFailCallback: onFailSubmit
})

const onSubmitForm = form.handleSubmit((values) => {
  if (props.product) {
    updateMutation.mutate({
      id: props.product.id,
      payload: values
    })
  } else {
    createMutation.mutate(values)
  }
})

function onSuccessSubmit(message: string) {
  isModalOpen.value = false;
  toast(message)
}

function onFailSubmit(message: string) {
  toast('Failed to submit', {
    description: message
  })
}

watch(() => [props.product], () => {
  if (props.product) {
    form.resetForm({
      values: {
        ...props.product
      }
    })
  }
})

</script>

<template>
  <Dialog :open="props.isModalOpen" @update:open="emit('update:isModalOpen', $event)">
    <!-- <DialogTrigger as-child> -->
    <Button variant="default" @click="() => isModalOpen = true">
      <PlusIcon /> Add new product
    </Button>
    <!-- </DialogTrigger> -->
    <DialogContent class="sm:max-w-[425px]">
      <DialogHeader>
        <DialogTitle>
          <p v-if="props.product">Update {{ product?.name }}</p>
          <p v-else>Add new product</p>
        </DialogTitle>
      </DialogHeader>
      <form id="createProductForm" @submit="onSubmitForm" class="space-y-3">
        <FormField v-slot="{ componentField }" name="name">
          <FormItem>
            <FormLabel>Product name</FormLabel>
            <FormControl>
              <Input type="text" placeholder="Smartphone" v-bind="componentField" />
            </FormControl>
            <FormMessage />
          </FormItem>
        </FormField>

        <FormField v-slot="{ componentField }" name="description">
          <FormItem>
            <FormLabel>Description</FormLabel>
            <FormControl>
              <Textarea v-bind="componentField" />
            </FormControl>
            <FormMessage />
          </FormItem>
        </FormField>

        <FormField v-slot="{ componentField }" name="price">
          <FormItem>
            <FormLabel>Price</FormLabel>
            <FormControl>
              <Input type="number" v-bind="componentField" />
            </FormControl>
            <FormMessage />
          </FormItem>
        </FormField>

        <FormField v-slot="{ componentField }" name="stock">
          <FormItem>
            <FormLabel>Stock</FormLabel>
            <FormControl>
              <Input type="number" v-bind="componentField" />
            </FormControl>
            <FormMessage />
          </FormItem>
        </FormField>

        <!-- <FormField v-slot="{ componentField }" name="image">
          <FormItem>
            <FormLabel>Product image</FormLabel>
            <FormControl>
              <Input type="file" v-bind="componentField" />
            </FormControl>
            <FormMessage />
          </FormItem>
        </FormField> -->

        <DialogFooter>
          <Button type="submit" form="createProductForm">
            Save changes
          </Button>
        </DialogFooter>
      </form>

    </DialogContent>
  </Dialog>
</template>

<style lang='scss' scoped></style>
