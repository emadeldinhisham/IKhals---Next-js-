export default function IndustrialBackground(){

return(

<div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">

{/* LIGHT INDUSTRIAL GRID */}

<div className="absolute inset-0 opacity-30
bg-[linear-gradient(90deg,rgba(0,0,0,0.04)_1px,transparent_1px)]
bg-[size:80px_80px]" />

{/* SOFT INDUSTRIAL GLOW */}

<div className="
absolute
top-1/2
left-1/2
-translate-x-1/2
-translate-y-1/2
w-[700px]
h-[700px]
bg-gradient-to-r
from-blue-400/10
to-yellow-400/10
blur-[200px]
rounded-full
"/>

</div>

)

}