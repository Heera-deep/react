// import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useForm, Controller } from "react-hook-form";
import {
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Button,
} from "@mui/material";
import { Splide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

const ResponsiveForm = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="container-fluid vh-100 d-flex align-items-center">
      <div className="row w-100">
        {/* Left Section */}
        <div className="col-lg-6 bg-primary text-white d-flex flex-column justify-content-center p-5">
          <div className="mb-4">
            <h1 className="fw-bold">
              Let&apos;s setup your Operating Agreement
            </h1>
            <p className="fs-5">
              All-in-one solution for your business in the state. Form a new
              company from scratch or onboard your existing US company.
            </p>
          </div>
          <Splide
            options={{
              type: "fade",
              autoplay: true,
              interval: 3000,
              arrows: true,
              pagination: true,
              easing: "ease-in-out",
              
            }}
            aria-label="Testimonials">
            <div className="splide__slide bg-white text-dark p-4 rounded shadow">
              <p className="mb-2">
                I barely had to do anything. Love the experience. Got my
                business set up and all necessary details in about a month and I
                barely had to do anything. Definitely recommend!
              </p>
              <div className="d-flex align-items-center">
                <img
                  src="https://img.freepik.com/free-photo/fun-3d-cartoon-squirrel-dancing_183364-120133.jpg?t=st=1737782077~exp=1737785677~hmac=7c9140dab64b4353bc943c01013b542c189c8e9a34805cb9c5407c5561d186d9&w=740"
                  width="60px"
                  alt="Avatar"
                  className="rounded-circle me-3"
                />
                <div>
                  <strong>Catherine Johns</strong>
                  <br />
                  <span>⭐⭐⭐⭐⭐</span>
                </div>
              </div>
            </div>
            <div className="splide__slide bg-white text-dark p-4 rounded shadow">
              <p className="mb-2">
                This service is fantastic. It was seamless and fast. Highly
                recommend it to anyone setting up their business!
              </p>
              <div className="d-flex align-items-center">
                <img
                  width="60px"
                  src="https://img.freepik.com/free-photo/fun-3d-cartoon-squirrel-dancing_183364-120133.jpg?t=st=1737782077~exp=1737785677~hmac=7c9140dab64b4353bc943c01013b542c189c8e9a34805cb9c5407c5561d186d9&w=740"
                  alt="Avatar"
                  className="rounded-circle me-3"
                />
                <div>
                  <strong>John Doe</strong>
                  <br />
                  <span>⭐⭐⭐⭐⭐</span>
                </div>
              </div>
            </div>
          </Splide>
        </div>

        {/* Right Section */}
        <div className="col-lg-6 d-flex align-items-center justify-content-center p-5">
          <div className="w-100" style={{ maxWidth: "500px" }}>
            <h2 className="mb-4">Let’s get started</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="row mb-3">
                <div className="col">
                  <Controller
                    name="firstName"
                    control={control}
                    defaultValue=""
                    rules={{
                      required: "First name is required",
                      minLength: {
                        value: 2,
                        message:
                          "First name must be at least 2 characters long",
                      },
                    }}
                    render={({ field }) => (
                      <TextField
                        {...field}
                        fullWidth
                        label="First name"
                        variant="outlined"
                        error={!!errors.firstName}
                        helperText={errors.firstName?.message}
                      />
                    )}
                  />
                </div>
                <div className="col">
                  <Controller
                    name="lastName"
                    control={control}
                    defaultValue=""
                    rules={{ required: "Last name is required" }}
                    render={({ field }) => (
                      <TextField
                        {...field}
                        fullWidth
                        label="Last name"
                        variant="outlined"
                        error={!!errors.lastName}
                        helperText={errors.lastName?.message}
                      />
                    )}
                  />
                </div>
              </div>

              <div className="mb-3">
                <Controller
                  name="email"
                  control={control}
                  defaultValue=""
                  rules={{
                    required: "Email is required",
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: "Invalid email address",
                    },
                  }}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      fullWidth
                      label="Email"
                      type="email"
                      variant="outlined"
                      error={!!errors.email}
                      helperText={errors.email?.message}
                    />
                  )}
                />
              </div>

              <div className="row mb-3">
                <div className="col">
                  <FormControl fullWidth error={!!errors.country}>
                    <InputLabel>Country of residence</InputLabel>
                    <Controller
                      name="country"
                      control={control}
                      defaultValue=""
                      rules={{ required: "Country is required" }}
                      render={({ field }) => (
                        <Select {...field}>
                          <MenuItem value="">
                            <em>Select your country</em>
                          </MenuItem>
                          <MenuItem value="United States">
                            United States
                          </MenuItem>
                          <MenuItem value="India">India</MenuItem>
                        </Select>
                      )}
                    />
                  </FormControl>
                </div>
                <div className="col">
                  <FormControl fullWidth error={!!errors.state}>
                    <InputLabel>State</InputLabel>
                    <Controller
                      name="state"
                      control={control}
                      defaultValue=""
                      rules={{ required: "State is required" }}
                      render={({ field }) => (
                        <Select {...field}>
                          <MenuItem value="">
                            <em>Select your state</em>
                          </MenuItem>
                          <MenuItem value="Delaware">Delaware</MenuItem>
                          <MenuItem value="California">California</MenuItem>
                        </Select>
                      )}
                    />
                  </FormControl>
                </div>
              </div>

              <div className="mb-3">
                <Controller
                  name="phone"
                  control={control}
                  defaultValue=""
                  rules={{
                    required: "Phone number is required",
                    pattern: {
                      value: /^\+?[1-9]\d{1,14}$/,
                      message: "Invalid phone number format",
                    },
                  }}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      fullWidth
                      label="Phone number"
                      type="tel"
                      variant="outlined"
                      error={!!errors.phone}
                      helperText={errors.phone?.message}
                    />
                  )}
                />
              </div>

              <div className="mb-4">
                <Controller
                  name="password"
                  control={control}
                  defaultValue=""
                  rules={{
                    required: "Password is required",
                    minLength: {
                      value: 6,
                      message: "Password must be at least 6 characters long",
                    },
                    pattern: {
                      value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/,
                      message:
                        "Password must contain at least one letter and one number",
                    },
                  }}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      fullWidth
                      label="Password"
                      type="password"
                      variant="outlined"
                      error={!!errors.password}
                      helperText={errors.password?.message}
                    />
                  )}
                />
              </div>

              <Button
                variant="contained"
                color="primary"
                fullWidth
                type="submit">
                GET STARTED
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResponsiveForm;
