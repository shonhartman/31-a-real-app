class LocationController {
  constructor($state, UserService) {
    this._$state = $state;
    this._UserService = UserService;
    this._UserService
    .isLoggedIn()
      .then((response) => {
        this.user = response;
      })
      .catch((error) => {
        this.$state.go("login");
      });
    }
  }
