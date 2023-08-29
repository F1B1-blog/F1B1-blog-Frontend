import styled from "styled-components";
import { FlexVertical } from "../../styles/flex";
import { font } from "../../styles/font";
import colors from "../../styles/theme";

const Header = () => {
  return (
    <HeaderWrapper>
      <FlexVertical>
        <HeaderTitle>상진로그</HeaderTitle>
      </FlexVertical>
    </HeaderWrapper>
  );
};

export default Header;

const HeaderWrapper = styled.div`
  background-color: ${colors.gray[800]};
  height: 3rem;
`;

const HeaderTitle = styled.div`
  width: 70rem;
  height: 3rem;
  display: flex;
  align-items: center;
  color: white;
  ${font.$body}
`;
