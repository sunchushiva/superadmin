import { Box, Heading } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <Box
      padding={["15px 20px", "15px 30px", "25px 50px"]}
      position="sticky"
      top="0"
      width="100%"
      display="flex"
      alignItems="flex-end"
      justifyContent="space-between"
      zIndex="1000000"
      bg="#393646"
      color="#F4EEE0"
    >
      <Box>
        <Link to="/dashboard">
          <Heading as="h1" fontSize={["20px", "25px", "30px"]}>
            ADMIN PANEL
          </Heading>
        </Link>
      </Box>
      <Box>
        <Link to="/analytics">
          <Heading
            as="h2"
            fontSize={["12px", "16px", "20px"]}
            color="#7a6ea3"
            transition="0.35s"
            _hover={{
              color: "#F4EEE0",
            }}
          >
            User Analytics
          </Heading>
        </Link>
      </Box>
      <Box>
        <Link to="/dashboard">
          <Heading
            as="h2"
            fontSize={["12px", "16px", "20px"]}
            color="#7a6ea3"
            transition="0.35s"
            _hover={{
              color: "#F4EEE0",
            }}
          >
            Main Website
          </Heading>
        </Link>
      </Box>
      <Box>
        <Link to="/profile">
          <Heading
            as="h2"
            fontSize={["12px", "16px", "20px"]}
            color="#7a6ea3"
            transition="0.35s"
            _hover={{
              color: "#F4EEE0",
            }}
          >
            Profile
          </Heading>
        </Link>
      </Box>
    </Box>
  );
}
