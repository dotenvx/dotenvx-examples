# Java + Dotenvx Examples

Comprehensive examples for encrypting secrets with [Dotenvx](https://dotenvx.com) in Java.

## Prerequisites

- Java 17+
- Optional: a [Dotenvx](https://dotenvx.com) account

## Run Example

```bash
dotenvx encrypt
javac Main.java
dotenvx run -- java Main
```

## Quick Usage

```java
public class Main {
  public static void main(String[] args) {
    System.out.println("HELLO: " + System.getenv("HELLO"));
  }
}
```

## Project Structure

```
java-dotenvx-examples/
├── Main.java
└── README.md
```
