import CustomerTable from "@/components/CustomerTable";
import { Button, Stack, Typography } from "@mui/material";
import styles from "./view.module.css";
import React from "react";
import { useRouter } from "next/router";

const ViewDetails = () => {
  const router = useRouter();
  function addCustomerDetails() {
    void router.push("/crud/create");
  }

  return (
    <>
      <Stack direction="row" className={styles.viewHeader}>
        <Typography variant="h4" component="div" sx={{ color: "#4169E1", fontWeight: "bold" }}>
          Customer Data
        </Typography>
        <Button className={styles.addCustomerbutton} onClick={addCustomerDetails}>
          + Add Customers
        </Button>
      </Stack>
      <CustomerTable />
    </>
  );
};

export default ViewDetails;
