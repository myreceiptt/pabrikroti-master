// /src/config/ethers.ts

export async function FetchEthereumPrice(): Promise<number | null> {
  try {
    const response = await fetch(
      "https://api.coingecko.com/api/v3/simple/price?x_cg_demo_api_key=CG-gW1zJEU5tLrciQunUxFefDqb&ids=ethereum&vs_currencies=usd"
    );
    const data = await response.json();
    return data.ethereum.usd;
  } catch (error) {
    console.error("Error fetching Ethereum price:", error);
    return null;
  }
}
