
// import who1 from '../../assets/About/who1.jpg'
// import who2 from '../../assets/About/who2.jpg'
// import who3 from '../../assets/About/who4.jpg'

// export default function AboutMission() {
//   return (
//     // <!-- about us -->
//     // <!-- مهمتنا-->
// <section className="bg-gray-100">
//     <div className="container mx-auto py-16 px-4 sm:px-6 lg:px-8">
//         <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
//             <div className="max-w-lg">
//                 <h2 className="text-3xl font-bold text-yellow-500 mb-8 text-center">من نحن</h2>
//                 <p className="mt-4 text-gray-600 text-xl leading-8">
//                 نحن منصة مبتكرة تهدف إلى تسهيل حياتك من خلال تقديم خدمات صيانة وإصلاح الأجهزة المنزلية بكفاءة واحترافية. نعلم أن الأعطال المفاجئة في الأجهزة المنزلية قد تكون مزعجة وتؤثر على روتين حياتك اليومي، لذلك قمنا بإنشاء منصة متكاملة تربطك بأفضل الفنيين المهرة في مختلف المجالات.</p>
//                 <p className="mt-2 text-gray-600 text-xl">
//                 نتميز بكوننا حلقة وصل تجمع بين العملاء الذين يبحثون عن خدمات صيانة عالية الجودة والفنيين المحترفين الموثوقين الذين يملكون الخبرة والمهارة اللازمة لإنجاز المهام بسرعة وكفاءة. سواء كنت بحاجة إلى إصلاح الثلاجات، الغسالات، المكيفات، أو أي جهاز منزلي آخر، نحن هنا لتقديم الحلول المناسبة بأعلى معايير الجودة.
//                 </p>
//             </div>
//             <div className="mt-12 md:mt-0">
//                 <img src={who2} alt="About Us Image" className="object-cover rounded-lg shadow-md"/>

//             </div>
//         </div>
//     </div>
// </section>
//   )
// }
/////////////////////////////
export default function AboutMission() {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-12">
          
          {/* Content Section */}
          <div className="max-w-2xl">
            {/* Title */}
            <div className="mb-8">
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-3">
                <span className="text-yellow-500">من</span> نحن
              </h2>
              <div className="w-20 h-1 bg-yellow-500 rounded-full"></div>
            </div>

            {/* Content */}
            <div className="space-y-6 text-gray-700 leading-relaxed">
              <p className="text-lg">
                نحن منصة مبتكرة تهدف إلى تسهيل حياتك من خلال تقديم خدمات صيانة وإصلاح الأجهزة المنزلية بكفاءة واحترافية. نعلم أن الأعطال المفاجئة في الأجهزة المنزلية قد تكون مزعجة وتؤثر على روتين حياتك اليومي، لذلك قمنا بإنشاء منصة متكاملة تربطك بأفضل الفنيين المهرة في مختلف المجالات.
              </p>
              
              <p className="text-lg">
                نتميز بكوننا حلقة وصل تجمع بين العملاء الذين يبحثون عن خدمات صيانة عالية الجودة والفنيين المحترفين الموثوقين الذين يملكون الخبرة والمهارة اللازمة لإنجاز المهام بسرعة وكفاءة. سواء كنت بحاجة إلى إصلاح الثلاجات، الغسالات، المكيفات، أو أي جهاز منزلي آخر، نحن هنا لتقديم الحلول المناسبة بأعلى معايير الجودة.
              </p>
            </div>
          </div>

          {/* Image Section */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800" 
                alt="About Us" 
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Decorative Element */}
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-yellow-400 rounded-2xl -z-10 opacity-20"></div>
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-yellow-500 rounded-2xl -z-10 opacity-20"></div>
          </div>

        </div>
      </div>
    </section>
  );
}