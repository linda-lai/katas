## Golang
To set up Golang katas, change directories into the `go` folder:

```
cd go
```

## Project Setup

**Go Modules** make it easier to manage packages without needing to set up the `GOPATH` environment variable or set up a project within it to resolve custom package paths. Further explanation [here](https://blog.francium.tech/go-modules-go-project-set-up-without-gopath-1ae601a4e868).

From the `katas/go` directory, initialise the Go module with the project name:
```
go mod init github.com/linda-lai/katas/go
```

This will create a module config file `go.mod` which has the module name and go version. The `go.mod` file defines the root of a project or module and the `go` command works accordingly with packages as an alternative to the GOPATH.

To resolve references:
* Git commit main files
* Run `go build` in the root:
    * fetches dependencies
    * updates `go.mod` config file with packages and version
    * creates `go.sum` file (checksums of the content of specific module versions)

## Installing External Dependencies
* Ensure ZDI credentials are exported for Artifactory:
```
source /Users/llai/Code/zendesk/zdi/dockmaster/zdi.sh
```
* Install third-party library using `go get`:
```
go get -u github.com/stretchr/testify
```
* Enable Go modules in a project:
    * A new Go modules project already has Go modules enabled. If you pulled your Go modules project from Github, you need to enable Go modules manually.
    * In Goland, Preferences > Go Modules > Enable Go modules integration: select the `Enable Go modules integration` checkbox and ensure that the Vgo Executable field points to a valid Project SDK directory.

## Running Tests
To run tests:
```
go test
```
