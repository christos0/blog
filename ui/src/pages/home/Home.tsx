import {
  HStack,
  List,
  ListIcon,
  ListItem,
  OrderedList,
  Text,
  Tooltip,
} from "@chakra-ui/react";
import { ExternalLink } from "app/components";
import { AiFillGithub, AiFillMail } from "react-icons/ai";

const Home = () => {
  return (
    <>
      <h1>--[ Introduction</h1>
      <br />
      <p>
        My motivation for this website is to crystallize my thoughts and convert
        them into readable articles.
        <br />
        <br />
        Here I share my thoughts on a plerotha of things. Generally, I identify
        myself as a software developer and a security researcher. I have worked
        as full stack developer in several security projects, using frameworks
        like react, .net, mongo etc.
        <br />
        <br />
        Some of my favorite programming books are:
      </p>
      <OrderedList pl="1ch">
        <ListItem>
          <ExternalLink
            title="But How Do I Know It"
            href="https://www.amazon.com/But-How-Know-Principles-Computers/dp/0615303765"
          />
        </ListItem>
        <ListItem>
          <ExternalLink
            title="Operating Systems: Three Easy Pieces"
            href="https://pages.cs.wisc.edu/~remzi/OSTEP/"
          />
        </ListItem>
        <ListItem>
          <ExternalLink
            title="C Programming Language"
            href="https://www.amazon.com/Programming-Language-2nd-Brian-Kernighan/dp/0131103628/ref=sr_1_1?crid=2ZTT33BKBD66V&dchild=1&keywords=c+programming+language&qid=1632045207&s=books&sprefix=C+Programmin+Langua%2Cstripbooks-intl-ship%2C277&sr=1-1"
          />
        </ListItem>
        <ListItem>
          <ExternalLink
            title="The Rootkit Arsenal"
            href="https://www.amazon.com/Rootkit-Arsenal-Escape-Evasion-Corners/dp/144962636X/ref=sr_1_1?crid=3HOTO3BTBYF8F&dchild=1&keywords=the+rootkit+arsenal&qid=1632045240&sprefix=the+rootkit+ars%2Cstripbooks-intl-ship%2C274&sr=8-1"
          />
        </ListItem>
        <ListItem>
          <ExternalLink
            title="Windows Internals"
            href="https://www.amazon.com/Windows-Internals-Part-architecture-management/dp/0735684189/ref=sr_1_2?dchild=1&keywords=windows+internals&qid=1632045289&sr=8-2"
          />
        </ListItem>
      </OrderedList>
      <br />
      <h1>--[ Contact</h1>
      <List>
        <ListItem>
          <HStack>
            <ListIcon as={AiFillGithub} />
            <ExternalLink
              href="https://github.com/christos0"
              title="Github Account"
            />
          </HStack>
        </ListItem>
        <Tooltip label="Always contact me with PGP encryption.">
          <ListItem>
            <HStack>
              <ListIcon as={AiFillMail} />
              <Text>christos.k4lts@gmail.com</Text>
            </HStack>
          </ListItem>
        </Tooltip>
      </List>
    </>
  );
};

export default Home;
