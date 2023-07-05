import { Container, Grid } from "@mui/material";
import AmortizationSelect from "./Components/AmortizationSelect";
import Navbar from "./Components/Navbar";
import Result from "./Components/Result";
import SliderSelect from "./Components/SliderSelect";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Container maxWidth="xl" sx={{ marginTop: 4 }}>
        <Grid container spacing={5}>
          <Grid item xs={12} md={6}>
            <SliderSelect />
            <AmortizationSelect />
          </Grid>
          <Grid item xs={12} md={6}>
            <Result />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default App;
