function Pricing() {
  return (
    <>
      <div class="bg-white">
        <div class="container px-6 py-8 md:py-20 mx-auto">
          <div class="flex flex-col items-center justify-center space-y-8 lg:-mx-4 lg:flex-row lg:items-stretch lg:space-y-0">
            <div class="flex flex-col w-full max-w-sm p-8 space-y-8 text-center bg-white border-2 border-danger-red shadow-2xl shadow-ecto-plasm-2 rounded-lg lg:mx-4">
              <div class="flex-shrink-0">
                <h2 class="price-heading text-dodger-blue">Casual</h2>
              </div>
              <div class="flex-shrink-0">
                <span class="pt-2 text-4xl font-bold text-gray-800 uppercase">
                  Free
                </span>
              </div>
              <ul class="flex-1 space-y-4">
                <li>Up to 5 projects</li>
                <li>Up to 10 collaborators</li>
                <li>2Gb of storage</li>
              </ul>

              <button class="btn-smoke">Start free</button>
            </div>

            <div class="flex flex-col w-full max-w-sm p-8 space-y-8 text-center bg-white border-2 border-jet-black shadow-2xl shadow-ecto-plasm-0 rounded-lg lg:mx-4">
              <div class="flex-shrink-0">
                <h2 class="price-heading text-dodger-blue">Professional</h2>
              </div>
              <div class="flex-shrink-0">
                <span class="pt-2 text-4xl font-bold text-gray-800 uppercase">
                  $24.90
                </span>
                <span class="text-dark-charcoal">/month</span>
              </div>
              <ul class="flex-1 space-y-4">
                <li>Up to 10 projects</li>
                <li>Up to 20 collaborators</li>
                <li>10Gb of storage</li>
                <li>Real-time collaborations</li>
              </ul>

              <button class="btn-dodger-blue">Start free trial</button>
            </div>

            <div class="flex flex-col w-full max-w-sm p-8 space-y-8 text-center bg-white border-2 border-blue-700 shadow-2xl shadow-ecto-plasm-3 rounded-lg lg:mx-4">
              <div class="flex-shrink-0">
                <h2 class="price-heading text-dodger-blue">Expert</h2>
              </div>
              <div class="flex-shrink-0">
                <span class="pt-2 text-4xl font-bold text-gray-800 uppercase">
                  $49.90
                </span>
                <span class="text-dark-charcoal">/month</span>
              </div>
              <ul class="flex-1 space-y-4">
                <li>Unlimited projects</li>
                <li>Unlimited collaborators</li>
                <li>Unlimited storage</li>
                <li>Real-time collaborations</li>
                <li>24x7 Support</li>
              </ul>

              <button class="btn-dodger-blue">Start free trial</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default Pricing
