<template>
  <RouterLink :to="`/contact/${contact._id}`" class="contact-link">
    <article class="contact-preview">
      <img class="contact-img"
        :src="`https://api.dicebear.com/9.x/adventurer-neutral/svg?seed=${contact._id}`"
        alt="Contact Avatar"
      />
      <section class="contact-info">
        <h2>{{ contact.name }}</h2>
        <h3>Email: {{ contact.email }}</h3>
        <h3>Phone: {{ contact.phone }}</h3>
      </section>
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
}

.contact-preview {
  display: grid;
  grid-template-columns: auto 1fr;
  align-items: center;
  border-radius: 8px;
  justify-content: space-between;
  gap: 5px;

  img {
    width: 50px;
    height: 50px;
    object-fit: cover;
    border-radius: 50%;
    margin-bottom: 10px;
    border: 1px solid #fff;
  }
  h2{
    color: white;
    padding-bottom: 2px;
  }
  h3{
    font-size: 80%;
  }
}
</style>