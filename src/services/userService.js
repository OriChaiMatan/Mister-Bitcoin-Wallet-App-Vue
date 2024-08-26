export const userService = {
  getUser() {
    return JSON.parse(localStorage.getItem('currentUser'));
  },
  saveUser(user) {
    localStorage.setItem(user.name, JSON.stringify(user));
    localStorage.setItem('currentUser', JSON.stringify(user));
  },
  logout() {
    localStorage.removeItem('currentUser');
  },
};
