"use client"
import { authClient } from "@/lib/auth-client";
import { Eye, EyeSlash } from "@gravity-ui/icons";
import { Button, FieldError, Input, Label, TextField, Form, Description, InputGroup } from "@heroui/react";
import { useState } from "react";

const Register = () => {

    const [isVisible, setIsVisible] = useState(false);

    const onSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const userData = Object.fromEntries(formData);

        const { data, error } = await authClient.signUp.email({
            name: userData.name,
            email: userData.email,
            password: userData.password,
            callbackURL: "/login",
        });

        console.log({ data, error });

        if (error) {
            alert(error.message);
        }

        if (data) {
            alert("Sign Up Successfull");
        }

    };

    return (
        <div className="bg-white shadow-md drop-shadow-2xl w-fit p-6 rounded-md mx-auto">
            <h1 className="font-semibold text-3xl mb-5 text-center">Register your account</h1>

            <div className="mx-auto flex flex-col justify-center items-center">
                <Form className="flex w-96 flex-col gap-4" onSubmit={onSubmit}>
                    <TextField
                        isRequired
                        name="name"
                        validate={(value) => {
                            if (value.length < 5) {
                                return "Name must be at least 5 characters";
                            }
                            return null;
                        }}
                    >
                        <Label>Name</Label>
                        <Input name="name" placeholder="Enter your name" />
                        <FieldError />
                    </TextField>
                    <TextField
                        isRequired
                        name="email"
                        type="email"
                        validate={(value) => {
                            if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                                return "Please enter a valid email address";
                            }
                            return null;
                        }}
                    >
                        <Label>Email</Label>
                        <Input name="email" placeholder="Enter your email" />
                        <FieldError />
                    </TextField>
                    <TextField
                        isRequired
                        minLength={8}
                        name="password"
                        type="password"
                        validate={(value) => {
                            if (value.length < 8) {
                                return "Password must be at least 8 characters";
                            }
                            if (!/[A-Z]/.test(value)) {
                                return "Password must contain at least one uppercase letter";
                            }
                            if (!/[0-9]/.test(value)) {
                                return "Password must contain at least one number";
                            }
                            return null;
                        }}
                    >
                        <Label>Password</Label>
                        <InputGroup>
                            <InputGroup.Input
                                className="w-full max-w-70"
                                type={isVisible ? "text" : "password"}
                                placeholder="Enter your password"
                            />
                            <InputGroup.Suffix className="pr-0">
                                <Button
                                    isIconOnly
                                    aria-label={isVisible ? "Hide password" : "Show password"}
                                    size="sm"
                                    variant="ghost"
                                    onPress={() => setIsVisible(!isVisible)}
                                >
                                    {isVisible ? <Eye className="size-4" /> : <EyeSlash className="size-4" />}
                                </Button>
                            </InputGroup.Suffix>
                        </InputGroup>
                        <Description>Must be at least 8 characters with 1 uppercase and 1 number</Description>
                        <FieldError />
                    </TextField>
                    <div className="flex gap-2">
                        <Button variant="outline" type="submit" className={"bg-slate-800 text-white w-full font-semibold"}>
                            Register
                        </Button>
                    </div>
                </Form>
            </div>
        </div>
    );
};

export default Register;