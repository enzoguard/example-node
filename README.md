# Using HTTP proxy in Node

This repo contains example code for using HTTP proxy in Node.
This should work in other Javascript runtimes.

Once you have the Proxy URL from Enzoguard's [Cloud console](https://cloud.enzoguard.com), set the following environment variables:

```bash
HTTP_PROXY="https://test-app:snipped@pe2xqel.enzoproxy.com"
HTTPS_PROXY="https://test-app:snipped@pe2xqel.enzoproxy.com"
```

Once set, run the Node program:

```bash
npm install
node app.js
```

You will see IP address of the proxy instead of the IP address of your workstation.

To skip the proxy, you can unset the environment variable or launch a new shell and run the program again.

## Questions

If you have any questions, please open a GitHub issue or reach out to Enzoguard support.
