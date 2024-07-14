
// https://router.vuejs.org/api/#routeroptions
export default {
    scrollBehavior(to, from, savedPosition) {
        return { el: to.hash };
    },
};