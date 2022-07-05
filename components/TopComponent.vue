<template>
<div>
    <div class="absolute top-0 left-[20px] xl:left-[100px] h-screen flex flex-col justify-center">
        <div class="h-min mt-[25vh] xl:mt-0">
            <div class="sachin text-white text-[130px] leading-[130px] xl:text-[10vw] xl:leading-[10vw] 2xl:text-[200px] 2xl:leading-[200px] font-bold" >
                SACHIN
            </div>
            <div class="parajuli text-[#145f74] text-[130px] leading-[130px] xl:text-[10vw] xl:leading-[10vw] 2xl:text-[200px] 2xl:leading-[200px] font-bold">
                PARAJULI
            </div>
            <div class="text-[#4a4b4b] text-[20px] xl:text-[3vh]">Electronics and Communication Engineer</div>
        </div>
    </div>
    <div class="flex flex-row h-[100vh]">
        <div class="basis-[0%] xl:basis-[30%] 2xl:basis-[33.33%]">
        </div>
        <div class="basis-[100%] xl:basis-[70%] 2xl:basis-[66.67%] bg-[#f7f9f9]">
            <div class="ml-[25vh]">
                <div class="absolute right-[6vw]">
                    <div class="flex flex-row py-[2vw] text-[2vw]">
                        <nuxt-link to="/" class="mx-[2vw]">Home</nuxt-link>
                        <nuxt-link to="/#projects-papers" class="mx-[2vw] ">Projects/Papers</nuxt-link>
                        <nuxt-link to="/" class="mx-[2vw] ">CV</nuxt-link>
                    </div>
                </div>
            </div>
            <div class="mt-[5vh] ml-[15vw] xl:ml-0 flex flex-row h-[95vh]">
                <div class="basis-4/5 h-full flex justify-end">
                    <div class=" flex items-end">
                        <img src="@/static/sachin-color.png" class=" w-[60vh]" />
                    </div>
                </div>
                <div class="basis-1/5">
                    <div class="flex h-full justify-end">
                        <div class="flex h-full flex-col justify-center mr-[3vw]">
                            <a href="https://www.linkedin.com/in/sachin-parajuli-799612169/"><img  src="@/static/linkedin.png" class="w-[4vw] 2xl:w-[60px] my-[1vw] hover:cursor-pointer" /></a>
                            <a href="https://github.com/SACHIN-PARAJULI" ><img src="@/static/github.png" class="w-[4vw] 2xl:w-[60px] my-[1vw] hover:cursor-pointer" /></a>
                            <a href="https://scholar.google.com/citations?user=23uwkq4AAAAJ&hl=en"><img src="@/static/google.png" class="w-[4vw] 2xl:w-[60px] my-[1vw] hover:cursor-pointer" /></a>
                            <a href="https://www.researchgate.net/profile/Sachin-Parajuli-2"><img src="@/static/researchgate.png" class="w-[4vw] 2xl:w-[60px] my-[1vw] hover:cursor-pointer" /></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<style scoped>
.sachin{
    -webkit-text-stroke: 2px #145f74;
}

.sachin, .parajuli{
    font-family: Gotham;
}
</style>