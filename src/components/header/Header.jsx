import HeaderStyle, { Button, FoodInput, FormContainer, HeaderContainer, MainHeader, Select } from "./Header.style";

const Header = ({
  setQuery,
  setSelectedMeal,
  mealTypes,
  getData,
  setRecipes,
}) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    getData();
  };

  return (
    <HeaderContainer>
      <MainHeader>RECIPE APP</MainHeader>
      <FormContainer onSubmit={handleSubmit}>
        <FoodInput
          type="text"
          placeholder="Search"
          onChange={(e) => setQuery(e.target.value)}
        />
        <Button type="submit">Search</Button>
        <Select
          name="mealType"
          id="mealType"
          onChange={(e) => setSelectedMeal(e.target.value)}
        >
          {mealTypes.map((item, index) => {
            return (
              <option value={item} key={index}>
                {item.toLowerCase()}
              </option>
            );
          })}
        </Select>
      </FormContainer>
    </HeaderContainer>
  );
};

export default Header;