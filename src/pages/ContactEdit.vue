<template>
  <form v-if="contact" @submit.prevent="onSave" class="contact-edit">
    <label>Enter Full-Name:</label>
    <input v-model="contact.name" type="text" placeholder="Your-Full-Name" />
    <label>Enter Phone-Number:</label>
    <input
      v-model="contact.phone"
      type="tel"
      placeholder="123-456-7890"
      pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
      required
    />
    <label>Enter Email:</label>
    <input
      v-model="contact.email"
      type="email"
      placeholder="your-email@example.com"
      required
    />
    <section class="action">
      <RouterLink to="/contact"><button>Back</button></RouterLink>
      <button>Save</button>
    </section>
  </form>
</template>

<script>
import { contactService } from "../services/contactService";
import { showErrorMsg, showSuccessMsg } from "../services/eventBusService";

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
        showSuccessMsg(`Save contact ${this.contact._id}`);
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
  grid-template-columns: 1fr;
  gap: 15px;
  max-width: 400px;
  margin: 20px auto;
  padding: 20px;
  background-color: #2d2935;
  border: 1px solid #654bc1;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);

  label {
    font-weight: bold;
    color: #fff;
  }

  input {
    padding: 8px;
    background-color: #181420;
    border: 1px solid #654bc1;
    border-radius: 4px;
    font-size: 1rem;
    width: 100%;
    box-sizing: border-box;
    color: #fff;
  }

  input[type="text"],
  input[type="tel"],
  input[type="email"] {
    &:focus {
      border-color: #c5c5c5;
      outline: none;
      box-shadow: 0 0 5px rgba(76, 175, 80, 0.3);
    }
  }

  .action {
    display: flex;
    justify-content: center;
    gap: 10px;

    button {
      padding: 8px 15px;
      border: none;
      border-radius: 4px;
      font-size: 1rem;
      cursor: pointer;
      transition: background-color 0.3s ease;
      background-color: #181420;
      border: 1px solid #654bc1;
      color: white;

      &:hover {
        background-color: #4933b7;
        color: white;
      }

      &.back-btn {
        background-color: #ddd;
        &:hover {
          background-color: #bbb;
        }
      }
    }
  }
}
</style>