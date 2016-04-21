function config($stateProvider) {
  $stateProvider
  .state("location", {
    url:"/",
    controller: "LocationController as locationCtrl",
    template: require("./view.html")
  })
}


export default config;
