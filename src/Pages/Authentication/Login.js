import React from "react";
import {
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import auth from "../../firebase/firebase.init";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

const Login = () => {
  const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
  const [signInWithEmailAndPassword, eUser, eLoading, eError] =
    useSignInWithEmailAndPassword(auth);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const handleRegister = async (data) => {
    await signInWithEmailAndPassword(data.email, data.password);
    reset();
  };
  return (
    <div>
      <div class="relative flex h-full w-full">
        <div class="h-screen w-2/3 bg-black mx-auto">
          <div class="mx-auto flex h-full w-2/3 flex-col justify-center text-white xl:w-1/2">
            <div>
              <p class="text-2xl">LOGIN</p>
              <p>
                New User? Please{" "}
                <Link className="link text-blue-600" to="/register">
                  REGISTER
                </Link>{" "}
              </p>
            </div>
            <div class="my-6">
              <button
                onClick={() => signInWithGoogle()}
                class="flex w-full justify-center rounded-3xl border-none bg-white p-1 text-black hover:bg-gray-200 sm:p-2"
              >
                <img
                  src="https://freesvg.org/img/1534129544.png"
                  alt=""
                  class="mr-2 w-6 object-fill"
                />
                Sign in with Google
              </button>
            </div>
            <div>
              <fieldset class="border-t border-solid border-gray-600">
                <legend class="mx-auto px-2 text-center text-sm">
                  Or login via our secure system
                </legend>
              </fieldset>
            </div>
            <div class="mt-10">
              <form onSubmit={handleSubmit(handleRegister)}>
                <div>
                  <label class="mb-2.5 block font-extrabold" for="email">
                    Email
                  </label>
                  <input
                    {...register("email", { required: true })}
                    type="email"
                    id="email"
                    class="inline-block w-full rounded-full bg-white p-2.5 leading-none text-black placeholder-indigo-900 shadow placeholder:opacity-30"
                    placeholder="mail@user.com"
                  />
                </div>
                <div class="mt-4">
                  <label class="mb-2.5 block font-extrabold" for="email">
                    Password
                  </label>
                  <input
                    {...register("password", { required: true })}
                    type="password"
                    id="password"
                    class="inline-block w-full rounded-full bg-white p-2.5 leading-none text-black placeholder-indigo-900 shadow"
                  />
                </div>
                <div class="mt-4 flex w-full flex-col justify-between sm:flex-row">
                  <div>
                    <input type="checkbox" id="remember" />
                    <label for="remember" class="mx-2 text-sm">
                      Remember me
                    </label>
                  </div>

                  <div>
                    <a href="." class="text-sm hover:text-gray-200">
                      Forgot password
                    </a>
                  </div>
                </div>
                <div class="my-10">
                  <button class="w-full rounded-full bg-primary p-5 hover:bg-orange-800 font-bold">
                    SIGN IN
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        {/* <div class="h-screen w-1/2 bg-blue-600">
          <img
            src="https://images.pexels.com/photos/2523959/pexels-photo-2523959.jpeg"
            class="h-full w-full"
          />
        </div> */}
      </div>
    </div>
  );
};

export default Login;
