// get the id of this conduit:
var id = /=(\d+)$/.exec(window.location.href)[1];

var chan = Channel.build({window: window.parent, origin: "http://10.0.1.106:8888", scope: id});

chan.bind("echo", function(trans, args) {
    return args;
});
