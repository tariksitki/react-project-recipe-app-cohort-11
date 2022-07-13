import './App.css';
import AppRouter from './router/AppRouter';
import theme from "./components/globalStyles/theme";
import {ThemeProvider} from "styled-components";
// bunun geri planinda context api calisir. Bunu hazir olarak kullaniyoruz. icerisine de theme adinda kendi olusturdugumuz dosyayi veriyoruz.

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme} >
        <AppRouter />
      </ThemeProvider>
    </div>
  );
}

export default App;
