<script setup lang="ts">
import imgBackground from 'src/assets/img/login-half-block.jpg'
import logo from 'src/assets/img/logo.png'
import Button from 'src/components/Button/Button.vue';
import Input from 'src/components/Input/Input.vue';
import path from 'src/constants/path';
import { AuthSchema, authSchema } from 'src/utils/rules';
import { useForm } from 'vee-validate';

export type FormData = Pick<AuthSchema, 'email' | 'password'>;
const loginSchema = authSchema.pick(['email', 'password']);

const { handleSubmit } = useForm<FormData>({
  validationSchema: loginSchema,
  initialValues: {
    email: '',
    password: ''
  }
});


const onSubmit = handleSubmit(values => {
  console.log(values);
});
</script>

<template>
    <div class="h-screen md:flex items-center justify-center gap-0">
        <div class="md:h-full md:w-1/2">
            <img :src="imgBackground" alt="img" class="block h-full w-full object-cover">
        </div>
        <div class="md:w-1/2 h-full bg-bgOverlay px-4 md:px-20 xl:px-40 2xl:px-64 pt-10 relative">
            <div class="absolute top-0 left-0 text-center w-full -translate-y-1/2 md:static md:translate-y-0">
                <RouterLink :to="path.home">
                    <img :src="logo" alt="logo" class="mx-auto">
                </RouterLink>
            </div>
            <div class="mt-10 md:mt-[180px]">
                <h3 class="textPrimary text-[20px] mb-4 text-center md:text-left">
                    Lorem ipsum dolor sit amet
                </h3>
                <h2 class="text-[26px] md:text-[30px] font-normal mb-4 text-white font-Poppins text-center md:text-left">
                    Get more things, done with Loggin platform.
                </h2>
                <p class="text-[16px] opacity-70 text-white font-light text-center md:text-left">
                    Access to the most powerfull tool in the entire design and web industry
                </p>
            </div>
            <div class="mt-6">
                <form @submit="onSubmit">
                    <Input name="email" type="text" placeholder="Email" />
                    <Input name="password" type="password" placeholder="Password" />
                    <div class="items-center lg:justify-between justify-center flex flex-col lg:flex-row">
                        <Button extend-class="mx-auto block lg:m-[unset] lg:w-auto w-full">Login</Button>
                        <router-link :to="path.register" class="block font-medium text-[16px] mt-4 lg:mt-0  text-white opacity-70">Not Registered Yet?</router-link>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>

</style>