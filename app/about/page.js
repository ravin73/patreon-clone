import Link from 'next/link';


const About = () => {
  return (
    <div className="container mx-auto px-6 md:px-8 py-12">
      <section className="text-center mb-10">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-400 mb-6">About Our Patreon Application</h1>
        <p className="text-lg text-gray-300">
          <Link href="/">
            <span className="font-extrabold text-transparent bg-gradient-to-r from-purple-500 to-blue-600 bg-clip-text">Patreon!</span>
          </Link>{" "}
          is a crowdfunding platform designed for creators to fund their projects with the support of their fans. It&apos;s a space where your fans can directly contribute to your creative endeavors by buying you a chai. Unlock the potential of your fanbase and bring your projects to life.
        </p>
      </section>

      <section className="bg-gray-800 p-6 rounded-lg shadow-md mb-12">
        <h2 className="text-2xl md:text-3xl font-semibold text-center mb-6">How It Works!</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex items-start gap-4">
            <img className="w-16 h-16 rounded-full" src="/group.gif" alt="Fans Want to Collaborate" />
            <div>
              <h3 className="text-xl font-semibold text-gray-200">Fans Want to Collaborate</h3>
              <p className="text-gray-300">Your fans are enthusiastic about collaborating with you on your projects.</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <img className="w-16 h-16 rounded-full" src="/coin.gif" alt="Support Through Chai" />
            <div>
              <h3 className="text-xl font-semibold text-gray-200">Support Through Chai</h3>
              <p className="text-gray-300">Receive support from your fans in the form of chai purchases, directly contributing to your project funding.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-2xl font-semibold text-gray-50 mb-4">Benefits for Creators</h2>
          <ul className="list-disc list-inside text-gray-200 space-y-2">
            <li>Direct financial support from your fanbase</li>
            <li>Engage with your fans on a more personal level</li>
            <li>Access to a platform tailored for creative projects</li>
          </ul>
        </div>
        <div>
          <h2 className="text-2xl font-semibold text-gray-50 mb-4">Benefits for Fans</h2>
          <ul className="list-disc list-inside text-gray-200 space-y-2">
            <li>Directly contribute to the success of your favorite creators</li>
            <li>Exclusive rewards and perks for supporting creators</li>
            <li>Be part of the creative process and connect with creators</li>
          </ul>
        </div>
      </section>

      <section className="bg-gray-800 p-6 rounded-lg shadow-md mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-semibold text-gray-50 mb-4">Benefits of Collaboration</h2>
          <ul className="list-disc list-inside text-gray-200 space-y-2">
            <li>Unlock new opportunities through collaboration with fellow creators</li>
            <li>Expand your network and reach a wider audience</li>
            <li>Combine skills and resources to create innovative projects</li>
          </ul>
        </div>
        <div>
          <h2 className="text-2xl font-semibold text-gray-50 mb-4">Community Engagement</h2>
          <ul className="list-disc list-inside text-gray-200 space-y-2">
            <li>Interact with a supportive community of like-minded individuals</li>
            <li>Receive valuable feedback and encouragement from peers</li>
            <li>Participate in discussions and events centered around your interests</li>
          </ul>
        </div>
      </section>

      <section className="mt-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-semibold text-gray-50 mb-4">Access to Resources</h2>
            <ul className="list-disc list-inside text-gray-200 space-y-2">
              <li>Gain access to resources such as tutorials, templates, and tools</li>
              <li>Receive guidance and mentorship from experienced creators</li>
              <li>Stay updated on industry trends and best practices</li>
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-semibold text-gray-50 mb-4">Recognition and Exposure</h2>
            <ul className="list-disc list-inside text-gray-200 space-y-2">
              <li>Showcase your work to a global audience and gain recognition</li>
              <li>Feature in promotional materials and campaigns</li>
              <li>Build your portfolio and increase your credibility as a creator</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-gray-800 p-6 rounded-lg shadow-md mt-12">
        <h2 className="text-2xl font-semibold text-gray-50 mb-4">Supportive Community</h2>
        <ul className="list-disc list-inside text-gray-300 space-y-2">
          <li>Join a community that values creativity, diversity, and inclusivity</li>
          <li>Find encouragement and inspiration from fellow members</li>
          <li>Collaborate on projects and share resources for mutual growth</li>
        </ul>
      </section>
    </div>
  );
};

export default About;


export const metadata = {
    title: "About - Patreon",
}

