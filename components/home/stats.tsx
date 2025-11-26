import { Users, FileCheck, Star } from "lucide-react"

const stats = [
  {
    icon: Users,
    value: "6000+",
    label: "Policy Holders",
  },
  {
    icon: FileCheck,
    value: "600+",
    label: "Claims Served",
  },
  {
    icon: Star,
    value: "99%",
    label: "Satisfaction Rate",
  },
]

export function Stats() {
  return (
    <section className="py-16 bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 rounded-full mb-4">
                <stat.icon className="w-8 h-8 text-white" />
              </div>
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">{stat.value}</div>
              <div className="text-white/80 text-lg">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
