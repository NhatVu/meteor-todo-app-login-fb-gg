ServiceConfiguration.configurations.remove({
    service: 'facebook'
});
or
ServiceConfiguration.configurations.insert({
    service: 'facebook',
    appId: '596035807247415',
    secret: 'c52acccd46bc0e48f51e714449c32e4b'
});

// // first, remove configuration entry in case service is already configured
// Accounts.loginServiceConfiguration.remove({
//   service: "facebook"
// });
// Accounts.loginServiceConfiguration.insert({
//   service: "facebook",
//   appId: "596035807247415",
//   secret: "c52acccd46bc0e48f51e714449c32e4b"
// });
