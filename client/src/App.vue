<script setup lang="ts">
import AppSidebar from '@/components/AppSidebar.vue';
import Breadcrumb from './components/ui/breadcrumb/Breadcrumb.vue';
import BreadcrumbItem from './components/ui/breadcrumb/BreadcrumbItem.vue';
import BreadcrumbList from './components/ui/breadcrumb/BreadcrumbList.vue';
import BreadcrumbPage from './components/ui/breadcrumb/BreadcrumbPage.vue';
import Separator from './components/ui/separator/Separator.vue';
import { SidebarInset, SidebarProvider, SidebarTrigger } from './components/ui/sidebar';
import { Toaster } from '@/components/ui/sonner'
import 'vue-sonner/style.css'

</script>

<template>
  <Toaster />
  <SidebarProvider>
    <AppSidebar />
    <SidebarInset>
      <header
        class="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
        <div class="flex items-center gap-2 px-4">
          <SidebarTrigger class="-ml-1" />
          <Separator orientation="vertical" class="mr-2 h-4" />
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbPage>Home</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </header>
      <RouterView />
    </SidebarInset>
  </SidebarProvider>
</template>

<style scoped></style>
