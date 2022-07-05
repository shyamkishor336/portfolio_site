<template>
    <div class="flex flex-row justify-center bg-[#125d72] h-[200px] w-full mt-[100px] font-['Poppins', sans-serif] ">
        <div class="w-[70vw] flex flex-col justify-center">
            <div class="flex flex-col flex-col-reverse sm:flex-row justify-between">
                <div class="text-white font-light text-center sm:text-left mt-4 sm:mt-0">
                    <p>Sachin Parajuli @ {{currentYear}}</p>
                    <p>All Rights Reserved</p>
                </div>
                <div class="grid grid-rows-2 items-center lg:grid-rows-1 grid-flow-col gap-4 ">
                    <a href="mailto:hellosachinbro@gmail.com" class="flex flex-row justify-center" ><img src="@/static/icons/white/emailwhite.png" class="w-[40px] h-[40px] hover:cursor-pointer" /></a>
                    <a href="https://www.linkedin.com/in/sachin-parajuli-799612169/" class="flex flex-row justify-center" ><img src="@/static/icons/white/linkedwhite.png" class="w-[40px] h-[40px] hover:cursor-pointer" /></a>
                    <a href="https://github.com/SACHIN-PARAJULI" class="flex flex-row justify-center" ><img src="@/static/icons/white/githubwhite.png" class="w-[40px] h-[40px] hover:cursor-pointer" /></a>
                    <a href="https://scholar.google.com/citations?user=23uwkq4AAAAJ&hl=en" class="flex flex-row justify-center" ><img src="@/static/icons/white/googlewhite.png" class="w-[40px] h-[40px] hover:cursor-pointer" /></a>
                    <a href="https://www.researchgate.net/profile/Sachin-Parajuli-2" class="flex flex-row justify-center" ><img src="@/static/icons/white/rgwhite.png" class="w-[40px] h-[40px] hover:cursor-pointer" /></a>
                    <a href="https://www.instagram.com/sachin_parajuli369/?hl=en" class="flex flex-row justify-center" ><img src="@/static/icons/white/instawhite.png" class="w-[40px] h-[40px] hover:cursor-pointer" /></a>
                    <a href="" class="flex flex-row justify-center" ><img src="@/static/icons/white/pdfwhite.png" class="w-[40px] h-[40px] hover:cursor-pointer" /></a>
                    <a href="https://www.facebook.com/sachin.parajuli.58/" class="flex flex-row justify-center" ><img src="@/static/icons/white/fbwhite.png" class="w-[40px] h-[40px] hover:cursor-pointer" /></a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    computed: {
        currentYear(){
            return new Date().getFullYear()
        }
    }
}
</script>

<style scoped>

</style>