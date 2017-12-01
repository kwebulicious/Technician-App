var app = {
  getParameterByName: function(name, url) {
    if (!url) {
      url = window.location.href;
    }
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return undefined;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
  }
};

// Authorized Hrefs
var authorizedHrefs = [
  '/logout.html',
  '/profile.html',
];

// Initialize Kinvey
var client = Kinvey.init({
  appKey: 'kid_Bk8sac2xM',
  appSecret: '1c52a433ff97402892185788463ce5e0'
});

var activeUser = Kinvey.User.getActiveUser(client);


if (!activeUser && authorizedHrefs.indexOf(location.pathname) !== -1) {
<<<<<<< HEAD
  location.replace('/index.html');
} else if (activeUser && authorizedHrefs.indexOf(location.pathname) === -1) {
  location.replace('/login.html');
}
=======
>>>>>>> e752d1ae5ebc5d9f7a716952002b1c7cafc3019c

$(document).ready(function() {
  $(document).trigger('app.ready');
});