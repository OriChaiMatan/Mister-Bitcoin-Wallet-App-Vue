import { contactService } from "@/services/contactService"

export const contact = {
    state: {
        contacts: null,
        filterBy: { txt: '' },
    },
    mutations: {
        setContacts(state, { contacts }) {
            state.contacts = contacts
        },
        removeContact({ contacts }, { contactId }) {
            const idx = contacts.findIndex(contact => contact._id === contactId)
            contacts.splice(idx, 1)
        },
        setFilterBy(state, { filterBy }) { 
            state.filterBy = filterBy;
          },
    },
    actions: {
        async loadContacts({ commit, state }) { 
            try {
              const contacts = await contactService.getContacts(state.filterBy); // Access state.filterBy
              commit({ type: "setContacts", contacts });
            } catch (err) {
              console.log(err);
              throw err;
            }
          },
        async removeContact({ commit }, { contactId }) {
            await contactService.deleteContact(contactId)
            commit({ type: 'removeContact', contactId })
        },
        setFilterBy({ commit, dispatch }, { filterBy }) { 
            commit({ type: "setFilterBy", filterBy });
            dispatch({ type: "loadContacts" });
          },
    },
    getters: {
        contacts(state) {
            return state.contacts
        }
    }
}