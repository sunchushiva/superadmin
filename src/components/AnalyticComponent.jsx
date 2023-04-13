import { Box, Heading, Text } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";

export default function AnalyticComponent() {
  const Data = [
    {
      count: 500,
      text: "Orders successful",
      type: "Orders",
    },
    {
      count: 150,
      text: "Items in liked section",
      type: "Like",
    },
    {
      count: 280,
      text: "Items in cart",
      type: "Cart",
    },
    {
      count: 5,
      text: "Popular products",
      type: "Popular",
    },
  ];
  return (
    <Box marginBottom="80px">
      <Box textAlign="center" marginBottom="50px">
        <Text fontSize={["18px", "20px", "25px", "30px"]} fontWeight="450">
          YOUR listings Statistics
        </Text>
      </Box>
      <Box
        display="grid"
        gridTemplateColumns={["1fr", "repeat(2,1fr)", "repeat(3,1fr)"]}
        gap="15px"
      >
        {Data.map((el) => {
          return (
            <Link to={`/analytics/${el.type}`}>
              <Box
                border="1px solid rgb(210,210,210,0.6)"
                display="flex"
                alignItems="center"
                justifyContent="center"
                textTransform="capitalize"
                cursor="pointer"
                height={["15vh", "20vh", "25vh", "30vh"]}
                transition="0.35s"
                _hover={{
                  border: "1px solid rgb(180,180,180,0.9)",
                }}
              >
                <Box textAlign="center">
                  <Heading
                    as="h3"
                    fontSize={["15px", "20px", "25px", "30px"]}
                    marginBottom={["6px", "10px"]}
                  >
                    {el.count}
                  </Heading>
                  <Text fontSize={["10px", "15px", "17px", "19px"]}>
                    {el.text} <ExternalLinkIcon />
                  </Text>
                </Box>
              </Box>
            </Link>
          );
        })}
      </Box>
    </Box>
  );
}
