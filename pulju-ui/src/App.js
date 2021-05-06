import styled, { ThemeProvider } from "styled-components";
import theme from "./theme";
import { Nav, Menu, MenuItem } from "./components/Nav";
import Product from "./components/Product";

import sampleData from "./components/.storybook/exampleProducts.json";

const NavBar = (props) => {
  return (
    <Nav>
      <Menu>
        <MenuItem href="#">Kategoria 1</MenuItem>
        <MenuItem href="#">Kategoria 2</MenuItem>
        <MenuItem href="#">Ostoskori</MenuItem>
      </Menu>
    </Nav>
  );
};

const Header = styled.header`
  background-color: ${(props) => props.theme.colorPrimary};
  display: flex;
  padding: 1.25rem;
  justify-content: space-between;
  @media only screen and (max-width: 365px) {
    padding: 0.25rem;
  }
`;

const Logo = styled.a`
  color: ${(props) => props.theme.colorPrimaryText};
  text-decoration: none;
  line-height: 1.75rem;
  font-size: 1.5rem;
  font-weight: bold;
`;
const Main = styled.main`
  padding: 0 1.25rem;
  @media only screen and (max-width: 365px) {
    padding: 0.25rem;
  }
`;
const ProductList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header>
        <div>
          <Logo href="/">PULJU OY</Logo>
          <input placeholder="Etsi..." />
        </div>
        <NavBar />
      </Header>
      <Main>
        <h1>Tuoteet</h1>
        <ProductList>
          {sampleData.map((product) => (
            <Product {...product} />
          ))}
        </ProductList>
      </Main>
    </ThemeProvider>
  );
}

export default App;
