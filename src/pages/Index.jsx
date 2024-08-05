import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-4">Anton Osika</h1>
      <p className="text-xl mb-8">I'm an impact focused builder. I like to reason myself to the next action from first principles.</p>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">A few things about me</h2>
        <p className="mb-4">Hey there! I'm Anton, and I've got a bit of a story to share with you.</p>
        <p className="mb-4">I grew up in Stockholm, Sweden. It's a fantastic place, but as I've traveled, I've realized it's not quite as packed with high-agency folks as some other spots around the globe.</p>
        <p className="mb-4">When it comes to role models, I'm all about Feynman and the brilliant physicists who followed in his footsteps. Their approach to problem-solving and curiosity about the world really resonates with me.</p>
        <p className="mb-4">Speaking of problem-solving, I've got a bit of a thing for tackling neglected issues. You know, the ones that others might overlook but could have a big impact if addressed.</p>
        <p className="mb-4">I'm proud to be a Founders Pledge member, aligning my work with my values for long-term impact.</p>
        <p className="mb-4">Over the years, I've had the privilege of helping build some exciting ventures: Sana Labs, Depict.ai, and Lovable. Each one has been a unique journey and learning experience.</p>
        <p className="mb-4">Here's a fun fact: I seriously considered diving into AI Safety way back before it became the hot topic it is today. But you know how it goes - the allure of startups was just too strong to resist!</p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Beliefs</h2>
        <p className="italic mb-4">This is a selection of my beliefs over time:</p>
        <ul className="space-y-4">
          <li>
            <strong>2024:</strong> Soon Agents will work, everything else is a footnote
          </li>
          <li>
            <strong>2023 June:</strong> There is a big opportunity to create value, and reduce risk, by focusing on evals for agents and LLMs
          </li>
          <li>
            <strong>2023 March:</strong> LLMs can take actions, let's make them into "agents"
          </li>
          <li>
            <strong>2023 February:</strong> AI will make price of software go to zero
          </li>
          <li>
            <strong>2022:</strong> AGI is here soon, let's load up on semiconductor stocks
          </li>
          <li>
            <strong>2019:</strong> Tesla stock is crazy cheap for only being such a strong luxury brand (+ has much more potential)
          </li>
          <li>
            <strong>2016:</strong> Long term future, we will live in a compute economy, let's long NVIDIA.
          </li>
          <li>
            <strong>2014:</strong> Ethereum might be big, let's buy 15k as a 2x arbitrage from Mircea Eliade
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Interests</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Future of humanity</li>
          <li>Best practices for building products</li>
          <li>Science+Engineering-mindset to design mechanisms for a maximally positive-sum society</li>
        </ul>
      </section>

      <Link to="/compliments" className="text-blue-600 hover:underline">Things people compliment me for</Link>
    </div>
  );
};

export default Index;
