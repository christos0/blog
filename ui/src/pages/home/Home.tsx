import { Container, Icon, Link } from "@chakra-ui/react";
import { AiOutlineLink } from "react-icons/ai";

export const Home = () => {
  return (
    <Container
      pt={2}
      maxW="container.md"
      borderX="1px solid"
      whiteSpace="pre-wrap"
      fontFamily="monospace"
    >
      <h1>--[ Introduction</h1>
      <br />
      <p>
        Yo guys my name is christos. I was born in Greece and live in Athens. My
        motivation for this website is to crystallize my thoughts and convert
        them into readable articles.
      </p>
      <br />
      <p>
        Here I share my thoughts on a plerotha of things. Generally, I identify
        myself as a software developer and a security researcher. I have worked
        as full stack developer in several security projects, using frameworks
        like react, .net, mongo etc.
      </p>
      <br />
      <p>
        Some of my favorite programming books are:
        <br />
        1.{" "}
        <Link
          isExternal
          to="https://www.amazon.com/But-How-Know-Principles-Computers/dp/0615303765"
        >
          But How Do It Know?
          <Icon as={AiOutlineLink} mx="2px" />
        </Link>
        <br />
        2.{" "}
        <Link isExternal to="https://pages.cs.wisc.edu/~remzi/OSTEP/">
          Operating Systems: Three Easy Pieces{" "}
          <Icon as={AiOutlineLink} mx="2px" />
        </Link>
        <br />
        3.{" "}
        <Link isExternal to="https://pages.cs.wisc.edu/~remzi/OSTEP/">
          C Programming Language <Icon as={AiOutlineLink} mx="2px" />
        </Link>
        <br />
        <br />
        Some of my favorite philosophy books are:
      </p>
    </Container>
  );
};
