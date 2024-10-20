# GOLANG INSTALLATION

- [Download](https://go.dev/doc/install)

## SETUP ON LINUX

Remove any previous Go installation by deleting the /usr/local/go folder (if it exists), then extract the archive you just downloaded into /usr/local, creating a fresh Go tree in /usr/local/go:

```bash
$ rm -rf /usr/local/go && tar -C /usr/local -xzf go1.23.2.linux-amd64.tar.gz
```

Add /usr/local/go/bin to the PATH environment variable.

```bash
export PATH=$PATH:/usr/local/go/bin
```

Verify that you've installed Go by opening a command prompt and typing the following command

```bash
$ go version
```

## SETUP ON WINDOWS

- Extract golang
- Letakkan hasil extract di folder yang diinginkan
- Setting path folder golang ke dalam `Environment Variabel`
- Kemudian jalankan perintah `go version`
