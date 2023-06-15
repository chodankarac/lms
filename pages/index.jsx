import { Inter } from "next/font/google";
import ViewDetails from "./crud/view";
import { Grid } from "@mui/material";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Grid container>
        <Grid item lg={2}></Grid>
        <Grid item lg={8}>
          <ViewDetails />
        </Grid>
        <Grid item lg={2}></Grid>
      </Grid>
    </>
  );
}
