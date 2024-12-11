<script setup>
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout.vue";
import Tabs from 'primevue/tabs';
import TabList from 'primevue/tablist';
import Tab from 'primevue/tab';
import TabPanels from 'primevue/tabpanels';
import TabPanel from 'primevue/tabpanel';
import {h, ref} from "vue";
import PendingWithdrawal from "@/Pages/Pending/Withdrawal/PendingWithdrawal.vue";
import PendingRevokePamm from "@/Pages/Pending/RevokePamm/PendingRevokePamm.vue";

const tabs = ref([
    {
        title: 'withdrawal_pending',
        component: h(PendingWithdrawal)
    },
    {
        title: 'revoke_pamm',
        component: h(PendingRevokePamm),
    }
]);
</script>

<template>
    <AuthenticatedLayout :title="$t('public.pending')">
        <Tabs class="flex flex-col gap-5 self-stretch" :value="0">
            <TabList>
                <Tab v-for="(tab, index) in tabs" :key="tab.title" :value="index">
                    {{ $t(`public.${tab.title}`) }}
                </Tab>
            </TabList>
            <TabPanels>
                <TabPanel v-for="(tab, index) in tabs" :key="tab.component" :value="index">
                    <component :is="tab.component" />
                </TabPanel>
            </TabPanels>
        </Tabs>
    </AuthenticatedLayout>
</template>
