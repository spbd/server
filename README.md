server
======

Server side for [dashboard](https://github.com/spbd/dashboard)

### How to install ###

This is just a simple server side node application based on `socket.io`. It listens port `7654`. Just lauch it on some server.
Here is config for `nginx`:
```
upstream app_dashboard_server {
    server 127.0.0.1:7654;
}

map $http_upgrade $connection_upgrade {
    default upgrade;
    ''      close;
}

server {
    listen 80;

    server_name localhost;

    location / {
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header Host $http_host;
        proxy_set_header X-NginX-Proxy true;

        # WebSocket proxying: http://nginx.org/en/docs/http/websocket.html
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection $connection_upgrade;

        proxy_pass http://app_dashboard_server/;
        proxy_redirect off;

    }

    access_log      /var/log/nginx/dashboard.server-access_log;
    error_log       /var/log/nginx/dashboard.server-error_log;
}
```

### Client side ###
```
<script src="http://<host>:<port>/socket.io/socket.io.js"></script>
<script>
  var socket = io("http://<host>:<port>");

  socket.emit('new-instance', {type: 'staging-space', id: 1, host: 'some.host'});
  socket.on('update_1', function(data) {
    console.log('Staging widget updated:', data);
  });

  socket.emit('new-instance', {type: 'reviewers', id: 2});
  socket.on('update_2', function(data) {
    console.log('Reviewers widget updated:', data);
  });

  socket.emit('new-instance', {type: 'lib-status', id: 3});
  socket.emit('get-libs_3');
  socket.on('libs_3', function(data) {
    console.log('Libs list:', data);
    socket.emit('init_3', {lib: 'some-lib'});
  });
  socket.on('update_3', function(data) {
    console.log('Builds widget updated:', data);
  });

  socket.emit('new-instance', {type: 'pr-stats', id: 4, repo: 'https://github.com/some/repo'});
  socket.on('update_4', function(data) {
    console.log('PRs widget updated:', data);
  });
</script>

```
