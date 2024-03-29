import {
  Box,
  Button,
  Container,
  FormControl,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import "../cssFiles/login.css";
import IconButton from "@mui/material/IconButton";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth, db } from "../firebase-config";
import { setDoc, doc, getDoc } from "firebase/firestore";
import { useNavigate } from "react-router";
import useAuth from "../hooks/useAuth";
import useJaneHopkins from "../hooks/useJaneHopkins";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

const Login = () => {
  const nav = useNavigate();
  const [page, setPage] = useState("Login");
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [repeatPassword, setRepeatPassword] = useState();
  const [role, setRole] = useState();
  const [showPassword, setShowPassword] = React.useState(false);
  const [user, setUser] = useState({});
  const { setAuth } = useAuth();
  const { entities } = useJaneHopkins();

  onAuthStateChanged(auth, (currentUser) => {
    if (user) {
      setUser(currentUser);
    }
  });

  const login = async () => {
    await signInWithEmailAndPassword(auth, email, password).then(
      async (result) => {
        try {
          const userRef = doc(db, "users", result.user.uid);
          const userData = await getDoc(userRef);
          const email = userData.get("email");
          const name = userData.get("name");
          const role = userData.get("role");
          const id = userData.get("id");
          setAuth({ email, name, role, id });
        } catch (error) {
          console.log(error.message);
        }
      }
    );
    nav("/");
  };

  const register = async () => {
    if (password === repeatPassword) {
      await createUserWithEmailAndPassword(auth, email, password).then(
        async (result) => {
          try {
            try {
              if (role === "JaneHopkinsDoctor") {
                addDoctor();
              }
            } catch (error) {
              console.log(error.message);
            }
            const usersRef = doc(db, "users", result.user.uid);
            const userData = {
              email: email,
              name: name,
              role: role,
            };
            const userRef = await setDoc(usersRef, userData);
            console.log(userRef);
          } catch (error) {
            console.log(error.message);
          }
        }
      );
      nav("/");
    }
  };

  const addDoctor = async () => {
    const doctorResponse = await entities.doctor.add({
      name: name,
    });
    console.log(doctorResponse);
  };

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (e) => {
    e.preventDefault();
  };

  const setPageRegister = () => {
    setPage("Register");
    setEmail("");
    setPassword("");
    setName("");
    setRepeatPassword("");
  };

  const setPageLogin = () => {
    setPage("Login");
    setEmail("");
    setPassword("");
    setRepeatPassword("");
  };

  const validationSchema = Yup.object().shape({
    fullname: Yup.string().required("Fullname is required"),
    username: Yup.string()
      .required("Username is required")
      .min(6, "Username must be at least 6 characters")
      .max(20, "Username must not exceed 20 characters"),
    email: Yup.string().required("Email is required").email("Email is invalid"),
    password: Yup.string()
      .required("Password is required")
      .min(6, "Password must be at least 6 characters")
      .max(40, "Password must not exceed 40 characters"),
    confirmPassword: Yup.string()
      .required("Confirm Password is required")
      .oneOf([Yup.ref("password"), null], "Confirm Password does not match"),
    acceptTerms: Yup.bool().oneOf([true], "Accept Terms is required"),
    role: Yup.string()
      .required("Confirm Role")
      .oneOf(
        [Yup.ref("Doctor", "Patient", "Administrator"), null],
        "Confirm Role does not match"
      ),
  });

  const {
    //  control,
    //  handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  return (
    <div className="loginPage">
      <Container maxWidth="md">
        <Box className="fda" sx={{ pt: 4, pb: 6 }} bgcolor="grey">
          <div className="col-lg-12 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                {page === "Login" ? (
                  <Box component="form" mt={2} onSubmit={login}>
                    <div className="login">
                      <Typography variant="h2">Login</Typography>
                      <div>
                        <Typography variant="h6">User Email Address</Typography>
                        <TextField
                          required
                          id="email"
                          name="email"
                          label="Email Address"
                          value={email || ""}
                          onChange={(e) => {
                            setEmail(e.target.value);
                          }}
                          fullWidth
                          autoFocus
                          //{...register('email')}
                          error={errors.email ? true : false}
                        />
                      </div>
                      <div>
                        <Typography variant="h6">Password</Typography>
                        <TextField
                          required
                          id="password"
                          name="password"
                          label="Password"
                          type={showPassword ? "text" : "password"}
                          value={password || ""}
                          onChange={(e) => {
                            setPassword(e.target.value);
                          }}
                          fullWidth
                          autoFocus
                          InputProps={{
                            endAdornment: (
                              <IconButton
                                onClick={handleClickShowPassword}
                                onMouseDown={handleMouseDownPassword}
                                edge="end"
                                //{...register('password')}
                                error={errors.password ? true : false}
                              >
                                {showPassword ? (
                                  <VisibilityOff />
                                ) : (
                                  <Visibility />
                                )}
                              </IconButton>
                            ),
                          }}
                        />
                      </div>
                      <div className="button">
                        <div>
                          <Button
                            sx={{ mt: 2, mr: 83 }}
                            variant="contained"
                            onClick={() => login()}
                          >
                            Login
                          </Button>
                          <Button
                            sx={{ mt: 2 }}
                            variant="contained"
                            onClick={() => setPageRegister()}
                          >
                            Register
                          </Button>
                        </div>
                      </div>
                    </div>
                  </Box>
                ) : (
                  <Box component="form" mt={2} onSubmit={register}>
                    <div className="register">
                      <Typography variant="h2">Register</Typography>
                      <div>
                        <Typography variant="h6">Email Address</Typography>
                        <TextField
                          required
                          id="email"
                          name="email"
                          label="Email Address"
                          value={email || ""}
                          onChange={(e) => {
                            setEmail(e.target.value);
                          }}
                          fullWidth
                          autoFocus
                          //{...register('email')}
                          error={errors.email ? true : false}
                        />
                      </div>
                      <div>
                        <Typography variant="h6">Full Name</Typography>
                        <TextField
                          required
                          id="fullname"
                          name="fullname"
                          label="Full Name"
                          value={name || ""}
                          onChange={(e) => {
                            setName(e.target.value);
                          }}
                          fullWidth
                          //{...register('fullname')}
                          error={errors.fullname ? true : false}
                        />
                      </div>
                      <div>
                        <Typography variant="h6">Password</Typography>
                        <TextField
                          required
                          id="password"
                          name="password"
                          label="Password"
                          type={showPassword ? "text" : "password"}
                          value={password || ""}
                          onChange={(e) => {
                            setPassword(e.target.value);
                          }}
                          fullWidth
                          autoFocus
                          //{...register('password')}
                          error={errors.password ? true : false}
                          InputProps={{
                            endAdornment: (
                              <IconButton
                                onClick={handleClickShowPassword}
                                onMouseDown={handleMouseDownPassword}
                                edge="end"
                              >
                                {showPassword ? (
                                  <VisibilityOff />
                                ) : (
                                  <Visibility />
                                )}
                              </IconButton>
                            ),
                          }}
                        />
                      </div>
                      <div>
                        <Typography variant="h6">Repeat Password</Typography>
                        <TextField
                          required
                          id="password"
                          name="password"
                          label="Password"
                          type={showPassword ? "text" : "password"}
                          value={repeatPassword || ""}
                          onChange={(e) => {
                            setRepeatPassword(e.target.value);
                          }}
                          fullWidth
                          autoFocus
                          //{...register('password')}
                          error={errors.password ? true : false}
                          InputProps={{
                            endAdornment: (
                              <IconButton
                                onClick={handleClickShowPassword}
                                onMouseDown={handleMouseDownPassword}
                                edge="end"
                              >
                                {showPassword ? (
                                  <VisibilityOff />
                                ) : (
                                  <Visibility />
                                )}
                              </IconButton>
                            ),
                          }}
                        />
                      </div>
                      <div>
                        <FormControl fullWidth>
                          <Typography variant="h6">Role</Typography>
                          <Select
                            required
                            id="role"
                            name="role"
                            label="Role"
                            value={role || ""}
                            onChange={(e) => {
                              setRole(e.target.value);
                            }}
                            //{...register('role')}
                            error={errors.role ? true : false}
                          >
                            <MenuItem value={"JaneHopkinsDoctor"}>
                              Jane Hopkins Doctor
                            </MenuItem>
                            <MenuItem value={"JaneHopkinsAdmin"}>
                              Jane Hopkins Admin
                            </MenuItem>
                            <MenuItem value={"Bavaria"}>Bavaria</MenuItem>
                            <MenuItem value={"FDA"}>FDA</MenuItem>
                          </Select>
                        </FormControl>
                      </div>
                      <div className="button">
                        <div>
                          <Button
                            sx={{ mt: 2, mr: 74 }}
                            variant="contained"
                            onClick={() => register()}
                          >
                            Register
                          </Button>
                          <Button
                            sx={{ mt: 2 }}
                            variant="contained"
                            onClick={() => setPageLogin()}
                          >
                            Go Back to Login
                          </Button>
                        </div>
                      </div>
                    </div>
                  </Box>
                )}
              </div>
            </div>
          </div>
        </Box>
      </Container>
    </div>
  );
};

export default Login;
