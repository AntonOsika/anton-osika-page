import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-4">Anton Osika</h1>
      <p className="text-xl mb-8">Solving neglected problems with a science and engineering mindset.</p>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">About Me</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Grew up in Stockholm, Sweden, which is a great place but unfortunately not as dense with high-agency people as I realised other places are</li>
          <li>Role models are Feynman and similar Physicists that came after him</li>
          <li>I like solving neglected problems</li>
          <li>Founders Pledge member</li>
          <li>Helped build Sana Labs, Depict.ai, Lovable</li>
          <li>Considered going into AI Safety way back before it was "cool", but startups are too alluring</li>
        </ul>
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
