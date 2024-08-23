<template>
  <RouterLink :to="`/contact/${contact._id}`" class="contact-link">
    <article class="contact-preview">
      <img
        :src="`https://api.dicebear.com/9.x/adventurer-neutral/svg?seed=${contact._id}`"
        alt="Contact Avatar"
      />
      <h2>{{ contact.name }}</h2>
      <h3>{{ contact.email }}</h3>
      <h3>{{ contact.phone }}</h3>
    </article>
  </RouterLink>
</template>

<script>
export default {
  props: {
    contact: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="scss">
.contact-link {
  text-decoration: none; /* Removes underline from the link */
  color: inherit; /* Inherits the color from the parent element */
}

.contact-preview {
  display: flex;
  flex-direction: column;
  padding: 10px;
  border-radius: 8px;

  img {
    width: 100px;
    height: 100px;
    object-fit: cover;
    border-radius: 50%;
    margin-bottom: 10px;
  }
}
</style>