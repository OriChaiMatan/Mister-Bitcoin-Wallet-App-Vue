<template>
  <section class="contacts-list">
    <TransitionGroup name="list" tag="ul">
      <li v-for="contact in contacts" :key="contact._id">
        <ContactPreview :contact="contact" />
        <!-- <div class="actions"> -->
        <!-- <button @click="onRemoveCar(car._id)" >x</button>
                    <RouterLink :to="`/car/${car._id}`" ><button>Details</button></RouterLink>
                    <RouterLink :to="`/car/edit/${car._id}`" ><button>Edit</button></RouterLink> -->
        <!-- </div> -->
      </li>
    </TransitionGroup>
  </section>
</template>

<script>
import ContactPreview from "./ContactPreview.vue";
export default {
  props: {
    contacts: {
      type: Array,
      required: true,
    },
  },
  components: {
    ContactPreview,
  },
};
</script>

<style lang="scss">
.contacts-list ul {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 10px;
  padding: 10px;
  list-style: none;

  li {
    display: grid;
    justify-items: start;
    padding: 10px;
    background-color: lightblue;
  }

  .actions {
    display: flex;
    gap: 6px;
    justify-self: end;
  }
}

.list-move, /* apply transition to moving elements */
.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}

.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}

/* ensure leaving items are taken out of layout flow so that moving
   animations can be calculated correctly. */
.list-leave-active {
  position: absolute;
}
</style>