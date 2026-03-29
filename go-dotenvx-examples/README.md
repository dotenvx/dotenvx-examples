# Go + Dotenvx Examples

Super basic examples for encrypting secrets with [Dotenvx](https://dotenvx.com) in Go.

## Prerequisites

- Go 1.22+
- Optional: a [Dotenvx](https://dotenvx.com) account

## Run Example

```bash
dotenvx encrypt
dotenvx run -- go run main.go
```

## Quick Usage

```go
package main

import (
	"fmt"
	"os"
)

func main() {
	fmt.Printf("HELLO: %s\n", os.Getenv("HELLO"))
}
```

## Project Structure

```
go-dotenvx-examples/
├── main.go
└── README.md
```
