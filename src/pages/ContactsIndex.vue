<template>
  <header>
        <h1>Contacts</h1>
        <!-- <CarFilter @filter="onFilter" /> -->
        <!-- <RouterLink to="/car/edit" ><button>Add a Car</button></RouterLink> -->
    </header>
    <ContactsList v-if="contacts" @remove="removeContact" :contacts="contacts" />
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
    methods: {
        async removeContact(contactId) {
            try {
                await contactService.deleteContact(contactId)

                const idx = this.contacts.findIndex(contact => contact._id === contactId)
                this.contacts.splice(idx, 1)

            } catch (err) {
                console.log('Something went wrong...')
            }
        },
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