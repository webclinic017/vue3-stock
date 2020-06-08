import { NavigationGuard } from 'vue-router';

const checkLogin: NavigationGuard = (_to, _from, next) => {
  next();
};

export default checkLogin;
