## How To Compile
To recompile the contract you can run:
```
yarn install
yarn neo-one compile --avm --debug
```
to generate all of the files the toolkit should need.

to quickly see the uncompressed debug file:
```
yarn neo-one compile --json --debug
```

## Issues

The NeoDevTracker automatically detects the `.avm` file and successfully deploys it, but the only command that can be invoked successfully is `deploy`.

Trying to call `neo-express contract invoke -t ./testInvoke.json` fails with `FAULT`. I checked the invocation scripts from neo-express and neo-one and they were identical.

I don't think this is a problem with the contract as similar methods work on our testnet [contract](https://testnet.neotracker.io/contract/90f76d5de4060d48d7b025667ce3ad2a483e9d6e). The only difference in the deployments between neo-express and neo-one is that neo-one combines the publish and deploy call: [see this 'script'](https://testnet.neotracker.io/tx/be79afbb69e34efb68ee802b23ab1021aa5f3008b22b1e8939e1b9ae82a73115)
