# test_edgedb_js
connection to an edgedb database

## environment
tested with edgedb alpha.5 and the related js driver 0.10.0-alpha.3

## warning
we include our .env file as an example for demo purposes, don't do that in production

## example of connection strings (in .env file)
the API uses a paramater called dsn, in the form: 'edgedb://user:password@host:port/database?option=value'

see $HOME/.edgedb/credentials/<instance_name>.json to get your actual parameters (following edgedb server init)

since the purpose of this example is to provide a simple example, we show 2 ways of connecting (in production, don't show these parameters)

### connection with a password
case 1: `edgedb -Iinstance1`

here you should specify the username and password, otherwise the authentication will fail

EDGEDB_DSN='edgedb://edgedb:Zir9o4C45zN7fJ3SAwbMdrFZ@localhost/tutorial'

### passwordless
case 2: `edgedb -Iinstance2 --admin configure insert Auth --method=Trust --priority=0`

here we specify the port that corresponds to that passwordless instance (in our example: 10702).

EDGEDB_DSN='edgedb://edgedb@localhost:10702'

## run example
`npm install`

`node connect.js`