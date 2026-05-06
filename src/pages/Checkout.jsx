import React, { useState } from "react";
import {
  Box,
  Card,
  Typography,
  TextField,
  Button,
  Stepper,
  Step,
  StepLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  Divider,
} from "@mui/material";

import { useSelector, useDispatch } from "react-redux";
import { clearCart } from "../features/cart/cartSlice";
import { Link as RouterLink, useNavigate } from "react-router-dom";

const steps = ["Shipping Info", "Payment Method", "Review Order"];

export default function Checkout() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart.items);

  const total = items.reduce((t, i) => t + i.price * i.quantity, 0);

  const [step, setStep] = useState(0);
  const [orderTotal, setOrderTotal] = useState(0);

  const [shipping, setShipping] = useState({
    fullName: "",
    address: "",
    city: "",
    postalCode: "",
  });

  const [payment, setPayment] = useState({
    method: "card",
    cardNumber: "",
    expireDate: "",
  });

  const [errors, setErrors] = useState({});

  const validateShipping = () => {
    let err = {};
    if (!shipping.fullName) err.fullName = "Required";
    if (!shipping.address) err.address = "Required";
    if (!shipping.city) err.city = "Required";
    if (!shipping.postalCode) err.postalCode = "Required";
    setErrors(err);
    return Object.keys(err).length === 0;
  };

  const validatePayment = () => {
    let err = {};
    if (payment.method === "card") {
      if (!/^\d{12,19}$/.test(payment.cardNumber))
        err.cardNumber = "Invalid card number";
      if (!/^\d{2}\/\d{2}$/.test(payment.expireDate))
        err.expireDate = "MM/YY format required";
    }
    setErrors(err);
    return Object.keys(err).length === 0;
  };

  const nextStep = () => {
    if (step === 0 && !validateShipping()) return;
    if (step === 1 && !validatePayment()) return;
    setStep((s) => s + 1);
  };

  const placeOrder = () => {
    setOrderTotal(total);
    dispatch(clearCart());
    setStep(3);
  };

  if (step === 3) {
    return (
      <Box
        sx={{
          maxWidth: 600,
          mx: "auto",
          mt: { xs: 4, md: 6 },
          px: 2,
        }}
      >
        <Card sx={{ p: { xs: 3, md: 4 }, textAlign: "center", borderRadius: 3 }}>
          <Typography variant="h4" fontWeight={700}>
            Order Confirmed
          </Typography>

          <Typography sx={{ mt: 2 }}>
            Your order has been successfully placed.
          </Typography>

          <Divider sx={{ my: 2 }} />

          <Typography variant="h6">Total Paid: ${orderTotal}</Typography>

          <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
            A confirmation message has been sent and your order will be processed soon.
          </Typography>

          <Button
            component={RouterLink}
            to="/"
            variant="contained"
            color="success"
            sx={{ mt: 3, width: { xs: "100%", sm: "auto" } }}
          >
            Continue Shopping
          </Button>
        </Card>
      </Box>
    );
  }

  return (
    <Box
      sx={{
        maxWidth: 750,
        mx: "auto",
        my: { xs: 3, md: 6 },
        px: { xs: 2, sm: 3 },
      }}
    >
      {/* STEPPER */}
      <Stepper
        activeStep={step}
        alternativeLabel
        sx={{
          mb: { xs: 3, md: 4 },
          "& .MuiStepLabel-label": {
            fontSize: { xs: "12px", sm: "14px" },
          },
        }}
      >
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>

      <Card sx={{ p: { xs: 2, sm: 3 }, borderRadius: 3 }}>
        {/* SHIPPING */}
        {step === 0 && (
          <Box>
            <Typography variant="h6" sx={{ mb: 2 }}>
              Shipping Information
            </Typography>

            <TextField
              fullWidth
              label="Full Name"
              sx={{ mb: 2 }}
              value={shipping.fullName}
              onChange={(e) =>
                setShipping({ ...shipping, fullName: e.target.value })
              }
              error={!!errors.fullName}
              helperText={errors.fullName}
            />

            <TextField
              fullWidth
              label="Address"
              sx={{ mb: 2 }}
              value={shipping.address}
              onChange={(e) =>
                setShipping({ ...shipping, address: e.target.value })
              }
              error={!!errors.address}
              helperText={errors.address}
            />

            <Box
              sx={{
                display: "flex",
                flexDirection: { xs: "column", sm: "row" },
                gap: 2,
              }}
            >
              <TextField
                fullWidth
                label="City"
                value={shipping.city}
                onChange={(e) =>
                  setShipping({ ...shipping, city: e.target.value })
                }
                error={!!errors.city}
                helperText={errors.city}
              />

              <TextField
                fullWidth
                label="Postal Code"
                value={shipping.postalCode}
                onChange={(e) =>
                  setShipping({ ...shipping, postalCode: e.target.value })
                }
                error={!!errors.postalCode}
                helperText={errors.postalCode}
              />
            </Box>
          </Box>
        )}

        {/* PAYMENT */}
        {step === 1 && (
          <Box>
            <Typography variant="h6" mb={2}>
              Payment Method
            </Typography>

            <RadioGroup
              value={payment.method}
              onChange={(e) =>
                setPayment({ ...payment, method: e.target.value })
              }
            >
              <FormControlLabel
                value="card"
                control={<Radio color="success" />}
                label="Credit Card"
              />
              <FormControlLabel
                value="cod"
                control={<Radio color="success" />}
                label="Cash on Delivery"
              />
            </RadioGroup>

            {payment.method === "card" && (
              <>
                <TextField
                  fullWidth
                  label="Card Number"
                  sx={{ mt: 2 }}
                  value={payment.cardNumber}
                  onChange={(e) =>
                    setPayment({ ...payment, cardNumber: e.target.value })
                  }
                  error={!!errors.cardNumber}
                  helperText={errors.cardNumber}
                />

                <TextField
                  fullWidth
                  label="Expire Date (MM/YY)"
                  sx={{ mt: 2 }}
                  value={payment.expireDate}
                  onChange={(e) =>
                    setPayment({ ...payment, expireDate: e.target.value })
                  }
                  error={!!errors.expireDate}
                  helperText={errors.expireDate}
                />
              </>
            )}
          </Box>
        )}

        {/* REVIEW */}
        {step === 2 && (
          <Box>
            <Typography variant="h6" mb={2}>
              Order Review
            </Typography>

            <Typography fontWeight={600}>Shipping:</Typography>
            <Typography variant="body2">
              {shipping.fullName}, {shipping.address}, {shipping.city},{" "}
              {shipping.postalCode}
            </Typography>

            <Divider sx={{ my: 2 }} />

            <Typography fontWeight={600}>Payment:</Typography>
            <Typography variant="body2">
              {payment.method === "card"
                ? "Credit Card"
                : "Cash on Delivery"}
            </Typography>

            <Divider sx={{ my: 2 }} />

            <Typography fontWeight={600}>Items:</Typography>
            {items.map((i) => (
              <Typography key={i.id} variant="body2">
                {i.title} × {i.quantity} = ${i.price * i.quantity}
              </Typography>
            ))}

            <Divider sx={{ my: 2 }} />

            <Typography variant="h6">Total: ${total}</Typography>
          </Box>
        )}

        {/* BUTTONS */}
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            justifyContent: "flex-end",
            gap: 1.5,
            mt: 4,
          }}
        >
          <Button
            fullWidth
            onClick={() => {
              if (step === 0) navigate(-1);
              else setStep((s) => s - 1);
            }}
            variant="outlined"
            color="success"
          >
            Back
          </Button>

          {step < 2 && (
            <Button fullWidth variant="contained" color="success" onClick={nextStep}>
              Next
            </Button>
          )}

          {step === 2 && (
            <Button fullWidth variant="contained" color="success" onClick={placeOrder}>
              Place Order
            </Button>
          )}
        </Box>
      </Card>
    </Box>
  );
}
