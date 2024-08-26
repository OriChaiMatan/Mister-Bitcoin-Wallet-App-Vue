<template>
  <section v-if="contact" class="contact-details">
    <img
        :src="`https://api.dicebear.com/9.x/adventurer-neutral/svg?seed=${contact._id}`"
        alt="Contact Avatar"
      />
    <h2>{{ contact.name }}</h2>
    <h3>Email: {{ contact.email }}</h3>
    <h3>Phone: {{ contact.phone }}</h3>
    <RouterLink :to="`/contact/edit/${contact._id}`" ><button>Edit Contact</button></RouterLink>
    <RouterLink to="/contact"><button>Back</button></RouterLink>

    <TransferFunds :contactId="contact._id" :contactName="contact.name" />
    <TransactionList :contactId="contact._id" />

  </section>
  <p v-else>Loading...</p>
</template>

<script>
import { contactService } from '../services/contactService'
import TransferFunds from '../cmps/TransferFunds.vue'
import TransactionList from '../cmps/TransactionList.vue'

export default {
     data() {
        return {
            contact: null,
        }
    },
    async created() {
        const { id: contactId } = this.$route.params
        this.contact = await contactService.getContactById(contactId)
    },
    components: {
    TransferFunds,
    TransactionList
  },
};
</script>

<style lang="scss">
.contact-details {
  align-items: center;
  text-align: center;
  gap: 15px;
  padding: 40px;
  margin: 30px auto;
  background-color: #2d2935;
  border: 1px solid #654bc1;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);

  img {
    width: 120px;
    height: 120px;
    object-fit: cover;
    border-radius: 50%;
    margin-bottom: 10px;
    border: 3px solid #fff;
  }

  h2 {
    font-size: 1.8rem;
    margin: 5px 0;
    color: #fff;
  }

  h3 {
    font-size: 1.2rem;
    margin: 2px 0;
    color: #e1e1e1;
  }

  .actions {
    display: flex;
    justify-content: space-between;
    margin-top: 20px;

    button {
      padding: 10px 20px;
      background-color: #181420;
      border: 1px solid #654bc1;
      color: white;
      border: none;
      border-radius: 5px;
      font-size: 1rem;
      cursor: pointer;
      transition: background-color 0.3s ease;

      &:hover {
        background-color: #555;
      }
    }
  }
}
</style>