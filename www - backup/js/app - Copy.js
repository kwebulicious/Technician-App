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
  '/',
  '/manual.html',    
  '/create.html',
  '/files.html',
  '/index.html',
  '/logout.html',
  '/profile.html',
  '/update.html',
  '/upload.html'
];

var admindash = [
  '/',
  '/manual.html',    
  '/create.html',
  '/files.html',
  '/index.html',
  '/logout.html',
  '/profile.html',
  '/update.html',
  '/upload.html',
  '/admin.html'
];

// Initialize Kinvey
var client = Kinvey.init({
  appKey: 'kid_Bk8sac2xM',
  appSecret: '1c52a433ff97402892185788463ce5e0'
});


var adminUser;

var activeUser = Kinvey.User.getActiveUser(client);
console.log(activeUser.data.username);

if (activeUser.data.username == 'admin') {
    adminUser = 'admin';
}

if (!activeUser && authorizedHrefs.indexOf(location.pathname) !== -1) {
  location.replace('/login.html');
} else if (adminUser == 'admin' && admindash.indexOf(location.pathname) === -1){
    location.replace('/admin.html');
} 
else{ if (activeUser && authorizedHrefs.indexOf(location.pathname) === -1) {
  location.replace('/index.html');
}}

  


$(document).ready(function() {
  $(document).trigger('app.ready');
});