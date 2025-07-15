use dotenv::dotenv;
use std::env;

#[tokio::main]
async fn main() {
    dotenv().ok();
    println!("Starting CoreX Sniper Bot...");

    let rpc_url = env::var("SOLANA_RPC_URL").unwrap_or_else(|_| "https://api.mainnet-beta.solana.com".to_string());
    println!("Using Solana RPC: {}", rpc_url);

    // TODO: Implement sniper bot logic here
}