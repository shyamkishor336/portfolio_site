<template>
    <div>
        <div class="flex flex-row justify-evenly p-5">
            <div class="text-xl">
                <nuxt-link to="/">Home</nuxt-link>
            </div>
            <div class="text-xl">
                <nuxt-link to="/#projects-papers">Projects/Papers</nuxt-link>
            </div>
            <div class="text-xl">
                <a target="_blank" href="/SACHIN_CV.pdf">CV</a>
            </div>
        </div>
        <div class="bg-[url('@/static/mo-main-gradient.png')] h-[95vh] relative" >
            <div class="absolute bottom-0">
                <div class="w-screen flex justify-center overflow-hidden">
                    <img class="min-w-[500px] h-[85vh]" src ="@/static/sachin-BW.png" />
                </div>
            </div>
            <div class="absolute bottom-[20vw] w-full">
                <div class="sachin text-transparent text-[17vw]  font-bold leading-[18vw] text-center" >
                    SACHIN
                </div>
                <div class="text-white text-[17vw]  font-bold leading-[18vw] text-center">
                    PARAJULI
                </div>
                <div class="text-[#d4d5d7] text-[3.5vw] text-center">Electronics and Communication Engineer</div>
            </div>
        </div>
    </div>

</template>


<style scoped>
.sachin{
    -webkit-text-stroke: 1px white;
}
</style>