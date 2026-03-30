const plans = [
  {
    name: 'Starter',
    subtitle: 'Perfect for getting started',
    price: 0,
    period: 'Month',
    features: ['Access to 10 free tools', 'Basic templates', 'Community support', '1 project per month'],
    button: 'Get Started Free',
    highlighted: false,
  },
  {
    name: 'Pro',
    subtitle: 'Best for professionals',
    price: 29,
    period: 'Month',
    features: ['Access to all premium tools', 'Unlimited templates', 'Priority support', 'Unlimited projects', 'Cloud sync', 'Advanced analytics'],
    button: 'Start Pro Trial',
    highlighted: true,
  },
  {
    name: 'Enterprise',
    subtitle: 'For teams and businesses',
    price: 99,
    period: 'Month',
    features: ['Everything in Pro', 'Team collaboration', 'Custom integrations', 'Dedicated support', 'SLA guarantee', 'Custom branding'],
    button: 'Contact Sales',
    highlighted: false,
  },
]

const Pricing = () => {
  return (
    <section className="py-16 px-10">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-900">Simple, Transparent Pricing</h2>
        <p className="text-gray-500 text-sm mt-2">
          Choose the plan that fits your needs. Upgrade or downgrade anytime.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10 items-stretch">
          {plans.map(plan => (
            <div
              key={plan.name}
              className={`rounded-2xl p-8 text-left relative flex flex-col h-full ${
                plan.highlighted
                  ? 'bg-purple-600 text-white shadow-xl'
                  : 'border border-gray-200'
              }`}
            >
              {plan.highlighted && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-yellow-400 text-gray-900 text-xs font-bold px-4 py-1 rounded-full">
                  Most Popular
                </div>
              )}

              <h3 className={`font-bold text-xl ${plan.highlighted ? 'text-white' : 'text-gray-900'}`}>
                {plan.name}
              </h3>
              <p className={`text-sm mt-1 ${plan.highlighted ? 'text-purple-200' : 'text-gray-500'}`}>
                {plan.subtitle}
              </p>

              <div className="mt-4">
                <span className={`text-4xl font-bold ${plan.highlighted ? 'text-white' : 'text-gray-900'}`}>
                  ${plan.price}
                </span>
                <span className={`text-sm ${plan.highlighted ? 'text-purple-200' : 'text-gray-500'}`}>
                  /{plan.period}
                </span>
              </div>

              <ul className="mt-6 space-y-3 flex-1">
                {plan.features.map((feature, index) => (
                  <li key={index} className={`flex items-center gap-2 text-sm ${plan.highlighted ? 'text-purple-100' : 'text-gray-600'}`}>
                    <span className={plan.highlighted ? 'text-white' : 'text-purple-600'}>✓</span>
                    {feature}
                  </li>
                ))}
              </ul>

              <button
                className={`w-full mt-8 py-3 rounded-full text-sm font-medium ${
                  plan.highlighted
                    ? 'bg-white text-purple-600 hover:bg-purple-50'
                    : 'bg-purple-600 text-white hover:bg-purple-700'
                }`}
              >
                {plan.button}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Pricing