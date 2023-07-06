import { useState } from "react";
import { Container, Grid } from "@mui/material";
import AmortizationSelect from "./Components/AmortizationSelect";
import Navbar from "./Components/Navbar";
import Result from "./Components/Result";
import SliderSelect from "./Components/SliderSelect";

function App() {
  const [data, setData] = useState({
    homeValue: 250000,
    downPayment: 0 * 0.2,
    loanAmount: 3000 * 0.8,
    loanTerm: 15,
    interestRate: 5,
  });

  return (
    <div className="App">
      <Navbar />
      <Container maxWidth="xl" sx={{ marginTop: 4 }}>
        <Grid container spacing={5} alignItems="center">
          <Grid item xs={12} md={6}>
            <SliderSelect data={data} setData={setData} />
            <AmortizationSelect data={data} setData={setData} />
          </Grid>
          <Grid item xs={12} md={6}>
            <Result data={data} />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default App;
