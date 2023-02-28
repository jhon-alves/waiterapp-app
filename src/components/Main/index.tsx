import {
  Container,
  CategoriesContainer,
  MenuContainer,
  Footer,
  FooterContainer
} from './styles';

import { Header } from '../Header';
import { Categories } from '../Categories';
import { Menu } from '../Menu';

export function Main() {
  return (
    <>
      <Container>
        <Header />
        <CategoriesContainer>
          <Categories />
        </CategoriesContainer>
        <MenuContainer>
          <Menu />
        </MenuContainer>
      </Container>
      <Footer>
        <FooterContainer>

        </FooterContainer>
      </Footer>
    </>
  );
}
