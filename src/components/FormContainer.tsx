import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 10px 0;
`;
const Title = styled.div`
  margin-right: 20px;
  display: flex;
  align-items: center;
`;
const Body = styled.div`
  display: flex;
  align-items: center;
`;

interface FormContainerProps {
  children: React.ReactNode[];
}

const FormContainer: React.FC<FormContainerProps> = ({ children }) => {
  return (
    <Wrapper>
      <Title>{children[0]}</Title>
      <Body>{children[1]}</Body>
    </Wrapper>
  );
};

export default FormContainer;
