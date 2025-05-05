// /src/components/SearchWrapper.tsx

"use client";

// External libraries
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { getNFTs } from "thirdweb/extensions/erc1155";

// Components libraries
import SearchResult from "@/components/contents/SearchResult";

// Blockchain configurations
import { erc1155Launched } from "@/config/contracts";

// Type definition for NFTs
type NFTData = {
  id: bigint;
  metadata: {
    name?: string;
    description?: string;
  };
};

const SearchWrapper = () => {
  const searchParams = useSearchParams();
  const query = searchParams.get("query")?.toLowerCase() || "";
  const [filteredTokens, setFilteredTokens] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchTokens = async () => {
      setIsLoading(true);

      try {
        const nfts: NFTData[] = await getNFTs({
          contract: erc1155Launched,
          start: 0,
          count: 23,
        });

        const matchingTokens = nfts
          .filter((nft) => {
            const tokenIdMatch = nft.id.toString().includes(query);
            const nameMatch = nft.metadata?.name?.toLowerCase().includes(query);
            const descMatch = nft.metadata?.description
              ?.toLowerCase()
              .includes(query);
            return tokenIdMatch || nameMatch || descMatch;
          })
          .map((nft) => nft.id.toString());

        setFilteredTokens(matchingTokens);
      } catch (error) {
        console.error("Error fetching NFTs:", error);
      } finally {
        setIsLoading(false);
      }
    };

    setIsLoading(true);
    fetchTokens();
  }, [query]);

  return (
    <SearchResult
      tokenIds={filteredTokens}
      query={query}
      isLoading={isLoading}
    />
  );
};

export default SearchWrapper;
