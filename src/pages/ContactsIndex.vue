<template>
  <header>
        <h1>Contacts</h1>
        <ContactsFilter @filter="onFilter" />
        <RouterLink to="/contact/edit" ><button>Add Contact</button></RouterLink>
    </header>
    <ContactsList v-if="contacts" @remove="removeContact" :contacts="contacts" />
</template>

<script>
import ContactsList from '@/cmps/ContactsList.vue'
import ContactsFilter from '@/cmps/ContactsFilter.vue'
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
        async onFilter(filterBy) {
            this.contacts = await contactService.getContacts(filterBy)
        }
    },
    async created() {
        this.contacts = await contactService.getContacts()
    },
    components: {
        ContactsList,
        ContactsFilter,
    }

}
</script>

<style>

</style>