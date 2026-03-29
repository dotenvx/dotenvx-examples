use std::env;

fn main() {
    let hello = env::var("HELLO").unwrap_or_default();
    println!("HELLO: {}", hello);
}
