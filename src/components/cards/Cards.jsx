import CardsStyle, { Button, Card, Header, Image, MainContainer } from "./Cards.style";
import defaultImage from "../../assets/default-image.jpg";
import {useNavigate} from "react-router-dom";

const Cards = ({ recipes }) => {
  const navigate = useNavigate();  // Navigate bir component func icinde kullanilmaz.

  return <MainContainer wrap="wrap">
    {recipes.map(({recipe}, index) => {
      return (
        <Card key={index} >
          <Header>{recipe.label}</Header>
          <Image src={recipe.image || defaultImage } />
          <Button onClick={() => navigate("detail", {state : recipe, replace : false})}>View More</Button>
          {/* verimizi state olarak göndermek zorundayiz
          tek parametre olursa url ikinci parametre state 
          3. parametre replace. tek basina da yazilabilir true yazmak zorunda degiliz.. history i siler. navigate ile bir yere yönlendirip history i silmek istersek. her bir navigate bir yere yönlendirdiginde history sisiyor. */}
        </Card>
      )
    })}
    </MainContainer>;
};

export default Cards;
