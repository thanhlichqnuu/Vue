import { defineStore } from 'pinia';

export const useFacebookStore = defineStore('facebook', {
  state: () => ({}),
  actions: {
    loadFacebookSDK() {
      return new Promise((resolve) => {
        window.fbAsyncInit = () => {
          FB.init({
            appId: '973607627550804',
            autoLogAppEvents: true,
            xfbml: true,
            version: 'v20.0',
          });
          resolve();
        };

        ((d, s, id) => {
          let js,
            fjs = d.getElementsByTagName(s)[0];
          if (d.getElementById(id)) return;
          js = d.createElement(s);
          js.id = id;
          js.src = 'https://connect.facebook.net/en_US/sdk.js';
          fjs.parentNode.insertBefore(js, fjs);
        })(document, 'script', 'facebook-jssdk');
      });
    },
    async initFacebookSDK() {
      await this.loadFacebookSDK();
    },
    async initFacebookComments() {
      this.initFacebookSDK();
      // Add any additional logic to initialize Facebook Comments if needed
    },
  },
});