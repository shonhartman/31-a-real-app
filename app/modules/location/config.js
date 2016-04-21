function config($stateProvider) {
  $stateProvider
  .state("location", {
    url:"/location",
    controller: "LocationController as locationCtrl",
    template: require("./location.html")
  })
}


export default config;
