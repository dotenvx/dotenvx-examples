# .NET + Dotenvx Examples

Comprehensive examples for encrypting secrets with [Dotenvx](https://dotenvx.com) in .NET.

## Prerequisites

- .NET 8+
- Optional: a [Dotenvx](https://dotenvx.com) account

## Run Example

```bash
dotenvx encrypt
dotenvx run -- dotnet run
```

## Quick Usage

```csharp
Console.WriteLine($"HELLO: {Environment.GetEnvironmentVariable("HELLO")}");
```

## Project Structure

```
dotnet-dotenvx-examples/
├── .env
├── DotnetDotenvxExamples.csproj
├── Program.cs
└── README.md
```
