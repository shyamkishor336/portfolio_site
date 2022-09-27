<template>
    <div class="worklist w-full flex flex-row justify-center">
        <div class="sm:w-[1050px] grid lg:grid-cols-2 gap-y-10 justify-items-center">
            <div class="card">
                <a href="/risk-readmission-patients-diabetes-mellitus">
                    <img src="@/static/projects_papers/diabetes.jpg" class="w-full h-[300px] bg-white object-contain">
                </a>
                <div class="uppercase text-base mt-6 ">        
                    IEEE XPLORE
                </div>
                <div class="text-2xl text-bold mt-2 capitalize">
                    A data driven approach to predict the risk of readmission among patients with diabetes mellitus
                </div>
                <div class="mt-2">
                    <div class="inline-block mt-3">
                        <span class="p-2 mr-2 mt-5 text-xs bg-slate-300 rounded-lg" >
                            Machine Learning
                        </span>
                        <span class="p-2 mr-2 text-xs bg-slate-300 rounded-lg" >
                            Data Analysis
                        </span>
                        
                    </div>
                    <a href="/risk-readmission-patients-diabetes-mellitus">
                        <span  class="p-2 mt-4 sm:mt-0 pb-1 px-5 text-base border-2 float-right rounded-full cursor-pointer hover:bg-slate-300">
                            Read More
                        </span>
                    </a>
                </div>
            </div>

            <div class="card w-[300px] sm:w-[600px]">
                <a href ="/human-pose-estimation-in-3d-using-heatmaps">
                    <img src="@/static/projects_papers/humanpose.png" class="w-full h-[300px] bg-white object-contain">
                </a>

                <div class="uppercase text-base mt-6 ">
                    IEEE XPLORE
                </div>
                <div class="text-2xl text-bold mt-2 capitalize">
                    Human Pose Estimation in 3D using heatmaps
                </div>
                <div class="mt-2">
                    <div class="inline-block mt-3">
                        <span class="p-2 mr-2 mt-5 text-xs bg-slate-300 rounded-lg" >
                            Hourglass Module
                        </span>
                        <span class="p-2 mr-2 text-xs bg-slate-300 rounded-lg" >
                            Neural Network
                        </span>
                        
                    </div>
                    <a href ="human-pose-estimation-in-3d-using-heatmaps">
                        <span class="p-2 mt-4 sm:mt-0 pb-1 px-5 text-base border-2 float-right rounded-full cursor-pointer hover:bg-slate-300">
                            Read More
                        </span>
                    </a>
                </div>
            </div>

            <div class="card w-[300px] sm:w-[500px]">
                <a href ="/remote-monitoring-and-face-recognition-security-enabled-smart-home-using-iot">
                    <img src="@/static/projects_papers/IOT.png" class="w-full h-[300px] bg-white object-contain">
                </a>
                <div class="uppercase text-base mt-6 ">
                    INTERNATIONAL JOURNAL OF ADVANCED ENGINEERING

                </div>
                <div class="text-2xl text-bold mt-2 capitalize">
                    remote monitoring and face recognition security enabled smart home using IOT
                </div>
                <div class="mt-2">
                    <div class="inline-block mt-3">
                        <span class="p-2 mr-2 mt-5 text-xs bg-slate-300 rounded-lg" >
                            Image Processing
                        </span>
                        <span class="p-2 mr-2 text-xs bg-slate-300 rounded-lg" >
                            Internet of Things
                        </span>
                    </div>
                    <a href ="/remote-monitoring-and-face-recognition-security-enabled-smart-home-using-iot">
                        <span class="p-2 mt-4 sm:mt-0 pb-1 px-5 text-base border-2 float-right rounded-full cursor-pointer hover:bg-slate-300">
                            Read More
                        </span>
                    </a>
                </div>
            </div>

            <div class="card w-[300px] sm:w-[500px]">
                    <img src="@/static/projects_papers/music genre classification.jpg" class="w-full h-[300px] bg-white object-contain">
                <div class="uppercase text-base mt-6">
                    Updated Soon
                </div>
                <div class="text-2xl text-bold mt-2 capitalize">
                    nepali music genre classification
                </div>
                <div class="mt-2">
                    <div class="inline-block mt-3">
                        <span class="p-2 mr-2 text-xs bg-slate-300 rounded-lg" >
                            Data Mining
                        </span>
                        <span class="p-2 mr-2 text-xs bg-slate-300 rounded-lg" >
                            Unsupervised Learning
                        </span>
                        <span class="p-2 mr-2 text-xs bg-slate-300 rounded-lg" >
                            Melspectrogram
                        </span>
                        <span class="p-2 inline-block mt-5 mr-2 text-xs bg-slate-300 rounded-lg" >
                            Fast Fourier Transform
                        </span>
                    </div>
                    <a v-show="false" href ="/cbt-blockchain">
                        <span class="p-2 mt-4 sm:mt-0 pb-1 px-5 text-base border-2 float-right rounded-full cursor-pointer hover:bg-slate-300">
                            Read More
                        </span>
                    </a>
                </div>
            </div>
        </div>

    </div>
</template>

<style scoped>

.worklist{
    font-family: 'Poppins', sans-serif;
}

.card{
width: 300px;
}


@media (min-width: 350px) {
  .card{
    width: 325px;
  }
}


@media (min-width: 450px) {
  .card{
    width: 400px;
  }
}


@media (min-width: 6240px) {
  .card{
    width: 500px;
  }
}

</style>