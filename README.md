# connect-nocache

Add `nocache=true` to your `GET` requests and it'll bust through all
your caches.

    $ http://localhost/foo?nocache=true

# Usage

Get it via `npm`:

    $ npm install connect-nocache

And then use it in your code (here, coffeescript):

```coffeescript
app.use connect_nocache()
```

## Contributing

Fork, implement, add tests, pull request, get my everlasting thanks and a respectable place here :).


## Copyright

Copyright (c) 2011 [Dotan Nahum](http://gplus.to/dotan) [@jondot](http://twitter.com/jondot). See MIT-LICENSE for further details.



