<template>
  <header>
    <h1>Contacts</h1>
    <ContactsFilter @filter="onFilter" />
    <RouterLink to="/contact/edit"><button>Add Contact</button></RouterLink>
  </header>
  <ContactsList v-if="contacts" @remove="removeContact" :contacts="contacts" />
</template>

<script>
import ContactsList from "@/cmps/ContactsList.vue";
import ContactsFilter from "@/cmps/ContactsFilter.vue";
import { contactService } from "../services/contactService";
import { showErrorMsg, showSuccessMsg } from "../services/eventBusService.js";
export default {
  methods: {
    async removeContact(contactId) {
      try {
        await this.$store.dispatch({ type: "removeContact", contactId });
        showSuccessMsg(`Removed contact ${contactId}`);
      } catch (err) {
        showErrorMsg("Something went wrong...");
        console.log(err)
      }
    },
    onFilter(filterBy) {
      this.$store.dispatch({ type: "setFilterBy", filterBy }); // Dispatch the action to update filter
    },
  },
  async created() {
    this.$store.dispatch({ type: 'loadContacts' })
  },
  computed: {
        contacts() {
            return this.$store.getters.contacts
        }
    },
  components: {
    ContactsList,
    ContactsFilter,
  },
};
</script>

<style>
</style>