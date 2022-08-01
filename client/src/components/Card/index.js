import { Box, Image, Button } from "@chakra-ui/react";

import { Link } from "react-router-dom";

function Card() {
  return (
    <Box borderWidth="1px" borderRadius="lg" overflow="hidden" p="3">
      <Link to="#/">
        <Image src="https://picsum.photos/400/200" alt="products" />

        <Box p="6">
          <Box d="plex" alignItems="baseline">
            01/08/2022
          </Box>

          <Box mt="1" fontWeight="semibold" as="h4" lineHeight="tight">
            MacBook Pro
          </Box>
          <Box>100 ₺</Box>
        </Box>
      </Link>
      <Button colorScheme="green">Add to basket</Button>
    </Box>
  );
}

export default Card;
