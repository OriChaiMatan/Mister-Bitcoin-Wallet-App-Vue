<template>
  <section v-if="contact" class="contact-details">
    <img
        :src="`https://api.dicebear.com/9.x/adventurer-neutral/svg?seed=${contact._id}`"
        alt="Contact Avatar"
      />
    <h2>{{ contact.name }}</h2>
    <h3>{{ contact.email }}</h3>
    <h3>{{ contact.phone }}</h3>
    <RouterLink :to="`/contact/edit/${contact._id}`" ><button>Edit Contact</button></RouterLink>
    <RouterLink to="/contact"><button>Back</button></RouterLink>
  </section>
  <p v-else>Loading...</p>
</template>

<script>
import { contactService } from '../services/contactService'
export default {
     data() {
        return {
            contact: null,
        }
    },
    async created() {
        const { id: contactId } = this.$route.params
        this.contact = await contactService.getContactById(contactId)
    }
};
</script>

<style lang="scss">
.contact-details {
    display: grid;
    justify-items: start;
    gap: 10px;

    padding: 10px;
    background-color: rgb(247, 200, 112);

    a {
        justify-self: end;
    }
    img {
    width: 100px;
    height: 100px;
    object-fit: cover;
    border-radius: 50%;
    margin-bottom: 10px;
  }
}
</style>