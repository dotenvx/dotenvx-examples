package main

import (
	"fmt"
	"os"
)

func main() {
	fmt.Printf("HELLO: %s\n", os.Getenv("HELLO"))
}
