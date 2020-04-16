Random Chart

Tools/libraries: Vue.js, Vuex, Vue router, SCSS, Chartjs, vuex-persistedstate

Responsive layout, flexbox & grid

Optimized for Firefox, Chrome, Edge, Opera

Vue.js application with two pages.
Home page shows 10 fields marked as A, B, C, D .... with initial value 3.
After page loads, every 2 seconds all field values are changed randomly. Change is randomly calculated as a number between 1 and 2, with a random sign (-, +). When adding the change to the previous value arrow is pointing up or down, depending on the change sign (red arrow down is for -, green arrow up is for +). All values bellow zero are colored red to be more visible.
Into the each field there is a toggle button to disable/enable the change on that field (pause/resume)

Second page is for statistics (on url '/statistics'). This page shows change statistics for all 10 fields. This is presented with charts and additional listing for all values. Chart shows value changes (y axis) in time on every 2 seconds (x axis).

When going from '/' to '/statistics' all the changes are paused, and on returning back changes are resumed.
*vuex-persisted state used with session storage (to be cleaned after app closes)
