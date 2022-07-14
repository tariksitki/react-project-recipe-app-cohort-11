import { FormContainer, Header, LoginContainer, StyledButton, StyledForm, StyledImg, StyledInput } from "./Login.style";
import mealSvg from "../../assets/meal.svg";
import { useNavigate } from "react-router-dom";

// styled form,  form dan import oldugu icin formun tüm özelliklerine haiz

const Login = () => {
  const navigate = useNavigate();
  const userInfo = {
    username : "ahmet"
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // navigate("/");   eger bu sekilde yaparsak user ne yaparsa yapsin önce login ol der, login olunca da home a atama yapar. ama biz user nerede kaldi ise oradan devam etsin isteriz. 
    sessionStorage.setItem("user", JSON.stringify(userInfo))
      // session ve local storage string formatinda calisir. 
    navigate(-1);
    // window.location.href=“/”  bu hard coded olur.
  };

  return (
    <LoginContainer>
      <FormContainer >
        <StyledImg src={mealSvg} />
        <Header>TARIK'S RECIPE </Header>
        <StyledForm onSubmit={handleSubmit} >
          <StyledInput type="text" placeholder="username" required />
          <StyledInput placeholder="password" required />
          <StyledButton > LOGIN </StyledButton>
        </StyledForm>
      </FormContainer>
    </LoginContainer>
  )
}

export default Login