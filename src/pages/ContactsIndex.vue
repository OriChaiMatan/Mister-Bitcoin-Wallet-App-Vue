<template>
  <div class="contact-header">
    <h1>Contacts</h1>
    <section class="action-contacts">
      <ContactsFilter @filter="onFilter" />
      <RouterLink to="/contact/edit"><button>Add Contact</button></RouterLink>
    </section>
  </div>
  <ContactsList v-if="contacts" @remove="removeContact" :contacts="contacts" />
</template>

<script>
import ContactsList from "@/cmps/ContactsList.vue";
import ContactsFilter from "@/cmps/ContactsFilter.vue";
import { showErrorMsg, showSuccessMsg } from "../services/eventBusService.js";
export default {
  methods: {
    async removeContact(contactId) {
      try {
        await this.$store.dispatch({ type: "removeContact", contactId });
        showSuccessMsg(`Removed contact ${contactId}`);
      } catch (err) {
        showErrorMsg("Something went wrong...");
        console.log(err);
      }
    },
    onFilter(filterBy) {
      this.$store.dispatch({ type: "setFilterBy", filterBy }); // Dispatch the action to update filter
    },
  },
  async created() {
    this.$store.dispatch({ type: "loadContacts" });
  },
  computed: {
    contacts() {
      return this.$store.getters.contacts;
    },
  },
  components: {
    ContactsList,
    ContactsFilter,
  },
};
</script>

<style lang="scss">
.contact-header {
  text-align: center;
  margin-bottom: 2rem;

  .action-contacts{
    display: flex;
  }

  h1 {
    font-size: 2.5rem;
    margin-bottom: 1rem;
    color: white;
  }

  // .contact-filter {
  //   margin-bottom: 1.5rem;
  // }

  button {
    padding: 0.5rem 1rem;
    background-color: #7d63ca;
    color: white;
    border: none;
    border-radius: 5px;
    font-size: 1rem;
    cursor: pointer;
    transition: background-color 0.3s;
    align-content: center;

    &:hover {
      background-color: #947bd3;
    }

    &:focus {
      outline: none;
      box-shadow: 0 0 0 3px rgba(123, 81, 220, 0.5);
    }
  }
}
</style>