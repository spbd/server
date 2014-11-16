server
======

Server side for dashboard

### Exapmle ###
```
<script src="http://37.9.65.16:80/socket.io/socket.io.js"></script>
<script>
  var socket = io("http://37.9.65.16:80");

  socket.emit('new-instance', {type: 'staging', id: 1, host: 'some.host'});
  socket.emit('new-instance', {type: 'reviewers', id: 2, repo: 'https://github.com/owner/repo'})

  socket.on('update_1', function(data) {
    console.log('Staging widget updated:', data);
  });

  socket.on('update_2', funciton(data) {
    console.log('Reviewers widget updated:', data);
  });
</script>

```
