server
======

Server side for dashboard

### Exapmle ###
```
<script src="http://37.9.65.16:80/socket.io/socket.io.js"></script>
<script>
  var socket = io("http://37.9.65.16:80");

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
