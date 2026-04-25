"use client"
import { authClient } from "@/lib/auth-client";
import { Button, FieldError, Input, Label, TextField, Form, InputGroup } from "@heroui/react";
import Link from "next/link";
import { useState } from "react";
import { Eye, EyeSlash } from '@gravity-ui/icons';

const Login = () => {
    const [isVisible, setIsVisible] = useState(false);

    const onSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const userData = Object.fromEntries(formData);

        const { data, error } = await authClient.signIn.email({
            email: userData.email,
            password: userData.password,
            rememberMe: true,
            callbackURL: "/",
        });

        console.log({ data, error });

        if (error) {
            alert(error.message);
        }

        if (data) {
            alert("Login Successfull");
        }
    };

    return (
        <div className="bg-white shadow-md drop-shadow-2xl w-fit p-6 rounded-md mx-auto space-y-3">
            <h1 className="font-semibold text-3xl mb-5 text-center">Login your account</h1>

            <div className="mx-auto flex flex-col justify-center items-center">
                <Form className="flex w-96 flex-col gap-4" onSubmit={onSubmit}>
                    <TextField
                        isRequired
                        name="email"
                        type="email"
                    >
                        <Label>Email</Label>
                        <Input placeholder="Enter your email" />
                        <FieldError />
                    </TextField>
                    <TextField
                        isRequired
                        name="password"
                        type="password"
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
                    </TextField>
                    <div className="flex gap-2">
                        <Button variant="outline" type="submit" className={"bg-slate-800 text-white w-full font-semibold"}>
                            Login
                        </Button>
                    </div>
                </Form>
            </div>

            <p className="font-semibold text-gray-500 flex justify-center items-center">
                Dont’t Have An Account ? <Link href={"/register"}><span className="text-orange-600">Register</span></Link>
            </p>
        </div>
    );
};

export default Login;