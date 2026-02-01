const TOOLS = [
  { name: 'VS Code', icon: './assets/vscode.png' },
  { name: 'Firebase', icon: './assets/firebase.png' },
  { name: 'MongoDB', icon: './assets/mongodb.png' },
  { name: 'Figma', icon: './assets/figma.png' },
  { name: 'Git', icon: './assets/git.png' },
]

const INFO_CARDS = [
  {
    title: 'Languages',
    iconLight: './assets/code-icon.png',
    iconDark: './assets/code-icon-dark.png',
    description: 'HTML, CSS, JavaScript, React, Next.js',
  },
  {
    title: 'Education',
    iconLight: './assets/edu-icon.png',
    iconDark: './assets/edu-icon-dark.png',
    description: 'B.Tech in Computer Science',
  },
  {
    title: 'Projects',
    iconLight: './assets/project-icon.png',
    iconDark: './assets/project-icon-dark.png',
    description: 'Built more than 5 projects',
  },
]

export default function About() {
  return (
    <section id="about" className="w-full px-[12%] py-10 scroll-mt-20">
      {/* Header */}
      <header className="text-center">
        <h4 className="mb-2 text-lg font-Ovo">Introduction</h4>
        <h2 className="text-5xl font-Ovo">About me</h2>
      </header>

      <div className="my-20 flex flex-col lg:flex-row items-center gap-20">
        {/* Image Section with Rotating Badge */}
        <div className="relative mx-auto max-w-max">
          <img
            src="./assets/user-image.png"
            alt="User"
            className="w-64 sm:w-80 rounded-3xl"
          />

          {/* The Circular Badge Container */}
          <div className="absolute right-0 bottom-0 w-1/2 aspect-square translate-x-1/4 translate-y-1/3 rounded-full bg-white shadow-[0_4px_55px_rgba(149,0,162,0.15)] flex items-center justify-center overflow-hidden">
            {/* Rotating Circular Text */}
            <img
              src="./assets/circular-text.png"
              alt="Front-End Web Developer"
              className="w-full animate-spin-slow" 
            />
            {/* Stationary Center Icon */}
            <img
              src="./assets/dev-icon.png"
              alt="Icon"
              className="absolute w-1/4"
            />
          </div>
        </div>

        {/* Content Section */}
        <div className="flex-1">
          <p className="mb-10 max-w-2xl font-Ovo text-gray-700 dark:text-white/80">
            I am an experienced Frontend Developer with over a decade of
            professional expertise. I have collaborated with prestigious
            organizations and contributed to their growth and success.
          </p>

          {/* Info Cards */}
          <ul className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl">
            {INFO_CARDS.map((item) => (
              <li
                key={item.title}
                className="rounded-xl border border-gray-300 dark:border-white/30 p-6 cursor-pointer transition-all duration-500 hover:-translate-y-1 hover:bg-lightHover dark:hover:bg-darkHover/50"
              >
                <img
                  src={item.iconLight}
                  alt=""
                  className="w-7 mt-3 dark:hidden"
                />
                <img
                  src={item.iconDark}
                  alt=""
                  className="w-7 mt-3 hidden dark:block"
                />

                <h3 className="my-4 font-semibold text-gray-700 dark:text-white">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-white/80">
                  {item.description}
                </p>
              </li>
            ))}
          </ul>

          {/* Tools Section */}
          <h4 className="my-6 font-Ovo text-gray-700 dark:text-white/80">
            Tools I use
          </h4>

          <ul className="flex items-center gap-3 sm:gap-5">
            {TOOLS.map((tool) => (
              <li
                key={tool.name}
                className="flex w-12 sm:w-14 aspect-square items-center justify-center rounded-lg border border-gray-300 dark:border-white/30 transition-transform duration-500 hover:-translate-y-1"
              >
                <img src={tool.icon} alt={tool.name} className="w-5 sm:w-7" />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
