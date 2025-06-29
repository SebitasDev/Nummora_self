import { useMemo } from "react";

export const useShortenedAddress = (address: string) => {
  return useMemo(() => {
    return address.length > 10
      ? `${address.slice(0, 6)}...${address.slice(-4)}`
      : address;
  }, [address]);
};
