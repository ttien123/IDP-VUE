<script setup lang="ts">
import gsap from 'gsap';
import imgBackground from 'src/assets/img/reg-half-block.jpg'
import logo from 'src/assets/img/logo.png'
import Button from 'src/components/Button/Button.vue';
import Input from 'src/components/Input/Input.vue';
import path from 'src/constants/path';
import { AuthSchema, authSchema } from 'src/utils/rules';
import { useForm } from 'vee-validate';
import { onMounted, ref } from 'vue';

export type FormData = Pick<AuthSchema, 'email' | 'password' | 'fullName' | 'phone'>;
const loginSchema = authSchema.pick(['email', 'password', 'fullName', 'phone']);

const { handleSubmit } = useForm<FormData>({
  validationSchema: loginSchema,
  initialValues: {
    email: '',
    password: '',
    fullName: '',
    phone: ''
  }
});

const imageRef = ref(null);
const loginRef = ref(null);


const onSubmit = handleSubmit(values => {
  console.log(values);
});

onMounted(() => {
    gsap.fromTo(
        imageRef.value,
            {   
                opacity: 0,
                x: 300
            },    
            { 
                opacity: 1,
                x: 0, 
                duration: 0.75 
            }
    );
    gsap.fromTo(
        loginRef.value,
        {   
            opacity: 0,
            x: -300
        },    
        { 
            opacity: 1,
            x: 0, 
            duration: 0.75 
        }
    );
});
</script>

<template>
    <div class="h-screen md:flex items-center justify-center gap-0 flex-row-reverse bg-bgOverlay overflow-hidden">
        <div ref="imageRef" class="md:h-full md:w-1/2">
            <img :src="imgBackground" alt="img" class="block h-full w-full object-cover">
        </div>
        <div ref="loginRef" class="md:w-1/2 h-full bg-bgOverlay px-4 md:px-16 xl:px-28 2xl:px-60 pt-10 relative">
            <div class="absolute top-0 left-0 w-full -translate-y-1/2 md:static md:translate-y-0">
                <RouterLink :to="path.home">
                    <img :src="logo" alt="logo" class="mx-auto lg:mx-[unset]">
                </RouterLink>
            </div>
            <div class="mt-10 lg:mt-[150px]">
                <h3 class="textPrimary text-[20px] mb-4 text-center md:text-left">
                    Lorem ipsum dolor sit amet
                </h3>
                <h2 class="text-[26px] md:text-[30px] font-normal mb-4 text-white font-Poppins text-center md:text-left">
                    Get more things, done with Registeration platform.
                </h2>
                <p class="text-[16px] opacity-70 text-white font-light text-center md:text-left">
                    Access to the most powerfull tool in the entire design and web industry
                </p>
            </div>
            <div class="mt-6">
                <form @submit="onSubmit">
                    <div class="flex w-full items-center justify-between md:gap-[30px] flex-col md:flex-row">
                        <Input name="fullName" type="text" placeholder="Full Name" extend-class-wrapper="w-full"/>
                        <Input name="phone" type="text" placeholder="Phone No" extend-class-wrapper="w-full"/>
                    </div>
                    <Input name="email" type="text" placeholder="Email" />
                    <Input name="password" type="password" placeholder="Password" />
                    <div class="items-center lg:justify-between justify-center flex flex-col lg:flex-row">
                        <Button extend-class="mx-auto block lg:m-[unset] lg:w-auto w-full">Register</Button>
                        <RouterLink  :to="path.login" class="block font-medium text-[16px] mt-4 lg:mt-0  text-white opacity-70 transition-colors duration-200 hover:text-[#fa2851]">Already registered! Login here?</RouterLink>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<style lang="css" scoped>
    
</style>