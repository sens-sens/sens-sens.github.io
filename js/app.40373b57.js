(function(){"use strict";var a={8561:function(a,e,t){var i=t(9242),s=t(3396);function d(a,e,t,i,d,o){const n=(0,s.up)("AbstarctContent");return(0,s.wg)(),(0,s.j4)(n)}var o=t(7795),n=t(4287);const r={apiKey:"AIzaSyAF8JzJj-YrPtypdTCSV5zkqW9HBlDYGOo",authDomain:"angrybird-sih.firebaseapp.com",projectId:"angrybird-sih",storageBucket:"angrybird-sih.appspot.com",messagingSenderId:"1015876140597",appId:"1:1015876140597:web:d2233a4d00ba9c518cfb7c"},c=(0,o.ZF)(r),l=(0,n.ad)(c);var v=t(536),b=t.p+"img/drone.09c66976.jpeg",m=t.p+"img/camera.9133f846.jpg",h=t.p+"img/rpi.f39daa03.jpg",u=t.p+"img/coral.f0ac9f8c.jpg",p=t.p+"img/payload.103dd440.jpg",g=t.p+"img/1.7874d2c6.jpeg",f=t.p+"img/2.9ea15a98.jpeg",y=t.p+"img/4.50e1495f.jpeg",w=t.p+"img/5.e71581f1.jpeg",I=t.p+"img/6.646da0c2.jpeg",T=t.p+"img/7.95fbdf3f.jpeg",k=t.p+"img/cv.c68598d3.png";const A=a=>((0,s.dD)("data-v-7db635ac"),a=a(),(0,s.Cn)(),a),O={class:"content"},j=(0,s.uE)('<div class="center title s-40" style="text-decoration:underline;" data-v-7db635ac>SIH 1469 </div><div class="center title s-20" data-v-7db635ac> Rescue Wings : Innovating Disaster Response with AI Drones </div><div class="divider" data-v-7db635ac></div><div class="single-block" data-v-7db635ac><div class="sub-title s-40" data-v-7db635ac>ABSTRACT:</div><div class="text s-20" data-v-7db635ac> The drone in this project serves as a critical component for disaster response and relief efforts by providing aerial surveillance, object detection, and payload delivery capabilities. The drone&#39;s primary role is to provide aerial surveillance of disaster-stricken areas.It captures images and videos from an elevated perspective, covering a larger area more efficiently than ground-based teams.The drone is equipped with cameras and an onboard AI system for object detection.It autonomously identifies and tracks human beings in the disaster area. <br data-v-7db635ac><br data-v-7db635ac><div class="image-box" data-v-7db635ac><img src="'+b+'" alt="" data-v-7db635ac></div><br data-v-7db635ac> When a human target is detected, the drone can deliver essential payloads like food, clothing, or rescue tools to the location of the detected individual.The drone can communicate with a central command center or rescue teams, providing real-time information about detected humans.It can trigger automatic alarms or alerts when a human is identified, enabling rapid response. </div></div><div class="sub-title s-40" data-v-7db635ac>DEMO:</div><div class="s-20" data-v-7db635ac></div>',6),x=A((()=>(0,s._)("div",{class:"center"},[(0,s._)("iframe",{width:"790",height:"495",autoplay:"1",mute:"1",frameBorder:"0",src:"https://www.youtube.com/embed/wq11GlcNCLU"},"\n")],-1))),P=(0,s.uE)('<div class="single-block" data-v-7db635ac><div class="sub-title s-40" data-v-7db635ac>WORKING OF THE DRONE:</div><div class="text s-20" data-v-7db635ac> The drone takes off from a designated location, usually near the disaster-affected area.It begins surveying the area by capturing images and videos through its onboard cameras.The captured visual data is processed in real-time using the onboard AI system.The AI algorithm employs deep learning techniques to recognize and track human beings within the images and videos.Once a human target is identified, the drone&#39;s software tracks their position and movements.It autonomously navigates towards the target, ensuring a safe and optimal approach. <br data-v-7db635ac><br data-v-7db635ac> Based on the situation and available resources, the system decides whether to deliver a payload to the detected human.If the decision is made to deliver a payload, the drone calculates the precise release point.It activates the payload dropping mechanism at the right moment to release the payload near the detected human.Throughout its operation, the drone continuously monitors its own status, battery life, and the environment for obstacles and hazards.It follows predefined safety protocols and can initiate emergency procedures if necessary. </div></div><div class="divider" data-v-7db635ac></div><div class="center title s-40" data-v-7db635ac> COMPONENTS </div><div class="single-block" data-v-7db635ac><div class="sub-title s-40" data-v-7db635ac>CAMERA:</div><div class="text s-20" data-v-7db635ac> Cameras play a crucial role in capturing images and videos of the disaster-stricken area, which are then processed by the drone&#39;s onboard AI system for object detection and tracking. <br data-v-7db635ac><br data-v-7db635ac> The camera serves as the &quot;eyes&quot; of the drone, capturing visual data from its surroundings. It is responsible for providing real-time images and videos of the disaster area, allowing the onboard AI system to analyze the data and identify humans for rescue operations. <br data-v-7db635ac><br data-v-7db635ac><div class="image-box" data-v-7db635ac><img src="'+m+'" alt="" data-v-7db635ac></div><br data-v-7db635ac> The images and videos captured by the camera are processed in real-time by the onboard AI system.The AI algorithm uses the visual data to identify and track objects, specifically focusing on recognizing humans.Object recognition techniques, such as deep learning-based neural networks, are applied to the camera&#39;s images and video frames.The AI system analyzes the data to detect and track the position and movements of humans within the field of view. The results of the object detection and tracking process are communicated to the drone&#39;s flight control system and potentially to a central command center.This communication allows the drone to make decisions regarding payload delivery and trigger alarms or alerts as needed. </div></div><div class="single-block" data-v-7db635ac><div class="sub-title s-40" data-v-7db635ac>RASPBERRY PI:</div><div class="text s-20" data-v-7db635ac> The Raspberry Pi communicates with other components of the drone, including flight controllers and payload release mechanisms.It also sends data and updates to the drone&#39;s telemetry system.If the AI algorithm detects a human in distress, the Raspberry Pi can trigger automatic alarms or alerts.It communicates the information to central command centers or emergency response teams. <br data-v-7db635ac><br data-v-7db635ac><div class="image-box" data-v-7db635ac><img src="'+h+'" alt="" data-v-7db635ac></div><br data-v-7db635ac> Based on the AI&#39;s findings, the Raspberry Pi makes real-time decisions on how to navigate the drone, including adjusting its position to monitor or approach detected humans.When the decision is made to deliver a payload, the Raspberry Pi calculates the precise release point and coordinates payload deployment.The Raspberry Pi communicates with the drone&#39;s flight control system to execute navigation commands.It also communicates with telemetry systems for status updates and emergency response coordination. <br data-v-7db635ac><br data-v-7db635ac> The Raspberry Pi is the brain of the drone, responsible for processing and analyzing visual data, making autonomous decisions, and communicating with various drone components and external systems. Its computational power and flexibility make it a critical component for the successful operation of the drone in this project. </div></div><div class="single-block" data-v-7db635ac><div class="sub-title s-40" data-v-7db635ac>AI HARDWARE (GOOGLE CORAL): </div><div class="text s-20" data-v-7db635ac> The AI hardware typically includes a dedicated processing unit, such as a Graphics Processing Unit (GPU) or an AI-specific chip (e.g., NVIDIA Jetson or Google Coral).These processing units are optimized for running AI models efficiently and quickly.AI hardware is often designed for edge computing, which means that AI algorithms can be run directly on the drone without the need for cloud-based processing.This enables real-time decision-making and reduces latency, which is crucial in disaster response scenarios. <br data-v-7db635ac><br data-v-7db635ac><div class="image-box" data-v-7db635ac><img src="'+u+'" alt="" data-v-7db635ac></div><br data-v-7db635ac> Google Coral is integrated into the drone&#39;s onboard computing system. This typically involves connecting it to the Raspberry Pi or another processor board via USB or PCIe.Machine learning models, such as those for object detection and recognition, are deployed on Google Coral. These models are usually trained using deep learning frameworks like TensorFlow or PyTorch. <br data-v-7db635ac><br data-v-7db635ac> It allows the drone to process visual data from its cameras quickly, enabling real-time object detection and recognition. This capability enhances the drone&#39;s decision-making and overall effectiveness in disaster response scenarios. </div></div><div class="single-block" data-v-7db635ac><div class="sub-title s-40" data-v-7db635ac>PAYLOAD DROPPING MECHANISM: </div><div class="text s-20" data-v-7db635ac> The payload mechanism using a servo motor is responsible for releasing payloads (such as food, clothing, or rescue tools) near a detected human. Here&#39;s how the payload mechanism with a servo motor works:The payload mechanism serves as the delivery system on the drone. It is responsible for precisely releasing payloads at the designated location to assist the detected human. The servo motor plays a critical role in controlling the release process. <br data-v-7db635ac><br data-v-7db635ac><div class="image-box" data-v-7db635ac><img src="'+p+'" alt="" data-v-7db635ac></div></div></div><div class="divider" data-v-7db635ac></div><div class="center title s-40" data-v-7db635ac> PROTOTYPE </div><div class="single-block" data-v-7db635ac><div class="sub-title s-40" data-v-7db635ac>ADMIN PANEL: </div><div class="text s-20" data-v-7db635ac> The admin panel serves as the user interface for the rescue team to control the drone&#39;s operations, monitor its status, and receive real-time information. <br data-v-7db635ac><br data-v-7db635ac> The admin panel is a web-based or application-based interface accessible to authorized users. It allows rescue team members to input commands, set mission parameters, and monitor the drone&#39;s activities. The panel provides options such as setting destination coordinates, initiating missions, and viewing live drone feeds. <br data-v-7db635ac><br data-v-7db635ac><div class="image-grid" data-v-7db635ac><div class="image-box-prototype" data-v-7db635ac><img src="'+g+'" alt="" data-v-7db635ac></div><div class="image-box-prototype" data-v-7db635ac><img src="'+f+'" alt="" data-v-7db635ac></div><div class="image-box-prototype" data-v-7db635ac><img src="'+y+'" alt="" data-v-7db635ac></div><div class="image-box-prototype" data-v-7db635ac><img src="'+w+'" alt="" data-v-7db635ac></div><div class="image-box-prototype" data-v-7db635ac><img src="'+I+'" alt="" data-v-7db635ac></div><div class="image-box-prototype" data-v-7db635ac><img src="'+T+'" alt="" data-v-7db635ac></div></div></div></div><div class="divider" data-v-7db635ac></div><div class="title s-40 center" data-v-7db635ac> TECHNOLOGY STACK </div><div class="single-block" data-v-7db635ac><div class="sub-title s-40" data-v-7db635ac>TENSORFLOW: </div><div class="text s-20" data-v-7db635ac> We have used TensorFlow to train a Convolutional Neural Network (CNN) model for human detection. TensorFlow&#39;s object detection API can be particularly useful for this task. Once trained, the model can run on the drone&#39;s processor to detect humans in real-time. </div></div><div class="single-block" data-v-7db635ac><div class="sub-title s-40" data-v-7db635ac>PYTHON: </div><div class="text s-20" data-v-7db635ac> Python is the primary language for developing AI models using TensorFlow, implementing the drone&#39;s control and navigation algorithms, and creating backend scripts for communication between the admin panel and the drone&#39;s control system. </div></div><div class="single-block" data-v-7db635ac><div class="sub-title s-40" data-v-7db635ac>OPENCV: </div><div class="text s-20" data-v-7db635ac> OpenCV can be integrated into the payload mechanism control system to precisely control the release of payloads. It can also be used to preprocess camera images to improve object detection accuracy. We can use OpenCV for perspective correction when detecting humans from a slanted angle. </div><div class="s-40" data-v-7db635ac></div><div class="image-box" data-v-7db635ac><img src="'+k+'" alt="" data-v-7db635ac></div></div><div class="single-block" data-v-7db635ac><div class="sub-title s-40" data-v-7db635ac>FIREBASE: </div><div class="text s-20" data-v-7db635ac> Firebase can be used to store mission data, such as location coordinates and mission status. It can also facilitate real-time communication between the admin panel and the drone, ensuring that commands and alerts are delivered promptly. </div></div><div class="single-block" data-v-7db635ac><div class="sub-title s-40" data-v-7db635ac>FLUTTER: </div><div class="text s-20" data-v-7db635ac> A User-friendly admin panel interface is built using Flutter, allowing the rescue team to control the drone, input locations, and receive alerts and notifications through a desktop app. This interface can interact with the drone&#39;s control system via APIs. </div></div>',17),C=[j,x,P];function D(a,e,t,i,d,o){return(0,s.wg)(),(0,s.iD)("div",O,C)}var R={name:"AbstarctContent"},S=t(89);const E=(0,S.Z)(R,[["render",D],["__scopeId","data-v-7db635ac"]]);var N=E,F=t(4161),B={name:"App",data(){return{id:"",location_url:"",locationData:null}},methods:{async updateData(){await(0,n.r7)((0,n.JU)(l,"dm",this.id),{end:(0,n.Bt)()})},async getData(){null==this.locationData&&(null==localStorage.getItem("data")?(await F.Z.get("https://api.ipify.org/?format=json").then((a=>{this.location_url="https://ipapi.co/"+a.data["ip"]+"/json/"})),await F.Z.get(this.location_url).then((a=>{this.locationData=a.data,localStorage.setItem("data",JSON.stringify(this.locationData)),this.id=(0,v.Z)(),localStorage.setItem("uuid",this.id.toString())}))):(this.locationData=JSON.parse(localStorage.getItem("data")),this.id=localStorage.getItem("uuid").toString())),await(0,n.pl)((0,n.JU)(l,"dm",this.id),{begin:(0,n.Bt)(),end:(0,n.Bt)(),ip:this.locationData["ip"],city:this.locationData["city"],state:this.locationData["region"]}),setInterval(this.updateData,1e4)}},created(){this.getData()},components:{AbstarctContent:N}};const G=(0,S.Z)(B,[["render",d]]);var z=G;(0,i.ri)(z).mount("#app")}},e={};function t(i){var s=e[i];if(void 0!==s)return s.exports;var d=e[i]={exports:{}};return a[i].call(d.exports,d,d.exports,t),d.exports}t.m=a,function(){var a=[];t.O=function(e,i,s,d){if(!i){var o=1/0;for(l=0;l<a.length;l++){i=a[l][0],s=a[l][1],d=a[l][2];for(var n=!0,r=0;r<i.length;r++)(!1&d||o>=d)&&Object.keys(t.O).every((function(a){return t.O[a](i[r])}))?i.splice(r--,1):(n=!1,d<o&&(o=d));if(n){a.splice(l--,1);var c=s();void 0!==c&&(e=c)}}return e}d=d||0;for(var l=a.length;l>0&&a[l-1][2]>d;l--)a[l]=a[l-1];a[l]=[i,s,d]}}(),function(){t.n=function(a){var e=a&&a.__esModule?function(){return a["default"]}:function(){return a};return t.d(e,{a:e}),e}}(),function(){t.d=function(a,e){for(var i in e)t.o(e,i)&&!t.o(a,i)&&Object.defineProperty(a,i,{enumerable:!0,get:e[i]})}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(a){if("object"===typeof window)return window}}()}(),function(){t.o=function(a,e){return Object.prototype.hasOwnProperty.call(a,e)}}(),function(){t.p="sens-sens.github.io/"}(),function(){var a={143:0};t.O.j=function(e){return 0===a[e]};var e=function(e,i){var s,d,o=i[0],n=i[1],r=i[2],c=0;if(o.some((function(e){return 0!==a[e]}))){for(s in n)t.o(n,s)&&(t.m[s]=n[s]);if(r)var l=r(t)}for(e&&e(i);c<o.length;c++)d=o[c],t.o(a,d)&&a[d]&&a[d][0](),a[d]=0;return t.O(l)},i=self["webpackChunkangrybird_abstract"]=self["webpackChunkangrybird_abstract"]||[];i.forEach(e.bind(null,0)),i.push=e.bind(null,i.push.bind(i))}();var i=t.O(void 0,[998],(function(){return t(8561)}));i=t.O(i)})();
//# sourceMappingURL=app.40373b57.js.map