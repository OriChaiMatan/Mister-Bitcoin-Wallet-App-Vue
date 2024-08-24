<template>
  <form v-if="contact" @submit.prevent="onSave" class="contact-edit">
    <input v-model="contact.name" type="text" />
    <input
      v-model="contact.phone"
      type="tel"
      placeholder="123-456-7890"
      pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
      required
    />
    <input v-model="contact.email" type="email" required />
    <section class="action">
      <RouterLink to="/contact"><button>Back</button></RouterLink>
      <button>Save</button>
    </section>
  </form>
</template>

<script>
import { contactService } from "../services/contactService";
import { showErrorMsg, showSuccessMsg } from '../services/eventBusService';

export default {
  data() {
    return {
      contact: null,
    };
  },
  methods: {
    async onSave() {
      try {
        await contactService.saveContact(this.contact);
        showSuccessMsg(`Save contact ${this.contact._id}`)
        this.$router.push("/contact");
      } catch (error) {
        showErrorMsg("Something was worng...");
      }
    },
  },
  async created() {
    const { id: contactId } = this.$route.params;
    if (contactId) {
      this.contact = await contactService.getContactById(contactId);
    } else {
      this.contact = contactService.getEmptyContact();
    }
  },
};
</script>

<style lang="scss">
.contact-edit {
  display: grid;
  justify-items: start;
  gap: 10px;

  padding: 10px;
  background-color: darkseagreen;

  .action {
    justify-self: end;
    display: flex;
    gap: 6px;
  }
}
</style>