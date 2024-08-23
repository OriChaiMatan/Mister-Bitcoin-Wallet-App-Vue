<template>
  <header>
        <h1>Contacts</h1>
        <!-- <CarFilter @filter="onFilter" /> -->
        <!-- <RouterLink to="/car/edit" ><button>Add a Car</button></RouterLink> -->
    </header>
    <ContactsList v-if="contacts" :contacts="contacts" />
</template>

<script>
import ContactsList from '@/cmps/ContactsList.vue'
import { contactService } from '../services/contactService'
export default {
    data() {
        return {
            contacts: null,
        }
    },
    async created() {
        this.contacts = await contactService.getContacts()
    },
    components: {
        ContactsList,
        // CarFilter,
    }

}
</script>

<style>

</style>