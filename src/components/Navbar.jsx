import {
  Box,
  Heading,
  Text,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuGroup,
  Icon,
} from "@chakra-ui/react";
import { SlUser } from "react-icons/sl";
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
      marginBottom={["50px", "60px", "70px"]}
    >
      <Box>
        <Link to="/dashboard">
          <Heading as="h1" fontSize={["12px", "20px", "25px", "30px"]}>
            ADMIN PANEL
          </Heading>
        </Link>
      </Box>
      <Box>
        <Link to="/analytics">
          <Text
            fontSize={["10px", "15px", "20px"]}
            color="#887ab4"
            transition="0.35s"
            _hover={{
              color: "#F4EEE0",
              fontWeight: "450",
              // textDecoration: "underline",
              // textUnderlineOffset: "6px"
            }}
          >
            User Analytics
          </Text>
        </Link>
      </Box>
      <Box>
        <Link to="/dashboard">
          <Text
            fontSize={["10px", "15px", "20px"]}
            color="#887ab4"
            transition="0.35s"
            _hover={{
              color: "#F4EEE0",
              fontWeight: "450",
              // textDecoration: "underline",
              // textUnderlineOffset: "6px"
            }}
          >
            Main Website
          </Text>
        </Link>
      </Box>
      <Box>
        <Menu>
          <MenuButton
            cursor="pointer"
            as={Text}
            fontSize={["10px", "15px", "20px"]}
            color="#F4EEE0"
            transition="0.35s"
            // _hover={{
            //   color: "#F4EEE0",
            //   fontWeight: "450",
            // }}
          >
            <Icon as={SlUser} color="#F4EEE0" marginRight="10px" />
            Profile
          </MenuButton>
          <MenuList>
            <MenuGroup color="#6D5D6E" title="Profile">
              <MenuItem
                color="#887ab4"
                _hover={{
                  color: "black",
                }}
              >
                <Link to="/profile">My Account</Link>
              </MenuItem>
              <MenuItem
                color="#887ab4"
                _hover={{
                  color: "black",
                }}
                onClick={() => console.log("Logout")}
              >
                Logout{" "}
              </MenuItem>
            </MenuGroup>
          </MenuList>
        </Menu>
      </Box>
    </Box>
  );
}
