export default ($axios, $toast, store) => (

    $axios.onError(error => {
        $toast.error(`${error && error.response && error.response.data && error.response.data.message || 'Error'}`)
        if (error && error.response && error.response.status === 401 || error.response.data.message == "Unauthenticated.") {
            // reset user.
            store.commit('auth/storeUser', null);
            // Removes default Authorization header from `common` scope (all requests)
            $axios.setToken(false);
            localStorage.removeItem("token"); 
            localStorage.removeItem("mft_user"); 
        }
    }),

    {

        async get(url, params) {
            return await $axios.$get(url, params)
                .then(response => { return response })
                .catch(error => { throw error });
        },

        async post(url, params) {
            return await $axios.$post(url, params)
                .then(response => { return response })
                .catch(error => { throw error });
        },

        async put(url, params) {
            return await $axios.$put(url, params)
                .then(response => { return response })
                .catch(error => { throw error });
        },

        async deleteReq(url) {
            return await $axios.$delete(url)
                .then(response => { return response })
                .catch(error => { throw error });
        },

        async patch(url, params) {
            return await $axios.$patch(url, params);
        }
    })