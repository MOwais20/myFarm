export default function ({ redirect, store }) {

    const isAuthenticated = localStorage.getItem("token") ? true : false;
    if (isAuthenticated) {
        // set token in axios api.
        this.$axios.setToken(localStorage.getItem("token"));
        
        const user = localStorage.getItem("mft_user");
        if (user) this.$store.commit('auth/storeUser', JSON.parse(user));
    }
}